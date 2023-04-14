import { IconProps } from ".";

export default ({
  size = 24,
  strokeWidth = 1.5,
  strokeColor = 'currentColor'
}: IconProps) => (
  <svg
    height={size}
    width={size}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    shapeRendering="geometricPrecision"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M3 12h18"/>
    <path d="M3 6h18"/>
    <path d="M3 18h18"/>
  </svg>
);
