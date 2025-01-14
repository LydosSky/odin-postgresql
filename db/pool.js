const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost',
  user: 'rylan',
  database: 'top_users',
  password: 'password',
  port: 5432,
});

// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
