import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { Observable, from, of } from 'rxjs';
import { KeyLoggerComponent } from './key-logger/key-logger.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, 
    CopyrightDirective, NumericDirective, KeyLoggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ''
  // const values = from([1,2,3]);
  // values.subscribe(value => console.log(value));

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next()
    }, 2000);
  })


  constructor(){
    const complete$ = from(this.onComplete())
    this.title$.subscribe(this.setTitle)
  }

  private onComplete(){
    return new Promise<void>(resolve =>{
      setTimeout(() => {
        resolve()
      }, 2000);
    })
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds()
    this.title = `Kurs Angulara w Altkom (${timestamp})`
  }

  private changeTitle(callback: Function){
    setTimeout(() => {
      callback()
    }, 2000);
  }


}

// type Animal = 'Żyrafa' | "Słoń";
// enum Marki {"a","b","c"}
// let mojaMarka: Marki.a
// let mojaMarka1: string = Marki[0]

// let an : Animal = 'Słoń';

// function hello(name: string = 'Tomek', greet?:string, ...names:string[]): string {
//   if (!greet){
//     greet = 'Witaj'
//   }
//   return 'Hello ' + name
// }

// let sayHello: (name: string) => string = function(name:string): string {
//   return 'Hello ' + name
// }

// let url = `${baseUrl}/${path}?param=${param}`