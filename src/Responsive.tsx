import { useMediaQuery } from 'react-responsive';

export const isMobile = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMediaQuery({
    query: `(max-width: 768px)`,
  });
};

export const isMobilePortrait = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMediaQuery({
    query: `(max-width: 450px)`,
  });
};

export const isTablet = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMediaQuery({
    query: `(max-width: 1024px) and (min-width: 769px)`,
  });
};
