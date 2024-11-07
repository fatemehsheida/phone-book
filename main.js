import "./style.css";

const profileUser = document.getElementsByClassName("imgUser");
const profileIcon = document.getElementsByClassName("imgIconUser");
const Name = document.getElementsByClassName("nameUser");
const phoneNumber = document.getElementsByClassName("phoneNumberUser");
const search = document.getElementsById("search");
const addContact = document.getElementsByClassName("addContact");
const deleteUser = document.getElementsByClassName("deleteBtn");
const editUser = document.getElementsByClassName("editBtn");
const save = document.getElementsByClassName("createBtn");
const createPhoneNumberInput = document.getElementsById("phoneNumberInput");
const createNameInput = document.getElementsById("nameInput");
const back = document.getElementsById("backIcon");
const ContactList = document.getElementsById("ContactList");

const Contact = () => {
  JSON.parse(localStorage.getItem("contacts")) || [];
};

back.addEventListener("click", backBtn);
save.addEventListener("click", save);
editUser.addEventListener("click", editUser);
deleteUser.addEventListener("click", deleteUser);
addContact.addEventListener("click", addNewContact());
search.addEventListener('change', search)
createPhoneNumberInput.addEventListener('change', createPhoneNumberInput)
createNameInput.addEventListener('change', createNameInput)


function addNewContact(){
    e.preventDefault()
}