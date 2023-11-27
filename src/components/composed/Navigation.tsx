import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div>Logo</div>
        <ul className={classes.navList}>
          <li className="">Главная</li>
          <li className={classes.active}>Проекты</li>
          <li className="">Контакты</li>
        </ul>
        <div>RU</div>
      </div>
    </div>
  );
};

export default Navigation;
