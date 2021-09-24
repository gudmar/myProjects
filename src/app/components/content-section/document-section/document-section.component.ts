import { Component, OnInit, Input, ElementRef, HostListener, Host } from '@angular/core';

@Component({
  selector: 'document-section',
  templateUrl: './document-section.component.html',
  styleUrls: ['./document-section.component.scss']
})
export class DocumentSectionComponent implements OnInit {
  @Input() contentList: any[]=[];
  constructor( private elRef: ElementRef) { }

  ngOnInit(): void {
    console.dir(this.contentList)
  }

  imagePath(imageName:string):string{
    return `../../../assets/${imageName}`
  }
  // @HostListener('mouseover')
  // increaseZ(){
  //   this.elRef.nativeElement.style.zIndex = '10000';
  // }
  increaseZ(data:any){
    data.target.style.zIndex = '10000';
  }
  decreaseZ(data:any){
    data.target.style.zIndex = '0';
  }

  // @HostListener('mouseleave')
  // decreaseZ(){
  //   this.elRef.nativeElement.style.zIndex = '';
  // }
}
