import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor:string = 'blue';
  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','gray')
    this.backgroundColor =  this.defaultColor
  }
  @HostBinding('style.backgroundColor') backgroundColor:string = 'white';

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','red')
    this.backgroundColor = this.defaultColor
    
  }
}
