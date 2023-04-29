import {useState} from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormUpdate = ({item})=> {
    // console.log(item)
    const [title, setTitle] = useState(item.title)
    const [description, setDescription] = useState(item.description)
    const [url, setImage] = useState(item.url)
    const [price, setPrice] = useState(item.price)
    // console.log(title)
    

    const submitChanges = async ()=>{

        try {
            const resp = await axios.post(`http://localhost:3030/product/${item.id}`
            , { title, description, url, price

            },
            {
                withCredentials:true, 
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            )
        alert((await resp).data.msg)
        }
        catch (e){
            console.log(e.response.data.msg)
        }
        


    }


   
        return(
            
            <Form>
            <Form.Control className='mb-1' type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}></Form.Control>
            <Form.Control className='mb-1' type="text" placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}></Form.Control>
            <Form.Control className='mb-1' type="text" placeholder='image link' value={url} onChange={(e)=>setImage(e.target.value)}></Form.Control>
            <Form.Control className='mb-1' type="text" placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)}></Form.Control>
            <Button onClick={()=>{
                submitChanges()}
                }>submit</Button>
        </Form>
        )

    
}

export default FormUpdate