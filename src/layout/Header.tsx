/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { Daily, Genres, Library, New, Popular, Premium, } from "../assets/icons";
import Search from "../components/search/search";
import { Button } from "../ui/Button";

const Menu = [
  { name: "Тэмдэглэл", 
    link: `/library`, 
    icon: <Library /> 
  },
  { name: "Жанрууд", 
    link: `/genres`, 
    icon: <Genres /> 
  },
  // { name: "Хуанли", 
  //   link: `/s`, 
  //   icon: <Daily /> 
  // },
  { name: "Шинэ", 
    link: `/new`, 
    icon: <New /> 
  },
  { name: "Онцлох", 
    link: `/featured`, 
    icon: <Popular /> 
  },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className={`sticky top-0 bg-secondary-950 z-50`}>
      <div className={`max-w-container w-full mx-auto xs:px-0 lg:px-4`}>
        <div className={`xs:block lg:flex items-center justify-between w-full xs:h-auto lg:h-[72px] pt-2`}>
          <div className={`xs:grid lg:flex items-center xs:gap-2 lg:gap-10`}>
            <div className={`mx-auto`}>
              <Link to={`/`}>
                <div className={`xs:w-24 lg:w-28`}>
                  <img src={`/logo-small.png`}/>
                </div>
              </Link>
            </div>
            <div className={`xs:grid lg:flex grid-cols-4 items-center gap-2 px-2 menu`}>
              {Menu?.map((item: any, index: number) => {
                const active = location?.pathname == item.link;
                return (
                  <Link  key={`${index}`}
                    to={`${item.link}`}
                    target={`${item.target ? '_blank' : '_self'}`}
                    className={`font-semibold xs:text-12 lg:text-16 xs:grid lg:flex items-center gap-1 px-2 py-0.5
                    ${active ? 'active-menu rounded-lg active' : 'text-default-50'
                      }`}>
                    <div className={`mx-auto`}>{item.icon}</div>
                    <div className={`whitespace-nowrap relative bottom-px xs:text-center lg:text-left`}>
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={`xs:hidden lg:flex items-center gap-2`}>
            <Search title="Манга хайх..."/>
            <Link to={`/login`}>
              <Button variant="link" size="xs">
                <Link to="/login" className={`text-default-50`}>Нэвтрэх</Link>
              </Button>
            </Link>
            <Link to={`/buy`}>
              <Button variant="primary" size="xs">
                <Premium/>
                Эрх авах
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
