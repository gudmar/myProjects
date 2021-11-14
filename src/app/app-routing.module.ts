import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { RouterOutputComponent } from './components/content-section/router-output/router-output.component';

const routes: Routes = [
  {path: '', redirectTo:'aboutMe', pathMatch:'full'},
  {path:'aboutMe', component: ContentSectionComponent, data: {startPage:'About me'}},
  {path:'cv', component: ContentSectionComponent, data: {startPage: 'About me'}},
  {path:'portfolio', 
   component: RouterOutputComponent,
   data: {startPage:'Portfolio'},
   children: [
     {path: '', component: ContentSectionComponent, data: {startPage:'Portfolio'}},
     {path: 'notePad',component:ContentSectionComponent,data:{startPage:'Note pad'}},
     {path: 'ticTacToe',component:ContentSectionComponent,data:{startPage:'Tic-tac-toe'}},
     {path: 'widgets',component:ContentSectionComponent,data:{startPage:'Widgets'}},
     {path: 'calculator',component:ContentSectionComponent,data:{startPage:'Calculator'}},
     {path: 'antyvirusGame',component:ContentSectionComponent,data:{startPage:'Anti Virus Game'}},
     {path: 'storyDices',component:ContentSectionComponent,data:{startPage:'Story dices'}},
     {path: 'paint',component:ContentSectionComponent,data:{startPage:'Paint'}},
     {path: 'deepObjectComparator',component:ContentSectionComponent,data:{startPage:'Deep Object Comparator'}},
     {path: 'spinningWheel',component:ContentSectionComponent,data:{startPage:'Spinning Wheel'}},
     {path: 'blendMode', component:ContentSectionComponent, data:{startPage:'Mix blend mode'}}
     
   ]
  },
  {path:'cv', component: ContentSectionComponent, data: {startPage: 'CV'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
