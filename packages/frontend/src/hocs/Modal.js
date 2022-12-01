import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styled from '@emotion/styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>{children}</Overlay>,
    modalRoot
  );
};

const Overlay = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export default Modal;
