interface Props {
  size?: number;
  height?: number;
}

export const Save = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className="off"
      viewBox="0 0 32 32"
    >
      <path
        fill="#000"
        d="M25.334 18.667v4h4v2.666h-4.002l.002 4h-2.667l-.002-4h-3.998v-2.666h4v-4h2.666zM26.99 6.343a8 8 0 01.314 10.98l-1.893-1.891c1.775-2.032 1.681-5.219-.31-7.205-2.003-1.999-5.226-2.084-7.32-.204l-1.78 1.597-1.78-1.596a5.332 5.332 0 00-7.326.205 5.332 5.332 0 00-.256 7.268L17.883 26.76 16 28.647 4.694 17.324A8 8 0 0116 6.039c3.131-2.812 7.971-2.719 10.988.304h.002z"
      ></path>
    </svg>
  );
};

export const Rate = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_2186_87081)">
        <path
          fill="#000"
          d="M10 .417l3.522 5.152 5.989 1.758-3.813 4.941.18 6.239L10 16.408l-5.878 2.099.18-6.239L.489 7.327l5.99-1.758L10 .417zm0 2.953L7.518 7.002l-4.22 1.237 2.687 3.482-.128 4.396L10 14.638l4.142 1.479-.127-4.396 2.687-3.482-4.22-1.237L10 3.37zM8.333 10a1.667 1.667 0 003.334 0h1.666a3.333 3.333 0 01-6.666 0h1.666z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2186_87081">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowLeftFirst = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className="header-episode__icon"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414-4.95 4.95z"
      ></path>
    </svg>
  );
};

export const ArrowLeft = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#8c877e"
        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z"
      ></path>
    </svg>
  );
};

export const ArrowRight = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2h12.172z"
      ></path>
    </svg>
  );
};


export const Sort = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      className="comic-list-head__sort-by-icon"
      viewBox="0 0 16 16"
    >
      <path
        fill="#000"
        d="M13.333 2.667v8h2L12.667 14 10 10.666h2v-8h1.333zM8 12v1.333H2V12h6zm1.333-4.667v1.333H2V7.333h7.333zm0-4.667V4H2V2.667h7.333z"
      ></path>
    </svg>
  );
};

export const ArrowRightFirst = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2h12.172z"
      ></path>
    </svg>
  );
};

export const List = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
      fill="#fff"
      d="M8.5 4h13v2h-13V4zM5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 6.9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM8.5 11h13v2h-13v-2zm0 7h13v2h-13v-2z"
    ></path>
    </svg>
  );
};

export const Star = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        fill="#FFDB26"
        d="M5 .208l1.76 2.577 2.995.878L7.85 6.134l.09 3.12L5 8.203l-2.939 1.05.09-3.12-1.906-2.47 2.994-.88L5 .209zM4.167 5h-.834a1.667 1.667 0 003.332.083L6.667 5h-.834a.833.833 0 01-1.664.063L4.167 5z"
      ></path>
    </svg>
  );
};

export const Premium = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0_4_15048)">
        <path
          fill="#000"
          d="M1.334 12.667h13.333v1.334H1.334v-1.334zm0-9.333l3.333 2 3.334-4 3.333 4 3.333-2v8H1.334v-8z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_4_15048">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const SearchBar = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#666"
        d="M7.333 1.333c3.312 0 6 2.688 6 6s-2.688 6-6 6-6-2.688-6-6 2.688-6 6-6zm0 10.667A4.666 4.666 0 0012 7.333a4.665 4.665 0 00-4.667-4.666 4.665 4.665 0 00-4.666 4.666A4.665 4.665 0 007.333 12zm5.657.047l1.886 1.886-.943.943-1.886-1.886.943-.943z"
      ></path>
    </svg>
  );
};

export const Profile = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0_4_13508)">
        <path
          fill="#000"
          d="M13.333 14.666H2.666v-1.333a3.333 3.333 0 013.333-3.334h4a3.333 3.333 0 013.334 3.334v1.333zm-5.334-6a4 4 0 110-8 4 4 0 010 8z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_4_13508">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const Library = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill="#FFDB26"
        d="M9.833 15.5v1.667H8.166V15.5H1.5a.833.833 0 01-.833-.833V1.333A.833.833 0 011.5.5h5A3.325 3.325 0 019 1.628 3.325 3.325 0 0111.5.5h5a.833.833 0 01.833.833v13.334a.833.833 0 01-.833.833H9.833zm5.833-1.667V2.167H11.5a1.667 1.667 0 00-1.667 1.666v10h5.833zm-7.5 0v-10A1.667 1.667 0 006.5 2.167H2.333v11.666h5.833z"
      ></path>
    </svg>
  );
};

