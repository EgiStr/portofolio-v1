import PS from "./client/PS";
import { SmotionDiv, SmotionHeader } from "@/libs/framer-motion";

const About = () => {
  return (
    <section
      className="overflow-hidden scrollbar-hidden bg-primary
                h-[400px]
                md:h-[450px]
                lg:h-[500px]"
    >
      {/* container */}
      <div
        className="flex flex-col items-center text-white
                mt-6
                sm:mt-9
                md:mt-12
                2xl:max-w-[100rem] 2xl:mx-auto"
      >
        {/* header */}
        <div>
          <SmotionHeader
            elementType="h2"
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            About.
          </SmotionHeader>
          <SmotionDiv
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: "some", margin: "100% 0% -9% 0%" }}
            className="flex justify-center -mt-0.5"
          >
            <hr className="bg-white h-[0.2rem] w-12 sm:w-16 rounded-xl" />
          </SmotionDiv>
        </div>

        {/* body */}
        <SmotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
          className="font-semibold text-center
                px-4 mt-6 text-lg
                md:mt-12 md:text-xl
                lg:px-9"
        >
          {/* first sentence */}
          <SmotionDiv>
            <p>
              I am a Data Science student at the Sumatera Institute of
              Technology who has interest in technology,
              <br className="hidden sm:block" /> particularly in software
              development and AI.
              <br className="hidden sm:block" /> i have a strong desire to learn
              new things and solve problems. <br className="hidden sm:block" />
            </p>
          </SmotionDiv>

          {/* @medium-device: second sentence */}
          <SmotionDiv className="hidden sm:block">
            <p>
              Through commitment to professionalism,{" "}
              <span className="font-bold">I strive to</span> be a{" "}
              <span className="font-bold">great software engineer</span> or{" "}
              <span className="font-bold">data scientist</span> who can
              contribute to the development of the nation and the world.
              <br />
            </p>
          </SmotionDiv>

          {/* third sentence */}
          <div className="mt-6 flex justify-center">
            <PS />
          </div>
        </SmotionDiv>
      </div>
    </section>
  );
};

export default About;
