import { Carousel, Row,Col,theme} from "antd";
import dummyData from "../../data/data";
import DateCard from "../DateCard/DateCard";
import { Date } from "../CalendarCarousal/calender.types"
import { Dayjs } from "dayjs"
const {useToken}=theme

type CardCarouselProps = {
  dates: Array<Date>
  onClick: (newDate: Dayjs) => void
}
export default function CalendarCarousal() {
 
  const {token}=useToken()
  return (
    <Carousel arrows={true}  style={{ maxWidth: "100vw" }} slidesPerRow={3}>
      
        {dummyData.map((data) => (
        <Row>
        <Col 
         style={{
          paddingLeft: token.paddingXS,
          paddingRight: token.paddingXS,
        }}>
        <DateCard
              id={data.id}
              
              month={data.month}
              date={data.date}
              day={data.day}
            />
        
        </Col>
        </Row>   
            
         
          
        ))}
      
    </Carousel>
  );
}
