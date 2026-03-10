import React from 'react';

interface LogoProps {
  themeConfig: {
    logo: {
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    };
  };
}
export default function Logo({
  themeConfig: {
    logo: { src, alt = 'Zentrix', width = 128, height = 128 }
  }
}: LogoProps) {
  return (
    <div className="logo md:ml-0 flex justify-center items-center">
      {/* Forzamos el uso del logo local si el src viene vacío o si queremos sobreescribirlo temporalmente para debug.
          En producción, idealmente se usaría la configuración del tema. */}
      {src ? (
        <a href="/" className="logo-icon">
          <img src={src} alt={alt} width={width} height={height} />
        </a>
      ) : (
        <a href="/" className="logo-icon">
          <img
            src="/assets/logo.png?v=2"
            alt={alt}
            width={128}
            height={146}
            className="w-32 h-32"
          />
        </a>
      )}
    </div>
  );
}

export const layout = {
  areaId: 'headerMiddleCenter',
  sortOrder: 10
};

export const query = `
  query query {
    themeConfig {
      logo {
        src
        alt
        width
        height
      }
    }
  }
`;
