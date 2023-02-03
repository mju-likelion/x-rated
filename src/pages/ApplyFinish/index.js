import React from 'react';

import styled from 'styled-components';

import { ReactComponent as Congratulations } from '../../assets/images/congratulations.svg';

const ApplyFinishPage = () => {
  return (
    <ApplyFinishBox>
      <ApplyFinishCongratsSvg />
      <ApplyContentsBox>
        <ApplyFinishContentsLine>저희 멋쟁이사자처럼 명지대(자연) 11기를 위한</ApplyFinishContentsLine>
        <ApplyFinishContentsLine>첫 번째 걸음을 축하드립니다</ApplyFinishContentsLine>
        <ApplyFinishContentsLine>
          <ApplyFinishPassDate>3월 6일</ApplyFinishPassDate>에 1차 합격 발표로 만나요
        </ApplyFinishContentsLine>
      </ApplyContentsBox>
    </ApplyFinishBox>
  );
};

const ApplyFinishBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 174px 16px 303px;
  box-sizing: border-box;
  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 200px 71px 430px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 226px 583px 368px;
  }
`;

const ApplyFinishCongratsSvg = styled(Congratulations)`
  margin-bottom: 14px;
  margin-left: 8px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 445px;
    height: 46px;
    margin-left: 13px;
    margin-bottom: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 740px;
    height: 78px;
    margin-left: 14px;
  }
`;

const ApplyContentsBox = styled.div`
  width: 318px;
  text-align: center;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 458px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 754px;
  }
`;

const ApplyFinishContentsLine = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  font-family: Spoqa Han Sans Neo;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 24px;
    line-height: 36px;
  }
`;

const ApplyFinishPassDate = styled.span`
  border-bottom: 4px solid ${({ theme }) => theme.colors.BLUE1};
  padding-bottom: 1px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding-bottom: 4px;
  }
`;

export default ApplyFinishPage;
