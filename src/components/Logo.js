import React from 'react';

import styled from 'styled-components';

import { ReactComponent as BigLogo } from '../assets/images/icon_logo_big.svg';
import { ReactComponent as SmallLogo } from '../assets/images/icon_logo_small.svg';

const Logo = () => {
  return (
    <>
      <HeaderBigLogo />
      <HeaderSmallLogo />
    </>
  );
};

export default Logo;

const HeaderBigLogo = styled(BigLogo)`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const HeaderSmallLogo = styled(SmallLogo)`
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;
