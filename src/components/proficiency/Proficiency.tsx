'use client';

import { useState, useEffect } from 'react';
import useScreenSizes from '@/hooks/useWindowSize';
import { useAnimation, motion } from 'framer-motion';
import { SmotionDiv, SmotionHeader } from '@/libs/framer-motion';
import {
  MORE_SKILLS_LISTS,
  MAIN_LEFT_SKILLS_LISTS,
  MAIN_RIGHT_SKILLS_LISTS,
} from '@/utils/constants';
import {
  VerticalCommonVariants,
} from '@/utils/framerVariants';

const Stats = () => {
  const shakingAnimation = useAnimation();
  const [isSmall, isMedium] = useScreenSizes();
  const [mounted, setMounted] = useState(false);
  const verticalMoreSkills = VerticalCommonVariants(60);
  const [moreSkillsList, setMoreSkillsList] = useState(MORE_SKILLS_LISTS);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await shakingAnimation.start({
        rotate: isMedium
          ? [0, 90, -90, 60, -60, 30, -30, 0]
          : [0, 190, -190, 160, -160, 130, -130, 0],
        transition: { duration: 0.5, delay: 3 },
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [shakingAnimation, isMedium]);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <section className='scrollbar-hidden flex justify-center items-center bg-[#EAFDF9]'>
      {/* container */}
      <div
        className='relative z-20 flex flex-col overflow-hidden items-center border-2 border-[#e7edf7] bg-white gap-16 rounded-2xl
                  -top-20 px-3
                  xsm:px-6 xsm:-top-24
                  sm:px-6
                  md:-top-20 md:px-9
                  lg:-top-28 lg:px-16
                  2xl:px-20
                  '
      >
        {/* header */}
        <div className='mt-3 sm:mt-6 md:mt-9 lg:mt-12'>
          <SmotionHeader
            elementType='h2'
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-extrabold text-primary drop-shadow-2xl'
          >
            Proficiency.
          </SmotionHeader>
          <SmotionDiv
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-primary h-[0.2rem] w-20 sm:w-32 rounded-xl drop-shadow-2xl' />
          </SmotionDiv>
        </div>

        {/* body - skill proficient bars */}
        <div className='flex flex-col gap-12 mb-6 sm:mb-9 md:mb-12 lg:mb-12'>
          {/* @notice main skills for mobile screens */}
       
          {/* more skills */}
          <div className='flex flex-col gap-3'>
            {/* @notice medium or larger screens */}
            <SmotionDiv
              initial='hidden'
              whileInView='shown'
              viewport={{
                amount: 'some',
                margin: '100% 0% -9% 0%',
              }}
              variants={verticalMoreSkills}
              className='flex justify-between'
            >
              {moreSkillsList
                .slice(0, isMedium ? 12 : isSmall ? 6 : 4)
                .map((tech, key) => {
                  return (
                    <motion.a
                      key={key}
                      href={tech.techLink}
                      target='_blank'
                      title={tech.technology}
                      variants={verticalMoreSkills}
                      className='flex items-center cursor-pointer'
                    >
                      <motion.img
                        whileHover={{
                          x: [0, -30, 40, -30, 20, -10, 0],
                          y: [0, -30, 20, -10, 0],
                          transition: { duration: 0.5 },
                        }}
                        animate={tech.shouldShake ? shakingAnimation : ''}
                        src={`assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
                        alt={`${tech.technology}-logo`}
                        width={isMedium ? 50 : 40}
                        height={isMedium ? 50 : 40}
                        
                        className={`/hover:scale-125 /transition duration-300 select-none`}
                      />
                    </motion.a>
                  );
                })}
            </SmotionDiv>

            {/* @notice small screens */}
            {!isMedium && (
              <SmotionDiv
                initial='hidden'
                whileInView='shown'
                viewport={{
                  amount: 'some',
                  margin: '100% 0% -9% 0%',
                }}
                variants={verticalMoreSkills}
                className='flex justify-between'
              >
                {moreSkillsList
                  .slice(isSmall ? 6 : 4, isSmall ? 12 : 8)
                  .map((tech, key) => {
                    return (
                      <motion.a
                        href={tech.techLink}
                        key={key}
                        target='_blank'
                        title={tech.technology}
                        variants={verticalMoreSkills}
                        className='flex items-center cursor-pointer'
                      >
                        <motion.img
                          whileHover={{
                            x: [0, -100, 110, -100, 90, -80, 0],
                            y: [0, -100, 90, -80, 0],
                            transition: { duration: 0.5 },
                          }}
                          animate={tech.shouldShake ? shakingAnimation : ''}
                          src={`assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
                          alt={`${tech.technology}-logo`}
                          width={isMedium ? 50 : 40}
                        height={isMedium ? 50 : 40}
                        
                          className={`hover:scale-125 scale transition duration-300 select-none`}
                        />
                      </motion.a>
                    );
                  })}
              </SmotionDiv>
            )}

            {/* @notice mobile screens */}
            {!isSmall && (
              <SmotionDiv
                initial='hidden'
                whileInView='shown'
                viewport={{
                  amount: 'some',
                  margin: '100% 0% -9% 0%',
                }}
                variants={verticalMoreSkills}
                className='flex justify-between'
              >
                {moreSkillsList.slice(8, 12).map((tech, key) => {
                  return (
                    <motion.a
                      href={tech.techLink}
                      key={key}
                      target='_blank'
                      title={tech.technology}
                      variants={verticalMoreSkills}
                      className='flex items-center cursor-pointer p-2'
                    >
                      <motion.img
                        whileHover={{
                          x: [0, -100, 110, -100, 90, -80, 0],
                          y: [0, -100, 90, -80, 0],
                          transition: { duration: 0.5 },
                        }}
                        animate={tech.shouldShake ? shakingAnimation : ''}
                        src={`assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
                        alt={`${tech.technology}-logo`}
                        width={isMedium ? 50 : 40}
                        height={isMedium ? 50 : 40}
                        
                        className={`hover:scale-125 transition duration-300 select-none`}
                      />
                    </motion.a>
                  );
                })}
              </SmotionDiv>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
