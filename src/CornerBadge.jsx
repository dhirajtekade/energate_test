import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInDiagonal = keyframes`
  from {
    opacity: 0;
    transform:  translate(50%, -50%);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const ChildElement = styled.div`
  position: relative;
  border-radius: ${props => props.borderRadius};
  overflow: hidden;
`;
const BadgeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  // overflow: hidden;
  // width: 50px;
  // height: 50px;
`;
// interface BadgeStyleProps {
//     backgroundColor: string
//     borderRadius: string
// }

const StyledBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-top: ${({ backgroundColor }) => `50px solid ${backgroundColor}`};
  // border-top-right-radius: ${({ borderRadius }) => borderRadius};
  opacity: 0.05;
  animation: ${fadeInDiagonal} 200ms ease-in-out forwards;
  //  overflow: hidden;
`;

export const CornerBadge = ({
  children,
  backgroundColor = '#234',
  // borderRadius = '0',
  icon,
  isVisible = true,
}) => {
  const childRef = useRef(null);
  const [borderRadius, setBorderRadius] = useState('0');

  useEffect(() => {
    if (childRef.current && childRef.current.firstChild) {
      const styles = window.getComputedStyle(childRef.current.firstChild);
      setBorderRadius(styles.borderTopRightRadius);
    }
  }, [children]);


  return (
    // <div className='flex'>
      <ChildElement ref={childRef}  borderRadius={borderRadius}>
        {children}
        {isVisible && (
          <BadgeWrapper>
            <StyledBadge
              backgroundColor={backgroundColor}
             
            >
              <div style={{ position: 'absolute', top: '-45px', right: '7px' }}>
                {icon}
              </div>
            </StyledBadge>
          </BadgeWrapper>
        )}
      </ChildElement>
    // </div>
  );
};
