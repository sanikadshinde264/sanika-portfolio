export const filters = ['All', 'Software', 'Data Analytics', 'AI/ML', 'Web'];

export const projects = [
  {
    id: 'er-insight-hub',
    title: 'Hospital Emergency Room Insight Hub',
    category: 'Data Analytics',
    filterGroup: 'Data Analytics',
    technologies: ['Microsoft Excel', 'Power Query', 'DAX', 'Pivot Tables'],
    description:
      'Analyzed 9,200+ emergency room patient records to identify operational trends, patient patterns, and key performance indicators.',
    problem:
      'Hospital operations teams needed a clear view of ER patient flow, but raw records were unstructured and hard to interpret at scale.',
    solution:
      'Cleaned and modeled over 9,200 ER records into an interactive Excel dashboard, surfacing KPIs that reveal patterns in patient volume, wait times, and outcomes.',
    highlights: [
      'Analyzed 9,200+ ER records',
      'Cleaned and transformed data using Power Query',
      'Created KPIs using DAX',
      'Built interactive Excel dashboards',
      'Generated insights for data-driven hospital operations',
    ],
    github: 'https://github.com/sanikadshinde264/Hospital_Emergency_Room_Insight_Hub',
    liveDemo: null,
    thumbnailType: 'dashboard',
  },
  {
    id: 'interest-calculator',
    title: 'Interest Calculator Web Application',
    category: 'Software Development',
    filterGroup: 'Software',
    technologies: ['Java 17', 'Spring Boot 3', 'MySQL 8', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
    description:
      'Developed a web application that simplifies interest calculations for loans, fixed deposits, and recurring deposits.',
    problem:
      'Manually calculating day-wise or month-wise interest across different deposit and loan types is repetitive and error-prone.',
    solution:
      'Built a Spring Boot backend with a MySQL-backed REST API that computes simple interest, fixed deposit, and recurring deposit projections, paired with a responsive PWA front end and saved calculation history.',
    highlights: [
      'Day-wise Simple Interest',
      'Month-wise Simple Interest',
      'Fixed Deposit calculations',
      'Recurring Deposit projections',
      'Calculation history',
      'REST APIs',
      'MySQL database',
      'Responsive PWA design',
    ],
    github: 'https://github.com/sanikadshinde264/Interest_Calculator',
    liveDemo: null,
    thumbnailType: 'code',
  },
  {
    id: 'device-price-prediction',
    title: 'Electronic Device Price Prediction',
    category: 'Machine Learning',
    filterGroup: 'AI/ML',
    technologies: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
    description:
      'Developed an ML-powered web application that predicts electronic device prices based on device specifications.',
    problem:
      'Buyers and sellers often lack a quick way to estimate a fair price for an electronic device based on its specifications.',
    solution:
      'Trained a regression model on device specification data and served predictions through a Flask backend with an interactive web interface.',
    highlights: [
      'Data preprocessing',
      'Regression modeling',
      'Machine learning prediction',
      'Flask backend',
      'Interactive web interface',
    ],
    github: null,
    liveDemo: null,
    thumbnailType: 'ml',
  },
  {
    id: 'healthcare-chatbot',
    title: 'AI Healthcare Guidance Chatbot',
    category: 'AI / Machine Learning',
    filterGroup: 'AI/ML',
    technologies: ['Ionic', 'AngularJS', 'JavaScript', 'Machine Learning', 'REST APIs'],
    description:
      'Developed a healthcare guidance chatbot capable of assisting users with symptom analysis and hospital recommendations.',
    problem:
      'People often want a quick, informational first step to understand possible causes of symptoms before deciding where to seek care.',
    solution:
      'Built an Ionic/AngularJS chatbot that uses a machine learning model to analyze symptoms and connect to a REST API for hospital recommendations.',
    highlights: [
      'Symptom-based analysis',
      'Machine learning integration',
      'REST API integration',
      'Hospital recommendations',
      'Responsive interface',
    ],
    disclaimer:
      'This project is an educational demonstration and is not intended to provide medical diagnosis or professional medical advice.',
    github: null,
    liveDemo: null,
    thumbnailType: 'chat',
  },
  {
    id: 'car-price-prediction',
    title: 'Car Price Prediction',
    category: 'Machine Learning',
    filterGroup: 'AI/ML',
    technologies: ['Python', 'Flask', 'pandas', 'NumPy', 'scikit-learn', 'HTML', 'Bootstrap'],
    description:
      'Built a machine learning web application that predicts used-car resale prices based on company, model, manufacturing year, kilometers driven, and fuel type.',
    problem:
      'Estimating a fair resale price for a used car is difficult without visibility into how comparable vehicles are priced.',
    solution:
      'Cleaned a dataset of 816 listings across 463 models and 25 manufacturers, engineered features with one-hot encoding, and trained a Linear Regression model deployed through Flask.',
    highlights: [
      'Company selection',
      'Model selection',
      'Manufacturing year',
      'Kilometers driven',
      'Fuel type',
      'Instant prediction',
    ],
    dataset: ['816 cleaned listings', '463 unique car models', '25 manufacturers'],
    method: ['Data cleaning', 'Feature preprocessing', 'One-hot encoding', 'Linear Regression', 'Flask deployment'],
    futureImprovements: ['Random Forest', 'XGBoost', 'Larger dataset', 'Additional vehicle features'],
    github: 'https://github.com/sanikadshinde264/Car-Price-Prediction',
    liveDemo: null,
    thumbnailType: 'ml',
  },
  {
    id: 'weather-insights',
    title: 'Weather Insights',
    category: 'Web Development',
    filterGroup: 'Web',
    technologies: ['React 19', 'JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API', 'Browser Geolocation API', 'SVG'],
    description:
      "Built a responsive weather application that provides live weather information for searched cities or the user's current location.",
    problem:
      'People want fast, accurate weather information for their current location or any city, presented clearly at a glance.',
    solution:
      'Built with React 19, combining the Browser Geolocation API and OpenWeatherMap API, with an animated SVG temperature graph and graceful loading/error states.',
    highlights: [
      'City search',
      'Current location detection',
      'Live temperature',
      'Humidity',
      'Wind speed',
      'Pressure',
      'High/low temperature',
      'Animated SVG temperature graph',
      'Loading and error states',
      'Responsive design',
    ],
    github: 'https://github.com/sanikadshinde264/Weather-Insights',
    liveDemo: null,
    thumbnailType: 'weather',
  },
  {
    id: 'taskmaster-pro',
    title: 'TaskMaster Pro',
    category: 'Web Development',
    filterGroup: 'Web',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Flexbox', 'CSS Grid'],
    description:
      'Developed a responsive task management application with priority-based sorting, progress tracking, productivity statistics, and interactive analytics.',
    problem:
      'Keeping track of task priority, due dates, and overall progress can get messy without a clear, visual system.',
    solution:
      'Built a vanilla JavaScript task manager with automatic priority sorting, due-date tracking, and a Canvas-based analytics graph to visualize productivity over time.',
    highlights: [
      'Task creation',
      'Priority management',
      'Due dates',
      'Completion tracking',
      'Automatic sorting',
      'Productivity statistics',
      'Progress visualization',
      'Canvas analytics graph',
      'Responsive interface',
    ],
    github: 'https://github.com/sanikadshinde264/TaskMaster-Pro',
    liveDemo: null,
    thumbnailType: 'tasks',
  },
];