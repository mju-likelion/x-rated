import React, { useState } from 'react';

import styled from 'styled-components';

import Toast from '../Toast';

import FooterIcons from './FooterIcons';

const Footer = () => {
  const [toast, setToast] = useState(false);
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  return (
    <FooterBox>
      <FooterIconsBox>
        <FooterIcons handleCopyEmail={() => setToast(true)} setIsCopySuccess={setIsCopySuccess} />
        {toast && (
          <Toast
            setToast={setToast}
            isSuccess={isCopySuccess}
            text={isCopySuccess ? '메일 주소가 복사되었습니다' : '메일 주소 복사에 실패하였습니다'}
          />
        )}
      </FooterIconsBox>
      <CopyrightBox>© 2023. LIKELION MJU All pictures cannot be copied without permission.</CopyrightBox>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  height: 100px;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 210px;
  }
`;

const FooterIconsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 264px;
  gap: 16px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 440px;
  }
`;

const CopyrightBox = styled.div`
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 10px;
  margin-top: 2px;
  transform: scale(0.8);
  width: 370px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 12px;
    margin-top: 30px;
    transform: scale(1);
    width: 100%;
    text-align: center;
  }
`;

export default Footer;
