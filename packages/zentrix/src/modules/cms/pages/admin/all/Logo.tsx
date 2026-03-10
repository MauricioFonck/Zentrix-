import React from 'react';

interface LogoProps {
  dashboardUrl: string;
}
export default function Logo({ dashboardUrl }: LogoProps) {
  return (
    <div className="logo w-16 h-auto flex items-center">
      <a href={dashboardUrl} className="flex items-end">
        <img
          src="/assets/logo.png?v=2"
          alt="Zentrix Admin Logo"
          width="256"
          height="282"
          className="w-14 h-auto"
        />
      </a>
    </div>
  );
}

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query query {
    dashboardUrl: url(routeId:"dashboard")
  }
`;
