const ingredientSerach = function () {
    let ingredientName = $("#ingredient-input").val()

    $.get(`/recipes/${ingredientName}`, function (recipes) {
        
        let clearRecipe = []
        recipes = JSON.parse(recipes)

        recipes.results.forEach(recipe => {
            let recipeObj = {}

            recipeObj.ingredients = recipe.ingredients
            recipeObj.title = recipe.title
            recipeObj.thumbnail = recipe.thumbnail
            recipeObj.href = recipe.href

            clearRecipe.push(recipeObj)
        });

        console.log(clearRecipe);
    })
} 
