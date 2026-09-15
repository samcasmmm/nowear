import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavLinksProps = { href: string; label: string; className?: string };
const NavLinks: React.FC<NavLinksProps> = ({ href, label, className }) => (
  <Link
    href={href}
    className={cn(
      'text-xs uppercase tracking-wider font-bold text-neutral-700 hover:text-neutral-950 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-neutral-950',
      className
    )}
  >
    {label}
  </Link>
);

export default NavLinks;
