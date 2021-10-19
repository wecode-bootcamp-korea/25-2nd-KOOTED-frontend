import React, { useEffect, useRef } from 'react';
import './Header.scss';

export default function Header({
  btnClick,
  btnName,
  isClickFilterBtn,
  children,
}) {
  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);

    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  const clickModalOutside = event => {
    if (btnClick && !modalRef.current.contains(event.target)) {
      isClickFilterBtn();
    }
  };

  return (
    <div className="ModalPopup" ref={modalRef}>
      <header className="modalHeader">
        <span className="modalReset">
          <i className="fas fa-redo" />
          &nbsp;초기화
        </span>
        <h1 className="modalName">{btnName}</h1>
        <span className="modalClose" onClick={isClickFilterBtn}>
          X
        </span>
      </header>
      {children}
    </div>
  );
}
