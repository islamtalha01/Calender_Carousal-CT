import {Button,Typography,Space} from 'antd'
const {Text}=Typography
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
type Durationprops ={
  value:number,
  onClickDecrement:(value:number)=>void,
  onclickIncrement:(value:number)=>void,

}
export default function DurationComponent({value,onClickDecrement,onclickIncrement}:Durationprops) {
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