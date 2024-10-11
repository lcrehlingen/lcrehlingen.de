import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";
import DefaultNavbar from "./components/shared/navbar/DefaultNavbar";
import Footer from "./components/shared/footer/Footer";
import { Provider } from "react-wrap-balancer";
import GoTop from "./components/GoTop";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LC Rehlingen</title>
        <meta name="description" content="Leichtathletik Club Rehlingen e.V." />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-1 flex-col">
        <Provider>
          <DefaultNavbar />
          {children}
          <GoTop />
          <ScrollRestoration />
          <Scripts />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
