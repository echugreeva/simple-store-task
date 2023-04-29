import {getProducts, addProduct, updateProduct, deleteProduct, getSales, addSale, getSalesFiveDays,getDestinctTop } from '../modules/data.js'

export const _getProducts = (req,res) => {
    getProducts()
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _addProduct = (req, res) => {
    addProduct({title:req.body.title, description:req.body.description, price:Number(req.body.price),url:req.body.url})
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _updateProduct = (req, res) => {
    console.log(req.body)
    updateProduct(req.params.id, req.body.title, req.body.description,Number(req.body.price),req.body.url)
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _addSale = (req, res) => {
    console.log(req.body)
    console.log(req.body.cartItems[0].id)
    let ids=[]
    req.body.cartItems.map(i => {

        ids.push({id:Number(i.id) })
    })
    console.log(ids)
    addSale(ids)
    .then(data=> {
        res.json(data) })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _getSales = (req,res) => {
    getSales()
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _getSalesFiveDays = (req,res) => {
    let date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    // let date = new Date()
    // date = date.getDate()-5
    getSalesFiveDays (date)
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _getDestinctTop =(req,res) => {
    getDestinctTop()
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _deleteProduct = (req, res) => {
    
    deleteProduct(req.params.id)
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}