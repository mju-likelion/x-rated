import React, { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

const Header = () => {
  const navigate = useNavigate();

  const path = useLocation().pathname;

  const [headerStatus, setHeaderStatus] = useState({});
  const { cursorPointer, isClickActived, opacity } = headerStatus;

  useEffect(() => {
    if (path === '/write') {
      setHeaderStatus({
        cursorPointer: 'not-allowed',
        isClickActived: 'none',
        opacity: 0.2,
      });
    } else setHeaderStatus({});
  }, [path]);

  return (
    <HeaderTopBox>
      <HeaderBox>
        <HeaderLogoBox onClick={() => navigate('/')}>
          <Logo />
          <HeaderSiteInfo>APPLY</HeaderSiteInfo>
        </HeaderLogoBox>
        <RightNavBox>
          <RightNavItem onClick={() => navigate('/info')} cursorPointer={cursorPointer} isClickActived={isClickActived}>
            <NavItemText opacity={opacity}>지원하기</NavItemText>
          </RightNavItem>
          <RightNavItem onClick={() => navigate('/check')}>
            <NavItemText>지원확인하기</NavItemText>
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
  cursor: ${({ cursorPointer }) => cursorPointer || 'pointer'};
  pointer-events: ${({ isClickActived }) => isClickActived || 'default'};
`;

const NavItemText = styled.p`
  opacity: ${({ opacity }) => opacity || 1};
`;

export default Header;
