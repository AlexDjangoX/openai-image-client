import { useRef } from 'react';

export const useClipboard = () => {
  const imageRef = useRef(null);

  const copyToClipboard = () => {
    const src = imageRef.current.getAttribute('src');
    navigator.clipboard.writeText(src);
    alert('Image URL copied to clipboard');
  };

  return {
    ref: imageRef,
    onClick: copyToClipboard,
  };
};
