import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderTopBox>
      <HeaderBox>
        <HeaderLogoBox onClick={() => navigate('/')}>
          <Logo />
          <HeaderSiteInfo>APPLY</HeaderSiteInfo>
        </HeaderLogoBox>
        <RightNavBox>
          <RightNavItem onClick={() => navigate('/info')}>
            <p>지원하기</p>
          </RightNavItem>
          <RightNavItem onClick={() => navigate('/check')}>
            <p>지원확인하기</p>
          </RightNavItem>
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
  z-index: 50;
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

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    gap: 6px;
  }
`;

const HeaderSiteInfo = styled.div`
  font-size: 15px;
  line-height: 10px;
  font-weight: 500;
  font-family: Montserrat;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 17px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 28px;
    line-height: 21px;
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
