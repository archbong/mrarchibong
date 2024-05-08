import Image from "next/image";

const cases = [
  {
    id: 1,
    title: "Career Starter",
    description: "Career Map",
    year: "2023",
    company: "Self"
  },
  {
    id: 2,
    title: "Web signature",
    description: "Task Management Application",
    year: "2023",
    company: "self"
  },
  {
    id: 3,
    title: "Val AI",
    description: "Vacation planning App",
    year: "2023",
    company: "Waga"
  },

];

export default function CaseCard() {
  return (
    <div className="p-10 grid grid-cols-3 justify-center gap-10">
      {
        cases?.map((item) => (
          <div key={item.id} className="p-2 rounded-xl border-2 border-nigeria-green">
          <div className="flex justify-between w-96 p-5 rounded-xl border-2 border-nigeria-green text-nigeria-earth2 font-bold">
            <h2 className="">{item.company}</h2>
            <h2 className="">{item.year}</h2>
          </div>
          <div className="pt-5">
            <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
              <figure>
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  width={500}
                  height={500}
                />
              </figure>
              <div className="relative">
                <div className="absolute inset-x-0 top-[20rem] px-5 text-nigeria-deepBlue2 font-bold text-1xl">
                  <h2 className="">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
        ))
      }
    </div >
  );
}
