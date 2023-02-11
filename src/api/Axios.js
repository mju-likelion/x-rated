import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const sendData = (sendDataObejct, callbackFunction) => {
  const applyObject = sendDataObejct;
  const file = applyObject.applicationInfo?.file;
  if (!file) {
    return sendApplyData(applyObject, null, callbackFunction);
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
      sendApplyData(applyObject, cvUrl, callbackFunction);
    })
    .catch(err => console.log(err));
  //이거 나중에 에러 핸들링
};

const sendApplyData = (sendDataObject, url, callbackFunction) => {
  const applyObject = sendDataObject;
  delete applyObject.applicationInfo.file;
  if (url) applyObject.applicationInfo.cvUrl = url; //이건 나중에 서버랑 싱크 맞추기
  applyObject.applicationInfo.sixthAnswer = '이건 일단 test값';
  Axios.post(`/api/applications`, { ...applyObject })
    .then(res => {
      console.log(res);
      callbackFunction();
    })
    .catch(err => console.log(err));
  //이거 나중에 에러 핸들링
};
