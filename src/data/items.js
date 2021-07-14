import img from "../assets/img";

const items = [
  {
    id: 1,
    categories: ["pure-css"],
    thumbnail: img.archmove1,
    screenshots: [img.archmove1],
    title: "Arch Move",
    description:
      "Help client build his landing page by converting his Figma design to HTML, CSS, and Javascript.",
    created: "2021",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: ["Front-End"],
    url: "https://archmove-gilbertlc.vercel.app/",
  },
  {
    id: 2,
    categories: ["pure-css", "personal"],
    thumbnail: img.portfolio1,
    screenshots: [img.portfolio1, img.portfolio2, img.portfolio3],
    title: "Personal Portfolio",
    description:
      "Built a portfolio website to showcase my recent projects. I've used React, styled and animate it with CSS, and custom VanillaJS for building modal, slider, pagination, navigation, etc. You can check out the link to my source code below",
    created: "2021",
    technologies: ["HTML", "CSS (preprocessed w/ SASS)", "JavaScript", "React"],
    role: ["Front-End"],
    url: "https://github.com/gilbertlc/portfolio",
  },
  {
    id: 3,
    categories: ["bootstrap", "back-end"],
    thumbnail: img.diliDashboard,
    screenshots: [
      img.diliDashboard,
      img.diliResidents,
      img.diliEvents,
      img.diliCertificates,
    ],
    title: "Barangay Dili System",
    description:
      "The system stored residents' data in the barangay for officials and admins to view, and manage. This is our thesis back in college, we were consist of 3 individuals and I am the lead developer and designer of this project.",
    created: "2017",
    technologies: ["HTML", "CSS", "jQuery", "Bootstrap", "Django", "MySQL"],
    role: ["Front-End", "Back-End"],
  },
  {
    id: 4,
    categories: ["bootstrap", "back-end"],
    thumbnail: img.sjnhsLogin,
    screenshots: [
      img.sjnhsLogin,
      img.sjnhsVote,
      img.sjnhsResults,
      img.sjnhsStudents,
      img.sjnhsCandidates,
    ],
    title: "SJNHS Voting System",
    description:
      "Help client with their thesis by building a voting system for a local secondary school as well as help them write a documentation for it. Built with Bootstrap for styling and PHP in the back-end.",
    created: "2017",
    technologies: ["HTML", "CSS", "jQuery", "Bootstrap", "PHP", "MySQL"],
    role: ["Front-End", "Back-End"],
  },
  {
    id: 5,
    categories: ["pure-css", "back-end", "personal"],
    thumbnail: img.pigly1,
    screenshots: [img.pigly1, img.pigly2, img.pigly3],
    title: "Pigly",
    description: "Built a url shortener using Ruby on Rails in the back-end.",
    created: "2018",
    technologies: [
      "HTML",
      "CSS (preprocessed w/ SASS)",
      "JavaScript",
      "Ruby on Rails",
    ],
    role: ["Front-End", "Back-End"],
    url: "https://pig-ly.herokuapp.com/",
  },
  {
    id: 6,
    categories: ["bootstrap", "back-end", "personal"],
    thumbnail: img.booking1,
    screenshots: [
      img.booking1,
      img.booking2,
      img.booking3,
      img.booking4,
      img.booking5,
      img.booking6,
    ],
    title: "Online Booking Form",
    description: `Built an online booking form with Bootstrap and Ruby on Rails in the back-end. It has cool features like email notification (for client, and admin), admin panel (with filters, scopes, etc) and more. Still a bit rough around the edges but all important features are implemented. You can check out the admin panel at <a href='https://stormy-earth-93721.herokuapp.com/admin' target='_blank'>https://stormy-earth-93721.herokuapp.com/admin</a> and use 'admin@example.com', 'password' for credentials.`,
    created: "2018",
    technologies: [
      "HTML",
      "CSS (preprocessed w/ SASS)",
      "Bootstrap",
      "JavaScript",
      "Ruby on Rails",
    ],
    role: ["Front-End", "Back-End"],
    url: "https://stormy-earth-93721.herokuapp.com/",
  },
];

export default items;
