import React from 'react';

import styled from 'styled-components';

import iconPlus from '../../assets/images/icon_plus.svg';

import PartImage from './PartImage';

const PartInfoMobile = ({ partInfo, isSelected, handleClick }) => {
  return (
    <PartInformationBlock info={partInfo.value} onClick={() => handleClick(partInfo.index)}>
      {isSelected ? (
        <PartInfoTopClick>{partInfo.value}</PartInfoTopClick>
      ) : (
        <PartInfoTop>
          {partInfo.value}
          <PartInfoImg src={iconPlus} />
        </PartInfoTop>
      )}
      {isSelected ? (
        <PartInfoContent>
          <InfoTitle>무엇을 하나요?</InfoTitle>
          <InfoContent>{partInfo.infoMobile}</InfoContent>
          <InfoTitle>무엇을 배우나요?</InfoTitle>
          <InfoContent>{partInfo.tool}</InfoContent>
        </PartInfoContent>
      ) : (
        <CenterImgBlock>
          <PartImage part={partInfo.value} width={'155.65px'} height={'117.13px'} />
        </CenterImgBlock>
      )}
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

const PartInfoTopClick = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 24px;
  margin-left: 24px;
  color: ${({ theme }) => theme.colors.GRAY2};
  transition: all 0.2s ease-out;
`;

const PartInfoImg = styled.img`
  margin-left: auto;
  margin-right: 28px;
`;

const CenterImgBlock = styled.div`
  margin: 44px auto 0 auto;
  display: flex;
  justify-content: center;
`;

const PartInfoContent = styled.div`
  margin: 24px 24px;
  line-height: 1.3;
  margin-top: auto;
`;

const InfoTitle = styled.div`
  font-size: 15px;
  line-height: 19px;
  font-weight: 700;
  margin-top: 16px;
`;

const InfoContent = styled.div`
  white-space: pre-wrap;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

const PartInformationBlock = styled.div`
  margin: ${props => (props.info === 'SERVER' ? '12px 0' : '0')};
  display: flex;
  width: 318px;
  height: 251px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
`;

export default PartInfoMobile;
