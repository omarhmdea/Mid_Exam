
class Renderer {
    constructor(){
        
    }
    render(data){

        const source = $('#recipe-template').html()
        const template = Handlebars.compile(source);
        const newHTML = template({recipes:data})
        $('.recipe-container').append(newHTML)  
    }
}

const renderer = new Renderer()

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
        
        renderer.render(clearRecipe);
    })
}

$('.recipe-container').on('click','#img-container', function(){
    let ingredients = $(this).siblings('ul')
    let firstIngredients = $(ingredients.find('li')[0]).text()
    alert(firstIngredients)
})

