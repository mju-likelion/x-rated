import { Link } from 'react-router-dom';

import { Axios } from './Axios';

export const getApplyCheck = checkData => {
  Axios.get(`/api/applications/submit-check`, {
    params: {
      sid: checkData.sid,
      name: checkData.name,
    },
  })
    .then(res => {
      if (res.data.data.submitted) {
        console.log(res.data.data.submitted);
      }
    })
    .catch(err => {
      console.log(err);
      //에러 핸들링
    });
};
