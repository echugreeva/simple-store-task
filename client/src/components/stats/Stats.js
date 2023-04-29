import TopFive from './TopFive'
import SalesFiveDays from './SalesFiveDays'
import TopFiveDestinct from './TopFiveDestinct'
import Container from 'react-bootstrap/esm/Container'

const Stats = ()=>{
    return (
        <Container className='d-flex flex-row justify-content-evenly'>
        
            <TopFive/>
            <TopFiveDestinct/>

            <SalesFiveDays/>
        
        </Container>
    )
}
export default Stats