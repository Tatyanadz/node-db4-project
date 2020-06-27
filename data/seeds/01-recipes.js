
exports.seed = async function(knex) {
 await knex("recipes").insert([
   { recipe_name: "Napoleon cake"},
   { recipe_name: "Borsh"}
 ])
};
