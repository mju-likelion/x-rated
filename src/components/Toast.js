import React, { useEffect } from 'react';

import styled from 'styled-components';

import toastErrorIcon from '../assets/images/icon_type_error.svg';
import toastSuccessIcon from '../assets/images/icon_type_success.svg';

const Toast = ({ setToast, isSuccess, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastBox>
      <ToastTypeIcon src={isSuccess ? toastSuccessIcon : toastErrorIcon} />
      <ToastTypeMsgBox>
        <ToastTypeMsg>{text}</ToastTypeMsg>
        {!isSuccess && <ToastErrorMsg>잠시 후에 다시 시도해주세요</ToastErrorMsg>}
      </ToastTypeMsgBox>
    </ToastBox>
  );
};

const ToastBox = styled.div`
  width: 318px;
  height: 62px;
  background-color: ${({ theme }) => theme.colors.GRAY3};
  border-radius: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  z-index: 1;
  bottom: 5%;
  left: 43%;
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
