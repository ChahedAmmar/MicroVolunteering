import translationImg from "../assets/translation.jpg";
import proofreadingImg from "../assets/proofreading.jpeg";
import mentorshipImg from "../assets/mentorship.jpg";
import design from "../assets/design.jpg"
import editing from "../assets/teach.jpg"
import teaching from "../assets/edit .png"

export const missions = [
    {
      id: 1,
      title: "Translate Humanitarian Brochure",
      duration: "1h",
      category: "Translation",
      description: "Translate a 2-page PDF document from English to French for a local NGO.",
      deadline: "2025-07-20",
      fullDescription: "You will be translating a short, 2-page brochure aimed at informing refugees about their rights and available services in their new community. The original text is in English and must be translated to French in a clear, friendly tone. The translated version will be printed and distributed by the NGO.",
      requirements: ["Fluent in English and French", "Experience with humanitarian language is a plus"],
      organization: "Hope4All",
      image:translationImg

    },
    {
      id: 2,
      title: "Proofread Health Article",
      duration: "30 min",
      category: "Proofreading",
      description: "Correct grammar and spelling in a mental health blog post before publication.",
      deadline: "2025-07-15",
      fullDescription: "The blog post is about recognizing and managing anxiety in teenagers. Your role will be to proofread the article for grammar, clarity, and flow. This will help ensure the message reaches readers clearly and professionally.",
      requirements: ["Strong English writing skills", "Detail-oriented"],
      organization: "MindCare Initiative",
      image:proofreadingImg

    },
    {
      id: 3,
      title: "Quick Mentorship Session",
      duration: "45 min",
      category: "Mentoring",
      description: "Advise a high school student on pursuing a degree in computer science.",
      deadline: "2025-07-18",
      fullDescription: "You’ll connect with a high school student (via Zoom or Google Meet) and answer their questions about studying computer science, university life, and career paths. A simple, one-time session to inspire and inform!",
      requirements: ["Some experience in CS", "Friendly and encouraging attitude"],
      organization: "Youth Forward",
      image:mentorshipImg

    },
    {
      id: 4,
      title: "Create Simple Canva Visual",
      duration: "40 min",
      category: "Design",
      description: "Design a basic Instagram post using Canva from text provided by an association.",
      deadline: "2025-07-22",
      fullDescription: "You’ll create a visually appealing Canva post to raise awareness about gender equality. The text content and branding elements will be provided. Your creativity will help boost visibility for this cause online.",
      requirements: ["Basic Canva knowledge", "Creative mindset"],
      organization: "EqualVoices",
      image:design     

    },
    {
      id: 5,
      title: "Edit Educational Worksheet",
      duration: "35 min",
      category: "Education",
      description: "Proofread a worksheet used to teach French to refugee children.",
      deadline: "2025-07-25",
      fullDescription: "This task involves reviewing a worksheet that teaches simple French vocabulary to young refugee students. You'll check for spelling, grammar, and clarity while keeping the tone friendly and accessible.",
      requirements: ["Excellent French grammar", "Educational content familiarity is a plus"],
      organization: "TeachBridge",
      image:teaching

    },
    {
      id: 6,
      title: "Subtitle Short Video",
      duration: "50 min",
      category: "Accessibility",
      description: "Watch a 3-minute video and write English subtitles for accessibility purposes.",
      deadline: "2025-07-21",
      fullDescription: "Your task is to write clear, accurate English subtitles for a short awareness video about disability rights. A transcript and guidelines will be provided. Your contribution makes the video accessible to more people.",
      requirements: ["Good listening and typing skills", "Attention to timing and clarity"],
      organization: "AccessNow",
      image:editing
    },
  ];
  