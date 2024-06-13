// document.addEventListener("DOMContentLoaded", checkUserLogin);

// function login() {
//     const email = document.getElementById('email').value;
//     if (validateEmail(email)) {
//         localStorage.setItem('userEmail', email);
//         showHomePage();
//     } else {
//         alert('Please enter a valid email address.');
//     }
// }

// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }

// function checkUserLogin() {
//     const userEmail = localStorage.getItem('userEmail');
//     if (userEmail) {
//         showHomePage();
//     }
// }

// function showHomePage() {
//     const userEmail = localStorage.getItem('userEmail');
//     document.getElementById('loginPage').style.display = 'none';
//     document.getElementById('homePage').style.display = 'block';
//     document.getElementById('userEmailDisplay').innerText = `Logged in as: ${userEmail}`;
//     displayNotes();
// }

// function logout() {
//     localStorage.removeItem('userEmail');
//     document.getElementById('loginPage').style.display = 'block';
//     document.getElementById('homePage').style.display = 'none';
// }

// function submitNote() {
//     const note = document.getElementById('noteInput').value;
//     const userEmail = localStorage.getItem('userEmail');
//     if (note && userEmail) {
//         let userNotes = JSON.parse(localStorage.getItem('userNotes')) || {};
//         if (!userNotes[userEmail]) {
//             userNotes[userEmail] = [];
//         }
//         userNotes[userEmail].push(note);
//         localStorage.setItem('userNotes', JSON.stringify(userNotes));
//         document.getElementById('noteInput').value = '';
//         displayNotes();
//     } else {
//         alert('Please enter a note.');
//     }
// }

// function displayNotes() {
//     const userEmail = localStorage.getItem('userEmail');
//     const userNotes = JSON.parse(localStorage.getItem('userNotes')) || {};
//     const notesList = document.getElementById('notesList');
//     notesList.innerHTML = '';

//     if (userNotes[userEmail]) {
//         userNotes[userEmail].forEach((note, index) => {
//             const noteElement = document.createElement('div');
//             noteElement.textContent = `${index + 1}: ${note}`;
//             notesList.appendChild(noteElement);
//         });
//     }
// }



var email = document.getElementById("email");
var password = document.getElementById("password");
var user_email = document.getElementById("user_email");
var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
var note = document.getElementById("note");

function loginUser() {
  if (!email.value || !password.value)
    return alert("Please add email and password.");
  localStorage.setItem("email", email.value);
  checkIsUserLogin();
}

function checkIsUserLogin() {
  var email = localStorage.getItem("email");
  if (email) {
    login_container.style.display = "none";
    home_container.style.display = "block";
    user_email.innerText = email;
    displayUserNotes();
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}

checkIsUserLogin();

function logout() {
  localStorage.removeItem("email");
  checkIsUserLogin();
}

function submitNote() {
  var email = localStorage.getItem("email");

  var obj = {
    email: email,
    note: note.value,
  };

  saveValueToLocalStorage(obj);
  note.value = "";
}

function saveValueToLocalStorage(obj) {
  var notes = localStorage.getItem("notes");
  console.log("notes from local storage=>", notes);

  if (notes) {
    notes = JSON.parse(notes);
    notes.push(obj);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    notes = [obj];
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  displayUserNotes();
}

function displayUserNotes() {
  var notes = localStorage.getItem("notes");
  console.log("notes", notes)
  var list = document.getElementById("list");
  var currentUserEmail = localStorage.getItem("email");

  if (notes) {
    list.innerHTML = "";
    notes = JSON.parse(notes);
    console.log(notes);
    notes.forEach(function (data, ind) {
      console.log("data=>", data);
      //if (data.email === currentUserEmail) {
        var liElement = ` <li class="border rounded p-2 my-2">
        <p class = "font-medium">${data.note}</p> 
            <p>${data.email}</p>

          </li>`;
        list.innerHTML += liElement;
     //}
    });
  }
}

displayUserNotes();