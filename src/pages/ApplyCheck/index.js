import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import { ReactComponent as AbleFindSvg } from '../../assets/images/icon_find_able.svg';
import { ReactComponent as DisableFindSvg } from '../../assets/images/icon_find_disable.svg';
import Button from '../../components/Button';

import InputField from './InputField';

const ApplyCheckPage = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ApplyCheckTopBox>
      <ApplyCheckTitleBox>
        <ApplyCheckTitle>지원 확인하기</ApplyCheckTitle>
        <DisableFindIcon isFocus={isFocus} />
        <AbleFindIcon isFocus={isFocus} />
      </ApplyCheckTitleBox>
      <InputField setIsFocus={setIsFocus} />
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
  height: calc(100vh - 56px - 160px - 93px);
  @media ${({ theme }) => theme.devices.TABLET} {
    height: calc(100vh - 70px - 170px - 93px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: calc(100vh - 70px - 232px - 155px);
  }
`;

const ApplyCheckTitleBox = styled.div`
  width: 260px;
  justify-content: flex-end;
  gap: 48px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY1};
  margin-bottom: 30px;
  height: 50px;
  box-sizing: border-box;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 400px;
    gap: 83px;
    height: 64px;
    margin-bottom: 50px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 483px;
    gap: 88px;
    height: 80px;
    margin-bottom: 40px;
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

const DisableFindIcon = styled(DisableFindSvg)`
  ${({ isFocus }) =>
    isFocus &&
    css`
      display: none;
    `}
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 38px;
    height: 80px;
  }
`;

const AbleFindIcon = styled(AbleFindSvg)`
  display: none;
  ${({ isFocus }) =>
    isFocus &&
    css`
      display: block;
    `}
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 38px;
    height: 80px;
  }
`;

const ApplyCheckBtnBox = styled.div`
  margin-top: 70px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 100px;
  }
`;

export default ApplyCheckPage;
