export function NavToggle({ open, onClick }: { open: boolean, onClick: () => void }) {
    return (
      <button
        aria-label="Toggle navigation"
        onClick={onClick}
        className="p-2"
      >
        {open ? '✕' : '☰'}
      </button>
    )
  }
  