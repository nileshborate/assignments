let users=[
    {
        "firstName":"Nilesh1", 
        "lastName":"Borate1", 
        "email":"nilesh1@gmail.com",
        "contactNo":9898989898
    },
    {
        "firstName":"Nilesh2", 
        "lastName":"Borate2", 
        "email":"nilesh2@gmail.com",
        "contactNo":9898989898
    },
    {
        "firstName":"Nilesh3", 
        "lastName":"Borate3", 
        "email":"nilesh3@gmail.com",
        "contactNo":9898989898
    },
]

//fetch all users
const getUsers = (req,res) => {
    res.send(users)
}

//create user
const createUser = (req,res) => {
    //const {firstName,lastName,email,contactNo} = req.body;
    const user = req.body
    users.push({...user});
    res.send("User Added Successfully")
}

//update user
const updateUser = (req,res) => {
    const user = users.find((user)=> user.firstName === req.params.firstName)
    console.log("User find = ",user)
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName
    user.email = req.body.email
    user.contactNo = req.body.contactNo
    res.send("User Updated Successfully")
}


//delete user
const deleteUser = (req,res)=>{
    const result = users.filter((user)=> user.firstName !== req.params.firstName)
    users = result
    res.send("User Deleted Successfully")
}

module.exports = {getUsers,createUser,updateUser,deleteUser}