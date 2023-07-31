import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: { name: string, type: string, content: string };
  @Input('elementName') name: string;
  @ViewChild('heading',{static: true}) heading: ElementRef;
  @ContentChild('contentParagraph',{static: true}) contentParagraph: ElementRef;
  constructor() {
    console.log("constructor called in element");

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Onchange called in element");
    console.log(changes);

  }

  ngOnInit(): void {
    console.log("init called in element");
    console.log(this.heading.nativeElement.textContent);

  }
  ngDoCheck(): void {
    console.log("Do Check  called in element");
  }

  ngAfterContentInit(): void {
    console.log("NG after init  called in element");
  }
  ngAfterContentChecked(): void {
    console.log("NG after check  called in element");
  }

  ngAfterViewInit(): void {
    console.log("NG after view init  called in element");
    console.log(this.heading.nativeElement.textContent);

  }
  ngAfterViewChecked(): void {
    console.log("NG after view check  called in element");
  }
  ngOnDestroy(): void {
    console.log('ng on destroy called');
  }


}
