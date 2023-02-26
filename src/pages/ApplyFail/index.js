import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ApplyTitleBox from '../../components/ApplyResult/ApplyCheckTitleBox';

import Toast from './../../components/Toast';

const ApplyFailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const location = useLocation();

  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const applicantName = location?.state;

  useEffect(() => {
    if (!applicantName) {
      setToast(true);
      setToastMessage('잘못된 접근입니다.');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, []);

  return (
    <>
      <ApplyCheckTopBox>
        <ApplyTitleBox result={'FAIL'} />
        <ApplyFailResultTop>
          {state}님의 지원이&nbsp;
          <RedBottonLine>확인되지 않았습니다</RedBottonLine>
        </ApplyFailResultTop>
        <ApplyFailResultBotton>페이지 오른쪽 하단의 채널톡을 통해 문의해주세요</ApplyFailResultBotton>
      </ApplyCheckTopBox>
      {toast && <Toast setToast={setToast} isSuccess={false} text={toastMessage} />}
    </>
  );
};

const ApplyCheckTopBox = styled.div`
  padding: 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 56px - 99px - 240px);
  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 0;
    min-height: calc(100vh - 70px - 77px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 160px 0 160px 0;
    min-height: 0;
  }
`;

const ApplyFailResultTop = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-bottom: 10px;
  margin-top: 100px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 16px;
    margin-top: 120px;
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
