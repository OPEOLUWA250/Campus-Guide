import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const MapIcon = ({ size = 24, color = "#3F2B50", ...props }: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={color}
        d="M9 6.541v14.255m6-17.615v14.255M3 8.593c0-1.527 0-2.29.393-2.735.139-.159.308-.285.497-.372 1.416-.653 3.272 1.066 4.77 1.013q.296-.011.587-.082c2.184-.535 3.552-3.08 5.798-3.39 1.287-.18 2.7.598 3.904 1.014.99.342 1.485.513 1.768.92S21 5.91 21 6.99v8.422c0 1.526 0 2.29-.393 2.735a1.5 1.5 0 0 1-.497.371c-1.416.653-3.272-1.065-4.77-1.012a3 3 0 0 0-.587.081c-2.184.535-3.552 3.08-5.798 3.391-1.281.178-4.847-.75-5.672-1.935C3 18.636 3 18.096 3 17.014z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default MapIcon;
