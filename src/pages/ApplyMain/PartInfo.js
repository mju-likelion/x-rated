import React from 'react';
import styled from 'styled-components';
import iconPlus from '../../assets/images/icon_plus.svg';

const PartInformation = ({ partInfo }) => {
  return (
    <PartInformationDiv style={partInfo.value === 'SERVER' ? { margin: '30px' } : {}}>
      <PartInfoTop>
        {partInfo.value}
        <img src={iconPlus} style={{ marginLeft: 'auto', marginRight: '24px' }} />
      </PartInfoTop>
      <div style={{ textAlign: 'center' }}>
        <PartImg src={partInfo.image} />
      </div>
      <PartInfoCont>
        <InfoTitle>무엇을 하나요?</InfoTitle>
        <InfoCont>{partInfo.info}</InfoCont>
        <InfoTitle>어떤 툴을 다루나요?</InfoTitle>
        <InfoCont>{partInfo.tool}</InfoCont>
      </PartInfoCont>
    </PartInformationDiv>
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

const PartImg = styled.img`
  display: inline-block;
  margin-top: 54px;
`;

const PartInfoCont = styled.div`
  display: none;
  margin-left: 24px;
  padding-top: 76px;
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
  color: ${props => props.theme.Colors.GRAY2};
`;

const PartInformationDiv = styled.div`
  width: 380px;
  height: 300px;
  background-color: ${props => props.theme.Colors.GRAY1};
  border-radius: 18px;
  margin-top: 30px;

  &:hover ${PartInfoTop} {
    font-size: 20px;
    color: ${props => props.theme.Colors.GRAY2};
    transition: all 0.2s ease-out;
  }

  &:hover img {
    display: none;
  }

  &:hover ${PartInfoCont} {
    display: block;
  }
`;
