
"use client"; 
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
export default function Profile() {
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>; 
  }
  return (
    <div className='mt-56'>
      <h1>Profile</h1>
      <SignedIn>
        {user ? (
          <div>
            <p>Welcome, {user.firstName}!</p>
          </div>
        ) : (
          <p>No user data available.</p>
        )}
        <UserButton />
      </SignedIn>
      <SignedOut>
        <p>You must be signed in to view your profile.</p>
      </SignedOut>
    </div>
  );
}