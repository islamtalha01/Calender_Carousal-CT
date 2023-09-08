import { Card, Typography, theme } from "antd";
import { Dayjs } from "dayjs";
import inLineStyles from "./inLineStyles";
type DateCardProps = {
  date: Dayjs;
 
  unavailable?: boolean;
  onClick: (newDate: Dayjs) => void;
};

export default function DateCard(props: DateCardProps) {
  const { Text, Title } = Typography;
  const { useToken } = theme;
  const { token } = useToken();
  const { headStyleopen, headStyleclosed, bodyStyle } = inLineStyles();

  const handleCardClick = (): void => {
    if (!props.unavailable && props.onClick) {
      props.onClick(props.date);
    }
  };
  return (
    <Card
     
      hoverable={props.unavailable ? false : true}
      title={props.date.format("MMMM")}
      style={{ width: "150px", textAlign: "center" }}
      size="small"
      headStyle={props.unavailable ? headStyleclosed : headStyleopen}
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
