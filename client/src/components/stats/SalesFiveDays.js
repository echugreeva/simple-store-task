import {useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'



const SalesFiveDays = ()=>{
    const [sales, setSales]=useState([])

    const getSales = () => {
        fetch('http://localhost:3030/sales-five-days')
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
        getSales()
    },[])

    return (
       
        <Card style={{ width: '18rem', margin: '1em', padding:'1em' }} >
            <Card.Body>
                <Card.Title>
                    <h3>Sales last 5 days</h3>
                </Card.Title>

        { sales&&
            sales.map(i=>{
                return(
                    <Card.Text>
                    <p>{i.day.slice(0,10)} - total rev: ${i.sum}</p>
                    
                    </Card.Text>
                    
                )
            })
        }
        </Card.Body>
            
        </Card>
    )
}

export default SalesFiveDays