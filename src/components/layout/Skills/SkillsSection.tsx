import classes from "./SkillsSection.module.css";
/////
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/////

const SkillsSection = () => {
  return (
    <div className={classes.container}>
      <h2 className={`h2_skillsSection ${classes.heading}`}>Навыки и умения</h2>
      <div className={classes.innerContainer}>
        <div
          className={`card_skillsSection card_skillsSection_1 ${classes.skillCard}`}
        >
          <h3>Чистый код</h3>
          <p>
            Мой код легко читать и легко модифицировать. Аккуратность и внимание
            к деталям. Я в курсе самых передовых зарубежных практик, как в
            технической сфере, так и в сфере дизайна веб-приложений и
            интернет-сайтов.
          </p>
        </div>
        <div
          className={`card_skillsSection card_skillsSection_1 ${classes.skillCard}`}
        >
          <h3>Создание приложений</h3>
          <p>
            Реализация бизнес-логики разной сложности: от поиска и сортировки
            данных на странице, до взаимодействия с сервером для записи,
            считывания, редактирования или удаления данных пользователем.
          </p>
        </div>
        <div
          className={`card_skillsSection card_skillsSection_3 ${classes.skillCard}`}
        >
          <h3>Взаимодествие с пользователем</h3>
          <p>
            Создание форм обратной связи с валидацией по заданным критериям.
            Создание приятного и информативного интерфейса, немедленная реакция
            на действия пользователя (подсказки, уведомления).
          </p>
        </div>
        <div
          className={`card_skillsSection card_skillsSection_4 ${classes.skillCard}`}
        >
          <h3>Грамотность и стремление к развитию</h3>
          <p>
            Отличный уровень разговорного английского, грамотная устная и
            письменная речь. Владею всеми необходимыми основами дизайна для
            разработки прототипа сайта. Умею размещать готовый сайт на выранном
            хостинге.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
