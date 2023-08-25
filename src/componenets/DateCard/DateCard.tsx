import { Card, Typography, theme } from "antd";

type CardData = {
  id: number;
  month: string;
  date: number;
  day: string;
};

export default function DateCard(props: CardData) {
  const { Text, Title } = Typography;
  const { useToken } = theme;
  const { token } = useToken();
  const headStyle:React.CSSProperties={
  backgroundColor: "#f96458",
  fontSize: token.fontSizeLG,
  fontWeight: 500,
  height: '25px',
  }
  const bodyStyle: React.CSSProperties = {
    color: token.colorTextSecondary,
   
  };
  return (
    
     <Card
      key={props.id}
      title={props.month}
      style={{ width: "150px", textAlign:"center", }}
      size="small"
      headStyle={headStyle}
      bodyStyle={bodyStyle}
    >
      <Title
        style={{
          fontWeight: "500",
          color: token.colorTextSecondary,
          margin: token.marginXS,
          fontSize: token.fontSizeHeading1,
         
        }}
      >
        {props.date}
      </Title>

      <Text
        style={{
          color: token.colorTextSecondary,
          fontSize: token.fontSizeLG,
        }}
      >
        {props.day}
      </Text>
    </Card>
    
   
  );
}
