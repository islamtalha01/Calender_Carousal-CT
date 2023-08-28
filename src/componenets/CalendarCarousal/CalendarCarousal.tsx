import { Carousel, Row,Col,theme} from "antd";
// import dummyData from "../../data/data";
import DateCard from "../DateCard/DateCard";
import { Dates } from "../../common/types/calendar.types"
// import { Dayjs } from "dayjs"
const {useToken}=theme
import { getDatesList } from "../../utils/Date.utils";
import closedDatesArray from "../../data/data";

const datesList:Array<Dates>=getDatesList(10,closedDatesArray)
// type CardCarouselProps = {

//   dates: Array<Date>
  // onClick: (newDate: Dayjs) => void
// }
export default function CalendarCarousal() {
 
  const {token}=useToken()
  return (
    <Carousel arrows={true}  style={{ maxWidth: "100vw" }} slidesPerRow={3}>
      
        {datesList.map((data) => (
        <Row>
        <Col 
         style={{
          paddingLeft: token.paddingXS,
          paddingRight: token.paddingXS,
        }}>
        <DateCard
             date={data.date} closed={data.closed} 
            />
        
        </Col>
        </Row>   
            
         
          
        ))}
      
    </Carousel>
  );
}
