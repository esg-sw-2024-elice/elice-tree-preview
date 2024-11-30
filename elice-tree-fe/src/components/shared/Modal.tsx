import * as S from './Modal.styles';
import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TEXT_MODAL_BUTTON_CONFIRM } from '@/constants';

export type TDialog = 'success' | 'error' | 'notification';

export type TActionsModal = {
  show: (title: string, msg: string, type?: TDialog) => void;
};

export default forwardRef<
  TActionsModal,
  { onConfirm?: () => Promise<void>; onClose?: () => Promise<void> }
>(function Modal({ onConfirm, onClose }, ref) {
  const refDialog = useRef<HTMLDialogElement>(null);
  const [type, setType] = useState<TDialog>('notification');
  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');
  const [labelBtnConfirm, setLabelBtnConfirm] = useState(TEXT_MODAL_BUTTON_CONFIRM);
  const handleClose = async () => {
    if (onClose) {
      await onClose();
    }
    refDialog.current?.close();
  };
  const handleConfirm = async () => {
    if (onConfirm) {
      await onConfirm();
    }
    await handleClose();
  };
  useImperativeHandle(ref, () => ({
    show(_title, _msg, _type = 'notification') {
      setTitle(_title);
      setMsg(_msg);
      setType(_type);
      setLabelBtnConfirm(TEXT_MODAL_BUTTON_CONFIRM);
      refDialog.current?.showModal();
    },
  }));
  return createPortal(
    <S.DialogContainer ref={refDialog}>
      <S.DivContainer>
        <S.Heading1Title $type={type}>{title}</S.Heading1Title>
        <S.ParagraphMessage $type={type}>{msg}</S.ParagraphMessage>
        <S.FormDialog method="dialog" onSubmit={handleConfirm}>
          <S.ButtonConfirm type="submit" $type={type}>
            {labelBtnConfirm}
          </S.ButtonConfirm>
        </S.FormDialog>
      </S.DivContainer>
    </S.DialogContainer>,
    document.getElementById('global-modal') as HTMLElement,
  );
});
