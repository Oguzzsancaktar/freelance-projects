import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input } from "@angular/core";
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent{
  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeService){}
  // constructor(private shoppingListService: ShoppingListService){}
  // addToCard(){
  //   this.recipe.ingredients.every(ingredient=> {
  //     this.shoppingListService.onIngredientAdded(ingredient);
  //   })
  // }

  addToCard(){
    this.recipeService.addIngredientsToShopList(this.recipe.ingredients)
  }
}