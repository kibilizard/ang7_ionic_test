import { Component, OnInit } from '@angular/core';
import { RecepiesService } from '../recepies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IData } from '../data.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  recipe: IData;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecepiesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/datalist']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete thi recipe',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.recipe.id);
          this.router.navigate(['/datalist']);
          console.log('DELETED');
        }
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    })
  }

}
