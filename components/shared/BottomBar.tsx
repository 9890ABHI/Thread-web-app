"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const BottomBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <section className="bottombar">
        <div className="bottombar_container">
          {sidebarLinks.map((item, i) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <>
                <Link
                  href={item.route}
                  key={i}
                  className={`bottombar_link ${isActive && "bg-primary-500"}`}
                >
                  <Image src={item.imgURL} width={24} height={24} alt="" />
                  <p className="text-subtle-medium text-light-1 max-sm:hidden">
                    {item.label.split(/\s+./)[0]}
                  </p>
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BottomBar;
