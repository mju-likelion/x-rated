import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as GrayDownArrow } from '../../assets/images/arrow_down_default.svg';
import { ReactComponent as WhiteDownArrow } from '../../assets/images/arrow_down_value.svg';
import { ReactComponent as WhiteUpArrow } from '../../assets/images/arrow_up.svg';

const DropDown = ({ value, setValue, selectdata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef(null);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [outsideRef]);

  const handleClickOutside = e => {
    if (outsideRef.current && !outsideRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const handleOptions = () => {
    if (!value) {
      setValue(selectdata[0]);
    }
    setIsOpen(!isOpen);
  };
  const setData = data => {
    setValue(data);
    setIsOpen(false);
  };
  return (
    <DropDownContainer ref={outsideRef}>
      <DropDownBox onClick={handleOptions} isOpen={isOpen} hasValue={value}>
        {value || selectdata[0]}
        {isOpen ? <WhiteUpArrow /> : value ? <WhiteDownArrow /> : <GrayDownArrow />}
      </DropDownBox>
      {isOpen && (
        <DownOptions>
          {selectdata.map(data => (
            <Option key={data} onClick={() => setData(data)} onMouseEnter={() => setValue(data)}>
              {data}
            </Option>
          ))}
        </DownOptions>
      )}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  box-sizing: border-box;
  margin-top: 6px;

  width: 156px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 174px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 380px;
    margin-top: 8px;
  }
`;

const DropDownBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme, isOpen, hasValue }) => (isOpen || hasValue ? theme.colors.WHITE : theme.colors.GRAY3)};

  color: ${({ theme, isOpen, hasValue }) => (isOpen || hasValue ? theme.colors.WHITE : theme.colors.GRAY3)};
  height: 50px;
  font-size: 14px;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 52px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 62px;
    padding: 16px 20px;
    font-size: 20px;
  }
`;

const DownOptions = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 4px;
  margin-top: 6px;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  width: 156px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 174px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 380px;
    padding: 5px;
    margin-top: 12px;
  }
`;

const Option = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: inherit;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.GRAY2};
  :last-child {
    margin: 0;
  }
  :hover,
  :active {
    background-color: #232323;
    color: ${({ theme }) => theme.colors.WHITE};
  }
  height: 38px;
  padding: 0 12px;
  margin-bottom: 4px;

  @media ${({ theme }) => theme.devices.TABLET} {
    height: 40px;
    margin-bottom: 8px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 50px;
    padding: 15px;
    margin-bottom: 12px;
    font-size: 20px;
  }
`;

export default DropDown;
