const mongoose = require('mongoose');

async function conectar() {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/register-app')
		console.log('Connection success');
	} catch (error) {
		console.error(`Error connection: ${error.message}`);
	}
}

module.exports = conectar;