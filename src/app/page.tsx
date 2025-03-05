export default function Home() {
  return (
    <main>
      <div>
        <section className="min-h-screen relative flex flex-col">
          <img className="h-full w-full" src="https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-04.jpg" alt="" />
          <div className="absolute text-black flex flex-col gap-8 py-20 pl-10">
            <p className="text-xs font-semibold">WINTER 2022 COLLECTION</p>
            <h2 className="text-7xl font-light">Valentin Paul <br /> Essential Collection</h2>
            <p className="text-[#75767c]">Última colección de verano.</p>
            <a>
              Mirar Colección
            </a>
          </div>
        </section>
      </div>
      
      <section className="flex justify-between py-20 px-10 bg-black">
        <div className="flex flex-col gap-10 w-2/5">
          <div>
            <h3 className="text-white text-3xl font-medium pb-2">Get our emails for info on <br /> new items, sales and more.</h3>
            <p className="text-[#75767c]">Well email you a voucher worth £10 off your first order over £50.</p>
          </div>
          <div>
            <form className="pb-2">
              <input className="w-3/4 px-2 py-2 border-y border-l border-[#ddd] focus:outline-none" type="text" name="" id="" placeholder="tucorreo@gmail.com"/>
              <button className="w-1/4 text-white font-medium px-6 py-2 border border-[#75767c] rounded-sm">Suscribirse</button>
            </form>
            <p className="text-xs text-[#75767c]">By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-2/5">
          <div>
            <h3 className="text-white text-3xl font-medium pb-2">Need help? <br /> (+800) 1234 5678 90</h3>
            <p className="text-[#75767c] font-medium">We are available 8:00am – 7:00pm</p>
          </div>
          <p className="text-xs text-[#75767c]">Shopping App: Try our View in Your Room feature, manage registries and save payment info.</p>
        </div>
      </section>
    </main>
  );
}
