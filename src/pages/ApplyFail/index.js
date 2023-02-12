import styled from 'styled-components';

import ApplyTitleBox from '../../components/ApplyResult/ApplyCheckTitleBox';

const ApplyFailPage = () => {
  return (
    <ApplyCheckTopBox>
      <ApplyTitleBox result={'FAIL'} />
      <ApplyFailResultTop>
        김땡땡님의 지원이&nbsp;
        <RedBottonLine>확인되지 않았습니다</RedBottonLine>
      </ApplyFailResultTop>
      <ApplyFailResultBotton>페이지 오른쪽 하단의 채널톡을 통해 문의해주세요</ApplyFailResultBotton>
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

const ApplyFailResultTop = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-bottom: 10px;
  margin-top: 85px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 16px;
    margin-top: 99px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 32px;
    line-height: 36px;
    padding-bottom: 30px;
    margin-top: 180px;
  }
`;

const ApplyFailResultBotton = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-bottom: 10px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 32px;
    line-height: 36px;
    padding-bottom: 30px;
  }
`;

const RedBottonLine = styled.span`
  border-bottom: 4px solid ${({ theme }) => theme.colors.RED};
  padding-bottom: 1px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding-bottom: 4px;
  }
`;

export default ApplyFailPage;
