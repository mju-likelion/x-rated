import React from 'react';

import styled from 'styled-components';

import { ReactComponent as FaceIcon } from '../assets/images/icon_face_default.svg';
import { ReactComponent as GitIcon } from '../assets/images/icon_git_default.svg';
import { ReactComponent as InstaIcon } from '../assets/images/icon_insta_default.svg';
import { ReactComponent as MailIcon } from '../assets/images/icon_mail_default.svg';
import { ReactComponent as MediIcon } from '../assets/images/icon_medi_default.svg';

const Footer = () => {
  const urlList = [
    'https://www.instagram.com/mju_likelion/',
    'https://github.com/mju-likelion',
    'https://www.facebook.com/likelionatmju',
    'https://medium.com/@mju-likelion',
  ];

  const handleClick = type => {
    window.open(urlList[type]);
  };

  const handleCopyEmail = () => {
    const mjuEmail = 'mju@likelion.org';
    navigator.clipboard.writeText(mjuEmail);
    navigator.clipboard.readText(mjuEmail) ? alert('이메일이 복사되었습니다.') : alert('이메일 복사 오류입니다.');
    // 이 부분 디자인 픽스되면 토스트메시지 추가 예정입니다
  };

  return (
    <FooterBox>
      <FooterIconsBox>
        <InstaIcon onClick={() => handleClick(0)} />
        <GitIcon onClick={() => handleClick(1)} />
        <FaceIcon onClick={() => handleClick(2)} />
        <MediIcon onClick={() => handleClick(3)} />
        <MailIcon onClick={handleCopyEmail} />
      </FooterIconsBox>
      <CopyrightBox>© 2023. LIKELION MJU All pictures cannot be copied without permission.</CopyrightBox>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  height: 210px;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterIconsBox = styled.div`
  display: flex;
  width: 440px;
  justify-content: space-between;
`;

const CopyrightBox = styled.div`
  color: ${({ theme }) => theme.Colors.GRAY2};
  font-size: 12px;
  font-weight: 400;
  margin-top: 30px;
  font-family: 'Montserrat';
`;
