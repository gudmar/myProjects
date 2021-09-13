import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() isButtonPressed: boolean = false;
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

}
