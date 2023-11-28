import { ReactComponent as SpriteSvg } from "../../../assets/sprite-flags.svg";
import { ReactComponent as SpriteTchSvg } from "../../../assets/sprite-tech.svg";

export function IconsSpriteContainer() {
  return (
    <div style={{ display: "none" }}>
      <SpriteSvg />
    </div>
  );
}

export function IconsSpriteTechContainer() {
  return (
    <div style={{ display: "none" }}>
      <SpriteTchSvg />
    </div>
  );
}
