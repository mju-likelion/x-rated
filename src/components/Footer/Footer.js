import React, { useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as FooterArrowIcon } from '../../assets/images/icon_footer_arrow.svg';
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
      <FooterRouteOfficialBox href={process.env.REACT_APP_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
        <FooterRouteOfficialBtn>멋쟁이사자처럼 명지대(자연)에 대해 더 알아보기</FooterRouteOfficialBtn>
        <FooterArrowIcon />
      </FooterRouteOfficialBox>
      <CopyrightBox>© 2023. LIKELION MJU All pictures cannot be copied without permission.</CopyrightBox>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  height: 160px;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY1};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 24px;
  align-items: center;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 170px;
    padding-bottom: 30px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 232px;
    padding-bottom: 40px;
  }
`;

const FooterIconsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 264px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 440px;
    height: 56px;
  }
`;

const FooterRouteOfficialBox = styled.a`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 18px;
  text-decoration: none;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 22px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 20px;
    margin-bottom: 30px;
    gap: 5px;
  }
`;

const FooterRouteOfficialBtn = styled.button`
  all: unset;
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 12px;
  height: 20px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 14px;
    height: 30px;
  }
`;

const CopyrightBox = styled.div`
  color: ${({ theme }) => theme.colors.GRAY3};
  font-size: 10px;
  transform: scale(0.8);
  line-height: 10px;
  width: 370px;
  text-align: center;
  font-family: Montserrat;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 12px;
    height: 16px;
    transform: scale(1);
    width: 436px;
    line-height: 15px;
  }
`;

export default Footer;
