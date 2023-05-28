import { Component, OnInit } from '@angular/core';
import { ThoughtInterface } from '../thought/Thought.interface';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
          Validators.minLength(3)
        ]),
      ],
      model: ['modelo1'],
    });
  }

  createThought() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    } else {
      console.log(this.form.status);
    }
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }
}
