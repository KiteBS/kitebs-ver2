import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, LogIn, LayoutDashboard } from "lucide-react";
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
                <div>
                  <h1 className="mr-2 text-4xl font-semibold">
                    Hi {user?.firstName}
                  </h1>
                </div>
              ) : (
                <div>
                  <h1 className="mr-3 text-5xl font-semibold">
                    Elevate Life - Fly With Kite
                  </h1>
                  <div className="max-w-xl mt-2 text-xl">
                    <p>
                      Join millions of students, researchers, and professionals
                      to instantly understand PDFs
                    </p>
                  </div>
                </div>
              )}

              <UserButton afterSignOutUrl="/" />
            </div>

            <div className="flex">
              <div>
                {" "}
                {isAuth ? (
                  <Link href="/sign-in">
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
                      <LogIn className="w-4 h-4 ml-2"></LogIn>
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
