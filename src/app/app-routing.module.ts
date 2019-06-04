import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'datalist', pathMatch: 'full' },
  {
    path: 'datalist',
    children: [
      {
        path: '',
        loadChildren: './datalist/datalist.module#DatalistPageModule',
      },
      {
        path: ':recipeId',
        loadChildren: './datalist/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
      }
    ]
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
