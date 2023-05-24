'use client';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { parse, isDate } from 'date-fns';
import * as yup from 'yup';
import Image from 'next/image';

export const validatePassword = (value) => {
  if (value === undefined) return false;

  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{6,}$/.test(
    value
  );
};

const schema = yup.object({
  first_name: yup.string().required('First name is a required field!'),
  last_name: yup.string().required('Last name is a required field!'),
  email_phone: yup.string().required('Please input an email or phone number'),
  dob: yup
    .date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('please enter a valid date')
    .required()
    .min('1969-11-13', 'Date is too early'),
  // dob: yup.date().required('Date of birth is a required field!'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
    .test(
      'one-uppercase character special character and a number',
      'Password must contain at least one uppercase letter, one special character and one number',
      (value) => validatePassword(value)
    ),
  confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function Form() {
  const contactForm = useRef();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form ref={contactForm} onSubmit={handleSubmit()}>
      <fieldset>
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col py-1">
            <label htmlFor="first_name" className="text-md">
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="border-2 p-3 rounded-[5px] border-gray-300"
              name="first_name"
              {...register('first_name')}
            />
            <span className="text-red-600 pt-1 text-xs">{errors.first_name?.message}</span>
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="last_name" className="text-md">
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="border-2 rounded-[5px] p-3 border-gray-300"
              name="last_name"
              {...register('last_name')}
            />
            <span className="text-red-600 pt-1 text-xs">{errors.last_name?.message}</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full ">
          <div className="flex flex-col py-1">
            <label htmlFor="email_phone" className="text-md">
              Email or phone number
            </label>
            <input
              type="text"
              className="border-2 rounded-[5px] p-3 border-gray-300"
              id="email_phone"
              name="email_phone"
              {...register('email_phone')}
            />
            <span className="text-red-600 pt-1 text-xs">{errors.email_phone?.message}</span>
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="dob" className="text-md">
              Date of birth <span className="text-xs">(MM/DD/YY)</span>
            </label>
            <input
              placeholder="Date of birth"
              type="date"
              id="dob"
              className="border-2 rounded-[5px] p-3 border-gray-300"
              name="dob"
              {...register('dob')}
            />
            <span className="text-red-600 pt-1 text-xs">{errors.dob?.message}</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col py-1">
            <label htmlFor="password" className="text-md">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-2 rounded-[5px] p-3 border-gray-300"
              name="password"
              {...register('password')}
            />
            <span className="text-red-600 pt-1 text-xs">{errors.password?.message}</span>
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="confirm_password" className="text-md">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="border-2 rounded-[5px] p-3 border-gray-300"
              name="confirm_password"
              {...register('confirm_password')}
            />
            <span className="text-red-600 pt-1 text-xs">{errors.confirm_password?.message}</span>
          </div>
        </div>
        <div className="flex flex-row py-2 justify-between items-center">
          <div className="flex flex-row gap-3">
            <input id="remember_me" type="checkbox" name="remember_me" />
            <label className="text-md" htmlFor="remember_me">
              Remember me
            </label>
          </div>
          <p className="cursor-pointer text-md text-[#007AFF] underline">Forgot password?</p>
        </div>
        <div className="flex flex-row gap-3 py-2">
          <input id="terms_conditions" type="checkbox" name="terms_conditions" />
          <label className="text-md" htmlFor="terms_conditions">
            I agree to all the <span className="cursor-pointer text-[#007AFF]">Terms</span> and{' '}
            <span className="cursor-pointer text-[#007AFF]">Privacy policy</span>
          </label>
        </div>
        <div className="cursor-pointer flex flex-row gap-5">
          <button
            type="submit"
            className="h-[50px] rounded-[5px] w-full items-center justify-center text-gray-100 text-semibold mt-4 bg-[#007AFF]"
          >
            Create Account
          </button>
          <div className="flex flex-row gap-3 h-[50px] w-full rounded-[5px] items-center justify-center text-gray-100 text-semibold mt-4 bg-[#2D3748;]">
            <Image src="/assets/google.png" width={20} height={20} alt="google" />
            Sign-in with google
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
