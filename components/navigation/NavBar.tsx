import { NavLinks } from "./NavLinks"
import { NavToggle } from "@/components/navigation/NavToggle"

export function NavBar({ open, onToggle }: { open: boolean, onToggle: () => void }) {
    return (
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <span className="font-medium">James Opaque</span>
  
          {/* Desktop links */}
          <nav className="hidden md:flex gap-6">
            <NavLinks onClick={() => {}} />
          </nav>
  
          {/* Mobile toggle */}
          <div className="md:hidden">
            <NavToggle open={open} onClick={onToggle} />
          </div>
        </div>
      </header>
    )
}  