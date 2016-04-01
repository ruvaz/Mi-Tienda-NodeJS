var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var quePutasMapeo = new Schema({
	color: String,
	precio: String,
	descripcion: String,
	imagen: String
},{collection: 'camisetas'});




mongoose.model('camisetas', quePutasMapeo);