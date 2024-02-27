import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import Plans from "@/components/Plans";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Page() {
  const { userId } = await auth();
  const user = await currentUser();
  const isAuth = !!userId;
  return (
    <>
      <NavBar />
      <div className="min-h-screen items-center bg-white mx-7">
        <Plans />
      </div>
      <DetailsFooter />
    </>
  );
}
