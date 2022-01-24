import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent{
  @Input() recipe:Recipe;
  
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected(){
    this.recipeSelected.emit();
  }
}