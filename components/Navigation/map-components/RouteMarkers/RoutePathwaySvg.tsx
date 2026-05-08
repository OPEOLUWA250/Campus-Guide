/**
 * RoutePathwaySvg - Curved route pathway connector component
 * Represents the path between start and end points on a map
 */

export interface RoutePathwaySvgProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  strokeWidth?: number | string;
  className?: string;
}

export const RoutePathwaySvg = ({ 
  width = 259, 
  height = 261, 
  strokeColor = "#992BF4",
  strokeWidth = "2.33872",
  className = "" 
}: RoutePathwaySvgProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 259 261" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M204.204 259.314L221.027 239.59L242.769 214.988L256.689 193.813L259.314 189.295L252.871 170.195L250.001 163.635L233.867 132.089L209.509 86.4869L169.932 48.3379L126.386 19.2869L79.7358 1.94055L35.9654 1.63223" 
      stroke={strokeColor} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeDasharray="4.68 4.68"
    />
  </svg>
);
