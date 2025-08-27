import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center p-8 sm:p-20 font-sans">
      <main className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Welcome to Sadiq&rsquo;s corner of the internet
          <Image width={100} height={100} src="/room-1.jpg" alt="Room 1" />
        </h1>
        <Link href="/writings">Read my writings</Link>
      </main>
    </div>
  );
}
