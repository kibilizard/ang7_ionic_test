import { Component, OnInit } from '@angular/core';
import { RecepiesService } from './recepies.service';
import { IData } from './data.model';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.page.html',
  styleUrls: ['./datalist.page.scss'],
})
export class DatalistPage implements OnInit {
  data: IData[];

  constructor(
    private recipesService: RecepiesService,
    private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      (event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.data = this.recipesService.getAllRecipes();
        }
      });
    this.data = this.recipesService.getAllRecipes();
  }

}
