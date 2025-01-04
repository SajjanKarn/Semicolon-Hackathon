import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  {
    label: "Home",
    url: "/",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-16 py-8">
      <div className="flex items-center justify-center gap-3">
        <h1 className="font-dm-serif flex items-center justify-center gap-2 text-4xl font-bold">
          {" "}
          Logo
        </h1>

        {/* <div className="flex items-center gap-3">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-gray-800 hover:opacity-90 dark:text-gray-400"
            >
              {link.label}
            </Link>
          ))}
        </div> */}
      </div>
      <ThemeToggle />
    </div>
  );
};
export default Navbar;
