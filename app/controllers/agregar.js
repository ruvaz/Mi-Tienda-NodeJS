var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Camisetas = mongoose.model('camisetas');


module.exports = function(app) {
    app.use('/', router);
};

router.get('/agregar', function(req, res, next) {


    res.render('agregar', {
        title: 'Generator-Express MVC',
    });

});


router.post('/agregar', function(req, res, next) {

	


    var thing = new Camisetas({
        color: req.body.color ,
        precio: req.body.precio ,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
    });
    thing.save(); // iAmNotInTheSchema is not saved to the db
   
    console.log("guardar datos!! 8============================================================D");

    res.redirect('/tienda');

});