import { useField } from 'formik';

const ButtonBox = ({ buttonData, name, text }) => {
  const [field, meta] = useField(name);
  const selectedValue = meta.value;
  // const isSelected = value => (value === selectedValue ? true : false);
  return (
    <>
      {text}
      {buttonData.map(data => (
        <div key={data}>
          <input {...field} type="radio" value={data} />
          <span> {data}</span>
        </div>
      ))}
      {field.value && meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default ButtonBox;
