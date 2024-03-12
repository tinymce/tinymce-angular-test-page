import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { c1 as classicConf,
  c2 as inlineConf,
  c3 as quickbarsConf,
  c4 as bottoolbarConf,
  c5 as resizeContent } from './configs/config';

import {basic, full, template} from './snippets/snippets';

const key = 'b1g4d59rwwqxx1vj7mci23rjj8ubgb46i4xsio6ieig6fkps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tinymce-angular-test-page';

  public channel = '7-dev';
  public baseUrl = window.location.href.indexOf('?') > 0 ? window.location.href.substring(0, window.location.href.indexOf('?')) : window.location.href;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('setting channel to :', params['channel']);
      this.channel = params['channel'] || '7-dev';
    });
  }

  public ngOnInit(): void {
    console.log('init wrapper obj to channel: ', this.channel);
    const params = new URLSearchParams(window.location.search);
    this.channel = params.get('channel') || '7-dev';
    console.log('[init] setting channel to: ', this.channel);
  }
  public ngOnDestroy(): void {
    console.log('destroying obj');
  }

  public snippets = {
    basic,
    full,
    template
  }

  public configurations = {
    classicConf,
    inlineConf,
    quickbarsConf,
    bottoolbarConf,
    resizeContent
  }

  public channels = [
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
  <div>
    <h2>{{ title }}</h2>
    <editor [apiKey]="apiKey" [cloudChannel]="channel" [initialValue]="initialValue" [init]="init" ></editor>
  </div>
  `,
})
export class TinyComponent {
  @Input() public config = '';
  @Input() public snippet = '';
  @Input() public title = 'Sample';
  @Input() public channel = '7-dev';
  public init: any = {};
  public initialValue = '';

  public apiKey = key;

  public ngOnInit(): void {
    console.log('loading inner', this.channel);
    this.init = initFromConf(this.config);
    this.initialValue = this.snippet;
    //
    console.log(this.snippet);
  }
}

const configWrapRe = /^\s*\(\s*function\s*\(\s*\)\s*\{\s*return\s*([\s\S]*);\s*\}\s*\)\s*\(\s*\)\s*;\s*$/;

/**
 * Escape text to make HTML.
 * @param {string} text text to escape as HTML.
 * @returns the text with special characters escaped.
 */
const escapeHtml = (text: any) => {
  return text.replaceAll(/&/g, '&amp;').replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;').replaceAll(/"/g, '&quot;').replaceAll(/'/g, '&#39;');
}

/**
 * Unwraps a config.
 * @param {string} config a config with a function wrapping it to make it easy to eval.
 * @returns {string} the unwrapped config.
 */
const unwrapConfig = (config: string) => {
  const m = configWrapRe.exec(config);
  return m !== null ? m[1] : config;
}

/**
 * Process a snippet and insert the contained variables.
 * @param {string} snippet the HTML snippet with possible comment variables.
 * @param {string} title the title.
 * @param {string} config the config.
 * @returns {string} the snippet with variables inserted.
 * Not too sure what this is doing, snippet is working fine without it.
 */
const replaceSnippetVars = (snippet: any, title: string, config: string) => {
  return snippet.replaceAll(/<!--\{([a-zA-Z0-9]+)\}-->/g, function (match: any, name: any) {
    if (name === 'title') {
      return escapeHtml(title);
    } else if (name === 'init') {
      return `&lt;Editor init={${escapeHtml(unwrapConfig(config))}}\n/&gt;`;
    } else {
      console.warn('Unknown variable', match);
      return match;
    }
  });
};

/**
 * Convet a config into the init parameter
 * @param {string} stringConf config to parse
 * @returns {any} Hopefully the RawEditorSettings object
 */
const initFromConf = (conf: any) => {
  let next  = {};
  // console.log('parsing: ', conf);
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
