const nameInput = document.getElementById("nameinputer");
const ageInput = document.getElementById("ageinputer");
const mailInput = document.getElementById("mailinputer");
const button = document.getElementById("buttoner");
 
button.addEventListener("click", (event) => {
    event.preventDefault();
    let nameValue = nameInput.value;
    let ageValue = ageInput.value;
    let mailValue = mailInput.value;
    console.log(nameValue, ageValue, mailValue);
if (nameValue.length >= 3 && ageValue > 17 && mailValue.includes("@")) {
    alert("tak for dine oplysninger");
    window.location.href = "index.html";
}
else {
    alert ("Du opfylder ikke kravene");
}
});