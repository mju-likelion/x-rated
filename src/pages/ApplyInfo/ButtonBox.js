import { useField } from 'formik';
import styled from 'styled-components';

import { StyledText } from './TextInput';

const ButtonBox = ({ buttonData, name, text }) => {
  const [field, meta] = useField(name);
  const selectedValue = meta.value;
  // const isSelected = value => (value === selectedValue ? true : false);
  return (
    <Container>
      <StyledText>{text}</StyledText>
      <ButtonContainer>
        {buttonData.map(data => (
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
      {meta.value && meta.error && <div>{meta.error}</div>}
    </Container>
  );
};

export default ButtonBox;

const Container = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.label`
  width: 182px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme.colors.WHITE : theme.colors.GRAY3)};
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.WHITE : theme.colors.GRAY3)};
  background: none;
  border-radius: 10px;
  margin: 0 16px 0 0;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ButtonText = styled.span`
  color: inherit;
  font-size: 20px;
`;
