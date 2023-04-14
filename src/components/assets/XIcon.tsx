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
    <path d="M18 6L6 18"/>
    <path d="M6 6l12 12"/>
  </svg>
);
