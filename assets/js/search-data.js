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
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications of Prof. Özgür B. Akan.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Our research activities form the foundation for the projects we undertake. By exploring fundamental principles in molecular communications, nano-networks, and emerging paradigms such as the Internet of Bio-Nano Things, we establish the theoretical and experimental groundwork that drives our applied initiatives. These projects not only test and validate our models in real-world scenarios but also create new insights that feed back into our ongoing research.The projects below represent concrete extensions of our research directions. Each one transforms core ideas into interdisciplinary applications, engaging with partners across academia, industry, and society to demonstrate the impact of molecular communications and beyond.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Members of the Internet of Everything (IoE) Group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching activities of Prof. Özgür B. Akan",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-news",
          title: "News",
          description: "News of the Internet of Everything (IoE) Group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-group-website-have-been-launched-today",
          title: 'Our group website have been launched today!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-congratulations-to-hanlin-and-zherong-on-graduating-from-the-mphil-programme",
          title: 'Congratulations to Hanlin and Zherong on graduating from the MPhil programme.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-welcome-melih-fatih-and-hanlin-as-new-phd-students-to-our-group",
          title: 'Welcome Melih, Fatih and Hanlin as new PhD students to our group!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-tubitak-109e257",
          title: 'TUBITAK 109E257',
          description: "Nanoscale and Quantum Communications (2010-2013)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-ibm-faculty-award-2010",
          title: 'IBM Faculty Award 2010',
          description: "Distributed Quantum Nano-scale Computing Architecture (2010-2012)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-tuba",
          title: 'TUBA',
          description: "Communication Protocols for Nano-networks (2008-2010)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-tubitak-kariyer-104e043",
          title: 'TUBITAK-KARIYER 104E043',
          description: "Wireless Passive Sensor Networks (2005-2010)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-tubitak-106e179",
          title: 'TUBITAK 106E179',
          description: "Bio-inspired Communications for Large Scale Systems (2008-2009)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project/";
            },},{id: "projects-ibm-faculty-award-2008",
          title: 'IBM Faculty Award 2008',
          description: "NanoNets: Nano-scale Communication Theory and Algorithms for Nanonetworks (2008-2010)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_project/";
            },},{id: "projects-metu-bap-2007-03-01-01",
          title: 'METU BAP-2007-03-01-01',
          description: "Target Tracking, 3D Localization and Tracking in Underwater Acoustic Sensor Networks (2007)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_project/";
            },},{id: "projects-metu-bap-2005-03-01-04",
          title: 'METU BAP-2005-03-01-04',
          description: "Real-time Multimedia Communications in Wireless Sensor Networks (2005-2006)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_project/";
            },},{id: "projects-tubitak-cost-290",
          title: 'TUBITAK-(COST 290)',
          description: "Communication Protocols for Next-generation Multi-service Wireless Internet",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_project/";
            },},{id: "projects-aselsan-inc",
          title: 'ASELSAN Inc.',
          description: "Remote Surveillance with Wireless Sensor Networks (2005-2006)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_project/";
            },},{id: "projects-axa-research-fund",
          title: 'AXA RESEARCH FUND',
          description: "AXA Chair in Molecular Information and Communication Technologies (2020-2025)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-european-research-council",
          title: 'European Research Council',
          description: "MINERVA: Communication Theoretical Foundations of Nervous System Towards Bio-Inspired Nanonetworks and ICT-Inspired Neuro-Treatment (2014-2019)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-tubitak-1003-fund",
          title: 'TUBITAK 1003 Fund',
          description: "TeraFemto: Terahertz Femtocell for 5G Mobile Networks (2014-2017)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-european-commission",
          title: 'European Commission',
          description: "CIRCLE: Coordinating European Research on Molecular Communications (2015-2017)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-lockheed-martin",
          title: 'Lockheed Martin',
          description: "Mobile Ad Hoc beyond-Line-of-Sight (b-LoS) Networks (2012-2015)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-turk-telekom",
          title: 'TURK TELEKOM',
          description: "Green Visible Light Communications (2012-2013)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-intel-corporation",
          title: 'Intel Corporation',
          description: "Energy Efficient Scheduling for LTE (2012-2013)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-turk-telekom",
          title: 'TURK TELEKOM',
          description: "Fundamentals of Green Communications (2011-2013)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-tubitak-110e249",
          title: 'TUBITAK 110E249',
          description: "Cognitive Radio Sensor Networks (2011-2014)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%62%61%32%31@%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Cambridge-IoE-Group", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/38484380700/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/özgür-barış-akan-90047a72", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2523-3858", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Hy-HMd8AAAAJ", "_blank");
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
