import * as Yup from 'yup';
import { ENROLLMENTSTATUS, PART, CAMPUS } from './ButtonData';
import { GRADE } from './SelectData';

export const FormikConfig = {
  initialValues: {
    name: '',
    phoneNumber: '',
    email: '',
    major: '',
    grade: '1',
    sid: '',
    enrollmentStatus: '',
    campus: '',
    part: '',
    personalInfoAgreement: false,
    cautionConfirm: false,
  },
  validationSchema: Yup.object({
    name: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    email: Yup.string().required(),
    campus: Yup.string().required().oneOf(['자연'], '멋쟁이사자처럼 명지대 인문캠퍼스에 지원해 주세요.'),
    major: Yup.string().required(),
    grade: Yup.string().required().oneOf(GRADE),
    sid: Yup.string().required(),
    enrollmentStatus: Yup.string().required().oneOf(ENROLLMENTSTATUS),
    part: Yup.string()
      .required()
      .oneOf(PART.map(part => part.toLowerCase())),
    personalInfoAgreement: Yup.boolean().required().oneOf([true]),
    cautionConfirm: Yup.boolean().required().oneOf([true]),
  }),
  onSubmit: values => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  },
};
