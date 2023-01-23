import * as Yup from 'yup';
import { Academic, Part, Campus } from './ButtonData';

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
    name: Yup.string().required(),
    phoneNum: Yup.string().required(),
    email: Yup.string().required(),
    campus: Yup.string().required().oneOf(Campus),
    major: Yup.string().required(),
    grade: Yup.string().required(),
    studentNumber: Yup.string().required(),
    academic: Yup.string().required().oneOf(Academic),
    part: Yup.string().required().oneOf(Part),
    acceptedInfo: Yup.boolean().required().oneOf([true]),
  }),
  onSubmit: values => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  },
};
