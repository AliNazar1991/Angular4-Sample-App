import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite : true,
  }

  tweet = {
    body: '....',
    likesCount: 10,
    isLiked: true,
  }

  

  onClick(){
    alert("HEJ HEJ HEJ!");
  }

  onFavoriteChanged(eventArgs){
    alert("where you coming from? : "+eventArgs);
  }
}


