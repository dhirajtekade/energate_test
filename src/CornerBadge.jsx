import styled, { keyframes } from 'styled-components';

const fadeInDiagonal = keyframes`
  from {
    opacity: 0;
    transform:  translate(5%, -5%);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const ChildElement = styled.div`
  position: relative;
`;
const BadgeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
  border-top-right-radius: ${({ borderRadius }) => borderRadius};
  opacity: 0.05;
  animation: ${fadeInDiagonal} 200ms ease-in-out forwards;
`;

export const CornerBadge = ({
  children,
  backgroundColor = '#234',
  borderRadius = '0',
  icon,
  isVisible = true,
}) => {
  return (
    // <div className='flex'>
      <ChildElement>
        {children}
        {isVisible && (
          <BadgeWrapper>
            <StyledBadge
              backgroundColor={backgroundColor}
              borderRadius={borderRadius}
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
