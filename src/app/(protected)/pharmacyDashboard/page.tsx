'use client'
import { useState, useEffect } from 'react'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Dialog, DialogPanel, Label } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon as XMarkIconOutline,
  BellIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import LogoImage from '@/images/logo.png'
import { addDoc } from 'firebase/firestore'
import { withAuth } from '@/components/AuthPharmacyDashboard'
interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  address: string
  job_title: string
}

interface Doctor {
  id: string
  first_name: string
  last_name: string
  email: string
  specialization: string
  registration_date: string
}

interface FormData {
  first_name: string
  last_name: string
  email: string
  address: string
  job_title: string
}

interface NewUserFormData extends FormData {
  role: string
  password: string
}

interface NewDoctorFormData {
  first_name: string
  last_name: string
  email: string
  specialization: string
  registration_date: string
  password: string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 

  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-6 lg:px-8">
            </div>
            </div>
            </main>
    </>
  )
}

export default withAuth(Dashboard)
