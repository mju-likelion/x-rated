import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button';

import ApplyMainTop from './ApplyMainTop';
import { PartData } from './PartData.js';
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
      <ApplyMainTop></ApplyMainTop>
      <PartInfoDiv>
        {PartData.map((apply, index) => (
          <PartInfo partInfo={apply} key={index} />
        ))}
      </PartInfoDiv>
      <StyledLink to="/info">
        <Button text="지원하기" handleClick="/info"></Button>
      </StyledLink>
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

const ApplyButton = styled(Button)`
  margin: 100px auto 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
