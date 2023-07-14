/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/features/user/UserSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

type Inputs = {
  email: string;
  password: string;
  example: string;
  exampleRequired: string;
};
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  console.log(watch("example")); // watch input value by passing the name of it
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading]);

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 mx-auto my-10">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-400">
          Sign in to access your account
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              {...register("email", { required: true })}
            />
            {errors.email && <p>Email is required</p>}
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Password is required</p>}
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Sign Up
              {isLoading ? "Signing up..." : "Sign up"}
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Do not have an account?{" "}
            <Link to="/signup" className="hover:underline dark:text-violet-400">
              Sign in
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
