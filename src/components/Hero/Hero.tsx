import heroImage from "../../assets/banner-stack.png";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-10 sm:px-6 md:flex-row md:justify-between md:py-14 lg:px-8 lg:py-16">

        {/* Hero Content */}
        <div className="w-full text-center md:w-[52%] md:text-left">
          <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-[42px]">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 text-gray-500 md:mx-0 md:max-w-[520px]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#technologies"
              className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-2.5 text-xs font-medium text-white transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-gray-200 bg-white px-6 py-2.5 text-xs font-medium text-gray-600 transition hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 flex w-full justify-center md:mt-0 md:w-[43%] md:justify-end">
          <img
            src={heroImage}
            alt="Development technology stack"
            className="w-[230px] object-contain sm:w-[270px] md:w-[300px] lg:w-[340px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;