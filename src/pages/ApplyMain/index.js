import React from 'react';
import { Link } from 'react-router-dom';

import ProgressButton from '../../components/ProgressButton';
import ApplyMainTop from './ApplyMainTop';
import PartInfo from './PartInfo';
import styled from 'styled-components';
import { PartData } from './PartData.js';

const ApplyMainPage = () => {
  return (
    <ApplyMainPageBlock>
      <ApplyMainTop></ApplyMainTop>
      <PartInfoDiv>
        {PartData.map((apply, index) => (
          <PartInfo partInfo={apply} key={index} />
        ))}
      </PartInfoDiv>
      <StyledLink to="/info">
        <ApplyButton>지원하기</ApplyButton>
      </StyledLink>
    </ApplyMainPageBlock>
  );
};

export default ApplyMainPage;

const ApplyMainPageBlock = styled.div`
  padding: 10% 10% 0 10%;
`;

const PartInfoDiv = styled.div`
  display: flex;
`;

const ApplyButton = styled(ProgressButton)`
  margin: 100px auto 0;
  color: white;
  font-weight: 700;
  margin-bottom: 200px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
