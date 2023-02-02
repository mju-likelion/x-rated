import React from 'react';

import styled from 'styled-components';

import { ReactComponent as CongratsIcon } from '../../assets/images/icon_congratulate.svg';

const ApplyFinishPage = () => {
  return (
    <ApplyFinishBox>
      <ApplyFinishConGratsBox>
        <ApplyFinishConGratsItem>CONGRATULATIONS</ApplyFinishConGratsItem>
        <AppluFinishCongratsIcon />
      </ApplyFinishConGratsBox>
      <ApplyFinishContentsLine>저희 멋쟁이사자처럼 명지대(자연) 11기를 위한</ApplyFinishContentsLine>
      <ApplyFinishContentsLine>첫 번째 걸음을 축하드립니다</ApplyFinishContentsLine>
      <ApplyFinishContentsLine>
        <ApplyFinishPassDate>3월 6일</ApplyFinishPassDate>에 1차 합격 발표로 만나요
      </ApplyFinishContentsLine>
    </ApplyFinishBox>
  );
};

const ApplyFinishBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 230px 16px 399px;
  box-sizing: border-box;
`;

const ApplyFinishConGratsBox = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

const ApplyFinishConGratsItem = styled.div`
  color: ${({ theme }) => theme.colors.ORANGE};
  font-size: 28px;
  font-weight: bolder;
  align-self: center;
`;

const AppluFinishCongratsIcon = styled(CongratsIcon)`
  padding-bottom: 3px;
`;

const ApplyFinishContentsLine = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;

const ApplyFinishPassDate = styled.span`
  border-bottom: 4px solid ${({ theme }) => theme.colors.BLUE1};
  padding-bottom: 2px;
`;

export default ApplyFinishPage;
