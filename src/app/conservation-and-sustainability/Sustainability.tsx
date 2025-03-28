"use client";
import Image from "next/image";

export const Sustainability = () => {
  return (
    <section className="max-w-6xl mx-auto p-4 flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full flex">
          <Image
            src="/images/Conservation-Education-01.jpg"
            alt="Conservation Education"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col pb-4">
            <h2 className="text-4xl font-normalfont-baskerville">
              All about education.
            </h2>
            <h3 className="text-md font-normal block">
              Passion for wildlife cannot exist without knowledge.
            </h3>
          </div>
          <p className="text-gray-500 text-sm leading-7">
            Part of Land & Life’s work is to educate the next generation about
            conservation, to spark a passion for the natural world and to
            inspire local communities to safeguard their unique species for the
            future. Land & Life’s Wildlife Warrior Program involves experts and
            guides motivating and instructing youngsters living in Kenya’s and
            Tanzania’s key protected areas, and provides scholarships for
            budding conservationists. The aim is to help nurture the next
            generation of wardens, rangers and environmental advocates. Since
            its launch in 2014, the programme has worked with over 2,000
            children.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col">
          <div className="flex flex-col pb-4">
            <h2 className="text-4xl font-normalfont-baskerville">
              Nature conservation.
            </h2>
            <h3 className="text-md font-normal block">
              Land & Life’s conservation work stretches right across Kenya and
              Tanzania.
            </h3>
          </div>
          <p className="text-gray-500 text-sm leading-7">
            In Kenya alone, it plays a significant role in safeguarding over
            1.36 million acres of land. One particularly ingenious initiative in
            Tanzania is Land & Life’s Human Elephant Conflict Mitigation
            Program, which distributes toolkits to farmers to help them deter
            elephants from raiding their land. The toolkit – which includes
            devices such as chilli bombs, fireworks and LED torches – is a
            simple but effective way of protecting both crops and, ultimately,
            the elephants themselves.
          </p>
        </div>
        <div className="relative w-full flex">
          <Image
            src="/images/Conservation-Anti-Poaching-01.jpg"
            alt="Conservation Education"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full flex">
          <Image
            src="/images/Conservation-Doctors-jumping-with-Maasai-warriors.jpg"
            alt="Conservation Education"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col pb-4">
            <h2 className="text-4xl font-normalfont-baskerville">
              Logistical support.
            </h2>
            <h3 className="text-md font-normal block">
              Land & Life delivers the right stuff where it’s most required.
            </h3>
          </div>
          <p className="text-gray-500 text-sm leading-7">
            It provides medical supplies and equipment, and runs medical camps
            where patients can access free family planning advice, counselling
            and testing for HIV and diabetes, and screening for cancer. The
            foundation also supports schools, supplying items such as
            stationary, books, desks, sports equipment and uniforms, as well as
            constructing classrooms, kitchens, toilet blocks and rainwater
            harvesting systems. It’s inspiring work, and SkySafari guests have
            the opportunity to visit some of these projects, to see the benefits
            their presence can bring.
          </p>
        </div>
      </div>
    </section>
  );
};
