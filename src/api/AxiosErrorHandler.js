/**
 * @param {() => void} setToastFunction 토스트 메시지 state setter
 * @param {() => void} setTosatMessageFunction  토스트 메시지 content setter
 * @param {string} errorMessage 표시할 에러 메시지
 *
 */

export const AxiosErrorHandler = (setToastFunction, setTosatMessageFunction, errMessage) => {
  setToastFunction(true);
  if (Array.isArray(errMessage)) {
    setTosatMessageFunction(errMessage[0]);
  } else if (typeof errMessage === 'string') {
    setTosatMessageFunction(errMessage);
  } else {
    setTosatMessageFunction('알수없는 에러 반환타입입니다.');
  }
};
