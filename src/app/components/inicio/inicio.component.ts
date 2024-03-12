import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PostService  } from '../../services/post.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgFor, RouterModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  // Variables
  postList:any[] = [];
  errorApi:boolean = false;
  // Constructor
  constructor(private postService:PostService) {
    this.getPosts();
  }
  // Methods
  getPosts(){
    this.postService.getPosts().subscribe({
      next: (data:any) => {
        this.postList = data;
        console.log(this.postList);

      },
      error: (error:any) => {
        this.setErrorApi();
      }
    });
  }

  setErrorApi(){
    this.errorApi=true;
    setTimeout(() => {
      this.errorApi=false;
    }, 1500);
  }
}
