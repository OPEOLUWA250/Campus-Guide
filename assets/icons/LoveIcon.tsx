import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const LoveIcon = ({
  size = 18,
  color = "#FF0000",
  ...props
}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill={color}
        stroke={color}
        d="M5.625 2.625C3.347 2.625 1.5 4.472 1.5 6.75c0 4.125 4.875 7.875 7.5 8.747 2.625-.872 7.5-4.622 7.5-8.747 0-2.278-1.847-4.125-4.125-4.125-1.395 0-2.629.693-3.375 1.753-.746-.957-1.98-1.753-3.375-1.753Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
