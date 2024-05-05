import Image from "next/image";

export default function CaseCard() {
  return (
    <div className="p-10 flex">
      <div className="p-2 rounded-xl border-2">
        <div className="flex justify-between w-96 p-5 rounded-xl border-2">
          <h2 className="">Startbucks</h2>
          <h2 className="">2021</h2>
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
            <div className="card-body">
              <div className="card-actions justify-start">
                <h2 className="">Starbucks Fam</h2>
                <p>Virtual Experience</p>
              </div>
              {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
