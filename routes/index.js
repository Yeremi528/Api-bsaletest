//Creamos constantes importando los modulos
const express = require('express');
const router = express.Router();
//Traeremos el pool que definimos en database para posteriormente traer los datos de la base de datos
const pool = require('../database/database');
//
router.get('/api/1', async(req,res)    => {    
    //Buscaremos la informacion de la base de datos
    const info = await pool.query('SELECT * FROM product')
     //Validaremos si existe la fotografia
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    //Filtraremos para sacar solo los array del id 1 para obtener productos de la misma categoria
    const infoScreen = comprobarImagen.filter(x => x.category == "1" )
    //Enviamos la informacion a la url que pasamos arriba /api/1
    res.send(infoScreen)
})
router.get('/api/4', async(req,res)    => {    
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const infoScreen = comprobarImagen.filter(x => x.category == "4" )
    res.send(infoScreen)
})

router.get('/api/2', async(req,res)    => {    
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const infoScreen = comprobarImagen.filter(x => x.category == "2" )
    res.send(infoScreen)
})

router.get('/api/3', async(req,res)    => {    
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const infoScreen = comprobarImagen.filter(x => x.category == "3" )
    res.send(infoScreen)
})

router.get('/api/5', async(req,res)    => {    
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const infoScreen = comprobarImagen.filter(x => x.category == "5" )
    res.send(infoScreen)
})

router.get('/api/6', async(req,res)    => {    
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const infoScreen = comprobarImagen.filter(x => x.category == "6" )
    res.send(infoScreen)
})

router.get('/api/7', async(req, res) => {
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const infoScreen = comprobarImagen.filter(x => x.category == "7" )
    res.send(infoScreen)
});

router.get('/api', async(req, res) => {
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    res.send(comprobarImagen)
});
router.get('/categoria', async(req, res) => {
    const infoCategoria = await pool.query('SELECT * FROM category')
    res.send(infoCategoria)
});

//Filtraciones para opciones Alfabetico
router.get('/orden', async(req,res)     =>  {
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const ordenInfoAlfabetico = comprobarImagen.sort(function (a, b) {
        if (a.name > b.name) {
             return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    res.send(ordenInfoAlfabetico)
})
//Orden numero de menor a mayor
router.get('/creciente',async(req,res)   => {
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const ordenPrecio = comprobarImagen.sort((a,b) => {
        if(a.price >  b.price){
            return 1
        }
        if(a.price < b.price){
            return -1;
        }
        return 0
    })
    res.send(ordenPrecio)
})
//Orden numero de mayor a menor
router.get('/decre', async(req,res)    =>  {
    const info = await pool.query('SELECT * FROM product')
    const comprobarImagen = info.filter(x => x.url_image !== null && x.url_image !== "")
    const ordenPrecioDecreciente = comprobarImagen.sort((a,b) => {
        if(a.price < b.price){
            return 1
        }
        if(a.price > b.price){
            return -1
        }
        return 0
    })

    res.send(ordenPrecioDecreciente)
})



//Exportamos router hacia api.js
module.exports = router;
