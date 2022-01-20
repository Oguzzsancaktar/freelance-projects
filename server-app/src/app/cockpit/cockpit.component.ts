import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  newServerName = '';
  newServerContent = '';
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onAddServer(nameInput:HTMLInputElement) {
    
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
  
  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent
    })
  }

}
// @ViewChild('serverContentInput', {static: true}) serverContentInput: Elem
