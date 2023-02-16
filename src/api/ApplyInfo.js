import { Axios } from './Axios';

export const getAgreement = async setAgreement => {
  try {
    const res = await Axios('/api/assets/agreements');
    console.log(res);
    setAgreement(res.data.data[0].agreementContent);
  } catch (e) {
    console.log(e);
  }
};
