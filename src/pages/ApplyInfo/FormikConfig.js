import * as Yup from 'yup';
import { validation } from './Validation';

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
  validationSchema: Yup.object(validation),
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
