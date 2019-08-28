import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSr1C8',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Nasi Goreng',
      imageUrl: 'https://cdn.idntimes.com/content-images/post/20180629/78a238ddb735b10c5bb27c1a1e14f8be.jpg',
      ingredients: ['Nasi Putih', 'Kecap', 'Garam', 'Telur Ayam']
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return this.recipes.find(value => value.id === recipeId);
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(value => {
      return value.id !== recipeId;
    });
  }
}
