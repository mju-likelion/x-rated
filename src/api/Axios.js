import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const sendFileData = (file, sid, callbackFunction) =>
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
      console.log(res);
      callbackFunction();
    })
    .catch(err => console.log(err));
