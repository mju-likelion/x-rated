import * as Yup from 'yup';

export const initialValues = {
  firstAnswer: '',
  secondAnswer: '',
  thirdAnswer: '',
  fourthAnswer: '',
  fifthAnswer: '',
  sixthAnswer: '',
  file: '',
};

export const validationSchema = Yup.object({
  firstAnswer: Yup.string().required(),
  secondAnswer: Yup.string().required(),
});

export const formikConfig = {
  initialValues,
  validationSchema,
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
};
