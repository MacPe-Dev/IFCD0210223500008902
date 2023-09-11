const mongoose =  require('mongoose')

const CursoSchema = new mongoose.Schema(
    {
        _id: String,
		name: String,
		description: String,
		category: String,
		duracion: Number,
		temas: String,
		image: String
    }
)

module.exports = mongoose.model('curso', CursoSchema)