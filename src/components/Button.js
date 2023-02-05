import { useEffect, useState } from 'react';

import styled from 'styled-components';

/**
 * @param {string} text 버튼 내부 텍스트
 * @param {string} type 버튼 타입 (button, submit)
 * @param {string} errorMessage 표시할 에러 메시지
 * @param {() => void} handleClick 버튼 클릭시 실행할 이벤트, Route 기능의 경우 history.push와 같은 함수를 이용합니다.
 */
const Button = ({ text, type = 'button', errorMessage, handleClick }) => {
  const [isShowErrorMessage, setIsShowErrorMessage] = useState(false);
  /** @TODO disable 상태에서 클릭 이벤트 동작 불가.
   * 따라서 클릭은 가능하지만 이벤트 실행시 분기 처리를 통해 구현
   * 디자인을 따라갈지 로직을 우선시 할지 논의 필요
   */
  const handleButtonClick = () => {
    if (errorMessage) {
      setIsShowErrorMessage(true);
    } else {
      handleClick?.();
    }
  };

  useEffect(() => {
    errorMessage || setIsShowErrorMessage(false);
  }, [errorMessage]);

  return (
    <Wrapper>
      {/* 'disabled'가 아닌 'disable'임을 주의, handleButtonClick 주석 참고 */}
      <ButtonStyle type={type} disable={errorMessage} onClick={handleButtonClick}>
        {text}
      </ButtonStyle>
      {isShowErrorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
`;

const ButtonStyle = styled.button`
  color: #fff;
  border-radius: 35px;
  font-weight: 700;
  width: 192px;
  height: 50px;
  font-size: 18px;
  line-height: 23px;

  @media (min-width: 1200px) {
    width: 260px;
    height: 70px;
    font-size: 28px;
    line-height: 35px;
  }

  background-color: ${({ disable, theme }) => (disable ? theme.colors.GRAY2 : theme.colors.ORANGE)};
  :hover {
    background-color: ${({ disable }) => disable || '#ffab6b'};
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.RED};
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  margin-top: 10px;
  line-height: 15px;

  @media (min-width: 1200px) {
    font-size: 18px;
    margin-top: 17px;
    line-height: 23px;
  }
`;

export default Button;
