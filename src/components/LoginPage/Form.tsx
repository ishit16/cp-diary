import { useState } from "react";

export const Form = () => {
  const [selectCreateAccount, setSelectCreateAccount] = useState(false);

  const handleCreateAccount = () => {
    setSelectCreateAccount(true);
  };

  const handleExistingAccount = () => {
    setSelectCreateAccount(false);
  };

  return (
    <>
      {selectCreateAccount ? (
        <span
          onClick={handleExistingAccount}
          className="font-ubuntu md:text-xl text-blue-300 py-3 md:py-6"
        >
          Login with existing account
        </span>
      ) : (
        <span
          onClick={handleCreateAccount}
          className="font-ubuntu md:text-xl text-blue-300 py-3 md:py-6"
        >
          Create new Account
        </span>
      )}

      <form>
        <div className="flex flex-col gap-y-4">
          <input
            type="text"
            className="form-control w-3/4 px-4 py-4 text-slate-900 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-md focus:text-gray-50 focus:outline-none"
            placeholder="Username"
          />
          <input
            type="password"
            className="form-control w-3/4 px-4 py-4 text-slate-900 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-lg focus:text-gray-50 focus:outline-none"
            placeholder="Password"
          />
          {!selectCreateAccount ? (
            <input
              type="text"
              className="form-control w-3/4 px-4 py-4 text-slate-900 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-lg focus:text-gray-50 focus:outline-none"
              placeholder="Codeforces Handle"
            />
          ) : (
            <input
              type="password"
              className="form-control w-3/4 px-4 py-4 text-slate-900 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-lg focus:text-gray-50 focus:outline-none"
              placeholder="Confirm Password"
            />
          )}
        </div>
      </form>
      <div className="flex flex-row gap-x-4 items-center">
        {!selectCreateAccount ? (
          <button className="bg-[#EF087A] w-fit font-roboto md:text-lg px-8 py-2 mt-8 text-white font-bold rounded-xl">
            Login
          </button>
        ) : (
          <button className="bg-[#EF087A] w-fit font-roboto md:text-lg px-8 py-2 mt-8 text-white font-bold rounded-xl">
            Create Account
          </button>
        )}
        <span className="md:text-xl font-ubuntu text-blue-300 mt-8">
          {!selectCreateAccount && <span>Forgot Password</span>}
        </span>
      </div>
    </>
  );
};
