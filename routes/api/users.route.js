const router = require('express').Router();
const userModel = require('../../models/users.model')

// router.get
//     ('/', (req, res) => {

//         res.end('EL USERS FUNSIONA')
//     })

router.post('/register', async (req, res) => {

    try {
        const [result] = await userModel.create(req.body)
        req.json(result);

    } catch (error) {
        res.json(error)
    }
})

module.exports = router;