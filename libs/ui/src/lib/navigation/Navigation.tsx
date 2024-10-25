import { Link, useLocation } from '@remix-run/react';
import { HTMLAttributes } from 'react';

import { classnames } from '../../utils';

export type NavigationSection = {
  title: string;
  links: {
    title: string;
    href: string;
    icon?: React.FC<Partial<HTMLAttributes<HTMLDivElement>>>;
  }[];
};

export type NavigationProps = {
  className?: string;
  sections: NavigationSection[];
};

export const Navigation: React.FC<NavigationProps> = ({
  className,
  sections,
}) => {
  const location = useLocation();

  return (
    <nav className={classnames('text-base lg:text-sm', className)}>
      <ul className="space-y-9">
        {sections.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    to={link.href}
                    className={classnames(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === location.pathname
                        ? 'font-semibold text-sky-500 before:bg-sky-500'
                        : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
