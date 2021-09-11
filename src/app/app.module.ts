import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './services/communication-service.service';
import { HeadSectionComponent } from './components/head-section/head-section.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { DocumentSectionComponent } from './components/content-section/document-section/document-section.component';
import { ApplyParalaxBgDirective } from './directives/apply-paralax-bg.directive';
import { DocumentArticleComponent } from './components/content-section/document-section/document-article/document-article.component';
import { DocumentImageComponent } from './components/content-section/document-section/document-image/document-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadSectionComponent,
    ContentSectionComponent,
    DocumentSectionComponent,
    ApplyParalaxBgDirective,
    DocumentArticleComponent,
    DocumentImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
