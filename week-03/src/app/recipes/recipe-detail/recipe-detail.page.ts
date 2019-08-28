import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    public alertController: AlertController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('recipeId')) {
          return;
        }
        this.loadedRecipe = this.recipesService.getRecipe(paramMap.get('recipeId'));
      }
    )
  }

  async onClickDeleteRecipe(){
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      message: 'Are you sure you want to delete this recipe?',
      buttons: [
        {
          text: 'YES',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
            this.showToastDelete();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  async showToastDelete(){
    const toast = await this.toastController.create({
      message: 'Recipe has been deleted.',
      duration: 2000
    });
    toast.present();
  }
}
