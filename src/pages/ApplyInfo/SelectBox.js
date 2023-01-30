import { useField } from 'formik';
import styled from 'styled-components';

import DropDown from './DropDown';
import { StyledText } from './TextInput';

const SelectBox = ({ selectdata, name, text }) => {
  const [, meta, helper] = useField(name);
  const { value } = meta;
  const { setValue } = helper;
  return (
    <>
      <StyledText>
        {text}
        <p>*</p>
      </StyledText>
      <DropDown selectdata={selectdata} setValue={setValue} value={value} />
    </>
  );
};

export default SelectBox;
