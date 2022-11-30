import React from 'react';
import Image from "next/image";

export default function NextImage({ src, alt, ...rest }) {
  return (
    <Image
      alt={alt}
      src={src}
      {...rest}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}