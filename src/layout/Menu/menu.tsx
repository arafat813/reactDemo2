import React, { useState } from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import routes from '../../routers/index'
import { useNavigate  } from "react-router-dom";
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  disabled: Boolean,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    disabled,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('模型配置', '1',false, <PieChartOutlined />),
  getItem('收益概况', '2',false, <DesktopOutlined />),
  getItem('收益详情', '3',false, <ContainerOutlined />),
  getItem('月度收益', '4',true, <ContainerOutlined />),
];

const MyMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuSelct = ({ keyPath }) => {
    // for(let i of routes){
    //   console.log(i)
    // }
    if(keyPath[0] == 1){
      navigate('/')
    }
    if(keyPath[0] == 2){
      navigate('/demo')
    }
    if(keyPath[0] == 3){
      navigate('/lern')
    }
    console.log( keyPath)
  };

  return (
    <div>
      <Button type="text" onClick={toggleCollapsed} style={{ position: 'absolute', bottom: '0', width: '100%'}}>
        {collapsed ? <MenuUnfoldOutlined  style={{color: '#000000', fontSize: '20px'}}/> : <MenuFoldOutlined  style={{color: '#000000', fontSize: '20px'}}/>}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        style={{border: 'none',backgroundColor: '#f4f4f4'}}
        onSelect={menuSelct}
      />
    </div>
  );
};

export default MyMenu;