export const Genres = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 16 18"
    >
      <path
        fill="#6FC2FF"
        d="M15.5 14H3a.833.833 0 100 1.666h12.5v1.667H3a2.5 2.5 0 01-2.5-2.5v-12.5A1.667 1.667 0 012.167.666H15.5v13.333zM2.167 12.373c.135-.027.274-.041.416-.041h11.25v-10H2.167v10.041zM11.333 6.5H4.667V4.833h6.666v1.666z"
      ></path>
    </svg>
  );
};

export const Daily = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 17 16"
    >
      <path
        fill="#F9B"
        d="M11.834 2H14.5a.667.667 0 01.667.667v10.666A.667.667 0 0114.5 14h-12a.667.667 0 01-.667-.667V2.667A.667.667 0 012.5 2h2.667V.667H6.5V2h4V.667h1.334V2zM10.5 3.333h-4v1.334H5.167V3.333h-2V6h10.666V3.333h-2v1.334H10.5V3.333zm3.334 4H3.167v5.334h10.667V7.333z"
      ></path>
    </svg>
  );
};

export const New = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 15 20"
    >
      <path
        fill="#C7FF80"
        d="M7.834 7.5h6.667L6.167 20v-7.5H.334L7.834 0v7.5zM6.167 9.167v-3.15l-2.89 4.816h4.557v3.662l3.553-5.328h-5.22z"
      ></path>
    </svg>
  );
};

export const Popular = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 14 19"
    >
      <path
        fill="#FFC68C"
        d="M7 18.167a6.25 6.25 0 006.25-6.25c0-.722-.192-1.415-.417-2.059-1.39 1.373-2.444 2.059-3.167 2.059 3.33-5.834 1.5-8.334-3.5-11.667.417 4.167-2.33 6.062-3.448 7.114a6.25 6.25 0 004.281 10.803zM7.59 3.362c2.701 2.292 2.714 4.073.628 7.729a1.667 1.667 0 001.447 2.492c.573 0 1.153-.166 1.766-.495a4.585 4.585 0 01-6.776 2.764 4.584 4.584 0 01-.797-7.274c.105-.099.638-.571.661-.592.354-.317.644-.598.932-.905C6.477 5.982 7.214 4.764 7.59 3.362h.001z"
      ></path>
    </svg>
  );
};

export const Logo = ({ size }: Props) => {
  return (
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
  );
};


export const SimpleArrow = () => {
  return (
    <svg className="header-episode__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z" fill="white"></path>
    </svg>
  )
}

export const ArrowIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22198L13.192 5.63598L7.828 11Z" strokeWidth={0.5} fill="#fff"></path>
    </svg>
  )
}

export const Facebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
      ></path>
    </svg>
  )
}

export const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_380_24553)">
        <path
          fill="#fff"
          d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332a2.886 2.886 0 00-1.08.703 2.89 2.89 0 00-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 001.08-.702c.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.91 2.91 0 00-.703-1.08 2.884 2.884 0 00-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_380_24553">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export const TikTok = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#fff"
      stroke="#fff"
      viewBox="0 0 512 512"
    >
      <path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z"></path>
    </svg>
  )
}

export const ArrowDropdown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#000"
        d="M8 8.781l3.3-3.3.943.943L8 10.667 3.758 6.424l.942-.943 3.3 3.3z"
      ></path>
    </svg>
  )
}

export const ArrowIconMd = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className="btn-icon btn-icon--after"
      viewBox="0 0 20 20"
    >
      <path
        fill="#fff"
        d="M13.477 9.166l-4.47-4.47 1.179-1.178 6.481 6.481-6.481 6.482-1.179-1.178 4.47-4.47H3.334V9.166h10.143z"
      ></path>
    </svg>
  )
}

export const EposidesIcon = () => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 4H21.5V6H8.5V4ZM5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5ZM5 13.5C4.60218 13.5 4.22064 13.342 3.93934 13.0607C3.65804 12.7794 3.5 12.3978 3.5 12C3.5 11.6022 3.65804 11.2206 3.93934 10.9393C4.22064 10.658 4.60218 10.5 5 10.5C5.39782 10.5 5.77936 10.658 6.06066 10.9393C6.34196 11.2206 6.5 11.6022 6.5 12C6.5 12.3978 6.34196 12.7794 6.06066 13.0607C5.77936 13.342 5.39782 13.5 5 13.5ZM5 20.4C4.60218 20.4 4.22064 20.242 3.93934 19.9607C3.65804 19.6794 3.5 19.2978 3.5 18.9C3.5 18.5022 3.65804 18.1206 3.93934 17.8393C4.22064 17.558 4.60218 17.4 5 17.4C5.39782 17.4 5.77936 17.558 6.06066 17.8393C6.34196 18.1206 6.5 18.5022 6.5 18.9C6.5 19.2978 6.34196 19.6794 6.06066 19.9607C5.77936 20.242 5.39782 20.4 5 20.4ZM8.5 11H21.5V13H8.5V11ZM8.5 18H21.5V20H8.5V18Z" fill="white"></path>
    </svg>
  )
}