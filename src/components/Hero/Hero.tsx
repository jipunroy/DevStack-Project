import heroImage from "../../assets/banner-stack.png";

function Hero() {

  return (

    <section className="bg-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-8 sm:px-6 sm:py-10 md:flex-row md:justify-between md:py-14 lg:px-8 lg:py-16">

        {/* Hero Content */}

        <div className="w-full text-center md:w-[52%] md:text-left">

          <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-[42px]">

            Build Your Ideal

            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">

              Development Stack

            </span>

          </h1>

          <p className="mx-auto mt-4 max-w-140 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6 md:mx-0 md:max-w-130">

            Explore frontend, backend, database, and tooling options,

            compare them side by side, and put together the stack that fits

            your next project.

          </p>

          {/* Buttons */}

          <div className="mt-6 flex flex-row justify-center gap-2 sm:gap-3 md:justify-start">

            <a

              href="#technologies"

              className="flex-1 rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2.5 text-[10px] font-medium text-white transition hover:opacity-90 sm:flex-none sm:px-6 sm:text-xs"

            >

              Explore Technologies

            </a>

            <a

              href="#about"

              className="flex-1 rounded-md border border-gray-200 bg-white px-3 py-2.5 text-[10px] font-medium text-gray-600 transition hover:border-pink-400 hover:text-pink-500 sm:flex-none sm:px-6 sm:text-xs"

            >

              Learn More

            </a>

          </div>

        </div>

        {/* Hero Image */}

        <div className="mt-5 flex w-full justify-center md:mt-0 md:w-[43%] md:justify-end">

          <img

            src={heroImage}

            alt="Development technology stack"

            className="w-90 max-w-[115%] object-contain sm:w-100 md:w-107.5 lg:w-125"

          />

        </div>

      </div>

    </section>

  );

}

export default Hero;