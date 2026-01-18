import { NavLinks } from "./NavLinks"
import { NavToggle } from "@/components/navigation/NavToggle"

export function MobileMenu({ open, onClose }: { open: boolean, onClose: () => void }) {
    if (!open) return null
  
    return (
      <div className="fixed inset-0 z-50 bg-white">
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-bold">James Opaque</span>
          <NavToggle open onClick={onClose} />
        </div>
  
        <nav className="flex flex-col px-6 pt-12 pb-8 text-lg">
          <NavLinks onClick={onClose} />
        </nav>
      </div>
    )
  }
  