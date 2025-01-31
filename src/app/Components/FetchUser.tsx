import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
interface User {
  _id: string;
  name: string;
  email: string;
}
interface UsersProps {
  users: User[];
}
const query = groq`*[_type == "user"]{
_id,
 name,
 email
}`;
export async function getServerSideProps() {
  const users: User[] = await client.fetch(query);

  return {
    props: { users },
  };
}
export default function Users({ users }: UsersProps) {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
