const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
//added dotenv to create password file, more secure for github.
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '9498',
    database: 'employee_db'
  },
  mainMenu(),
  console.log(`Connected to the employee_db database.`)
);
async function mainMenu() {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Select an option:',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    },
  ]);

  switch (choice) {
    case 'View all departments':
      viewAllDepartments();
      break;
    case 'View all roles':
      // Call a function to view all roles
      break;
    case 'View all employees':
      // Call a function to view all employees
      break;
    case 'Add a department':
      // Call a function to add a department
      break;
    case 'Add a role':
      // Call a function to add a role
      break;
    case 'Add an employee':
      // Call a function to add an employee
      break;
    case 'Update an employee role':
      // Call a function to update an employee's role
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit(0);
      break;
    default:
      console.log('Invalid choice');
  }
}
function viewAllDepartments() {
  const query = 'SELECT * FROM department';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(results);
    mainMenu();
  });
}

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
