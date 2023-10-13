'use client';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { VerticalCommonVariants } from '../../utils/framerVariants';
import {
  TS_LINK,
  VITE_LINK,
  REACT_LINK,
  FRAMER_LINK,
  VERCEL_LINK,
  TAILWIND_LINK,
  QUIET_NODE_PORTFOLIO_V2_GITHUB_LINK,
  FIGMA_LINK,
} from '../../utils/constants';
import { SmotionDiv, SmotionLink } from '@/libs/framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const verticalVariants = VerticalCommonVariants(30);

  return (
    <div className='overflow-hidden'>
      {/* wrapper */}
      <div>
        {/* Last */}
        <SmotionDiv
          initial='hidden'
          whileInView='shown'
          variants={verticalVariants}
          className='bg-black text-white flex justify-center flex-col items-center tracking-tight font-semibold text-center
                    px-3 py-3
                    xmmd:text-lg'
        >
    

          {/* Copyright */}
          <motion.div
            variants={verticalVariants}
            className='flex items-cent
          '
          >
            &#169;Eggi Satria {currentYear}
          </motion.div>
        </SmotionDiv>
      </div>
    </div>
  );
};

export default Footer;
