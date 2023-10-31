import React from 'react';
import { Divider, Menu, Checkbox } from 'antd';
import RangeSlider from './PriceRange';

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Categories', 'sub', [
    getItem('Mobile accessory', '1'),
    getItem('Electronics', '2'),
    getItem('Smartphones', '3'),
    getItem('Modern tech', '4'),
  ]),
];
const items1 = [
  {
    key: 'sub2',
    label: 'Features',
    children: [
      { label: 'Metallic', key: '9' },
      { label: 'Plastic cover', key: '10' },
      { label: '8GB RAM', key: '11' },
      { label: 'Super power', key: '12' },
      { label: 'Large memory', key: '12' },
    ],
  },
];
const items2 = [
  {
    key: 'sub3',
    label: 'Brands',
    children: [
      { label: 'Samsung', key: '9' },
      { label: 'Apple', key: '10' },
      { label: 'Huawaii', key: '11' },
      { label: 'Pocco', key: '12' },
      { label: 'Lenovo', key: '12' },
    ],
  },
];

function CustomMenu({ onClick, items }) {
  const { SubMenu } = Menu;

  const renderMenuItems = (menuItems) => {
    return menuItems.map((item) => {
      if (item.type === 'divider') {
        return <Menu.Divider key={item.key} />;
      } else if (item.children) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else {
        return (
            <>
          <Menu.Item key={item.key} icon={item.icon}>
            <Checkbox>{item.label}</Checkbox>
          </Menu.Item>
          </>
        );
      }
    });
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      {renderMenuItems(items)}
    </Menu>
  );
}

const MenuGroup = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className=" h-auto w-56">
      <Divider  />
      <Menu

        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub']}
        mode="inline"
        items={items}
      />
      <Divider />
      <CustomMenu items={items2} />

      <Divider />
      <CustomMenu items={items1} />
      <Divider />
      <Menu
      color='blue'
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub']}
        mode="inline"
        items={[
            {label:'Price range', key: 'price', children:[
                {label:(<RangeSlider />), key:'form'}
            ]}
        ]}
      />

      <Divider />

      <Divider />
    </div>
  );
};

export default MenuGroup;

// --------------------------------------------------
