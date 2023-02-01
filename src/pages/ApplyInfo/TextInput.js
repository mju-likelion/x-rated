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
        <p> *</p>
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
  margin: 0 0 6px 6px;
  p {
    display: inline;
    color: ${({ theme }) => theme.colors.ORANGE};
  }
  @media ${({ theme }) => theme.devices.PHONE} {
    font-size: 12px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 0 0 8px 8px;
    font-size: 18px;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.PHONE} {
    width: 207px;
    height: 71px;
    margin-bottom: 32px;
  }

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 276px;
    height: 76px;
    margin-right: 16px;
    margin-bottom: 0;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 92px;
    width: 483px;
    margin-right: 30px;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
  width: 100%;
  padding: 16px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.GRAY1};
  border: none;
  color: ${({ theme }) => theme.colors.WHITE};
  @media ${({ theme }) => theme.devices.PHONE} {
    height: 50px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 52px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 62px;
    font-size: 20px;
    padding: 16px 20px;
  }
`;
