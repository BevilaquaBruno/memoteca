import { Component, OnInit } from '@angular/core';
import { ThoughtInterface } from '../thought/Thought.interface';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThoughts: ThoughtInterface[] = [];

  currentPage: number = 1;

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list(this.currentPage).subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

}
