const links = [
    { href: '/about', label: 'About' },
    { href: '/writing', label: 'Writing' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
]
  
export function NavLinks({ onClick }: { onClick: () => void }) {
    return (
        <>
        {links.map((link, index) => (
            <div key={link.href}>
            {index > 0 && (
                <div className="border-t border-gray-200 my-4" />
            )}
            <a
                href={link.href}
                onClick={onClick}
                className="text-2xl hover:opacity-70 italic block nav-link-font"
            >
                {link.label}
            </a>
            </div>
        ))}
        </>
    )
}
  