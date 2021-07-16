import React from 'react';
import { Svg, Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

interface IProps {
  color?: string;
}

const HomeOutlined = ({ color }: IProps) => {
  const width = 20;
  const height = 20;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <G clip-path="url(#clip0)">
        <Path fill={color} d="M19.8633 18.8125L14.8242 13.7734C14.7344 13.6836 14.6172 13.6367 14.4922 13.6367H14.0898C15.4297 12.1875 16.25 10.2539 16.25 8.125C16.25 3.63672 12.6133 0 8.125 0C3.63672 0 0 3.63672 0 8.125C0 12.6133 3.63672 16.25 8.125 16.25C10.2539 16.25 12.1875 15.4297 13.6367 14.0937V14.4922C13.6367 14.6172 13.6875 14.7344 13.7734 14.8242L18.8125 19.8633C18.9961 20.0469 19.293 20.0469 19.4766 19.8633L19.8633 19.4766C20.0469 19.293 20.0469 18.9961 19.8633 18.8125ZM8.125 15C4.32422 15 1.25 11.9258 1.25 8.125C1.25 4.32422 4.32422 1.25 8.125 1.25C11.9258 1.25 15 4.32422 15 8.125C15 11.9258 11.9258 15 8.125 15Z" />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect  width="20" height="20" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default HomeOutlined;