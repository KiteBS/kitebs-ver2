import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Page() {
  const { userId } = await auth();
  const user = await currentUser();
  const isAuth = !!userId;
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mt-10">
              <div>
                {" "}
                {isAuth && (
                  <div>
                    <h1 className="text-4xl font-semibold">
                      Hi {user?.firstName}
                    </h1>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
      <DetailsFooter />
    </>
  );
}
