import { Axios } from './Axios';
import { AxiosErrorHandler } from './AxiosErrorHandler';

export const sendApplyData = (sendDataObejct, callbackFunctionsObject) => {
  const { setToastFunction, setTosatMessageFunction } = callbackFunctionsObject;
  const applyObject = sendDataObejct;
  const file = applyObject.applicationInfo?.file;
  if (!file) {
    return sendApplyForm(applyObject, null, callbackFunctionsObject);
  }
  const sid = applyObject.personalInfo.sid;
  Axios.post(
    `api/applications/upload-cv/`,
    { cv: file },
    {
      params: {
        sid,
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
    .then(res => {
      const cvUrl = res.data.data.url;
      sendApplyForm(applyObject, cvUrl, callbackFunctionsObject);
    })
    .catch(err => {
      const errMessage = err.response.data.message;
      AxiosErrorHandler(setToastFunction, setTosatMessageFunction, errMessage);
    });
};

const sendApplyForm = (sendDataObject, url, callbackFunctionsObject) => {
  const { navigateFunction, setToastFunction, setTosatMessageFunction } = callbackFunctionsObject;
  const applyObject = sendDataObject;
  delete applyObject.applicationInfo.file;
  if (url) applyObject.applicationInfo.cvUrl = url;
  Axios.post(`/api/applications`, applyObject)
    .then(() => navigateFunction())
    .catch(err => {
      const errResponse = err.response.data;
      const errMessage =
        errResponse.statusCode === 409 ? '이미 제출된 지원서는 수정이 불가합니다.' : errResponse.message; //중첩에 따른 토스트메세지 통일
      AxiosErrorHandler(setToastFunction, setTosatMessageFunction, errMessage);
    });
};

export const getApplyQuestionList = (part, callbackFunctionsObject) => {
  const { setList, setToastFunction, setTosatMessageFunction } = callbackFunctionsObject;
  Axios.get(`/api/assets/questions/${part}`)
    .then(res => {
      setList(res.data.data.resultQuestions);
    })
    .catch(err => {
      const errMessage = err.response.data.message;
      AxiosErrorHandler(setToastFunction, setTosatMessageFunction, errMessage);
    });
};
