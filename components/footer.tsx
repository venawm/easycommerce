import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYeay = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        2025-{currentYeay} {APP_NAME} All Rigths Reserved
      </div>
    </footer>
  );
};

export default Footer;
