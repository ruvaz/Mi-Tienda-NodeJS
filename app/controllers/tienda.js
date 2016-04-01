var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Camisetas = mongoose.model('camisetas');



module.exports = function(app) {
    app.use('/', router);
};




router.get('/tienda', function(req, res, next) {

    Camisetas.find(function(err, camisetas) {
        if (err) return next(err);

        res.render('tienda', {
            titulo: 'Tienda de Camisetas',
            camisetas: camisetas
        });

        //console.log(camisetas);
        //console.log("====================");
    });

});


router.get('/tienda/comprar/:camiseta', function(req, res, next) {

     
            Camisetas.find({
                color: req.params.camiseta
            }, function(err, camisetas) {
                if (err) return next(err);

                res.render('compra', camisetas[0] );

                console.log(camisetas);
                console.log("*************");
            });


});



 


