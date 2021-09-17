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
import { ButtonComponent } from './components/button/button.component';
import { RotateOnHoverDirective } from './directives/rotate-on-hover.directive';
import { NavButtonComponent } from './components/navigation/nav-button/nav-button.component';
import { EmploymentEntryComponent } from './components/content-section/document-section/employment-entry/employment-entry.component';
import { SkillListComponent } from './components/content-section/document-section/skill-list/skill-list.component';
import { PortfolioEntryComponent } from './components/content-section/document-section/portfolio-entry/portfolio-entry.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { AnimationsComponent } from './components/animations/animations.component';
import { RectanglesComponent } from './components/animations/rectangles/rectangles.component';
import { SingleRectangleComponent } from './components/animations/rectangles/single-rectangle/single-rectangle.component';
import { GetRandomColorService } from './services/get-random-color.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadSectionComponent,
    ContentSectionComponent,
    DocumentSectionComponent,
    ApplyParalaxBgDirective,
    NavigationComponent,
    ButtonComponent,
    RotateOnHoverDirective,
    NavButtonComponent,
    EmploymentEntryComponent,
    SkillListComponent,
    PortfolioEntryComponent,
    AnimationsComponent,
    RectanglesComponent,
    SingleRectangleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    CommunicationService,
    GetNotepadContentService,
    GetRandomColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    let faIcons = [faFilm, faEnvelope, faUserGraduate]
    library.add(...faIcons);
  }
}
