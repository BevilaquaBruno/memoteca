import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ThoughtInterface } from '../thought/Thought.interface';
import { ThoughtService } from '../thought.service';
import { Router, ActivatedRoute } from '@angular/router';
import { minusculoValidator } from './minusculoValidator';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [0],
      content: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      author: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          minusculoValidator
        ]),
      ],
      model: [''],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((thought) => {
      this.form.setValue({
        id: thought.id,
        content: thought.content,
        author: thought.author,
        model: thought.model
      })
    });
  }

  editThought(){
    if(this.form.valid){
      this.service.edit(this.form.value).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    }
  }

  enableButton(): string {
    if(this.form.valid)
      return 'botao';
    else
      return 'botao__desabilitado';
  }

  cancel(){
    this.router.navigate(['/listThought']);
  }
}
