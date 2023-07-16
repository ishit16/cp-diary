import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { DashboardNavbar } from "../components/navbar/Navbar";
import { SideBar } from "../components/sidebar/sidebar";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <div className={PageLayoutContainer()}>
        <DashboardNavbar />
        <div className="flex">
          <SideBar />
          {children}
        </div>
      </div>
    </>
  );
};

const PageLayoutContainer = cva([
  "bg-purple-landing-page",
  "bg-repeat",
  "flex-col",
  "min-h-screen",
  "h-full",
]);
