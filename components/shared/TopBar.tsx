import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  // currentUser,
  // useAuth,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";
// import { fetchUser } from "@/lib/actions/user.actions";
const TopBar = async () => {
  // const user = await currentUser();
  // if (!user) return null;
  // const userInfo = await fetchUser(user.id);
  // // console.log(user);

  return (
    <>
      <nav className="topbar">
        <Link href={"/"} className="flex items-center gap-4">
          {/* <Image src={"/assets/logo.svg"} alt="logo" width={28} height={28} /> */}
          <p className="text-heading2-semibold text-light-1 max-xs:hidden bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent  bg-clip-text ">
            BirdThread
          </p>
        </Link>
        <div className="flex items-center gap-1">
          <div className="block md:hidden">
            <SignedIn>
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <Image
                    src={"assets/logout.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>

          <OrganizationSwitcher
            appearance={{
              baseTheme: dark,
              elements: { organizationSwitcherTrigger: "py-2 px-4" },
            }}
          ></OrganizationSwitcher>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
