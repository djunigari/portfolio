'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { BsTelephone } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import { z } from 'zod'

const createMessageFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((world) => {
          return world[0].toUpperCase().concat(world.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .nonempty('E-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  message: z.string().nonempty('Messagem é obrigatória'),
})

type CreateMessageFormData = z.infer<typeof createMessageFormSchema>

export function ContactForm() {
  const t = useTranslations('layout.contact')
  const [isPending, startTransition] = useTransition()
  const notify = () => toast.success(t('emailSentSuccessfully'))

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateMessageFormData>({
    resolver: zodResolver(createMessageFormSchema),
  })

  const sendMessage = async (data: any) => {
    startTransition(async () => {
      const url = '/api/send-email'
      const response = await axios.post(url, data)
      if (response.status === 200) {
        console.log(response.data)
        reset()
        notify()
      } else console.error('SendMessageError', response.data)
    })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="">
        <h1 className="font-bold text-lg mb-2">Contact Me</h1>

        <form onSubmit={handleSubmit(sendMessage)}>
          <div>
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              {...register('name')}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              {...register('message')}
            ></textarea>
            {errors.message && <span>{errors.message.message}</span>}
          </div>

          <button disabled={isPending} className="btn btn-secondary self-end">
            {isPending ? (
              <span className="loading loading-dots loading-xs"></span>
            ) : (
              t('send')
            )}
          </button>
        </form>

        <div className="divider">OR</div>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2">
            <MdAlternateEmail className="h-4 w-4" />
            <span>igaridjun@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <BsTelephone className="h-4 w-4" />
            <span>+81 080 5850 5729</span>
          </div>
        </div>
      </div>
    </>
  )
}
