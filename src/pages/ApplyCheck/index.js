import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import { ReactComponent as AbleFindSvg } from '../../assets/images/icon_find_able.svg';
import { ReactComponent as DisableFindSvg } from '../../assets/images/icon_find_disable.svg';
import Button from '../../components/Button';

import InputFiled from './InputFiled';

const ApplyCheckPage = () => {
  const [isFocus, setIsFocus] = useState(false);

  const handleInputClick = () => {
    setIsFocus(true);
  };

  return (
    <ApplyCheckTopBox>
      <ApplyCheckTitleBox>
        <ApplyCheckTitle>지원 확인하기</ApplyCheckTitle>
        <DisableFindIcon isFocus={isFocus} />
        <AbleFindIcon isFocus={isFocus} />
      </ApplyCheckTitleBox>
      <InputFiled handleInputClick={handleInputClick} />
      <ApplyCheckBtnBox>
        <Button text={'입력완료'} errorMessage={'작성이 완료되지 않은 내용이 있습니다.'} />
      </ApplyCheckBtnBox>
    </ApplyCheckTopBox>
  );
};

const ApplyCheckTopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 56px - 160px - 118px);
`;

const ApplyCheckTitleBox = styled.div`
  width: 260px;
  justify-content: flex-end;
  gap: 48px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY1};
  margin-bottom: 30px;
`;

const ApplyCheckTitle = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  text-align: center;
`;

const DisableFindIcon = styled(DisableFindSvg)`
  ${({ isFocus }) =>
    isFocus &&
    css`
      display: none;
    `}
`;

const AbleFindIcon = styled(AbleFindSvg)`
  display: none;
  ${({ isFocus }) =>
    isFocus &&
    css`
      display: block;
    `}
`;

const ApplyCheckBtnBox = styled.div`
  margin-top: 70px;
`;

export default ApplyCheckPage;
