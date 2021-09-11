import { Component } from '@angular/core';
import { GetNotepadContentService } from './services/content/get-notepad-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private notePadContentProvider: GetNotepadContentService){
  }
  notepadContent = this.notePadContentProvider.getContent();
  title = 'myProjects';
}
