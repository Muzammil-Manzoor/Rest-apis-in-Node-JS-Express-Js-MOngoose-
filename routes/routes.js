const express =require('express')
const router= express.Router()
const Model = require('../models/model');


//Post Method
router.post('/post',async(req,res)=>{
    const data=new Model({
        name:req.body.name,
        age:req.body.age
    })

    try{
        const dataSave=await data.save();
        res.status(201).json(dataSave)
    }
    catch(err){
        console.log(err)
    }

})

//Get all Method
router.get('/getAll', async(req, res) => {
    try{
        const data=await Model.find();
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
})

//Get by ID Method
router.get('/getOne/:id', async(req, res) => {
    try{
        const data=await Model.findById(req.params.id);
        res.json(data)
    }
    catch(arr){
        console.log(arr)
    }
})

//Update by ID Method
router.patch('/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


















module.exports=router