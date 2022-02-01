import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private timerObservable: Subscription;
  constructor() { }

  ngOnInit() {
    // this.timerObservable = interval(1000).subscribe((count)=>{
    //   console.log(count);
    // })

    const customIntervalObservable = Observable.create((observer) => {
      let count:number = 0
      setInterval(()=>{
        observer.next(count)
        count++
      },1000)
    })

    this.timerObservable =  customIntervalObservable.subscribe((count)=>{
      console.log(count);
    })
  }

  ngOnDestroy(){
    this.timerObservable.unsubscribe();
  }

}
