interface Props {
  title: string
  description: string
  Icon: JSX.Element
}

export default function Service({ title, description, Icon }: Props) {
  return (
    <div className='h-56 w-56'>
      <div>{Icon}</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}
