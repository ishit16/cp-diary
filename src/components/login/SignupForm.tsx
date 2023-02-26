import { Link } from "react-router-dom";

export const SignupForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            id="username"
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <input
            id="password"
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
          />
        </div>

        <div className="mb-6">
          <input
            id="password"
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Confirm Password"
          />
        </div>

        <Link
          type="submit"
          className="inline-block text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          to={"/dashboard"}
        >
          Sign Up
        </Link>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0 text-white">OR</p>
        </div>
      </form>
    </>
  );
};
