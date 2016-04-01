var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CamisetaMapeo = new Schema({
    color: String,
    precio: String,
    descripcion: String,
    imagen: String
},{collection: 'camisetas'});





mongoose.model('Camiseta', CamisetaMapeo);