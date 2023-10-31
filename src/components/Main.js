import React from 'react';
import MyBreadcrumb from '../utils/Breadcrumbs';
import MenuGroup from '../utils/Menu';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import HorizontalCard from './Card';
import GridListView from '../utils/GridListView';
import { Checkbox, Space } from 'antd';

const Main = () => {
  const filterList = [
    
  ]

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }; 
  return (
    <div className=" h-auto bg-slate-50">
      <MyBreadcrumb />
     <div className='flex justify-center '>
     <Sider className="ml-[115px] h-auto w-56">
        <MenuGroup />
      </Sider>
      <Content
      
      >
        <div className='flex flex-col ml-16 w-[865px] mt-6 h-auto '
        >
          <div className='flex items-center justify-between px-10 bg-white border border-gray-200 rounded-md h-16 mb-3'>
            <div>12,911 items in <strong>Mobile accessory </strong></div>
            <div className='flex items-center w-2/3 bg-slate-400 h-10 justify-evenly'>
            <Checkbox onChange={onChange}> Verified only</Checkbox>
            <Space size={79}>
              <select placeholder='Featured' options={filterList}>
                <option>
                  pace </option>
                <option>
                  pace </option>
                <option>
                  pace </option>
              </select>
            </Space>
            <GridListView />
            </div>
          </div>
          <HorizontalCard
            title={"Opna Women's Short Sleeve Moisture"}
            price={ 7.95}
            description={ "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort"}
            image={"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"}
            rating= {4.5}
          />
        </div>
      </Content>
     </div>
    </div>
  );
};

export default Main;
