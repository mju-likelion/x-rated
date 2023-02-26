import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Congratulations } from '../../assets/images/congratulations.svg';
import Toast from '../../components/Toast';

const ApplyFinishPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const isSucceed = location?.state;

  useEffect(() => {
    if (!isSucceed) {
      setToast(true);
      setToastMessage('잘못된 접근입니다.');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      return;
    }
  }, []);

  return (
    <ApplyFinishBox>
      <ApplyFinishCongratsSvg />
      <ApplyContentsBox>
        <ApplyFinishContentsLine>
          저희 멋쟁이사자처럼 명지대(자연) 11기를 위한
          <br /> 첫 번째 걸음을 축하드립니다 <br />
          <ApplyFinishPassDate>3월 6일</ApplyFinishPassDate>에 1차 합격 발표로 만나요
        </ApplyFinishContentsLine>
      </ApplyContentsBox>
      <ApplyCheckButton onClick={() => navigate('/check')}>지원 성공 여부 확인하기</ApplyCheckButton>
      {toast && <Toast setToast={setToast} isSuccess={false} text={toastMessage} />}
    </ApplyFinishBox>
  );
};

const ApplyFinishBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
  min-height: calc(100vh - 56px - 99px - 240px);
  @media ${({ theme }) => theme.devices.TABLET} {
    min-height: calc(100vh - 70px - 170px - 240px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 0;
    min-height: calc(100vh - 70px - 188px);
  }
`;

const ApplyFinishCongratsSvg = styled(Congratulations)`
  margin: 0 0 14px 8px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 445px;
    height: 46px;
    margin: 0 0 20px 13px;
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

const ApplyCheckButton = styled.button`
  all: unset;
  text-align: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.BLUE1};
  color: ${({ theme }) => theme.colors.WHITE};
  margin-top: 64px;
  width: 192px;
  height: 50px;
  border-radius: 36px;
  font-size: 14px;
  font-weight: 700;
  padding: 16px 23px;
  @media ${({ theme }) => theme.devices.TABLET} {
    border-radius: 35px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 260px;
    height: 70px;
    font-size: 20px;
    margin-top: 86px;
    padding: 22px 27px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.BLUE2};
  }
`;

export default ApplyFinishPage;
