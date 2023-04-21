import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "../ActiveLink/ActiveLink";
import { sideBarLinks } from "../../lib/SidebarLinks";
import Select from "../FormElements/Select/Select";

const Sidebar = () => {
  return (
    <Fragment>
      <aside className="flex flex-col fixed h-screen w-[240px] border-0 border-r-2 border-solid border-r-[#9a9fbf33]">
        {
          <ul className="flex flex-col list-none ml-4 px-0">
            <li className="mb-2.5 ml-2.5 font-semibold">
              <Link href="/dashboard">
                <Image
                  src="/logo@newDesign.png"
                  width={118.33}
                  height={30}
                  alt="App Logo"
                />
              </Link>
            </li>

            <li className="mb-2.5 ml-2.5 font-semibold">
              <Select label="Business">
                <option>Kongapay</option>
              </Select>
            </li>

            {sideBarLinks.map((link, idx) => {
              const { href, mainIcon, activeIcon, title } = link;
              return (
                <li key={idx} className="mb-2.5 font-semibold">
                  <ActiveLink
                    href={href}
                    mainIcon={mainIcon}
                    activeIcon={activeIcon}
                    title={title}
                  ></ActiveLink>
                </li>
              );
            })}
          </ul>
        }
      </aside>
    </Fragment>
  );
};

export default Sidebar;
