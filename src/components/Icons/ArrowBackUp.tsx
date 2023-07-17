import { IconProps } from "./Types/IconProps";

const ArrowBackUp = ({
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
    className="icon icon-tabler icon-tabler-arrow-back-up"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 14-4-4 4-4" />
    <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
  </svg>
);

export default ArrowBackUp;