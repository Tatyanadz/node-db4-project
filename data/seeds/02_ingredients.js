
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("ingredients").insert([
    { name: "Eggs"},
    { name: "Flour" },
    { name: "Milk"},
    { name: "Butter"},
    { name: "Beets"},
    { name: "Beef"},
    { name: "Beans"}
  ])
};
