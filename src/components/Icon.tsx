import { LucideProps, icons } from 'lucide-react';

interface IconProps extends LucideProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, color = 'black', size = 24 }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.error(`Icon '${name}' not found`);
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
