import { TestimonialColumns, firstColumn, secondColumn, thirdColumn } from "@/components/TestimonialColumn"


export const Testimonials = () => {
  return (
    <section className="bg-white px-24">
      <div className="container">
        <div className="section-header">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="title-gradient mt-5">What our users say</h2>
          <p className="section-desc mt-5">From intuitive design to powerful features, our app has become an essential tool for users around the world.</p>
        </div>
       <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <TestimonialColumns testimonials={firstColumn} duration={15} />
        <TestimonialColumns testimonials={secondColumn} duration={20} className="hidden md:block"/>
        <TestimonialColumns testimonials={thirdColumn}  duration={17} className="hidden lg:block"/>
       </div>
      </div>
    </section>
  )
};
