const person = {}

person.name = "abhi"
person.email = "abhi@123"
person.male = true

// console.log(person.email)

const regularuser = {
    username : {
        userfullname : {
            firstname : "abhi",
            lastname : "shek"
        }
    }
}

// console.log(regularuser.username)

const h1 = {1: "a", 2: "b", 3: "c"}
const h2 = {4: "d", 5: "e", 5: "f"}

const h3 = {...h1, ...h2}

// console.log(h3);

//this is how user info comes

const users = [
    {
        id: 1,
        email : "abhi@5712"
    },
    {
        id: 2,
        email : "abhi2@gmau"
    },
    {
        id: 3,
        mail : "hjfhfiokdjg",
    },
]

console.log(users[0].email)

// {
//     "id" : "1"
//     "email" : "hello"
//     "account" : "8876866768768778678"
// }