import { Component, Input, OnInit } from '@angular/core';
import { ThoughtInterface } from './Thought.interface';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: ThoughtInterface = {
    id: 0,
    content: 'I love Angular',
    author: 'Nay',
    model: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtWidth(): string {
    if(this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
