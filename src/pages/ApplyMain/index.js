import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button';

import ApplyMainTop from './ApplyMainTop';
import { PART_DATA } from './PartData.js';
import PartInfo from './PartInfo';
import PartInfoMobile from './PartInfoMobile';
import PartInfoTablet from './PartInfoTablet';

const ApplyMainPage = () => {
  const [testState, setTestState] = useState('');
  const [error, setError] = useState('');
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });

  const test = e => {
    setTestState(e.target.value);
  };

  useEffect(() => {
    if (testState.length >= 5 || testState.length === 0) {
      setError('에러입니당');
    } else {
      setError('');
    }
  }, [testState]);

  return (
    <ApplyMainPageBlock>
      <ApplyMainTop />
      <PartInfoDiv>
        {PART_DATA.map((apply, index) =>
          innerWidth > 1199 ? (
            <PartInfo partInfo={apply} key={index} />
          ) : innerWidth > 599 ? (
            <PartInfoTablet partInfo={apply} key={index} />
          ) : (
            <PartInfoMobile partInfo={apply} key={index} />
          ),
        )}
      </PartInfoDiv>
      <WrapApplyButton>
        <StyledLink to="/info">
          <Button text="지원하기"></Button>
        </StyledLink>
      </WrapApplyButton>
    </ApplyMainPageBlock>
  );
};

export default ApplyMainPage;

const ApplyMainPageBlock = styled.div`
  @media ${({ theme }) => theme.devices.MOBILE} {
    display: block;
    margin: 80px 16px 0 16px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 100px 16px 0 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: table;
    margin-top: 160px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PartInfoDiv = styled.div`
  @media ${({ theme }) => theme.devices.MOBILE} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
  }
`;

const WrapApplyButton = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.devices.MOBILE} {
    margin-top: 50px;
    margin-bottom: 124.5px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 50.5px;
    margin-bottom: 125px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 100px;
    margin-bottom: 153px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
