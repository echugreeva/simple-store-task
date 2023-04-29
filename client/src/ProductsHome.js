import {useState, useEffect} from 'react'
import CartDropdown from './CartDropdown'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const ProductsHome = () => {
    const [products, setProducts] = useState('')
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
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

    const addToCart = (obj) => {
        setCartItems([...cartItems, obj])
    }


    
    
    
    useEffect(()=>{
        fetchProducts()
    },[])

   
        {
            if(!products) {
                return(
                    <Container>
                    <div>no productse yet</div>
                    </Container>
                    
                )
            } else {

                return (
                    <Container className="align-items-end text-right">  
                    <CartDropdown cartItems={cartItems} action={`Pay`} total={total}  />
                    <Row >
                        {
                            products.map(item=>{
                                return (
                                    <Card key={item.id} style={{ width: '18rem', margin: '1em' }}>
                                        <Card.Img variant="top" src={item.url} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                            <p>{item.description}</p>
                                            <p>Price: {item.price}</p>
                                            </Card.Text>
                                            <Button size='sm'
                                        onClick={()=>{
                                            setTotal(total+Number(item.price))
                                            addToCart({id:item.id, title:item.title, price:item.price})
                                            console.log(cartItems)
                                        }}
                                        >Buy</Button>
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

export default ProductsHome