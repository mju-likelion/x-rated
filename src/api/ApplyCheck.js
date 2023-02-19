import { Axios } from './Axios';

export const getApplyCheck = (checkData, callbackFunctions) => {
  const { navigateSuccess, navigateFail } = callbackFunctions;

  Axios.get(`/api/applications/submit-check`, {
    params: {
      sid: checkData.sid,
      name: checkData.name,
    },
  })
    .then(() => navigateSuccess(checkData.name))
    .catch(() => navigateFail(checkData.name));
};
