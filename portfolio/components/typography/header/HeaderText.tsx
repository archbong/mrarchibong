

export default function HeaderText({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <h1 className="text-[14rem] leading-snug uppercase text-nigeria-white">{ children }</h1>
  )
}