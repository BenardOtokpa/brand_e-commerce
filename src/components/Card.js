import React from 'react';
import { Card, Button, Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const HorizontalCard = ({ image, title, rating, description }) => {
  return (
    <Card style={{ width: '100%' }}>
      <div className="flex w-full">
        <img alt={title} src={image} style={{ width: 100, height: '100%', objectFit: 'cover' }} />
        <div className="ml-4">
          <h3>{title}</h3>
            <Button className="ml-2" shape="circle" icon={<HeartOutlined />} />
          <div className="flex items-center mb-2 bg-slate-400">
            <Rate allowHalf defaultValue={rating} disabled />
            <span>{rating}</span>
            <span className='text-stone-300'>154 Orders</span>
            <span className='text-green-500'>Free Shipping</span>

          </div>
          <p>{description}</p>
          <Button type="primary">Learn More</Button>
        </div>
      </div>
    </Card>
  );
};

export default HorizontalCard;
