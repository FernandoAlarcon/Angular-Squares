import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lorem : string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Tenetur modi numquam quasi fugit aliquid corrupti quod magnam sint, molestias, dolore mollitia. 
  Dolorum similique deleniti fugit ab. Commodi veritatis eum adipisci.`;  

  title    : string = 'square';
  color    : string = '';
  position : string = "";
  squares  : any = [
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" }, 
    { "color"       : "red" } 

  ];

  changeColor(){
    let number = parseInt(this.position)
    this.squares[number].color = this.color;
    this.color    = '';
    this.position = '';

  } 
  ChooseSquare(place:any){
    this.position = place;
  } 
  //

  AlertColor(){
    alert("You Didn't choose the position"); 
  }

}//AppComponent
