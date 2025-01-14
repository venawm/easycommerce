import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority
      />
      <div className="p-6 rounded-l  text-center w-1/3">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Cound Not Find Requested Page</p>
        <Link href="/">Back To Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
