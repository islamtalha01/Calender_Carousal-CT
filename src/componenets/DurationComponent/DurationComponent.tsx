import { Button, Typography, Space,theme } from "antd";
const { Text } = Typography;
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const {useToken}=theme

type Durationprops = {
  value: string;
  handleIncrementClick: () => void;
  handleDecrementClick: () => void;
};
export default function DurationComponent({
  value,
  handleIncrementClick,
  handleDecrementClick,
}: Durationprops) {
 
  const{token}=useToken()
  return (
    <>
      <Space align="center">
        <Button
          type="default"
          shape="circle"
          size="large"
          icon={<PlusOutlined />}
          onClick={handleIncrementClick}
        
        ></Button>
        <Text style={{  fontSize: token.fontSizeLG}}>{value}</Text>
        <Button
          type="default"
          shape="circle"
          icon={<MinusOutlined />}
          onClick={handleDecrementClick}
          size="large"
        ></Button>
      </Space>
    </>
  );
}
