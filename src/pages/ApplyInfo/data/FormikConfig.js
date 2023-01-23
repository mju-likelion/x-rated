import * as Yup from 'yup';

export const FormikConfig = {
  initialValues: {
    name: '',
    phoneNum: '',
    email: '',
    major: '',
    grade: '',
    studentNumber: '',
    academic: '',
    campus: '',
    part: '',
    acceptedInfo: false,
  },
  validationSchema: Yup.object({
    name: Yup.required(),
    phoneNum: Yup.required(),
    email: Yup.required(),
    campus: Yup.required().oneOf(campus),
    major: Yup.required(),
    grade: Yup.required(),
    studentNumber: Yup.required(),
    academic: Yup.required().oneOf(Academic),
    part: Yup.required().oneOf(Part),
    acceptedInfo: Yup.required().oneOf([true]),
  }),
  onSubmit: values => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  },
};
