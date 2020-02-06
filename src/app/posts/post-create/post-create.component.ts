import {Component} from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  newPost = 'salut';
  textValue = '';

    onAddPost() {
      // window.alert('post button is clicked');
      this.newPost = this.textValue;
    }
}
