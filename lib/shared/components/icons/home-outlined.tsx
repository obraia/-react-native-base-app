import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const HomeOutlined = ({ color }: IProps) => {
  const width = 20;
  const height = 18;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <Path fill={color} d="M19.8243 8.31791L17.7905 6.55603V1.64855C17.7905 1.50267 17.7319 1.36276 17.6277 1.25961C17.5234 1.15645 17.382 1.0985 17.2345 1.0985H13.8988C13.7514 1.0985 13.6099 1.15645 13.5057 1.25961C13.4014 1.36276 13.3428 1.50267 13.3428 1.64855V2.70568L10.373 0.135913C10.2717 0.0482903 10.1417 0 10.0071 0C9.87254 0 9.74254 0.0482903 9.64122 0.135913L0.189969 8.31791C0.0789676 8.41396 0.0110799 8.54971 0.00124019 8.69528C-0.00859953 8.84086 0.0404148 8.98434 0.137501 9.09416C0.234586 9.20399 0.371791 9.27115 0.51893 9.28089C0.66607 9.29062 0.811092 9.24213 0.922094 9.14608L2.22373 8.01779V15.9499C2.22419 16.3874 2.40005 16.8068 2.71274 17.1162C3.02543 17.4255 3.44939 17.5995 3.89159 17.6H16.1226C16.5648 17.5995 16.9888 17.4255 17.3015 17.1162C17.6142 16.8068 17.79 16.3874 17.7905 15.9499V8.01779L19.0921 9.14504C19.2038 9.23535 19.3465 9.27921 19.4902 9.26737C19.6339 9.25553 19.7673 9.18892 19.8623 9.0816C19.9573 8.97428 20.0064 8.83463 19.9993 8.69214C19.9922 8.54966 19.9295 8.41547 19.8243 8.31791ZM16.6786 15.9499C16.6786 16.0957 16.62 16.2356 16.5157 16.3388C16.4115 16.4419 16.2701 16.4999 16.1226 16.4999H3.89159C3.74414 16.4999 3.60274 16.4419 3.49847 16.3388C3.39421 16.2356 3.33564 16.0957 3.33564 15.9499V7.0552L10.0071 1.27967L16.6786 7.0552V15.9499ZM16.6786 5.59344L14.4548 3.66827V2.1986H16.6786V5.59344ZM7.22733 7.51586V11.183C7.22815 11.4258 7.32602 11.6585 7.49957 11.8302C7.67311 12.0019 7.90826 12.0987 8.15369 12.0995H11.8591C12.1048 12.099 12.3402 12.0023 12.5141 11.8305C12.6879 11.6588 12.786 11.426 12.7869 11.183V7.51586C12.7862 7.27274 12.6881 7.0398 12.5143 6.86798C12.3404 6.69616 12.1049 6.59945 11.8591 6.599H8.15369C7.90817 6.59973 7.67292 6.69657 7.49934 6.86837C7.32576 7.04016 7.22797 7.27295 7.22733 7.51586ZM8.33924 7.6991H11.675V10.9994H8.33924V7.6991Z" />
    </Svg>
  );
}

export default HomeOutlined;