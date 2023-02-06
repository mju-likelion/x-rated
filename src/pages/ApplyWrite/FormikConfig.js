import * as Yup from 'yup';

export const initialValues = {
  firstAnswer: '',
  secondAnswer: '',
  thirdAnswer: '',
  fourthAnswer: '',
  fifthAnswer: '',
  file: '',
};

export const createVaildationSchema = isDevelopPart => {
  return Yup.object({
    firstAnswer: Yup.string().required(),
    secondAnswer: Yup.string().required(),
    thirdAnswer: Yup.string().required(),
    fourthAnswer: Yup.string().required(),
    fifthAnswer: isDevelopPart ? Yup.string().required() : null,
  });
};

export const formikConfig = {
  initialValues,
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
};
