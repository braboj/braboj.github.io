import { useState } from 'react';

interface Link {
  label: string;
  href: string;
}

interface Props {
  links: Link[];
}

export default function HamburgerMenu({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-wrapper">
      <button
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      {open && (
        <ul className="mobile-menu">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}