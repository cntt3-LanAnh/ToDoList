import Link from 'next/link';

const menuList = [
  {
    title: 'Dashboard',
  },
  {
    title: 'User',
  },
  {
    title: 'User',
  },
  {
    title: 'User',
  },
  {
    title: 'User',
  },
];

export const Menu = () => {
  return (
    <div className="h-12 bg-background-sidebar w-full text-[#8fa6bf]">
      <div className="app-container h-full">
        <ul className="flex list-none h-full">
          {menuList.map((menu, index) => (
            <li key={index}>
              <Link href="#" className="block h-full no-underline text-inherit">
                <div className="px-10 h-full flex items-center">
                  <span>{menu.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
