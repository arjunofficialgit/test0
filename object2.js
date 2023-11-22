const tinderUser = new Object()
 tinderUser.id = "123abc"
 tinderUser.name = "ALLU"
 tinderUser.isLoggedIn = false

 const regularUser = {
    email: "sunna@gmail.com",
    fullname: {
        userFullName :{
            firstName: "Arjun",
            lastName: "Singha"
        }
    }
 }

// console.log(regularUser.fullname.userFullName.lastName);


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"

}

const {courseInstructor : instructor}= course

console.log(instructor);