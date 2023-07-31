import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from "@angular/core";
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent implements OnInit {
  // @Input() recipe:Recipe;
  recipe: Recipe;
  // activeRecipe: number = 0;
  id: number = 0;
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }
  // constructor(private shoppingListService: ShoppingListService){}
  // addToCard(){
  //   this.recipe.ingredients.every(ingredient=> {
  //     this.shoppingListService.onIngredientAdded(ingredient);
  //   })
  // }


  ngOnInit() {
    // const id = +this.activatedRoute.snapshot.params['id']
    // this.recipe = this.recipeService.getRecipes()[id]
    
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }

  addToCard() {
    this.recipeService.addIngredientsToShopList(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute})
    // this.router.navigate(['../', this.id ,'edit'],{relativeTo:this.activatedRoute})

  }
}