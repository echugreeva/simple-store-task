import {useState} from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const MyForm = ()=> {
    // console.log(item)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [url, setImage] = useState('')
    const [price, setPrice] = useState('')
    // console.log(title)
    const submitNew = async ()=>{

        try {
            const resp = await axios.post(`http://localhost:3030/product`
            , {title, description, url, price

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
                    submitNew()}
                    }>submit</Button>
            </Form>
        )
    
    
}

export default MyForm