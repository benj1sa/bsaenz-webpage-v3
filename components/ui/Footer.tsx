interface FooterProps {
  name?: string;
}

export function Footer({ name = "Benjamin Saenz" }: FooterProps) {
  return (
    <footer className="my-[50px]">
      <div className="text-sm text-gray-400">{name} &copy; {new Date().getFullYear()}</div>
    </footer>
  );
}
