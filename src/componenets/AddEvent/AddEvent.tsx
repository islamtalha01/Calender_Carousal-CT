
import type { CollapseProps } from 'antd';
import { Collapse,Row,Button } from 'antd';
// import { SettingOutlined } from '@ant-design/icons';
import CurrentDay from '../CurrentDay/CurrentDay';
import DateCardList from '../DateCardList/DateCardList';
const text = `
  Hi
`;
const genExtra = () => (
<CurrentDay/>
);
const Duration=()=>(
  <>
   <Button type="primary" shape="circle">
  +
</Button>
<p>2:00</p>
  <Button type="primary" shape="circle">
  -
</Button>
  </>
)
const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Date',
    children: <DateCardList/>,
    extra:genExtra()
    
  },
  {
    key: '2',
    label: 'Time',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Duration',
    children: <p>{text}</p>,
    extra:Duration(),
  },
];

function AddEvent () {














return (
  <Row style={{margin:'20px',justifyContent:'center'}}>
       <Collapse accordion items={items} style={{width:'800px'}} expandIconPosition='end' />
  </Row>
  
)

} 

export default AddEvent;