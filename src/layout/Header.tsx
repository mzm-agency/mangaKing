/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { Daily, Genres, Library, Logo, New, Popular, Premium, Profile } from "../assets/icons";
import Search from "../components/search/search";
import { Button } from "../ui/Button";

const Menu = [
  { name: "Уншсан", 
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
        <div className={`xs:block lg:flex items-center justify-between w-full xs:h-auto lg:h-[72px] xs:py-2 lg:py-0`}>
          <div className={`xs:grid lg:flex items-center gap-10`}>
            <div className={`mx-auto`}>
              <Link to={`/`}>
                <img width={108} src={`/logo-small.png`}/>
              </Link>
            </div>
            <div className={`xs:grid lg:flex grid-cols-5 items-center gap-6`}>
              {Menu?.map((item: any, index: number) => {
                const active = location?.pathname == item.link;
                return (
                  <div key={`${index}`}>
                    <Link
                      to={`${item.link}`}
                      target={`${item.target ? '_blank' : '_self'}`}
                      className={`text-white font-semibold xs:text-12 lg:text-16 xs:grid lg:flex items-center gap-1
                      ${active ? '' : ''
                        }`}>
                      <div className={`mx-auto`}>{item.icon}</div>
                      <div className={`whitespace-nowrap relative bottom-px xs:text-center lg:text-left`}>
                        {item.name}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`xs:hidden lg:flex items-center gap-2`}>
            <Search title="Манга хайх..."/>
            <Button variant="link" size="xs">
              <Link to="/login" className={`text-white`}>Нэвтрэх</Link>
            </Button>
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
