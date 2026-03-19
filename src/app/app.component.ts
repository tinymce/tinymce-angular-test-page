import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generateConfig } from './configs/config';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { full } from './snippets/snippets';

const key = '451hc4rk1hb0l77jr4loyiutfx7k9fs0decaxvfma65mwulu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: TINYMCE_SCRIPT_SRC,
    useValue: `https://cdn.staging.tiny.cloud/1/451hc4rk1hb0l77jr4loyiutfx7k9fs0decaxvfma65mwulu/tinymce/8-testing/tinymce.min.js`,
  }],
  standalone: false
})
export class AppComponent {
  title = 'tinymce-angular-test-page';

  public channel = '8-dev';
  public baseUrl = window.location.href.indexOf('?') > 0 ? window.location.href.substring(0, window.location.href.indexOf('?')) : window.location.href;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('setting channel to :', params['channel']);
      this.channel = params['channel'] || '8-dev';
    });
  }

  public ngOnInit(): void {
    console.log('init wrapper obj to channel: ', this.channel);
    const params = new URLSearchParams(window.location.search);
    this.channel = params.get('channel') || '8-dev';
    console.log('[init] setting channel to: ', this.channel);
  }
  public ngOnDestroy(): void {
    console.log('destroying obj');
  }

  public snippets = {
    full
  }

  public configurations = {
    classicConf: generateConfig({ excludePlugins: ['tinydrive', 'uploadcare']}),
    inlineConf: generateConfig({ excludePlugins: ['tinydrive', 'editimage', 'image' ], overrideConfig: { inline: true }})
  }

  public channels = [
    { name: '8 Development', value: '8-dev' },
    { name: '8 Testing', value: '8-testing' },
    { name: '8 Stable', value: '8-stable' },
    { name: '7 Development', value: '7-dev' },
    { name: '7 Testing', value: '7-testing' },
    { name: '7 Stable', value: '7-stable' },
    { name: '6 Development', value: '6-dev' },
    { name: '6 Testing', value: '6-testing' },
    { name: '6 Stable', value: '6-stable' },
  ];
}

@Component({
  selector: 'tiny-test',
  template: `
  <div style="margin: 24px 0px">
    <h2>{{ title }}</h2>
    <editor [apiKey]="apiKey" [cloudChannel]="channel" [initialValue]="initialValue" [init]="init"></editor>
  </div>
  `,
  standalone: false
})
export class TinyComponent {
  @Input() public config = '';
  @Input() public snippet = '';
  @Input() public title = 'Sample';
  @Input() public channel: any = '8-dev';
  public init: any = {};
  public initialValue = '';

  public apiKey = key;

  public ngOnInit(): void {
    console.log('loading inner', this.channel);
    this.init = initFromConf(this.config);
    this.initialValue = this.snippet;
    console.log(this.snippet);
  }
}

/**
 * Convet a config into the init parameter
 * @param {string} stringConf config to parse
 * @returns {any} Hopefully the RawEditorSettings object
 */
const initFromConf = (conf: any) => {
  let next  = {};
  if (typeof conf === 'object') {
    next = {...conf}
  } else {
    try {
      next = Function('"use strict";return (' + conf + ')')();
    } catch (err) {
      stop;
      console.error('failed to parse configuration: ', err);
    }
  }
  return next;
}
