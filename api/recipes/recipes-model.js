function getRecipebyId(recipe_id){
    return Promise.resolve(`Sweet recipe with id, ${recipe_id}`)
}

module.exports = {getRecipebyId}