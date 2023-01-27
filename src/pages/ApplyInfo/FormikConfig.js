import * as Yup from 'yup';
import { ENROLLMENTSTATUS, PART } from './ButtonData';
import { GRADE } from './SelectData';

export const FormikConfig = {
  initialValues: {
    name: '',
    phone: '',
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
    phone: Yup.string()
      .required()
      .matches(/^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/, '형식에 맞게 입력해 주세요.'),
    email: Yup.string().required().email('이메일 형식에 맞게 입력해주세요.'),
    campus: Yup.string().required().oneOf(['자연'], '멋쟁이사자처럼 명지대 인문캠퍼스에 지원해 주세요.'),
    major: Yup.string()
      .required()
      .matches(/^[가-힣]{2,11}$/, '올바른 학과명을 입력해 주세요.'),
    grade: Yup.string().required().oneOf(GRADE),
    sid: Yup.string()
      .required()
      .matches(/^\d{8}$/, '올바른 학번을 입력해 주세요.'),
    enrollmentStatus: Yup.string().required().oneOf(ENROLLMENTSTATUS),
    part: Yup.string().required().oneOf(PART),
    personalInfoAgreement: Yup.boolean().required().oneOf([true]),
    cautionConfirm: Yup.boolean().required().oneOf([true]),
  }),
  onSubmit: values => {
    setTimeout(() => {
      alert(
        JSON.stringify(
          {
            ...values,
            phone: values.phone.replace(/-/g, ''),
            part: values.part.toLowerCase(),
          },
          null,
          2,
        ),
      );
    }, 400);
  },
};
