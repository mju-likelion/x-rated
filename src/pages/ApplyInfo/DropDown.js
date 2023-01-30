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

export default DropDown;

const DropDownContainer = styled.div`
  box-sizing: border-box;
  margin-top: 8px;
  width: 380px;
`;

const DropDownBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 62px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme, isOpen, hasValue }) => (isOpen || hasValue ? theme.colors.WHITE : theme.colors.GRAY3)};
  border-radius: 10px;
  font-size: 20px;
  color: ${({ theme, isOpen, hasValue }) => (isOpen || hasValue ? theme.colors.WHITE : theme.colors.GRAY3)};
`;

const DownOptions = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 380px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  margin-top: 12px;
`;

const Option = styled.div`
  box-sizing: border-box;
  width: 370px;
  height: 50px;
  padding: 15px;
  background-color: inherit;
  border-radius: 8px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.GRAY2};
  :nth-child(4) {
    margin: 0;
  }
  :hover,
  :active {
    background-color: #232323;
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;
