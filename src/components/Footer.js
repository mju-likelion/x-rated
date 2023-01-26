import React from 'react';
import styled from 'styled-components';

import { ReactComponent as InstaDefaultIcon } from '../assets/images/icon_insta_default.svg';
import { ReactComponent as GitDefaultIcon } from '../assets/images/icon_git_default.svg';
import { ReactComponent as FaceDefaultIcon } from '../assets/images/icon_face_default.svg';
import { ReactComponent as MediDefaultIcon } from '../assets/images/icon_medi_default.svg';
import { ReactComponent as MailDefaultIcon } from '../assets/images/icon_mail_default.svg';

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
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterIconsBox>
        <InstaDefaultIcon />
        <GitDefaultIcon />
        <FaceDefaultIcon />
        <MediDefaultIcon />
        <MailDefaultIcon />
      </FooterIconsBox>
      <CopyrightBox>© 2023.likelion MJU All pictures cannot be copied without permission.</CopyrightBox>
    </FooterBox>
  );
};

export default Footer;
