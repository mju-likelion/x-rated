import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

import { ReactComponent as FaceIcon } from '../../assets/images/icon_face_default.svg';
import { ReactComponent as GitIcon } from '../../assets/images/icon_git_default.svg';
import { ReactComponent as InstaIcon } from '../../assets/images/icon_insta_default.svg';
import { ReactComponent as MailIcon } from '../../assets/images/icon_mail_default.svg';
import { ReactComponent as MediIcon } from '../../assets/images/icon_medi_default.svg';

import { SOCIAL_LINKS } from './SocialLinks';

const FooterIcons = ({ handleCopyEmail, setIsCopySuccess }) => {
  return (
    <>
      <FooterAnchorIcon href={SOCIAL_LINKS['instagram']} target="_blank" rel="noopener noreferrer">
        <FooterInstaIcon />
      </FooterAnchorIcon>
      <FooterAnchorIcon href={SOCIAL_LINKS['github']} target="_blank" rel="noopener noreferrer">
        <FooterGitIcon />
      </FooterAnchorIcon>
      <FooterAnchorIcon href={SOCIAL_LINKS['facebook']} target="_blank" rel="noopener noreferrer">
        <FooterFaceIcon />
      </FooterAnchorIcon>
      <FooterAnchorIcon href={SOCIAL_LINKS['medium']} target="_blank" rel="noopener noreferrer">
        <FooterMediIcon />
      </FooterAnchorIcon>
      <CopyToClipboard
        text={SOCIAL_LINKS['email']}
        onCopy={text => (text === SOCIAL_LINKS['email'] ? setIsCopySuccess(true) : setIsCopySuccess(false))}
      >
        <FooterMailIcon onClick={handleCopyEmail} />
      </CopyToClipboard>
    </>
  );
};

const FooterAnchorIcon = styled.a`
  cursor: pointer;
`;

const FooterInstaIcon = styled(InstaIcon)`
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .instaCircle {
    fill: #525252;
  }
`;

const FooterGitIcon = styled(GitIcon)`
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .gitCircle {
    fill: #525252;
  }
`;

const FooterFaceIcon = styled(FaceIcon)`
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .faceCircle {
    fill: #525252;
  }
`;

const FooterMediIcon = styled(MediIcon)`
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .mediCircle {
    fill: #525252;
  }
`;

const FooterMailIcon = styled(MailIcon)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .mailCircle {
    fill: #525252;
  }
`;

export default FooterIcons;
