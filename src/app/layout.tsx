"use client";

import { LensConfig, LensProvider, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DownloadApp from "@/components/DownloadApp";
import { useEffect, useState } from "react";
import detectDeviceType from "@/utils/getDeviceType";

const { publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, polygon],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({
      options: {
        shimDisconnect: false,
      },
    }),
  ],
});

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: production,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const deviceType = detectDeviceType();
    if (deviceType === "Desktop") {
      setIsDesktop(true);
    }
  }, []);

  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <LensProvider config={lensConfig}>
          <body>
            <Navbar />
            {children}
            {isDesktop ? <DownloadApp /> : null}
          </body>
        </LensProvider>
      </WagmiConfig>
    </html>
  );
}
