import React from 'react';

export interface SliderButtonProps {
  id: number;
  text: string;
  link: string;
  type?: string;
}

export interface SliderButtonsProps {
  buttons: SliderButtonProps[];
}

export const SliderButtons: React.FC<SliderButtonsProps> = ({ buttons }) => {
  return (
    <>
      {buttons.map(({ id, link, text }) => (
        <a target="_blank" rel="noreferrer" key={id} href={link}>
          <span>{text}</span>
        </a>
      ))}
    </>
  );
};

export default SliderButtons;
