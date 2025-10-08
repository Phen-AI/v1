export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  overview: string;
  useCases: { title: string; description: string }[];
  approach: { step: string; description: string }[];
  technologies: string[];
  services: string[];
  metrics: { label: string; value: string }[];
}

export interface Service {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  overview: string;
  included: string[];
  keyCapabilities: string[];
  process: { step: string; description: string }[];
  deploymentOptions: string;
  deliverables: string[];
  tools: string[];
}

export interface Technology {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  applications: string[];
  relatedServices: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  heroImage: string;
  summary: string;
  content: string;
  tags: string[];
  readingTime: number;
}

export interface TeamMember {
  name: string;
  role: string;
  headshot: string;
  bio: string;
  socials: { platform: string; url: string }[];
}

export const industries: Industry[] = [
  {
    slug: "agriculture",
    title: "Agriculture",
    tagline:
      "AI-powered agriculture solutions for crop monitoring, yield optimization, and smart farming. Boost sustainability and productivity with Phen AI.",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop",
    overview:
      "At Phen AI, we empower the future of agriculture with AI-driven crop monitoring, computer vision, and predictive analytics. Our intelligent solutions help farmers and agribusinesses improve productivity, reduce costs, and promote sustainable farming practices. By integrating machine learning, IoT-based sensors, and edge AI, we deliver real-time insights on crop health, disease detection, irrigation optimization, and yield forecasting.\n\nFarmers gain the ability to act on data instead of guesswork - ensuring healthier crops, efficient water use, and lower environmental impact. From vineyards and open-field crops to greenhouse systems, Phen AI's agricultural intelligence platform transforms raw farm data into actionable insights. Our AI agriculture solutions drive precision, efficiency, and sustainability - helping every grower maximize yield while minimizing waste. Harness the power of smart farming technology and computer vision in agriculture to achieve data-driven growth, resilient operations, and a greener tomorrow.",
    useCases: [
      { title: "Disease Detection", description: "Early identification of crop diseases through image analysis" },
      { title: "Yield Prediction", description: "Accurate forecasting of harvest outcomes using historical and real-time data" },
      { title: "Resource Optimization", description: "Intelligent management of water, fertilizer, and pesticide usage" },
      { title: "Soil Analysis", description: "Comprehensive soil health monitoring and recommendations" }
    ],
    approach: [
      { step: "Data Collection", description: "Deploy sensors and drones to gather comprehensive field data" },
      { step: "Model Training", description: "Train custom models on your specific crops and conditions" },
      { step: "Integration", description: "Seamlessly integrate with existing farm management systems" },
      { step: "Continuous Learning", description: "Refine models with ongoing data for improved accuracy" }
    ],
    technologies: ["computer-vision", "ai-ml", "data-engineering"],
    services: ["ai-mvp-development", "app-development"],
    metrics: [
      { label: "Yield Increase", value: "23%" },
      { label: "Resource Savings", value: "31%" },
      { label: "Detection Accuracy", value: "94%" }
    ]
  },
  {
    slug: "ed-tech",
    title: "Ed-Tech",
    tagline:
      "Immersive Ed-Tech powered by AI, VR, and AR. Enhance engagement, retention, and skill development with Phen AI's adaptive learning technology.",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop",
    overview:
      "At Phen AI, we're shaping the future of education through immersive VR/AR technology, AI-powered adaptive learning, and data-driven classroom intelligence. Our solutions combine virtual reality, machine learning, and predictive analytics to create personalized and engaging learning experiences that boost retention and accelerate skill development. By integrating AI-driven assessment systems, real-time feedback tools, and interactive 3D environments, we help educators design smarter curriculums that adapt to every learner's pace and performance.\n\nWhether for corporate training, academic institutions, or vocational skill development, Phen AI bridges the gap between learning theory and immersive experience. With Phen AI's Ed-Tech innovations, institutions can transform traditional teaching into experiential learning ecosystems - driving engagement, improving outcomes, and preparing students for the intelligent world ahead.",
    useCases: [
      { title: "VR Training Simulations", description: "Realistic practice environments for complex procedures" },
      { title: "Adaptive Learning Paths", description: "AI-driven personalization of educational content" },
      { title: "Virtual Labs", description: "Safe, cost-effective experimentation in virtual environments" },
      { title: "Assessment Analytics", description: "Data-driven insights into student performance and engagement" }
    ],
    approach: [
      { step: "Curriculum Analysis", description: "Review existing materials and learning objectives" },
      { step: "Experience Design", description: "Create immersive scenarios aligned with educational goals" },
      { step: "Development", description: "Build interactive VR/AR experiences with real-time feedback" },
      { step: "Validation", description: "Test with educators and learners to ensure effectiveness" }
    ],
    technologies: ["vr-ar", "ai-ml"],
    services: ["immersive-experiences", "ai-mvp-development"],
    metrics: [
      { label: "Retention Improvement", value: "67%" },
      { label: "Training Time Reduction", value: "42%" },
      { label: "Student Engagement", value: "89%" }
    ]
  },
  {
    slug: "legal",
    title: "Legal",
    tagline:
      "AI-powered legal solutions for document review, compliance, and contract analysis. Secure cloud and on-premise systems built for privacy, speed, and accuracy.",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop",
    overview:
      "At Phen AI, we redefine how law firms and legal departments manage document review, case analysis, and compliance through secure, cloud-based and on-premise AI solutions. Our technology combines natural language processing (NLP) and machine learning to automate contract analysis, streamline legal research, and enhance due diligence workflows - while maintaining the highest levels of privacy and accuracy. With AI-powered document intelligence, Phen AI delivers rapid discovery, precise classification, and context-aware summarization of case files, contracts, and correspondence.\n\nFirms can choose between cloud deployment for scalability and accessibility, or on-premise systems for complete data control and compliance with strict confidentiality protocols - ensuring flexibility without compromising security. Whether it's law firm automation, corporate legal review, or regulatory compliance, Phen AI empowers legal professionals to save time, reduce manual workloads, and focus on strategic outcomes. Our hybrid AI framework transforms legal operations through intelligent automation - combining performance, privacy, and adaptability for the modern legal practice.",
    useCases: [
      { title: "Contract Review", description: "Automated analysis of agreements for risks and obligations" },
      { title: "Legal Research", description: "Intelligent search and summarization of case law" },
      { title: "Due Diligence", description: "Rapid review of large document collections" },
      { title: "Compliance Monitoring", description: "Ongoing tracking of regulatory changes and requirements" }
    ],
    approach: [
      { step: "Security Assessment", description: "Evaluate infrastructure and compliance requirements" },
      { step: "Model Customization", description: "Train models on legal domain and firm-specific practices" },
      { step: "On-Premise Deployment", description: "Install AI systems within your secure environment" },
      { step: "Ongoing Support", description: "Provide updates and maintenance while preserving confidentiality" }
    ],
    technologies: ["on-prem-ai", "ai-ml"],
    services: ["app-development"],
    metrics: [
      { label: "Review Speed", value: "10x faster" },
      { label: "Accuracy", value: "96%" },
      { label: "Cost Reduction", value: "54%" }
    ]
  },
  {
    slug: "finance",
    title: "Finance",
    tagline:
      "AI solutions for accountants and firms. Automate document review, reconciliation, and compliance with secure on-premise or cloud-based AI from Phen AI.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
    overview:
      "At Phen AI, we empower accounting firms and financial professionals with AI-driven automation, secure document intelligence, and advanced data analytics - available through both on-premise and cloud-based deployments. Our solutions are designed to streamline accounting operations, improve accuracy, and ensure compliance while maintaining full control over sensitive financial data. Using machine learning and natural language processing, our systems intelligently process and analyze financial documents - from invoices and ledgers to tax filings and audit reports.\n\nPhen AI's cloud and on-premise AI solutions accelerate document review, automate data reconciliation, and extract actionable insights to reduce human error and improve decision-making. Whether you're managing complex client portfolios, conducting audits, or handling compliance reviews, Phen AI brings automation that adapts to your infrastructure. With cloud scalability for flexibility and on-premise deployment for confidentiality, accounting firms can choose the model that best fits their security and workflow needs. With Phen AI, accounting professionals gain a trusted AI partner that enhances productivity, preserves privacy, and delivers measurable efficiency - transforming how financial firms operate in a digital-first world.",
    useCases: [
      { title: "Fraud Detection", description: "Real-time identification of suspicious transactions" },
      { title: "Credit Risk Modeling", description: "Accurate assessment of borrower creditworthiness" },
      { title: "Portfolio Optimization", description: "AI-driven strategies for asset allocation" },
      { title: "Market Prediction", description: "Forecasting of trends and price movements" }
    ],
    approach: [
      { step: "Data Integration", description: "Connect to market feeds and internal systems" },
      { step: "Model Development", description: "Build custom models for your specific use cases" },
      { step: "Backtesting", description: "Validate predictions against historical data" },
      { step: "Deployment", description: "Integrate models into trading and risk platforms" }
    ],
    technologies: ["ai-ml", "data-engineering"],
    services: ["ai-mvp-development", "app-development"],
    metrics: [
      { label: "Fraud Detection Rate", value: "99.2%" },
      { label: "False Positives", value: "-78%" },
      { label: "ROI", value: "340%" }
    ]
  },
  {
    slug: "supply-chain",
    title: "Supply Chain",
    tagline:
      "AI solutions for supply chain visibility and optimization. Forecast demand, optimize inventory, and assess supplier risks with cloud or on-premise AI.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop",
    overview:
      "At Phen AI, we transform supply chain operations through AI-driven analytics, predictive modeling, and real-time visibility - available via secure on-premise systems or scalable cloud platforms. Our technology provides end-to-end insight into logistics, warehousing, and distribution, helping organizations reduce costs, enhance delivery accuracy, and improve operational agility. Our AI supply chain solutions are built around four key pillars: Demand Forecasting - enabling accurate prediction of product demand across regions and seasons; Inventory Optimization - applying smart stocking strategies to minimize holding costs and prevent shortages; Route Optimization - improving delivery planning and logistics coordination for maximum efficiency; Supplier Risk Assessment - proactively identifying vulnerabilities and mitigating disruptions across the supplier network.\n\nBy integrating machine learning, IoT sensors, and real-time data analytics, Phen AI empowers businesses to anticipate challenges, adapt quickly, and make data-driven supply chain decisions. Whether deployed on-premise for data sovereignty or in the cloud for scalability and collaboration, our hybrid AI infrastructure ensures visibility and efficiency from procurement to last-mile delivery. With Phen AI, organizations gain the intelligence to optimize resources, ensure reliability, and build resilient supply chains ready for the future.",
    useCases: [
      { title: "Demand Forecasting", description: "Accurate prediction of product demand across markets" },
      { title: "Inventory Optimization", description: "Smart stocking strategies to reduce holding costs" },
      { title: "Route Optimization", description: "Efficient delivery planning and logistics coordination" },
      { title: "Supplier Risk Assessment", description: "Proactive identification of supply chain vulnerabilities" }
    ],
    approach: [
      { step: "Process Mapping", description: "Document current supply chain workflows and pain points" },
      { step: "Data Pipeline Setup", description: "Establish real-time data feeds from all sources" },
      { step: "Optimization Modeling", description: "Develop AI models for forecasting and routing" },
      { step: "Integration", description: "Connect to ERP, WMS, and TMS systems" }
    ],
    technologies: ["ai-ml", "data-engineering"],
    services: ["ai-mvp-development", "app-development"],
    metrics: [
      { label: "Delivery Time Improvement", value: "28%" },
      { label: "Inventory Cost Reduction", value: "35%" },
      { label: "Forecast Accuracy", value: "92%" }
    ]
  },
  {
    slug: "renewables",
    title: "Renewables",
    tagline:
      "AI-powered renewable management using satellite and weather data. Forecast energy output, conserve power, and optimize grid sales via cloud or on-premise AI.",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop",
    overview:
      "At Phen AI, we help renewable energy operators harness the power of AI-driven weather intelligence and satellite data analytics to forecast, conserve, and distribute energy more efficiently. Our systems enable solar and wind farms to optimize production, reduce wastage, and maximize profitability by predicting when and how to generate, store, or sell energy back to the grid. Powered by machine learning, IoT-based weather sensors, and real-time satellite data, Phen AI delivers precise insights into irradiance, wind velocity, and grid demand trends.\n\nOur platform dynamically balances supply, demand, and storage, ensuring energy is conserved and sold strategically when market and weather conditions align. Available via secure on-premise deployments or scalable cloud platforms, Phen AI's hybrid renewable management system supports grid operators and farm owners in achieving peak operational efficiency, energy reliability, and sustainability. Our AI-powered renewable intelligence includes: Weather-Adaptive Forecasting - using satellite and sensor data to predict solar and wind generation based on atmospheric conditions; Smart Grid Optimization - real-time balancing of stored and generated energy to match grid demand efficiently; Energy Conservation Analytics - AI models that determine the optimal times to store, distribute, or sell energy for maximum ROI; Predictive Maintenance - early detection of performance inefficiencies through data-driven operational monitoring. With Phen AI, renewable farms gain a unified intelligence layer that transforms environmental variability into actionable energy strategies - driving smarter generation and sustainable profitability.",
    useCases: [
      { title: "Energy Forecasting", description: "Predict solar and wind generation based on weather patterns" },
      { title: "Grid Optimization", description: "Balance supply and demand in real-time" },
      { title: "Predictive Maintenance", description: "Identify equipment issues before failures occur" },
      { title: "Storage Management", description: "Optimize battery charging and discharge cycles" }
    ],
    approach: [
      { step: "Data Aggregation", description: "Collect data from sensors, weather services, and grid systems" },
      { step: "Model Training", description: "Develop predictive models for generation and demand" },
      { step: "System Integration", description: "Connect to SCADA and energy management systems" },
      { step: "Optimization", description: "Continuously refine strategies based on performance" }
    ],
    technologies: ["ai-ml", "data-engineering"],
    services: ["ai-mvp-development", "app-development"],
    metrics: [
      { label: "Efficiency Gain", value: "24%" },
      { label: "Downtime Reduction", value: "41%" },
      { label: "Cost Savings", value: "$2.3M annually" }
    ]
  }
];

