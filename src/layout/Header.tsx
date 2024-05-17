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
          <div className={`xs:grid lg:flex items-center xs:gap-4 lg:gap-10`}>
            <div className={`mx-auto`}>
              <Link to={`/`}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 470"

      style={{ width: 162 }}
    >
      <g
        fill="#FFDB26"
        strokeMiterlimit="10"
        data-paper-data='{"isGlobalGroup":true,"bounds":{"x":72.12626153777171,"y":171.87284410237308,"width":405.7474769244566,"height":126.25431179525387}}'
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
      >
        <g data-paper-data='{"isSecondaryText":true}'>
          <path
            d="M190.067 273.816l-6.746 8.492 6.746 15.477h-8.732l-3.664-8.39-2.67 3.356v5.034h-8.013v-23.97h8.013v6.096l4.862-6.095z"
            data-paper-data='{"glyphName":"K","glyphIndex":0,"firstGlyphOfWord":true,"word":1}'
          ></path>
          <path
            d="M234.463 297.785h8.013v-23.97h-8.013z"
            data-paper-data='{"glyphName":"I","glyphIndex":1,"word":1}'
          ></path>
          <path
            d="M297.548 297.785l-4.554-7.91v7.91h-8.012v-23.97h7.944l4.622 9.451v-9.45h7.978v23.969z"
            data-paper-data='{"glyphName":"N","glyphIndex":2,"word":1}'
          ></path>
          <path
            d="M371.883 273.473c3.425 0 6.506 1.37 8.732 3.596l-5.821 5.82a4.088 4.088 0 00-2.91-1.198 4.121 4.121 0 00-4.11 4.11 4.121 4.121 0 004.11 4.108c1.13 0 2.157-.445 2.91-1.198v-2.91h8.218v9.416h-3.185a12.173 12.173 0 01-7.944 2.91c-6.814 0-12.326-5.513-12.326-12.327s5.512-12.327 12.326-12.327z"
            data-paper-data='{"glyphName":"G","glyphIndex":3,"lastGlyphOfWord":true,"word":1}'
          ></path>
        </g>
        <g data-paper-data='{"isPrimaryText":true}'>
          <path
            d="M72.126 257.138a12.47 12.47 0 0012.506-12.506v-49.226l26.83 50.704c3.638 6.821 10.573 11.028 18.303 11.028l-45.133-85.265a12.47 12.47 0 00-12.506 12.505zm52.069-21.714l1.023 1.932 24.67-43.428v50.704a12.47 12.47 0 0012.505 12.506v-72.76a12.47 12.47 0 00-12.505-12.505l-25.352 43.087c-3.752 6.253-3.752 13.984-.341 20.464z"
            data-paper-data='{"glyphName":"M","glyphIndex":0,"firstGlyphOfWord":true,"word":1}'
          ></path>
          <path
            d="M173.762 233.377h51.955c-3.07-7.617-10.46-12.505-18.645-12.505h-13.528l16.143-33.197 15.689 33.083c3.751 7.844 11.596 12.733 20.236 12.733l-29.331-61.618H202.98zm.227 11.255c0 6.935 5.685 12.506 12.506 12.506h59.117a12.47 12.47 0 00-12.506-12.506z"
            data-paper-data='{"glyphName":"A","glyphIndex":1,"word":1}'
          ></path>
          <path
            d="M256.98 184.265v60.481c0 6.821 5.571 12.392 12.393 12.392v-60.14l34.788 54.683V235.31c0-4.661-1.25-9.322-3.752-13.301l-31.036-50.022v-.114c-6.822 0-12.392 5.57-12.392 12.392zm52.751 72.873c6.935 0 12.506-5.57 12.506-12.392v-60.481c0-6.822-5.57-12.392-12.506-12.392z"
            data-paper-data='{"glyphName":"N","glyphIndex":2,"word":1}'
          ></path>
          <path
            d="M383.286 257.024v.114h12.506v-42.974a12.47 12.47 0 00-12.506 12.506v17.962c-20.463-1.25-36.607-18.19-36.607-38.994 0-11.71 9.55-21.26 21.26-21.26h15.347a12.47 12.47 0 0012.506-12.505h-32.06c-16.37 0-29.558 14.324-29.558 30.582v4.32c0 27.625 21.828 48.999 49.112 50.25z"
            data-paper-data='{"glyphName":"G","glyphIndex":3,"word":1}'
          ></path>
          <path
            d="M406.024 233.377h51.955c-3.07-7.617-10.46-12.505-18.645-12.505h-13.529l16.144-33.197 15.689 33.083c3.751 7.844 11.596 12.733 20.236 12.733l-29.331-61.618H435.24zm.227 11.255c0 6.935 5.685 12.506 12.506 12.506h59.117a12.47 12.47 0 00-12.506-12.506z"
            data-paper-data='{"glyphName":"A","glyphIndex":4,"lastGlyphOfWord":true,"word":1}'
          ></path>
        </g>
      </g>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M72 172H478V257H72z"
        className="invisible-element-box grouping-element"
        data-element-id="element-id-73951"
        data-element-name="isPrimaryText"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M72 172H162V257H72z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-882"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M174 172H246V257H174z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-60834"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M406 172H478V257H406z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-44486"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M257 172H322V257H257z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-28641"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M167 273H383V298H167z"
        className="invisible-element-box grouping-element"
        data-element-id="element-id-13542"
        data-element-name="isSecondaryText"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M334 172H396V257H334z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-17659"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M360 273H383V298H360z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-74495"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M167 274H190V298H167z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-12486"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M285 274H306V298H285z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-69997"
      ></path>
      <path
        fill="transparent"
        strokeWidth="2"
        d="M234 274H242V298H234z"
        className="invisible-element-box individual-element"
        data-element-id="element-id-52472"
      ></path>
    </svg>
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
