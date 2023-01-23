import * as Yup from 'yup';
import { ACADEMIC, PART, CAMPUS } from './ButtonData';

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
    campus: Yup.string().required().oneOf(CAMPUS),
    major: Yup.string().required(),
    grade: Yup.string().required(),
    studentNumber: Yup.string().required(),
    academic: Yup.string().required().oneOf(ACADEMIC),
    part: Yup.string().required().oneOf(PART),
    privacyAccept: Yup.boolean().required().oneOf([true]),
  }),
  onSubmit: values => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  },
};
