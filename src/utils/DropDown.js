import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const ReusableDropdown = ({ options, value,image, width, height }) => {
  const menu = (
    <Menu>
      {options.map((option, index) => (
        <Menu.Item key={index}>
          <a rel="noopener noreferrer" href={option.link}>
            {option.title}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown value={value} width={width} height={height} image={image} overlay={menu}>
      <a className="ant-dropdown-link" href='/'onClick={(e) => e.preventDefault()}>
       {value} {image} <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default ReusableDropdown;
