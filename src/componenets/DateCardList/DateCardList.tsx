import dummyData from "../../data/data";

import { Card, Row, Col, Typography, Carousel } from "antd";
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function DateCardList() {
  const { Text, Title } = Typography;

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel
        afterChange={onChange}
        dotPosition="bottom"
        slidesPerRow={3}
        style={{ width:"100%"}}
      >
    
        {dummyData.map((data) => (

          <Col span={6}  >
            <Card
              key={data.id}
              title={data.month}
              hoverable
              headStyle={{
                backgroundColor: "#F96458",
                color: "white",
                textAlign: "center",
               
              }}
              style={{margin:"10px 10px"}}
            >
              <Card.Grid
                hoverable={false}
                style={{
                  width: "100%",
                  padding: "5px",
                  textAlign: "center",
                  boxShadow:"none",
                }}
              >
                <Title level={2}>{data.day}</Title>
              </Card.Grid>
              <Card.Grid
                hoverable={false}
                style={{
                  width: "100%",
                  padding: "5px",
                  textAlign: "center",
                  boxShadow:"none",
                }}
              >
                <Text>{data.dayName}</Text>
              </Card.Grid>
            </Card>
          </Col>
        ))}
      </Carousel>
    </>
  );
}
