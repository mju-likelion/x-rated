import { useField } from 'formik';

const SelectBox = ({ selectdata, name, text }) => {
  const [field] = useField(name);
  return (
    <>
      {text}
      <select {...field}>
        {selectdata.map(data => (
          <option key={data} value={data}>
            {data}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;
