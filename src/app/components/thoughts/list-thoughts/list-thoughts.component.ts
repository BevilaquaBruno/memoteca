import { Component, OnInit } from '@angular/core';
import { ThoughtInterface } from '../thought/Thought.interface';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

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

  favorites: boolean = false;

  listFavoriteThoughts: ThoughtInterface[] = [];

  constructor(private service: ThoughtService, private router: Router) { }

  ngOnInit(): void {
    this.service.list(this.currentPage, this.filter, this.favorites).subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

  loadMoreThoughts(){
    this.service.list(++this.currentPage, this.filter, this.favorites)
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
    this.service.list(this.currentPage, this.filter, this.favorites)
    .subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    })
  }

  listFavorites() {
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.favorites = true;
    this.service.list(this.currentPage, this.filter, this.favorites)
      .subscribe(listFavoriteThoughts => {
        this.listThoughts = listFavoriteThoughts;
        this.listFavoriteThoughts = listFavoriteThoughts;
      })
  }

  reloadComponent(){
    this.favorites = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

}
