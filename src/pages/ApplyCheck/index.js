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
  min-height: calc(100vh - 56px - 160px);
  @media ${({ theme }) => theme.devices.TABLET} {
    min-height: calc(100vh - 70px - 170px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 160px;
    margin-bottom: 160px;
    min-height: 0;
  }
`;

export default ApplyCheckPage;
