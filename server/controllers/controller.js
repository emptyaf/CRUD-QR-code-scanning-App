const { request } = require("express");
const axios = require('axios');
var Laptopdb = require(`../models/model`);

//create add and save new laptop

exports.create = (req,res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }

    //new laptop
    const laptop = new Laptopdb({
        name:req.body.name,
        id:req.body.id,
        cpu:req.body.cpu,
        ram:req.body.ram,
        storage:req.body.storage
    })

    //save laptop to database
    laptop
        .save(laptop)
        .then(data =>{
            //res.send(data)
            res.redirect('/add_laptop')
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
}


//retrieve and return all laptops / retrieve and return a single laptop
exports.find = (req,res) =>{
    if(req.query.id)
    {
        const id = req.query.id;

        Laptopdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "NOt found laptop with id" + id})
                }
                else{
                    res.send(data) 
                }
            })
            .catch(err =>{
                res.status(500).send({message: "error retrieving laptop with id : " + id})
            })
    }
    else{
        Laptopdb.find()
        .then(laptop => {
            res.send(laptop);
        })
        .catch(err =>{
            res.status(500).send({message : err.message || "error occured when retrieving laptop info"})
        })
    }
}

//update laptop by laptop id
exports.update = (req,res) =>{
    if(!req.body){
        return res
            .status(400)
            .send(({message: "Update data cannot be empty"}))
    }

    const id = req.params.id;
    Laptopdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(400).send({message: `Cannot update laptop with ${id}. Maybe laptop not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: "error update laptop info" })
        })
}


//delete laptop with id
exports.delete = (req,res) =>{
    const id = req.params.id;

    Laptopdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(400).send({message: `cannot delete with ${id}, maybe id is wrong`})
            }
            else{
                res.send({message: "Laptop delete successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({message: "Could not delete user with id: " + id});
        });
}


