import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/images/icon_logo.svg';

const HeaderTopBox = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.Colors.BLACK};
`;

const HeaderBox = styled.div`
  width: 1200px;
  margin: auto;
  height: 70px;
  display: flex;
  align-items: center;
`;

const RightNavBox = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 18px;
  font-weight: 700;
`;

const RightNavItem = styled.div`
  margin-left: 60px;
`;

const Header = () => {
  return (
    <HeaderTopBox>
      <HeaderBox>
        <Logo />
        <RightNavBox>
          <RightNavItem>지원하기</RightNavItem>
          <RightNavItem>지원확인하기</RightNavItem>
        </RightNavBox>
      </HeaderBox>
    </HeaderTopBox>
  );
};

export default Header;
