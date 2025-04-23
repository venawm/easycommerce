"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Signing in..." : "Sign in"}
      </Button>
    );
  };
  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl}/>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="Email"
            defaultValue={signInDefaultValues.email}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
            required
          />
        </div>

        <div>
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Dont have an account ?
          <Link href="/sign-up" target="_self" className="link">
            Sign Up
          </Link>
          `
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
