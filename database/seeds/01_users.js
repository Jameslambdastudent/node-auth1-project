
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'bigbird', password: "abc123"},
    {username: 'spongebob', password: "abc122"},
  ]);
};
