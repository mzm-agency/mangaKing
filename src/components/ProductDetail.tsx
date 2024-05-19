import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  
  const { slug } = useParams()
  console.log("🚀 ~ ProductDetail ~ slug:", slug)

  const people = [{ name: 'Stom', job: false }, { name: 'Sumbe', job: false }, { name: 'Elsa', job: true }]



  return (
    <div className="my-12">
      <div className="container mx-auto">
        <div className="flex gap-4">
          <div className="w-1/2 flex-col flex space-y-6">
            <div className="text-black bg-primaryDark w-fit p-1 rounded-md">
              <p className="text-sm font-semibold leading-none">romance</p>
            </div>
            <h1 className="text-xl font-bold text-black">MY SECRET BODYGUARD</h1>
            <div className="text-sm text-black">Molly, a cute 13-year-old girl, has been bullied by ruffians
              ever since she was little. Determined never to be harassed again,
              she gets herself into an elite school – a place free from hooligans and gangsters,
              or so she thinks! It isn't long before she finds herself the lackey of a mysterious boy
              in black – a gangster belonging to a pre-eminent gang in the underworld! An action-packed
              tale peppered with budding romance...
            </div>
            <div className="bg-primary hover:bg-primaryDark transition-default py-2 px-4 rounded-full w-fit cursor-pointer">
              <p className="text-sm font-semibold text-black">Унших</p>
            </div>
          </div>
          <div className="w-1/2">
            <img className={`w-full object-cover object-center border-2 border-black rounded-2xl`} src='/banner/desktop-01.webp' />
          </div>
        </div>
        <div className="flex gap-12 mt-6">
          <div className="w-3/4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold">13 Анги</p>
            </div>
            <div className="flex-col flex gap-3">
              {[1, 2].map((index: number) => {
                return (
                  <Link to={`/product/${slug}/read/${index}`} key={index} className="flex items-center justify-between border-b border-b-gray-200 last:border-b-0 first:border-t py-3">
                    <div className="flex items-center gap-4">
                      <img className={`w-[240px] h-[120px] object-cover object-center border-2 border-black rounded-2xl`} src='/banner/desktop-01.webp' />
                      <div className="grid gap-2 text-lg font-semibold text-black">
                        {index}-р анги
                        <p className="leading-none text-sm font-regular text-gray-400">3-сар 10нд , 2024</p>
                      </div>

                    </div>
                    <div className="text-success font-semibold text-sm">FREE</div>
                  </Link>
                )
              })}
              <div className="flex items-center justify-between bg-primary py-6 h-[70px] px-6 rounded-xl">
                <p className="leading-none font-semibold text-md uppercase"> Цааш уншхын тулд premium багц авна уу баярлалаа.</p>
                <div className="text-sm font-normal text-black border border-black rounded-full py-2 px-3">Худалдаж авах</div>
              </div>
              {[1, 2, 3].map((index: number) => {
                return (
                  <div key={index} className="flex items-center justify-between border-b border-b-gray-200 first:border-t first:border-t-gray-200 last:border-b-0 py-3">
                    <div className="flex items-center gap-4">
                      <img className={`w-[240px] h-[120px] object-cover object-center border-2 border-black rounded-2xl`} src='/banner/desktop-01.webp' />
                      <div className="grid gap-2 text-lg font-semibold text-black">
                        {index}-р анги
                        <p className="leading-none text-sm font-regular text-gray-400">3-сар 10нд , 2024</p>
                      </div>

                    </div>
                    <div className="text-danger font-semibold text-sm">Premium</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex w-1/4">
            <div>
              <p className="text-md font-semibold uppercase">Санал болгох</p>
              <div className="w-full grid grid-cols-2 gap-4">
                {
                  [1, 2, 3, 4].map((index: number) => {
                    return (
                      <div key={`index_${index}`} className="border-2 border-black rounded-xl">
                        <img className="w-full h-auto object-cover object-center rounded-xl" src='/manga/top-02.webp' />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail