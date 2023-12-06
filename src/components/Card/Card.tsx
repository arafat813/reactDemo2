import React from 'react';
import './Card.less'
import { SyncOutlined } from '@ant-design/icons';
import { Button, Card, Switch  } from 'antd';

const MyCard: React.FC = ({data, children}) =>{ 
  return (
  <Card className='myCard' title={data.title} headStyle={{backgroundColor: '#f7f7f7'}}
    extra={
      <div className='func'>
        <Func1></Func1>
        <Func2></Func2>
      </div>
    }>
    {children}
  </Card>
)};

function Func1(){
  return(
    <Button shape="circle" icon={<SyncOutlined />} />
  )
}

function Func2(){
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return(
    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
      <div>使用模型参数修改详情</div>
      <Switch defaultChecked onChange={onChange}></Switch>
    </div>
  )
}

export default MyCard;