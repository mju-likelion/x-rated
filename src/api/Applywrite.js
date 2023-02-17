import { Axios } from './Axios';

export const sendApplyData = (sendDataObejct, callbackFunction) => {
  const applyObject = sendDataObejct;
  const file = applyObject.applicationInfo?.file;
  if (!file) {
    return sendApplyForm(applyObject, null, callbackFunction);
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
      sendApplyForm(applyObject, cvUrl, callbackFunction);
    })
    .catch();
  //이거 나중에 에러 핸들링
};

const sendApplyForm = (sendDataObject, url, callbackFunction) => {
  const applyObject = sendDataObject;
  delete applyObject.applicationInfo.file;
  if (url) applyObject.applicationInfo.cvUrl = url;
  Axios.post(`/api/applications`, applyObject)
    .then(() => callbackFunction())
    .catch();
  //이거 나중에 에러 핸들링
};

export const getApplyQuestionList = (part, setList) => {
  Axios.get(`/api/assets/questions/${part}`)
    .then(res => {
      setList(res.data.data.resultQuestions);
    })
    .catch();
};
