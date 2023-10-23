import { Service } from '@/components/Card'
import Card from '@/components/Card'
import { items } from './Services.const'

export default function Services() {
  return (
    <div>
      <div className='flex-wrap'>
        {items.map((item, index) => {
          return (
            <Service
              title={item.title}
              description={item.description}
              Icon={item.icon}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}
