import { useField } from 'formik';

import DropDown from './DropDown';

const SelectBox = ({ selectdata, name, text }) => {
  const [, meta, helper] = useField(name);
  const { value } = meta;
  const { setValue } = helper;
  return (
    <>
      {text}
      <DropDown selectdata={selectdata} setValue={setValue} value={value} />
    </>
  );
};

export default SelectBox;
