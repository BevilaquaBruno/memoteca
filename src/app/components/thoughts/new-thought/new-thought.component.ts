import { Component, OnInit } from '@angular/core';
import { ThoughtInterface } from '../thought/Thought.interface';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidator';

@Component({
  selector: 'app-new-thought',
  templateUrl: './new-thought.component.html',
  styleUrls: ['./new-thought.component.css'],
})
export class NewThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
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
      model: ['modelo1'],
      favorite: [false]
    });
  }

  createThought() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
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

  cancel() {
    this.router.navigate(['/listThought']);
  }
}
