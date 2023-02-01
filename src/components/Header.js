import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/images/icon_logo.svg';
import SmallLogo from '../assets/images/icon_logo_small.svg';

const Header = () => {
  const navigate = useNavigate();

  const routePage = route => {
    navigate(`/${route}`);
  };

  return (
    <HeaderTopBox>
      <HeaderBox>
        <HeaderBigLogoImg src={Logo} onClick={() => routePage('')} />
        <HeaderSmallLogoImg src={SmallLogo} onClick={() => routePage('')} />
        <RightNavBox>
          <RightNavItem onClick={() => routePage('info')}>지원하기</RightNavItem>
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
  width: 318px;
  margin: auto;
  height: 56px;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    height: 70px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
  }
`;

const HeaderBigLogoImg = styled.img`
  display: none;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const HeaderSmallLogoImg = styled.img`
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
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
  &:hover {
    cursor: pointer;
  }
`;

export default Header;
