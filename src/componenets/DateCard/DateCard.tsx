import { Card, Typography } from "antd";
type CardData = {
  id: number;
  title: string;
  month: string;
  day: number;
  dayName: string;
};
export default function DateCard(props: CardData) {
  const { Text, Title } = Typography;

  return (
   
        <Card
          key={props.id}
          title={props.month}
          style={{width:"200px"}}
          headStyle={{
            backgroundColor: "#F96458",
            color: "white",
            textAlign: "center",
          }}
        >
          <Title level={5}>{props.day}</Title>

          <Text style={{ fontSize: "20px" }}>{props.dayName}</Text>
        </Card>
  )
}
