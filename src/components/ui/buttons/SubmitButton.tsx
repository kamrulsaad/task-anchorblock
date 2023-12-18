import { Loader } from 'lucide-react'

interface ISlideButtonProps {
  type: 'submit' | 'reset' | 'button'
  text: string
  disabled: boolean
}

const SubmitButton: React.FunctionComponent<ISlideButtonProps> = (props) => {
  const { type, text, disabled } = props
  return (
    <button
      type={type}
      disabled={disabled}
      className='relative w-full inline-flex items-center justify-center px-8 py-3 mt-4 overflow-hidden font-medium bg-[#6941C6] transition duration-300 ease-out border-2 rounded-lg group text-white'
    >
      {disabled ? <Loader color='black' size={15} /> : <>{text}</>}
    </button>
  )
}

export default SubmitButton
