import { UserRectangle } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className="flex items-center justify-around border-t-2 bg-stone-800 py-6 pl-2 text-sm">
      <p className="text-stone-200">© 2024 SchoolHacks</p>
      <div className="flex items-center">
        <UserRectangle size={25} className="mr-2 text-stone-200" />
        <p className="inline text-sm text-stone-200">jorg@cphbusiness.dk</p>
      </div>
    </footer>
  );
}

export default Footer;
