// Function to register a user
function registerUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let contact = document.getElementById("contact").value;
  let address = document.getElementById("address").value;

  if (name === "" || email === "" || contact === "" || address === "") {
    alert("Please fill in all fields!");
    return;
  }

  let user = { name, email, contact, address };

  // Get existing users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add new user to array
  users.push(user);

  // Save updated users array to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("User registered successfully!");

  // Clear form fields
  document.getElementById("registrationForm").reset();
}

// Function to display registered users
function displayUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let tableBody = document.getElementById("userTableBody");

  tableBody.innerHTML = "";

  users.forEach((user) => {
    let row = `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
            <td>${user.address}</td>
        </tr>`;
    tableBody.innerHTML += row;
  });
}

// Load users on view.html
if (document.getElementById("userTableBody")) {
  displayUsers();
}
