let visitor = prompt("Who's there");
console.log(visitor);
let password = null;
if (visitor === "" || visitor === null) {
    alert("Canceled");
}else if (visitor.toLowerCase() == "admin") {
    password = prompt("Enter password");
    if (password === "TheMaster") {
        alert("Welcome!");
    }else if (password === "" || password === null) {
        alert("Canceled");
    }else{
        alert("Wrong Password");
    }
}else{
    alert("I don't know you");
}