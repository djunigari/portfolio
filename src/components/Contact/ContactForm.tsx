'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { MdAlternateEmail } from 'react-icons/md'
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMessageFormData>({
    resolver: zodResolver(createMessageFormSchema),
  })

  const createUser = (data: any) => {
    JSON.stringify(data, null, 2)
  }

  return (
    <div className="">
      <h1 className="font-bold text-lg mb-2">Contact Me</h1>

      <form onSubmit={handleSubmit(createUser)}>
        <div>
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
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
            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            {...register('message')}
          ></textarea>
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <button className="btn btn-secondary self-end">Send</button>
      </form>

      <div className="divider">OR</div>
      <div className="flex flex-col text-center w-full mb-12">
        <MdAlternateEmail className="h-8 w-8" />
        <span>E-mail: igaridjun@gmail.com</span>

        <span>Phone: +81 080 5850 5729</span>
      </div>
    </div>
  )
}
