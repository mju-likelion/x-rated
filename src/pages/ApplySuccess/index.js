import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ApplyCheckTitleBox from '../../components/ApplyResult/ApplyCheckTitleBox';

import Toast from './../../components/Toast';

const ApplySuccessPage = () => {
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
        <ApplyCheckTitleBox result={'SUCCESS'} />
        <ApplySuccessResult>
          {state}님의 지원이&nbsp;
          <GreenBottonLine>확인되었습니다</GreenBottonLine>
        </ApplySuccessResult>
      </ApplyCheckTopBox>
      {toast && <Toast setToast={setToast} isSuccess={false} text={toastMessage} />}
    </>
  );
};

const ApplyCheckTopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 56px - 160px);
  min-height: calc(100vh - 56px - 99px);
  @media ${({ theme }) => theme.devices.TABLET} {
    min-height: calc(100vh - 70px - 77px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 160px 0 160px 0;
    min-height: 0;
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
