import React from 'react';

import styled from 'styled-components';

import iconPlus from '../../assets/images/icon_plus.svg';

const PartInformation = ({ partInfo }) => {
  return (
    <PartInformationBlock style={partInfo.value === 'SERVER' ? { margin: '30px' } : {}}>
      <PartInfoTop>
        {partInfo.value}
        <img src={iconPlus} style={{ marginLeft: 'auto', marginRight: '24px' }} />
      </PartInfoTop>
      <CenterImgBlock>
        <partInfo.image />
      </CenterImgBlock>
      <PartInfoCont>
        <InfoTitle>무엇을 하나요?</InfoTitle>
        <InfoCont>{partInfo.info}</InfoCont>
        <InfoTitle>어떤 툴을 다루나요?</InfoTitle>
        <InfoCont>{partInfo.tool}</InfoCont>
      </PartInfoCont>
    </PartInformationBlock>
  );
};

export default PartInformation;

const PartInfoTop = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
`;

const CenterImgBlock = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: center;
`;

const PartInfoCont = styled.div`
  display: none;
  margin: 24px 24px;
  margin-top: auto;
`;

const InfoTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-top: 20px;
`;

const InfoCont = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

const PartInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
  margin-top: 30px;

  &:hover ${PartInfoTop} {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.GRAY2};
    transition: all 0.2s ease-out;
  }

  &:hover ${CenterImgBlock} {
    display: none;
  }

  &:hover ${PartInfoCont} {
    display: block;
  }
`;
