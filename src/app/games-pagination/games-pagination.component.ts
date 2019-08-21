import { Component, OnInit } from '@angular/core';
import { GamesService } from '../core/services/games.service';

@Component({
  selector: 'app-games-pagination',
  templateUrl: './games-pagination.component.html',
  styleUrls: ['./games-pagination.component.css']
})
export class GamesPaginationComponent implements OnInit {
  games: any; 
  pageSize = 10;
  current_page: number = 1;
  totalPages: number;
  limit = 30;

  constructor(private gs: GamesService) { }

  ngOnInit() {
    this.loadGameRequests(0,10)
  }

  loadGameRequests(current_page, pageSize?){
    this.gs.getGames(current_page, pageSize).subscribe((data)=>{
      this.games = data;
      this.totalPages = data.meta.total_pages;
      this.current_page = data.meta.current_page;
      console.log(data)
    });
  }
  prevPage() {
    if (this.current_page > 1) {
      this.current_page--;
      this.changePage(this.current_page);
      this.loadGameRequests(this.current_page,);
    }
  }

  nextPage() {
    if (this.current_page < this.totalPages) {
      this.current_page++;
      this.changePage(this.current_page);
      this.loadGameRequests(this.current_page);
    }
  }

  changePage(page) {
    let btn_next = document.getElementById("btn_next");
    let btn_prev = document.getElementById("btn_prev");

    // Validate page
    if (page < 1) page = 1;
    if (page > this.totalPages) page = this.totalPages;


    if (page === 1) {
      btn_prev.style.visibility = "hidden";
    } else {
      btn_prev.style.visibility = "visible";
    }

    if (page === this.totalPages) {
      btn_next.style.visibility = "hidden";
    } else {
      btn_next.style.visibility = "visible";
    }
  }

}
