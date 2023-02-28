import toast from "react-hot-toast";

export const loginSuccessNotify = () => toast.success("Login Successful!");
export const serverResponseError = () => toast.error("No Response from Server");
export const missingUsernamePwdError = () => toast.error("Missing Username or Password");
export const unauthorizedUserError = () => toast.error("Account doesn't exist");
export const loginFailedError = () => toast.error("Login failed!")