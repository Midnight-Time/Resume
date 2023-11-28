import classes from "./TechStack.module.css";
/////
import { IconsSpriteTechContainer } from "../../common/Icon/IconsSpriteContainer";
import { Icon, IconTechNames, IconSize } from "../../common/Icon/Icon";

const TechStack = () => {
  const techIconNames = Object.keys(IconTechNames) as Array<
    keyof typeof IconTechNames
  >;

  return (
    <>
      <IconsSpriteTechContainer />
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h2 className={classes.heading}>Стэк технологий</h2>

          <ul className={classes.list}>
            {techIconNames.map((name) => {
              return (
                <li key={name} className={classes.listItem}>
                  <Icon
                    name={IconTechNames[name]}
                    className={classes.flag}
                    size={IconSize.custom}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TechStack;
