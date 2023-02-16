import { useField } from 'formik';
import styled from 'styled-components';

import { StyledText } from './TextInput';

const ButtonBox = ({ buttonsData, name, text }) => {
  const [field, meta] = useField(name);
  const selectedValue = meta.value;

  return (
    <Container>
      <StyledText>
        {text}
        <p>*</p>
      </StyledText>
      <ButtonContainer>
        {buttonsData.map(data => (
          <StyledButton
            htmlFor={`${data} button`}
            key={data}
            isSelected={data === '인문' ? false : data === selectedValue}
          >
            <HiddenInput {...field} type="radio" value={data} id={`${data} button`} />
            <ButtonText> {data}</ButtonText>
          </StyledButton>
        ))}
      </ButtonContainer>
      {meta.value && meta.error && <ErrorMsg>{meta.error}</ErrorMsg>}
      {text === '학적' && (
        <Descirption>
          <DescriptionFirstLine>23년 1학기 기준으로, 재학생은 현재 이수 중인 학년 / 휴학생의 경우</DescriptionFirstLine>
          복학 예정 학년이 아닌 현재까지 이수한 학년으로 작성해 주세요.
        </Descirption>
      )}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 103px;

  @media ${({ theme }) => theme.devices.TABLET} {
    height: 112px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 120px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme.colors.WHITE : theme.colors.GRAY3)};
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.WHITE : theme.colors.GRAY3)};
  background: none;
  border-radius: 10px;
  width: 156px;
  height: 50px;
  margin-right: 6px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 174px;
    height: 52px;
    margin-right: 12px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 182px;
    height: 62px;
    margin-right: 16px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const ButtonText = styled.span`
  color: inherit;
  font-size: 14px;

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 20px;
  }
`;

const Message = styled.p`
  margin-top: 7px;
  font-size: 10px;
  line-height: 12px;

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 12px;
    line-height: 15px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const ErrorMsg = styled(Message)`
  color: ${({ theme }) => theme.colors.RED};
`;

const Descirption = styled(Message)`
  color: ${({ theme }) => theme.colors.GRAY2};
`;

const DescriptionFirstLine = styled.span`
  display: block;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: inline;
  }
`;

export default ButtonBox;
