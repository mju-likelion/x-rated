import React, { useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as FaceIcon } from '../assets/images/icon_face_default.svg';
import { ReactComponent as GitIcon } from '../assets/images/icon_git_default.svg';
import { ReactComponent as InstaIcon } from '../assets/images/icon_insta_default.svg';
import { ReactComponent as MailIcon } from '../assets/images/icon_mail_default.svg';
import { ReactComponent as MediIcon } from '../assets/images/icon_medi_default.svg';

import Toast from './Toast';

const Footer = () => {
  const urlList = {
    instagram: 'https://www.instagram.com/mju_likelion/',
    github: 'https://github.com/mju-likelion',
    facebook: 'https://www.facebook.com/likelionatmju',
    medium: 'https://medium.com/@mju-likelion',
  };
  const [toast, setToast] = useState(false);
  const [isCopySuccess, setIsCopySuccess] = useState(false);
  const mjuEmail = 'mju@likelion.org';

  const handleClick = type => {
    typeof window.open === 'function' ? window.open(urlList[type]) : (window.location.href = urlList[type]);
  };

  const handleCopyEmail = () => {
    setToast(true);
    navigator.clipboard
      .writeText(mjuEmail)
      .then(() => {
        checkCopyEmail();
      })
      .catch(() => setIsCopySuccess(false));
  };

  const checkCopyEmail = () => {
    navigator.clipboard.readText().then(text => {
      text === mjuEmail ? setIsCopySuccess(true) : setIsCopySuccess(false);
    });
  };

  return (
    <FooterBox>
      <FooterIconsBox>
        <InstaIcon onClick={() => handleClick('instagram')} />
        <GitIcon onClick={() => handleClick('github')} />
        <FaceIcon onClick={() => handleClick('facebook')} />
        <MediIcon onClick={() => handleClick('medium')} />
        <MailIcon onClick={handleCopyEmail} />
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
  font-family: 'Montserrat';
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
