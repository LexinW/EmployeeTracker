
INSERT INTO department(name) VALUES
  ('Software'),
  ('Sales'),
  ('Engineering');

INSERT INTO role(title, salary, department_id) VALUES
  ('Junior Dev', 60000, 1),
  ('Sales Representative', 50000, 2),
  ('Engineer', 80000, 3);
       
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
  ('test', 'dummie', 1, null);