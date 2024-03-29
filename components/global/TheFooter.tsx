import React, { ReactNode } from "react";
import Email from "@/public/icons/email.svg";
import Instagram from "@/public/icons/instagram.svg";
import Twitter from "@/public/icons/twitter.svg";
import WhatsApp from "@/public/icons/whatsapp.svg";
import YouTube from "@/public/icons/youtube.svg";
import Discord from "@/public/icons/discord.svg";
import FacebookPage from "@/public/icons/facebook_page.svg";
import FacebookGroup from "@/public/icons/facebook_group.svg";

const TheFooter = () => {
  const icons: ReactNode[] = [
    Email,
    Instagram,
    FacebookPage,
    FacebookGroup,
    Discord,
    Twitter,
    WhatsApp,
    YouTube,
  ];

  return (
    <footer className="bottom-0 w-full mx-auto p-5 sm:px-0 md:py-8 footer">
      <div className="container text-center md:flex m-auto w-11/12 mx-auto py-10">
        <div className="block md:flex md:flex-column md:w-1/2 font-mm">
          MEPC © 2022
        </div>
        <div className="block md:flex md:flex-column md:w-1/2 md:justify-end">
          <div className="flex justify-center mt-3 md:mt-0">
            {icons.map((Icon: any) => {
              return <Icon key={Icon} className="mx-1 fill-primary" />;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
