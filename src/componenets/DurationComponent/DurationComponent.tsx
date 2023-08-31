import { Button, Typography, Space } from "antd";
const { Text } = Typography;
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

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
 

  return (
    <>
      <Space align="center">
        <Button
          type="default"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={onclickIncrement}
        ></Button>
        <Text>{value}</Text>
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
