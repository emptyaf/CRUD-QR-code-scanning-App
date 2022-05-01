const axios = require('axios');
const qr = require('qrcode');

exports.homeRoutes = (req,res) =>{
    //make a get request to /api/laptop
    axios.get('http://localhost:3000/api/laptop')
        .then(function(response){
            console.log(response.data);
            res.render('index', {laptop : response.data});
        })
        .catch(err =>{
            res.send({message: "error"});
        })
    
}

exports.add_laptop = (req,res) =>{
    res.render('add_laptop');
}

exports.update_laptop = (req,res) =>{
    axios.get('http://localhost:3000/api/laptop', {params : {id : req.query.id}})
        .then(function(response){
            res.render('update_laptop', {laptop : response.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.get_laptop = (req,res) =>{
   
            axios.get('http://localhost:3000/api/laptop', {params : {id : req.query.id}})
                .then(function(response){
                    console.log(req.query.id);
                    res.render('get_laptop', {laptop : response.data})
                })
                .catch(err =>{
                    res.send(err);
                })        
       
}

exports.get_qrcode = (req,res) =>{
    const id = req.query.id;
    
    qr.toDataURL(id, (err,src) =>{
        if(err) res.send("error occured");

        res.render('qr_code_image', {src});
    });   
}

exports.scan_qrcode = (req,res) =>{
    res.render('scan_qr_code');
}