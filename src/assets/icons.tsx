interface Props {
  size?: number;
  height?: number;
}

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
      width="108"
      height="56"
      fill="none"
      viewBox="0 0 108 56"
    >
      <path
        fill="#FFDB26"
        d="M107.526 8.618a3.59 3.59 0 00-1.062-1.139l-.105-.073-.097-.067c-.037-.027-.069-.05-.097-.068-.037-.026-.069-.05-.095-.067-.037-.027-.071-.05-.097-.067a4.815 4.815 0 00-.193-.135 10.433 10.433 0 00-.194-.135c-.037-.027-.069-.048-.095-.066-.037-.028-.071-.05-.097-.067-.037-.029-.071-.05-.097-.068-.037-.028-.071-.05-.097-.067-.037-.028-.071-.05-.097-.067-.037-.027-.069-.05-.097-.068-.037-.026-.069-.05-.095-.067l-.097-.068-.097-.067a2.937 2.937 0 00-.097-.068 4.763 4.763 0 00-.096-.067c-.038-.027-.069-.05-.097-.067-.038-.027-.069-.05-.097-.068-.037-.026-.069-.05-.095-.067l-.097-.068-.097-.067c-.037-.027-.071-.048-.097-.066-.037-.028-.071-.05-.097-.067a1.282 1.282 0 00-.097-.068c-.037-.026-.069-.05-.095-.067l-.097-.068-.097-.067c-.037-.027-.071-.05-.097-.067a4.82 4.82 0 00-.193-.135l-.095-.068a10.408 10.408 0 00-.194-.135l-.097-.065c-.037-.029-.071-.05-.097-.068a1.284 1.284 0 00-.097-.067 1.286 1.286 0 00-.097-.067 1.284 1.284 0 00-.097-.068c-.035-.028-.069-.05-.095-.067l-.097-.068-.097-.067a2.921 2.921 0 00-.097-.068c-.037-.026-.068-.05-.096-.067-.038-.027-.069-.05-.095-.067a10.383 10.383 0 00-.194-.135l-.097-.068-.097-.067-.097-.068-.095-.065c-.037-.029-.071-.05-.097-.068-.037-.028-.071-.05-.097-.067-.037-.028-.071-.05-.097-.067-.037-.029-.071-.05-.097-.068-.037-.028-.071-.05-.097-.067l-.096-.068c-.038-.026-.069-.05-.096-.067a4.815 4.815 0 00-.193-.135l-.097-.067c-.038-.027-.069-.05-.097-.068-.037-.027-.069-.05-.097-.067l-.095-.068a4.943 4.943 0 00-.097-.067c-.037-.027-.07-.048-.097-.066-.037-.028-.07-.05-.097-.067-.037-.029-.07-.05-.097-.068a1.305 1.305 0 00-.097-.067 1.326 1.326 0 00-.097-.068 5.133 5.133 0 00-.192-.135 5.155 5.155 0 00-.096-.067 5.18 5.18 0 00-.097-.067 5.155 5.155 0 00-.097-.068c-.037-.026-.07-.05-.097-.067l-.095-.068a5.654 5.654 0 00-.194-.134c-.037-.027-.07-.048-.097-.066-.037-.028-.07-.05-.097-.067a1.35 1.35 0 00-.097-.068c-.037-.028-.069-.05-.095-.067-.037-.029-.07-.05-.097-.068-.037-.028-.07-.05-.097-.067a5.2 5.2 0 00-.096-.068 5.135 5.135 0 00-.097-.067 5.147 5.147 0 00-.097-.067l-.095-.068a4.857 4.857 0 00-.097-.067 5.168 5.168 0 00-.097-.068 4.851 4.851 0 00-.097-.067 5.265 5.265 0 00-.097-.068 4.908 4.908 0 00-.097-.067c-.037-.027-.069-.048-.095-.066L96.89.81a1.933 1.933 0 00-.09-.062 3.84 3.84 0 00-2.645-.73l-6.182.574a3.79 3.79 0 00-2.534 1.293l-.05-.033c-.032-.023-.064-.046-.098-.068a3.851 3.851 0 00-2.607-.7l-6.181.574a3.818 3.818 0 00-.472.073c-.039-.002-.076-.002-.115-.002h-.12l-.078.002-.078.007L60.7 3.125c-.39.035-.768.13-1.122.277a3.807 3.807 0 00-1.165-.064l-6.26.58a3.887 3.887 0 00-1.326.367 3.888 3.888 0 00-1.376-.115l-6.824.633c-1.383.128-2.51.93-3.047 2.06a11.155 11.155 0 00-1.206-.585c-1.54-.64-3.252-.965-5.084-.965-.503 0-1.023.024-1.546.072-2.365.22-4.535.9-6.45 2.021-.364.211-.716.44-1.055.683-.017-.01-.034-.02-.052-.033a2.114 2.114 0 00-.095-.068l-.097-.067c-.028-.02-.06-.043-.097-.067a2.22 2.22 0 00-.097-.068 2.276 2.276 0 00-.097-.067l-.095-.068c-.028-.02-.06-.042-.099-.067-.028-.02-.061-.045-.102-.071a3.803 3.803 0 00-2.21-.69c-.125 0-.252.005-.377.017l-6.24.579a3.84 3.84 0 00-2.155.898 3.819 3.819 0 00-1.914-.503c-.125 0-.252.008-.377.018l-6.23.579C1.99 8.59.56 10.048.501 11.88l-.5 15.841c-.03.982.34 1.9 1.043 2.591.165.163.35.31.55.442l.093.064c.026.02.057.042.095.067l.096.068.097.067c.028.02.06.043.097.067l.095.068.1.067.094.068.097.065c.026.02.06.043.097.068.026.02.06.042.097.067.026.02.06.043.097.068.028.021.06.044.095.067.028.02.06.043.097.067l.097.068c.026.02.06.042.097.067.026.02.06.043.096.068l.097.067c.027.02.058.043.097.068.026.02.058.042.095.067a5.23 5.23 0 01.194.135c.026.018.06.04.097.067l.097.066c.026.02.06.043.097.067.026.02.058.043.095.068l.097.067c.026.02.06.043.097.068.026.02.06.042.097.067.026.02.06.043.096.068.027.02.06.042.098.067.026.02.057.043.095.067l.096.068.097.067c.026.02.06.043.097.068.026.02.06.042.097.067l.097.068.095.065.099.07.095.065c.026.02.06.043.097.068l.097.067c.026.02.06.043.097.067.026.02.057.043.096.068.027.02.058.042.096.067l.096.068.097.067c.026.02.06.043.097.067.026.02.06.043.097.068.026.02.06.043.097.067l.095.068c.028.018.06.04.097.067l.097.066c.026.02.06.042.097.07.028.019.06.042.097.065.028.021.06.044.097.067l.095.068.097.067c.028.02.06.043.097.067.026.02.06.043.096.068.027.02.06.042.097.067.026.02.06.043.097.068.028.021.06.042.097.067.026.02.058.043.097.068l.095.067.045.032-.002.092a3.446 3.446 0 001.167 2.683c.111.101.236.199.378.296l.1.07c.036.026.07.047.095.067l.097.068c.038.026.07.047.097.067l.097.067.097.068.097.067c.035.025.069.048.095.068l.097.065c.037.027.069.05.097.068.037.026.069.05.097.067.035.027.069.05.097.068a1.5 1.5 0 00.097.067c.035.027.069.05.097.067.035.027.069.05.095.068.037.026.069.05.097.067l.096.068.097.067c.036.027.07.048.097.068.036.026.07.047.097.067.036.027.07.048.095.067l.097.068.097.067.097.068c.035.025.069.048.097.065a1.5 1.5 0 00.097.068c.035.026.069.05.097.067.035.027.069.05.095.068.037.026.069.05.097.067.037.027.069.05.097.067.022.016.04.03.06.043l-.167 5.267c-.033 1.09.451 2.116 1.33 2.814.08.062.165.124.258.186l.093.066.097.067c.028.02.06.043.095.066l.099.069.095.066c.028.02.061.044.097.067.028.021.061.044.097.067.03.022.061.045.097.068.028.021.061.044.097.067.028.022.061.045.097.068.027.021.061.044.096.067.028.021.06.044.096.067l.096.068.097.067c.028.022.062.043.097.068l.095.067.099.068c.028.021.06.042.095.067l.097.067c.03.02.061.043.097.066.03.022.061.044.097.068.028.02.061.044.097.067.028.021.06.044.095.067.03.022.061.045.097.068.03.021.061.044.096.067.029.022.062.043.097.068l.097.067c.028.022.062.043.097.068l.097.067c.028.021.06.043.097.068l.095.067.097.067c.028.02.061.043.097.066l.097.07.095.065c.03.021.061.044.097.067.03.022.061.045.097.068.03.021.061.044.097.067.027.021.061.044.096.067.028.022.062.045.097.068.028.021.06.042.097.067.028.022.062.045.097.068l.095.067.097.068.097.067.097.067.097.068.097.067.095.068.097.067c.03.02.061.043.097.066.027.021.061.044.096.067.028.022.06.045.097.068.028.021.06.044.097.067.028.021.06.044.097.068l.095.067.097.067.097.068.097.067.097.068.095.067c.03.02.061.043.097.066l.097.069c.03.02.061.043.097.066.028.021.061.044.097.067.027.021.061.044.096.067.028.022.062.045.097.068.028.021.06.044.095.067.03.022.062.045.097.068.028.021.062.042.097.067.03.022.062.045.097.068l.097.067c.028.02.06.043.097.067l.095.068.097.067.097.068.097.067.097.068c.027.02.061.042.096.065.029.022.06.045.096.068.03.021.061.044.096.067l.097.068.097.067c.028.021.062.044.097.067.028.022.06.043.097.068.028.021.06.042.095.067l.097.068.097.067.097.067.097.068.097.067.097.068c.027.02.06.042.095.066.03.02.061.044.096.069l.097.065c.028.022.062.045.097.068.028.021.062.044.097.067.028.022.06.044.095.068l.097.067.1.07c.644.457 1.436.709 2.232.709h.119l.08-.002.078-.007 6.303-.585a3.837 3.837 0 002.387-1.129l.004-.004.004-.005c.616-.635.97-1.457.998-2.317l.042-1.292c.009.007.016.014.026.02l.016.012c.026.018.054.035.08.055l.017.012.08.055.017.013.08.055.017.012.078.053.019.013c.026.02.052.037.08.057l.017.012.078.055.017.01.08.058.019.01c.026.02.052.038.078.055l.017.013c.026.02.052.037.078.055l.019.012c.026.02.054.037.08.057l.017.01c.026.02.054.04.082.057l.014.01.08.056.017.012c.026.02.053.038.08.057l.015.01.082.058.015.01.079.055.018.013c.026.017.053.037.078.055l.02.012.08.055.016.013.076.053.021.014c.024.018.05.035.076.053l.02.014.08.055.016.011c.026.02.052.037.08.055l.017.012c.026.02.054.038.08.057l.017.01c.026.02.052.038.078.056l.019.012c.026.02.052.038.078.055l.018.013.079.055.017.012c.663.472 1.397.877 2.184 1.203 1.54.64 3.252.965 5.084.965.503 0 1.025-.024 1.546-.072 2.364-.22 4.535-.9 6.45-2.021a13.46 13.46 0 003.228-2.614l.019.012c.031.023.065.047.097.068.031.023.063.046.096.067l.097.068c.032.023.064.046.097.067.032.023.064.044.095.068.034.023.066.044.097.067l.097.067.097.068.097.067.097.068c.032.02.063.044.095.067.656.461 1.375.857 2.141 1.175 1.541.64 3.252.965 5.084.965.503 0 1.023-.025 1.547-.075 2.363-.218 4.532-.897 6.45-2.019.358-.211.708-.436 1.045-.678.02.015.041.029.064.043.028.021.06.044.096.067.028.022.06.045.096.068l.097.067c.027.021.06.043.096.068l.097.067.097.068.097.067c.03.021.063.046.103.07.637.452 1.397.69 2.199.69.125 0 .25-.008.374-.018l6.275-.584a3.912 3.912 0 001.418-.41 3.885 3.885 0 001.467.142l6.627-.616c1.903-.175 3.324-1.625 3.382-3.444l.501-15.879 1.264-.117a3.852 3.852 0 002.385-1.129l.004-.005.006-.003a3.498 3.498 0 00.997-2.318l.175-5.568 5.548-9.174.005-.008.004-.008a3.397 3.397 0 00.008-3.474zm-1.558 2.644l-5.772 9.543-.188 5.992a1.853 1.853 0 01-.527 1.223c-.34.344-.785.555-1.26.6l-3.483.322.074.068c.364.356.556.837.539 1.353l-.501 15.889c-.03.954-.776 1.715-1.774 1.808l-6.627.615a1.955 1.955 0 01-1.38-.382c-.035-.02-.067-.044-.098-.067l-.025-.016c-.32.405-.81.68-1.384.733l-6.275.584a2.72 2.72 0 01-.201.009c-.429 0-.831-.131-1.161-.37-.034-.022-.065-.045-.097-.068a1.756 1.756 0 01-.097-.068c-.033-.02-.065-.044-.097-.067-.032-.02-.063-.043-.097-.066a3.207 3.207 0 01-.095-.067 1.854 1.854 0 01-.097-.068c-.033-.021-.065-.044-.097-.067-.033-.021-.065-.044-.097-.068a1.813 1.813 0 01-.096-.067c-.034-.021-.066-.044-.097-.067l-.095-.068c-.034-.021-.066-.044-.097-.067a1.773 1.773 0 01-.097-.068c-.034-.021-.066-.044-.097-.067a1.775 1.775 0 01-.097-.068 1.72 1.72 0 01-.097-.067 2.964 2.964 0 01-.095-.067.856.856 0 01-.097-.068 1.17 1.17 0 01-.097-.066c-.033-.02-.065-.044-.097-.067-.005-.005-.013-.007-.018-.012-.578.513-1.214.976-1.907 1.382-1.684.986-3.598 1.584-5.691 1.778-.466.044-.928.065-1.374.065-1.586 0-3.058-.276-4.374-.823a9.152 9.152 0 01-1.798-.99c-.033-.021-.065-.044-.097-.067l-.097-.066c-.032-.023-.063-.046-.097-.067-.031-.024-.063-.047-.095-.068l-.097-.067-.096-.068c-.034-.023-.066-.044-.097-.067-.032-.023-.066-.044-.097-.068-.032-.023-.066-.044-.097-.067l-.097-.067-.095-.068a1.856 1.856 0 01-.097-.067 1.854 1.854 0 01-.097-.068 3.47 3.47 0 01-.097-.067 3.47 3.47 0 01-.097-.067l-.097-.068-.095-.066-.097-.067-.097-.067-.096-.068c-.032-.023-.066-.044-.097-.067l-.097-.068-.097-.067-.095-.068c-.034-.023-.066-.044-.097-.067-.03-.021-.06-.04-.09-.062-.96 1.428-2.229 2.615-3.788 3.53-1.685.984-3.599 1.582-5.692 1.775-.466.045-.928.066-1.373.066-1.586 0-3.058-.277-4.374-.823a9.343 9.343 0 01-1.934-1.081l-.096-.067-.096-.068c-.034-.023-.066-.044-.097-.067-.032-.023-.066-.045-.097-.068l-.097-.067c-.032-.023-.065-.044-.097-.068l-.095-.067c-.034-.021-.065-.044-.097-.067a1.813 1.813 0 01-.097-.068 3.328 3.328 0 01-.097-.067 3.03 3.03 0 01-.097-.068l-.097-.065a4.518 4.518 0 00-.096-.07c-.032-.02-.064-.044-.096-.065l-.096-.068c-.034-.023-.066-.044-.097-.067-.032-.023-.066-.044-.097-.068-.032-.023-.066-.044-.097-.067l-.097-.067-.095-.068-.097-.067-.097-.068a2.918 2.918 0 01-.097-.067 3.197 3.197 0 01-.097-.067 2.921 2.921 0 01-.097-.068l-.095-.067-.097-.066-.096-.067a3.331 3.331 0 00-.098-.068 3.023 3.023 0 00-.096-.067c-.032-.023-.066-.045-.097-.068l-.095-.067c-.034-.023-.066-.044-.097-.068l-.097-.067-.097-.067-.097-.068a3.026 3.026 0 01-.097-.067c-.032-.021-.063-.045-.097-.068-.031-.02-.063-.044-.095-.067a1.832 1.832 0 01-.097-.068 1.815 1.815 0 01-.097-.067l-.097-.066a3.197 3.197 0 00-.096-.067 3.026 3.026 0 00-.097-.067l-.095-.068c-.034-.023-.066-.044-.097-.067l-.097-.068-.097-.067-.097-.068-.097-.067-.095-.067-.097-.068c-.024-.016-.05-.032-.072-.05l-.144 4.506a1.836 1.836 0 01-.525 1.222c-.34.346-.785.556-1.26.6l-6.305.586h-.104c-.429 0-.846-.139-1.187-.387a3.406 3.406 0 01-.097-.068c-.032-.021-.064-.044-.095-.067-.034-.021-.066-.044-.097-.068-.034-.02-.065-.044-.097-.067a1.813 1.813 0 01-.097-.067c-.034-.022-.065-.045-.097-.068-.034-.021-.065-.044-.097-.067a3.08 3.08 0 01-.095-.068 1.815 1.815 0 01-.097-.067 1.172 1.172 0 01-.097-.067 1.75 1.75 0 01-.096-.066c-.034-.022-.066-.045-.098-.068-.033-.02-.065-.044-.096-.067a3.148 3.148 0 01-.097-.067 3.348 3.348 0 01-.095-.068c-.034-.021-.066-.044-.097-.067-.034-.022-.065-.045-.097-.068-.034-.021-.065-.044-.097-.067a1.851 1.851 0 01-.097-.068c-.034-.02-.065-.044-.097-.067-.032-.021-.063-.044-.095-.068a1.72 1.72 0 01-.097-.067 1.773 1.773 0 01-.097-.067 1.873 1.873 0 01-.097-.068 1.135 1.135 0 01-.097-.067 1.892 1.892 0 01-.096-.066c-.032-.021-.064-.044-.096-.067-.033-.021-.065-.045-.096-.068a1.854 1.854 0 01-.097-.067c-.034-.021-.066-.044-.097-.067-.034-.022-.065-.045-.097-.068-.034-.021-.065-.044-.097-.067a3.143 3.143 0 01-.097-.068c-.032-.021-.063-.044-.095-.067a1.812 1.812 0 01-.097-.068 1.815 1.815 0 01-.097-.067 1.81 1.81 0 01-.097-.067l-.097-.068a3.148 3.148 0 01-.096-.067c-.032-.022-.064-.043-.096-.068a1.828 1.828 0 01-.096-.066c-.034-.02-.066-.044-.097-.067a1.854 1.854 0 01-.097-.067c-.034-.022-.065-.045-.097-.068-.034-.021-.065-.044-.097-.067a3.267 3.267 0 01-.095-.068c-.034-.02-.065-.044-.097-.067a1.775 1.775 0 01-.097-.068 1.72 1.72 0 01-.097-.067 1.773 1.773 0 01-.097-.067 1.873 1.873 0 01-.097-.068 3.15 3.15 0 01-.097-.067l-.095-.068a1.854 1.854 0 01-.096-.067 1.191 1.191 0 01-.097-.067 1.788 1.788 0 01-.097-.066c-.034-.021-.066-.044-.097-.067a3.328 3.328 0 01-.097-.068c-.032-.021-.064-.044-.095-.067a1.851 1.851 0 01-.097-.068 1.815 1.815 0 01-.097-.067c-.034-.022-.065-.045-.097-.068-.033-.02-.065-.044-.097-.067a1.854 1.854 0 01-.097-.067 3.262 3.262 0 01-.095-.068c-.033-.021-.065-.044-.097-.067a1.836 1.836 0 01-.097-.068 1.854 1.854 0 01-.097-.067c-.033-.022-.065-.045-.096-.068a1.828 1.828 0 01-.097-.065 3.143 3.143 0 01-.097-.068c-.032-.021-.064-.044-.095-.067-.034-.021-.065-.044-.097-.068a1.773 1.773 0 01-.097-.067 1.773 1.773 0 01-.097-.067l-.097-.068a3.15 3.15 0 01-.097-.067 2.916 2.916 0 01-.095-.068 1.815 1.815 0 01-.097-.067c-.033-.021-.065-.044-.097-.068a1.918 1.918 0 01-.097-.067c-.033-.021-.065-.044-.096-.067-.034-.022-.066-.045-.097-.068a3.148 3.148 0 01-.097-.067c-.032-.022-.064-.043-.095-.066-.034-.021-.066-.044-.097-.067a1.871 1.871 0 01-.097-.068 1.815 1.815 0 01-.097-.067c-.034-.022-.065-.045-.097-.068a3.335 3.335 0 01-.097-.067c-.032-.021-.063-.044-.095-.067a1.897 1.897 0 01-.097-.068c-.033-.021-.065-.044-.097-.067a1.856 1.856 0 01-.097-.068c-.033-.021-.065-.044-.096-.067a3.27 3.27 0 01-.097-.068c-.032-.02-.064-.044-.095-.067-.034-.021-.066-.044-.097-.068a1.15 1.15 0 01-.097-.067 1.157 1.157 0 01-.097-.067 1.79 1.79 0 01-.854-1.576l.196-6.159-.037-.026a1.817 1.817 0 01-.097-.068 1.191 1.191 0 01-.097-.067c-.032-.022-.065-.043-.097-.068-.032-.021-.065-.042-.097-.067-.032-.021-.065-.043-.095-.068a1.19 1.19 0 01-.097-.067 1.174 1.174 0 01-.097-.068 1.788 1.788 0 01-.097-.065l-.096-.068c-.032-.023-.066-.044-.097-.067-.032-.023-.066-.044-.095-.068-.034-.023-.066-.044-.097-.067-.034-.021-.066-.044-.097-.067a1.814 1.814 0 01-.097-.068c-.034-.021-.065-.044-.097-.067a3.273 3.273 0 01-.097-.068c-.032-.02-.065-.042-.097-.067a1.545 1.545 0 01-.095-.067 1.127 1.127 0 01-.097-.068 1.191 1.191 0 01-.097-.067 1.174 1.174 0 01-.097-.068c-.031-.021-.065-.042-.097-.067-.031-.022-.065-.043-.097-.066-.031-.023-.065-.044-.095-.067l-.096-.068c-.034-.023-.066-.044-.097-.067-.034-.023-.066-.044-.097-.068a3.274 3.274 0 01-.097-.067 3.09 3.09 0 01-.097-.067 1.848 1.848 0 01-.095-.068 1.19 1.19 0 01-.097-.067 1.193 1.193 0 01-.097-.068 1.19 1.19 0 01-.097-.067c-.032-.021-.065-.043-.097-.068-.031-.02-.065-.042-.097-.067-.031-.021-.065-.043-.095-.067-.033-.022-.067-.043-.097-.066-.033-.023-.065-.044-.096-.067A1.801 1.801 0 019.69 35.3l.03-.983-.035-.025a1.813 1.813 0 01-.097-.067l-.095-.068a1.806 1.806 0 01-.097-.067 1.75 1.75 0 01-.096-.068 1.805 1.805 0 01-.097-.067c-.034-.021-.066-.044-.097-.067a1.806 1.806 0 01-.097-.068l-.097-.067a3.08 3.08 0 01-.095-.068c-.034-.021-.065-.044-.097-.067-.034-.021-.065-.044-.097-.068-.033-.02-.065-.044-.097-.067-.033-.02-.065-.044-.097-.067-.033-.02-.063-.043-.097-.066a2.978 2.978 0 01-.095-.068c-.033-.02-.065-.044-.097-.067a1.847 1.847 0 01-.097-.067 1.884 1.884 0 01-.096-.068 1.846 1.846 0 01-.097-.067c-.034-.021-.065-.045-.097-.068-.032-.02-.064-.044-.095-.067a1.87 1.87 0 01-.097-.068c-.034-.02-.065-.044-.097-.067-.034-.021-.065-.044-.097-.067a1.792 1.792 0 01-.097-.068 1.813 1.813 0 01-.097-.067c-.031-.02-.063-.045-.097-.068-.031-.02-.063-.044-.095-.067-.033-.02-.065-.043-.097-.066-.033-.021-.065-.044-.097-.067a1.806 1.806 0 01-.096-.068 1.805 1.805 0 01-.097-.067 1.805 1.805 0 01-.097-.067l-.095-.068c-.034-.021-.065-.044-.097-.067a1.84 1.84 0 01-.097-.068c-.034-.021-.065-.044-.097-.067-.034-.021-.065-.044-.097-.067a1.806 1.806 0 01-.097-.068 2.967 2.967 0 01-.095-.067l-.097-.068c-.033-.02-.065-.044-.097-.067a1.154 1.154 0 01-.097-.066c-.033-.021-.065-.044-.097-.067-.033-.022-.065-.045-.096-.068l-.097-.067-.095-.068c-.034-.02-.066-.044-.097-.067-.034-.021-.066-.044-.097-.067-.034-.022-.065-.045-.097-.068a1.813 1.813 0 01-.097-.067l-.097-.068a3.28 3.28 0 01-.095-.067 1.813 1.813 0 01-.097-.068c-.033-.02-.065-.044-.097-.067-.033-.021-.065-.044-.097-.067-.033-.02-.065-.045-.097-.068-.033-.02-.065-.043-.096-.066-.032-.02-.064-.044-.096-.067a1.842 1.842 0 01-.096-.067c-.034-.022-.066-.045-.097-.068-.034-.021-.066-.044-.097-.067a1.845 1.845 0 01-.097-.068 1.849 1.849 0 01-.097-.067c-.032-.021-.063-.045-.097-.068a3.1 3.1 0 01-.095-.067 1.757 1.757 0 01-.097-.067 1.85 1.85 0 01-.097-.068c-.033-.021-.065-.044-.097-.067-.033-.021-.065-.045-.097-.068-.033-.021-.063-.044-.097-.067-.031-.02-.063-.044-.095-.067a1.127 1.127 0 01-.096-.066 1.809 1.809 0 01-.854-1.606l.501-15.842c.03-.969.787-1.739 1.799-1.835l6.228-.578c.072-.005.14-.009.205-.009.434 0 .84.131 1.172.373.034.021.065.044.097.067.034.021.065.044.097.068.033.02.065.044.097.067.033.021.065.044.097.067l.097.068.095.067c.033.022.065.045.096.068.034.02.066.044.098.067.033.02.065.043.096.066.034.021.066.044.097.067.034.021.065.045.097.068.032.02.063.044.095.067.034.021.065.044.097.068.013.008.026.015.037.024.103-.894.826-1.588 1.776-1.675l6.24-.58c.072-.007.14-.009.205-.009.434 0 .84.132 1.172.373.033.021.065.044.097.067l.097.068c.033.02.065.044.097.067.033.02.065.044.097.066.033.021.065.044.096.067.032.021.064.045.096.068.033.02.065.044.096.067.034.021.066.044.097.067.034.022.065.045.097.068.034.021.065.044.097.067.034.022.065.045.097.068.034.021.063.044.097.067.032.021.063.045.095.068.034.02.065.044.097.067.033.021.065.044.097.067l.097.068c.033.021.065.044.097.067.033.02.065.045.096.068.032.02.064.044.095.065.034.022.066.045.097.068l.008.005c.58-.516 1.217-.981 1.916-1.391 1.683-.985 3.596-1.583 5.69-1.776.467-.045.93-.066 1.374-.066 1.587 0 3.057.277 4.373.823a9.141 9.141 0 011.949 1.094c.032.02.065.044.097.067l.097.067c.031.022.063.045.095.066l.097.067c.031.024.065.045.096.068l.098.067.096.068c.032.023.066.044.097.067l.095.068c.034.023.066.044.097.067l.097.067c.032.024.065.045.097.068l.097.067.097.068.01.007.05-1.563c.03-.962.777-1.729 1.774-1.821l6.828-.633a1.992 1.992 0 011.398.39l.04-.044a2.015 2.015 0 011.262-.597l6.26-.582c.069-.007.136-.008.2-.008.354 0 .689.088.982.255.31-.259.695-.42 1.105-.46L75.81 3.423h.105c.097 0 .192.009.287.021.15-.051.31-.085.473-.101l6.182-.575a1.989 1.989 0 011.385.383c.031.022.064.043.096.068.032.021.064.042.095.065.034.024.066.045.097.068.034.021.065.044.097.067.034.022.065.045.097.068.034.021.065.044.097.067a3.2 3.2 0 01.097.068c.031.02.065.044.095.067.033.021.065.044.097.067l.097.068c.033.021.065.044.097.067.033.022.065.045.096.068.034.021.066.042.097.067.032.021.066.043.097.068.032.02.064.042.095.067.034.021.066.043.097.067.034.022.065.043.097.066.022.014.045.028.065.043l.686-1.134.013-.02a1.979 1.979 0 011.499-.905l6.183-.575a1.988 1.988 0 011.405.401c.034.022.065.043.097.068.032.021.065.042.097.067.031.022.065.043.097.068.032.021.065.042.095.067a.916.916 0 01.097.068c.033.02.065.042.097.067.033.021.065.043.097.066.031.023.065.044.096.067.032.023.066.044.097.068.032.023.066.044.095.067.034.023.067.044.097.067.034.023.066.045.097.068l.097.067.097.068c.032.021.065.042.097.067.032.021.065.043.097.068.032.02.065.042.095.067.033.021.065.043.097.067.033.022.065.043.097.068.033.021.065.042.097.067.031.022.065.043.096.068.032.021.066.042.097.065.032.023.066.045.095.068.034.023.067.044.097.067.034.023.066.045.097.068.034.023.066.044.097.067l.097.067c.032.024.065.045.097.068.032.021.065.044.095.067a.915.915 0 01.097.068c.034.021.065.042.097.067.033.021.065.043.097.068.031.02.065.042.097.067.031.021.065.043.096.067.032.022.066.043.097.068.032.021.066.042.095.067.034.022.066.043.097.066.034.023.066.044.097.067.034.023.066.045.097.068l.097.067.097.068c.032.023.065.044.095.067.034.023.067.044.097.068.034.02.065.042.097.067.033.021.065.043.097.067.031.022.065.043.097.068.031.021.065.042.097.067.031.022.065.043.095.068.033.021.067.042.097.067.033.021.065.043.096.068.034.02.066.042.097.067.032.021.066.043.097.066.032.023.066.044.097.067.032.023.065.044.095.067.034.024.067.045.097.068.034.023.067.044.097.067l.097.068c.033.021.065.044.097.067.031.021.065.043.097.068.031.02.065.042.097.067.031.021.065.043.095.067.033.022.067.043.097.068.033.021.065.042.096.067.034.022.066.043.097.068.032.021.066.042.097.067.032.021.066.043.097.066.032.023.065.044.095.067.034.023.067.045.097.068l.097.067.097.067c.032.024.065.045.097.068l.097.067.097.068c.031.021.065.042.095.067.033.022.065.043.097.068.033.02.065.042.097.067.033.021.065.043.096.067.032.022.066.043.097.068.032.021.066.042.097.067.032.022.066.043.095.068a4.075 4.075 0 01.194.133l.097.067.097.068.097.067c.031.023.065.044.095.068.033.023.067.044.097.067.033.021.065.044.097.067.033.022.065.043.097.068.031.021.065.042.096.067.032.022.066.043.097.068.032.021.066.042.097.067.032.021.066.043.095.068.034.02.066.042.097.067.034.021.065.043.097.067.034.022.065.043.097.066l.097.067c.032.024.065.045.097.068.032.023.065.044.095.067.034.023.067.045.097.068.231.156.43.358.574.603a1.79 1.79 0 01-.002 1.824z"
      ></path>
      <path
        fill="#FFDB26"
        d="M21.35 10.377l-.502 15.842c-.004.12-.067.186-.192.198l-6.23.579c-.125.01-.184-.045-.18-.163l.163-5.214c.004-.113-.057-.165-.182-.152l-3.707.344c-.125.01-.188.075-.192.186l-.166 5.213c-.004.121-.067.187-.192.2l-6.23.578c-.125.012-.184-.043-.18-.164l.499-15.842c.004-.12.069-.188.194-.198l6.228-.579c.125-.012.186.043.183.164l-.165 5.2c-.003.121.056.176.181.165l3.707-.344c.125-.012.19-.078.194-.199l.164-5.202c.004-.12.065-.187.18-.197l6.242-.58c.125-.011.186.044.182.165zM40.205 12.096c-.756-1.22-1.841-2.126-3.252-2.713-1.412-.587-3.034-.795-4.864-.625-1.83.17-3.473.682-4.93 1.535-1.458.854-2.606 1.965-3.445 3.336-.838 1.37-1.284 2.885-1.336 4.544-.052 1.658.3 3.099 1.057 4.321.756 1.223 1.841 2.128 3.252 2.715 1.412.585 3.034.793 4.864.625 1.83-.17 3.474-.682 4.93-1.535 1.458-.854 2.606-1.966 3.445-3.336.838-1.372 1.284-2.885 1.336-4.544.052-1.66-.3-3.099-1.057-4.323zM33.57 18.92c-.514.54-1.126.843-1.828.909-.705.066-1.3-.126-1.784-.573-.484-.447-.715-1.022-.695-1.723a2.779 2.779 0 01.78-1.881c.495-.523 1.115-.82 1.857-.889.744-.07 1.348.114 1.813.546.466.435.688 1.017.666 1.748-.023.703-.293 1.322-.809 1.863zM58.92 6.863l-.502 15.888c-.004.105-.06.164-.17.174l-6.626.616c-.07.005-.116-.02-.138-.078l-2.121-4.324c-.02-.05-.058-.078-.108-.08a.204.204 0 00-.142.046.167.167 0 00-.069.131l-.138 4.399c-.003.105-.06.163-.17.174l-6.274.582c-.11.01-.164-.037-.16-.142l.501-15.888c.004-.114.06-.176.17-.185l6.826-.635c.078-.007.132.021.162.087l1.903 4.142c.022.051.06.078.11.08a.206.206 0 00.142-.047.173.173 0 00.069-.131l.132-4.195c0-.046.02-.087.056-.124a.2.2 0 01.125-.062l6.263-.582c.11-.01.162.04.158.154zM76.068 5.27l-.147 4.704a.181.181 0 01-.058.124.186.186 0 01-.125.062l-8.268.768a.205.205 0 00-.125.063.19.19 0 00-.056.124l-.017.52a.138.138 0 00.049.113.148.148 0 00.123.04l7.905-.733a.15.15 0 01.121.039c.034.03.05.069.049.113l-.13 4.07a.171.171 0 01-.055.125.19.19 0 01-.125.062l-7.905.734a.19.19 0 00-.125.063.171.171 0 00-.056.124l-.017.53a.138.138 0 00.049.114.151.151 0 00.12.04l8.271-.768c.118-.01.174.036.17.142l-.147 4.704a.18.18 0 01-.058.123.197.197 0 01-.125.064l-14.849 1.378a.156.156 0 01-.121-.039.144.144 0 01-.05-.113l.501-15.878a.182.182 0 01.056-.122.207.207 0 01.125-.064l14.85-1.379a.156.156 0 01.122.04c.034.031.05.069.048.113zM94.658 3.634l-5.96 9.855a.203.203 0 00-.026.092l-.201 6.367a.187.187 0 01-.056.124.194.194 0 01-.125.062l-6.253.58a.15.15 0 01-.12-.039.138.138 0 01-.05-.113l.2-6.367a.171.171 0 00-.02-.088l-5.36-8.803c-.037-.05-.037-.107 0-.169a.203.203 0 01.162-.106l6.182-.573a.16.16 0 01.16.074l2.2 3.629a.165.165 0 00.163.076.185.185 0 00.155-.105l2.456-4.061c.04-.064.093-.1.155-.105l6.181-.575c.07-.005.123.02.157.076a.154.154 0 010 .169zM27.57 28.75l-.162 5.121c0 .047-.02.087-.056.125a.195.195 0 01-.125.062l-4.316.4a.215.215 0 00-.13.065.174.174 0 00-.064.124L22.39 45.05a.186.186 0 01-.056.123.195.195 0 01-.124.062l-6.217.578a.182.182 0 01-.13-.039.133.133 0 01-.053-.113l.328-10.404a.14.14 0 00-.049-.113.152.152 0 00-.12-.04l-4.33.402a.15.15 0 01-.121-.04.142.142 0 01-.05-.113l.162-5.123a.204.204 0 01.058-.13.18.18 0 01.125-.067L27.4 28.587a.142.142 0 01.12.044.16.16 0 01.05.12zM45.57 30.562c-.756-1.222-1.84-2.127-3.253-2.715-1.413-.585-3.032-.795-4.862-.624-1.83.17-3.474.681-4.931 1.535-1.46.853-2.608 1.966-3.446 3.336-.839 1.371-1.284 2.885-1.337 4.544-.052 1.657.3 3.098 1.057 4.32.757 1.223 1.841 2.128 3.254 2.715 1.413.586 3.034.795 4.864.625 1.83-.17 3.472-.681 4.931-1.535 1.457-.853 2.605-1.964 3.444-3.336.839-1.37 1.284-2.885 1.336-4.544.052-1.657-.3-3.098-1.056-4.32zm-6.636 6.823c-.516.541-1.125.843-1.83.908-.702.066-1.297-.126-1.781-.573-.487-.447-.718-1.022-.695-1.723a2.77 2.77 0 01.779-1.88c.495-.524 1.114-.82 1.858-.89.743-.069 1.347.114 1.813.549.466.433.688 1.016.663 1.747-.022.701-.29 1.322-.807 1.862zM65.101 28.747c-.757-1.22-1.841-2.126-3.254-2.713-1.413-.587-3.034-.795-4.862-.625-1.83.17-3.474.682-4.933 1.535-1.457.854-2.605 1.965-3.444 3.336-.838 1.37-1.284 2.885-1.336 4.543-.052 1.659.3 3.1 1.057 4.322.756 1.223 1.84 2.128 3.254 2.713 1.412.587 3.034.795 4.864.627 1.828-.17 3.471-.684 4.93-1.535 1.458-.854 2.606-1.966 3.444-3.336.84-1.372 1.285-2.885 1.337-4.544.052-1.66-.3-3.1-1.057-4.323zm-6.636 6.824c-.517.54-1.126.843-1.83.909-.705.066-1.297-.126-1.784-.573-.484-.447-.715-1.022-.693-1.723.022-.731.283-1.36.779-1.883.496-.522 1.114-.818 1.858-.887.744-.07 1.347.113 1.813.546.466.435.688 1.017.664 1.748-.023.701-.291 1.322-.807 1.863zM83.815 23.514l-.501 15.888c-.004.105-.06.164-.17.174l-6.627.614c-.07.007-.117-.018-.137-.076l-2.121-4.324c-.023-.052-.058-.078-.11-.08a.206.206 0 00-.142.046.17.17 0 00-.067.131l-.14 4.399c-.003.105-.06.163-.17.174l-6.274.582c-.11.01-.162-.037-.158-.144l.5-15.886c.003-.114.06-.176.17-.185l6.827-.635c.078-.007.132.021.16.087l1.905 4.142c.022.05.057.076.108.08a.203.203 0 00.142-.047.168.168 0 00.068-.131l.133-4.195a.187.187 0 01.056-.124.195.195 0 01.124-.062l6.264-.582c.11-.01.164.04.16.154z"
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

