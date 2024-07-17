"use server";

import mysql from "mysql2/promise";

interface School {
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  image: string;
  email_id: string;
}

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
    }
  } catch (error) {
    console.error("Error adding school to the database: ", error);
  }
}
