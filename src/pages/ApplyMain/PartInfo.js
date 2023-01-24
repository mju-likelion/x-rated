import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles/Theme.js';
import iconPlus from '../../assets/images/icon_plus.svg';

const PartInformation = props => {
  const { partImg, partTitle } = props;
  return (
    <PartInformationDiv style={partTitle === 'SERVER' ? { margin: '30px' } : {}}>
      <PartInfoTop>
        {partTitle}
        <img src={iconPlus} style={{ marginLeft: 'auto', marginRight: '24px' }} />
      </PartInfoTop>
      <div style={{ textAlign: 'center' }}>
        <PartImg src={partImg} />
      </div>
      <PartInfoCont>
        <InfoTitle>무엇을 하나요?</InfoTitle>
        <InfoCont>파트별 소개글이 들어갈 예정입니다.</InfoCont>
        <InfoTitle>어떤 툴을 다루나요?</InfoTitle>
        <InfoCont>이것 저것</InfoCont>
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
  color: ${Theme.Colors.GRAY2};
`;

const PartInformationDiv = styled.div`
  width: 380px;
  height: 300px;
  background-color: ${Theme.Colors.GRAY1};
  border-radius: 10%;
  margin-top: 30px;

  &:hover ${PartInfoTop} {
    font-size: 20px;
    color: ${Theme.Colors.GRAY2};
    transition: all 0.2s ease-out;
  }

  &:hover img {
    display: none;
  }

  &:hover ${PartInfoCont} {
    display: block;
  }
`;
