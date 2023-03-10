import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button';

import ApplyMainTop from './ApplyMainTop';
import { PART_DATA } from './PartData.js';
import PartInfo from './PartInfo';
import PartInfoMobile from './PartInfoMobile';
import PartInfoTablet from './PartInfoTablet';

const ApplyMainPage = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const DESKTOP_WIDTH = 1199;
  const TABLET_WIDTH = 599;
  const [clickedArray, setClickedArray] = useState([false, false, false]);

  const handleClick = index => {
    let newArr = [...clickedArray];
    if (newArr[index]) {
      newArr[index] = false;
      setClickedArray([false, false, false]);
    } else {
      newArr = [false, false, false];
      newArr[index] = !newArr[index];
      setClickedArray(newArr);
    }
  };

  const changeWidth = (apply, index) => {
    if (innerWidth > DESKTOP_WIDTH) {
      return <PartInfo partInfo={apply} key={index} />;
    } else if (innerWidth > TABLET_WIDTH) {
      return <PartInfoTablet partInfo={apply} key={index} />;
    } else {
      return <PartInfoMobile partInfo={apply} key={index} handleClick={handleClick} isSelected={clickedArray[index]} />;
    }
  };

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });

  return (
    <ApplyMainPageBlock>
      <ApplyMainTop />
      <PartInfoBlock>
        {Object.keys(PART_DATA).map((keyName, index) => changeWidth(PART_DATA[keyName], index))}
      </PartInfoBlock>
      <WrapApplyButton>
        <StyledLink to="/info">
          <Button text="지원하기"></Button>
        </StyledLink>
      </WrapApplyButton>
    </ApplyMainPageBlock>
  );
};

const ApplyMainPageBlock = styled.div`
  display: table;
  margin: 0 auto;
`;

const PartInfoBlock = styled.div`
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
  }
`;

const WrapApplyButton = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 100px;
    margin-bottom: 120px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default ApplyMainPage;
