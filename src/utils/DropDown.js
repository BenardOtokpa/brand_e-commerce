import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const ReusableDropdown = ({ options, value, image, dropdownStyles }) => {
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
    <Dropdown value={value} image={image} overlay={menu}>
      <a
        className="ant-dropdown-link whitespace-pre flex items-center justify-between text-sm"
        href="/"
        onClick={(e) => e.preventDefault()}
      >
        {value} {image} <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default ReusableDropdown;
