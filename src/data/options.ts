import { Option } from "../utils/options";

export const productionOptions: Option[] = [
  {
    title: "Sketching the Vision",
    description:
      "Plan the scenes to help bring your vision to life. What kind of boards will you use?",
    selectionView: 5,
    answers: [
      {
        id: 1,
        title: "Hand-drawn boards",
        description: "Classic and creative, but paper-based.",
        price: 250000,
        sustain: 8,
        profit: 2,
      },
      {
        id: 2,
        title: "Digital boards",
        description: "Clean and collaborative, with low waste.",
        price: 500000,
        sustain: 3,
        profit: 3,
      },
    ],
  },

  {
    title: "Choosing Your Stars",
    description:
      "Pick the faces that will make your story. Who will you hire to act in your movie?",
    selectionView: 3,
    answers: [
      {
        id: 1,
        title: "Hire well-known actors",
        description: "Famous talent brings attention, but at a cost.",
        price: 200000,
        sustain: 15,
        profit: 3,
      },
      {
        id: 2,
        title: "Hold an open casting call",
        description: "Discover new talent and lower your footprint.",
        price: 600000,
        sustain: 7,
        profit: 1,
      },
      {
        id: 3,
        title: "Conduct remote auditions",
        description: "Go virtual to reduce travel and expense.",
        price: 200000,
        sustain: 2,
        profit: 1,
      },
    ],
  },
  {
    title: "Build Your World",
    description:
      "Create the environment where your story unfolds. Where will you film your movie?",
    selectionView: 2,
    answers: [
      {
        id: 1,
        title: "Custom sets",
        description: "Design and build your own world from scratch.",
        price: 3000000,
        sustain: 20,
        profit: 3,
      },
      {
        id: 2,
        title: "Repurposed sets",
        description: "Transform existing sets to fit your vision.",
        price: 1000000,
        sustain: 10,
        profit: 2,
      },
      {
        id: 3,
        title: "Natural sets",
        description: "Let real landscapes bring your story to life.",
        price: 500000,
        sustain: 2,
        profit: 1,
      },
    ],
  },
  {
    title: "Illuminate Your World",
    description: "Light the scenes. How will you spotlight your story?",
    selectionView: 6,
    answers: [
      {
        id: 1,
        title: "Generators and LED Lights",
        description: "Strong lighting but energy-heavy.",
        price: 1200000,
        sustain: 20,
        profit: 3,
      },
      {
        id: 2,
        title: "Natural Light",
        description: "Clean and green, but only when the sun is out.",
        price: 100000,
        sustain: 1,
        profit: 1,
      },
    ],
  },
  {
    title: "Choose Your Lens",
    description:
      "Pick the tools that capture your film. What setup will you use?",
    selectionView: 6,
    answers: [
      {
        id: 1,
        title: "Hollywood Setup",
        description: "Full production-grade gear with high impact.",
        price: 3500000,
        sustain: 15,
        profit: 3,
      },
      {
        id: 2,
        title: "Modern Setup",
        description: "Modern tools that do the job with less waste.",
        price: 1000000,
        sustain: 6,
        profit: 2,
      },
    ],
  },
  {
    title: "Add the Magic",
    description:
      "Give the special effects to keep your audience entertained! What kind of SFX will you use?",
    selectionView: 1,
    answers: [
      {
        id: 1,
        title: "On-Set Effects",
        description: "Real-life effects for full immersion.",
        price: 2500000,
        sustain: 12,
        profit: 3,
      },
      {
        id: 2,
        title: "Mixed media",
        description: "A blend of practical and digital effects.",
        price: 1500000,
        sustain: 6,
        profit: 2,
      },
      {
        id: 3,
        title: "CGI",
        description: "Digital effects for reduced waste.",
        price: 1000000,
        sustain: 2,
        profit: 2,
      },
      {
        id: 4,
        title: "Stock FX",
        description: "Reusable effects from online libraries.",
        price: 200000,
        sustain: 1,
        profit: 1,
      },
    ],
  },
  {
    title: "Market the Magic",
    description:
      "Make sure the world knows about your movie! How will you get your film noticed?",
    selectionView: 4,
    answers: [
      {
        id: 1,
        title: "Billboards",
        description: "Massive reach with a large footprint.",
        price: 2000000,
        sustain: 10,
        profit: 3,
      },
      {
        id: 2,
        title: "Press tour",
        description: "Some buzz at lower costs and higher emissions.",
        price: 1200000,
        sustain: 15,
        profit: 2,
      },
      {
        id: 3,
        title: "Digital advertising",
        description: "Targeted, fast, and low-impact promotion.",
        price: 300000,
        sustain: 1,
        profit: 2,
      },
      {
        id: 4,
        title: "Merchandise",
        description: "Wide reach requiring lots of resources.",
        price: 3500000,
        sustain: 20,
        profit: 1,
      },
    ],
  },
  {
    title: "It's Showtime!",
    description:
      "Your movie is officially done! How will your film's debut take place?",
    selectionView: 5,
    answers: [
      {
        id: 1,
        title: "In-Person Premiere",
        description: "Red carpet glamor and press—at a carbon cost.",
        price: 400000,
        sustain: 12,
        profit: 2,
      },
      {
        id: 2,
        title: "Virtual premiere",
        description: "Eco-friendly with smaller reach.",
        price: 150000,
        sustain: 1,
        profit: 2,
      },
    ],
  },
  {
    title: "The Release",
    description:
      "Your movie hits the public! What kind of release will you choose?",
    selectionView: 1,
    answers: [
      {
        id: 1,
        title: "Worldwide release",
        description: "Maximum exposure, maximum emissions.",
        price: 4000000,
        sustain: 18,
        profit: 3,
      },
      {
        id: 2,
        title: "Selective release",
        description: "Limited theaters in chosen cities.",
        price: 1500000,
        sustain: 7,
        profit: 1,
      },
      {
        id: 3,
        title: "Online streaming release",
        description: "Accessible with a minimal footprint.",
        price: 500000,
        sustain: 1,
        profit: 3,
      },
    ],
  },
];

export const marketingOptions: Option[] = [
  {
    title: "the best option",
    description: "yea what the title says",
    selectionView: 1,
    answers: [
      {
        id: 1,
        title: "title1",
        description: "the best choice",
        price: 1,
        sustain: 1,
        profit: 1,
      },
      {
        id: 2,
        title: "title2",
        description: "also the best choice",
        price: 1,
        sustain: 1,
        profit: 1,
      },
      {
        id: 3,
        title: "title3",
        description: "an even better choice",
        price: 1,
        sustain: 1,
        profit: 1,
      },
    ],
  },
];
