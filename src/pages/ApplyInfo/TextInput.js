import { useField } from 'formik';
import styled from 'styled-components';

const TextInput = ({ name, placeholder, text, maxLength }) => {
  const [field, meta, helper] = useField(name);
  const { value } = meta;
  const { setValue } = helper;
  const handleChange = e => {
    const phone = e.target.value;
    setValue([3, 8].includes(phone.length) && value.length < phone.length ? phone.concat('-') : phone);
  };
  return (
    <Container>
      <StyledText>
        {text}
        <p>*</p>
      </StyledText>
      <StyledInput
        {...field}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={name === 'phone' ? handleChange : field.onChange}
        value={field.value || ''}
      />
    </Container>
  );
};

export default TextInput;

export const StyledText = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 18px;
  margin: 0 0 8px 8px;
  p {
    display: inline;
    color: ${({ theme }) => theme.colors.ORANGE};
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  height: 92px;
  width: 483px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 483px;
  height: 62px;
  margin-right: 30px;
  border-radius: 10px;
  padding: 16px 20px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border: none;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.WHITE};
`;
