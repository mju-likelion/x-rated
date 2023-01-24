import * as Yup from 'yup';
import { ENROLLMENTSTATUS, PART, CAMPUS } from './ButtonData';

export const FormikConfig = {
  initialValues: {
    name: '',
    phoneNumber: '',
    email: '',
    major: '',
    grade: '',
    sid: '',
    enrollmentStatus: '',
    campus: '',
    part: '',
    personalInfoAgreement: false,
  },
  validationSchema: Yup.object({
    name: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    email: Yup.string().required(),
    campus: Yup.string().required().oneOf(CAMPUS),
    major: Yup.string().required(),
    grade: Yup.string().required(),
    sid: Yup.string().required(),
    enrollmentStatus: Yup.string().required().oneOf(ENROLLMENTSTATUS),
    part: Yup.string().required().oneOf(PART),
    personalInfoAgreement: Yup.boolean().required().oneOf([true]),
  }),
  onSubmit: values => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  },
};
