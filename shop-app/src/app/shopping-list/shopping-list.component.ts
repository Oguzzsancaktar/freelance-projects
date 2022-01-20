import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shop-list.component.html'
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes  ',10),
  ];

  ngOnInit() {

  }
}