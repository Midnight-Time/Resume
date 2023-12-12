export enum IconSize {
  xs = "16px",
  s = "18px",
  m = "20px",
  l = "22px",
  xl = "24px",
  custom = "100%",
  "2x1" = "26px",
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
  name?: IconTechNames;
  color?: string;
  size?: IconSize;
  className?: string;
};

export function Icon({
  name = IconTechNames.react,
  color = "currentColor",
  size = IconSize.m,
  className,
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
