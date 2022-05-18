import React from 'react'
import AboutUsTopSection from '../components/about-us-top-section/about-us-top-section'
import AboutUsCoFounder from '../components/about-us-cofounder/about-us-cofounder'
import Counter from '../components/counter/counter'

function AboutUs() {
  return (
    <main className="">
      <AboutUsTopSection />
      <AboutUsCoFounder
        heading={'Meet Our Co-Founder Vikas Alagarsamy'}
        text={
          'Vikas’s journey as a Photographer began as a casual fling in 2009, but soon evolved into a full-blown passion for the art. He’s a perfect mix of geek and creative, coming up with novel ideas for the shoot and solving the technological equation of how to make the idea work. OOAK is his brain child, born out of his love for photography and determination to redefine “Wedding Photography” in India.'
        }
      />
      <p className="w-[95%] max-w-[1150px] mx-auto mt-[6.5rem] leading-[30px] px-8 md:px-0">
        Born in late 2014, One of a kind is a wedding photography and candid
        wedding photography business franchise that is the brainchild of Vikas
        Alagarsamy and Navya, coupled with a mutual love for wedding photography
        and an insatiable curiosity for anything creative. Mr. Vikas Alagarsamy
        was also a Former Founder of Zero gravity Photography. We are an
        internationally acclaimed Candid Wedding Photography Studio with an
        impeccable team of effervescent wedding photographers. We like taking
        the unconventional road and utilizing out-of-the-box ideas. Since we
        love to globetrot whenever possible, we would like to capture your
        momentous occasion that the layman calls a wedding in all its glory,
        making it a picture filled with everything that describes your love
        story and also adding an individualistic twist with our candid wedding
        photography just because we know how special this day is for you. We
        have already traveled to varied locations such as Coimbatore, Erode,
        Madurai, Tirupur, Vijayawada, Bangalore, Colombo, Maldives, and
        Malaysia, Singapore, Chicago, Santorini to name a few. We are eagerly
        waiting to expand our horizons and discover new locations just to make
        that once-in-a-lifetime moment of yours all the more special. Being
        acclaimed as South India’s best wedding photographers, we aspire to
        offer our clients nothing less than the best. Our candid wedding
        photographers and cinematographers are artistic and quirky individuals
        with an innate eye for details and creativity; they are experts at
        portraying the perfect storyboard for your wedding. These photos will
        hold a place in your hearts and warm your soul, just like hot cocoa on a
        cold winter’s day. In short, OOAK is the place you would want to go to
        for your special day because we believe in giving you the entire
        experience minus all the stress. All you need to do is step into our
        office space, and talk to our team, once we take over all major
        stressful things that usually make people lose the fun while planning a
        wedding, you can just sit back and relax, enjoying the countdown to your
        big day.
      </p>

      <AboutUsCoFounder
        heading={'Meet Our Founder Navya'}
        text={
          'Navya, an artist by heart and smiles. She captures the essence of human joy, love, emotions and stories of human experience and loves to travel. Each of her pictures, tells a story. Her wedding photography has always been based on great communication with the bride and groom. The best wedding photography is truly candid – the photographer should blend into the background, and capture the genuine smiles. '
        }
      />
      <Counter />
    </main>
  )
}
export default AboutUs
