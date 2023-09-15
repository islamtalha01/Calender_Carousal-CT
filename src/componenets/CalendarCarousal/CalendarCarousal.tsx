import { Carousel, Row, Col, theme, Button } from "antd";
import { useRef } from "react";
import { Dayjs } from "dayjs";
import DateCard from "../DateCard/DateCard";
import { DateType } from "../../common/types/calendar.types";
import { CarouselRef } from "antd/es/carousel";
import { useCalendar, useCarousalScroll } from "../../hooks";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
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
    <Row align={"middle"} style={{ margin: token.marginLG }}>
      <Col lg={1} md={2} sm={3} xs={4}>
        <Button
          data-testid="btn-carousal"
          onClick={() => carouselRef.current?.prev()}
          size="large"
          shape="circle"
          icon={<LeftOutlined />}
        />
      </Col>
      <Col lg={22} md={20} sm={18} xs={16}>
        <Carousel
          ref={carouselRef}
          infinite={false}
          arrows={false}
          style={{ maxWidth: "100vw" }}
          slidesPerRow={cardCount}
          dots={false}
        >
          {dates?.map((data, index) => (
            <Row key={index} style={{}}>
              <Col
                style={{
                  padding: token.paddingXS,
                }}
              >
                <DateCard
                  date={data.date}
                  unavailable={data.unavailable}
                  onClick={onClick}
                />
              </Col>
            </Row>
          ))}
        </Carousel>
      </Col>

      <Col lg={1} md={2} sm={3} xs={4}>
        <Button
          data-testid="btn-carousal"
          onClick={() => carouselRef.current?.next()}
          size="large"
          shape="circle"
          icon={<RightOutlined />}
        />
      </Col>
    </Row>
  );
}
