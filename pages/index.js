import React from "react";
import Link from "next/link";
export default function Index() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
}
