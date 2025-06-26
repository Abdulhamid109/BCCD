"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface labdata {
  email: string;
  password: string;
}

export default function SignupFormDemo() {

  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [disable, setDisable] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setDisable(true);

    e.preventDefault();
    try {

      const response = await axios.post('/api/auth/login', data);
      if (response.status === 200) {
        setMessage("Successfully Logged in...");
        router.push('/labs/pages/homepage');
        toast.success('Successfully logged in...');
      } else if (response.status === 400) {
        setMessage('Invalid Credentials');
      } else if (response.status === 404) {
        setMessage('Account does not exists');
      }
      console.log("Form submitted");
    } catch (error) {
      console.log('error ', error)
      setError("Something went wrong! Try again.");
    } finally {
      setLoading(false);
      setDisable(false);
    }
  };

  const [data, setdata] = useState<labdata>({
    email: "",
    password: "",
  });
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setdata(values => ({ ...values, [name]: value }));
  }


  return (
    <div className="shadow-input top-10 relative hover:bg-gradient-to-tl from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] mx-auto h-[80%] w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">

      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome back to BCCD
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Login to BCCD for accessing the features
      </p>

      <form className="my-8" onSubmit={handleSubmit}>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address of Laboratory</Label>
          <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" value={data.email} onChange={onchange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" placeholder="••••••••" type="password" value={data.password} onChange={onchange} />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={disable}
        >

          {loading ? "Processing..." : "Login"}
          <BottomGradient />
        </button>

        {message && <p className='text-green-400 mt-4 font-medium animate-fade-in'>{message}</p>}
        {error && <p className='text-red-400 mt-4 font-medium animate-fade-in'>{error}</p>}

        <div className="text-sm font-light tracking-tight text-center text-zinc-400 p-4">
          Don&apos;t have an account ? <Link className="text-blue-600 underline" href={'/labs/auth/signup'}>Signup</Link>
        </div>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />


      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
