import { Button, Typography, Space,theme } from "antd";
const { Text } = Typography;
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const {useToken}=theme

type Durationprops = {
  value: string;
  onClickDecrement: () => void;
  onclickIncrement: () => void;
};
export default function DurationComponent({
  value,
  onClickDecrement,
  onclickIncrement,
}: Durationprops) {
 
  const{token}=useToken()
  return (
    <>
      <Space align="center">
        <Button
          type="default"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={onclickIncrement}
        ></Button>
        <Text style={{  color: token.colorTextSecondary,}}>{value}</Text>
        <Button
          type="default"
          shape="circle"
          icon={<MinusOutlined />}
          onClick={onClickDecrement}
        ></Button>
      </Space>
    </>
  );
}
