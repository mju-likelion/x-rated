import React, { useState } from 'react';

import styled from 'styled-components';

import FailContent from './FailContent';
import SuccessContent from './SuccessContent';

const ApplyResultPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return <ApplyCheckTopBox>{isSuccess ? <SuccessContent /> : <FailContent />}</ApplyCheckTopBox>;
};

const ApplyCheckTopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 56px - 160px);
  @media ${({ theme }) => theme.devices.TABLET} {
    height: calc(100vh - 70px - 170px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: calc(100vh - 70px - 232px);
  }
`;

export default ApplyResultPage;
