import { useField } from 'formik';

const SelectBox = ({ selectdata, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <select {...field} {...props}>
        {selectdata.map(data => (
          <option key={data} value={data}>
            {data}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default SelectBox;
