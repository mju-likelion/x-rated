import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/images/icon_logo.svg';
import { ReactComponent as SmallLogo } from '../assets/images/icon_logo_small.svg';

const Header = () => {
  const [resize, setResize] = useState();
  const navigate = useNavigate();

  const goMainPage = () => {
    navigate('/');
  };

  const goApplyPage = () => {
    navigate('/info');
  };

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderTopBox>
      <HeaderBox>
        {resize >= 1200 ? <Logo onClick={goMainPage} /> : <SmallLogo onClick={goMainPage} />}
        <RightNavBox>
          <RightNavItem onClick={goApplyPage}>지원하기</RightNavItem>
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
    height: 70px;
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
