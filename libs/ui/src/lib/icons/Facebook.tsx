import React from 'react';

type IconProps = {
  className?: string;
  color?: string;
};

export const FacebookIcon: React.FC<IconProps> = ({
  className,
  color = 'currentColor'
}) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
};

export default FacebookIcon;
