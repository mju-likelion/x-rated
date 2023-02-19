import React, { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

const Header = () => {
  const navigate = useNavigate();

  //Line 11~ 19까지, write경로에서 지원하기 버튼 비활성화 이벤트입니다
  const path = useLocation().pathname;
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (path === '/write') {
      setIsShow(false);
    } else setIsShow(true);
  }, [path]);

  return (
    <HeaderTopBox>
      <HeaderBox>
        <HeaderLogoBox onClick={() => navigate('/')}>
          <Logo />
          <HeaderSiteInfo>APPLY</HeaderSiteInfo>
        </HeaderLogoBox>
        <RightNavBox>
          {/* props를 통하여 조건부 스타일링을 적용합니다, 해당 적용 여부는 추후에 컨펌하고 확정짓도록 하겠습니다 */}
          <RightNavItem isshow={isShow} onClick={() => navigate('/info')}>
            <Test isshow={isShow}>지원하기</Test>
          </RightNavItem>
          <RightNavItem>지원확인하기</RightNavItem>
        </RightNavBox>
      </HeaderBox>
    </HeaderTopBox>
  );
};

const HeaderTopBox = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BLACK};
`;

const HeaderBox = styled.div`
  padding: 20px 16px;
  box-sizing: border-box;
  margin: auto;
  height: 56px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 70px;
    padding: 27px 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 15px 0;
  }
`;

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    gap: 6px;
  }
`;

const HeaderSiteInfo = styled.div`
  font-size: 15px;
  line-height: 10px;
  font-weight: 500;
  font-family: Montserrat;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 17px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 28px;
    line-height: 21px;
  }
`;

const RightNavBox = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 12px;
  font-weight: 500;
  gap: 16px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-weight: 700;
    gap: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-weight: 700;
    font-size: 18px;
    gap: 60px;
  }
`;

const RightNavItem = styled.button`
  all: unset;
  cursor: ${({ isshow }) => (isshow ? 'pointer' : 'default')};
`;

//확실한거 아니라서, 테스트용이라고 명시하였습니다.
const Test = styled.p`
  opacity: ${({ isshow }) => (isshow ? 1.0 : 0.2)};
`;

export default Header;
