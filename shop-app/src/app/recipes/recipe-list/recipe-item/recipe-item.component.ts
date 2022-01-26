import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent{
  @Input() recipe:Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService){}

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}