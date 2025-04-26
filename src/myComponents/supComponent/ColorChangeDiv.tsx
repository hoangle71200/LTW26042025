import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// const ColorChangeDiv = ({ initialColor, hoverColor, size, children }) => {
//   const [color, setColor] = useState(initialColor);
//
//   return (
//     <div
//       style={{
//         width: size,
//         height: size,
//         backgroundColor: color,
//         transition: 'background-color 0.3s',
//       }}
//       onMouseEnter={() => setColor(hoverColor)}
//       onMouseLeave={() => setColor(initialColor)}
//     >
//       {children}
//     </div>
//   );
// };
const ColorChangeDiv = ({link, children}) => {
  const [color, setColor] = useState('white');
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      onClick={() => navigate(link)}
      onMouseEnter={() => setColor('#d9d9d9')}
      onMouseLeave={() => setColor('white')}
    >
      {children}
    </div>
  );
};
export default ColorChangeDiv;