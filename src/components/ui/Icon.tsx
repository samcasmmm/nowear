import { cn } from '@/lib/utils';
import { LucideProps, icons } from 'lucide-react';

export interface IconProps extends LucideProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  color = 'currentColor',
  size = 24,
  className,
  ...props
}) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.error(`Icon '${name}' not found`);
    return null;
  }

  return <LucideIcon color={color} size={size} className={cn('', className)} {...props} />;
};

export default Icon;
export { Icon };
