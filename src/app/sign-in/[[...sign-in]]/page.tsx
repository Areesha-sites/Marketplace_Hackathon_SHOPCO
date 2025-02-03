// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function SignInPage({ searchParams }: { searchParams: { redirect_url: string } }) {
  const { redirect_url } = searchParams;

  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn afterSignInUrl={redirect_url || '/'} />
    </div>
  );
}