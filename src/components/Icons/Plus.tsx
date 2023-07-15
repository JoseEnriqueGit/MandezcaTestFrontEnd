import { IconProps } from "./Types/IconProps";

const Plus = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 3,
  ...rest
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className="icon icon-tabler icon-tabler-plus"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default Plus;
