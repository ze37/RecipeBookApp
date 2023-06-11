const API_KEY = "3aefc3031e2146bb93c628c08a597912"
const recipeListEl = document.getElementById('recipe-list')
function displayRecipes(recipes){
    recipeListEl.innerHTML = ''
    //let recipeImageEl
    recipes.forEach((recipe)=>{
        const recipeItemEl = document.createElement('li')
        recipeItemEl.classList.add('recipe-item')
        recipeImageEl = document.createElement('img')
        recipeImageEl.src = recipe.image
        recipeImageEl.alt = 'recipe image'
       
        recipeTitleEl = document.createElement('h2')
        recipeTitleEl.innerText = recipe.title

        recipeItemEl.appendChild(recipeImageEl) 
        recipeItemEl.appendChild(recipeTitleEl) 
        recipeListEl.appendChild(recipeItemEl) 
    })
}


async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
    return data.recipes
}

async function init(){
    const recipes = await getRecipes()
    displayRecipes(recipes)
}

init()