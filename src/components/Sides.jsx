import { useContext, useEffect, useMemo } from "react";
import { TbBrandGithub, TbMail, TbBrandLinkedin } from "react-icons/tb";
import { GlobalContext } from "../context";
import Tooltip from "./Tooltip";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const { firstLoad, setFirstLoad } = useContext(GlobalContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLoad(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [setFirstLoad]);

  const sideContacts = useMemo(
    () => [
      {
        href: "https://github.com/NazSvn",
        label: "GitHub profile",
        icon: TbBrandGithub,
      },
      {
        href: "mailto:idler90@gmail.com",
        label: "Email me",
        icon: TbMail,
      },
      {
        href: "http://linkedin.com/in/emmanuel-idler-8b6a30227",
        label: "LinkedIn profile",
        icon: TbBrandLinkedin,
      },
    ],
    [],
  );

  return (
    <>
      <div
        className={`invisible fixed bottom-0 left-5 w-10 transform content-center text-center transition md:visible lg:left-10 ${
          firstLoad ? "opacity-0" : "opacity-100"
        } delay-1000 duration-1000 ease-in-out`}
      >
        <ul className="flex flex-col items-center justify-center text-[#e1e0e0d2] after:mx-0 after:my-auto after:block after:h-[100px] after:w-[1px] after:bg-[#45CB85]">
          {sideContacts.map(({ href, label, icon: IconComponent }) => (
            <li className="relative mb-4" key={href}>
              <Tooltip text={label} position="bottom">
                <SocialLinks
                  href={href}
                  label={label}
                  icon={IconComponent}
                  aClass={
                    "inline-block focus-visible:-translate-y-1 focus-visible:rounded-sm focus-visible:text-[#45CB85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] focus-visible:transition-all focus-visible:duration-300 focus-visible:ease-in-out"
                  }
                  icnClass={
                    "m-1 inline size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-[#45CB85]"
                  }
                />
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Contact;
