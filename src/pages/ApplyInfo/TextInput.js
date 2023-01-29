import { useField } from 'formik';

const TextInput = ({ name, placeholder, text, maxLength }) => {
  const [field, , helper] = useField(name);
  const { setValue } = helper;
  const handleChange = e => {
    const phone = e.target.value;
    setValue(phone.length === 3 || phone.length === 8 ? phone.concat('-') : phone);
  };
  return (
    <>
      {text}
      <input
        {...field}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={name === 'phone' ? handleChange : field.onChange}
        value={field.value || ''}
      />
    </>
  );
};

export default TextInput;
