import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderTopBox>
      <HeaderBox>
        <Logo to={'/'} />
        <RightNavBox>
          <RightNavItem onClick={() => navigate('/info')}>지원하기</RightNavItem>
          <RightNavItem>지원확인하기</RightNavItem>
        </RightNavBox>
      </HeaderBox>
    </HeaderTopBox>
  );
};

const HeaderTopBox = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BLACK};
`;

const HeaderBox = styled.div`
  padding: 20px 16px;
  box-sizing: border-box;
  margin: auto;
  height: 56px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 70px;
    padding: 27px 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 15px 0;
  }
`;

const RightNavBox = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 12px;
  font-weight: 500;
  gap: 16px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-weight: 700;
    gap: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-weight: 700;
    font-size: 18px;
    gap: 60px;
  }
`;

const RightNavItem = styled.button`
  all: unset;
  cursor: pointer;
`;

export default Header;
