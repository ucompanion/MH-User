import React from 'react';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const className = `icn ${name}`;
  return (
    <i className={className} aria-hidden {...rest}></i>
  );
};

export default Icon;