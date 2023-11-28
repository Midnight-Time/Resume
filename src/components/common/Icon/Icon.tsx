export enum IconSize {
  xs = "16px",
  s = "18px",
  m = "20px",
  l = "22px",
  xl = "24px",
  custom = "100%",
  "2x1" = "26px",
}

export enum IconNames {
  ru = "ru-flag",
  eng = "eng-flag",
  germ = "germany-flag",
}

export enum IconTechNames {
  css = "css-3",
  figma = "figma",
  firebase = "firebase",
  git = "git-icon",
  html = "html-5",
  js = "javascript",
  jest = "jest",
  react = "react",
  reactRt = "react-router",
  redux = "redux",
  sass = "sass",
  ts = "typescript",
  webpack = "webpack",
}

export type IconProps = {
  name?: IconNames | IconTechNames;
  color?: string;
  size?: IconSize;
  className?: string;
  ref?: SVGSVGElement;
};

export function Icon({
  name = IconNames.ru,
  color = "currentColor",
  size = IconSize.m,
  className,
  ref,
}: IconProps) {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      fill={color}
      className={className}
    >
      <use href={`#${name}`} />
    </svg>
  );
}
