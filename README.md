# Edunify School Project

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Description

The Edunify School Project is a web application built with Next.js for managing a directory of schools. It allows users to add new schools, view a list of all schools, and manage the school data efficiently. The project integrates a MySQL database for storing school information.

## Features

- **Add School:** Users can add new schools to the directory by filling out a form.
- **View Schools:** Users can view a list of all schools, including details like name, address, city, state, contact, email, and an image.
- **Database Integration:** Uses MySQL for storing and retrieving school data.

## Technologies Used

- **Frontend:** Next.js, React, TypeScript, CSS
- **Backend:** Next.js Server Components
- **Database:** MySQL
- **Deployment:** Vercel for deployment

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL database set up locally or remotely

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Md-Talim/edunify-school-project.git
   cd edunify-school-project
   ```

2. **Install dependencies:**
   ```sh
   bun add
   ```

### Environment Variables

Create a `.env.local` file in the root directory and add your database configuration:

```plaintext
DB_HOST=localhost
DB_PORT=3306
DB_USER=admin
DB_PASS=••••••••
DB_SCHEMA=your_schema
```

### Running the Project

1. **Run the development server:**

   ```sh
   bun run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- Navigate to the home page to see the list of schools.
- Click "Add School" to submit the form and add a new school to the directory.
- The form will require fields such as name, address, city, state, contact number, email, and an image URL.
