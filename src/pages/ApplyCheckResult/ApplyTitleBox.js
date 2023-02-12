import React from 'react';

import styled from 'styled-components';

import { ReactComponent as FailFindImg } from '../../assets/images/icon_find_fail.svg';
import { ReactComponent as SuccessFindImg } from '../../assets/images/icon_find_success.svg';

const ApplyTitleBox = ({ success }) => {
  return (
    <ApplyCheckTitleBox>
      <ApplyCheckTitle>지원 확인하기</ApplyCheckTitle>
      {success ? <SuccessFindIcon /> : <FailFindIcon />}
    </ApplyCheckTitleBox>
  );
};

const ApplyCheckTitleBox = styled.div`
  width: 260px;
  justify-content: flex-end;
  gap: 48px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY1};
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 400px;
    gap: 83px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 483px;
    gap: 88px;
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

const SuccessFindIcon = styled(SuccessFindImg)`
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 38px;
    height: 80px;
  }
`;

const FailFindIcon = styled(FailFindImg)`
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 38px;
    height: 80px;
  }
`;

export default ApplyTitleBox;
