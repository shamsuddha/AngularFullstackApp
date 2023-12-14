import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormArray, FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {Observable} from "rxjs";
import {toFaGfn} from "../../../../util/MiscUtil";
import {PostController} from "src/app/controller/PostController";
import {PostSearchDto} from "src/app/dto/request/PostSearchDto";
import {Post} from "src/app/entity/Post";

@Component({
  selector: 'PostSetupComp',
  templateUrl: './PostSetupComp.html',
  styleUrls: ['./PostSetupComp.scss'],
  //standalone: true
})
export class PostSetupComp implements OnInit {

  breadCrumbItems!: Array<{}>;
  title!: string;

  postFg: FormGroup = this.rxFormBuilder.formGroup(Post);
  toFaGfn = toFaGfn;
  postList$: Observable<Array<Post>> = new Observable<Array<Post>>();

  constructor(
    public postController: PostController,    
    public rxFormBuilder: RxFormBuilder
  ) {
  }
  
  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{label: 'Post'}, {label: 'Post', active: true}];
  }

  save() {
    this.postController.save(this.postFg.value).subscribe((e) => {
      this.search();
    });
  }

  onUpdateClick(post: Post) {
    this.postFg.patchValue(post);
    this.postFg.patchValue({updateMode:true});
    console.log(this.postFg.value);
  }

  update() {
    this.postController.update(this.postFg.value).subscribe((e) => {
      this.search();
    });
  }

  delete(post: Post) {
    this.postController.delete(post).subscribe((e) => { this.search(); });
  }

  search() {
    this.postList$ = this.postController.search(new PostSearchDto({ "idList": [] }));
  } 
  
  view(post: Post) {
    this.postList$ = this.postController.search(new PostSearchDto({ "idList": [] }));
  }

  reset() {

  }
}
