import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Altkom';
  opis2 = 'kurs Angular';
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