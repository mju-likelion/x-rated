import React from 'react';

import styled from 'styled-components';

import ApplyTitleBox from './ApplyTitleBox';

const SuccessContent = () => {
  return (
    <>
      <ApplyTitleBox success={true} />
      <ApplySuccessResult>
        김땡땡님의 지원이&nbsp;
        <GreenBottonLine>확인되었습니다</GreenBottonLine>
      </ApplySuccessResult>
    </>
  );
};

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

export default SuccessContent;
