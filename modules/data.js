import db from '../connections/elephant_db.js'

export const getProducts = () => {
    return db('sistore_product')
    .select('*')
}

export const addProduct = (product) => {
    return db('sistore_product')
    .insert(product)
    .returning('*')
}
export const updateProduct = (id, title, description,price,url)=> {
    return db('sistore_product')
    .where({id: id})
    .update({
        title:title,
        description:description,
        price:price,
        url:url,
    })
    .returning('*')

}

export const deleteProduct = (id) => {
    return db('sistore_product')
    .where({id: id})
    .delete()
    .returning('*')
}
export const getSales = () => {
    return db('sistore_sales')
        .join('sistore_product', 'sistore_sales.id','sistore_product.id')
        .select('sistore_sales.id', 'title')
        .sum('price')
        .count('sistore_sales.id', {as:'sales'}) 
        .groupBy('sistore_sales.id', 'title')
        .limit(5)
    
}

//need a join to get price by id sum 
 export const getSalesFiveDays = (date) => {
    // console.log(date)
    return db('sistore_sales')
        .join('sistore_product', 'sistore_sales.id','sistore_product.id')
        .select('day')
        .sum('price')
        .groupBy('day')
        // .groupBy('sistore_sales.id','title','date','::date')
        .where('day', '>', date)
        
    
}

export const getDestinctTop = ()=>{
    return db('sistore_sales')
    .join('sistore_product', 'sistore_sales.id','sistore_product.id')
    .select('title')
    .count('sistore_sales.id', {as:'sales'}) 
    .groupByRaw('DATE_TRUNC(\'minute\', date)')
    .groupBy('title')
    .limit(5)
}

// .where({ date is 5 days from today sum of lines by produt id order desc limit 5
        
    // })
export const addSale = (ids)=> {
    return db('sistore_sales')
    .insert(ids)
    .returning('*')

}

