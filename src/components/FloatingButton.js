import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as BigChat } from '../assets/images/btn_floating_l.svg';
import { ReactComponent as SmallChat } from '../assets/images/btn_floating_s.svg';

const FloatingButton = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const DESKTOP_WIDTH = 1199;
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });
  return <FloatingButtonBlock>{innerWidth > DESKTOP_WIDTH ? <BigChat /> : <SmallChat />}</FloatingButtonBlock>;
};

const FloatingButtonBlock = styled.div`
  position: sticky;
  margin-right: 16px;
  float: right;
  bottom: 0px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-right: 130px;
  }
`;

export default FloatingButton;
