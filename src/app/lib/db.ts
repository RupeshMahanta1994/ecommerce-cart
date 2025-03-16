import mysql from "mysql2/promise";

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "127.0.0.1", // Change if your MySQL is hosted elsewhere
  user: "root", // Your MySQL username
  password: "9437!Nrupendra", // Your MySQL password
  database: "golang_ecom", 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
