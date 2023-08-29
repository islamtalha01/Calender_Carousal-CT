import { Card, Typography, theme } from "antd";
import { Dayjs } from "dayjs"
// import useCalendar from "../../hooks/useCalendar";
type DateCardProps = {
  date: Dayjs
  closed?: boolean
  onClick: (newDate: Dayjs) => void
}

export default function DateCard(props: DateCardProps) {
  const { Text, Title } = Typography;
  const { useToken } = theme;
  const { token } = useToken();
  const headStyle:React.CSSProperties={
    backgroundColor: props.closed ? token.colorBgContainerDisabled : "#f96458",
  fontSize: token.fontSizeLG,
  fontWeight: 500,
  height: '25px',
  }
  const bodyStyle: React.CSSProperties = {
    color: token.colorTextSecondary,
   
  };
  const handleCardClick=():void=>
  {
     if(!props.closed&&props.onClick)
     {
      props.onClick(props.date)

      
     }
  }
  return (
    
     <Card
     hoverable={props.closed ? false : true}
      title={props.date.format("MMMM")}
      style={{ width: "150px", textAlign:"center", }}
      size="small"
      headStyle={headStyle}
      bodyStyle={bodyStyle}
      onClick={handleCardClick}
    >
      <Title
        style={{
          fontWeight: "500",
          color: token.colorTextSecondary,
          margin: token.marginXS,
          fontSize: token.fontSizeHeading1,
         
        }}
      >
        {props.date.date()}
      </Title>

      <Text
        style={{
          color: token.colorTextSecondary,
          fontSize: token.fontSizeLG,
        }}
      >
        {props.date.format("dddd")}
      </Text>
    </Card>
    
   
  );
}
