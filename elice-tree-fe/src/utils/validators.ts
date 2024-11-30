export function validateIsEmpty(value?: string) {
  return value?.trim() !== '';
}

export function validatePassword(password: string) {
  /**
   * 영문, 숫자, 특수문자 포함 8자리 이상 15자리 이하
   */
  return /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/.test(password);
}
