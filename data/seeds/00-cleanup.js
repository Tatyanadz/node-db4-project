
exports.seed = async function(knex) {
  await knex("ingredients").truncate()
  await knex("quantities").truncate()
  await knex("recipes").truncate()
  await knex("instructions").truncate()
}