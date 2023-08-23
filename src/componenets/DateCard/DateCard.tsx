import React from "react";
import { Card, Col, Row } from "antd";
import dummyData from "../../data/data";
const DateCard: React.FC = () => {
//   const { Meta } = Card;

  return (
    <Row gutter={10} >
      
        {dummyData.map((data) => (
          <Card
            key={data.id}
            title={data.month}
            hoverable
            bodyStyle={{ minHeight: "250px" }}
          >
            <Card.Grid style={{width:"100%"}}>
            <p>Month: {data.day}</p>
            <p>DayName: {data.dayName}</p>
            </Card.Grid>
            <Card.Grid style={{width:"100%"}}>
            <p>Month: {data.day}</p>
            <p>DayName: {data.dayName}</p>
            </Card.Grid>
          </Card>
        ))}
      
    </Row>
  );
};
export default DateCard;
