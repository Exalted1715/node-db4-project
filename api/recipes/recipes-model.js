const db = require('../../data/db-config')




async function getRecipebyId(recipe_id){
    const recipeRows = await db('recipes as r')
    return recipeRows
    .where('recipe_id', recipe_id)
}

module.exports = {getRecipebyId}