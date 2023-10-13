"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SmotionP } from "@/libs/framer-motion";

const PS = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100% 0% -9% 0%" });
  return (
    <div ref={ref} className=" w-fit">
      {isInView ? (
        <SmotionP
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "some", margin: "100% 0% -9% 0%" }}
          className="hidden sm:block before:content-[open-quote] after:content-[close-quote] justify-center sm:typewriter 
                        before:text-2xl after:text-2xl
                        sm:before:text-3xl sm:after:text-3xl"
        >
          With a strong desire to learn new things and solve problems. We can
          create Anythings.
        </SmotionP>
      ) : (
        <></>
      )}

      <SmotionP
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        viewport={{ amount: "some", margin: "100% 0% -9% 0%" }}
        className="sm:hidden before:content-[open-quote] after:content-[close-quote] justify-center
                        before:text-2xl after:text-2xl"
      >
        With a strong desire to learn new things and solve problems.{" "}
        <br className="hidden xsm:block sm:hidden" />
        We can create Anythings.
      </SmotionP>
    </div>
  );
};

export default PS;
