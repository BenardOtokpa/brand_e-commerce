import React from 'react';
import { Breadcrumb } from 'antd';

const MyBreadcrumb = () => {
  return (
    <div className='h-12 flex items-center'>
        <Breadcrumb className=' text-base ml-[115px]'
      separator=">"
      items={[
        {
          title: 'Home',
        },
        {
          title: 'Clothings',
          href: '',
        },
        {
          title: 'Mens Wears',
          href: '',
        },
        {
          title: 'Summer Clothing',
        },
      ]}
    />
    </div>
  );
};

export default MyBreadcrumb;
