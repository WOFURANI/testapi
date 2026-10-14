const User = require('../models/user.model')



const usercontroller = {
    showall: async (req, res) => {
        try {
            const users= await User.findAll(

            )
            res.send(users)


        } catch (err) {
            console.log("error creation user", err.message)
        }




    }
}
module.exports=usercontroller