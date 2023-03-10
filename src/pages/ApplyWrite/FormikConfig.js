import * as Yup from 'yup';

export const initialValues = {
  firstAnswer: '',
  secondAnswer: '',
  thirdAnswer: '',
  fourthAnswer: '',
  fifthAnswer: '',
  file: '',
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const createVaildationSchema = isDevelopPart => {
  return Yup.object({
    firstAnswer: Yup.string().required(),
    secondAnswer: Yup.string().required(),
    thirdAnswer: Yup.string().required(),
    fourthAnswer: Yup.string().required(),
    fifthAnswer: isDevelopPart ? Yup.string().required() : null,
    file: isDevelopPart
      ? Yup.mixed()
          .required()
          .test('fileUpload', 'Unsupported fileSize', value => {
            if (!value) return;
            if (value.size > MAX_FILE_SIZE) {
              return false;
            }
            return value.size > 0;
          })
      : null,
  });
};

export const formikConfig = {
  initialValues,
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
};
