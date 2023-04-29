import {useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';



const TopFiveDestinct = ()=>{
    const [sales, setSales]=useState([])

    const getDestinctSales = () => {
        fetch('http://localhost:3030/sales-dest')
        .then(res=>{
            if(res.status == 200) {
                console.log(res)
                return res.json()
            }}
            )
        .then(data=>{
            console.log(data)
            setSales(data)
        }    
            )
        .catch(e=>{console.log(e)}) 
    }

    useEffect(()=>{
        getDestinctSales()
    },[])

    return (
        <Card  style={{ width: '18rem', margin: '1em', padding:'1em' }}>
            <Card.Body>
                <Card.Title>
                    <h3>Top 5 products (1 per purchase)</h3>
                </Card.Title>
                
        { sales&&
            sales.map(i=>{
                return(
                    <ListGroup variant="flush" key={i.id}>
                        <ListGroup.Item>
                        <p>{i.title} - sales: {i.sales} </p>
                        </ListGroup.Item>
                    
                    </ListGroup>
                    
                )
            })
        }
            
          </Card.Body>  
        </Card>
    )
}

export default TopFiveDestinct