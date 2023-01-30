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
  font-size: 16px;
`;

const LeftTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin-top: 16px;
`;

const RightCont = styled.div`
  margin-left: auto;
  margin-top: 74px;
`;

const RightTitle = styled.div`
  color: ${({ theme }) => theme.colors.GRAY2};
  margin-right: 30px;
  margin-top: 8px;
  font-size: 18px;
`;

const RightSubTitle = styled.div`
  margin-top: 8px;
`;
