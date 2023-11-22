// singleton difference 

// object literal

const mySym = Symbol("Key1")
const JsUser = {
    name: "Arjun",
    "full name" : "Arjun Singha",
    [mySym]: "mykey1",
    age: 24,
    location: "kolkata",
    email: "arjun.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);

JsUser.email = "arjun@love.com"
// Object.freeze(JsUser)
JsUser.email = "arjun.ndk@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());