import React from 'react';

import styled from 'styled-components';

const ApplyMainTop = () => {
  return (
    <TitleBox>
      <MainTitleBlock>
        <LeftSubTitle>모집안내</LeftSubTitle>
        <LeftTitle>멋쟁이사자처럼 명지대</LeftTitle>
        <LeftTitle>11기를 모집합니다</LeftTitle>
      </MainTitleBlock>
      <RightCont>
        <TitleBox>
          <RightTitle>모집기간</RightTitle>
          <RightSubTitle>2022.03.02 ~ 2022.03.28</RightSubTitle>
        </TitleBox>
        <TitleBox>
          <RightTitle>모집대상</RightTitle>
          <RightSubTitle>명지대학교 재학생 및 휴학생</RightSubTitle>
        </TitleBox>
      </RightCont>
    </TitleBox>
  );
};

export default ApplyMainTop;

const MainTitleBlock = styled.div`
  display: block;
`;

const TitleBox = styled.div`
  display: flex;
`;

const LeftSubTitle = styled.div`
  color: ${({ theme }) => theme.colors.BLUE1};
  font-weight: 500;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 10px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
  }
`;

const LeftTitle = styled.div`
  font-weight: 700;
  margin-top: 16px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 26px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
  }
`;

const RightCont = styled.div`
  margin-left: auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 36px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 74px;
  }
`;

const RightTitle = styled.div`
  color: ${({ theme }) => theme.colors.GRAY2};
  margin-right: 30px;
  margin-top: 8px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 12px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
  }
`;

const RightSubTitle = styled.div`
  margin-top: 8px;
`;
