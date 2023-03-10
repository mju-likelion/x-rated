import { useField } from 'formik';
import styled from 'styled-components';

import IconChecked from '../../assets/images/check.svg';

import { StyledText } from './TextInput';

const CheckBox = ({ name, text }) => {
  const [field] = useField(name);
  const { value } = field;
  return (
    <CheckboxContainer htmlFor={`${name}CheckBox`}>
      <StyledCheckbox id={`${name}CheckBox`} type="checkbox" checked={value || false} {...field} />
      <CheckBoxText>
        {text}
        <p>*</p>
      </CheckBoxText>
    </CheckboxContainer>
  );
};

const StyledCheckbox = styled.input`
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.GRAY3};
  border-radius: 6px;
  width: 22px;
  height: 22px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 24px;
    height: 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 26px;
    height: 26px;
  }
  &:checked {
    background-image: url(${IconChecked});
    background-size: 70% 75%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.WHITE};
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  height: 12px;
  margin-top: 15px;

  @media ${({ theme }) => theme.devices.TABLET} {
    height: 18px;
    margin-top: 21px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 26px;
    margin-top: 25px;
  }
`;

const CheckBoxText = styled(StyledText)`
  font-size: 12px;
  margin: 0 0 0 6px;
  p {
    margin-left: 3px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    margin: 0 0 0 9px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    margin: 0 0 0 12px;
  }
`;

export default CheckBox;
