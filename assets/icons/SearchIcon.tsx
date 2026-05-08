import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const SearchIcon = ({
  size = 18,
  color = "#F3E6FE",
  ...props
}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 17"
      {...props}
    >
      <path
        stroke={color}
        d="m13.67 13.67 3.08 3.08m-.889-8.419c0 4.187-3.383 7.581-7.555 7.581-4.173 0-7.556-3.394-7.556-7.58C.75 4.143 4.133.75 8.305.75c4.173 0 7.556 3.394 7.556 7.581"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SearchIcon;
