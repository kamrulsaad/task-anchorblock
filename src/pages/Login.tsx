import { useForm } from "react-hook-form";
import { LoginFormType, loginResolver } from "../schemas/users";
import { toast } from "sonner";
import Input from "../components/ui/inputs/Input";
import SubmitButton from "../components/ui/buttons/SubmitButton";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: loginResolver,
  });

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (values: LoginFormType) => {
    toast.loading("Logging in...");
    try {
      const response = await login({ ...values }).unwrap();
      if (response?.token) {
        navigate(state?.from ? state.from : "/dashboard", { replace: true });
        toast.success("Login successfully");
      }
      //eslint-disable-next-line
    } catch (err: any) {
      toast.error(err.data?.error || 'Invalid credentials');
    }
  };
  return (
    <div
      style={{
        borderRadius: "16px",
        border: "1px solid #EEE",
        boxShadow:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
      }}
      className="w-full max-w-md bg-white rounded-lg p-16 mb-4"
    >
      <div className="flex mb-6 gap-2 items-center justify-start">
        <div>
          <img src="assets/logo.png" alt="LOGO" />
        </div>
        <h1 className="text-[#4E5D78] text-3xl font-bold">Stack</h1>
      </div>
      <h6 className="text-[#404040] mb-6 text-xl font-semibold leading-normal">
        Sign In to continue with Stack
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <Input
            name="email"
            label="Email address"
            type="text"
            placeholder="example@emaple.com"
            register={register}
            error={errors?.email?.message}
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-6">
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="***********"
            register={register}
            error={errors?.password?.message}
            disabled={isSubmitting}
          />
        </div>
        <SubmitButton
          type="submit"
          text="Sign in"
          disabled={isSubmitting || isLoading}
        />
      </form>
      <p className="mt-6 text-[#B0B7C3]">
        Don't have an account? <Link className="text-[#377DFF]" to={"/register"}>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
