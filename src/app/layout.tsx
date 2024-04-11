import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  FaSignal,
  FaRegNewspaper,
  FaFileLines,
  FaChartLine,
  FaPenToSquare,
  FaCalendarDay,
  FaChartPie,
} from "react-icons/fa6";
import Sidebar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import Providers from "@/components/Providers/Providers";

interface MenuItem {
  name: string;
  title: string;
  icon: any;
  url: string;
}

const menuItems: MenuItem[] = [
  { name: "plan", title: "Fake plan", icon: <FaChartPie />, url: "/plan" },
  {
    name: "news",
    title: "Noticias",
    icon: <FaRegNewspaper />,
    url: "/",
  },
  {
    name: "markets",
    title: "Mercados",
    icon: <FaChartLine />,
    url: "/markets",
  },
  { name: "signals", title: "Señales", icon: <FaSignal />, url: "/signals" },
  {
    name: "courses",
    title: "Cursos",
    icon: <FaPenToSquare />,
    url: "/courses",
  },
  { name: "blogs", title: "Blog", icon: <FaFileLines />, url: "/blog" },
  { name: "events", title: "Eventos", icon: <FaCalendarDay />, url: "/events" },
];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FakeMoney",
  description: "Best trading and financial markets academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex bg-zinc-950">
          <Sidebar menuItems={menuItems} />
          <div className="min-h-screen w-full">
            <Header name="Andres Castilla" notifications={3} />
            <main className="flex-grow pb-4 px-4">
              <Providers>{children} </Providers>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
