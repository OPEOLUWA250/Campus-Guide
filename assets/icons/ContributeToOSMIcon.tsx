import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const ContributeToOSMIcon = ({
  size = 32,
  color = "#0F001B",
  ...props
}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke={color}
        d="M16 29.333c-6.285 0-9.428 0-11.381-1.953C2.667 25.43 2.667 22.285 2.667 16s0-9.428 1.952-11.381C6.573 2.667 9.715 2.667 16 2.667s9.428 0 11.38 1.952C29.333 6.573 29.333 9.715 29.333 16s0 9.428-1.953 11.38c-1.95 1.953-5.095 1.953-11.38 1.953Z"
        strokeWidth="2"
      />
      <path
        stroke={color}
        d="M7.333 11.676c0-2.399 2.09-4.343 4.667-4.343s4.667 1.944 4.667 4.343c0 2.38-1.49 5.157-3.814 6.15a2.18 2.18 0 0 1-1.706 0c-2.324-.993-3.814-3.77-3.814-6.15Z"
        strokeWidth="2"
      />
      <path
        stroke={color}
        d="m18.667 18.667 8.666 8.666m-8.666-8.666-10.14 10.14m10.14-10.14L28.809 8.525"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        fill={color}
        d="M13.333 12a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0"
      />
    </svg>
  );
};

export default ContributeToOSMIcon;
