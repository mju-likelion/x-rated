import styled from 'styled-components';

import ResultImage from './ResultImage';

const ApplyTitleBox = ({ result }) => {
  return (
    <ApplyCheckTitleBox>
      <ApplyCheckTitle>지원 확인하기</ApplyCheckTitle>
      <ResultImage result={result} />
    </ApplyCheckTitleBox>
  );
};

const ApplyCheckTitleBox = styled.div`
  width: 260px;
  justify-content: flex-end;
  gap: 48px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY1};
  height: 50px;
  box-sizing: border-box;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 400px;
    gap: 83px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 483px;
    gap: 88px;
    height: 80px;
  }
`;

const ApplyCheckTitle = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  text-align: center;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 30px;
    line-height: 42px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    line-height: 56px;
  }
`;

export default ApplyTitleBox;
