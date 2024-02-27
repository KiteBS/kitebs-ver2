import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mt-10">
              <SignIn afterSignInUrl="/" />
            </div>
          </div>
        </div>
      </div>
      <DetailsFooter />
    </>
  );
}
