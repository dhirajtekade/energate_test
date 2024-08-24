import React from 'react';
import { useState } from 'react';
// import {CornerBadgeContainer} from './CornerBadgeContainer.jsx'
import { CornerBadge } from './CornerBadge.jsx';

const Story = () => {
  const defaultColor = '#234123';
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(defaultColor);
  const [icon, setIcon] = useState(1);

  const iconOptions = [
    { value: 1, label: '1 option' },
    { value: 2, label: '2 option' },
    { value: 3, label: '3 option' },
    { value: 4, label: '4 option' },
  ];

  return (
    <>
      <div className='border p-5 m-5 flex'>
        <CornerBadge
          backgroundColor="#689"
          icon={1}
          isVisible={true}
          className='flex flex-row'
        >
          <div className='h-64 w-64 bg-blue-500 p-2'>Sample 1</div>
        </CornerBadge>
      </div>
      <div className='border p-5 m-5 bg-slate-100'>
        <div className='form_inputs grid grid-cols-3 gap-4 '>
          <div className='flex items-center'>
            <label className='p-2 mr-2'>Background Color:</label>
            <input
              type='color'
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
          <div className='flex items-center'>
            <label className='p-2 mr-2'>Icon:</label>
            <select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className='border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500' // Tailwind classes for border and rounded corners
            >
              {iconOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center'>
            <label className='p-2 mr-2'>Badge Visible:</label>
            <input
              type='checkbox'
              checked={badgeVisible}
              onChange={(e) => setBadgeVisible(e.target.checked)}
            />
          </div>
        </div>

        <div className='flex flex-row '>
          <CornerBadge
            backgroundColor={backgroundColor}
            // borderRadius='24px'
            icon={icon}
            isVisible={badgeVisible}
          >
            <div className='h-64 w-64 bg-orange-500 p-2 rounded-3xl'>
              Sample 2
            </div>
          </CornerBadge>

          <CornerBadge
            backgroundColor={backgroundColor}
            // borderRadius='6px'
            icon={icon}
            isVisible={badgeVisible}
          >
            <div className='h-64 w-64 bg-white p-2 rounded-md'>
              Sample 3
            </div>
          </CornerBadge>

          <CornerBadge
            backgroundColor={backgroundColor}
            // borderRadius='2px'
            icon={icon}
            isVisible={badgeVisible}
          >
            <div className='h-64 w-64 bg-green-500 p-2 rounded-sm'>
              Sample 4
            </div>
          </CornerBadge>
        </div>
      </div>
    </>
  );
};

export default Story;
