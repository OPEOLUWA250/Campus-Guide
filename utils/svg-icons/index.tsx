import React from "react";

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

/**
 * CampusGuide Logo Icon - Grid/Window based design
 */
export const LogoIcon: React.FC<IconProps> = ({
  size = 48,
  className = "",
  color = "#8400F2",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="2"
      y="2"
      width="12"
      height="12"
      rx="2"
      fill={color}
      opacity="0.5"
    />
    <rect x="18" y="2" width="12" height="12" rx="2" fill={color} />
    <rect
      x="34"
      y="2"
      width="12"
      height="12"
      rx="2"
      fill={color}
      opacity="0.3"
    />

    <rect
      x="2"
      y="18"
      width="12"
      height="12"
      rx="2"
      fill={color}
      opacity="0.3"
    />
    <rect x="18" y="18" width="12" height="12" rx="2" fill={color} />
    <rect
      x="34"
      y="18"
      width="12"
      height="12"
      rx="2"
      fill={color}
      opacity="0.5"
    />

    <rect x="2" y="34" width="12" height="12" rx="2" fill={color} />
    <rect
      x="18"
      y="34"
      width="12"
      height="12"
      rx="2"
      fill={color}
      opacity="0.5"
    />
    <rect
      x="34"
      y="34"
      width="12"
      height="12"
      rx="2"
      fill={color}
      opacity="0.2"
    />
  </svg>
);

/**
 * Simplify Navigation Icon - Boxes with dotted line
 */
export const SimplifyNavigationIcon: React.FC<IconProps> = ({
  size = 64,
  className = "",
  color = "#8400F2",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="8"
      y="8"
      width="16"
      height="16"
      rx="2"
      stroke={color}
      strokeWidth="2"
    />
    <rect
      x="40"
      y="8"
      width="16"
      height="16"
      rx="2"
      stroke={color}
      strokeWidth="2"
    />

    <line
      x1="24"
      y1="16"
      x2="40"
      y2="16"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="4"
    />

    <rect
      x="8"
      y="40"
      width="16"
      height="16"
      rx="2"
      stroke={color}
      strokeWidth="2"
    />
    <rect
      x="40"
      y="40"
      width="16"
      height="16"
      rx="2"
      stroke={color}
      strokeWidth="2"
    />

    <line
      x1="16"
      y1="24"
      x2="16"
      y2="40"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="4"
    />
  </svg>
);

/**
 * Contribute to OSM Icon - Upload arrow
 */
export const ContributeIcon: React.FC<IconProps> = ({
  size = 64,
  className = "",
  color = "#8400F2",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="2" />
    <path
      d="M32 16V40M32 16L22 26M32 16L42 26"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M24 45H40" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Support YouthMappers Icon - Shield with heart
 */
export const SupportIcon: React.FC<IconProps> = ({
  size = 64,
  className = "",
  color = "#8400F2",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 8L48 16V32C48 44 32 52 32 52C32 52 16 44 16 32V16L32 8Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M32 35C30.5 33 28 31 28 28C28 26 29 25 30 25C31 25 32 26 32 27C32 26 33 25 34 25C35 25 36 26 36 28C36 31 33.5 33 32 35Z"
      fill={color}
    />
  </svg>
);

/**
 * Map Location Icon
 */
export const MapLocationIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "#8400F2",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C7.6 2 4 5.6 4 10C4 15 12 22 12 22S20 15 20 10C20 5.6 16.4 2 12 2ZM12 13C10.9 13 10 12.1 10 11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11C14 12.1 13.1 13 12 13Z"
      fill={color}
    />
  </svg>
);

/**
 * Search Icon
 */
export const SearchIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "#666666",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" />
    <path
      d="M16 16L20 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Boundary Upload Icon - Cloud with grid
 */
export const BoundaryUploadIcon: React.FC<IconProps> = ({
  size = 64,
  className = "",
  color = "#8400F2",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M44 32C46 24 48 16 40 14C38 6 30 8 28 10C26 8 18 6 18 14C10 16 12 24 14 32"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <circle cx="20" cy="24" r="3" fill={color} />
    <circle cx="32" cy="20" r="3" fill={color} />
    <circle cx="44" cy="24" r="3" fill={color} />
    <line x1="20" y1="27" x2="20" y2="40" stroke={color} strokeWidth="1.5" />
    <line x1="32" y1="23" x2="32" y2="40" stroke={color} strokeWidth="1.5" />
    <line x1="44" y1="27" x2="44" y2="40" stroke={color} strokeWidth="1.5" />
  </svg>
);

/**
 * Verification Icon - Grid/H3 cells
 */
export const VerificationIcon: React.FC<IconProps> = ({
  size = 64,
  className = "",
  color = "#8400F2",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="20" cy="20" r="12" stroke={color} strokeWidth="2" />
    <circle cx="48" cy="32" r="8" stroke={color} strokeWidth="2" />

    <path
      d="M20 32L32 40L48 24"
      stroke={color}
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Arrow Right Icon
 */
export const ArrowRightIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Play/Video Icon
 */
export const PlayIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "#8400F2",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M5 3L19 12L5 21V3Z" fill={color} />
  </svg>
);

/**
 * Chevron Down Icon
 */
export const ChevronDownIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Location Marker Icon - Pin with dot
 */
export const LocationMarkerIcon: React.FC<IconProps> = ({
  size = 22,
  className = "",
  color = "#992BF4",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.5519 23.7567C15.6092 21.066 21.0485 15.5688 21.0485 10.5242C21.0485 7.73303 19.9397 5.05615 17.966 3.08248C15.9923 1.1088 13.3154 0 10.5242 0C7.73303 0 5.05615 1.1088 3.08248 3.08248C1.1088 5.05615 4.15921e-08 7.73303 0 10.5242C0 15.5688 5.43752 21.066 8.49656 23.7567C9.05455 24.2547 9.77631 24.53 10.5242 24.53C11.2722 24.53 11.9939 24.2547 12.5519 23.7567ZM7.01616 10.5242C7.01616 9.59383 7.38576 8.70154 8.04365 8.04365C8.70154 7.38576 9.59383 7.01616 10.5242 7.01616C11.4546 7.01616 12.3469 7.38576 13.0048 8.04365C13.6627 8.70154 14.0323 9.59383 14.0323 10.5242C14.0323 11.4546 13.6627 12.3469 13.0048 13.0048C12.3469 13.6627 11.4546 14.0323 10.5242 14.0323C9.59383 14.0323 8.70154 13.6627 8.04365 13.0048C7.38576 12.3469 7.01616 11.4546 7.01616 10.5242Z"
      fill={color}
    />
  </svg>
);

/**
 * Web Map Icon - Wavy lines visualization
 */
export const WebMapIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "#3F2B50",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 6.54107V20.7961M15 3.18107V17.4361M3 8.59307C3 7.06607 3 6.30307 3.393 5.85807C3.532 5.69907 3.701 5.57307 3.89 5.48607C5.306 4.83307 7.162 6.55207 8.66 6.49907C8.857 6.49207 9.054 6.46407 9.247 6.41707C11.431 5.88207 12.799 3.33707 15.045 3.02707C16.332 2.84707 17.745 3.62507 18.949 4.04107C19.939 4.38307 20.434 4.55407 20.717 4.96107C21 5.36807 21 5.91007 21 6.99007V15.4121C21 16.9381 21 17.7021 20.607 18.1471C20.4691 18.3042 20.2998 18.4306 20.11 18.5181C18.694 19.1711 16.838 17.4531 15.34 17.5061C15.1421 17.513 14.9454 17.5401 14.753 17.5871C12.569 18.1221 11.201 20.6671 8.955 20.9781C7.674 21.1561 4.108 20.2281 3.283 19.0431C3 18.6361 3 18.0961 3 17.0141V8.59307Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Contribute Icon - Arrow pointing up-right
 */
export const ContributeIconArrow: React.FC<IconProps> = ({
  size = 13,
  className = "",
  color = "white",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0.75 11.75L11.75 0.75M11.75 0.75H2.75M11.75 0.75V9.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Go to Live Map Icon - Wavy lines visualization
 */
export const GoLiveMapIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "white",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 6.54107V20.7961M15 3.18107V17.4361M3 8.59307C3 7.06607 3 6.30307 3.393 5.85807C3.532 5.69907 3.701 5.57307 3.89 5.48607C5.306 4.83307 7.162 6.55207 8.66 6.49907C8.857 6.49207 9.054 6.46407 9.247 6.41707C11.431 5.88207 12.799 3.33707 15.045 3.02707C16.332 2.84707 17.745 3.62507 18.949 4.04107C19.939 4.38307 20.434 4.55407 20.717 4.96107C21 5.36807 21 5.91007 21 6.99007V15.4121C21 16.9381 21 17.7021 20.607 18.1471C20.4691 18.3042 20.2998 18.4306 20.11 18.5181C18.694 19.1711 16.838 17.4531 15.34 17.5061C15.1421 17.513 14.9454 17.5401 14.753 17.5871C12.569 18.1221 11.201 20.6671 8.955 20.9781C7.674 21.1561 4.108 20.2281 3.283 19.0431C3 18.6361 3 18.0961 3 17.0141V8.59307Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Quick Search Icon - Search icon in purple rounded background
 */
export const QuickSearchIcon: React.FC<IconProps> = ({
  size = 48,
  className = "",
  color = "#992BF4",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
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

/**
 * Location Dot Icon - Small purple circle for current location
 */
export const LocationDotIcon: React.FC<IconProps> = ({
  size = 8,
  className = "",
  color = "#992BF4",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="3.91429" cy="3.91429" r="3.91429" fill={color} />
  </svg>
);

/**
 * Location Pin Icon - Pin marker for destination
 */
export const LocationPinIcon: React.FC<IconProps> = ({
  size = 9,
  className = "",
  color = "#992BF4",
}) => (
  <svg
    width={size}
    height={size + 1}
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4.11 0C5.20004 0 6.24543 0.433016 7.01621 1.20379C7.78698 1.97457 8.22 3.01996 8.22 4.11C8.22 5.51379 7.45463 6.66277 6.64815 7.48705C6.24515 7.89435 5.8055 8.26367 5.33478 8.59036L5.14024 8.72279L5.04891 8.78352L4.87674 8.89312L4.7233 8.98674L4.53333 9.09725C4.40432 9.17068 4.25844 9.20929 4.11 9.20929C3.96156 9.20929 3.81567 9.17068 3.68667 9.09725L3.4967 8.98674L3.25923 8.84061L3.17155 8.78352L2.98432 8.65885C2.47649 8.31513 2.00343 7.92267 1.57185 7.48705C0.765373 6.66231 0 5.51379 0 4.11C0 3.01996 0.433016 1.97457 1.20379 1.20379C1.97457 0.433016 3.01996 0 4.11 0ZM4.11 2.74C3.93009 2.74 3.75194 2.77544 3.58572 2.84428C3.41951 2.91313 3.26848 3.01405 3.14126 3.14126C3.01405 3.26848 2.91313 3.41951 2.84428 3.58572C2.77544 3.75194 2.74 3.93009 2.74 4.11C2.74 4.28991 2.77544 4.46806 2.84428 4.63428C2.91313 4.80049 3.01405 4.95152 3.14126 5.07874C3.26848 5.20595 3.41951 5.30686 3.58572 5.37571C3.75194 5.44456 3.93009 5.48 4.11 5.48C4.47335 5.48 4.82181 5.33566 5.07874 5.07874C5.33566 4.82181 5.48 4.47335 5.48 4.11C5.48 3.74665 5.33566 3.39819 5.07874 3.14126C4.82181 2.88434 4.47335 2.74 4.11 2.74Z"
      fill={color}
    />
  </svg>
);

/**
 * University Location Icon - Pin marker for universities
 */
export const UniversityLocationIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "#CD96FA",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.0005 1.99951C14.3874 1.99951 16.6766 2.94772 18.3644 4.63555C20.0523 6.32338 21.0005 8.61256 21.0005 10.9995C21.0005 14.0735 19.3245 16.5895 17.5585 18.3945C16.676 19.2864 15.7133 20.0952 14.6825 20.8105L14.2565 21.1005L14.0565 21.2335L13.6795 21.4735L13.3435 21.6785L12.9275 21.9205C12.645 22.0813 12.3255 22.1658 12.0005 22.1658C11.6754 22.1658 11.356 22.0813 11.0735 21.9205L10.6575 21.6785L10.1375 21.3585L9.94549 21.2335L9.53549 20.9605C8.42347 20.2078 7.38756 19.3484 6.44249 18.3945C4.67649 16.5885 3.00049 14.0735 3.00049 10.9995C3.00049 8.61256 3.9487 6.32338 5.63653 4.63555C7.32435 2.94772 9.61354 1.99951 12.0005 1.99951ZM12.0005 7.99951C11.6065 7.99951 11.2164 8.07711 10.8524 8.22787C10.4885 8.37864 10.1577 8.59962 9.87917 8.87819C9.60059 9.15677 9.37961 9.48748 9.22885 9.85146C9.07809 10.2154 9.00049 10.6055 9.00049 10.9995C9.00049 11.3935 9.07809 11.7836 9.22885 12.1476C9.37961 12.5115 9.60059 12.8423 9.87917 13.1208C10.1577 13.3994 10.4885 13.6204 10.8524 13.7712C11.2164 13.9219 11.6065 13.9995 12.0005 13.9995C12.7961 13.9995 13.5592 13.6834 14.1218 13.1208C14.6844 12.5582 15.0005 11.7952 15.0005 10.9995C15.0005 10.2039 14.6844 9.4408 14.1218 8.87819C13.5592 8.31558 12.7961 7.99951 12.0005 7.99951Z"
      fill={color}
    />
  </svg>
);

export const LightBulbIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#0F001B",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.5 1.5C6.35625 1.5 3 4.85625 3 9C3 11.8781 4.54688 14.3906 6.84375 15.7969V19.5C6.84375 20.3344 7.51406 21 8.34844 21H12.6516C13.4859 21 14.1562 20.3344 14.1562 19.5V15.7969C16.4531 14.3906 18 11.8781 18 9C18 4.85625 14.6438 1.5 10.5 1.5ZM10.5 3.15625C13.7438 3.15625 16.3438 5.75625 16.3438 9C16.3438 11.4844 15.0375 13.6594 13.125 14.7937V15H7.875V14.7937C5.9625 13.6594 4.65625 11.4844 4.65625 9C4.65625 5.75625 7.25625 3.15625 10.5 3.15625ZM7.875 18.1875H13.125V19.5H7.875V18.1875ZM9 19.5H12C12.3281 19.5 12.6 19.2281 12.6 18.9V18.1875H9.4V18.9C9.4 19.2281 9.67188 19.5 10 19.5H9Z"
      fill={color}
    />
  </svg>
);

export const MusicWaveIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#0F001B",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 8.72142V27.7281M20 4.24142V23.2481M4 11.4574C4 9.42142 4 8.40408 4.524 7.81075C4.70933 7.59875 4.93467 7.43075 5.18667 7.31475C7.07467 6.44408 9.54933 8.73608 11.5467 8.66542C11.8093 8.65608 12.072 8.61875 12.3293 8.55608C15.2413 7.84275 17.0653 4.44942 20.06 4.03608C21.776 3.79608 23.66 4.83342 25.2653 5.38808C26.5853 5.84408 27.2453 6.07208 27.6227 6.61475C28 7.15742 28 7.88008 28 9.32008V20.5494C28 22.5841 28 23.6028 27.476 24.1961C27.2922 24.4055 27.0664 24.5741 26.8133 24.6908C24.9253 25.5614 22.4507 23.2708 20.4533 23.3414C20.1894 23.3506 19.9272 23.3868 19.6707 23.4494C16.7587 24.1628 14.9347 27.5561 11.94 27.9708C10.232 28.2081 5.47733 26.9708 4.37733 25.3908C4 24.8481 4 24.1281 4 22.6854V11.4574Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MapSearchIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#0F001B",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M15.9998 29.3333C9.7145 29.3333 6.57184 29.3333 4.6185 27.38C2.6665 25.4293 2.6665 22.2853 2.6665 16C2.6665 9.71466 2.6665 6.57199 4.6185 4.61866C6.57317 2.66666 9.7145 2.66666 15.9998 2.66666C22.2852 2.66666 25.4278 2.66666 27.3798 4.61866C29.3332 6.57332 29.3332 9.71466 29.3332 16C29.3332 22.2853 29.3332 25.428 27.3798 27.38C25.4292 29.3333 22.2852 29.3333 15.9998 29.3333Z" stroke={color} strokeWidth="2"/>
    <path d="M7.33301 11.676C7.33301 9.27731 9.42234 7.33331 11.9997 7.33331C14.577 7.33331 16.6663 9.27731 16.6663 11.676C16.6663 14.056 15.177 16.8333 12.853 17.8266C12.5831 17.9412 12.2929 18.0003 11.9997 18.0003C11.7065 18.0003 11.4162 17.9412 11.1463 17.8266C8.82234 16.8333 7.33301 14.056 7.33301 11.676Z" stroke={color} strokeWidth="2"/>
    <path d="M18.6664 18.6667L27.333 27.3333M18.6664 18.6667L8.52637 28.8067M18.6664 18.6667L28.809 8.52533" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M13.3332 12C13.3332 12.3536 13.1927 12.6928 12.9426 12.9428C12.6926 13.1928 12.3535 13.3333 11.9998 13.3333C11.6462 13.3333 11.3071 13.1928 11.057 12.9428C10.807 12.6928 10.6665 12.3536 10.6665 12C10.6665 11.6464 10.807 11.3072 11.057 11.0572C11.3071 10.8071 11.6462 10.6667 11.9998 10.6667C12.3535 10.6667 12.6926 10.8071 12.9426 11.0572C13.1927 11.3072 13.3332 11.6464 13.3332 12Z" fill={color}/>
  </svg>
);

export const LocationHeartIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#0F001B",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16.0005 1.56705C22.5173 1.56723 27.7671 6.93868 27.7671 13.5241C27.7671 16.6951 26.8636 20.098 25.2671 23.0368C23.6733 25.9712 21.3419 28.5287 18.4175 29.8961C17.661 30.2503 16.8357 30.4332 16.0005 30.4333C15.1653 30.4333 14.3399 30.2503 13.5835 29.8961C10.6591 28.5287 8.32772 25.9726 6.73389 23.0368C5.13724 20.0979 4.2339 16.6952 4.23389 13.5241C4.23389 6.93857 9.48355 1.56705 16.0005 1.56705ZM16.0005 3.76627C10.7347 3.76627 6.43311 8.11635 6.43311 13.5241C6.43312 16.3022 7.23256 19.3459 8.6665 21.987C10.102 24.631 12.128 26.7877 14.5142 27.903C14.9789 28.1207 15.4863 28.2331 15.9995 28.2331C16.5127 28.2331 17.0201 28.1207 17.4849 27.903C19.8723 26.7877 21.898 24.631 23.3335 21.987C24.7674 19.3472 25.5669 16.3022 25.5669 13.5241C25.5669 8.11646 21.2662 3.76644 16.0005 3.76627ZM15.9995 8.87662C16.9604 8.24749 18.0521 8.05064 19.0503 8.41275C20.3518 8.88492 21.1001 10.1644 21.1001 11.6764C21.0999 12.7505 20.5048 13.7004 19.9204 14.3991C19.3109 15.1299 18.558 15.7692 17.9419 16.2379L17.8462 16.3112C17.3829 16.6657 16.8208 17.1001 16.0005 17.1003C15.18 17.1003 14.6172 16.6641 14.1528 16.3112L14.1519 16.3102C14.1209 16.2858 14.0891 16.2612 14.0581 16.237V16.236C13.441 15.7673 12.6877 15.13 12.0776 14.4001C11.4946 13.7015 10.9001 12.7506 10.8999 11.6764C10.8999 10.1645 11.6484 8.885 12.9497 8.41275C13.9476 8.05076 15.0388 8.24797 15.9995 8.87662ZM15.2261 11.07C14.541 10.3901 13.9716 10.38 13.7007 10.4782L13.7017 10.4792C13.4505 10.5715 13.1001 10.8812 13.1001 11.6764C13.1003 11.9634 13.2813 12.41 13.7671 12.9909C14.227 13.5414 14.8345 14.0656 15.3901 14.486C15.6185 14.6598 15.7513 14.7599 15.8481 14.8229L15.9351 14.8747L15.937 14.8756C15.9674 14.8927 15.9814 14.8975 15.9868 14.8991L15.9888 14.9001H16.0112C16.0107 14.9001 16.0106 14.8995 16.0122 14.8991C16.0177 14.8975 16.032 14.8922 16.064 14.8747H16.0649C16.1708 14.818 16.306 14.7177 16.6118 14.486C17.165 14.0655 17.7731 13.5413 18.2329 12.9909C18.7176 12.4098 18.8997 11.9633 18.8999 11.6764C18.8999 10.8812 18.55 10.5722 18.2993 10.4811V10.4801C18.0287 10.3808 17.4602 10.3899 16.7749 11.07C16.569 11.2741 16.2904 11.3883 16.0005 11.3883C15.7106 11.3883 15.432 11.274 15.2261 11.07Z" fill={color} stroke={color} strokeWidth="0.2"/>
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#3F2B50",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 10L8 6L4 10"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#796B85",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 0C4.475 0 1.64501e-06 4.475 1.64501e-06 10C-0.00120241 12.0992 0.6586 14.1454 1.88581 15.8484C3.11302 17.5515 4.84533 18.8249 6.837 19.488C7.337 19.575 7.525 19.275 7.525 19.012C7.525 18.775 7.512 17.988 7.512 17.15C5 17.613 4.35 16.538 4.15 15.975C4.037 15.687 3.55 14.8 3.125 14.562C2.775 14.375 2.275 13.912 3.112 13.9C3.9 13.887 4.462 14.625 4.65 14.925C5.55 16.437 6.987 16.012 7.562 15.75C7.65 15.1 7.912 14.663 8.2 14.413C5.975 14.163 3.65 13.3 3.65 9.475C3.65 8.387 4.037 7.488 4.675 6.788C4.575 6.538 4.225 5.513 4.775 4.138C4.775 4.138 5.612 3.875 7.525 5.162C8.33911 4.9364 9.18021 4.82302 10.025 4.825C10.875 4.825 11.725 4.937 12.525 5.162C14.438 3.862 15.275 4.138 15.275 4.138C15.825 5.513 15.475 6.538 15.375 6.788C16.012 7.488 16.4 8.375 16.4 9.475C16.4 13.313 14.063 14.163 11.838 14.413C12.2 14.725 12.513 15.325 12.513 16.263C12.513 17.6 12.5 18.675 12.5 19.013C12.5 19.275 12.688 19.587 13.188 19.487C15.1728 18.8166 16.8975 17.5408 18.1193 15.8389C19.3411 14.1371 19.9985 12.095 19.999 10C19.999 4.475 15.524 0 9.999 0"
      fill={color}
    />
  </svg>
);

export const LoveIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#FF0000",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5.625 2.625C3.34683 2.625 1.5 4.47184 1.5 6.75C1.5 10.875 6.375 14.625 9 15.4973C11.625 14.625 16.5 10.875 16.5 6.75C16.5 4.47184 14.6532 2.625 12.375 2.625C10.9799 2.625 9.74651 3.31759 9 4.37768C8.25349 3.31759 7.02011 2.625 5.625 2.625Z"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
