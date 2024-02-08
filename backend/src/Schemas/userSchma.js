const { Schema, model } = require('mongoose');
const UserSchema = new Schema(
	{
		nombre: String,
		apellido: String,
		fecha_nacimiento: Date,
		genero: String,
		direccion: String,
		telefono: String,
		fecha_ingreso: Date
	}
)

module.exports = model('user', UserSchema);