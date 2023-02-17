import React, { useState } from 'react';

import styled from 'styled-components';

import ApplyCheckTitleBox from '../../components/ApplyResult/ApplyCheckTitleBox';

import InputField from './InputField';

const ApplyCheckPage = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ApplyCheckTopBox>
      <ApplyCheckTitleBox result={isFocus ? 'FOCUS' : 'NONFOCUS'} />
      <InputField setIsFocus={setIsFocus} />
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
    justify-content: flex-end;
    height: calc(100vh - 70px - 232px - 155px);
  }
`;

export default ApplyCheckPage;
