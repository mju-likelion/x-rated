import * as Yup from 'yup';

import { ENROLLMENTSTATUS, PART } from './ButtonData';
import { GRADE } from './SelectData';

export const validation = {
  name: Yup.string().required('required'),
  phone: Yup.string()
    .required('required')
    .matches(/^010-([0-9]{4})-([0-9]{4})$/, 'form'),
  email: Yup.string().required('required').email('form'),
  campus: Yup.string().required('required').oneOf(['자연'], '멋쟁이사자처럼 명지대 인문캠퍼스에 지원해 주세요.'),
  major: Yup.string()
    .required('required')
    .matches(/^[가-힣]{2,11}$/, 'form'),
  grade: Yup.string().required('required').oneOf(GRADE),
  sid: Yup.string()
    .required('required')
    .matches(/^\d{8}$/, 'form'),
  enrollmentStatus: Yup.string().required('required').oneOf(ENROLLMENTSTATUS),
  part: Yup.string().required('required').oneOf(PART),
  LikeLionpersonalInfoAgreement: Yup.boolean().required('required').oneOf([true]),
  personalInfoAgreement: Yup.boolean().required('required').oneOf([true]),
  cautionConfirm: Yup.boolean().required('required').oneOf([true]),
};
