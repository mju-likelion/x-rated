import React from 'react';

import styled from 'styled-components';

import ApplyCheckTitleBox from '../../components/ApplyResult/ApplyCheckTitleBox';

const ApplySuccessPage = () => {
  return (
    <ApplyCheckTopBox>
      <ApplyCheckTitleBox result={'SUCCESS'} />
      <ApplySuccessResult>
        김땡땡님의 지원이&nbsp;
        <GreenBottonLine>확인되었습니다</GreenBottonLine>
      </ApplySuccessResult>
    </ApplyCheckTopBox>
  );
};

const ApplyCheckTopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 56px - 160px);
  @media ${({ theme }) => theme.devices.TABLET} {
    height: calc(100vh - 70px - 170px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: calc(100vh - 70px - 232px);
  }
`;

const ApplySuccessResult = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 100px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 24px;
    line-height: 30px;
    margin-top: 120px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 32px;
    line-height: 36px;
    margin-top: 180px;
  }
`;

const GreenBottonLine = styled.span`
  border-bottom: 4px solid ${({ theme }) => theme.colors.GREEN};
  padding-bottom: 1px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding-bottom: 4px;
  }
`;

export default ApplySuccessPage;