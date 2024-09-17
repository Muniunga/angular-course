import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 data={
  title: 'Angular-Course',
  name:'Adérito'
 };

 //Função de clique
 onLogoClicked(){
alert(this.data.title)
 }
 onKeyup(newTitle:string){
this.data.title= newTitle;
 }
}
