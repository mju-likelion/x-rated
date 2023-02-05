import React from 'react';

import styled from 'styled-components';

const ApplyMainTop = () => {
  return (
    <ApplyMainTopBlock>
      <MainTitleBlock>
        <LeftSubTitle>모집안내</LeftSubTitle>
        <LeftTitle>
          멋쟁이사자처럼 명지대(자연)
          <br />
          11기를 모집합니다
        </LeftTitle>
      </MainTitleBlock>
      <RightContent>
        <TitleBox>
          <RightTitle>모집기간</RightTitle>
          <RightSubTitle>2022.03.02 ~ 2022.03.05</RightSubTitle>
        </TitleBox>
        <TitleBox>
          <RightTitle>모집대상</RightTitle>
          <RightSubTitle>명지대학교 재학생 및 휴학생</RightSubTitle>
        </TitleBox>
      </RightContent>
    </ApplyMainTopBlock>
  );
};

const ApplyMainTopBlock = styled.div`
  margin-bottom: 25px;
  margin-top: 80px;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: flex;
    margin-bottom: 20px;
    margin-top: 100px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
    margin-bottom: 30px;
    margin-top: 160px;
  }
`;

const MainTitleBlock = styled.div`
  display: block;
`;

const TitleBox = styled.div`
  display: flex;
`;

const LeftSubTitle = styled.div`
  color: ${({ theme }) => theme.colors.BLUE1};
  font-weight: 500;
  margin-bottom: 2px;
  font-size: 10px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 4px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

const LeftTitle = styled.div`
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 26px;
    line-height: 34px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    line-height: 56px;
  }
`;

const RightContent = styled.div`
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-left: auto;
    margin-top: 49px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 94px;
  }
`;

const RightTitle = styled.div`
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 12px;
  margin-right: 10px;
  margin-top: 4px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-right: 12px;
    margin-top: 6px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    margin-right: 30px;
    margin-top: 8px;
    font-weight: 400;
  }
`;

const RightSubTitle = styled.div`
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 6px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 8px;
    font-size: 18px;
  }
`;

export default ApplyMainTop;
