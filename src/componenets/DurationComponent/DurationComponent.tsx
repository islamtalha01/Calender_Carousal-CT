import {Button,Typography,Space} from 'antd'
const {Text}=Typography
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

export default function DurationComponent() {
  return (
<>
  <Space align='center'>
  <Button type="default" shape="circle" icon={<PlusOutlined/>}>
    
  </Button>
  <Text>
    2:00
  </Text>
  <Button type="default" shape="circle" icon={<MinusOutlined/>}>
    
  </Button>
  </Space>

  
</>

 
  )
}