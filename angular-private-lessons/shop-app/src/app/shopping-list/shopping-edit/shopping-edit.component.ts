import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService:ShoppingListService){}
  addItem() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }
}

