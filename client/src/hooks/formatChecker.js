export const isEmailForm = (asValue) => {
  const regExp =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i;
  return regExp.test(asValue);
};

export const isCellPhoneForm = (asValue) => {
  const regExp = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
  const hyphenRegExp =
    /^((01[1|6|7|8|9])-[1-9]+[0-9]{2,3}-[0-9]{4})|(010-[1-9][0-9]{3}-[0-9]{4})$/;

  return regExp.test(asValue) || hyphenRegExp.test(asValue);
};

export const isNameForm = (asValue) => {
  const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z| ]{2,20}$/;
  return regExp.test(asValue);
};

export const isPasswordForm = (asValue) => {
  const regExp = /(?=.*\d)(?=.*[~`!@#$%^&*()-+=])(?=.*[a-zA-Z]).{8,12}$/; // 8자 이상 영문, 숫자, 특수문자(^@~`!#$%&*()+=) 조합
  return regExp.test(asValue);
};

export const isNull = (value) => {
  // return array.reduce((prev, cur) => prev || cur === "", false);
  return value.length === 0 ? true : false;
};

export const validAuthCode = (val) => {
  // 인증번호 양식 확인
  var regExp = /^([0-9]{6})$/;
  return regExp.test(val);
};
