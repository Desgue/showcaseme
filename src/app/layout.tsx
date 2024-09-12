import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { metadata } from "./metadata";

import { TRPCReactProvider } from "~/trpc/react";

export{metadata}


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
