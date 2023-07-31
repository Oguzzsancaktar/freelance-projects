import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName:string = 'Testserver'
  allowNewServer: boolean = false;
  serverCreationStatus:string = 'No server was created!'
  isServerCreated:boolean = false;
  servers = ['server 1', 'server 2', 'server 3']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreationServer(){
    this.isServerCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server created ' + this.serverName
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

  ngOnInit(): void {
  }

}
