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
  min-height: calc(100vh - 56px - 99px);
  @media ${({ theme }) => theme.devices.TABLET} {
    min-height: calc(100vh - 70px - 77px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 160px 0 160px 0;
    min-height: 0;
  }
`;

export default ApplyCheckPage;
