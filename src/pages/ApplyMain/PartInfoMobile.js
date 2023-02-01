import React from 'react';

import styled from 'styled-components';

import iconPlus from '../../assets/images/icon_plus.svg';

import PartImage from './PartImage';

const PartInfoMobile = ({ partInfo }) => {
  return (
    <PartInformationBlock info={partInfo.value}>
      <PartInfoTop>
        {partInfo.value}
        <PartInfoImg src={iconPlus} />
      </PartInfoTop>
      <CenterImgBlock>
        <PartImage part={partInfo.value} />
      </CenterImgBlock>
      <PartInfoContent>
        <InfoTitle>무엇을 하나요?</InfoTitle>
        <InfoCont>{partInfo.info}</InfoCont>
        <InfoTitle>어떤 툴을 다루나요?</InfoTitle>
        <InfoCont>{partInfo.tool}</InfoCont>
      </PartInfoContent>
    </PartInformationBlock>
  );
};

const PartInfoTop = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
`;

const PartInfoImg = styled.img`
  margin-left: auto;
  margin-right: 24px;
`;

const CenterImgBlock = styled.div`
  margin-top: 44px;
  width: 155px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const PartInfoContent = styled.div`
  display: none;
  margin: 24px 24px;
  line-height: 1.3;
  margin-top: auto;
  word-break: break-all;
`;

const InfoTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-top: 16px;
`;

const InfoCont = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

const PartInformationBlock = styled.div`
  display: flex;
  height: 251px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
  margin-bottom: 12px;

  &.active ${PartInfoTop} {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.GRAY2};
    transition: all 0.2s ease-out;
  }

  &.active ${CenterImgBlock} {
    display: none;
  }

  &.active ${PartInfoContent} {
    display: block;
  }
`;

export default PartInfoMobile;
