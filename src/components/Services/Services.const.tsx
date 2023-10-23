import {
  TruckIcon,
  BeakerIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  CreditCardIcon,
} from '@heroicons/react/24/solid'
export const items = [
  {
    title: 'Fast Delivery',
    description: 'Start from $10',
    icon: <TruckIcon className='h-14 w-14' />,
  },
  {
    title: 'Money Guarantee',
    description: '7 Days Back',
    icon: <CurrencyDollarIcon className='h-14 w-14' />,
  },
  {
    title: '365 Days',
    description: 'For free return',
    icon: <CalendarDaysIcon className='h-14 w-14' />,
  },
  {
    title: 'Payment',
    description: 'Secure system',
    icon: <CreditCardIcon className='h-14 w-14' />,
  },
]
