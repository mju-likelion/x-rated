import { useField } from 'formik';
import { ENROLLMENTSTATUS, ENROLLMENTSTATUS_CLIENT, PART } from './ButtonData';

const ButtonBox = ({ buttonData, name }) => {
  const [, meta, helpers] = useField(name);

  const selectedValue = meta.value;
  const setSelectedValue = helpers.setValue;

  // const isSelected = value => (value === selectedValue ? true : false);
  return (
    <>
      {buttonData.map((data, idx) => (
        <button
          key={data}
          type="button"
          onClick={() => {
            if (buttonData === ENROLLMENTSTATUS_CLIENT) {
              setSelectedValue(ENROLLMENTSTATUS[idx]);
            } else if (buttonData === PART) {
              setSelectedValue(data.toLowerCase());
            } else {
              setSelectedValue(data);
            }
          }}
        >
          {data}
        </button>
      ))}
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default ButtonBox;
