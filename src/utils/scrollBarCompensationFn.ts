const scrollBarCompensationFn = () => {
  // Необходимо было дополнительно загрузить типы, чтобы получить доступ к useAgentData
  // Нужно для того, чтобы в Chrome убрать подергивания при открытии/закрытии боковой навигации
  let isOpera = navigator.userAgentData?.brands[0].brand === "Opera";
  let scrollBarCompensation;
  if (isOpera) {
    scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    console.log("opera");
  } else {
    scrollBarCompensation = window.innerWidth - document.body.offsetWidth - 1;
    console.log("chrome");
  }
  return scrollBarCompensation;
};

export default scrollBarCompensationFn;
