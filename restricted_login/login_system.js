const users = [
    {   
        username:"Dil Abrahams",
        email:"primedildaar2@gmail.com",
        password:"12dil*"
    },
    {
        username:"Dildaar Abrahams",
        email:"dildaar.abrahams@younglings.africa",
        password:"Password1"
    },
    {
        username:"John Abraham",
        email:"john.abraham@younglings.africa",
        password:"12john*"
    },
]
function getInfo(){
    let username = document.querySelector(".username").value
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username && email == users[i].email && password == users[i].password) {
            console.log(`${username} is logged in.`)
            window.location.href = "http://www.google.com"
        }
    }
    alert("did you forget your account details")
}