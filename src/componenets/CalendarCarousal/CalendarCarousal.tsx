import { Carousel, Row, Col, theme } from "antd";
import { Dayjs } from "dayjs";
import DateCard from "../DateCard/DateCard";
import { DateType } from "../../common/types/calendar.types"
import useCalendar from "../../hooks";
const { useToken } = theme;

type CalenderCarouselProps = {
  dates: Array<DateType>;
  onClick:(date:Dayjs)=>void
};
export default function CalendarCarousal({dates,onClick}:CalenderCarouselProps) {
  const { token } = useToken();
  // const{setDate}=useCalendar()
  return (
    <Carousel arrows={true} style={{ maxWidth: "100vw" }} slidesPerRow={3}>
      {dates.map((data) => (
        <Row>
          <Col
            style={{
              paddingLeft: token.paddingXS,
              paddingRight: token.paddingXS,
            }}
          >
            <DateCard date={data.date} closed={data.closed} onClick={onClick}/>
          </Col>
        </Row>
      ))}
    </Carousel>
  );
}
