import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shop-list.component.html'
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients
    })
  }

}