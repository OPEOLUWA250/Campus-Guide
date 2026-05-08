import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

export const Hamburger = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#3F2B50" d="M4.5 6.5h15Zm0 5.5h15Zm0 5.5h15Z" />
      <path
        stroke="#3F2B50"
        d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
