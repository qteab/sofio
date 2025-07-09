import Articles from "@/blocks/Articles/Articles";
import styles from "./page.module.css";
import Hero from "@/blocks/Hero/Hero";
import Images from "@/blocks/Images/Images";
import Text from "@/blocks/Text/Text";
import TextOnMedia from "@/blocks/TextOnMedia/TextOnMedia";
import Newsletter from "@/blocks/Newsletter/Newsletter";
import { Footer, Navigation } from "@/core";
import TextHero from "@/blocks/TextHero/TextHero";
import Timeline from "@/blocks/Timeline/Timeline";
import InfoGrid from "@/blocks/InfoGrid/InfoGrid";
import TextAndMedia from "@/blocks/TextAndMedia/TextAndMedia";
import ImageCards from "@/blocks/ImageCards/ImageCards";
import Numbers from "@/blocks/Numbers/Numbers";
import ImageGrid from "@/blocks/ImageGrid/ImageGrid";
import FAQ from "@/blocks/FAQ/FAQ";
import ArticleList from "@/blocks/ArticleList/ArticleList";
import ContactForm from "@/blocks/ContactForm/ContactForm";
import Statistics from "@/blocks/Statistics/Statistics";
import ScrollBlock from "@/blocks/ScrollBlock/ScrollBlock";
import { title } from "process";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />

      {/* Home Page */}
      <Hero
        media="https://images.unsplash.com/photo-1750711642160-efc6e052751a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Accurately monitor your glucose levels, without needles."
        text=" Effortlessly track your glucose levels throughout the day — without
                piercing your skin. Sofio is the world’s first needle-free glucose
                monitor with medical grade accuracy."
      />
      <ImageCards
        images={[
          {
            url: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Glucose management",
            title: "Manage your glucose levels one day at a time.",
            text: "Sofio helps you understand your glucose levels and how they affect your health.",
          },
          {
            url: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Glucose spikes",
            title: "Spot unhealthy glucose spikes early.",
            text: "Sofio empowers you with insights that support better health decisions, every day.",
          },
        ]}
      />
      <Text
        title="Understand your symptoms and take control of your health - whether proactively or reactively."
        text="Glucose is a very powerful molecule which has a big impact on the human
        body. Diabetes doesn’t “start” on a day when a person’s glucose levels
        hit a certain value – instead elevated glucose levels over time degrade
        blood vessels and the nervous system, creating various health symptoms.
        Many people have elevated glucose levels, even for years, without
        realising it — it can be symptomless or there could be signs like
        cravings, fatigue and hormonal imbalances. Sofio helps you spot
        unhealthy glucose spikes early, so you can take action before they lead
        to serious conditions.   Whether you're managing symptoms or simply
        aiming to stay ahead of them, Sofio empowers you with insights that
        support better health decisions, every day."
      />
      <ScrollBlock
        items={[
          {
            title: "Get rapid results.",
            text: "Sofio makes it easy to understand your glucose levels. Your measurements will be taken automatically, with clear results delivered via a user-friendly app. Input your target glucose levels and see at a glance whether you’re in range.",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Understand the impact of your meals and activity.",
            text: "Like a window in to your body, Sofio lets you see how different kinds of food and exercise affect your glucose levels. Log your meals and activity to understand their impact, helping you make healthy choices.",
            image:
              "https://static.vecteezy.com/system/resources/previews/042/538/623/non_2x/white-smartphone-mockup-blank-screen-isolated-on-transparent-background-smartphone-mockup-frame-free-png.png",
          },
          {
            title: "See your progress over time.",
            text: "Whether you’re looking to track daily, weekly or monthly, Sofio gives you a record of your glucose levels over time. See the bigger picture to understand how often your glucose levels have stayed within a range that’s right for you.",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]}
      />
      <TextOnMedia
        media="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Manage your glucose levels one day at a time."
        text="Worn for just 16 hours, Sofio doesn’t need to stay on for days or even overnight. Choose a day that works for you, start in the morning, and take it off before bed."
        settings={{
          textPosition: "right",
          textColor: "black",
          margin: {
            top: true,
            bottom: false,
            left: true,
            right: true,
          },
          size: "small",
        }}
      />
      <TextOnMedia
        media="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Manage your glucose levels one day at a time."
        text="Worn for just 16 hours, Sofio doesn’t need to stay on for days or even overnight. Choose a day that works for you, start in the morning, and take it off before bed."
        settings={{
          textPosition: "right",
          textColor: "black",
          margin: {
            top: false,
            bottom: true,
            left: true,
            right: true,
          },
          size: "large",
        }}
      />
      <TextOnMedia
        media="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Manage your glucose levels one day at a time."
        text="Worn for just 16 hours, Sofio doesn’t need to stay on for days or even overnight. Choose a day that works for you, start in the morning, and take it off before bed."
        button={{
          label: "Learn more",
          link: "/learn-more",
        }}
        settings={{
          textPosition: "left",
          textColor: "white",

          size: "small",
        }}
      />

      <Statistics
        title="Did you know?"
        firstStatText="1 in 3 US citizens have prediabetes."
        secondStatText="Of those, 8 in 10 don't know that they have it."
        finalText="Whether you're managing diabetes or aiming to prevent it, staying on top of your glucose levels is vital. Sofia gives you real-time insight when your glucose is moving outside a healthy range—so you can take action sooner. This helps reduce the risk of serious complications like heart disease, stroke, kidney failure and vision or limb loss."
        bottomTitleRow1="No needles. No discomfort."
        bottomTitleRow2="No more reasons to fear getting started."
        bottomText="We understand that the thought of developing or living with diabetes can be overwhelming. You’re not alone — hundreds of millions of people worldwide face the same challenge. That’s why we developed Sofio. It’s a simple way to get the insights you need on your journey towards healthy blood glucose levels."
        linkTitle="Start your journey today"
        linkUrl="/start-your-journey"
      />
      <Articles
        title="News & Updates"
        articles={[
          {
            date: "17.06.2024",
            text: "Talisman needle-free CGM demonstrates strong correlation to blood glucose in clinical studies and moves towards large volume manufacturing",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/news/talisman-needle-free-cgm-demonstrates-strong-correlation-to-blood-glucose-in-clinical-studies-and-moves-towards-large-volume-manufacturing",
          },
          {
            date: "17.06.2024",
            text: "Talisman needle-free CGM demonstrates strong correlation to blood glucose in clinical studies and moves towards large volume manufacturing",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/news/talisman-needle-free-cgm-demonstrates-strong-correlation-to-blood-glucose-in-clinical-studies-and-moves-towards-large-volume-manufacturing",
          },
          {
            date: "17.06.2024",
            text: "Talisman needle-free CGM demonstrates strong correlation to blood glucose in clinical studies and moves towards large volume manufacturing",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/news/talisman-needle-free-cgm-demonstrates-strong-correlation-to-blood-glucose-in-clinical-studies-and-moves-towards-large-volume-manufacturing",
          },
          {
            date: "17.06.2024",
            text: "Talisman needle-free CGM demonstrates strong correlation to blood glucose in clinical studies and moves towards large volume manufacturing",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/news/talisman-needle-free-cgm-demonstrates-strong-correlation-to-blood-glucose-in-clinical-studies-and-moves-towards-large-volume-manufacturing",
          },
        ]}
      />
      <Newsletter title="Sign up to our newsletter" />
      <Footer />

      {/* Science Page */}
      <Hero
        media="https://images.unsplash.com/photo-1750711642160-efc6e052751a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="The making of the world’s first needle-free glucose monitor"
        overlay
      />
      <InfoGrid
        title="How it works"
        ingress="Sofio represents a breakthrough in glucose monitoring: the first time in 25 years a new technology category has been introduced in the space. This is the story of how our multi-disciplinary scientists collaborated to engineer the first ever non-invasive glucose monitor designed for cost efficient, mass production."
        items={[
          {
            title: "Based on a novel use of Magnetohydrodynamics",
            text: "Our glucose monitor measures glucose from interstitial fluid. This fluid transports molecules from the blood into cells and has a similar glucose concentration to blood plasma. Up until now, interstitial fluid has been sampled only by breaking the skin barrier using needles. Based on their backgrounds in medicine and bioelectronics, our team identified a novel, non-invasive method. Sofio uses the principles of Magnetohydrodynamics (MHD) to extract the interstitial fluid from the skin without breaking it. Generating magnetic and electric fields, the device creates the Lorentz force in the direction of the skin surface. This force pushes the interstitial fluid from the inside out, where it is received by our sensor.",
            image:
              "https://gallery.yopriceville.com/downloadfullsize/send/6560",
          },
          {
            title: "A needle-free sensor",
            text: "Inside the sensor, glucose is measured through electrochemical analysis of a tiny fluid sample. Creating a biosensor integrated with MHD technology took hundreds of iterations — ensuring it was biocompatible, comprised of ultra-thin layers for wearability, and above all performant with the small fluid sample size.Once we achieved optimal sensitivity and speed, we scaled up to mass manufacturing with micron-level precision. At the heart of the sensor is a glucose-reactive enzyme, tailored to the best performance of the biosensor with the use of cutting edge science and technology .A hydrogel layer sits between the sensor and skin, enabling gentle and efficient fluid extraction.",
            image:
              "https://gallery.yopriceville.com/downloadfullsize/send/6560",
          },
          {
            title: "A proprietary algorithm",
            text: "Inline with the hardware, we have been developing a proprietary algorithm to maximise the reliability of the reading. This interprets and calibrates the glucose levels. All testing we carry out feeds into optimising this algorithm, to ensure we deliver the most accurate results possible.",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Lightweight, comfortable casing",
            text: "Quality materials ensure our device is not just scientifically accurate, but truly wearable. Soft and lightweight, it remains unnoticeable during activity. Our miniaturisation project is ongoing, so that the next generation of our device will be even less noticeable.",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]}
        bottomSection={{
          title: "Easy assembly",
          text: "The system is presented in just two parts: a rechargeable device and a sensor. The two come together via easy user assembly, with the sensor changed each wear. The sensors connect Sofio to the skin, with a peel and stick method as simple as applying a plaster. ",
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/036/708/930/small_2x/curve-wave-blue-abstract-background-free-png.png",
        }}
      />
      <Timeline
        title="Timeline"
        years={[
          {
            date: "2016",
            text: "A research team at the University of Helsinki discover a novel, non-invasive way to extract molecules from tissue using magnetohydrodynamics (MHD).",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2018",
            text: "GlucoModicum is founded, with global patents awarded for MHD and its applications in drug delivery plus needle free monitoring of multiple biomarkers.",
          },
          {
            date: "2022",
            text: "Performance results from the core technologies are published and peer-reviewed by global experts. Early prototyping and clinical studies demonstrate the ability of the system to extract and detect glucose effectively.",
          },
          {
            date: "2023",
            text: "GlucoModicum develop a prototype device —The Talisman — with Phillips Medisize. Clinical tests confirm a strong correlation between its readings and blood glucose levels.",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024",
            text: "Talisman POC2  is completed, designed for manufacturing following Human-centered design principles and confirmed high-correlation in clinical performance studies.High-volume manufacturing line blueprints are prepared, with an initial capacity of 21 million units per year.",
          },
          {
            date: "2025",
            text: "Building of the high-volume manufacturing lines begins; the first assembled products from the lines are received. Other launch preparations are taking place.",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]}
      />
      <TextOnMedia
        media="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Tried and tested, thousands of times."
        text="Sofio technology has been used and tested by hundreds of people during the past 6 years. In parallel, our technology and products have undergone tens of thousands of laboratory tests to ensure performance, safety, and consistency. It is quite telling that in our clinical studies we have had several participants who have liked the experience so much that they come again and again to wear and test Sofio – some of them have participated over 10 times in our Clinical Studies."
        settings={{
          textPosition: "left",
          textColor: "white",
          size: "large",
        }}
      />
      <TextOnMedia
        media="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Accurate and mass manufacturable"
        text="Sofio sets a new benchmark in mass manufacturable, needle-free Continuous Glucose Monitoring. Our accuracy is approaching the traditional needle based CGMs."
        settings={{
          textPosition: "left",
          textColor: "white",
          size: "large",
          margin: {
            top: true,
            bottom: true,
            left: true,
            right: true,
          },
        }}
      />
      <Text
        title="Years of development, for the simplest possible day of glucose monitoring"
        text="Many members of our team have personal stories that motivate them to work on Sofio. Some of us live with diabetes ourselves, others have a loved one with the condition, or are simply passionate about enabling better glycemic control to people who currently don’t have access to such options. All of us care deeply about making a glucose monitor as simple as possible to use. After just 16 hours of wear, Sofio users gain valuable data on their glucose —  without being confronted with needles, excessive costs or the prospect of wearing a device for days on end. Our hope is that Sofio removes the barriers millions face to start glucose monitoring, in time to prevent them from developing diabetes."
        layout="centered"
      />
      <Articles
        title="Peer reviewed publications"
        articles={[
          {
            text: "Talisman needle-free CGM demonstrates strong correlation to blood glucose in clinical studies and moves towards large volume manufacturing",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/news/talisman-needle-free-cgm-demonstrates-strong-correlation-to-blood-glucose-in-clinical-studies-and-moves-towards-large-volume-manufacturing",
          },
          {
            text: "Talisman needle-free CGM demonstrates strong correlation to blood glucose in clinical studies and moves towards large volume manufacturing",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/news/talisman-needle-free-cgm-demonstrates-strong-correlation-to-blood-glucose-in-clinical-studies-and-moves-towards-large-volume-manufacturing",
          },
          {
            text: "Talisman needle-free CGM demonstrates strong correlation to blood glucose in clinical studies and moves towards large volume manufacturing",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/news/talisman-needle-free-cgm-demonstrates-strong-correlation-to-blood-glucose-in-clinical-studies-and-moves-towards-large-volume-manufacturing",
          },
          {
            text: "Talisman needle-free CGM demonstrates strong correlation to blood glucose in clinical studies and moves towards large volume manufacturing",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/news/talisman-needle-free-cgm-demonstrates-strong-correlation-to-blood-glucose-in-clinical-studies-and-moves-towards-large-volume-manufacturing",
          },
        ]}
      />
      <Newsletter title="Sign up to our newsletter" />
      <Footer />

      {/* Team Page */}
      <TextHero title="Team" />
      <TextAndMedia
        media="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="A team of scientists, engineers and designers"
        text="Sofio is the result of a multi-disciplinary team of scientists, engineers and designers, who have come together to create a new category of glucose monitoring. Our team is made up of experts in the fields of bioelectronics, medicine, engineering, and design, who have worked tirelessly to develop a product that is not only accurate and reliable, but also easy to use and comfortable to wear."
      />
      <Images
        images={[
          {
            url: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Alejandro García Pérez Chief Technology Officer",
          },
          {
            url: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Edward Hæggström Chairman of the Board",
          },
        ]}
      />
      <Numbers
        title="Forming a team"
        text="Our founding team and first hires assembled around the revolutionary idea of a non-invasive glucose monitor. Each of the monitor’s component parts necessitated its own group of experts, tasked with a piece of the puzzle that would combine to reveal the first novel technology in the glucose monitoring space for 25 years. 

Our 50 strong team are made up of more than a dozen nationalities. Together they hold 15 phDs and span disciplines from physics to medicine. As well as having created other mass medical devices, they have also built products that are used in space by NASA. Meet some of our functional leads below."
        items={[
          {
            title: "50",
            text: "Headcount",
          },
          {
            title: "20",
            text: "Nationalities",
          },
          {
            title: "15",
            text: "PhDs",
          },
          {
            title: "50+",
            text: "Device prototypes created to date",
          },
        ]}
      />
      <ImageGrid
        images={[
          {
            url: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Jokke Mäki CEO",
            text: "With more than 300 million type 2 diabetes patients globally, the impact a non-invasive, comfortable and affordable new glucose monitor could have was huge. That’s why Jokke joined the team. His years of experience in senior roles at Nokia and Microsoft granted him in depth knowledge about high volume device and technology sales — the commercial insight needed to ship the monitor to the hundreds of millions of people who would benefit from it.",
          },
          {
            url: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Zhanna Boeva Sensor Lead",
            text: "Zhanna holds a Ph.D. in Polymer Chemistry. Edward asked her to join GlucoModicum while she was working at Åbo Akademi University on DNA biosensors and electrochemistry. At first she worried Edward’s topic would not be interesting enough, and told him so. ‘Blood glucose is so well researched, tests have been in the market for 70 years, what can I contribute as a scientist?’ she asked. Edward assured her that there would be enough of a challenge and that she would be constantly interested — a hypothesis that has been proven every day since. ",
          },
          {
            url: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Harri Palomäki Manufacturing & Ops lead",
            text: "How do you mass manufacture the world’s first sensor able to measure glucose without needles? Without a precedent, Harri flew around the world to personally inspect the automated manufacturing lines suppliers sent proposals for. Together, he and scientists with a suitcase sized lab visited dozens of potential partners they’d selected among hundreds of proposals. There on the production lines, they ensured every one of the product’s details could be replicated at scale, resulting in sensors that truly worked. Designing the machine that builds the machine, and establishing a global supply chain capable of delivering highly specialized components and materials, is the result of years of dedicated development.",
          },
          {
            url: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Reeta Saukkonen QARA Lead",
            text: "Since creating a medical device faces a lot of regulation, Reeta drives development of processes to keep the company compliant. Plans and protocols are carefully mapped out before they are needed. For Reeta, writing is a way of thinking. Her careful documentation surfaces any questions there may not yet be answers for, showing the gaps that need to be filled before moving forward. This ensures a structure and preparedness that allows for a smooth decision making process.",
          },
        ]}
      />
      <TextAndMedia
        media="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Where to find us"
        text="Our headquarters can be found in Helsinki, Finland. Aside from meeting rooms and offices, here you’ll find laboratories where every component part of our prototype monitoring system is engineered, rigorously tested and iterated upon.  Completing our setup are medical rooms where members of the public are welcomed for clinical trials on a daily basis. Though unusual for a startup, these are key given the nature of our innovation. Since there is no standard model for the interstitial fluid our sensor extracts data from, clinical studies began early on and formed a crucial step in the product development. "
      />
      <TextOnMedia
        media="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Tried and tested, thousands of times"
        text="Sofio technology has been used and tested by hundreds of people during the past 6 years. In parallel, our technology and products have undergone tens of thousands of laboratory tests to ensure performance, safety, and consistency. It is quite telling that in our clinical studies we have had several participants who have liked the experience so much that they come again and again to wear and test Sofio – some of them have participated over 10 times in our Clinical Studies."
        settings={{
          textPosition: "left",
          textColor: "white",
          size: "large",
        }}
      />
      <Newsletter title="Sign up to our newsletter" />
      <Footer />
      <TextHero title="FAQ" />
      <FAQ
        sections={[
          {
            title: "1) About Sofio",
            items: [
              {
                question: "What is Sofio?",
                answer:
                  "Sofio is the world’s first needle-free glucose monitor, designed to help you track your glucose levels accurately and comfortably.",
              },
              {
                question: "How does Sofio work?",
                answer:
                  "Sofio uses magnetohydrodynamics to extract interstitial fluid from the skin without breaking it, allowing for non-invasive glucose monitoring.",
              },
              {
                question: "Is Sofio accurate?",
                answer:
                  "Yes, Sofio has been clinically tested and shows a strong correlation with blood glucose levels, making it a reliable tool for glucose monitoring.",
              },
              {
                question: "How long can I wear Sofio?",
                answer:
                  "Sofio is designed to be worn for 16 hours, providing you with valuable data on your glucose levels throughout the day.",
              },
              {
                question: "Is Sofio comfortable to wear?",
                answer:
                  "Yes, Sofio is lightweight and designed for comfort, making it easy to wear during daily activities without noticing it.",
              },
            ],
          },
          {
            title: "2) About Diabetes",
            items: [
              {
                question: "What is diabetes?",
                answer:
                  "Diabetes is a chronic condition that affects how your body processes glucose, leading to high blood sugar levels.",
              },
              {
                question: "What are the symptoms of diabetes?",
                answer:
                  "Common symptoms include increased thirst, frequent urination, fatigue, and blurred vision. However, some people may not experience noticeable symptoms. Common symptoms include increased thirst, frequent urination, fatigue, and blurred vision. However, some people may not experience noticeable symptoms. Common symptoms include increased thirst, frequent urination, fatigue, and blurred vision. However, some people may not experience noticeable symptoms.",
              },
              {
                question: "How can I manage my diabetes?",
                answer:
                  "Managing diabetes typically involves monitoring blood sugar levels, maintaining a healthy diet, regular exercise, and following your healthcare provider's recommendations.",
              },
              {
                question: "What are the different types of diabetes?",
                answer:
                  "The main types of diabetes are Type 1, Type 2, and gestational diabetes. Each type has different causes and management strategies.",
              },
            ],
          },
        ]}
      />
      <Footer />
      <TextHero title="Articles" />
      <ArticleList
        articles={[
          {
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2024-01-01",
            text: "Understanding the basics of glucose monitoring",
          },
          {
            image:
              "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2024-01-02",
            text: "The science behind non-invasive glucose monitoring. The science behind non-invasive glucose monitoring. The science behind non-invasive glucose monitoring. The science behind non-invasive glucose monitoring",
          },
          {
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2024-01-03",
            text: "How to manage your glucose levels effectively, How to manage your glucose levels effectively",
          },
          {
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2024-01-04",
            text: "The future of diabetes management with Sofio",
          },
          {
            date: "2024-01-05",
            text: "Real-life experiences with Sofio",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-06",
            text: "Tips for living with diabetes",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-07",
            text: "The benefits of continuous glucose monitoring",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },

          {
            date: "2024-01-08",
            text: "Understanding glucose spikes and how to avoid them",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-09",
            text: "The role of diet in managing glucose levels",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-10",
            text: "Exercise and its impact on glucose monitoring",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-11",
            text: "The importance of regular glucose monitoring",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-12",
            text: "How Sofio is changing the landscape of diabetes management",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-13",
            text: "Understanding the technology behind Sofio",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-14",
            text: "The benefits of non-invasive glucose monitoring",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-15",
            text: "How to get started with Sofio",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-16",
            text: "Frequently asked questions about Sofio",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },

          {
            date: "2024-01-17",
            text: "The impact of glucose monitoring on overall health",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-18",
            text: "Sofio's role in personalized diabetes care",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            date: "2024-01-19",
            text: "The future of glucose monitoring technology",
            image:
              "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]}
      />
      <Footer />
      <ContactForm
        title="Contact us"
        text="Are you interested in a product, becoming a partner or conducting business with Sofio? Please use the contact form below to get in touch."
      />
    </div>
  );
}
