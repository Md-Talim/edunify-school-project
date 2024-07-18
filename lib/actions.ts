"use server";

import School from "@/types/School";
import mysql, { RowDataPacket } from "mysql2/promise";

interface FetchedData extends RowDataPacket {}

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMA,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function addSchool(school: School) {
  const sql =
    "INSERT INTO school (name, email_id, contact, address, city, state, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    school.name,
    school.email_id,
    school.contact,
    school.address,
    school.city,
    school.state,
    school.image,
  ];

  try {
    const [results] = await pool.query(sql, values);
    console.log("Data successfully inserted", results);
  } catch (err) {
    console.error("Error inserting data:", err);
  }
}

// Function to fetch all schools from the database
export async function fetchAllSchools() {
  const sql = "SELECT * FROM school";

  try {
    const [rows] = await pool.query<FetchedData[]>(sql);
    return rows;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}
