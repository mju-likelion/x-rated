import React from 'react';

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
      <ProgressButton style={{ margin: '100px auto 0', color: 'white', fontWeight: '700' }}>지원하기</ProgressButton>
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
