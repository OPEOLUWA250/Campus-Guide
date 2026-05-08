import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const LocationDotIcon = ({
  size = 8,
  color = "#992BF4",
  ...props
}: IProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="3.91429" cy="3.91429" r="3.91429" fill={color} />
  </svg>
);
