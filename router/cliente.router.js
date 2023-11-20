const router = require("express").Router()
const controller = require('../controllers/clientes.control')

router.get('/clientes',controller.clientes)
router.get('/index',controller.clientes)
router.get('/segunda',controller.clientes)
router.get('/tercera',controller.clientes)
router.get('/iniciarsesion',controller.clientes)
router.get('/formulario',controller.clientes)


router.post('/clientes',function(req,res){    
    res.render('index');   
});

router.put('/clientes',function(req,res){    
    res.render('index');   
});

router.delete('/clientes',function(req,res){    
    res.render('index');   
});

module.exports = router;