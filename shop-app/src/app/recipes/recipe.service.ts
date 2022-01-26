
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe name', 'test recipe description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', [
      new Ingredient('cheese', 20),
      new Ingredient('Burger', 50)

    ]),
    new Recipe('Test recipe name 2 ', 'test recipe description 2', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', [
      new Ingredient('banana', 10)
    ]),
  ];



  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }

  addIngredientsToShopList(ingredients: Ingredient[]): void {
    ingredients.every(ingredient => {
      this.shoppingListService.onIngredientAdded(ingredient)
    })
  }
}