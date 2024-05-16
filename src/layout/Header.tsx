/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { Daily, Genres, Library, Logo, New, Popular, Premium, Profile } from "../assets/icons";
import Search from "../components/search/search";
import { Button } from "../ui/Button";

const Menu = [
  { name: "Миний уншсан", 
    link: `/`, 
    icon: <Library /> 
  },
  { name: "Жанрууд", 
    link: `/`, 
    icon: <Genres /> 
  },
  { name: "Хуанли", 
    link: `/`, 
    icon: <Daily /> 
  },
  { name: "Шинэ", 
    link: `/`, 
    icon: <New /> 
  },
  { name: "Онцлох", 
    link: `/`, 
    icon: <Popular /> 
  },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className={`sticky top-0 bg-secondary-950 z-50`}>
      <div className={`max-w-container w-full mx-auto px-4`}>
        <div className={`flex items-center justify-between h-[72px]`}>
          <div className={`flex items-center gap-10`}>
            <Link to={`/`}>
              <Logo/>
            </Link>
            <nav className={`flex items-center gap-6`}>
              {Menu?.map((item: any, index: number) => {
                const active = location?.pathname == item.link;
                return (
                  <div key={`${index}`}>
                    <Link
                      to={`${item.link}`}
                      target={`${item.target ? '_blank' : '_self'}`}
                      className={`text-white font-semibold text-base flex items-center gap-1
                      ${active ? '' : ''
                        }`}>
                      <div>{item.icon}</div>
                      <div className={`whitespace-nowrap relative bottom-px`}>
                        {item.name}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
          <div className={`flex items-center gap-2`}>
            <Search title="Манга хайх..."/>
            <Button variant="link" size="xs">Нэвтрэх</Button>
            <Button variant="primary" size="xs">
              <Premium/>
              Эрх авах
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
