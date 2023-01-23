import { useField } from 'formik';

const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {props.name}
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default TextInput;
