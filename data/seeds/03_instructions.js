
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("instructions").insert([
    {
      instruction_number: "1",
      instruction: "Mix eggs and flour",
      recipe_id: 1
    },
    {
      direction_number: "2",
      instruction: "Melt butter",
      recipe_id: 1
    },
    { 
      direction_number: "1",
      instruction: "Google how to make borsh",
      recipe_id: 2
    }
  ])
};
