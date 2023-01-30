import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button';

import ApplyMainTop from './ApplyMainTop';
import { PART_DATA } from './PartData.js';
import PartInfo from './PartInfo';

const ApplyMainPage = () => {
  const [testState, setTestState] = useState('');
  const [error, setError] = useState('');
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
        {PART_DATA.map((apply, index) => (
          <PartInfo partInfo={apply} key={index} />
        ))}
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
  display: table;
  margin-top: 160px;
  margin-left: auto;
  margin-right: auto;
`;

const PartInfoDiv = styled.div`
  display: flex;
`;

const WrapApplyButton = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 153px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
