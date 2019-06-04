import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../data.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: IData;

  constructor() { }

  ngOnInit() {}

}
