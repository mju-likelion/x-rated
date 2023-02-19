import { useField } from 'formik';
import styled from 'styled-components';

const TextInput = ({ name, placeholder, text, maxLength }) => {
  const [field, meta, helper] = useField(name);
  const { value } = meta;
  const { setValue } = helper;

  const handleChange = e => {
    const num = e.target.value;
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(num) && [-1, 3].includes(num.indexOf('-')) && [-1, 3, 8].includes(num.lastIndexOf('-'))) {
      setValue(num);
      if ([3, 8].includes(num.length) && value.length < num.length) {
        setValue(num.concat('-'));
      }
    }
  };

  const handlePlaceHolder = e => {
    if (e.target.placeholder === '' && !value && placeholder) {
      e.target.placeholder = placeholder;
    } else {
      e.target.placeholder = '';
    }
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
        autoComplete="off"
        onFocus={handlePlaceHolder}
        onBlur={handlePlaceHolder}
      />
    </Container>
  );
};

export const StyledText = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.WHITE};
  margin: 0 0 6px 6px;
  p {
    display: inline;
    color: ${({ theme }) => theme.colors.ORANGE};
    margin-left: 3px;
  }
  font-size: 12px;

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
  width: 207px;
  height: 71px;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 276px;
    height: 76px;
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
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border: none;
  color: ${({ theme }) => theme.colors.WHITE};
  height: 50px;
  font-size: 14px;

  :focus {
    outline: none;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.WHITE};
    border-radius: 10px;
    ::before::after {
      border-radius: 10px;
    }
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

export default TextInput;
