import metamaskSvg from "./_assets/metamask";
import phantomSvg from "./_assets/phantom";

const WalletConnectPage = () => {
  return (
    <div className="font-poppins flex min-h-screen flex-col items-center justify-center px-8 py-5">
      <div className="w-full max-w-md rounded-lg bg-white p-3 dark:border dark:border-gray-700 dark:bg-[#09090B] dark:p-5">
        <h1 className="mb-8 text-3xl capitalize">Connect Your Wallet</h1>
        <button className="mb-4 flex w-full items-center justify-start rounded-md border-[1.5px] border-black p-3 dark:border-gray-700">
          {phantomSvg()}
          <span className="ml-3">Phantom</span>
        </button>
        <button className="mb-4 flex w-full items-center justify-start rounded-md border-[1.5px] border-black p-3 dark:border-gray-700">
          {metamaskSvg()}
          <span className="ml-3">Metamask</span>
        </button>
        <button className="flex w-full items-center justify-start rounded-md border-[1.5px] border-black p-3 dark:border-gray-700">
          {metamaskSvg()}
          <span className="ml-3">Solfare</span>
        </button>
        <button className="font-poppins mt-3 w-full rounded-md bg-black p-3 text-white dark:bg-white dark:text-black">
          Connect
        </button>
        <div className="mt-4 flex justify-between">
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
              className="text-sm font-light text-black hover:underline dark:text-white"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="mt-[20%] text-sm">
          <p className="text-center font-light text-black dark:text-white">
            Don&apos;t have an account?{" "}
            <a className="cursor-pointer text-inherit underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectPage;
