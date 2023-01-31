import React from 'react';

import styled from 'styled-components';

const PartInfoTablet = ({ partInfo }) => {
  return (
    <PartInformationBlock info={partInfo.value}>
      <PartInfoTop>{partInfo.value}</PartInfoTop>
      <WrapContent>
        <CenterImgBlock>
          <partInfo.image />
        </CenterImgBlock>
        <PartInfoCont>
          <InfoTitle>무엇을 하나요?</InfoTitle>
          <InfoCont>{partInfo.info}</InfoCont>
          <InfoTitle>어떤 툴을 다루나요?</InfoTitle>
          <InfoCont>{partInfo.tool}</InfoCont>
        </PartInfoCont>
      </WrapContent>
    </PartInformationBlock>
  );
};

export default PartInfoTablet;

const PartInfoTop = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  padding-top: 24px;
  padding-left: 24px;
`;

const WrapContent = styled.div`
  display: flex;
`;

const CenterImgBlock = styled.div`
  padding: 35px 17px 24px 24px;
`;

const PartInfoCont = styled.div`
  margin-top: 35.5px;
  line-height: 1.3;
  word-break: break-all;
  margin-right: 23px;
`;

const InfoTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const InfoCont = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 6px;
  margin-bottom: 17px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

const PartInformationBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
  margin-bottom: 13px;
`;
