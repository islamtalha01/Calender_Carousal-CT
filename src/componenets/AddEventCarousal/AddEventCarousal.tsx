
import {Carousel,Row,Col} from "antd"
import dummyData from '../../data/data'
import DateCard from '../DateCard/DateCard'
// type CardData={
//     id: number;
//     title: string;
//     month: string;
//     day: number;
//     dayName: string;
//   }
  

export default function AddEventCarousal() {
  return (
   <Carousel
   style={{maxWidth:"100vh",}}
   slidesPerRow={3}
   >
   
   {dummyData.map((data)=>(
    <Row>
    <Col >
   <DateCard id={data.id} title={data.title} month={data.month} day={data.day} dayName={data.dayName} />
   </Col>
    </Row>


   ))}


   </Carousel>
  )
}
