import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const UploadBoundaryIcon = ({
  size = 17,
  color = "#18002C",
  ...props
}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 17 14"
      {...props}
    >
      <path
        stroke={color}
        d="M.75 6.75h15m0 0-5.625-6m5.625 6-5.625 6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default UploadBoundaryIcon;
