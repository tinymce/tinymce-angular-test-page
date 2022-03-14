import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppComponent, TinyComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TinyComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
