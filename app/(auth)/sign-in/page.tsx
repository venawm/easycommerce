import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import CredentialsSignInForm from "./credentials-sign-in-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async (props:{searchParams:Promise<{callbackUrl:string}>}) => {
  const {callbackUrl} = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <div className="w-[30em] mx-auto h-[100vh] flex justify-center items-center">
      <Card className="w-full">
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={100}
              width={100}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
