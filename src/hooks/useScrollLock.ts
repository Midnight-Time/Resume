import { useCallback } from "react";
import scrollBarCompensationFn from "../utils/scrollBarCompensationFn";

const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    const scrollBarCompensation = scrollBarCompensationFn();
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
