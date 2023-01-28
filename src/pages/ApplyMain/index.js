import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';

import PartInformation from './PartInformation';

const ApplyMainPage = () => {
  const [testState, setTestState] = useState('');
  const [error, setError] = useState('');
  const test = e => {
    setTestState(e.target.value);
  };

  useEffect(() => {
    if (testState.length >= 5 || testState.length === 0) {
      setError('에러입니당');
    } else {
      setError('');
    }
  }, [testState]);

  return (
    <div>
      ApplyMainPage
      <PartInformation />
      <input onChange={test} placeholder="1~4글자 입력 그외 에러" />
      <Button type="button" text={'제출하기'} errorMessage={error} />
    </div>
  );
};

export default ApplyMainPage;
