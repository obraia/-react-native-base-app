import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const BellOutlined = ({ color }: IProps) => {
  const width = 13;
  const height = 15;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Path fill={color} d="M6.5 15C7.52491 15 8.35627 14.1606 8.35627 13.125H4.64373C4.64373 14.1606 5.47509 15 6.5 15ZM12.7501 10.614C12.1895 10.0058 11.1405 9.09082 11.1405 6.09375C11.1405 3.81738 9.55963 1.99512 7.42799 1.54805V0.9375C7.42799 0.419824 7.01245 0 6.5 0C5.98755 0 5.57201 0.419824 5.57201 0.9375V1.54805C3.44037 1.99512 1.85948 3.81738 1.85948 6.09375C1.85948 9.09082 0.810486 10.0058 0.249863 10.614C0.0757564 10.8029 -0.00143083 11.0288 2.00625e-05 11.25C0.00321202 11.7305 0.376671 12.1875 0.93149 12.1875H12.0685C12.6233 12.1875 12.9971 11.7305 13 11.25C13.0014 11.0288 12.9242 10.8026 12.7501 10.614V10.614Z" />
    </Svg>
  );
}

export default BellOutlined;