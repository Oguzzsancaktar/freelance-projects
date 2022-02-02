import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shop-list.component.html'
})

export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[] = [];
  private igChangedSub:Subscription
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
  this.igChangedSub =   this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients
    })
  }

  ngOnDestroy() {
    this.igChangedSub.unsubscribe()
  }

}