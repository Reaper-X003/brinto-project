import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: ElementType;
  delay?: number;
}

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const AnimatedText = ({
  text,
  className = '',
  el: Wrapper = 'h2',
  delay = 0,
}: AnimatedTextProps) => {
  return (
    <Wrapper className={`${className} font-serif`}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        aria-hidden
      >
        {text.split(' ').map((word, wordIndex) => (
          <span className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
            {word.split('').map((char, charIndex) => (
              <motion.span
                variants={defaultAnimations}
                className="inline-block"
                key={`${char}-${charIndex}`}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
      {/* Screen reader only text */}
      <span className="sr-only">{text}</span>
    </Wrapper>
  );
};
