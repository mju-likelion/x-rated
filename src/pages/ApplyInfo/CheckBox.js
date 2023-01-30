import { useField } from 'formik';
import styled from 'styled-components';

import IconChecked from '../../assets/images/check.svg';

import { StyledText } from './TextInput';

const CheckBox = ({ name, text }) => {
  const [field] = useField(name);
  return (
    <CheckboxContainer>
      <StyledCheckbox type="checkbox" {...field} />
      <CheckBoxText>
        {text}
        <p>*</p>
      </CheckBoxText>
    </CheckboxContainer>
  );
};

export default CheckBox;

const StyledCheckbox = styled.input`
  appearance: none;
  border: 1px solid gainsboro;
  border-radius: 6px;
  width: 26px;
  height: 26px;
  &:checked {
    background-image: url(${IconChecked});
    background-size: 70% 75%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
  }
`;

const CheckboxContainer = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
`;

const CheckBoxText = styled(StyledText)`
  font-size: 18px;
  margin: 0 0 0 12px;
`;
