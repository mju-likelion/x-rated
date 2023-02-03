import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BigLogo from '../assets/images/icon_logo_big.svg';
import SmallLogo from '../assets/images/icon_logo_small.svg';

const Logo = ({ to }) => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBigLogoImg src={BigLogo} onClick={() => navigate(to)} />
      <HeaderSmallLogoImg src={SmallLogo} onClick={() => navigate(to)} />
    </>
  );
};

export default Logo;

const HeaderBigLogoImg = styled.img`
  display: none;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const HeaderSmallLogoImg = styled.img`
  cursor: pointer;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;
