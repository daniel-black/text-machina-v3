import SignInButton from "@/components/auth/sign-in-button";
import SignOutButton from "@/components/auth/sign-out-button";

export default function LandingPage() {
  return (
    <div className="h-full py-10 space-y-5 flex flex-col items-center">
      <h1 className="text-4xl">Text Machina</h1>
      <SignInButton />
      <SignOutButton />
    </div>
  );
}