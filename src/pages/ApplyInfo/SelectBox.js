import { useField } from 'formik';
import styled from 'styled-components';

import DropDown from './DropDown';
import { StyledText } from './TextInput';

const SelectBox = ({ selectdata, name, text }) => {
  const [, meta, helper] = useField(name);
  const { value } = meta;
  const { setValue } = helper;
  return (
    <SelectContainer>
      <StyledText>
        {text}
        <p> *</p>
      </StyledText>
      <DropDown selectdata={selectdata} setValue={setValue} value={value} />
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 40px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 50px;
    padding-bottom: 17px;
  }
`;

export default SelectBox;
