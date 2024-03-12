import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  // Variables
  postId: any;
  post: any;
  tags: any[] = [];
  commentList: any;
  // Constructor
  constructor(private route: ActivatedRoute, postService: PostService) {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      postService.getPost(this.postId).subscribe({
        next: (data: any) => {
          this.post = data;
          this.tags = this.post.tags;
          this.tags = this.tags.map((tag: any) => tag.name);
          console.log(this.post);
          postService.getPostComments(this.postId).subscribe({
            next: (data: any) => {
              this.commentList = data;
              console.log(this.commentList);
            },
            error: (error: any) => {
              console.log("Error al obtener los comentarios");
            }
          });
        }
      }
      );
    });
  }
  // Methods
}
