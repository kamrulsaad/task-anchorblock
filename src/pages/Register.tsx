import { useForm } from 'react-hook-form'
import {  RegisterFormType,  registerResolver } from '../schemas/users'
import { toast } from 'sonner'
import zxcvbn from 'zxcvbn'
import Input from '../components/ui/inputs/Input'
import SubmitButton from '../components/ui/buttons/SubmitButton'
import { useRegisterUserMutation } from '../redux/features/auth/authApi'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
const Register = () => {
  const [passwordScore, setPasswordScore] = useState(0)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormType>({
    resolver: registerResolver,
  })

  const [registerUser, { isLoading }] = useRegisterUserMutation()

  const onSubmit = async (values: RegisterFormType) => {
    toast.loading('Registering...')
    try {
      const response = await registerUser({ ...values }).unwrap()
      if (response.id) {
        navigate('/')
        toast.success('Register successfully')
        reset()
      }
      //eslint-disable-next-line
    } catch (err: any) {
      toast.error(err.data?.error || 'Invalid credentials')
    }
  }
  const validatePasswordStrength = () => {
    //eslint-disable-next-line
    let password= watch().password
    return zxcvbn(password ? password : '').score
  }
  useEffect(() => {
    setPasswordScore(validatePasswordStrength())
  }, [watch().password])
  return (
    <div
      style={{
        borderRadius: '16px',
        border: '1px solid #EEE',
        boxShadow:
          '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
      }}
      className='w-full max-w-md bg-white rounded-lg p-16 mb-4'
    >
      <div className='flex mb-6 gap-2 items-center justify-start'>
        <div>
          <img src='assets/logo.png' alt='LOGO' />
        </div>
        <h1 className='text-[#4E5D78] text-3xl font-bold'>Stack</h1>
      </div>
      <h6 className='text-[#404040] mb-6 text-xl font-semibold leading-normal'>
        Sign up to join with Stack
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-6'>
          <Input
            name='email'
            label='Email address'
            type='text'
            placeholder='example@emaple.com'
            register={register}
            error={errors?.email?.message}
            disabled={isSubmitting}
          />
        </div>
        <div className='mb-6'>
          <Input
            name='password'
            label='Password'
            type='password'
            placeholder='***********'
            register={register}
            error={errors?.password?.message}
            disabled={isSubmitting}
          />
        </div>
        {watch().password?.length > 0 && (
          <div className='flex mt-2'>
            {Array.from(Array(5).keys()).map((_, i) => (
              <span className='w-1/5 px-1' key={i}>
                <div
                  className={`h-2 rounded-xl b ${
                    passwordScore <= 2
                      ? 'bg-red-400'
                      : passwordScore < 4
                      ? 'bg-yellow-400'
                      : 'bg-green-500'
                  }`}
                ></div>
              </span>
            ))}
          </div>
        )}
        <SubmitButton
          type='submit'
          text='Sign Up'
          disabled={isSubmitting || isLoading}
        />
      </form>
      <p className='mt-6 text-[#B0B7C3]'>
        Already have an account?{' '}
        <Link className='text-[#377DFF]' to={'/register'}>
          Sign In
        </Link>
      </p>
    </div>
  )
}

export default Register
