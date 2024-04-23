const db = require('../../data/db-config')




async function getRecipebyId(recipe_id){
    const recipeRows = await db('recipes as r')
  
    .where('recipe_id', recipe_id)
    return recipeRows
}

module.exports = {getRecipebyId}