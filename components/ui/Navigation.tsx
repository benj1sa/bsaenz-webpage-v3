interface NavigationLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavigationLink[];
  siteName?: string;
}

export function Navigation({ links, siteName = "Benjamin Saenz" }: NavigationProps) {
  return (
    <section className="flex justify-between items-center my-[50px]">
      <div className="font-medium text-lg">
        <a href="/">{siteName}</a>
      </div>
      <div className="flex gap-9">
        {links.map((link) => (
          <a 
            key={link.href} 
            href={link.href}
            className="text-lg relative opacity-80 hover:opacity-100 transition-opacity duration-300 after:content-[''] after:block after:h-px after:bg-black after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
