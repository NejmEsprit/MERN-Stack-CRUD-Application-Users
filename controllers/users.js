const Users = require('../modeles/users')
const validateUser = require('../validation/User.validation')

const AddUser = async (req, res) => {
    const { errors, isValid } = validateUser(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
                if (exist) {
                    errors.Email = "User Exist";
                    res.status(404).json(errors);
                } else {
                    await Users.create(req.body);
                    res.status(201).json({ message: "User added with success" });
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}

const findAllUsers = async (req, res) => {
    try {
        usrs = await Users.find()
        res.status(200).send(usrs)

    } catch (error) {
        res.status(400).send(error)

    }
}

const findById = async (req, res) => {
    try {
        myid = req.params.id
        usr = await Users.findOne({ _id: myid })
        res.status(200).send(usr)

    } catch (error) {
        res.status(400).send(error)

    }
}

const deleteUser = async (req, res) => {

    try {
        myid = req.params.id
        usr = await Users.findOneAndDelete({ _id: myid })
        res.status(200).send(usr)

    } catch (error) {
        res.status(404).send(error)

    }
}

const updateUser = async (req, res) => {
    const { errors, isValid } = validateUser(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            const data = await Users.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            );
            res.status(201).json(data);
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    AddUser,
    findAllUsers,
    findById,
    updateUser,
    deleteUser,
};