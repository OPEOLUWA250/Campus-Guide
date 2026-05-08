import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const QuickSearchIcon = ({
  size = 48,
  color = "#992BF4",
  ...props
}: IProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="48" height="48" rx="24" fill={color} />
    <path
      d="M28.92 28.92L32 32M31.111 23.581C31.111 27.768 27.728 31.162 23.556 31.162C19.383 31.162 16 27.768 16 23.582C16 19.393 19.383 16 23.555 16C27.728 16 31.111 19.394 31.111 23.581Z"
      stroke="#F3E6FE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
