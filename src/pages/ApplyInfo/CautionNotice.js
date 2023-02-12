import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { CautionData } from './CautoinData';

const DESKTOP_WIDTH = 1199;
const TABLET_WIDTH = 599;

const CautionNotice = () => {
  const [cautionContent, setCautionContent] = useState([]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > DESKTOP_WIDTH) {
      setCautionContent(CautionData.desktop);
    } else if (window.innerWidth > TABLET_WIDTH) {
      setCautionContent(CautionData.tablet);
    } else {
      setCautionContent(CautionData.mobile);
    }
  };

  return (
    <>
      <Title>지원 관련 주의사항</Title>
      <CautionList>
        {cautionContent?.map((data, idx) => (
          <CautionText key={`cautionText${idx}`}>
            <p>{data}</p>
          </CautionText>
        ))}
      </CautionList>
    </>
  );
};

const Title = styled.p`
  font-weight: 700;
  width: 318px;
  font-size: 14px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    font-size: 20px;
  }
`;

const CautionList = styled.ul`
  box-sizing: border-box;
  padding: 4px 0 0 16px;
  margin-top: 6px;

  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 10px 0 0 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 10px 0 0 30px;
    margin-top: 10px;
  }
`;

const CautionText = styled.li`
  box-sizing: border-box;
  list-style-type: disc;
  white-space: pre-wrap;
  margin-bottom: 2px;

  color: ${({ theme }) => theme.colors.GRAY2};
  :last-child {
    p {
      color: ${({ theme }) => theme.colors.RED};
    }
  }
  font-size: 12px;
  line-height: 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 21px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    line-height: 30px;
  }
`;

export default CautionNotice;
