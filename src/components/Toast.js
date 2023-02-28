import React, { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import toastErrorIcon from '../assets/images/icon_type_error.svg';
import toastSuccessIcon from '../assets/images/icon_type_success.svg';

const Toast = ({ setToast, isSuccess, text }) => {
  const [isOverTwoLine, setIsOverTwoLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  useEffect(() => {
    if (text === '지원서를 이미 제출하신 분은\n 다시 제출할 수 없습니다.') setIsOverTwoLine(true);
    else setIsOverTwoLine(false);
  }, [text]);

  return (
    <ToastBox>
      <ToastTypeIcon src={isSuccess ? toastSuccessIcon : toastErrorIcon} />
      <ToastTypeMsgBox>
        <ToastTypeMsg>{text}</ToastTypeMsg>
        {!isSuccess && !isOverTwoLine && <ToastErrorMsg>잠시 후에 다시 시도해주세요</ToastErrorMsg>}
      </ToastTypeMsgBox>
    </ToastBox>
  );
};

const slideAnimation = keyframes`
from {
  transform: translate(-50%, 200%);
}
to{
  transform: translate(-50%, 0);
}
`;

const ToastBox = styled.div`
  width: 318px;
  height: 62px;
  background-color: ${({ theme }) => theme.colors.GRAY3};
  border-radius: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: fixed;
  z-index: 1;
  bottom: 72px;
  left: 50%;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${slideAnimation};
  animation-fill-mode: forwards;
`;

const ToastTypeIcon = styled.img`
  margin-left: 16px;
`;

const ToastTypeMsgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ToastTypeMsg = styled.div``;

const ToastErrorMsg = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

export default Toast;