export const services: Service[] = [
  {
    slug: "ai-mvp-development",
    title: "AI-Powered MVP & Product Development",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    summary:
      "Build, test, and launch intelligent products from idea to deployment with Phen AI's end-to-end expertise across cloud, data, and applied machine learning.",
    overview:
      "At Phen AI, we accelerate innovation by turning ideas into functional, AI-powered products. Our team combines technical research, rapid prototyping, and scalable deployment to help startups and enterprises validate concepts, attract investors, and achieve faster go-to-market success. Whether it is a proof of concept, pilot application, or enterprise-grade platform, we manage the full lifecycle from ideation through continuous optimization.",
    included: [
      "Requirements analysis and feasibility assessment - evaluate business goals, technical complexity, and the right AI frameworks for scalable development.",
      "AI model selection and customization - identify, fine-tune, or train models aligned with your data and performance targets.",
      "Full-stack development with modern frameworks - develop secure, responsive web and mobile applications using the latest front-end and back-end stacks.",
      "Cloud infrastructure setup and deployment - implement CI/CD pipelines, scalable architecture, and model hosting on AWS, Azure, or on-prem environments.",
      "User testing and iteration - validate usability and model performance through real-world testing loops and feedback-driven refinements.",
      "Post-launch support and optimization - monitor, retrain, and scale your AI product to adapt to evolving user behavior and data trends."
    ],
    keyCapabilities: [
      "End-to-end product lifecycle management from prototype through production",
      "Multi-modal AI integration covering language, vision, speech, and analytics workloads",
      "Secure deployment options spanning cloud, hybrid, and on-premise environments",
      "DevOps and MLOps pipelines that enable continuous delivery and experimentation"
    ],
    process: [
      { step: "Discovery", description: "Deep dive into your vision, target users, and success metrics" },
      { step: "Architecture", description: "Design scalable system architecture and data pipelines" },
      { step: "MVP Build", description: "Develop core features with AI capabilities" },
      { step: "Testing", description: "Validate with real users and refine based on feedback" },
      { step: "Launch", description: "Deploy to production with monitoring and analytics" },
      { step: "Scale", description: "Enhance features and performance based on usage data" }
    ],
    deploymentOptions:
      "Deploy your MVP in the cloud for agility or on-premise for control and data security - our infrastructure approach adapts to your environment.",
    deliverables: [
      "Fully functional MVP or production application",
      "Technical documentation and architecture diagrams",
      "Deployment pipelines and infrastructure code",
      "User guides and training materials",
      "Performance metrics and analytics dashboards"
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "AWS/GCP", "Docker", "Kubernetes"]
  },
  {
    slug: "immersive-experiences",
    title: "Immersive Experience Development",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    summary:
      "In-house VR/AR development by Phen AI. Build immersive, AI-powered training and education experiences with cloud or on-premise deployment options.",
    overview:
      "At Phen AI, we create immersive VR and AR experiences that merge creativity, technology, and interactivity. Our in-house team of developers, 3D artists, and AI engineers bring ideas to life through realistic virtual environments built for training, education, simulation, and customer engagement. We design and deliver experiences that feel natural, engaging, and technically seamless, blending AI-driven interaction, multi-sensory feedback, and cross-platform optimization. From virtual classrooms and enterprise simulations to interactive product showcases and spatial storytelling, every experience is crafted to enhance learning, performance, and retention. Whether deploying on Meta Quest, HTC Vive, Apple Vision Pro, or mobile AR platforms, our immersive systems ensure precision, scalability, and measurable engagement through real-time analytics. A full-cycle development process, from concept to deployment, ensures every project is backed by robust infrastructure and creative excellence.",
    included: [
      "Immersive experience design and storyboarding - conceptualize experience flows, narrative structure, and user journeys for engagement.",
      "3D modeling and environment creation - build high-fidelity virtual spaces and digital twins optimized for realism and interactivity.",
      "Interactive mechanics and gesture controls - integrate motion tracking, haptics, and AI-powered gesture recognition.",
      "Multi-platform deployment across VR, AR, and mobile - develop once and deploy to headsets, AR devices, and mobile ecosystems.",
      "Performance optimization for smooth rendering - achieve high frame rates with optimized shaders, assets, and streaming strategies.",
      "Analytics and engagement tracking - capture usage insights with AI-driven analytics for performance evaluation."
    ],
    keyCapabilities: [
      "In-house team of VR and AR specialists, 3D artists, and AI engineers",
      "End-to-end XR pipeline covering concept, design, development, deployment, and analytics",
      "Multi-user simulation environments and interactive training modules",
      "Integration with AI services, IoT data, and enterprise systems",
      "Voice, gesture, and motion-based control systems",
      "Cloud or on-premise delivery tailored to education, healthcare, and enterprise needs"
    ],
    process: [
      { step: "Concept Development", description: "Define learning objectives and user journey" },
      { step: "Design", description: "Create visual assets, 3D models, and scene layouts" },
      { step: "Development", description: "Build interactive experiences with Unity or Unreal" },
      { step: "User Testing", description: "Gather feedback on usability and effectiveness" },
      { step: "Refinement", description: "Polish interactions and optimize performance" },
      { step: "Deployment", description: "Publish to target platforms and app stores" }
    ],
    deploymentOptions:
      "Deploy immersive experiences via the cloud for scalable global access or on-premise for privacy-focused institutions and enterprise training facilities.",
    deliverables: [
      "VR/AR application ready for deployment",
      "3D assets and source files",
      "User guides and training documentation",
      "Analytics dashboard for engagement metrics",
      "Platform-specific builds (Oculus, HoloLens, iOS/Android)"
    ],
    tools: ["Unity", "Unreal Engine", "Blender", "C#", "C++", "Oculus SDK", "ARKit", "ARCore"]
  },
  {
    slug: "app-development",
    title: "Intelligent Mobile App Development",
    icon: "M7 2a1 1 0 00-1 1v18a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H7zm5 18a1 1 0 110 2 1 1 0 010-2z",
    summary: "App development for iOS and Android by Phen AI. Build, integrate, and deploy intelligent mobile apps with AI-powered functionality and scalable backends.",
    overview:
      "At Phen AI, we build intelligent, high-performance mobile applications for iOS and Android that combine sleek design, scalability, and AI-powered functionality. Our in-house team of full-stack developers, UI or UX designers, and automation engineers turn ideas into interactive, production-ready apps that perform seamlessly across platforms. From early-stage startups to enterprise systems, we specialize in developing feature-rich mobile solutions that integrate AI, automation, and cloud connectivity, ensuring superior user experience and long-term maintainability. Whether you're launching an MVP or scaling to millions of users, Phen AI handles everything from concept to deployment with precision and reliability. We build using modern frameworks like Flutter, React Native, and Swift or Kotlin, supported by secure Supabase or Firebase backends, and deploy seamlessly via the App Store and Google Play.",
    included: [
      "Requirements analysis and UI or UX prototyping aligned with your brand",
      "Cross-platform app development for iOS and Android using Flutter, React Native, or native frameworks",
      "Backend integration and API development connecting real-time data sources and custom AI models",
      "AI and automation features including chatbots, personalization, and advanced analytics",
      "Testing, QA, and performance optimization across devices and network conditions",
      "App Store and Google Play deployment covering compliance, signing, and rollout strategy"
    ],
    keyCapabilities: [
      "In-house mobile development, design, and AI integration teams",
      "Cross-platform and native expertise to deliver performant iOS and Android apps",
      "Seamless integration with Supabase, Firebase, or custom backends",
      "Secure cloud or on-premise deployment models based on compliance needs",
      "AI-enhanced experiences spanning recommendations, chat, and intelligent automation",
      "Scalable architectures that support consumer and enterprise growth"
    ],
    process: [
      { step: "Discovery and Design", description: "Translate concepts into user-centered wireframes and clickable prototypes." },
      { step: "Cross-Platform Build", description: "Develop performant mobile experiences with Flutter, React Native, or native stacks." },
      { step: "Backend and Integrations", description: "Connect Supabase, Firebase, or custom APIs for data, auth, and automation." },
      { step: "AI Enablement", description: "Embed chatbots, predictions, and intelligent automation tailored to your product." },
      { step: "Quality Assurance", description: "Execute device, stress, and performance testing to ensure reliability." },
      { step: "Launch and Iteration", description: "Ship to the App Store and Google Play with CI or CD pipelines and monitoring." }
    ],
    deploymentOptions:
      "Deploy apps through cloud-based CI/CD pipelines for rapid iteration or host on-premise APIs when data confidentiality and compliance are paramount.",
    deliverables: [
      "Interactive wireframes and high-fidelity design systems",
      "Production-ready iOS and Android builds",
      "Integrated backend services with API documentation",
      "Automated testing coverage and QA reports",
      "Deployment pipelines, store listings, and release assets",
      "Post-launch optimization roadmap and analytics setup"
    ],
    tools: ["Flutter", "React Native", "Swift", "Kotlin", "Supabase", "Firebase", "Node.js", "Python", "AWS", "GCP", "Docker"]
  }
];

