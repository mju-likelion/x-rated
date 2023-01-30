import React from 'react';

import styled from 'styled-components';

import { ReactComponent as FaceIcon } from '../assets/images/icon_face_default.svg';
import { ReactComponent as GitIcon } from '../assets/images/icon_git_default.svg';
import { ReactComponent as InstaIcon } from '../assets/images/icon_insta_default.svg';
import { ReactComponent as MailIcon } from '../assets/images/icon_mail_default.svg';
import { ReactComponent as MediIcon } from '../assets/images/icon_medi_default.svg';

const Footer = () => {
  const urlList = [
    { type: 'instagram', url: 'https://www.instagram.com/mju_likelion/' },
    { type: 'github', url: 'https://github.com/mju-likelion' },
    { type: 'facebook', url: 'https://www.facebook.com/likelionatmju' },
    { type: 'medium', url: 'https://medium.com/@mju-likelion' },
  ];

  const handleClick = type => {
    {
      urlList.map(item => item.type === type && window.open(item.url));
    }
  };

  const handleCopyEmail = () => {
    const mjuEmail = 'mju@likelion.org';
    navigator.clipboard.writeText(mjuEmail);
  };

  return (
    <FooterBox>
      <FooterIconsBox>
        <InstaIcon onClick={() => handleClick('instagram')} />
        <GitIcon onClick={() => handleClick('github')} />
        <FaceIcon onClick={() => handleClick('facebook')} />
        <MediIcon onClick={() => handleClick('medium')} />
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
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 12px;
  font-weight: 400;
  margin-top: 30px;
  font-family: 'Montserrat';
`;
