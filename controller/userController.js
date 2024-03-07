const User = require('../model/user')

// create user
const createUser = async (req,res) => {
    try {
        // read the incoming form data
            let data  = req.body

        // validate using model
        let newUser = await User.create(req.body)

        return res.status(200).json({ status: true, msg: "New user created", newUser })
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// read all user
const readAllUser = async (req,res) => {
    try {
        let users = await User.find({})

        return res.status(200).json({  status: true, length: users.length, users })
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// read single 
const readSingleUser = async (req,res) => {
    try {
            // receive id from router params
        let id = req.params.id
            // search for an id
        let single = await User.findById(id)
            //  err if id not found
            if(!single)
                return res.status(400).json({ status: false, msg: `Requested id not found`})
            // final response
        return res.status(200).json({ status: true, user: single })
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// update user
const updateUser = async (req,res) => {
    try {
        return res.status(200).json({ msg: 'update user'})
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// delete user
const  deleteUser = async (req,res) => {
    try {
        return res.status(200).json({ msg: 'delete user'})
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// default controller
const defaultCtrl = async (req,res) => {
    return res.status(404).json({ status: false, msg: "Requested path not found.."})
}

module.exports = { readAllUser, readSingleUser, updateUser, deleteUser, createUser, defaultCtrl }