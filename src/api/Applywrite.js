import { Axios } from './Axios';

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
      setToastFunction(true);
      //setTosatMessageFunction(err.response.data.statusCode);
      setTosatMessageFunction(err.response.data.message[0]);
      /*에러를 다 보여줄 필요는 없으므로 첫 번째 인덱스만 접근했습니다.
      이게 만약에 전부다 배열형태의 에러 반환이라면 이걸로해도 무난할 듯 싶습니다.
      아니라면 statusCode에 맞는 에러 메시지로 토스트 메시지 셋팅 들어가기*/
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
      setToastFunction(true);
      setTosatMessageFunction(err.response.data.message[0]);
      //setTosatMessageFunction(err.response.data.statusCode);
    });
};

export const getApplyQuestionList = (part, callbackFunctionsObject) => {
  const { setList, setToastFunction, setTosatMessageFunction } = callbackFunctionsObject;
  Axios.get(`/api/assets/questions/${part}`)
    .then(res => {
      setList(res.data.data.resultQuestions);
    })
    .catch(err => {
      setToastFunction(true);
      setTosatMessageFunction(err.response.statusText);
      //서버 에러 반환형식 문서화가 필요합니다.
    });
};
