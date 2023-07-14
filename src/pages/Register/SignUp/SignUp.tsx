/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createUser } from "../../../redux/features/user/UserSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

interface SignupFormInputs {
  email: string;
  password: string;
}
type Inputs = {
  email: string;
  password: string;
  example: string;
  exampleRequired: string;
};

export default function SignUp() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await dispatch(createUser({ email: data.email, password: data.password }));
  };

  console.log(watch("example"));
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 mx-auto my-10">
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
            Already have an account?{" "}
            <Link to="/signin" className="hover:underline dark:text-violet-400">
              Sign in
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
