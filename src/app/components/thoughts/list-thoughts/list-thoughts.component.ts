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

  hasMoreThoughts: boolean = true;

  filter: string = '';

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list(this.currentPage, this.filter).subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

  loadMoreThoughts(){
    this.service.list(++this.currentPage, this.filter)
    .subscribe(listThoughts => {
      this.listThoughts.push(...listThoughts);
      if(!listThoughts.length){
        this.hasMoreThoughts = false;
      }
    })
  }

  searchThoughts(){
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.service.list(this.currentPage, this.filter)
    .subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    })
  }

}
