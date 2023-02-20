import { Axios } from './Axios';

export const getAgreement = async (setAgreement, setToast) => {
  try {
    const res = await Axios('/api/assets/agreements');
    setAgreement(res.data.data[0].agreementContent);
  } catch (e) {
    setToast(true);
  }
};
