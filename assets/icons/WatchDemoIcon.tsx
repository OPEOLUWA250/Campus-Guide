import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const WatchDemoIcon = ({
  size = 16,
  color = "#18002C",
  ...props
}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 17"
      {...props}
    >
      <path
        stroke={color}
        d="M14.64 9.096c-.353 1.343-2.023 2.292-5.364 4.19-3.23 1.835-4.845 2.752-6.146 2.384a3.25 3.25 0 0 1-1.424-.841C.75 13.864.75 11.993.75 8.249c0-3.742 0-5.613.956-6.578A3.25 3.25 0 0 1 3.13.83c1.301-.37 2.916.548 6.146 2.383 3.34 1.898 5.011 2.847 5.365 4.19a3.3 3.3 0 0 1 0 1.692"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default WatchDemoIcon;
