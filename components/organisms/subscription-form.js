import { useForm } from "react-hook-form"
import { useState } from 'react'
import { toast } from 'react-toastify'

function SubscriptionForm() {
  const { register, handleSubmit, watch, errors, reset } = useForm()
  const [disabled, setDisabled] = useState(false)
  const settingsToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'bg-white',
    bodyClassName: "text-gray-900 pl-4 font-bold font-poppins text-sm",
  }

  const onSubmit = async (data) => {
    setDisabled(true)   
    fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${process.env.NEXT_PUBLIC_BUTTONDOWN_KEY}`,
      },
      body: JSON.stringify(data)
    }).then(() => {
       reset()
       setDisabled(false)
       toast('🎉 Thank you for subscribing! Check your email to confirm.', settingsToastOptions)
    }).catch((err) => {
       toast('Something went wrong. Try again later.', {...settingsToastOptions, bodyClassName: "text-red-500 pl-4 font-bold font-poppins text-sm"})
    })
   
  }

  return(
    <>
    {errors.email && <p className="text-red-600 text-sm py-2 font-bold" role="alert">{errors.email.message}</p>}
    <form className="md:space-x-2 pb-4" onSubmit={handleSubmit(onSubmit)}>
      <input name="email"
        ref={register({
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email format"
          }
        })}
        type="email" placeholder="you@email.com" className="w-full md:w-auto .bg-gray-200 .rounded-full py-2 px-8 border-4 border-gray-300"/>
      <button disabled={disabled} type="submit" className="w-full md:w-auto bg-gray-900 text-white py-2 px-4 .rounded-full mt-2 hover:bg-gray-700 border-4 hover:border-gray-700 border-gray-900 font-bold hover">{disabled === true ? 'Subscribing ...' : 'Subscribe'}</button>
    </form>
    </>
  )
}

export default SubscriptionForm 