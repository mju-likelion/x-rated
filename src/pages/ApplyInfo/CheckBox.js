import { useField } from 'formik';

const CheckBox = ({ children, name }) => {
  const [field] = useField(name);
  return (
    <div>
      {children}
      <input type="checkbox" {...field} />
    </div>
  );
};

export default CheckBox;
