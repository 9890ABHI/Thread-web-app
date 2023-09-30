"use client";

import Link from "next/link";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/clerk-react";
import { useAuth } from "@clerk/nextjs";
const LeftSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();
  return (
    <>
      <section className="custom-scrollbar leftsidebar">
        <div className="flex w-full flex-1 flex-col gap-6 px-6">
          {sidebarLinks.map((item, i) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            if (item.route === "/profile")
              item.route = `${item.route}/${userId}`;
            return (
              <>
                <Link
                  href={item.route}
                  key={i}
                  className={`leftsidebar_link ${
                    isActive && "bg-[#4380b1] hover:bg-[#4380b1da]"
                  }`}
                >
                  <Image src={item.imgURL} width={24} height={24} alt="" />
                  <p className="text-light-1 max-lg:hidden">{item.label}</p>
                </Link>
              </>
            );
          })}
        </div>
        <div className="mt-10 px-6">
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push("/sign-in")}>
              <div className="flex cursor-pointer gap-4 p-4">
                <Image
                  src={"assets/logout.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-light-2 max-lg:hidden"> LogOut</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </section>
    </>
  );
};

export default LeftSideBar;
