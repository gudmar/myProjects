import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './services/communication-service.service';
import { HeadSectionComponent } from './components/head-section/head-section.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { DocumentSectionComponent } from './components/content-section/document-section/document-section.component';
import { ApplyParalaxBgDirective } from './directives/apply-paralax-bg.directive';
import { GetNotepadContentService } from './services/content/get-notepad-content.service';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadSectionComponent,
    ContentSectionComponent,
    DocumentSectionComponent,
    ApplyParalaxBgDirective,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CommunicationService,
    GetNotepadContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
