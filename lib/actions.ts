"use server";

import School from "@/types/School";
import mysql, { RowDataPacket } from "mysql2/promise";

interface FetchedData extends RowDataPacket {}

export async function addSchool(school: School) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA,
      waitForConnections: true,
    });

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
      const [results] = await connection.query(sql, values);
      console.log("Data successfully inserted", results);
    } catch (err) {
      console.error("Error inserting data:", err);
    } finally {
      await connection.end(); // Close the connection
    }
  } catch (error) {
    console.error("Error adding school to the database: ", error);
  }
}

// Function to fetch all schools from the database
export async function fetchAllSchools() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA,
      waitForConnections: true,
    });

    const sql = "SELECT * FROM school";

    try {
      const [rows] = await connection.query<FetchedData[]>(sql);
      return rows;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    } finally {
      await connection.end(); // Close the connection
    }
  } catch (error) {
    console.error("Error fetching schools from the database: ", error);
    throw error;
  }
}
