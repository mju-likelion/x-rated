import React from 'react';

import styled from 'styled-components';

import BigChat from '../../assets/images/btn_floating_l.svg';
import SmallChat from '../../assets/images/btn_floating_s.svg';

const FloatingButton = () => {
  return (
    <FloatingButtonBlock id="custom-button">
      <BigChatImg src={BigChat} />
      <SmallChatImg src={SmallChat} />
    </FloatingButtonBlock>
  );
};

const FloatingButtonBlock = styled.div`
  position: sticky;
  margin-right: 16px;
  float: right;
  bottom: 0px;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-right: 130px;
  }
`;

const BigChatImg = styled.img`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
    margin-bottom: 69px;
  }
`;

const SmallChatImg = styled.img`
  display: block;
  margin-bottom: 43px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

export default FloatingButton;