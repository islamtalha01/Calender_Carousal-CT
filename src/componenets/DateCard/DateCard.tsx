import React from "react";
import { Card, Row,Col, Typography } from "antd";
import dummyData from "../../data/data";
const DateCard: React.FC = () => {
//   const { Meta } = Card;
const { Text,Title} = Typography;
  return (
    <Row gutter={[10,10]} >
      
        {dummyData.map((data) => (
           <Col>
            <Card
            key={data.id}
            title={data.month}
            hoverable
            bodyStyle={{ maxWidth:"150px" }}
            headStyle={{backgroundColor:"#F96458",color:"white",textAlign:"center"}}
          >
            <Card.Grid  hoverable={false} style={{width:"100%",padding:"5px",textAlign:"center" ,boxShadow:"0px"}}>
            <Title level={1}>{data.day}</Title>
            
            </Card.Grid>
            <Card.Grid hoverable={false}style={{width:"100%",padding:"5px",textAlign:"center",boxShadow:"0px"}} >
            <Text>{data.dayName}</Text>
            
            </Card.Grid>
           
          </Card>
           </Col>
         
        ))}
      
    </Row>
  );
};
export default DateCard;
