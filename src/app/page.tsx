import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowRight,
  LogIn,
  LayoutDashboard,
  UserRoundPlus,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import DetailsFooter from "@/components/DetailsFooter";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();
  const isAuth = !!userId;

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              {isAuth ? (
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center">
                    <h1 className="text-4xl font-semibold">
                      Hi {user?.firstName}
                    </h1>{" "}
                    <div className="ml-2">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-medium">
                      It&apos;s great to have you here. Enjoy your discounts
                      today!
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="text-5xl font-semibold">
                    Fly With Kite - Elevate Life
                  </h1>
                  <div className="mt-2 text-xl">
                    <p>
                      Awaiting plenty of discounts on your fingers. Join us
                      today!
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="gap-4 flex mt-5">
              <div>
                {" "}
                {isAuth ? (
                  <Link href="/dashboard">
                    <Button>
                      Dashboard
                      <LayoutDashboard className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Link href="/sign-in">
                    <Button>
                      Log in
                      <LogIn className="w-4 h-4 ml-2"></LogIn>
                    </Button>
                  </Link>
                )}
              </div>
              <div>
                {" "}
                {!isAuth && (
                  <Link href="/sign-up">
                    <Button>
                      Sign up
                      <UserRoundPlus className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsFooter />
    </>
  );
}
