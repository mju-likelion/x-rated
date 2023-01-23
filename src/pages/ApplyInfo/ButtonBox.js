import { useField } from 'formik';

const ButtonBox = ({ buttonData, name }) => {
  const [, meta, helpers] = useField(name);

  const selectedValue = meta.value;
  const setSelectedValue = helpers.setValue;

  const isSelected = value => (value === selectedValue ? true : false);
  return (
    <>
      {buttonData.map(data => (
        <button
          key={data}
          type="button"
          onClick={() => {
            setSelectedValue(data);
          }}
        >
          {data}
        </button>
      ))}
    </>
  );
};

export default ButtonBox;
