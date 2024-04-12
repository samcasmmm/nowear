import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavLinksProps = { href: string; label: string; className?: string };
const NavLinks: React.FC<NavLinksProps> = ({ href, label, className }) => (
  <Link
    href={href}
    className={cn(
      'hover:opacity-100 opacity-60 transition-opacity duration-300',
      className
    )}
  >
    {label}
  </Link>
);

export default NavLinks;
