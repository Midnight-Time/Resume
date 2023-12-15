import { useCallback } from "react";

const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    // Необходимо было дополнительно загрузить типы, чтобы получить доступ к useAgentData
    // Нужно для того, чтобы в Chrome убрать подергивания при открытии/закрытии боковой навигации
    let isOpera = navigator.userAgentData?.brands[0].brand === "Opera";
    let scrollBarCompensation;
    if (isOpera) {
      scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    } else {
      scrollBarCompensation = window.innerWidth - document.body.offsetWidth - 1;
    }
    document.body.style.overflowY = "hidden";
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflowY = "";
    document.body.style.paddingRight = "";
  }, []);

  return { lockScroll, unlockScroll };
};

export default useScrollLock;
