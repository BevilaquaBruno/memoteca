import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-thought',
  templateUrl: './new-thought.component.html',
  styleUrls: ['./new-thought.component.css']
})
export class NewThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Novo pensamento criado!");
  }

}