export const technologies: Technology[] = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    shortDescription: "Advanced ML models for intelligent automation and analytics",
    longDescription: "Advanced machine learning models and neural networks that power intelligent automation, predictive analytics, and natural language processing. Our AI solutions are designed for production environments with emphasis on accuracy, explainability, and ethical deployment.",
    applications: [
      "Predictive analytics and forecasting",
      "Natural language processing and understanding",
      "Recommendation systems",
      "Anomaly detection and fraud prevention",
      "Automated decision-making systems",
      "Sentiment analysis and text classification"
    ],
    relatedServices: ["ai-mvp-development", "app-development"]
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    shortDescription: "Scalable pipelines that transform data into insights",
    longDescription: "Scalable data pipelines and infrastructure that transform raw data into actionable insights. We build robust ETL processes, data lakes, and real-time streaming architectures that handle billions of events with reliability and performance.",
    applications: [
      "Real-time data streaming and processing",
      "Data warehouse and lake architecture",
      "ETL pipeline development",
      "Data quality and governance",
      "Business intelligence and reporting",
      "Big data analytics platforms"
    ],
    relatedServices: ["ai-mvp-development", "app-development"]
  },
  {
    slug: "vr-ar",
    title: "Virtual & Augmented Reality",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    shortDescription: "Immersive experiences for training and engagement",
    longDescription: "Immersive VR/AR experiences that revolutionize training, education, and customer engagement. From realistic simulations to interactive product visualizations, we create compelling experiences that drive real business outcomes.",
    applications: [
      "Training simulations and skill development",
      "Virtual product demonstrations",
      "Remote collaboration environments",
      "Educational experiences and virtual labs",
      "Architectural visualization",
      "Medical procedure training"
    ],
    relatedServices: ["immersive-experiences"]
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    shortDescription: "Visual recognition for automation and analysis",
    longDescription: "State-of-the-art visual recognition systems for object detection, image classification, and scene understanding. Our computer vision solutions power everything from quality control automation to advanced driver assistance systems.",
    applications: [
      "Object detection and tracking",
      "Image classification and tagging",
      "Facial recognition and biometrics",
      "Quality control and defect detection",
      "Autonomous systems and robotics",
      "Medical image analysis"
    ],
    relatedServices: ["ai-mvp-development", "app-development"]
  },
  {
    slug: "on-prem-ai",
    title: "On-Premise AI Models",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    shortDescription: "Secure AI for regulated industries",
    longDescription: "Secure, on-premise AI deployments for regulated industries requiring strict data privacy and compliance. We deliver the power of cloud AI with the security of on-premise infrastructure, ensuring your sensitive data never leaves your environment.",
    applications: [
      "Healthcare data analysis",
      "Legal document processing",
      "Financial risk assessment",
      "Government intelligence systems",
      "Industrial control systems",
      "Confidential research and development"
    ],
    relatedServices: ["app-development"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-agriculture-revolution",
    title: "How AI is Revolutionizing Modern Agriculture",
    author: "Dr. Sarah Chen",
    date: "2024-09-15",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop",
    summary: "Explore how computer vision and machine learning are transforming crop management, disease detection, and yield optimization in the agricultural sector.",
    content: "Full article content would go here...",
    tags: ["AI", "Agriculture", "Computer Vision"],
    readingTime: 8
  },
  {
    slug: "vr-training-effectiveness",
    title: "The Science Behind VR Training Effectiveness",
    author: "Marcus Thompson",
    date: "2024-09-08",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop",
    summary: "Research shows VR training improves retention by up to 75%. Discover the neuroscience and best practices behind immersive learning experiences.",
    content: "Full article content would go here...",
    tags: ["VR", "Education", "Training"],
    readingTime: 6
  },
  {
    slug: "on-premise-ai-security",
    title: "On-Premise AI: Balancing Innovation and Security",
    author: "Rachel Kim",
    date: "2024-09-01",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    summary: "For regulated industries, on-premise AI offers the best of both worlds. Learn how to implement powerful AI while maintaining strict data governance.",
    content: "Full article content would go here...",
    tags: ["AI", "Security", "Compliance"],
    readingTime: 10
  },
  {
    slug: "supply-chain-ai-optimization",
    title: "AI-Powered Supply Chain Optimization",
    author: "James Martinez",
    date: "2024-08-25",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop",
    summary: "Machine learning algorithms are reshaping logistics. See how predictive analytics reduce costs and improve delivery times across the supply chain.",
    content: "Full article content would go here...",
    tags: ["AI", "Supply Chain", "Logistics"],
    readingTime: 7
  },
  {
    slug: "computer-vision-healthcare",
    title: "Computer Vision in Healthcare: Current Applications",
    author: "Dr. Emily Roberts",
    date: "2024-08-18",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    summary: "From diagnostic imaging to surgical assistance, computer vision is transforming patient care. Explore real-world implementations and outcomes.",
    content: "Full article content would go here...",
    tags: ["Computer Vision", "Healthcare", "Medical"],
    readingTime: 9
  },
  {
    slug: "renewable-energy-ai",
    title: "AI and the Future of Renewable Energy",
    author: "Alex Johnson",
    date: "2024-08-11",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop",
    summary: "Smart grids powered by AI are making renewable energy more efficient and reliable. Discover how machine learning optimizes energy distribution.",
    content: "Full article content would go here...",
    tags: ["AI", "Renewable Energy", "Sustainability"],
    readingTime: 8
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Amir Patel",
    role: "Founder & CEO",
    headshot: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "With a Ph.D. in Machine Learning and 15 years of industry experience, Amir founded Phen AI to bridge the gap between cutting-edge research and practical business applications. Previously led AI initiatives at Fortune 500 companies.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  },
  {
    name: "Dr. Maya Chen",
    role: "Chief Technology Officer",
    headshot: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Maya brings deep expertise in distributed systems and AI infrastructure. She holds a Ph.D. in Computer Science and has published extensively on scalable machine learning architectures.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" }
    ]
  },
  {
    name: "Marcus Thompson",
    role: "Head of Immersive Experiences",
    headshot: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Marcus is a pioneer in VR/AR development with a background in game design and educational technology. He has created award-winning immersive experiences for leading educational institutions.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  },
  {
    name: "Rachel Kim",
    role: "Lead Data Scientist",
    headshot: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    bio: "Rachel specializes in building production ML systems with an emphasis on model interpretability and fairness. She has developed AI solutions for healthcare, finance, and agriculture sectors.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" }
    ]
  },
  {
    name: "James Martinez",
    role: "Solutions Architect",
    headshot: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "James designs scalable AI architectures for enterprise clients. With expertise in cloud and on-premise deployments, he ensures solutions meet both technical and compliance requirements.",
    socials: [
      { platform: "LinkedIn", url: "#" }
    ]
  },
  {
    name: "Dr. Emily Roberts",
    role: "Research Scientist",
    headshot: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    bio: "Emily's research focuses on computer vision and medical imaging. She collaborates with academic institutions to advance the state of the art in AI-powered diagnostics.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  }
];
