import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent{
  @Output() onSwitchTab: EventEmitter<{name:string}> = new EventEmitter();


  switchTab(tabName){
    this.onSwitchTab.emit({
      name:tabName
    })
  }
}