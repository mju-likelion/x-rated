import { useEffect, useState } from 'react';
import styled from 'styled-components';

/**
 * @param {string} text 버튼 내부 텍스트
 * @param {string} type 버튼 타입 (button, submit)
 * @param {string} error 표시할 에러 메시지
 * @param {() => void } handleClick 버튼 클릭시 실행할 이벤트, Route 기능의 경우 history.push와 같은 함수를 이용합니다.
 */
const Button = ({ text, type = 'button', error, handleClick }) => {
  const [isShowErrorMessage, setIsShowErrorMessage] = useState(false);

  /** @TODO disable 상태에서 클릭 이벤트 동작 불가.
   * 따라서 클릭은 가능하지만 이벤트 실행시 분기 처리를 통해 구현
   * 디자인을 따라갈지 로직을 우선시 할지 논의 필요
   */
  const handleButtonClick = () => {
    if (error) {
      setIsShowErrorMessage(true);
    } else {
      handleClick?.();
    }
  };

  useEffect(() => {
    error || setIsShowErrorMessage(false);
  }, [error]);

  return (
    <Wrapper>
      {/* 'disabled'가 아닌 'disable'임을 주의, handleButtonClick 주석 참고 */}
      <ButtonStyle type={type} disable={error} onClick={handleButtonClick}>
        {text}
      </ButtonStyle>
      {isShowErrorMessage && <Error>{error}</Error>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
`;

const ButtonStyle = styled.button`
  width: 260px;
  height: 70px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 700;
  border-radius: 35px;
  color: #fff;
  background-color: ${({ disable, theme }) => (disable ? theme.Colors.GRAY2 : theme.Colors.ORANGE)};
  :hover {
    background-color: ${({ disable }) => disable || '#ffab6b'};
  }
`;

const Error = styled.p`
  color: ${({ theme }) => theme.Colors.RED};
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  margin-top: 17px;
`;

export default Button;