export const EposidesIcon = () => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 4H21.5V6H8.5V4ZM5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5ZM5 13.5C4.60218 13.5 4.22064 13.342 3.93934 13.0607C3.65804 12.7794 3.5 12.3978 3.5 12C3.5 11.6022 3.65804 11.2206 3.93934 10.9393C4.22064 10.658 4.60218 10.5 5 10.5C5.39782 10.5 5.77936 10.658 6.06066 10.9393C6.34196 11.2206 6.5 11.6022 6.5 12C6.5 12.3978 6.34196 12.7794 6.06066 13.0607C5.77936 13.342 5.39782 13.5 5 13.5ZM5 20.4C4.60218 20.4 4.22064 20.242 3.93934 19.9607C3.65804 19.6794 3.5 19.2978 3.5 18.9C3.5 18.5022 3.65804 18.1206 3.93934 17.8393C4.22064 17.558 4.60218 17.4 5 17.4C5.39782 17.4 5.77936 17.558 6.06066 17.8393C6.34196 18.1206 6.5 18.5022 6.5 18.9C6.5 19.2978 6.34196 19.6794 6.06066 19.9607C5.77936 20.242 5.39782 20.4 5 20.4ZM8.5 11H21.5V13H8.5V11ZM8.5 18H21.5V20H8.5V18Z" fill="white"></path>
    </svg>
  )
}