"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpDefaultValues } from "@/lib/constants";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Submitting..." : "Submit"}
      </Button>
    );
  };
  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={signUpDefaultValues.name}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="Email"
            defaultValue={signUpDefaultValues.email}
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
            defaultValue={signUpDefaultValues.password}
            required
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="confirmPassword"
            defaultValue={signUpDefaultValues.confirmPassword}
            required
          />
        </div>

        <div>
          <SignUpButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Already have an account ?
          <Link href="/sign-in" target="_self" className="link">
            Sign In
          </Link>
          `
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
