import Link from "next/link";

export default function Page1() {
  return (
    <div>
      <p>Page 1</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
