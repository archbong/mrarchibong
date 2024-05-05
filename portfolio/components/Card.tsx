
interface CardProps {
  children: React.ReactNode;
  classname?: string;
}


export default function Card({ children, classname }: Readonly<CardProps>) {
  return (
    <div className="p-3">
      <div className={`${classname} rounded-xl bg-base-100 shadow-xl image-full`}>
        { children }
      </div>
    </div>
  )
}