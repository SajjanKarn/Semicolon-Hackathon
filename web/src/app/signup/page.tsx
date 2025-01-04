const SignupPage = () => {
  return (
    <div className="font-poppins flex min-h-screen flex-col items-center px-8 py-5">
      <div className="mt-[10%] w-full max-w-sm rounded-lg">
        <h1 className="font-poppins mb-8 text-3xl capitalize">
          Connect your wallet
        </h1>
        <div className="flex flex-col gap-y-[0.5rem]">
          <label className="font-poppins text-sm font-light">
            Email or Wallet ID
          </label>
          <input
            type="text"
            // placeholder="Email or Wallet ID"
            className="font-poppins mb-4 w-full rounded-md border-[1.5px] border-black p-3 text-black outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-[0.5rem]">
          <label className="font-poppins text-sm font-light">Password</label>
          <input
            type="password"
            // placeholder="Password"
            className="font-poppins mb-4 w-full rounded-md border-[1.5px] border-black p-3 text-black outline-none"
          />
        </div>
        <button className="font-poppins w-full rounded-md bg-black p-3 text-white dark:bg-white dark:text-black">
          Connect
        </button>

        <div className="mt-3 flex justify-between">
          <div>
            <input
              type="checkbox"
              id="remember"
              className="mr-2 border-[2px] border-black"
            />
            <label htmlFor="remember" className="font-light">
              Remember Me
            </label>
          </div>

          <div>
            <a
              href="#"
              className="text-sm font-light text-black hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="mt-[30%] text-sm">
          <p className="text-center font-light text-black dark:text-white">
            Don&apos;t have an account?{" "}
            <a className="cursor-pointer text-inherit underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
