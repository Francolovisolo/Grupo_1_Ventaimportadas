const path = require("path");

const registerController = {
    register: (req,res)=> {
        res.sendFile("/", path.resolve(__dirname,"../../views/register.html"));
    }
}

module.exports = registerController;