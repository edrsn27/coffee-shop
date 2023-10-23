interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return <div className='shadow-sm p-2'>{children}</div>
}
