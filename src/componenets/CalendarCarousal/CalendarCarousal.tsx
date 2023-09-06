import { Carousel, Row, Col, theme } from "antd";
import { useRef } from "react";
import { Dayjs } from "dayjs";
import DateCard from "../DateCard/DateCard";
import { DateType } from "../../common/types/calendar.types";
import { CarouselRef } from "antd/es/carousel";
import { useCalendar, useCarousalScroll } from "../../hooks";

const { useToken } = theme;

type CalenderCarouselProps = {
  dates: Array<DateType> | undefined;
  onClick: (date: Dayjs) => void;
};
export default function CalendarCarousal({
  dates,
  onClick,
}: CalenderCarouselProps) {
  const { token } = useToken();
  const { cardCount } = useCalendar();
  const carouselRef = useRef<CarouselRef>(null);
  useCarousalScroll(carouselRef);

  return (
    <Carousel
      ref={carouselRef}
      infinite={false}
      arrows={true}
      style={{ maxWidth: "100vw" }}
      slidesPerRow={cardCount}
      dots={false}
    >
      {dates?.map((data) => (
        <Row>
          <Col
            style={{
              paddingLeft: token.paddingXS,
              paddingRight: token.paddingXS,
            }}
          >
            <DateCard date={data.date} closed={data.closed} onClick={onClick} />
          </Col>
        </Row>
      ))}
    </Carousel>
  );
}
