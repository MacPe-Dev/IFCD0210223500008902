const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema(
    {
    cod: Number,
	nombre: String,
	apellidos: String,
	edad: Number,
	mail: String
    }
)

module.exports = mongoose.model('user', UserSchema)