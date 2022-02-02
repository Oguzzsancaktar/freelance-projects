import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import {filter, map} from 'rxjs/operators';



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

        if (count === 5) {
          observer.error(new Error('Count equals 3 !!'));
        }
        if (count > 3 ) {
          observer.complete()
        }
        
        count++
      },1000)
    })

    this.timerObservable =  customIntervalObservable.pipe(filter((data:number)=>{
      return (data > 0)
    }),map((data:number)=>{
      return 'Round :' +( data + 1)
    })).subscribe((count)=>{
      console.log(count);
    }, (error)=>{
      alert(error.message);
    },()=>{
      console.log('completed');
    })
  }

  ngOnDestroy(){
    this.timerObservable.unsubscribe();
  }

}
