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

export type IconProps = {
  name?: IconNames;
  color?: string;
  size?: IconSize;
  className?: string;
};

export function Icon({
  name = IconNames.ru,
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
