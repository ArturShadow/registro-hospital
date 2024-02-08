const { Router } = require('express');
const userSchema = require('../Schemas/userSchma');

const router = Router();


router.post('/register', async (req, res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
	try {
		const nuevoUser = new userSchema(req.body);
		await nuevoUser.save().then(() => console.log('Se guardo')).catch(err => console.error(err.message));

		res.status(201).json({ message: "User register success" });
	}
	catch (error) {
		res.status(500).json({ message: "Error creating user" });
	}

})

router.get('/users', async (req, res) => {
	try {
		const data = await userSchema.find({});
		res.status(200).json(data);
	} catch (error) {
		res.json({ message: `Error: ${error.message}` });
	}
})

module.exports = router;