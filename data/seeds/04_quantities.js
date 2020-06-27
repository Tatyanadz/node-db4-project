
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("quantities").insert([
    { recipe_id: 1, ingredients_id: 1, quantity: 1},
    { recipe_id: 1, ingredients_id: 2, quantity: 2},
    { recipe_id: 2, ingredients_id: 1, quantity: 1}
  ])
};
