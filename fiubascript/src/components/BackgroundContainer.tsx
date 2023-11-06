import React, { ReactElement } from 'react'
import { ReactNode } from 'react';
import background from '../assets/backgroundPadded.png';
import { COLORS } from '../constants/constants';

type BackgroundContainerProps = {
  children: ReactElement;
};

export const BackgroundContainer = ({ children } : BackgroundContainerProps) => {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundColor: COLORS.primaryDark,
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '1rem',
    }}>
      {children}
    </div>
  );
};

