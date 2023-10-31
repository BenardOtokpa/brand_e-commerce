import React, { useState } from 'react';
import { Slider, InputNumber, Button } from 'antd';

const RangeSlider = () => {
  const [minSpace, setMinSpace] = useState(0);
  const [maxSpace, setMaxSpace] = useState(100);

  const handleMinChange = (value) => {
    setMinSpace(value);
  };

  const handleMaxChange = (value) => {
    setMaxSpace(value);
  };

  const handleApply = () => {
    // Do something with minSpace and maxSpace values
    alert('Min Space:', minSpace, 'Max Space:', maxSpace);
  };

  return (
    <div className="w-fill mx-auto mt-8">
      <div className="mt-8">
        <Slider
          range
          step={1}
          min={0}
          max={100}
          value={[minSpace, maxSpace]}
          onChange={(values) => {
            setMinSpace(values[0]);
            setMaxSpace(values[1]);
          }}
        />
      </div>
     <div className='flex justify-between items-baseline h-20'>
     <div className="flex flex-col">
        <strong>Min </strong>
        <InputNumber
          min={0}
          max={1000000}
          value={minSpace}
          onChange={handleMinChange}
        />
      </div>
      <div className="flex flex-col mt-8">
        <strong>Max</strong>
        <InputNumber
          min={0}
          max={100000}
          value={maxSpace}
          onChange={handleMaxChange}
        />
      </div>
     </div>
      <div className="mt-8 w-full flex justify-center">
        <Button type="primary" className='w-full bg-white text-black' onClick={handleApply}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default RangeSlider;
