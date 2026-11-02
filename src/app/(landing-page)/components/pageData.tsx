import { contact } from "@/utils/constent";
import {
  LuBedDouble,
  LuBike,
  LuCoffee,
  LuDices,
  LuLandmark,
  LuLeaf,
  LuMic,
  LuPersonStanding,
  LuRadio,
  LuSprout,
  LuTv,
  LuWaves,
} from "react-icons/lu";

const bookNow = { label: "BOOK YOUR STAY", link: "#form" };

export const landingPageData = {
  offer:
    "Book early and save 10%, with a <strong>South Indian breakfast</strong> on us every morning.",

  hero: {
    tag: "Mahabalipuram, near Chennai",
    titleLight: "Live the",
    titleBold: "slow life.",
    description:
      "Two art-filled villas and a hut room on five acres of paddy fields and mango groves, with a long linear pool, just over an hour from Chennai.",
    rating: {
      value: "4.9",
      label: "Guest favourite on Airbnb, hosted by a Superhost",
    },
    image: "/images/hero.jpg",
    highlights: [
      {
        icon: <LuBedDouble />,
        title: "2 villas + a hut room",
        description: "Room for up to 12 guests",
      },
      {
        icon: <LuWaves />,
        title: "A private linear pool",
        description: "Steps from both villas",
      },
      {
        icon: <LuLeaf />,
        title: "Five acres of nature",
        description: "Paddy fields and mango groves",
      },
      {
        icon: <LuCoffee />,
        title: "Breakfast on us",
        description: "South Indian, every morning",
      },
    ],
  },

  aboutSection: {
    title: "Where art and luxury meet the paddy fields.",
    description:
      "Away from the hustle of the city, Midori sits amid five acres of paddy and mango groves. The bamboo decks, the hand-woven lamps, the open-to-sky baths: every corner has been thought through so the place itself asks you to pause.",
    quote:
      "“We’ve travelled to more than 50 countries, and moved back to Chennai to build a place we would love to stay in. Our message to every guest: disconnect to connect.”",
    quoteBy: "Anil and Charanya, co-founders",
    quoteImage: "/images/founders.jpg",
    image: "/images/about.jpg",
  },

  staySection: {
    title: "Two villas and a hut room.",
    description:
      "Take a villa for two to four, both villas for up to eight, or the hut room for two. Book all three and Midori is yours, for up to twelve.",
    villas: {
      title: "The villas",
      tags: ["1,200 sq ft each", "10–12 guests per villa", "Direct pool access"],
      description:
        "Textured white walls, sunken living rooms and windows full of paddy. Each villa opens straight onto the pool, with a caretaker and cook on site.",
      features: [
        "A bedroom with a super king bed and a day bed",
        "An air-conditioned living room",
        "An open-to-sky shower",
        "An upper bamboo deck",
        "A private pool deck and a sit-out facing the paddy",
      ],
      images: [
        { src: "/images/hut1.jpg", caption: "The sunken living room" },
        { src: "/images/hut2.jpg", caption: "Paddy-view bedroom" },
        { src: "/images/hut3.JPG", caption: "Open-to-sky bath" },
      ],
      button: bookNow,
    },
    hut: {
      title: "The hut room",
      tags: ["Up to 3 guests", "Bunk bed", "Attached bath, courtyard view"],
      description:
        "A cosy room for two with a bunk bed and its own bathroom that looks onto an open courtyard. Hut room guests have the same run of the farm, the Paddy Deck and the mango groves.",
      images: [
        { src: "/images/hut-exterior.jpg", caption: "The hut room" },
        { src: "/images/hut5.jpg", caption: "Hut room bathroom" },
      ],
      button: bookNow,
    },
  },

  experienceSection: {
    title: "Days set to the rhythm of the farm.",
    description:
      "Nothing here runs on a schedule. These are the places guests keep coming back to.",
    places: [
      {
        image: "/images/day1.jpg",
        title: "The Paddy Deck",
        description:
          "Our signature bamboo deck, reached by a walkway through the rice. For long mornings, books and birdsong.",
      },
      {
        image: "/images/day2.jpg",
        title: "The Thotti",
        description:
          "A village-style pumpset bath in the fields. Cold water, open sky and a trip back in time.",
      },
      {
        image: "/images/day3.jpg",
        title: "The Mango Grove",
        description:
          "Stroll the rows of trees, find some shade and stay for lunch under the canopy.",
      },
      {
        image: "/images/day4.jpg",
        title: "The Linear Pool",
        description:
          "Step off your own pool deck into a long, clean pool that runs the length of both villas.",
      },
    ],
    button: bookNow,
    more: {
      title: "And plenty more to fill a slow day.",
      image: "/images/day5.jpg",
      button: bookNow,
      items: [
        {
          icon: <LuBike />,
          title: "Cycle to the village",
          description:
            "Borrow a cycle and ride past the fields to the village nearby.",
        },
        {
          icon: <LuLandmark />,
          title: "Mahabalipuram with a guide",
          description:
            "The shore temples and rock carvings are seven minutes away. We’ll set you up with a local guide.",
        },
        {
          icon: <LuSprout />,
          title: "Sow paddy, pluck mangoes (seasonal)",
          description:
            "Help plant the rice or harvest the mango trees when the season is right.",
        },
        {
          icon: <LuTv />,
          title: "Movie under the stars",
          description:
            "An outdoor screening after dinner, with the fields gone quiet around you.",
        },
        {
          icon: <LuMic />,
          title: "Karaoke nights",
          description:
            "A karaoke set for the evenings, for the singers in the family and the brave ones.",
        },
        {
          icon: <LuRadio />,
          title: "Music by the pool",
          description:
            "Marshall speakers in the villas, and a guitar on request.",
        },
        {
          icon: <LuDices />,
          title: "Board games and books",
          description:
            "A shelf of games for friends and family, and books for slow afternoons.",
        },
        {
          icon: <LuPersonStanding />,
          title: "Morning yoga",
          description:
            "Yoga mats for a quiet stretch on the deck as the sun comes up over the paddy.",
        },
      ],
    },
  },

  daySection: {
    title: "A day at Midori.",
    description:
      "There’s no itinerary here. This is simply how a day tends to unfold.",
    images: [
      { src: "/images/day6.jpg", caption: "Mango trees beside the paddy" },
      { src: "/images/dinner1.jpg", caption: "A day at Midori" },
      { src: "/images/photo1.jpg", caption: "A day at Midori" },
      { src: "/images/photo2.jpg", caption: "A day at Midori" },
      { src: "/images/day2.jpg", caption: "A day at Midori" },
    ],
    button: bookNow,
    timeline: [
      {
        time: "6:00 am",
        text: "Wake to birdsong and watch the sun come up over the paddy.",
      },
      {
        time: "7:30 am",
        text: "Tea on the upper deck, slowly, with nothing but green in view.",
      },
      {
        time: "9:00 am",
        text: "A long South Indian breakfast to start the day.",
      },
      {
        time: "11:00 am",
        text: "A splash in the Thotti, with the fields all around.",
      },
      {
        time: "12:00 noon",
        text: "Board games indoors while the day warms up.",
      },
      { time: "2:00 pm", text: "Lunch under the mango trees." },
      {
        time: "3:00 pm",
        text: "An unhurried afternoon nap. Nothing restores like it.",
      },
      { time: "4:30 pm", text: "Cycle out to the village." },
      {
        time: "5:30 pm",
        text: "A sunset walk to the Paddy Deck, then evening tea.",
      },
      { time: "6:30 pm", text: "Pool time, straight off your own deck." },
      { time: "8:00 pm", text: "A movie under the stars." },
      {
        time: "9:00 pm",
        text: "Dinner, then karaoke with the people you came with.",
      },
    ],
  },

  celebrationSection: {
    title: "Dinner under the stars, in the middle of a rice field.",
    description:
      "We dress the Paddy Deck or the mango grove with flowers, candles and a long table, and our cook serves village-style South Indian food made with fresh produce.",
    occasions: [
      "Birthdays",
      "Anniversaries",
      "Proposals",
      "Family get-togethers",
    ],
    note: "Set-ups are an add-on. Tell us the occasion when you enquire.",
    images: [
      "/images/dinner1.jpg",
      "/images/dinner2.jpg",
      "/images/dinner3.jpg",
    ],
    button: { label: "Plan a celebration", link: contact.WhatsappCta },
  },

  photoshootSection: {
    title: "A backdrop for the photos you’ll keep.",
    description:
      "Golden paddy at sunset, a lantern-lit walkway, a macramé teepee under the mango trees. We style the set, you bring the moment.",
    button: { label: "Plan a photoshoot", link: contact.WhatsappCta },
    images: [
      { src: "/images/photo1.jpg", caption: "The teepee set-up" },
      {
        src: "/images/photo2.jpg",
        caption: "The paddy walkway at dusk",
      },
      { src: "/images/photo3.jpg", caption: "The Paddy Deck" },
      { src: "/images/photo4.jpg", caption: "The mango grove" },
    ],
    shoots: [
      {
        title: "Pre-wedding and couples",
        description:
          "The walkway at golden hour, the deck dressed for two, and fields that go on forever behind you.",
      },
      {
        title: "Proposals and anniversaries",
        description:
          "We set the scene, keep the secret and quietly step out of frame.",
      },
      {
        title: "Maternity and family portraits",
        description:
          "Soft light in the mango grove and plenty of room for every generation.",
      },
      {
        title: "Birthdays and creators",
        description:
          "Styled tables and set-ups for milestone birthdays, brands and content shoots.",
      },
    ],
    highlights: [
      "Styled set-ups and props",
      "Golden hour or after deck",
      "Fairy lights, candles and florals",
      "Bring your photographer or ask us to suggest one",
      "Set-ups are an add-on ",
    ],
  },

  gallerySection: {
    title: "A glimpse of Midori.",
    description: "Every space, moment and detail, as our guests find it.",
    button: bookNow,
    images: [
      {
        src: "/images/gallery1.jpg",
        caption: "The villas from the pool",
      },
      { src: "/images/gallery2.jpg", caption: "Hand-woven lamps" },
      {
        src: "/images/day1.jpg",
        caption: "The walk to the Paddy Deck",
      },
      { src: "/images/hut1.jpg", caption: "Living room" },
      { src: "/images/gallery5.jpg", caption: "Music in the villas" },
      { src: "/images/day6.jpg", caption: "The sit-out" },
      { src: "/images/hut3.JPG", caption: "Open-to-sky-bath" },
    ],
  },

  locationSection: {
    title: "Out of the city. Into your element.",
    description:
      "Among the paddy fields and mango groves near Mahabalipuram, Midori is close enough for a weekend and quiet enough to feel like a world of its own.",
    image: "/images/d46ad7ce916e827d16d027a1a7986e30bcb4f078.jpg",
    distances: [
      { value: "~1 hr", label: "from Chennai" },
      { value: "~7 min", label: "from Mahabalipuram" },
    ],
    note: "Travel times are approximate and depend on traffic.",
  },

  reviewSection: {
    title: "Rated 4.9 out of 5 by our Airbnb guests.",
    description:
      "90% of stays get five stars. Guests talk about the hospitality most, then the pool and the interiors.",
    ratings: [
      { label: "Check-in", value: "5.0" },
      { label: "Cleanliness", value: "4.9" },
      { label: "Location", value: "4.9" },
      { label: "Communication", value: "4.8" },
      { label: "Accuracy", value: "4.8" },
      { label: "Value", value: "4.6" },
    ],
    reviews: [
      {
        name: "Chandrika",
        review:
          "“Midori was a little slice of heaven. We only spent one night and wished our stay was longer. Time completely stands still here, in the best way possible.”",
      },
      {
        name: "Nisha",
        review:
          "“It felt like home away from home. Their chef handled all our last-minute requests gracefully, and the dinner set-up really stood out.”",
      },
      {
        name: "Mandy Kerlann",
        review:
          "“if you love an orchestra of crickets and toads...   as we do..this place is for you. Its a small island of magic.Rustic and quiet charming small farm house. Please note there are no restaurants ...cuisine is cooked by the résident chef caretaker. This is not very transparent and should be as we were surprised. The staff are lovely and we are easy going for food go we adapted. We bought our own champagne to enjoy under the stars. No alcoolique drinks are provided...nor fridge filled with drinks. So go with a véhicule filled with fruit, drinks and snacks.we totally loved the little caban in the middle of the rice field. I highly recommend it for calmness and peace.”",
      },
      {
        name: "Ganesh",
        review:
          "“Thank you very much we had a really good time, came with a group of friends to celebrate. Really enjoyed stay at your place and found everything to be great and very comfortable like enjoyed the pump in the fields or the treehouse style rooftop seating and the paddy seating all very unique and ads to the vibes a lot! Clean pool and very helpful staff. Cool interiors too. All round very memorable stay”",
      },
      {
        name: "Venkat",
        review:
          "“My stay at Midori Luxury Farmstay in Mahabalipuram was an absolute delight! The villa is beautifully maintained, with lush green surroundings and a serene atmosphere that provided the perfect escape from city life. The swimming pool was pristine, and the spacious accommodations were both modern and comfortable. We did encounter some harmless insects like ants, which is to be expected in such a lush, natural environment, but they did not detract from our enjoyment. The staff were incredibly hospitable, ensuring we had everything we needed for a relaxing stay.”",
      },
      {
        name: "Swathi",
        review:
          "“We visited with my grandfather, parents and my son, four generations from 3 to 85, and each one of us loved it. A family memory for life.”",
      },
      // add real 5-star Google / OTA reviews here, copied from the listing:
      // { name: "First name", review: "“Exact review text”", source: "Google" },
    ],
  },

  faq: {
    title: "Questions guests ask us most.",
    description:
      "Anything else, message us on WhatsApp and we’ll get back to you.",
    items: [
      {
        q: "Where exactly is Midori?",
        a: "Near Mahabalipuram, about seven minutes from town and just over an hour from Chennai, depending on traffic.",
      },
      {
        q: "What are the check-in and check-out times?",
        a: "We share the check-in and check-out times with your booking confirmation. Tell us your travel plans and we’ll do our best to work around early arrivals or late departures.",
      },
      {
        q: "Who is the hut room for?",
        a: "The hut room suits two guests, with a bunk bed and its own attached bathroom facing an open courtyard. It works well on its own or alongside the villas for a larger group.",
      },
      {
        q: "Can we book the whole property?",
        a: "Yes. Book both villas and the hut room together and Midori is yours, for up to ten guests.",
      },
      {
        q: "What about food?",
        a: "A South Indian breakfast is on us every morning when you book direct. Our cook can also prepare village-style South Indian meals with fresh produce; tell us what you’d like when you enquire.",
      },
      {
        q: "Is Midori good for children?",
        a: "Families love it here, from little ones to grandparents. There’s plenty of open space, cycles, board games and the farm to explore. The pool and fields need adult supervision for children.",
      },
      {
        q: "How do I confirm a booking?",
        a: "Share your dates through the form or on WhatsApp. We’ll confirm availability and send you the details to complete your booking.",
      },
    ],
  },

  finalCta: {
    title: "Tell us when you’d like to arrive.",
    description:
      "We’ll confirm availability and get back to you with the details.",
  },
};
