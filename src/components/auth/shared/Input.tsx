import * as S from './Input.styles';
import { forwardRef } from 'react';

export default forwardRef<
  HTMLInputElement,
  {
    type: 'text' | 'password';
    placeholder: string;
  }
>(function Input({ type, placeholder }, ref) {
  return <S.Input ref={ref} type={type} placeholder={placeholder} />;
});
