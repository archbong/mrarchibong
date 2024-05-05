

export default function SubHeaderText({ children }: Readonly<{ children: React.ReactNode}>) {
    return (
      <h1 className="text-[10rem] text-center leading-snug uppercase text-nigeria-earth">{ children }</h1>
    )
  }