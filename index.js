// Initialize employee object
const employee = {
  name: "John Smith",
  streetAddress: "123 Main St"
};

// Function to update employee object non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Function to update employee object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
}

// Function to delete property from employee object non-destructively
function deleteFromEmployeeByKey(employee, key) {
  const { [key]: deleted, ...newEmployee } = employee;
  return newEmployee;
}

// Function to delete property from employee object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];}
