import { Injectable } from '@angular/core';
import { IData } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class RecepiesService {

  private recipes: IData[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://avatars.mds.yandex.net/get-pdb/27625/e8668c1e-cc84-4f7b-88e7-272a3a8f3c57/s1200',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://img03.rl0.ru/eda/c620x415i/s2.eda.ru/StaticContent/Photos/141020235636/141027172218/p_O.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeID: string) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeID)
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
