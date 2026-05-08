import { motion } from 'framer-motion';
import { images } from '../data/images';
import { Button } from '../components/Button';
import { AnimatedText } from '../components/AnimatedText';

export const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-deep-black">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-[28px] overflow-hidden aspect-[4/5] sticky top-32 border border-white/10">
              <img src={images.about} alt="Washiou Brinto" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-3xl font-serif text-white font-bold mb-1">Washiou Brinto</h2>
                <p className="font-westeria text-gold text-3xl font-normal mb-2">Lead Photographer</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <AnimatedText text="The Art of Storytelling" className="text-4xl md:text-5xl font-bold text-white mb-12" delay={0.2} />
            
            <div className="prose prose-invert prose-lg max-w-none text-muted mb-16">
              <p className="text-xl text-white font-medium mb-6">
                I am a professional photographer based in Dhaka, Bangladesh, specializing in weddings, events, portraits, and commercial photography.
              </p>
              <p>
                My journey began with a simple desire to capture the world as I see it—raw, emotional, and authentic. Over the years, I have honed my craft, working with numerous brands, organizations, and wonderful couples to document their most important moments.
              </p>
              <p>
                My approach to photography is unobtrusive and editorial. I prefer to let events unfold naturally, capturing the genuine emotions and fleeting interactions that make each story unique. Whether it's the quiet anticipation before a wedding ceremony or the dynamic energy of a cultural performance, my goal is to freeze time beautifully.
              </p>
              <p>
                I believe that good photography is not just about technical perfection, but about the connection between the subject and the lens. I strive to make my clients feel comfortable and confident, ensuring that their true personalities shine through in every image.
              </p>
            </div>

            <h3 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">Professional Journey</h3>
            
            <div className="space-y-12 mb-16">
              <div className="flex gap-6">
                <div className="w-16 flex-shrink-0 text-gold font-serif text-xl mt-1">2020</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Started Professional Photography</h4>
                  <p className="text-muted">Began taking professional gigs, focusing on small events and individual portraits.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 flex-shrink-0 text-gold font-serif text-xl mt-1">2022</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Expanded to Weddings & Corporate</h4>
                  <p className="text-muted">Built a strong portfolio covering large scale weddings and corporate summits.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 flex-shrink-0 text-gold font-serif text-xl mt-1">2025</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Lead Photographer</h4>
                  <p className="text-muted">Established as a trusted name in the industry, collaborating with top brands and creative agencies.</p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal p-8 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl font-serif text-white mb-2">Ready to tell your story?</h4>
                <p className="text-muted">Let's create something beautiful together.</p>
              </div>
              <Button size="lg" onClick={() => window.location.href = '/contact'}>
                Book a Session
              </Button>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
};
