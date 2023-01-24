import React from 'react';

import ProgressButton from '../../components/ProgressButton';
import ApplyMainTop from './ApplyMainTop';
import PartInfo from './PartInfo';
import styled from 'styled-components';
import { PartImgData } from './PartImgData';

const ApplyMainPage = () => {
  return (
    <ApplyMainPageDiv>
      <ApplyMainTop></ApplyMainTop>
      <PartInfoDiv>
        {PartImgData.map((apply, index) => (
          <PartInfo
            partImg={apply.image}
            partTitle={apply.value}
            partInfo={apply.info}
            partTool={apply.tool}
            key={index}
          />
        ))}
      </PartInfoDiv>
      <ProgressButton style={{ margin: '100px auto 0', color: 'white', fontWeight: '700' }}>지원하기</ProgressButton>
    </ApplyMainPageDiv>
  );
};

export default ApplyMainPage;

const ApplyMainPageDiv = styled.div`
  padding: 10% 10% 0 10%;
`;

const PartInfoDiv = styled.div`
  display: flex;
`;
