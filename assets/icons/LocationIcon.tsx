import { type SVGProps } from "react";

export const LocationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="CurrentColor"
        d="M12 2a9 9 0 0 1 9 9c0 3.073-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29-.2.133-.377.24-.336.204-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242-.52-.32-.192-.125-.41-.273a20.6 20.6 0 0 1-3.093-2.565C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      />
    </svg>
  );
};

export default LocationIcon;