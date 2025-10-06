// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Scholarly publications and research works, organized by category and year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Explore our comprehensive courses in deep generative models, machine learning, and artificial intelligence. Our curriculum bridges theoretical foundations with practical applications, preparing students for cutting-edge research and industry challenges in AI. Browse our graduate and undergraduate course offerings to advance your expertise in modern machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Meet our distinguished researchers and team members driving innovation in AI and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-reinforcement-learning",
          title: 'Reinforcement Learning',
          description: "Projects on Reinforcement Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Reinforcement-Learning/";
            },},{id: "projects-trustworthy-machine-learning",
          title: 'Trustworthy Machine Learning',
          description: "Projects on Trustworthy Machine Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Trustworthy-Machine-Learning/";
            },},{id: "projects-vector-field-generative-ai-models",
          title: 'Vector-Field Generative AI Models',
          description: "Projects on Vector-Field Generative AI Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Vector-Field-Generative-AI-Models/";
            },},{id: "teaching-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "An introductory course covering fundamental machine learning algorithms including classification, regression, decision trees, and clustering, with hands-on implementation and applications.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ML-Spring-2023";
            },},{id: "teaching-deep-generative-models",
          title: 'Deep Generative Models',
          description: "A comprehensive graduate course on modern deep generative models, covering both theoretical foundations and practical applications.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/DGM-Fall-2024";
            },},{id: "teaching-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "An introductory course covering fundamental machine learning algorithms including classification, regression, decision trees, and clustering, with hands-on implementation and applications.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ML-Fall-2025";
            },},{id: "teaching-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "An introductory course covering fundamental machine learning algorithms including classification, regression, decision trees, and clustering, with hands-on implementation and applications.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ML-Spring-2025";
            },},{id: "teaching-deep-generative-models",
          title: 'Deep Generative Models',
          description: "A comprehensive graduate course on modern deep generative models, covering both theoretical foundations and practical applications.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/DGM-Fall-2025";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
