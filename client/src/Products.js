import {useState, useEffect} from 'react'
import axios from 'axios'
import MyModal from './Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Products = () => {
    const fetchProducts=()=>{
        fetch('http://localhost:3030/products')
        .then(res=>{
            if(res.status == 200) {
                console.log(res)
                return res.json()
            }}
            )
        .then(data=>{
            console.log(data)
            setProducts(data)
        }    
            )
        .catch(e=>{console.log(e)})
        
    }

    const deleteProduct=async (id)=>{

        try {
            const resp = await axios.delete(`http://localhost:3030/product/${id}`)
        
            alert((await resp).data.msg)
            }
        catch (e){
            console.log(e.response.data.msg)
        }
        fetchProducts()
    }

    const [products, setProducts] = useState('')
    
    
    useEffect(()=>{
        fetchProducts()
    },[])

   
        {
            if(!products) {
                return(
                    <Container>
                    <div>no productse yet</div>
                    <MyModal action={`add`}/>
                    </Container>
                    
                )
            } else {

                return (
                    <Container>  
                    
                    <MyModal action={`add`}/>
                    <Row>
                        {
                            products.map(item=>{
                                return (
                                    <Card key={item.id} style={{ width: '18rem', margin: '1em' }}>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                <p>{item.description}</p>
                                                <p>Price: {item.price}</p>
                                            </Card.Text>
                                            
                                                <MyModal  item={item} action={`edit`}/>
                                                <Button className='mx-2' variant="secondary" onClick={()=>{deleteProduct(item.id)}}>delete</Button>
                                            
                                            
                                        </Card.Body>
                                        </Card>
                                )
                            }
                            )
                        }
                        
                        
                        </Row>
                    </Container>
                )
            }
        }
        
    
}

export default Products