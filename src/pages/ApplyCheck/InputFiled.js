import React from 'react';

import styled from 'styled-components';

const InputFiled = handleInputClick => {
  return (
    <ApplyCheckAllInputFiled>
      <ApplyCheckInputField>
        <ApplyCheckInputNameBox>
          <ApplyCheckInputName>
            이름 <ApplyCheckAsterisk>*</ApplyCheckAsterisk>
          </ApplyCheckInputName>
        </ApplyCheckInputNameBox>
        <ApplyCheckInput onClick={handleInputClick} />
      </ApplyCheckInputField>
      <ApplyCheckInputField>
        <ApplyCheckInputNameBox>
          <ApplyCheckInputName>
            학번 <ApplyCheckAsterisk>*</ApplyCheckAsterisk>
          </ApplyCheckInputName>
        </ApplyCheckInputNameBox>
        <ApplyCheckInput placeholder="60XXXXXX" onClick={handleInputClick} />
      </ApplyCheckInputField>
    </ApplyCheckAllInputFiled>
  );
};

const ApplyCheckAllInputFiled = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const ApplyCheckInputField = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const ApplyCheckInputNameBox = styled.div`
  width: 201px;
  display: flex;
  padding-left: 6px;
`;

const ApplyCheckInputName = styled.div`
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
`;

const ApplyCheckAsterisk = styled.span`
  color: ${({ theme }) => theme.colors.ORANGE};
  font-family: Spoqa Han Sans Neo; // 글로벌 스타일 폰트 우선 순위 변경되면 지우겠습니다
`;

const ApplyCheckInput = styled.input`
  all: unset;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  width: 207px;
  height: 50px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 14px;
  line-height: 30px;
  padding-left: 16px;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.WHITE};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.GRAY3};
  }
`;

export default InputFiled;
