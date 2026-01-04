window.ML_SYSTEM_DATA = [
  {
    "id": 1,
    "company": "Stripe",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Prevent fraudelent transactions",
    "title": "How we built it: Stripe Radar",
    "url": "https://stripe.com/blog/how-we-built-it-stripe-radar",
    "year": 2023,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Data stores for transaction characteristics and fraud patterns",
      "Batch processing systems for model training and updates",
      "Real-time streaming systems for transaction assessment",
      "Feature store for managing and serving features used in models",
      "Model serving infrastructure for deploying the DNN model",
      "Monitoring systems to track model performance and fraud detection accuracy"
    ],
    "sourceError": "No cached source text",
    "hasComponents": true,
    "summaryPoints": [
      "Stripe Radar is a fraud prevention solution that evaluates over 1,000 transaction characteristics to identify fraudulent activities in under 100 milliseconds.",
      "The system has evolved from simple ML models to more complex architectures, including a recent transition to a pure deep neural network (DNN) model for improved performance.",
      "Feature engineering plays a crucial role in enhancing model accuracy, with the team continuously searching for new signals and patterns associated with fraudulent behavior."
    ],
    "summary": "Stripe Radar is a fraud prevention solution that evaluates over 1,000 transaction characteristics to identify fraudulent activities in under 100 milliseconds. The system has evolved from simple ML models to more complex architectures, including a recent transition to a pure deep neural network (DNN) model for improved performance. Feature engineering plays a crucial role in enhancing model accuracy, with the team continuously searching for new signals and patterns associated with fraudulent behavior.",
    "infraDetails": [
      "Data stores for transaction characteristics and fraud patterns",
      "Batch processing systems for model training and updates",
      "Real-time streaming systems for transaction assessment",
      "Feature store for managing and serving features used in models",
      "Model serving infrastructure for deploying the DNN model",
      "Monitoring systems to track model performance and fraud detection accuracy"
    ],
    "systemComponents": [
      {
        "name": "Fraud Detection Engine",
        "responsibility": "Evaluates transactions in real-time to identify potential fraud."
      },
      {
        "name": "Feature Engineering Pipeline",
        "responsibility": "Identifies and processes features that enhance model performance."
      },
      {
        "name": "Model Training Infrastructure",
        "responsibility": "Facilitates the training and retraining of machine learning models."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks the performance and accuracy of fraud detection models."
      },
      {
        "name": "Data Repository",
        "responsibility": "Stores historical transaction data and fraud patterns for analysis."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://stripe.com/blog/how-we-built-it-stripe-radar",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 2,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend complementary items",
    "title": "Personalized 'Complete the Look' model",
    "url": "https://medium.com/walmartglobaltech/personalized-complete-the-look-model-ea093aba0b73",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/walmartglobaltech/personalized-complete-the-look-model-ea093aba0b73",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 3,
    "company": "Uber",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Forecast demand for airport rides",
    "title": "Demand and ETR Forecasting at Airports",
    "url": "https://www.uber.com/en-GB/blog/demand-and-etr-forecasting-at-airports/",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Michelangelo platform for model training and serving",
      "Kafka for data emission related to driver queue signals",
      "Batch data storage using Hive for training purposes",
      "Near-real-time feature ingestion system"
    ],
    "sourceError": "No cached source text",
    "hasComponents": true,
    "summaryPoints": [
      "Uber developed a forecasting system to balance demand and supply for airport rides, addressing issues of undersupply and oversupply.",
      "The system estimates the expected wait time for drivers in the airport queue using a combination of supply and demand models.",
      "Key features include real-time updates on queue dynamics and flight arrivals, which help drivers make informed decisions about repositioning.",
      "The architecture leverages the Michelangelo platform for model training and serving, ensuring modularity and reusability across different airport projects."
    ],
    "summary": "Uber developed a forecasting system to balance demand and supply for airport rides, addressing issues of undersupply and oversupply. The system estimates the expected wait time for drivers in the airport queue using a combination of supply and demand models. Key features include real-time updates on queue dynamics and flight arrivals, which help drivers make informed decisions about repositioning. The architecture leverages the Michelangelo platform for model training and serving, ensuring modularity and reusability across different airport projects.",
    "infraDetails": [
      "Michelangelo platform for model training and serving",
      "Kafka for data emission related to driver queue signals",
      "Batch data storage using Hive for training purposes",
      "Near-real-time feature ingestion system"
    ],
    "systemComponents": [
      {
        "name": "ETR Model",
        "responsibility": "Estimates the expected wait time for drivers in the airport queue."
      },
      {
        "name": "Supply Model",
        "responsibility": "Estimates the true position of the last person in the FIFO queue."
      },
      {
        "name": "Demand Model",
        "responsibility": "Estimates the queue consumption rate based on arriving flights and other factors."
      },
      {
        "name": "Venue Marker Service",
        "responsibility": "Displays estimated wait times and queue information to drivers in the app."
      },
      {
        "name": "Feature Ingestion System",
        "responsibility": "Handles the ingestion of real-time and batch data for model training and predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.uber.com/en-GB/blog/demand-and-etr-forecasting-at-airports/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 4,
    "company": "Pinterest",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Prevent advertiser churn",
    "title": "An ML based approach to proactive advertiser churn prevention",
    "url": "https://medium.com/pinterest-engineering/an-ml-based-approach-to-proactive-advertiser-churn-prevention-3a7c0c335016",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/pinterest-engineering/an-ml-based-approach-to-proactive-advertiser-churn-prevention-3a7c0c335016",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 5,
    "company": "Stitch Fix",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Generate ad headlines",
    "title": "A New Era of Creativity: Expert-in-the-loop Generative AI at Stitch Fix",
    "url": "https://multithreaded.stitchfix.com/blog/2023/03/06/expert-in-the-loop-generative-ai-at-stitch-fix/",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [],
    "sourceError": "No cached source text",
    "hasComponents": false,
    "summaryPoints": [
      "Stitch Fix utilizes an expert-in-the-loop approach to enhance generative AI applications for creating ad headlines and product descriptions.",
      "By combining large language models with human oversight, the company improves efficiency while maintaining high-quality content.",
      "The process involves fine-tuning pre-trained models on task-specific datasets created by human experts to generate tailored outputs.",
      "This approach not only saves time for copywriters but also allows for continuous improvement of the generative AI system."
    ],
    "summary": "Stitch Fix utilizes an expert-in-the-loop approach to enhance generative AI applications for creating ad headlines and product descriptions. By combining large language models with human oversight, the company improves efficiency while maintaining high-quality content. The process involves fine-tuning pre-trained models on task-specific datasets created by human experts to generate tailored outputs. This approach not only saves time for copywriters but also allows for continuous improvement of the generative AI system.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Generative AI Model",
        "responsibility": "Generates ad headlines and product descriptions based on input data."
      },
      {
        "name": "Human Experts",
        "responsibility": "Review and edit AI-generated content to ensure quality and alignment with brand messaging."
      },
      {
        "name": "Data Collection System",
        "responsibility": "Gathers task-specific datasets from human-written examples for fine-tuning the model."
      },
      {
        "name": "Quality Assurance System",
        "responsibility": "Monitors and evaluates the quality of generated content to facilitate continuous improvement."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://multithreaded.stitchfix.com/blog/2023/03/06/expert-in-the-loop-generative-ai-at-stitch-fix/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 6,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Recommend items to order",
    "title": "Building a mind reader at Swiggy using Data Science",
    "url": "https://bytes.swiggy.com/building-a-mind-reader-at-swiggy-using-data-science-5a5c38aa6c17",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for historical orders and customer preferences",
      "Approximate Nearest Neighbour (ANN) index for cart retrieval",
      "Ranking layer for sorting candidate carts based on multiple features"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Swiggy aims to enhance customer experience by recommending personalized item carts to reduce decision fatigue in food ordering.",
      "The recommendation system faces challenges such as item availability, micro-personalization, and the subjective nature of food preferences.",
      "Design choices include limiting recommendations to two-item carts and leveraging historical order data to generate coherent combinations.",
      "The system utilizes a Food Intelligence engine to filter incoherent pairs and employs a cross-sell model to augment candidate carts.",
      "The final recommendations are ranked based on various factors including customer preferences, item ratings, and geographical proximity."
    ],
    "summary": "Swiggy aims to enhance customer experience by recommending personalized item carts to reduce decision fatigue in food ordering. The recommendation system faces challenges such as item availability, micro-personalization, and the subjective nature of food preferences. Design choices include limiting recommendations to two-item carts and leveraging historical order data to generate coherent combinations. The system utilizes a Food Intelligence engine to filter incoherent pairs and employs a cross-sell model to augment candidate carts. The final recommendations are ranked based on various factors including customer preferences, item ratings, and geographical proximity.",
    "infraDetails": [
      "Data stores for historical orders and customer preferences",
      "Approximate Nearest Neighbour (ANN) index for cart retrieval",
      "Ranking layer for sorting candidate carts based on multiple features"
    ],
    "systemComponents": [
      {
        "name": "Recommendation Engine",
        "responsibility": "Generates personalized item carts based on customer preferences and historical data."
      },
      {
        "name": "Food Intelligence Engine",
        "responsibility": "Classifies food items and generates rules for filtering incoherent pairs."
      },
      {
        "name": "Cross-Sell Model",
        "responsibility": "Predicts complementary items to enhance the candidate cart options."
      },
      {
        "name": "ANN Index",
        "responsibility": "Facilitates efficient retrieval of candidate carts based on customer embeddings."
      },
      {
        "name": "Ranking Layer",
        "responsibility": "Ranks the candidate carts based on similarity, customer budget, and delivery time."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/building-a-mind-reader-at-swiggy-using-data-science-5a5c38aa6c17",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 7,
    "company": "Microsoft",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Diagnose production incidents with LLM",
    "title": "Large-language models for automatic cloud incident management",
    "url": "https://www.microsoft.com/en-us/research/blog/large-language-models-for-automatic-cloud-incident-management/",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Data stores for incident records",
      "Batch processing systems for analyzing historical incident data",
      "Feature stores for storing and retrieving features relevant to incidents",
      "Model serving infrastructure for deploying fine-tuned LLMs",
      "Monitoring systems to evaluate model performance and incident resolution effectiveness"
    ],
    "sourceError": "No cached source text",
    "hasComponents": true,
    "summaryPoints": [
      "The research explores the use of large language models (LLMs) for diagnosing production incidents in cloud services.",
      "By analyzing over 40,000 incidents, the study demonstrates that fine-tuning LLMs like GPT-3.5 significantly enhances their ability to recommend root causes and mitigation steps.",
      "The findings indicate that LLMs can improve incident management efficiency, with over 70% of engineers rating the generated recommendations as useful.",
      "Future research aims to incorporate additional context and improve the models' performance through retrieval-augmented approaches."
    ],
    "summary": "The research explores the use of large language models (LLMs) for diagnosing production incidents in cloud services. By analyzing over 40,000 incidents, the study demonstrates that fine-tuning LLMs like GPT-3.5 significantly enhances their ability to recommend root causes and mitigation steps. The findings indicate that LLMs can improve incident management efficiency, with over 70% of engineers rating the generated recommendations as useful. Future research aims to incorporate additional context and improve the models' performance through retrieval-augmented approaches.",
    "infraDetails": [
      "Data stores for incident records",
      "Batch processing systems for analyzing historical incident data",
      "Feature stores for storing and retrieving features relevant to incidents",
      "Model serving infrastructure for deploying fine-tuned LLMs",
      "Monitoring systems to evaluate model performance and incident resolution effectiveness"
    ],
    "systemComponents": [
      {
        "name": "Incident Management System",
        "responsibility": "Tracks and manages production incidents, including ticket creation and resolution."
      },
      {
        "name": "Large Language Model (LLM)",
        "responsibility": "Generates recommendations for root causes and mitigation steps based on incident data."
      },
      {
        "name": "Data Analysis Pipeline",
        "responsibility": "Processes historical incident data to fine-tune LLMs and evaluate their performance."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Displays metrics and performance indicators for incident management and model effectiveness."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.microsoft.com/en-us/research/blog/large-language-models-for-automatic-cloud-incident-management/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 8,
    "company": "Foodpanda",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Optimize menu sorting order",
    "title": "Menu Ranking",
    "url": "https://medium.com/foodpanda-data/menu-ranking-422ad21f381e",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "BigQuery for business logic and data storage",
      "Apache Airflow for orchestration of workflows",
      "Kubernetes for managing compute resources",
      "DAG pools in Airflow for managing task concurrency"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Foodpanda's menu ranking system aims to optimize the sorting order of menu items to maximize conversion rates.",
      "The system utilizes A/B testing across various countries to determine the ideal presentation of menu items.",
      "Challenges included high failure rates due to vendors changing their menus during data ingestion, leading to lengthy processing times.",
      "Optimization efforts resulted in over 2x faster run times and a significant reduction in failure rates."
    ],
    "summary": "Foodpanda's menu ranking system aims to optimize the sorting order of menu items to maximize conversion rates. The system utilizes A/B testing across various countries to determine the ideal presentation of menu items. Challenges included high failure rates due to vendors changing their menus during data ingestion, leading to lengthy processing times. Optimization efforts resulted in over 2x faster run times and a significant reduction in failure rates.",
    "infraDetails": [
      "BigQuery for business logic and data storage",
      "Apache Airflow for orchestration of workflows",
      "Kubernetes for managing compute resources",
      "DAG pools in Airflow for managing task concurrency"
    ],
    "systemComponents": [
      {
        "name": "BigQuery",
        "responsibility": "Stores business logic and B version data for A/B testing."
      },
      {
        "name": "Apache Airflow",
        "responsibility": "Orchestrates workflows and manages the execution of tasks."
      },
      {
        "name": "Kubernetes",
        "responsibility": "Manages compute resources and orchestrates containerized applications."
      },
      {
        "name": "Internal API",
        "responsibility": "Handles the declaration and management of B versions for testing."
      },
      {
        "name": "DAG Pool",
        "responsibility": "Manages concurrency of tasks in Airflow to optimize resource usage."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/foodpanda-data/menu-ranking-422ad21f381e",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 9,
    "company": "Zillow",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Estimate the house market value",
    "title": "Building the Neural Zestimate",
    "url": "https://www.zillow.com/tech/building-the-neural-zestimate/",
    "year": 2023,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Data stores for property data, sales transactions, tax assessments, and public records.",
      "Deep learning framework for model training and inference.",
      "Feature store for managing and serving features used in the model.",
      "Monitoring systems to track model performance and accuracy.",
      "Orchestration tools for managing data pipelines and model deployment."
    ],
    "sourceError": "No cached source text",
    "hasComponents": true,
    "summaryPoints": [
      "Zillow's Neural Zestimate is an advanced home valuation tool that estimates the market value of over 100 million homes in the U.S., reacting to market trends multiple times a week.",
      "The new system simplifies the maintainability of the Zestimate and significantly improves its accuracy by integrating various data sources into a single model.",
      "Unlike previous versions that used separate models for different valuation tasks, the Neural Zestimate employs a unified approach that incorporates local market nuances and temporal factors.",
      "The model leverages deep learning techniques to handle high cardinality geographical features and employs quantile regression to provide a range of potential sale prices, reflecting uncertainty in the estimates."
    ],
    "summary": "Zillow's Neural Zestimate is an advanced home valuation tool that estimates the market value of over 100 million homes in the U.S., reacting to market trends multiple times a week. The new system simplifies the maintainability of the Zestimate and significantly improves its accuracy by integrating various data sources into a single model. Unlike previous versions that used separate models for different valuation tasks, the Neural Zestimate employs a unified approach that incorporates local market nuances and temporal factors. The model leverages deep learning techniques to handle high cardinality geographical features and employs quantile regression to provide a range of potential sale prices, reflecting uncertainty in the estimates.",
    "infraDetails": [
      "Data stores for property data, sales transactions, tax assessments, and public records.",
      "Deep learning framework for model training and inference.",
      "Feature store for managing and serving features used in the model.",
      "Monitoring systems to track model performance and accuracy.",
      "Orchestration tools for managing data pipelines and model deployment."
    ],
    "systemComponents": [
      {
        "name": "Neural Zestimate Model",
        "responsibility": "Estimates home values using integrated data sources and deep learning techniques."
      },
      {
        "name": "Data Ingestion Pipeline",
        "responsibility": "Collects and processes property data, sales transactions, and other relevant information."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves features used in the valuation model."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance and accuracy of the Neural Zestimate."
      },
      {
        "name": "Orchestration Tool",
        "responsibility": "Coordinates data workflows and model deployment processes."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.zillow.com/tech/building-the-neural-zestimate/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 10,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Identify user interests",
    "title": "Prioritizing Home Attributes Based on Guest Interest",
    "url": "https://medium.com/airbnb-engineering/prioritizing-home-attributes-based-on-guest-interest-3c49b827e51a",
    "year": 2023,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for unstructured text data (messages, reviews, customer support tickets)",
      "Inference models to predict attribute importance based on keyword frequency",
      "Bayesian inference model for attribute confirmation"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Airbnb developed the Attribute Prioritization System (APS) to understand guest preferences by analyzing unstructured text data from messages, reviews, and customer support interactions.",
      "The system uses a machine learning model called LATEX to extract and map home attributes from guest communications, allowing for personalized recommendations to hosts.",
      "By calculating unique importance scores for home attributes based on various factors, APS helps hosts understand what amenities to acquire and highlight for potential guests.",
      "The system also incorporates feedback from guests and third-party data to create a comprehensive view of home attributes, enhancing the accuracy of recommendations."
    ],
    "summary": "Airbnb developed the Attribute Prioritization System (APS) to understand guest preferences by analyzing unstructured text data from messages, reviews, and customer support interactions. The system uses a machine learning model called LATEX to extract and map home attributes from guest communications, allowing for personalized recommendations to hosts. By calculating unique importance scores for home attributes based on various factors, APS helps hosts understand what amenities to acquire and highlight for potential guests. The system also incorporates feedback from guests and third-party data to create a comprehensive view of home attributes, enhancing the accuracy of recommendations.",
    "infraDetails": [
      "Data stores for unstructured text data (messages, reviews, customer support tickets)",
      "Inference models to predict attribute importance based on keyword frequency",
      "Bayesian inference model for attribute confirmation"
    ],
    "systemComponents": [
      {
        "name": "Attribute Prioritization System (APS)",
        "responsibility": "Analyzes guest preferences and provides recommendations to hosts."
      },
      {
        "name": "LATEX",
        "responsibility": "Extracts and maps home attributes from unstructured text data."
      },
      {
        "name": "Named Entity Recognition (NER) Module",
        "responsibility": "Identifies key phrases related to home attributes from guest communications."
      },
      {
        "name": "Entity Mapping Module",
        "responsibility": "Maps extracted phrases to specific home attributes using unsupervised learning."
      },
      {
        "name": "Inference Model",
        "responsibility": "Predicts expected frequency of attributes for different home segments."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/airbnb-engineering/prioritizing-home-attributes-based-on-guest-interest-3c49b827e51a",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 11,
    "company": "GitHub",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Generate code and code suggestions",
    "title": "Inside GitHub: Working with the LLMs behind GitHub Copilot",
    "url": "https://github.blog/2023-05-17-inside-github-working-with-the-llms-behind-github-copilot/",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Monitoring systems for quality assessment",
      "Feature store for managing code suggestions",
      "Orchestration tools for model deployment and updates"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "GitHub Copilot was developed in response to the capabilities of OpenAI's GPT-3, which sparked interest in code generation tools.",
      "The GitHub team utilized various models from OpenAI, including a multilingual Codex model, to enhance the functionality and accuracy of Copilot.",
      "Key improvements included prompt crafting and fine-tuning techniques to optimize code suggestions based on user context and specific codebases.",
      "The team continuously iterated on the model to improve user experience, addressing challenges such as language ambiguity and enhancing completion rates."
    ],
    "summary": "GitHub Copilot was developed in response to the capabilities of OpenAI's GPT-3, which sparked interest in code generation tools. The GitHub team utilized various models from OpenAI, including a multilingual Codex model, to enhance the functionality and accuracy of Copilot. Key improvements included prompt crafting and fine-tuning techniques to optimize code suggestions based on user context and specific codebases. The team continuously iterated on the model to improve user experience, addressing challenges such as language ambiguity and enhancing completion rates.",
    "infraDetails": [
      "Monitoring systems for quality assessment",
      "Feature store for managing code suggestions",
      "Orchestration tools for model deployment and updates"
    ],
    "systemComponents": [
      {
        "name": "Model Improvements Team",
        "responsibility": "Responsible for monitoring and enhancing the quality of GitHub Copilot's suggestions."
      },
      {
        "name": "GitHub Next Team",
        "responsibility": "Focused on research and development of new features and improvements for GitHub Copilot."
      },
      {
        "name": "Prompt Crafting Team",
        "responsibility": "Specializes in creating effective prompts to optimize model outputs."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://github.blog/2023-05-17-inside-github-working-with-the-llms-behind-github-copilot/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 12,
    "company": "DoorDash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Optimize courier waiting time",
    "title": "Lifecycle of a Successful ML Product: Reducing Dasher Wait Times",
    "url": "https://doordash.engineering/2023/02/15/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/",
    "year": 2023,
    "category": "optimization_pricing",
    "categoryLabel": "Optimization and pricing",
    "components": [
      "Data stores for storing order and preparation data",
      "Batch processing systems for analyzing historical data on food preparation and Dasher wait times",
      "Feature store for managing and serving features used in ML models",
      "Model serving infrastructure to deploy and manage ML models in production",
      "Monitoring systems to track performance metrics of the ML models and the overall system"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash optimized Dasher wait times by implementing a Machine Learning (ML) model to improve food preparation timing at restaurants.",
      "The Auto Order Release (AOR) process was introduced to ensure food is prepared just in time for the Dasher's arrival, reducing wait times without compromising food quality.",
      "A cross-functional team was formed to transition from a heuristic-based system to a dynamic ML-based decision-making process for order release.",
      "The development process involved starting with a simple MVP to gather insights before fully integrating ML capabilities into the system."
    ],
    "summary": "DoorDash optimized Dasher wait times by implementing a Machine Learning (ML) model to improve food preparation timing at restaurants. The Auto Order Release (AOR) process was introduced to ensure food is prepared just in time for the Dasher's arrival, reducing wait times without compromising food quality. A cross-functional team was formed to transition from a heuristic-based system to a dynamic ML-based decision-making process for order release. The development process involved starting with a simple MVP to gather insights before fully integrating ML capabilities into the system.",
    "infraDetails": [
      "Data stores for storing order and preparation data",
      "Batch processing systems for analyzing historical data on food preparation and Dasher wait times",
      "Feature store for managing and serving features used in ML models",
      "Model serving infrastructure to deploy and manage ML models in production",
      "Monitoring systems to track performance metrics of the ML models and the overall system"
    ],
    "systemComponents": [
      {
        "name": "Order Management System",
        "responsibility": "Handles order confirmations and initiates the dispatch process."
      },
      {
        "name": "Auto Order Release (AOR) System",
        "responsibility": "Manages the timing of food preparation based on Dasher proximity to the restaurant."
      },
      {
        "name": "ML Model Infrastructure",
        "responsibility": "Serves and manages the ML models that predict optimal order release times."
      },
      {
        "name": "Analytics Team",
        "responsibility": "Analyzes data to identify opportunities for reducing wait times and improving processes."
      },
      {
        "name": "Merchant Onboarding Team",
        "responsibility": "Works with restaurants to implement the AOR process and define geofence parameters."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://doordash.engineering/2023/02/15/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 13,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Select best payment gateway",
    "title": "Improving the customer's experience via ML-driven payment routing",
    "url": "https://engineering.linkedin.com/blog/2023/improving-the-customer-s-experience-via-ml-driven-payment-routin",
    "year": 2023,
    "category": "optimization_pricing",
    "categoryLabel": "Optimization and pricing",
    "components": [
      "Data stores for transaction parameters and routing data",
      "A/B testing framework for performance monitoring",
      "Model serving infrastructure for integrating the ML model with the payment routing system"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn replaced its rule-based payment gateway routing with a machine learning-driven engine to enhance customer experience and improve payment approval rates.",
      "The new system models payment routing as a supervised learning problem, utilizing inverse probability weighting to address sample imbalance and optimize gateway selection.",
      "The implementation of the ML-based engine has shown statistically significant improvements in payment approval rates compared to the previous rule-based system."
    ],
    "summary": "LinkedIn replaced its rule-based payment gateway routing with a machine learning-driven engine to enhance customer experience and improve payment approval rates. The new system models payment routing as a supervised learning problem, utilizing inverse probability weighting to address sample imbalance and optimize gateway selection. The implementation of the ML-based engine has shown statistically significant improvements in payment approval rates compared to the previous rule-based system.",
    "infraDetails": [
      "Data stores for transaction parameters and routing data",
      "A/B testing framework for performance monitoring",
      "Model serving infrastructure for integrating the ML model with the payment routing system"
    ],
    "systemComponents": [
      {
        "name": "Payment Gateway Selection Engine",
        "responsibility": "Selects the optimal payment gateway based on ML predictions."
      },
      {
        "name": "Routing Logic Engine",
        "responsibility": "Handles the existing rule-based routing and integrates with the ML-driven engine."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks performance metrics and conducts A/B testing to evaluate the ML model's effectiveness."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2023/improving-the-customer-s-experience-via-ml-driven-payment-routin",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 14,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict delivery times",
    "title": "Delivery-Date Prediction",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/delivery-date-prediction",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for storing historical delivery data and supplier information.",
      "Batch processing systems for training the machine learning model.",
      "Real-time inference system for delivering predictions to customers.",
      "Feature store for managing and serving features used in model training and inference.",
      "Monitoring systems to track model performance and delivery metrics."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair aims to improve customer satisfaction by accurately predicting delivery times using machine learning, which can lead to increased sales.",
      "The new model reduces the gap between promised and actual delivery times while maintaining reliability, addressing the trade-off between speed and accuracy.",
      "By adopting an end-to-end predictive model, Wayfair can account for correlations in the supply chain, leading to better performance compared to the previous segmented approach."
    ],
    "summary": "Wayfair aims to improve customer satisfaction by accurately predicting delivery times using machine learning, which can lead to increased sales. The new model reduces the gap between promised and actual delivery times while maintaining reliability, addressing the trade-off between speed and accuracy. By adopting an end-to-end predictive model, Wayfair can account for correlations in the supply chain, leading to better performance compared to the previous segmented approach.",
    "infraDetails": [
      "Data stores for storing historical delivery data and supplier information.",
      "Batch processing systems for training the machine learning model.",
      "Real-time inference system for delivering predictions to customers.",
      "Feature store for managing and serving features used in model training and inference.",
      "Monitoring systems to track model performance and delivery metrics."
    ],
    "systemComponents": [
      {
        "name": "Delivery Time Prediction Model",
        "responsibility": "Predicts delivery times based on historical data and real-time inputs."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves features used for model training and inference."
      },
      {
        "name": "Real-time Inference Engine",
        "responsibility": "Processes customer requests and provides delivery time predictions quickly."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and delivery metrics to ensure reliability."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/delivery-date-prediction",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 15,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Detect viral spam",
    "title": "Viral spam content detection at LinkedIn",
    "url": "https://engineering.linkedin.com/blog/2023/viral-spam-content-detection-at-linkedin",
    "year": 2023,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Engagement Signal Monitoring: Tracks content interaction for virality prediction."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn aims to create a safe environment for members by detecting and removing viral spam content that violates community policies.",
      "The detection system employs both proactive and reactive AI models to identify spam content early and monitor engagement signals for potential virality.",
      "Proactive defenses utilize classifiers trained on specific spam categories and content types, while reactive defenses analyze member behavior and interaction patterns.",
      "The implementation of these models has led to a significant reduction in views of spam and policy-violating content, enhancing user experience on the platform."
    ],
    "summary": "LinkedIn aims to create a safe environment for members by detecting and removing viral spam content that violates community policies. The detection system employs both proactive and reactive AI models to identify spam content early and monitor engagement signals for potential virality. Proactive defenses utilize classifiers trained on specific spam categories and content types, while reactive defenses analyze member behavior and interaction patterns. The implementation of these models has led to a significant reduction in views of spam and policy-violating content, enhancing user experience on the platform.",
    "infraDetails": [
      "Engagement Signal Monitoring: Tracks content interaction for virality prediction."
    ],
    "systemComponents": [
      {
        "name": "Proactive Classifiers",
        "responsibility": "Predict potential viral spam content as soon as it surfaces on the LinkedIn feed."
      },
      {
        "name": "Reactive Classifiers",
        "responsibility": "Monitor engagement signals to prevent spam content from going viral."
      },
      {
        "name": "Content Detection Pipeline",
        "responsibility": "Handles the journey of content detection from posting to monitoring engagement signals."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2023/viral-spam-content-detection-at-linkedin",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 16,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Recommend content in app",
    "title": "The Recommendation System at Lyft",
    "url": "https://eng.lyft.com/the-recommendation-system-at-lyft-67bc9dcc1793",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for user preferences and ride histories",
      "Distributed hyperparameter optimization pipeline",
      "Monitoring systems for ride reliability and supply/demand balance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft's recommendation system enhances user experience by providing personalized ride options based on rider preferences and marketplace conditions.",
      "The system addresses challenges like overchoice, the cold start problem for new modes, and dynamic business goals to optimize ride requests.",
      "Recent improvements include a one-tap module for quick ride requests and a shift towards a model-based approach for preselecting ride modes.",
      "Machine learning models, particularly LightGBM, are utilized to predict rider preferences and optimize rankings for ride options.",
      "Future enhancements will incorporate reinforcement learning for more dynamic interactions and improved long-term user engagement."
    ],
    "summary": "Lyft's recommendation system enhances user experience by providing personalized ride options based on rider preferences and marketplace conditions. The system addresses challenges like overchoice, the cold start problem for new modes, and dynamic business goals to optimize ride requests. Recent improvements include a one-tap module for quick ride requests and a shift towards a model-based approach for preselecting ride modes. Machine learning models, particularly LightGBM, are utilized to predict rider preferences and optimize rankings for ride options. Future enhancements will incorporate reinforcement learning for more dynamic interactions and improved long-term user engagement.",
    "infraDetails": [
      "Data stores for user preferences and ride histories",
      "Distributed hyperparameter optimization pipeline",
      "Monitoring systems for ride reliability and supply/demand balance"
    ],
    "systemComponents": [
      {
        "name": "Recommendation Engine",
        "responsibility": "Personalizes ride options based on user preferences and marketplace conditions."
      },
      {
        "name": "One-Tap Module",
        "responsibility": "Provides a quick ride request option for frequent users."
      },
      {
        "name": "Model Training Pipeline",
        "responsibility": "Handles the training and optimization of machine learning models."
      },
      {
        "name": "Post-Processor",
        "responsibility": "Adjusts model outputs to mitigate biases from limited data."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks metrics like ride reliability and supply/demand balance."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/the-recommendation-system-at-lyft-67bc9dcc1793",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 17,
    "company": "Honeycomb",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Generate queries with natural language",
    "title": "All the Hard Stuff Nobody Talks About when Building Products with LLMs",
    "url": "https://www.honeycomb.io/blog/hard-stuff-nobody-talks-about-llm",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Monitoring tools for performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Building products with Large Language Models (LLMs) presents significant challenges that are often overlooked in discussions about AI.",
      "The Query Assistant allows users to generate Honeycomb queries using natural language, but it requires careful prompting and context management due to LLM limitations.",
      "Issues such as context window limitations, latency of LLMs, and the complexity of prompt engineering complicate the development process.",
      "The team has explored various strategies to improve query generation, including using embeddings and refining prompt techniques, but many challenges remain unsolved."
    ],
    "summary": "Building products with Large Language Models (LLMs) presents significant challenges that are often overlooked in discussions about AI. The Query Assistant allows users to generate Honeycomb queries using natural language, but it requires careful prompting and context management due to LLM limitations. Issues such as context window limitations, latency of LLMs, and the complexity of prompt engineering complicate the development process. The team has explored various strategies to improve query generation, including using embeddings and refining prompt techniques, but many challenges remain unsolved.",
    "infraDetails": [
      "Monitoring tools for performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "Query Assistant",
        "responsibility": "Generates Honeycomb queries from natural language input."
      },
      {
        "name": "LLM",
        "responsibility": "Processes user input and generates query outputs based on prompts."
      },
      {
        "name": "Query Engine",
        "responsibility": "Executes the generated queries against the Honeycomb data."
      },
      {
        "name": "Schema Manager",
        "responsibility": "Handles the structure and fields of the data schema for queries."
      },
      {
        "name": "Validation System",
        "responsibility": "Ensures the correctness and safety of the outputs generated by the LLM."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.honeycomb.io/blog/hard-stuff-nobody-talks-about-llm",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 18,
    "company": "Zalando",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Forecast demand in fashion e-commerce",
    "title": "Deep Learning based Forecasting: a case study from the online fashion industry",
    "url": "https://arxiv.org/abs/2305.14406",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "The article discusses demand forecasting in the online fashion industry, emphasizing the unique challenges faced in this sector.",
      "It highlights the importance of global, data-driven forecasting models due to the high volume of data and the irregularity of demand.",
      "The authors present a modeling approach that addresses the fixed inventory assumption by closely controlling the relationship between price and demand."
    ],
    "summary": "The article discusses demand forecasting in the online fashion industry, emphasizing the unique challenges faced in this sector. It highlights the importance of global, data-driven forecasting models due to the high volume of data and the irregularity of demand. The authors present a modeling approach that addresses the fixed inventory assumption by closely controlling the relationship between price and demand.",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://arxiv.org/abs/2305.14406",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 19,
    "company": "Etsy",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend relevant marketplace items",
    "title": "How We Built a Multi-Task Canonical Ranker for Recommendations at Etsy",
    "url": "https://www.etsy.com/uk/codeascraft/how-we-built-a-multi-task-canonical-ranker-for-recommendations-at-etsy",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://www.etsy.com/uk/codeascraft/how-we-built-a-multi-task-canonical-ranker-for-recommendations-at-etsy",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 20,
    "company": "Yelp",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Organize e-commerce content using embeddings",
    "title": "Yelp Content As Embeddings",
    "url": "https://engineeringblog.yelp.com/2023/04/yelp-content-as-embeddings.html",
    "year": 2023,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Yelp is utilizing embeddings to organize and rank e-commerce content, improving usability and model development efficiency.",
      "The Universal Sentence Encoder (USE) is employed to generate text embeddings that encapsulate semantic information from Yelp reviews.",
      "Yelp has explored fine-tuning the USE model specifically for its domain, leading to better performance in various NLP tasks compared to the pre-trained model.",
      "The CLIP model is being used to create photo embeddings, allowing for improved tagging and categorization of images without requiring extensive labeled datasets."
    ],
    "summary": "Yelp is utilizing embeddings to organize and rank e-commerce content, improving usability and model development efficiency. The Universal Sentence Encoder (USE) is employed to generate text embeddings that encapsulate semantic information from Yelp reviews. Yelp has explored fine-tuning the USE model specifically for its domain, leading to better performance in various NLP tasks compared to the pre-trained model. The CLIP model is being used to create photo embeddings, allowing for improved tagging and categorization of images without requiring extensive labeled datasets.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Content and Contributor Intelligence Team",
        "responsibility": "Generates low-dimensional representations of review text, business information, and photos."
      },
      {
        "name": "Universal Sentence Encoder",
        "responsibility": "Transforms varying sentence lengths into fixed-length vector representations for semantic understanding."
      },
      {
        "name": "CLIP Model",
        "responsibility": "Associates images with relevant text and generates photo embeddings for improved categorization."
      },
      {
        "name": "Model Evaluation Framework",
        "responsibility": "Compares performance of different models on Yelp-specific tasks."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineeringblog.yelp.com/2023/04/yelp-content-as-embeddings.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 21,
    "company": "Monzo",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Select relevant marketing messages",
    "title": "Optimising marketing messages for Monzo users",
    "url": "https://medium.com/data-monzo/optimising-marketing-messages-for-monzo-users-3fe805f24572",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/data-monzo/optimising-marketing-messages-for-monzo-users-3fe805f24572",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 22,
    "company": "Monzo",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Detect patterns in text data",
    "title": "Using topic modelling to understand customer saving goals",
    "url": "https://medium.com/data-monzo/using-topic-modelling-to-understand-customer-saving-goals-2bb06f00ce2d",
    "year": 2023,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/data-monzo/using-topic-modelling-to-understand-customer-saving-goals-2bb06f00ce2d",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 23,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict new product's sales potential",
    "title": "How Wayfair uses \"Predicted Winners\" Models to Accelerate Success for New Products",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/how-wayfair-uses-predicted-winners-models-to-accelerate-success-for-new-products",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for product features and customer engagement metrics",
      "Batch processing systems for model training and feature extraction",
      "Real-time streaming systems for capturing customer engagement signals",
      "Feature stores for managing and serving model features",
      "Model serving infrastructure for deploying Predicted Winners models",
      "Monitoring systems for evaluating model performance and bias"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair's 'Predicted Winners' models are designed to predict the long-term sales potential of new products, addressing the cold start problem.",
      "The system includes multiple components, such as the Day Zero model for initial predictions and the Continuous Winners model for refining those predictions based on early customer engagement.",
      "Sentinel, a continuous testing framework, helps mitigate biases in identifying winning products by controlling exposure variables.",
      "Innovations in feature engineering and model architecture have improved predictive power and enabled knowledge sharing across product classes."
    ],
    "summary": "Wayfair's 'Predicted Winners' models are designed to predict the long-term sales potential of new products, addressing the cold start problem. The system includes multiple components, such as the Day Zero model for initial predictions and the Continuous Winners model for refining those predictions based on early customer engagement. Sentinel, a continuous testing framework, helps mitigate biases in identifying winning products by controlling exposure variables. Innovations in feature engineering and model architecture have improved predictive power and enabled knowledge sharing across product classes.",
    "infraDetails": [
      "Data stores for product features and customer engagement metrics",
      "Batch processing systems for model training and feature extraction",
      "Real-time streaming systems for capturing customer engagement signals",
      "Feature stores for managing and serving model features",
      "Model serving infrastructure for deploying Predicted Winners models",
      "Monitoring systems for evaluating model performance and bias"
    ],
    "systemComponents": [
      {
        "name": "Day Zero Model",
        "responsibility": "Predicts long-term sales potential of new products at launch using intrinsic product features."
      },
      {
        "name": "Continuous Winners Model",
        "responsibility": "Refines predictions based on early customer engagement signals to identify successful products."
      },
      {
        "name": "Sentinel",
        "responsibility": "Controls exposure variables to prevent bias in the identification of winning products."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/how-wayfair-uses-predicted-winners-models-to-accelerate-success-for-new-products",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 24,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Personalized listing search",
    "title": "Learning To Rank Diversely",
    "url": "https://medium.com/airbnb-engineering/learning-to-rank-diversely-add6b1929621",
    "year": 2023,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/airbnb-engineering/learning-to-rank-diversely-add6b1929621",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 25,
    "company": "Twitter",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Recommend interesting tweets",
    "title": "Twitter's Recommendation Algorithm",
    "url": "https://blog.twitter.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Twitter's recommendation algorithm distills 500 million daily Tweets into a curated For You timeline.",
      "The recommendation system consists of candidate sourcing, ranking, and applying heuristics and filters to ensure relevance.",
      "Key components include In-Network and Out-of-Network sources, with advanced models like Real Graph and SimClusters for engagement prediction and community detection.",
      "The Home Mixer service integrates various candidate sources and serves the final timeline to users, processing billions of requests daily."
    ],
    "summary": "Twitter's recommendation algorithm distills 500 million daily Tweets into a curated For You timeline. The recommendation system consists of candidate sourcing, ranking, and applying heuristics and filters to ensure relevance. Key components include In-Network and Out-of-Network sources, with advanced models like Real Graph and SimClusters for engagement prediction and community detection. The Home Mixer service integrates various candidate sources and serves the final timeline to users, processing billions of requests daily.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Home Mixer",
        "responsibility": "Constructs and serves the For You timeline by integrating various candidate sources and scoring functions."
      },
      {
        "name": "Candidate Sources",
        "responsibility": "Retrieves relevant Tweets from both In-Network and Out-of-Network sources."
      },
      {
        "name": "Real Graph",
        "responsibility": "Predicts the likelihood of engagement between users to rank In-Network Tweets."
      },
      {
        "name": "GraphJet",
        "responsibility": "Processes real-time interactions between users and Tweets for Out-of-Network recommendations."
      },
      {
        "name": "SimClusters",
        "responsibility": "Generates embeddings to identify content similarity and community structures for Out-of-Network Tweets."
      },
      {
        "name": "Product Mixer",
        "responsibility": "Facilitates the building of content feeds, including the integration of ads and recommendations."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://blog.twitter.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 26,
    "company": "DoorDash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict if a store is open",
    "title": "How DoorDash Upgraded a Heuristic with ML to Save Thousands of Canceled Orders",
    "url": "https://doordash.engineering/2023/01/10/how-doordash-upgraded-a-heuristic-with-ml-to-save-thousands-of-canceled-orders/",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Feature store for storing derived features from reports and images",
      "Monitoring system for tracking model performance and decision outcomes"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash implemented a machine learning model to predict the operational status of stores, reducing the number of canceled orders and improving user experience.",
      "The model replaces a heuristic approach, allowing for more accurate and efficient handling of reports from Dashers about store closures.",
      "By analyzing historical data and images submitted by Dashers, the model calculates the probability of a store being closed, enabling better decision-making.",
      "The initiative has resulted in thousands of deliveries being saved from cancellation each week, benefiting consumers, merchants, and Dashers alike.",
      "Future improvements include developing a dynamic loss function to further refine decision thresholds based on various factors."
    ],
    "summary": "DoorDash implemented a machine learning model to predict the operational status of stores, reducing the number of canceled orders and improving user experience. The model replaces a heuristic approach, allowing for more accurate and efficient handling of reports from Dashers about store closures. By analyzing historical data and images submitted by Dashers, the model calculates the probability of a store being closed, enabling better decision-making. The initiative has resulted in thousands of deliveries being saved from cancellation each week, benefiting consumers, merchants, and Dashers alike. Future improvements include developing a dynamic loss function to further refine decision thresholds based on various factors.",
    "infraDetails": [
      "Feature store for storing derived features from reports and images",
      "Monitoring system for tracking model performance and decision outcomes"
    ],
    "systemComponents": [
      {
        "name": "Dasher App",
        "responsibility": "Facilitates reporting of store closures by Dashers and manages order assignments."
      },
      {
        "name": "DRSC Reporting System",
        "responsibility": "Handles incoming reports from Dashers and triggers actions based on the ML model's predictions."
      },
      {
        "name": "Image Classifier",
        "responsibility": "Processes images submitted by Dashers to extract features indicating store status."
      },
      {
        "name": "ML Model",
        "responsibility": "Calculates the probability of a store being closed based on historical data and image features."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of the ML model and the outcomes of decisions made based on its predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://doordash.engineering/2023/01/10/how-doordash-upgraded-a-heuristic-with-ml-to-save-thousands-of-canceled-orders/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 27,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Identify business customers",
    "title": "Hamlet: Wayfair's ML Approach to Identifying Business Shopper",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/hamlet",
    "year": 2023,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Aerospike - real-time data streaming platform for current order details and on-site search history.",
      "Vertex Feature Store - used for precomputing feature values every 12 hours to meet real-time inference needs.",
      "Real-time scoring application - designed to handle sub-second inference and response times."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed the Hamlet models to identify B2B customers browsing their consumer site, enhancing engagement with potential business shoppers.",
      "The Hamlet Order Confirmation model predicts the likelihood that an order was placed on behalf of a business, triggering immediate outreach to high-scoring customers.",
      "Key challenges included labeling customers with incomplete ground truth information and meeting real-time service level agreements without sacrificing feature richness.",
      "The model utilizes over 100 features from real-time browsing activity and historical data, balancing the need for quick inference with comprehensive feature sets.",
      "Hamlet OC has proven to be twice as effective as previous methods, showcasing significant advancements in both scientific and engineering aspects."
    ],
    "summary": "Wayfair developed the Hamlet models to identify B2B customers browsing their consumer site, enhancing engagement with potential business shoppers. The Hamlet Order Confirmation model predicts the likelihood that an order was placed on behalf of a business, triggering immediate outreach to high-scoring customers. Key challenges included labeling customers with incomplete ground truth information and meeting real-time service level agreements without sacrificing feature richness. The model utilizes over 100 features from real-time browsing activity and historical data, balancing the need for quick inference with comprehensive feature sets. Hamlet OC has proven to be twice as effective as previous methods, showcasing significant advancements in both scientific and engineering aspects.",
    "infraDetails": [
      "Aerospike - real-time data streaming platform for current order details and on-site search history.",
      "Vertex Feature Store - used for precomputing feature values every 12 hours to meet real-time inference needs.",
      "Real-time scoring application - designed to handle sub-second inference and response times."
    ],
    "systemComponents": [
      {
        "name": "Hamlet Models",
        "responsibility": "Identify and classify customers as B2B or B2C based on shopping behavior."
      },
      {
        "name": "Feature Engineering Framework",
        "responsibility": "Create and retrieve features from various data sources for model inference."
      },
      {
        "name": "Model Inference Pipeline",
        "responsibility": "Trigger model scoring upon order placement and determine customer engagement strategies."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/hamlet",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 28,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Detect fraud with embeddings",
    "title": "Introducing Melange: A Customer Journey Embedding System for Improving Fraud and Policy Abuse Detection",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/introducing-melange-a-customer-journey-embedding-system-for-improving-fraud-and-scam-detection",
    "year": 2023,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Vertex Pipeline",
      "Feature Store",
      "Batch Inference Pipeline"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed Melange, a customer journey embedding system, to enhance fraud detection by capturing complex customer behavior patterns.",
      "Melange utilizes self-supervised representation learning to generate embeddings from customer session data, allowing for improved feature extraction without manual intervention.",
      "The system has shown significant performance improvements in fraud detection models, with some tasks achieving up to 18% relative performance gains.",
      "Melange's embeddings serve as external features for downstream models, facilitating better understanding and analysis of customer behavior.",
      "Future enhancements may include applying Melange to new tasks and exploring advanced modeling techniques."
    ],
    "summary": "Wayfair developed Melange, a customer journey embedding system, to enhance fraud detection by capturing complex customer behavior patterns. Melange utilizes self-supervised representation learning to generate embeddings from customer session data, allowing for improved feature extraction without manual intervention. The system has shown significant performance improvements in fraud detection models, with some tasks achieving up to 18% relative performance gains. Melange's embeddings serve as external features for downstream models, facilitating better understanding and analysis of customer behavior. Future enhancements may include applying Melange to new tasks and exploring advanced modeling techniques.",
    "infraDetails": [
      "Vertex Pipeline",
      "Feature Store",
      "Batch Inference Pipeline"
    ],
    "systemComponents": [
      {
        "name": "Melange",
        "responsibility": "Generates customer embeddings based on session history for fraud detection."
      },
      {
        "name": "Inference Batch Pipeline",
        "responsibility": "Collects session data and calculates aggregated customer embeddings."
      },
      {
        "name": "Feature Store",
        "responsibility": "Stores manually created tabular features representing customer behavior statistics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/introducing-melange-a-customer-journey-embedding-system-for-improving-fraud-and-scam-detection",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 29,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Improve travel search experience",
    "title": "Building Airbnb Categories with ML & Human in the Loop",
    "url": "https://medium.com/airbnb-engineering/building-airbnb-categories-with-ml-human-in-the-loop-35b78a837725",
    "year": 2023,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/airbnb-engineering/building-airbnb-categories-with-ml-human-in-the-loop-35b78a837725",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 30,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Automatically generate ad content",
    "title": "How We Automated Content Marketing to Acquire Users at Scale",
    "url": "https://engineering.atspotify.com/2023/11/how-we-automated-content-marketing-to-acquire-users-at-scale/",
    "year": 2023,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data pipeline components for querying ad platform APIs and mobile measurement partner APIs.",
      "Nexrender for batch processing of creative assets."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Spotify automated its content marketing to efficiently generate ad content and acquire users at scale.",
      "The system includes a loop of ingesting, ranking, deploying, learning, and repeating to optimize ad performance.",
      "Machine learning is leveraged to rank content based on performance metrics and artist popularity, enhancing ad targeting.",
      "The integration of tools like Adobe After Effects and nexrender facilitated the automation of creative asset generation.",
      "The project resulted in a significant increase in monthly active users by optimizing ad creatives through machine learning."
    ],
    "summary": "Spotify automated its content marketing to efficiently generate ad content and acquire users at scale. The system includes a loop of ingesting, ranking, deploying, learning, and repeating to optimize ad performance. Machine learning is leveraged to rank content based on performance metrics and artist popularity, enhancing ad targeting. The integration of tools like Adobe After Effects and nexrender facilitated the automation of creative asset generation. The project resulted in a significant increase in monthly active users by optimizing ad creatives through machine learning.",
    "infraDetails": [
      "Data pipeline components for querying ad platform APIs and mobile measurement partner APIs.",
      "Nexrender for batch processing of creative assets."
    ],
    "systemComponents": [
      {
        "name": "Content Generation Service",
        "responsibility": "Generates creative ad assets using templates and metadata."
      },
      {
        "name": "Content Ranking Model",
        "responsibility": "Ranks content based on performance metrics and artist popularity."
      },
      {
        "name": "Data Pipeline",
        "responsibility": "Fetches ad performance metrics and attribution data from various APIs."
      },
      {
        "name": "Nexrender",
        "responsibility": "Automates the rendering of creative assets in batch processes."
      },
      {
        "name": "Ad Performance Monitoring System",
        "responsibility": "Tracks and analyzes key metrics to optimize marketing campaigns."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.atspotify.com/2023/11/how-we-automated-content-marketing-to-acquire-users-at-scale",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 31,
    "company": "Instacart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict availability of food items",
    "title": "How Instacart Modernized the Prediction of Real Time Availability for Hundreds of Millions of Items While Saving Costs",
    "url": "https://tech.instacart.com/how-instacart-modernized-the-prediction-of-real-time-availability-for-hundreds-of-millions-of-items-59b2a82c89fe",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data warehouse: Snowflake",
      "Database for scalable serving: Postgres",
      "Real-time streaming infrastructure"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Instacart faced challenges in predicting real-time availability of food items due to fluctuating inventory and increased catalog size during the pandemic.",
      "The previous model relied on batch processing and lacked interpretability, leading to issues with accuracy and responsiveness to changing inventory conditions.",
      "A new hierarchical model structure was developed to improve predictions by incorporating general availability, trending deviations, and real-time observations.",
      "The updated infrastructure, Griffin, was designed to enhance MLOps capabilities, reduce costs, and improve the freshness of availability scores."
    ],
    "summary": "Instacart faced challenges in predicting real-time availability of food items due to fluctuating inventory and increased catalog size during the pandemic. The previous model relied on batch processing and lacked interpretability, leading to issues with accuracy and responsiveness to changing inventory conditions. A new hierarchical model structure was developed to improve predictions by incorporating general availability, trending deviations, and real-time observations. The updated infrastructure, Griffin, was designed to enhance MLOps capabilities, reduce costs, and improve the freshness of availability scores.",
    "infraDetails": [
      "Data warehouse: Snowflake",
      "Database for scalable serving: Postgres",
      "Real-time streaming infrastructure"
    ],
    "systemComponents": [
      {
        "name": "General Availability Model",
        "responsibility": "Predicts typical item availability patterns over a longer time frame."
      },
      {
        "name": "Trending Model",
        "responsibility": "Quantifies deviations from general availability patterns based on recent events."
      },
      {
        "name": "Real-Time Inference Module",
        "responsibility": "Responds to the latest observations and signals to provide timely availability predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/how-instacart-modernized-the-prediction-of-real-time-availability-for-hundreds-of-millions-of-items-59b2a82c89fe",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 32,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Personalize the homepage feed",
    "title": "Enhancing homepage feed relevance by harnessing the power of large corpus sparse ID embeddings",
    "url": "https://engineering.linkedin.com/blog/2023/enhancing-homepage-feed-relevance-by-harnessing-the-power-of-lar",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Spark for data processing",
      "Kubernetes for distributed training",
      "Horovod for efficient multi-GPU training",
      "Monitoring for training performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn has enhanced its homepage feed relevance by utilizing large corpus sparse ID embeddings to deliver more personalized content to its members.",
      "The system transforms sparse ID features into embedding space, allowing for better recommendations and addressing the cold start problem for new members and items.",
      "Improvements in the machine learning infrastructure have enabled swift training, offline inference, and online serving capabilities for large models, significantly impacting business outcomes.",
      "The model architecture incorporates a mixed effect model that captures global trends while adapting to individual item popularity, leveraging embeddings for enhanced predictive power."
    ],
    "summary": "LinkedIn has enhanced its homepage feed relevance by utilizing large corpus sparse ID embeddings to deliver more personalized content to its members. The system transforms sparse ID features into embedding space, allowing for better recommendations and addressing the cold start problem for new members and items. Improvements in the machine learning infrastructure have enabled swift training, offline inference, and online serving capabilities for large models, significantly impacting business outcomes. The model architecture incorporates a mixed effect model that captures global trends while adapting to individual item popularity, leveraging embeddings for enhanced predictive power.",
    "infraDetails": [
      "Spark for data processing",
      "Kubernetes for distributed training",
      "Horovod for efficient multi-GPU training",
      "Monitoring for training performance"
    ],
    "systemComponents": [
      {
        "name": "Embedding Lookup Table",
        "responsibility": "Transforms sparse ID features into a lower-dimensional embedding space."
      },
      {
        "name": "Recommendation Algorithm",
        "responsibility": "Utilizes embeddings to generate personalized content recommendations."
      },
      {
        "name": "Mixed Effect Model (GDMix)",
        "responsibility": "Captures global trends and item popularity for ranking predictions."
      },
      {
        "name": "ML Pipeline",
        "responsibility": "Processes data efficiently without materializing intermediate outputs."
      },
      {
        "name": "Training Infrastructure",
        "responsibility": "Supports distributed training and optimization of model parameters."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2023/enhancing-homepage-feed-relevance-by-harnessing-the-power-of-lar",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 33,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Forecast order volumes and deliveries",
    "title": "How DoorDash Built an Ensemble Learning Model for Time Series Forecasting",
    "url": "https://doordash.engineering/2023/06/20/how-doordash-built-an-ensemble-learning-model-for-time-series-forecasting/",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Ray cluster for distributed model training",
      "Feature store for managing external features and causal factors"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash developed an ensemble learning model called ELITE to improve the accuracy and efficiency of time series forecasting for order volumes and deliveries.",
      "The ELITE model combines multiple computationally efficient models to enhance overall forecasting accuracy while significantly reducing runtime and computational costs.",
      "By eliminating the need for heavy rolling window cross-validation, the new framework allows for faster model training and supports highly granular forecasting tasks.",
      "The modular design of ELITE enables the integration of user-defined models and external features, improving flexibility and reducing maintenance efforts."
    ],
    "summary": "DoorDash developed an ensemble learning model called ELITE to improve the accuracy and efficiency of time series forecasting for order volumes and deliveries. The ELITE model combines multiple computationally efficient models to enhance overall forecasting accuracy while significantly reducing runtime and computational costs. By eliminating the need for heavy rolling window cross-validation, the new framework allows for faster model training and supports highly granular forecasting tasks. The modular design of ELITE enables the integration of user-defined models and external features, improving flexibility and reducing maintenance efforts.",
    "infraDetails": [
      "Ray cluster for distributed model training",
      "Feature store for managing external features and causal factors"
    ],
    "systemComponents": [
      {
        "name": "Base Layer Models",
        "responsibility": "Provide initial forecasts that serve as features for the ensemble model."
      },
      {
        "name": "Ensemble Layer Model",
        "responsibility": "Combine forecasts from base models and external features to generate final predictions."
      },
      {
        "name": "Forecast Factory",
        "responsibility": "Manage the overall forecasting pipeline and model configurations."
      },
      {
        "name": "Ray Cluster",
        "responsibility": "Facilitate distributed training of models to enhance computational efficiency."
      },
      {
        "name": "Automated Model Swapping Framework",
        "responsibility": "Allow for easy integration and replacement of models within the ensemble."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://doordash.engineering/2023/06/20/how-doordash-built-an-ensemble-learning-model-for-time-series-forecasting/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 34,
    "company": "Expedia",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Forecast flight prices",
    "title": "Using Synthetic Search Data for Flights Price Forecasting",
    "url": "https://medium.com/expedia-group-tech/using-synthetic-search-data-for-flights-price-forecasting-4cf3277afdaf",
    "year": 2023,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/expedia-group-tech/using-synthetic-search-data-for-flights-price-forecasting-4cf3277afdaf",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 35,
    "company": "Nextdoor",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Generate engaging email subject lines",
    "title": "Let AI Entertain You: Increasing User Engagement with Generative AI and Rejection Sampling",
    "url": "https://engblog.nextdoor.com/let-ai-entertain-you-increasing-user-engagement-with-generative-ai-and-rejection-sampling-50a402264f56",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Monitoring system for performance tracking of the reward model"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Nextdoor aims to enhance user engagement through AI-generated email subject lines using Generative AI and Rejection Sampling techniques.",
      "The system addresses challenges such as ensuring subject lines are engaging, authentic, and free from hallucinations.",
      "A reward model is employed to evaluate and select the most engaging subject lines, improving upon initial outputs from the Generative AI.",
      "Cost optimization strategies, including caching, have been implemented to reduce operational expenses significantly.",
      "The framework developed is seen as a general solution for improving user engagement with AI-generated content."
    ],
    "summary": "Nextdoor aims to enhance user engagement through AI-generated email subject lines using Generative AI and Rejection Sampling techniques. The system addresses challenges such as ensuring subject lines are engaging, authentic, and free from hallucinations. A reward model is employed to evaluate and select the most engaging subject lines, improving upon initial outputs from the Generative AI. Cost optimization strategies, including caching, have been implemented to reduce operational expenses significantly. The framework developed is seen as a general solution for improving user engagement with AI-generated content.",
    "infraDetails": [
      "Monitoring system for performance tracking of the reward model"
    ],
    "systemComponents": [
      {
        "name": "Subject Line Generator",
        "responsibility": "Generates subject lines based on post content using Generative AI."
      },
      {
        "name": "Reward Model",
        "responsibility": "Evaluates and predicts the engagement level of generated subject lines compared to user-generated ones."
      },
      {
        "name": "Caching System",
        "responsibility": "Stores outputs of the model to minimize repeated processing and reduce costs."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of the reward model and user engagement metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engblog.nextdoor.com/let-ai-entertain-you-increasing-user-engagement-with-generative-ai-and-rejection-sampling-50a402264f56",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 36,
    "company": "Criteo",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Figure out users' preferences",
    "title": "Recommender systems need a user model",
    "url": "https://medium.com/criteo-engineering/recommender-systems-need-a-user-model-c3b3790311bf",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/criteo-engineering/recommender-systems-need-a-user-model-c3b3790311bf",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 37,
    "company": "Apple",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Identify objects on images",
    "title": "Fast Class-Agnostic Salient Object Segmentation",
    "url": "https://machinelearning.apple.com/research/salient-object-segmentation",
    "year": 2023,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Synthetic and real-world data stores for training"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Apple has developed a fast, class-agnostic salient object segmentation system that allows users to isolate subjects from images across various applications.",
      "The model operates on-device using a deep neural network designed for low latency, ensuring a seamless user experience during interactions.",
      "It employs a combination of synthetic and real-world data for training, focusing on minimizing bias and improving the quality of segmentation outputs.",
      "The system includes confidence-based gating to ensure only reliable segmentation results are presented to users, enhancing the overall product experience.",
      "The development process involved balancing applied research, engineering, and user feedback to achieve a shipping-quality model."
    ],
    "summary": "Apple has developed a fast, class-agnostic salient object segmentation system that allows users to isolate subjects from images across various applications. The model operates on-device using a deep neural network designed for low latency, ensuring a seamless user experience during interactions. It employs a combination of synthetic and real-world data for training, focusing on minimizing bias and improving the quality of segmentation outputs. The system includes confidence-based gating to ensure only reliable segmentation results are presented to users, enhancing the overall product experience. The development process involved balancing applied research, engineering, and user feedback to achieve a shipping-quality model.",
    "infraDetails": [
      "Synthetic and real-world data stores for training"
    ],
    "systemComponents": [
      {
        "name": "Subject Lifting Model",
        "responsibility": "Performs real-time salient object segmentation to isolate subjects from images."
      },
      {
        "name": "Confidence Scoring Branch",
        "responsibility": "Estimates the likelihood of a salient foreground to gate segmentation outputs."
      },
      {
        "name": "Upsampling Module",
        "responsibility": "Processes the segmentation mask to match the source image's resolution while preserving details."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://machinelearning.apple.com/research/salient-object-segmentation",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 38,
    "company": "Zillow",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Identify and block unwanted callers",
    "title": "SpectroBrain: Detecting Phone Spam with Semi-Supervised Learning",
    "url": "https://www.zillow.com/tech/spectrobrain-detecting-phone-spam-with-semi-supervised-learning/",
    "year": 2023,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Feature extraction using Mel Frequency Cepstral Coefficients (MFCC)",
      "Latent feature encoder for audio representation",
      "Model serving infrastructure for spam detection",
      "Monitoring tools for model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Zillow developed SpectroBrain, a phone spam detection system using semi-supervised learning to identify and block unwanted callers.",
      "The system addresses the challenge of limited labeled training data by leveraging a small dataset of manually labeled phone messages and a larger set of unlabeled audio data.",
      "Key innovations include the removal of preambles from voice messages to improve prediction accuracy and the use of a latent feature encoder trained on unlabeled data.",
      "The architecture employs a CNN-Transformer model to process audio data and predict switch points between preambles and actual voice content."
    ],
    "summary": "Zillow developed SpectroBrain, a phone spam detection system using semi-supervised learning to identify and block unwanted callers. The system addresses the challenge of limited labeled training data by leveraging a small dataset of manually labeled phone messages and a larger set of unlabeled audio data. Key innovations include the removal of preambles from voice messages to improve prediction accuracy and the use of a latent feature encoder trained on unlabeled data. The architecture employs a CNN-Transformer model to process audio data and predict switch points between preambles and actual voice content.",
    "infraDetails": [
      "Feature extraction using Mel Frequency Cepstral Coefficients (MFCC)",
      "Latent feature encoder for audio representation",
      "Model serving infrastructure for spam detection",
      "Monitoring tools for model performance"
    ],
    "systemComponents": [
      {
        "name": "Audio Feature Encoder",
        "responsibility": "Learns contextual representations of audio data from unlabeled phone messages."
      },
      {
        "name": "Preamble Detector",
        "responsibility": "Identifies switch points between preambles and actual voice content in phone messages."
      },
      {
        "name": "Text-based Spam Classifier",
        "responsibility": "Classifies transcribed voice messages to detect spam based on text content."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.zillow.com/tech/spectrobrain-detecting-phone-spam-with-semi-supervised-learning/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 39,
    "company": "Algolia",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Suggest relevant search queries",
    "title": "Feature Spotlight: Query Suggestions",
    "url": "https://www.algolia.com/blog/product/feature-spotlight-query-suggestions/",
    "year": 2023,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data Stores: Algolia's indexing system for query suggestions.",
      "Orchestration: Dashboard tools for configuring query suggestion settings.",
      "Monitoring: Tools to manage and ban inappropriate suggestions."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Algolia's Query Suggestions feature enhances user search experiences by providing relevant autocomplete suggestions based on collected data.",
      "To implement query suggestions, businesses must ensure they are capturing click and conversion events and create a dedicated index for suggestions.",
      "Algolia offers tools to manage inappropriate suggestions and allows customization of suggestion criteria to improve user experience.",
      "The integration of scoped or category-specific suggestions can further streamline the search process, similar to practices used by major e-commerce platforms."
    ],
    "summary": "Algolia's Query Suggestions feature enhances user search experiences by providing relevant autocomplete suggestions based on collected data. To implement query suggestions, businesses must ensure they are capturing click and conversion events and create a dedicated index for suggestions. Algolia offers tools to manage inappropriate suggestions and allows customization of suggestion criteria to improve user experience. The integration of scoped or category-specific suggestions can further streamline the search process, similar to practices used by major e-commerce platforms.",
    "infraDetails": [
      "Data Stores: Algolia's indexing system for query suggestions.",
      "Orchestration: Dashboard tools for configuring query suggestion settings.",
      "Monitoring: Tools to manage and ban inappropriate suggestions."
    ],
    "systemComponents": [
      {
        "name": "Autocomplete Plugin",
        "responsibility": "Handles the user interface for displaying query suggestions."
      },
      {
        "name": "Query Suggestions Index",
        "responsibility": "Stores and manages the data for autocomplete suggestions."
      },
      {
        "name": "Search Client",
        "responsibility": "Facilitates communication between the application and Algolia's services."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.algolia.com/blog/product/feature-spotlight-query-suggestions/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 40,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "In-video search",
    "title": "Building In-Video Search",
    "url": "https://netflixtechblog.com/building-in-video-search-936766f0017c",
    "year": 2023,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Media feature store for storing video embeddings",
      "Elastic search cluster for real-time nearest neighbor queries",
      "S3 object storage for storing shot segmentation results",
      "Data loader for streaming video shots from S3 to GPUs"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Netflix has developed an internal in-video search system that allows video editors to efficiently find specific scenes or elements across their extensive video catalog.",
      "The system leverages contrastive learning to create joint embedding spaces for images and text, enhancing the search capabilities for visual elements in videos.",
      "Video embeddings are precomputed and stored in a media feature store, enabling real-time nearest neighbor queries for efficient search operations.",
      "The architecture includes a combination of CPU and GPU processing to optimize throughput during video embedding computation and inference."
    ],
    "summary": "Netflix has developed an internal in-video search system that allows video editors to efficiently find specific scenes or elements across their extensive video catalog. The system leverages contrastive learning to create joint embedding spaces for images and text, enhancing the search capabilities for visual elements in videos. Video embeddings are precomputed and stored in a media feature store, enabling real-time nearest neighbor queries for efficient search operations. The architecture includes a combination of CPU and GPU processing to optimize throughput during video embedding computation and inference.",
    "infraDetails": [
      "Media feature store for storing video embeddings",
      "Elastic search cluster for real-time nearest neighbor queries",
      "S3 object storage for storing shot segmentation results",
      "Data loader for streaming video shots from S3 to GPUs"
    ],
    "systemComponents": [
      {
        "name": "Text Encoder",
        "responsibility": "Extracts text embeddings from user queries for search."
      },
      {
        "name": "Video Encoder",
        "responsibility": "Generates video embeddings from video shots for retrieval."
      },
      {
        "name": "Media Feature Management System",
        "responsibility": "Triggers video embedding computation when new assets are added."
      },
      {
        "name": "Query Processor",
        "responsibility": "Handles user search queries and performs nearest neighbor searches."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://netflixtechblog.com/building-in-video-search-936766f0017c",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 41,
    "company": "Grab",
    "industry": "Delivery and mobility,Banking and finance",
    "industries": [
      "Delivery and mobility",
      "Banking and finance"
    ],
    "description": "Automatically tag sensitive data",
    "title": "LLM-powered data classification for data entities at scale",
    "url": "https://engineering.grab.com/llm-powered-data-classification",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Gemini orchestration service for managing data classification requests",
      "Message queue for aggregating classification requests"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grab has implemented an LLM-powered data classification system to automate the tagging of sensitive data across its vast data entities.",
      "The system, named Gemini, integrates with existing data platforms to streamline the classification process, reducing manual effort and improving accuracy.",
      "By leveraging LLM capabilities, data governance personnel can express requirements through natural language, allowing for easier customization and implementation of classification rules."
    ],
    "summary": "Grab has implemented an LLM-powered data classification system to automate the tagging of sensitive data across its vast data entities. The system, named Gemini, integrates with existing data platforms to streamline the classification process, reducing manual effort and improving accuracy. By leveraging LLM capabilities, data governance personnel can express requirements through natural language, allowing for easier customization and implementation of classification rules.",
    "infraDetails": [
      "Gemini orchestration service for managing data classification requests",
      "Message queue for aggregating classification requests"
    ],
    "systemComponents": [
      {
        "name": "Data Platforms",
        "responsibility": "Manage data entities and initiate data classification requests."
      },
      {
        "name": "Gemini",
        "responsibility": "Orchestrate and manage the data classification requests from data platforms."
      },
      {
        "name": "Classification Engines",
        "responsibility": "Execute classification jobs using third-party services and LLM."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.grab.com/llm-powered-data-classification",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 42,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Accurately forecast demand during holidays",
    "title": "How DoorDash Improves Holiday Predictions via Cascade ML Approach",
    "url": "https://doordash.engineering/2023/08/31/how-doordash-improves-holiday-predictions-via-cascade-ml-approach/",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Spark for parallel computation"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash implemented a cascade modeling approach to enhance demand forecasting accuracy during holidays, addressing the limitations of traditional machine learning models like GBM.",
      "The cascade approach combines a gradient boosting machine with a linear model to better account for the unique variations in order volume during holiday periods.",
      "By calculating holiday multipliers and preprocessing data, DoorDash can generate more accurate forecasts that consider the impact of holidays on supply and demand.",
      "This improved forecasting capability supports DoorDash's mobilization system, ensuring efficient operations and high-quality experiences for customers and Dashers."
    ],
    "summary": "DoorDash implemented a cascade modeling approach to enhance demand forecasting accuracy during holidays, addressing the limitations of traditional machine learning models like GBM. The cascade approach combines a gradient boosting machine with a linear model to better account for the unique variations in order volume during holiday periods. By calculating holiday multipliers and preprocessing data, DoorDash can generate more accurate forecasts that consider the impact of holidays on supply and demand. This improved forecasting capability supports DoorDash's mobilization system, ensuring efficient operations and high-quality experiences for customers and Dashers.",
    "infraDetails": [
      "Spark for parallel computation"
    ],
    "systemComponents": [
      {
        "name": "Forecasting Model",
        "responsibility": "Generates initial supply and demand forecasts using GBM."
      },
      {
        "name": "Holiday Multiplier Calculator",
        "responsibility": "Calculates holiday multipliers using linear regression for each starting point-daypart pair."
      },
      {
        "name": "Data Preprocessing Framework",
        "responsibility": "Preprocesses input series to create 'holiday-free' figures for model training."
      },
      {
        "name": "Mobilization System",
        "responsibility": "Integrates forecasts into operational planning to ensure efficient resource allocation."
      },
      {
        "name": "Post-Processing System",
        "responsibility": "Adjusts forecasts using calculated holiday multipliers to produce final predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://doordash.engineering/2023/08/31/how-doordash-improves-holiday-predictions-via-cascade-ml-approach/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 43,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Personalize video clips",
    "title": "The Next Step in Personalization: Dynamic Sizzles",
    "url": "https://netflixtechblog.com/the-next-step-in-personalization-dynamic-sizzles-4dc4ce2011ef",
    "year": 2023,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Hollow technology for quick timecode searches",
      "Streaming algorithms optimized for short video segments"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Netflix has introduced Dynamic Sizzles, personalized video montages that enhance user engagement by tailoring content to individual preferences.",
      "The system automates the creation of these sizzle reels, significantly reducing the time and cost compared to manual production.",
      "Dynamic Sizzles utilize a Mega Asset, a library of video clips, to dynamically assemble personalized content based on user rankings and preferences.",
      "The process involves precise clip selection, automated timecode management, and a predefined cadence to ensure a balanced presentation of titles.",
      "Challenges in streaming and player integration were addressed to support seamless playback of multiple video segments."
    ],
    "summary": "Netflix has introduced Dynamic Sizzles, personalized video montages that enhance user engagement by tailoring content to individual preferences. The system automates the creation of these sizzle reels, significantly reducing the time and cost compared to manual production. Dynamic Sizzles utilize a Mega Asset, a library of video clips, to dynamically assemble personalized content based on user rankings and preferences. The process involves precise clip selection, automated timecode management, and a predefined cadence to ensure a balanced presentation of titles. Challenges in streaming and player integration were addressed to support seamless playback of multiple video segments.",
    "infraDetails": [
      "Hollow technology for quick timecode searches",
      "Streaming algorithms optimized for short video segments"
    ],
    "systemComponents": [
      {
        "name": "Dynamic Sizzle System",
        "responsibility": "Automates the creation of personalized video montages."
      },
      {
        "name": "Mega Asset",
        "responsibility": "Serves as a library of video clips for assembling Dynamic Sizzles."
      },
      {
        "name": "Hollow Technology",
        "responsibility": "Facilitates quick access to timecodes for video clips."
      },
      {
        "name": "API Layer",
        "responsibility": "Handles requests and responses for Dynamic Sizzle support in the player."
      },
      {
        "name": "Streaming Engine",
        "responsibility": "Optimizes playback of discontiguous video segments."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://netflixtechblog.com/the-next-step-in-personalization-dynamic-sizzles-4dc4ce2011ef",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 44,
    "company": "BlaBlaCar",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Prevent phishing and payment fraud",
    "title": "How we used machine learning to fight fraud at BlaBlaCar - Part 1",
    "url": "https://medium.com/blablacar/how-we-used-machine-learning-to-fight-fraud-at-blablacar-part-1-3b976c9dcdf6",
    "year": 2023,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/blablacar/how-we-used-machine-learning-to-fight-fraud-at-blablacar-part-1-3b976c9dcdf6",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 45,
    "company": "Instacart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Personalize user experience by recommending relevant products",
    "title": "Using Contextual Bandit models in large action spaces at Instacart",
    "url": "https://tech.instacart.com/using-contextual-bandit-models-in-large-action-spaces-at-instacart-cb7ab4d8fa4f",
    "year": 2023,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data stores for user and product information",
      "Batch processing systems for data collection and model training",
      "Orchestration tools for managing model deployment and A/B testing",
      "Feature stores for storing and retrieving user and item features",
      "Model serving infrastructure for deploying trained models",
      "Monitoring systems for evaluating model performance and user interactions"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Instacart uses Contextual Bandit models to personalize product recommendations based on various user considerations.",
      "The challenge lies in training these models effectively when the action space (number of products) is large, making traditional methods infeasible.",
      "Instacart's approach includes using a linear model for well-defined queries and a nonlinear model for broader queries to improve item retrieval and ranking.",
      "Recent experiments showed a significant increase in cart adds per search, leading to the deployment of the XGBoost model for ranking.",
      "Future plans involve further experimentation with Contextual Bandit models for personalized multi-objective ranking."
    ],
    "summary": "Instacart uses Contextual Bandit models to personalize product recommendations based on various user considerations. The challenge lies in training these models effectively when the action space (number of products) is large, making traditional methods infeasible. Instacart's approach includes using a linear model for well-defined queries and a nonlinear model for broader queries to improve item retrieval and ranking. Recent experiments showed a significant increase in cart adds per search, leading to the deployment of the XGBoost model for ranking. Future plans involve further experimentation with Contextual Bandit models for personalized multi-objective ranking.",
    "infraDetails": [
      "Data stores for user and product information",
      "Batch processing systems for data collection and model training",
      "Orchestration tools for managing model deployment and A/B testing",
      "Feature stores for storing and retrieving user and item features",
      "Model serving infrastructure for deploying trained models",
      "Monitoring systems for evaluating model performance and user interactions"
    ],
    "systemComponents": [
      {
        "name": "Contextual Bandit Model",
        "responsibility": "Personalizes product recommendations based on user context."
      },
      {
        "name": "XGBoost Model",
        "responsibility": "Used for ranking products based on multiple objectives."
      },
      {
        "name": "Data Collection System",
        "responsibility": "Collects user interaction data for training the Contextual Bandit models."
      },
      {
        "name": "Orchestration Tool",
        "responsibility": "Manages the deployment and testing of different model variants."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and user engagement metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/using-contextual-bandit-models-in-large-action-spaces-at-instacart-cb7ab4d8fa4f",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 46,
    "company": "Pinterest",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Recommend similar visual content",
    "title": "Training Foundation Improvements for Closeup Recommendation Ranker",
    "url": "https://medium.com/pinterest-engineering/training-foundation-improvements-for-closeup-recommendation-ranker-67d90603426e",
    "year": 2023,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/pinterest-engineering/training-foundation-improvements-for-closeup-recommendation-ranker-67d90603426e",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 47,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Recommend new complementary music",
    "title": "Spotify Track Neural Recommender System",
    "url": "https://medium.com/stanford-cs224w/spotify-track-neural-recommender-system-51d266e31e16",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/stanford-cs224w/spotify-track-neural-recommender-system-51d266e31e16",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 48,
    "company": "Meta",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Generate code with LLM",
    "title": "Introducing Code Llama, a state-of-the-art large language model for coding",
    "url": "https://ai.meta.com/blog/code-llama-large-language-model-coding/",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Data stores for model training and evaluation",
      "Batch processing systems for training on large datasets",
      "Model serving infrastructure to deploy various Code Llama versions",
      "Monitoring systems to evaluate model performance and safety",
      "Feature stores for managing code-related data and prompts"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Code Llama is a state-of-the-art large language model developed by Meta, specifically designed for coding tasks.",
      "It is available in multiple versions, including a foundational model and specialized variants for Python and natural language instructions.",
      "Code Llama has shown superior performance on coding benchmarks compared to existing models, making it a valuable tool for developers.",
      "The model is built on Llama 2 and trained on extensive code datasets, allowing it to generate and debug code effectively.",
      "Meta emphasizes an open approach to AI development, encouraging community evaluation and responsible use of Code Llama."
    ],
    "summary": "Code Llama is a state-of-the-art large language model developed by Meta, specifically designed for coding tasks. It is available in multiple versions, including a foundational model and specialized variants for Python and natural language instructions. Code Llama has shown superior performance on coding benchmarks compared to existing models, making it a valuable tool for developers. The model is built on Llama 2 and trained on extensive code datasets, allowing it to generate and debug code effectively. Meta emphasizes an open approach to AI development, encouraging community evaluation and responsible use of Code Llama.",
    "infraDetails": [
      "Data stores for model training and evaluation",
      "Batch processing systems for training on large datasets",
      "Model serving infrastructure to deploy various Code Llama versions",
      "Monitoring systems to evaluate model performance and safety",
      "Feature stores for managing code-related data and prompts"
    ],
    "systemComponents": [
      {
        "name": "Code Llama",
        "responsibility": "Generates code and natural language about code from prompts."
      },
      {
        "name": "Code Llama - Python",
        "responsibility": "Specialized model for generating Python code."
      },
      {
        "name": "Code Llama - Instruct",
        "responsibility": "Fine-tuned to understand natural language instructions for code generation."
      },
      {
        "name": "Benchmarking System",
        "responsibility": "Evaluates model performance against coding benchmarks."
      },
      {
        "name": "Safety Evaluation Framework",
        "responsibility": "Assesses the risk of generating malicious code and ensures responsible use."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://ai.meta.com/blog/code-llama-large-language-model-coding/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 49,
    "company": "Grammarly",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Suggest gender-inclusive grammatical error corrections",
    "title": "Improving the Performance of NLP Systems on the Gender-Neutral \"They\"",
    "url": "https://arxiv.org/abs/2306.07415",
    "year": 2023,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "The article discusses gender bias in grammatical error correction (GEC) systems, particularly regarding the use of gender-neutral 'they'.",
      "It introduces a novel data augmentation technique that improves GEC systems' performance on gender-neutral terms while maintaining quality.",
      "The authors demonstrate that their approach can effectively reduce bias in GEC systems, especially for singular 'they'."
    ],
    "summary": "The article discusses gender bias in grammatical error correction (GEC) systems, particularly regarding the use of gender-neutral 'they'. It introduces a novel data augmentation technique that improves GEC systems' performance on gender-neutral terms while maintaining quality. The authors demonstrate that their approach can effectively reduce bias in GEC systems, especially for singular 'they'.",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://arxiv.org/abs/2306.07415",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 50,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Detect speech and music in audio",
    "title": "Detecting Speech and Music in Audio Content",
    "url": "https://netflixtechblog.com/detecting-speech-and-music-in-audio-content-afd64e6a5bf8",
    "year": 2023,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for large-scale audio datasets",
      "Batch processing systems for audio analysis",
      "Feature stores for audio features and labels",
      "Model serving infrastructure for deploying SMAD models",
      "Monitoring systems for evaluating model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Netflix has developed a Speech and Music Activity Detection (SMAD) system to enhance audio content understanding in film and TV.",
      "SMAD provides detailed temporal metadata about speech and music regions, aiding in tasks like dialogue analysis, music information retrieval, and post-production processes.",
      "The system utilizes a large dataset with noisy labels to improve classification performance while minimizing manual labeling efforts.",
      "Investments in SMAD can significantly enhance productivity across various audio-related tasks in content production and delivery."
    ],
    "summary": "Netflix has developed a Speech and Music Activity Detection (SMAD) system to enhance audio content understanding in film and TV. SMAD provides detailed temporal metadata about speech and music regions, aiding in tasks like dialogue analysis, music information retrieval, and post-production processes. The system utilizes a large dataset with noisy labels to improve classification performance while minimizing manual labeling efforts. Investments in SMAD can significantly enhance productivity across various audio-related tasks in content production and delivery.",
    "infraDetails": [
      "Data stores for large-scale audio datasets",
      "Batch processing systems for audio analysis",
      "Feature stores for audio features and labels",
      "Model serving infrastructure for deploying SMAD models",
      "Monitoring systems for evaluating model performance"
    ],
    "systemComponents": [
      {
        "name": "SMAD System",
        "responsibility": "Detects and segments speech and music in audio content."
      },
      {
        "name": "Audio Dataset",
        "responsibility": "Provides a large collection of audio samples with noisy labels for training."
      },
      {
        "name": "Model Training Pipeline",
        "responsibility": "Handles the training of the SMAD models using the audio dataset."
      },
      {
        "name": "Evaluation Framework",
        "responsibility": "Assesses the performance of the SMAD models on various datasets."
      },
      {
        "name": "Audio Features Repository",
        "responsibility": "Stores audio features and labels for use in various audio processing tasks."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://netflixtechblog.com/detecting-speech-and-music-in-audio-content-afd64e6a5bf8",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 51,
    "company": "Salesforce",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Extract relevant information from a knowledge article",
    "title": "Resolve Cases Quickly with Interactive Einstein Search Answers",
    "url": "https://blog.salesforceairesearch.com/einstein-search-answers/",
    "year": 2023,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for knowledge articles",
      "Semantic search engine",
      "Monitoring tools for performance tracking"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Einstein Search Answers enhances the search experience for customer service agents by providing actionable answers extracted from knowledge articles.",
      "The new search method allows agents to enter natural language questions instead of relying on keyword-based searches, improving efficiency and reducing case resolution time.",
      "By leveraging AI and semantic search, the system identifies user intent and retrieves relevant snippets from knowledge content, making it easier for agents to assist customers."
    ],
    "summary": "Einstein Search Answers enhances the search experience for customer service agents by providing actionable answers extracted from knowledge articles. The new search method allows agents to enter natural language questions instead of relying on keyword-based searches, improving efficiency and reducing case resolution time. By leveraging AI and semantic search, the system identifies user intent and retrieves relevant snippets from knowledge content, making it easier for agents to assist customers.",
    "infraDetails": [
      "Data stores for knowledge articles",
      "Semantic search engine",
      "Monitoring tools for performance tracking"
    ],
    "systemComponents": [
      {
        "name": "Einstein Search",
        "responsibility": "Provides enhanced search capabilities for customer service agents."
      },
      {
        "name": "AI Research Team",
        "responsibility": "Develops and improves the underlying AI models and algorithms."
      },
      {
        "name": "Knowledge Management System",
        "responsibility": "Stores and organizes knowledge articles for retrieval."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://blog.salesforceairesearch.com/einstein-search-answers/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 52,
    "company": "Etsy",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Show relevant ads",
    "title": "Leveraging Real-Time User Actions to Personalize Etsy Ads",
    "url": "https://arxiv.org/pdf/2302.01255.pdf",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": false,
    "summarySource": "missing"
  },
  {
    "id": 53,
    "company": "GitHub",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "AI copilot for code generation",
    "title": "How to build an enterprise LLM application: Lessons from GitHub Copilot",
    "url": "https://github.blog/2023-09-06-how-to-build-an-enterprise-llm-application-lessons-from-github-copilot/",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Building an enterprise LLM application involves three key stages: finding the right problem, nailing the product experience, and scaling the application for general availability.",
      "Focusing on a specific problem allows for quicker delivery and iteration, as seen with GitHub Copilot's initial focus on coding functions in the IDE.",
      "Integrating the LLM application into existing developer workflows is crucial to enhance productivity without requiring significant changes in user behavior."
    ],
    "summary": "Building an enterprise LLM application involves three key stages: finding the right problem, nailing the product experience, and scaling the application for general availability. Focusing on a specific problem allows for quicker delivery and iteration, as seen with GitHub Copilot's initial focus on coding functions in the IDE. Integrating the LLM application into existing developer workflows is crucial to enhance productivity without requiring significant changes in user behavior.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "A/B Testing Platform",
        "responsibility": "Facilitates rapid iteration and experimentation to refine product features."
      },
      {
        "name": "IDE Integration",
        "responsibility": "Allows seamless code suggestions within existing development environments."
      },
      {
        "name": "Policy Management System",
        "responsibility": "Manages organization-wide policies for enterprise users."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://github.blog/2023-09-06-how-to-build-an-enterprise-llm-application-lessons-from-github-copilot/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 54,
    "company": "Uber",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Detect potential fraudulent entities",
    "title": "Risk Entity Watch - Using Anomaly Detection to Fight Fraud",
    "url": "https://www.uber.com/en-IN/blog/risk-entity-watch/?uclick_id=9c4355d3-795f-4b1d-b18e-4b8b4c8ed29f",
    "year": 2023,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Entity Feature Generation (EFG) system",
      "Feature stores for storing generated features",
      "Distributed training infrastructure for large datasets",
      "Monitoring tools for model performance and anomaly detection results",
      "Orchestration tools for managing workflows and model deployments"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Uber's Risk Entity Watch platform utilizes unsupervised machine learning to detect potential fraudulent entities across its marketplace.",
      "The system assesses various events and entities involved in transactions to flag anomalies, which are then reviewed by agents.",
      "Feature engineering is critical, with a focus on generating entity-specific features from a wide range of events to improve fraud detection accuracy.",
      "The platform supports multiple anomaly detection algorithms and emphasizes explainability to assist agents in reviewing flagged cases."
    ],
    "summary": "Uber's Risk Entity Watch platform utilizes unsupervised machine learning to detect potential fraudulent entities across its marketplace. The system assesses various events and entities involved in transactions to flag anomalies, which are then reviewed by agents. Feature engineering is critical, with a focus on generating entity-specific features from a wide range of events to improve fraud detection accuracy. The platform supports multiple anomaly detection algorithms and emphasizes explainability to assist agents in reviewing flagged cases.",
    "infraDetails": [
      "Entity Feature Generation (EFG) system",
      "Feature stores for storing generated features",
      "Distributed training infrastructure for large datasets",
      "Monitoring tools for model performance and anomaly detection results",
      "Orchestration tools for managing workflows and model deployments"
    ],
    "systemComponents": [
      {
        "name": "Risk Entity Watch",
        "responsibility": "Platform for developing and hosting anomaly detection models."
      },
      {
        "name": "Feature Engineering System",
        "responsibility": "Generates entity-specific features from various events."
      },
      {
        "name": "HAIFA Algorithm",
        "responsibility": "Detects anomalies and provides explanations based on feature distributions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.uber.com/en-IN/blog/risk-entity-watch/?uclick_id=9c4355d3-795f-4b1d-b18e-4b8b4c8ed29f",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 55,
    "company": "Expedia",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Predict Customer Lifetime Value (CLV)",
    "title": "Expedia Group's Customer Lifetime Value Prediction Model",
    "url": "https://medium.com/expedia-group-tech/expedia-groups-customer-lifetime-value-prediction-model-7927cdd44342",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/expedia-group-tech/expedia-groups-customer-lifetime-value-prediction-model-7927cdd44342",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 56,
    "company": "Dailymotion",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Recommend diversified video content",
    "title": "Reinvent your recommender system using Vector Database and Opinion Mining",
    "url": "https://medium.com/dailymotion/reinvent-your-recommender-system-using-vector-database-and-opinion-mining-a4fadf97d020",
    "year": 2023,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/dailymotion/reinvent-your-recommender-system-using-vector-database-and-opinion-mining-a4fadf97d020",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 57,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict food delivery time",
    "title": "Where is my order? - Part I",
    "url": "https://bytes.swiggy.com/how-ml-powers-when-is-my-order-coming-part-i-4ef24eae70da",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Feature store for managing model features",
      "Batch processing system for historical data analysis",
      "Model serving infrastructure for deploying ETA models",
      "Monitoring system for tracking model performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Swiggy has developed a machine learning-powered ETA service to predict food delivery times, enhancing customer experience.",
      "The ETA model consists of four distinct models corresponding to different stages of the order journey: Ordered to Assignment, First Mile, Wait Time, and Last Mile.",
      "Real-time signals, such as delivery executive location pings and restaurant stress levels, are incorporated to improve prediction accuracy.",
      "The service builds on initial SLA predictions and refreshes estimates at fixed intervals as the order progresses."
    ],
    "summary": "Swiggy has developed a machine learning-powered ETA service to predict food delivery times, enhancing customer experience. The ETA model consists of four distinct models corresponding to different stages of the order journey: Ordered to Assignment, First Mile, Wait Time, and Last Mile. Real-time signals, such as delivery executive location pings and restaurant stress levels, are incorporated to improve prediction accuracy. The service builds on initial SLA predictions and refreshes estimates at fixed intervals as the order progresses.",
    "infraDetails": [
      "Feature store for managing model features",
      "Batch processing system for historical data analysis",
      "Model serving infrastructure for deploying ETA models",
      "Monitoring system for tracking model performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "ETA Ordered Stage Model",
        "responsibility": "Predicts ETA from order placement to assignment of a delivery executive."
      },
      {
        "name": "ETA Assigned Stage Model",
        "responsibility": "Estimates ETA from assignment of the delivery executive to their arrival at the restaurant."
      },
      {
        "name": "ETA Wait Time Model",
        "responsibility": "Calculates ETA during the delivery executive's wait time at the restaurant."
      },
      {
        "name": "ETA Last Mile Model",
        "responsibility": "Predicts ETA from the moment the order is picked up until it is delivered."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/how-ml-powers-when-is-my-order-coming-part-i-4ef24eae70da",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 58,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Conversational and open-ended search",
    "title": "Swiggy's Generative AI Journey: A Peek Into the Future",
    "url": "https://bytes.swiggy.com/swiggys-generative-ai-journey-a-peek-into-the-future-2193c7166d9a",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Neural search system"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Swiggy is leveraging Generative AI to enhance user interactions through conversational and open-ended search capabilities.",
      "The neural search feature allows users to receive personalized food recommendations based on natural language queries.",
      "Swiggy is integrating generative AI into various platforms, including Instamart for grocery shopping and Dineout for restaurant discovery.",
      "The company is also developing a GPT-4 powered chatbot to improve customer service and streamline processes for restaurant partners.",
      "These advancements aim to create a more intuitive and efficient experience for users while unlocking business value."
    ],
    "summary": "Swiggy is leveraging Generative AI to enhance user interactions through conversational and open-ended search capabilities. The neural search feature allows users to receive personalized food recommendations based on natural language queries. Swiggy is integrating generative AI into various platforms, including Instamart for grocery shopping and Dineout for restaurant discovery. The company is also developing a GPT-4 powered chatbot to improve customer service and streamline processes for restaurant partners. These advancements aim to create a more intuitive and efficient experience for users while unlocking business value.",
    "infraDetails": [
      "Neural search system"
    ],
    "systemComponents": [
      {
        "name": "Neural Search",
        "responsibility": "Enables conversational and open-ended queries for personalized food recommendations."
      },
      {
        "name": "Dineout Conversational Bot",
        "responsibility": "Guides users to preferred restaurants based on various preferences."
      },
      {
        "name": "GPT-4 Chatbot",
        "responsibility": "Provides efficient and empathetic responses to customer queries."
      },
      {
        "name": "Restaurant Owner App",
        "responsibility": "Facilitates self-service for restaurant partners regarding onboarding and other processes."
      },
      {
        "name": "Instamart Integration",
        "responsibility": "Enhances grocery shopping experience through conversational search."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/swiggys-generative-ai-journey-a-peek-into-the-future-2193c7166d9a",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 59,
    "company": "New York Times",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Recommend recipes to readers",
    "title": "How The New York Times Cooking Team Makes Personalized Recipe Recommendations",
    "url": "https://open.nytimes.com/how-the-new-york-times-cooking-team-makes-personalized-recipe-recommendations-7b86df9b22ec",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Recipe database for storing and querying recipes.",
      "Monitoring tools to evaluate user engagement and algorithm performance."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The New York Times Cooking team utilizes personalized recipe recommendations to enhance user engagement by considering various preferences such as diet, nutrition, and ingredients.",
      "They employ a combination of editorial curation and algorithmic recommendations, with different algorithms tailored to meet specific user needs.",
      "Key techniques include text embeddings for measuring recipe similarity and contextual multi-armed bandit algorithms for optimizing user engagement.",
      "The system adapts to user preferences over time, incorporating features like seasonality and dietary tags to refine recommendations."
    ],
    "summary": "The New York Times Cooking team utilizes personalized recipe recommendations to enhance user engagement by considering various preferences such as diet, nutrition, and ingredients. They employ a combination of editorial curation and algorithmic recommendations, with different algorithms tailored to meet specific user needs. Key techniques include text embeddings for measuring recipe similarity and contextual multi-armed bandit algorithms for optimizing user engagement. The system adapts to user preferences over time, incorporating features like seasonality and dietary tags to refine recommendations.",
    "infraDetails": [
      "Recipe database for storing and querying recipes.",
      "Monitoring tools to evaluate user engagement and algorithm performance."
    ],
    "systemComponents": [
      {
        "name": "Recipe Database",
        "responsibility": "Stores all recipes and allows querying for personalized recommendations."
      },
      {
        "name": "Text Embedding System",
        "responsibility": "Generates vector embeddings for recipes to measure similarity."
      },
      {
        "name": "Recommendation Engine",
        "responsibility": "Utilizes multi-armed bandit algorithms to optimize recipe suggestions based on user engagement."
      },
      {
        "name": "Seasonality Scoring Module",
        "responsibility": "Scores recipes based on the seasonality of ingredients relevant to different regions."
      },
      {
        "name": "User Engagement Monitoring",
        "responsibility": "Tracks user interactions to refine recommendation algorithms and improve personalization."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://open.nytimes.com/how-the-new-york-times-cooking-team-makes-personalized-recipe-recommendations-7b86df9b22ec",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 60,
    "company": "Expedia",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Suggest diverse travel recommendations",
    "title": "Generating Diverse Travel Recommendations",
    "url": "https://medium.com/expedia-group-tech/generating-diverse-travel-recommendations-76688f49c812",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/expedia-group-tech/generating-diverse-travel-recommendations-76688f49c812",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 61,
    "company": "Stitch Fix",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Personalize styling recommendations",
    "title": "Accelerating AI: Implementing Multi-GPU Distributed Training for Personalized Recommendations",
    "url": "https://multithreaded.stitchfix.com/blog/2023/06/08/distributed-model-training/",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "EKS cluster for container orchestration",
      "PyTorch Lightning for model training",
      "TensorBoard for model performance monitoring"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Stitch Fix implemented multi-GPU distributed training to accelerate the model training time for their Client Time Series Model (CTSM) used in personalized recommendations.",
      "By adopting the PyTorch Lightning framework and using Distributed Data Parallel (DDP) strategy, they achieved significant reductions in training time while maintaining model performance.",
      "The team utilized the Flotilla framework for job submission and resource management on their EKS cluster, optimizing the use of EC2 instances with multiple GPUs.",
      "Monitoring of model performance was conducted using TensorBoard, allowing for real-time insights into training metrics and model behavior.",
      "The transition to DDP required careful consideration of hyperparameters, particularly batch size, to ensure model performance remained consistent."
    ],
    "summary": "Stitch Fix implemented multi-GPU distributed training to accelerate the model training time for their Client Time Series Model (CTSM) used in personalized recommendations. By adopting the PyTorch Lightning framework and using Distributed Data Parallel (DDP) strategy, they achieved significant reductions in training time while maintaining model performance. The team utilized the Flotilla framework for job submission and resource management on their EKS cluster, optimizing the use of EC2 instances with multiple GPUs. Monitoring of model performance was conducted using TensorBoard, allowing for real-time insights into training metrics and model behavior. The transition to DDP required careful consideration of hyperparameters, particularly batch size, to ensure model performance remained consistent.",
    "infraDetails": [
      "EKS cluster for container orchestration",
      "PyTorch Lightning for model training",
      "TensorBoard for model performance monitoring"
    ],
    "systemComponents": [
      {
        "name": "Client Time Series Model (CTSM)",
        "responsibility": "Generates personalized styling recommendations based on client data."
      },
      {
        "name": "Flotilla",
        "responsibility": "Submits containerized jobs and manages resource allocation for model training."
      },
      {
        "name": "PyTorch Lightning",
        "responsibility": "Facilitates distributed model training and simplifies the training code structure."
      },
      {
        "name": "TensorBoard",
        "responsibility": "Monitors model performance and visualizes training metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://multithreaded.stitchfix.com/blog/2023/06/08/distributed-model-training/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 62,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Areas for using Generative AI",
    "title": "DoorDash identifies Five big areas for using Generative AI",
    "url": "https://doordash.engineering/2023/04/26/doordash-identifies-five-big-areas-for-using-generative-ai/",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "DoorDash is exploring five key areas to leverage Generative AI to enhance customer experiences.",
      "These areas include customer assistance, tailored discovery, personalized content generation, structured information extraction, and employee productivity enhancement.",
      "Generative AI can automate tasks, improve recommendations, and create engaging content, ultimately streamlining operations and enhancing user satisfaction.",
      "The company emphasizes the importance of data privacy and ethical considerations in the deployment of Generative AI technologies."
    ],
    "summary": "DoorDash is exploring five key areas to leverage Generative AI to enhance customer experiences. These areas include customer assistance, tailored discovery, personalized content generation, structured information extraction, and employee productivity enhancement. Generative AI can automate tasks, improve recommendations, and create engaging content, ultimately streamlining operations and enhancing user satisfaction. The company emphasizes the importance of data privacy and ethical considerations in the deployment of Generative AI technologies.",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://doordash.engineering/2023/04/26/doordash-identifies-five-big-areas-for-using-generative-ai/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 63,
    "company": "Etsy",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Search by image",
    "title": "From Image Classification to Multitask Modeling: Building Etsy's Search by Image Feature",
    "url": "https://www.etsy.com/codeascraft/from-image-classification-to-multitask-modeling-building-etsys-search-by-image-feature",
    "year": 2023,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://www.etsy.com/codeascraft/from-image-classification-to-multitask-modeling-building-etsys-search-by-image-feature",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 64,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Generate audio podcast previews",
    "title": "Large-Scale Generation of ML Podcast Previews at Spotify with Google Dataflow",
    "url": "https://engineering.atspotify.com/2023/04/large-scale-generation-of-ml-podcast-previews-at-spotify-with-google-dataflow/",
    "year": 2023,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Google Dataflow for managed pipeline execution",
      "Apache Beam for building data processing pipelines",
      "BigQuery for logging successful and failed inputs",
      "Pub/Sub for handling input traffic",
      "Docker for custom containerization of dependencies",
      "Klio for processing audio files and building streaming/batch pipelines"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Spotify has implemented a large-scale ML pipeline for generating podcast previews using Google Dataflow, significantly improving content discovery.",
      "The transition from a microservices architecture to a managed pipeline system allowed Spotify to handle the rapid growth of its podcast catalog efficiently.",
      "By leveraging Apache Beam and Klio, Spotify reduced the median preview latency from over 111 minutes to just 3.7 minutes, enhancing user experience.",
      "The pipeline utilizes various ML frameworks and models, addressing challenges related to dependency management and resource optimization.",
      "Monitoring and observability were enhanced through logging and dashboarding, enabling better management of the pipeline's performance."
    ],
    "summary": "Spotify has implemented a large-scale ML pipeline for generating podcast previews using Google Dataflow, significantly improving content discovery. The transition from a microservices architecture to a managed pipeline system allowed Spotify to handle the rapid growth of its podcast catalog efficiently. By leveraging Apache Beam and Klio, Spotify reduced the median preview latency from over 111 minutes to just 3.7 minutes, enhancing user experience. The pipeline utilizes various ML frameworks and models, addressing challenges related to dependency management and resource optimization. Monitoring and observability were enhanced through logging and dashboarding, enabling better management of the pipeline's performance.",
    "infraDetails": [
      "Google Dataflow for managed pipeline execution",
      "Apache Beam for building data processing pipelines",
      "BigQuery for logging successful and failed inputs",
      "Pub/Sub for handling input traffic",
      "Docker for custom containerization of dependencies",
      "Klio for processing audio files and building streaming/batch pipelines"
    ],
    "systemComponents": [
      {
        "name": "Podz ML Pipeline",
        "responsibility": "Generates podcast previews using various ML models and frameworks."
      },
      {
        "name": "Dataflow Engine",
        "responsibility": "Manages the execution of the pipeline, optimizing for low latency and scalability."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks pipeline performance, logs errors, and alerts on backlog sizes."
      },
      {
        "name": "Custom Docker Containers",
        "responsibility": "Handles dependency management for multiple ML frameworks used in the pipeline."
      },
      {
        "name": "Klio Framework",
        "responsibility": "Facilitates the building of streaming and batch data pipelines for audio processing."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.atspotify.com/2023/04/large-scale-generation-of-ml-podcast-previews-at-spotify-with-google-dataflow",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 65,
    "company": "Delivery Hero",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Better understand user behavior",
    "title": "Personalisation @ Delivery Hero: Understanding Customers",
    "url": "https://tech.deliveryhero.com/personalisation-at-delivery-hero-understanding-customers/",
    "year": 2023,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Data stores for customer transaction data",
      "Batch processing systems for exploratory data analysis",
      "Feature stores for managing features used in models",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for evaluating model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Understanding customer behavior is crucial for powering recommendation models at Delivery Hero.",
      "The company employs exploratory analysis methods, including implicit signals, explicit feedback, and user research, to gain insights into customer preferences.",
      "These insights inform both cold start and personalized recommendation models, enhancing the user experience.",
      "The iterative process of model improvement is supported by a robust infrastructure and evaluation methods like offline evaluations and online A/B tests."
    ],
    "summary": "Understanding customer behavior is crucial for powering recommendation models at Delivery Hero. The company employs exploratory analysis methods, including implicit signals, explicit feedback, and user research, to gain insights into customer preferences. These insights inform both cold start and personalized recommendation models, enhancing the user experience. The iterative process of model improvement is supported by a robust infrastructure and evaluation methods like offline evaluations and online A/B tests.",
    "infraDetails": [
      "Data stores for customer transaction data",
      "Batch processing systems for exploratory data analysis",
      "Feature stores for managing features used in models",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for evaluating model performance"
    ],
    "systemComponents": [
      {
        "name": "Exploratory Data Analysis (EDA)",
        "responsibility": "Analyzes customer behavior using implicit and explicit signals to generate insights."
      },
      {
        "name": "Cold Start Models",
        "responsibility": "Provides recommendations for new users based on aggregate information and macro patterns."
      },
      {
        "name": "Personalized Models",
        "responsibility": "Delivers tailored recommendations based on individual user interactions and preferences."
      },
      {
        "name": "User Research (UXR)",
        "responsibility": "Conducts studies to understand customer usage patterns and pain points."
      },
      {
        "name": "Model Evaluation",
        "responsibility": "Assesses model performance through offline evaluations and online A/B tests."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://tech.deliveryhero.com/personalisation-at-delivery-hero-understanding-customers/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 66,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict food delivery time",
    "title": "Predicting Food Delivery Time at Cart",
    "url": "https://bytes.swiggy.com/predicting-food-delivery-time-at-cart-cda23a84ba63",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for storing historical delivery times and order details",
      "Batch processing systems for aggregating historical data",
      "Real-time streaming systems for capturing live order and delivery data",
      "Feature store for managing and serving features used in model training and inference",
      "Model serving infrastructure for deploying the prediction model",
      "Monitoring systems to track model performance and accuracy metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Accurate prediction of food delivery times is crucial for customer satisfaction and decision-making in the food delivery business.",
      "The delivery time estimate, known as the promised service level agreement (pSLA), influences customer trust and impacts various downstream systems within Swiggy.",
      "Multiple factors, including restaurant type, order size, and delivery executive availability, affect delivery times, necessitating a complex machine learning approach for accurate predictions.",
      "The model architecture employs a multi-input, multi-output (MIMO) structure to effectively capture the relationships between different delivery time components."
    ],
    "summary": "Accurate prediction of food delivery times is crucial for customer satisfaction and decision-making in the food delivery business. The delivery time estimate, known as the promised service level agreement (pSLA), influences customer trust and impacts various downstream systems within Swiggy. Multiple factors, including restaurant type, order size, and delivery executive availability, affect delivery times, necessitating a complex machine learning approach for accurate predictions. The model architecture employs a multi-input, multi-output (MIMO) structure to effectively capture the relationships between different delivery time components.",
    "infraDetails": [
      "Data stores for storing historical delivery times and order details",
      "Batch processing systems for aggregating historical data",
      "Real-time streaming systems for capturing live order and delivery data",
      "Feature store for managing and serving features used in model training and inference",
      "Model serving infrastructure for deploying the prediction model",
      "Monitoring systems to track model performance and accuracy metrics"
    ],
    "systemComponents": [
      {
        "name": "Delivery Time Prediction Model",
        "responsibility": "Predicts the estimated delivery time based on various input factors."
      },
      {
        "name": "Assignment System",
        "responsibility": "Assigns delivery executives based on predicted delivery times and other factors."
      },
      {
        "name": "Customer Care Ecosystem",
        "responsibility": "Utilizes delivery time estimates to manage customer inquiries and issues."
      },
      {
        "name": "Exception Management System",
        "responsibility": "Handles delays and communicates with customers regarding their orders."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/predicting-food-delivery-time-at-cart-cda23a84ba63",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 67,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Generate content recommendations for users",
    "title": "Lessons Learnt From Consolidating ML Models in a Large Scale Recommendation System",
    "url": "https://netflixtechblog.medium.com/lessons-learnt-from-consolidating-ml-models-in-a-large-scale-recommendation-system-870c5ea5eb4a",
    "year": 2023,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://netflixtechblog.medium.com/lessons-learnt-from-consolidating-ml-models-in-a-large-scale-recommendation-system-870c5ea5eb4a",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 68,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Show relevant jobs in search",
    "title": "How LinkedIn Is Using Embeddings to Up Its Match Game for Job Seekers",
    "url": "https://engineering.linkedin.com/blog/2023/how-linkedin-is-using-embeddings-to-up-its-match-game-for-job-se",
    "year": 2023,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data Streams/Processing"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn has developed a new job search system that utilizes advanced LLMs and embedding-based retrieval techniques.",
      "This system is designed to understand the nuanced intents of job seekers, providing highly personalized and relevant job recommendations.",
      "The implementation allows for unprecedented scale in delivering job search results."
    ],
    "summary": "LinkedIn has developed a new job search system that utilizes advanced LLMs and embedding-based retrieval techniques. This system is designed to understand the nuanced intents of job seekers, providing highly personalized and relevant job recommendations. The implementation allows for unprecedented scale in delivering job search results.",
    "infraDetails": [
      "Data Streams/Processing"
    ],
    "systemComponents": [
      {
        "name": "Job Search System",
        "responsibility": "Utilizes LLMs and embeddings for personalized job recommendations."
      },
      {
        "name": "Data Graph System",
        "responsibility": "Manages and organizes data related to job seekers and job postings."
      },
      {
        "name": "Economic Graph",
        "responsibility": "Connects various economic data points to enhance job matching."
      },
      {
        "name": "Skills Graph",
        "responsibility": "Tracks and analyzes skills relevant to job seekers and job opportunities."
      },
      {
        "name": "Knowledge Graph",
        "responsibility": "Facilitates understanding of relationships between different entities in the job market."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2023/how-linkedin-is-using-embeddings-to-up-its-match-game-for-job-se",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 69,
    "company": "Expedia",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Alert users about optimal deals",
    "title": "Increasing Travelers' Engagement Through Price Alerts",
    "url": "https://medium.com/expedia-group-tech/increasing-travelers-engagement-through-relevant-price-alerts-at-expedia-group-75aa6a377864",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/expedia-group-tech/increasing-travelers-engagement-through-relevant-price-alerts-at-expedia-group-75aa6a377864",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 70,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Resolve entities and detect relationships",
    "title": "Exploring an Entity Resolution Framework Across Various Use Cases",
    "url": "https://medium.com/walmartglobaltech/exploring-an-entity-resolution-framework-across-various-use-cases-cb172632e4ae",
    "year": 2023,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for maintaining records and relationships",
      "Batch processing systems for data pre-processing and feature engineering",
      "Feature stores for managing engineered features used in entity resolution",
      "Model serving infrastructure for deploying ML models for entity matching",
      "Monitoring systems for tracking model performance and data quality"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The article discusses an entity resolution framework that identifies and links records across multiple datasets, focusing on both rule-based and ML algorithm-based approaches.",
      "Challenges in entity resolution include inconsistent data, long text fields, and the need for contextual understanding, requiring significant pre-processing.",
      "Rule-based entity resolution relies on predefined rules for matching records, offering accuracy and transparency but can be time-consuming to maintain.",
      "ML algorithm-based entity resolution automates pattern recognition in data, reducing manual effort and allowing for continuous learning, though it may require extensive training data."
    ],
    "summary": "The article discusses an entity resolution framework that identifies and links records across multiple datasets, focusing on both rule-based and ML algorithm-based approaches. Challenges in entity resolution include inconsistent data, long text fields, and the need for contextual understanding, requiring significant pre-processing. Rule-based entity resolution relies on predefined rules for matching records, offering accuracy and transparency but can be time-consuming to maintain. ML algorithm-based entity resolution automates pattern recognition in data, reducing manual effort and allowing for continuous learning, though it may require extensive training data.",
    "infraDetails": [
      "Data stores for maintaining records and relationships",
      "Batch processing systems for data pre-processing and feature engineering",
      "Feature stores for managing engineered features used in entity resolution",
      "Model serving infrastructure for deploying ML models for entity matching",
      "Monitoring systems for tracking model performance and data quality"
    ],
    "systemComponents": [
      {
        "name": "Rule-Based Engine",
        "responsibility": "Applies predefined rules to identify and link records based on unique identifiers."
      },
      {
        "name": "ML Model",
        "responsibility": "Utilizes machine learning algorithms to automatically detect patterns and relationships in the data."
      },
      {
        "name": "Data Pre-processor",
        "responsibility": "Handles data cleaning, standardization, and feature engineering before entity resolution."
      },
      {
        "name": "Blocking Module",
        "responsibility": "Indexes records to reduce the number of comparisons needed for entity matching."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of entity resolution processes and ensures data quality."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/walmartglobaltech/exploring-an-entity-resolution-framework-across-various-use-cases-cb172632e4ae",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 71,
    "company": "Thoughtworks",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "AI copilot for product strategy",
    "title": "Building Boba AI",
    "url": "https://martinfowler.com/articles/building-boba.html",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Search engine for research signals"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Boba AI is an experimental AI co-pilot designed to enhance product strategy and generative ideation using a Large-Language Model (LLM).",
      "The application incorporates various patterns to facilitate effective user interaction with the LLM, including templated prompts and contextual conversations.",
      "Key features of Boba include research signals, creative matrix, scenario building, strategy ideation, concept generation, and storyboarding.",
      "Boba aims to augment the creative ideation process by generating ideas and answering questions that help scale and accelerate creative thinking."
    ],
    "summary": "Boba AI is an experimental AI co-pilot designed to enhance product strategy and generative ideation using a Large-Language Model (LLM). The application incorporates various patterns to facilitate effective user interaction with the LLM, including templated prompts and contextual conversations. Key features of Boba include research signals, creative matrix, scenario building, strategy ideation, concept generation, and storyboarding. Boba aims to augment the creative ideation process by generating ideas and answering questions that help scale and accelerate creative thinking.",
    "infraDetails": [
      "Search engine for research signals"
    ],
    "systemComponents": [
      {
        "name": "Boba Application",
        "responsibility": "Mediates interaction between users and the LLM, providing structured prompts and responses."
      },
      {
        "name": "Research Signals Module",
        "responsibility": "Retrieves and summarizes up-to-date information from the web to enhance LLM responses."
      },
      {
        "name": "Prompt Engineering System",
        "responsibility": "Utilizes Langchain to create and manage templated prompts for effective user interaction."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://martinfowler.com/articles/building-boba.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 72,
    "company": "Grab",
    "industry": "Delivery and mobility,Banking and finance",
    "industries": [
      "Delivery and mobility",
      "Banking and finance"
    ],
    "description": "Automatically detect new fraud types",
    "title": "Unsupervised graph anomaly detection - Catching new fraudulent behaviours",
    "url": "https://engineering.grab.com/graph-anomaly-model",
    "year": 2023,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Automated Pipeline for graph construction and model training"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grab developed an unsupervised graph anomaly detection model, GraphBEAN, to identify new types of fraudulent behaviors without label supervision.",
      "The model analyzes interactions between consumers and merchants in GrabFood and GrabMart, using bipartite graphs to detect anomalies at both node and edge levels.",
      "An automated pipeline was created to construct graphs, train the model, compute anomaly scores, and facilitate actioning through both human and automatic systems.",
      "The implementation of GraphBEAN has enhanced Grab's ability to quickly identify and respond to emerging fraudulent activities, thereby improving user protection."
    ],
    "summary": "Grab developed an unsupervised graph anomaly detection model, GraphBEAN, to identify new types of fraudulent behaviors without label supervision. The model analyzes interactions between consumers and merchants in GrabFood and GrabMart, using bipartite graphs to detect anomalies at both node and edge levels. An automated pipeline was created to construct graphs, train the model, compute anomaly scores, and facilitate actioning through both human and automatic systems. The implementation of GraphBEAN has enhanced Grab's ability to quickly identify and respond to emerging fraudulent activities, thereby improving user protection.",
    "infraDetails": [
      "Automated Pipeline for graph construction and model training"
    ],
    "systemComponents": [
      {
        "name": "GraphBEAN",
        "responsibility": "Detects anomalous patterns in bipartite graphs without label supervision."
      },
      {
        "name": "Fraud Type Tagger",
        "responsibility": "Tags detected anomalies with contextual information for better understanding."
      },
      {
        "name": "Automated Pipeline",
        "responsibility": "Constructs graphs, trains the anomaly detection model, and computes anomaly scores."
      },
      {
        "name": "Human Expert Actioning System",
        "responsibility": "Allows fraud experts to analyze and take action on detected anomalies."
      },
      {
        "name": "Automatic Actioning System",
        "responsibility": "Automatically responds to detected anomalies based on scores and tags."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.grab.com/graph-anomaly-model",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 73,
    "company": "Dropbox",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Identify date formats in file names",
    "title": "Is this a date? Using ML to identify date formats in file names",
    "url": "https://dropbox.tech/machine-learning/using-ml-to-identify-date-formats-in-file-names",
    "year": 2023,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for annotated and synthesized training data",
      "Monitoring system for model performance during inference"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Dropbox developed a machine learning model to identify date formats in file names to improve file organization and retrieval.",
      "The model was built using supervised learning for multi-class classification, focusing on the individual components of dates.",
      "A combination of manual data annotation and synthesized data generation was employed to create a diverse training dataset.",
      "Tokenization and IOB tagging were used to effectively segment and label file names for accurate date component extraction.",
      "The transformer-based model DistilRoberta was chosen for its efficiency and performance in predicting date components."
    ],
    "summary": "Dropbox developed a machine learning model to identify date formats in file names to improve file organization and retrieval. The model was built using supervised learning for multi-class classification, focusing on the individual components of dates. A combination of manual data annotation and synthesized data generation was employed to create a diverse training dataset. Tokenization and IOB tagging were used to effectively segment and label file names for accurate date component extraction. The transformer-based model DistilRoberta was chosen for its efficiency and performance in predicting date components.",
    "infraDetails": [
      "Data stores for annotated and synthesized training data",
      "Monitoring system for model performance during inference"
    ],
    "systemComponents": [
      {
        "name": "Data Annotation Module",
        "responsibility": "Assigns labels to file names to create high-quality training data."
      },
      {
        "name": "Tokenization Module",
        "responsibility": "Divides file names into segments for analysis."
      },
      {
        "name": "Classification Module",
        "responsibility": "Predicts IOB tags for unseen file names to extract date components."
      },
      {
        "name": "Model Serving Infrastructure",
        "responsibility": "Handles real-time inference requests for date identification."
      },
      {
        "name": "Data Synthesis Tool",
        "responsibility": "Generates additional training samples to cover diverse date formats."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://dropbox.tech/machine-learning/using-ml-to-identify-date-formats-in-file-names",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 74,
    "company": "Grab",
    "industry": "Delivery and mobility,Banking and finance",
    "industries": [
      "Delivery and mobility",
      "Banking and finance"
    ],
    "description": "Create scalable lookalike audiences",
    "title": "Stepping up marketing for advertisers: Scalable lookalike audience",
    "url": "https://engineering.grab.com/scalable-lookalike-audiences",
    "year": 2023,
    "category": "marketing_ads",
    "categoryLabel": "Marketing and ads",
    "components": [
      "In-memory data store for passenger and audience embeddings",
      "Message queue for audience metadata storage",
      "TensorFlow Serving for model deployment"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grab has developed a scalable lookalike audience platform to enhance advertising effectiveness by targeting individuals similar to existing customers.",
      "The new system addresses challenges such as long service level agreements, low scalability, and high costs associated with audience creation.",
      "By leveraging embeddings for audience representation, the platform achieves high accuracy and low latency in audience retrieval.",
      "The implementation has resulted in a significant reduction in costs for generating lookalike audiences and improved advertising metrics.",
      "Future improvements will focus on advanced algorithms, feature engineering, and ongoing performance monitoring."
    ],
    "summary": "Grab has developed a scalable lookalike audience platform to enhance advertising effectiveness by targeting individuals similar to existing customers. The new system addresses challenges such as long service level agreements, low scalability, and high costs associated with audience creation. By leveraging embeddings for audience representation, the platform achieves high accuracy and low latency in audience retrieval. The implementation has resulted in a significant reduction in costs for generating lookalike audiences and improved advertising metrics. Future improvements will focus on advanced algorithms, feature engineering, and ongoing performance monitoring.",
    "infraDetails": [
      "In-memory data store for passenger and audience embeddings",
      "Message queue for audience metadata storage",
      "TensorFlow Serving for model deployment"
    ],
    "systemComponents": [
      {
        "name": "Audience Service",
        "responsibility": "Stores audience metadata and triggers audience creation processes."
      },
      {
        "name": "Data Science Job",
        "responsibility": "Retrieves audience metadata and creates/upgrades audience embeddings."
      },
      {
        "name": "Online Audience Service",
        "responsibility": "Retrieves and serves lookalike audiences based on user embeddings."
      },
      {
        "name": "Backend Service",
        "responsibility": "Calls the Data Science service to retrieve audiences for ad targeting."
      },
      {
        "name": "CTR Model",
        "responsibility": "Selects ads to display based on audience targeting."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.grab.com/scalable-lookalike-audiences",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 75,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Send relevant communications to customers",
    "title": "Griffin: How Wayfair Leverages Reinforcement Learning to Send Customers Relevant Communications",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/griffin-how-wayfair-leverages-reinforcement-learning-to-send-customers-relevant-communications",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Real-time feature serving",
      "Batch feature generation using Airflow",
      "Reward logging table",
      "Monitoring system for KPIs"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed Griffin, a reinforcement learning model, to optimize customer communication through relevant notifications.",
      "Griffin integrates signals from existing models and new content to make coordinated send decisions for marketing emails and push messages.",
      "The model uses reinforcement learning to continuously improve decision-making without the need for repetitive retraining or A/B testing.",
      "Griffin is designed to support real-time customer behavior-triggered notifications and will expand to include daily sales emails and push messages.",
      "The system monitors multiple KPIs in real-time to ensure effective performance and customer engagement."
    ],
    "summary": "Wayfair developed Griffin, a reinforcement learning model, to optimize customer communication through relevant notifications. Griffin integrates signals from existing models and new content to make coordinated send decisions for marketing emails and push messages. The model uses reinforcement learning to continuously improve decision-making without the need for repetitive retraining or A/B testing. Griffin is designed to support real-time customer behavior-triggered notifications and will expand to include daily sales emails and push messages. The system monitors multiple KPIs in real-time to ensure effective performance and customer engagement.",
    "infraDetails": [
      "Real-time feature serving",
      "Batch feature generation using Airflow",
      "Reward logging table",
      "Monitoring system for KPIs"
    ],
    "systemComponents": [
      {
        "name": "Griffin",
        "responsibility": "Reinforcement learning model for optimizing notification send decisions."
      },
      {
        "name": "Airflow DAG",
        "responsibility": "Generates batch updated features for decision-making."
      },
      {
        "name": "Reward Logging Table",
        "responsibility": "Tracks customer engagement metrics and model performance."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Monitors KPIs such as latency, error rates, and click-through rates."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/griffin-how-wayfair-leverages-reinforcement-learning-to-send-customers-relevant-communications",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 76,
    "company": "Whatnot",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Detect marketplace spam",
    "title": "How Whatnot Utilizes Generative AI to Enhance Trust and Safety",
    "url": "https://medium.com/whatnot-engineering/how-whatnot-utilizes-generative-ai-to-enhance-trust-and-safety-c7968eb6315e",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Whatnot employs Large Language Models (LLMs) to enhance trust and safety by improving content moderation and detecting scams.",
      "A centralized rule engine is used to enforce policies consistently, analyzing vast amounts of data to identify potential violations.",
      "LLMs allow for a contextual understanding of user interactions, improving the detection of fraudulent messages by analyzing entire conversations rather than isolated messages.",
      "The system has achieved over 95% proactive detection of scam attempts with high precision and recall, adapting to new tactics used by scammers.",
      "Whatnot's approach combines AI-driven insights with human judgment, ensuring a robust trust and safety framework."
    ],
    "summary": "Whatnot employs Large Language Models (LLMs) to enhance trust and safety by improving content moderation and detecting scams. A centralized rule engine is used to enforce policies consistently, analyzing vast amounts of data to identify potential violations. LLMs allow for a contextual understanding of user interactions, improving the detection of fraudulent messages by analyzing entire conversations rather than isolated messages. The system has achieved over 95% proactive detection of scam attempts with high precision and recall, adapting to new tactics used by scammers. Whatnot's approach combines AI-driven insights with human judgment, ensuring a robust trust and safety framework.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Centralized Rule Engine",
        "responsibility": "Enforces policies and analyzes data to identify violations."
      },
      {
        "name": "Content Moderation Model",
        "responsibility": "Evaluates messages for compliance with community guidelines."
      },
      {
        "name": "Scam Detection System",
        "responsibility": "Uses LLMs to analyze user interactions and detect potential scams."
      },
      {
        "name": "Optical Character Recognition (OCR)",
        "responsibility": "Extracts text from images to enhance scam detection capabilities."
      },
      {
        "name": "Human Oversight Mechanism",
        "responsibility": "Integrates human judgment with AI insights for robust decision-making."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/whatnot-engineering/how-whatnot-utilizes-generative-ai-to-enhance-trust-and-safety-c7968eb6315e",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 77,
    "company": "Instacart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict grocery item availability",
    "title": "How Instacart's Item Availability Evolved Over the Pandemic",
    "url": "https://www.instacart.com/company/how-its-made/how-instacarts-item-availability-evolved-over-the-pandemic/",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "HTTP 308",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": false,
    "summarySource": "missing"
  },
  {
    "id": 78,
    "company": "Instacart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict availability of food items",
    "title": "Instacart's Item Availability Architecture: Solving for scale and consistency",
    "url": "https://tech.instacart.com/instacarts-item-availability-architecture-solving-for-scale-and-consistency-f5661acb20a6",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Snowflake for database storage of availability scores.",
      "Kinesis for aggregating updates for lazy score refresh."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Instacart developed a robust infrastructure to support real-time availability predictions for food items, addressing challenges of scale and consistency.",
      "The architecture includes methods for low-latency score fetching and high-consistency use cases, ensuring accurate item availability across various surfaces.",
      "A multi-model experimentation framework was created to facilitate scalable testing of multiple ML models, reducing engineering overhead and improving experimentation speed."
    ],
    "summary": "Instacart developed a robust infrastructure to support real-time availability predictions for food items, addressing challenges of scale and consistency. The architecture includes methods for low-latency score fetching and high-consistency use cases, ensuring accurate item availability across various surfaces. A multi-model experimentation framework was created to facilitate scalable testing of multiple ML models, reducing engineering overhead and improving experimentation speed.",
    "infraDetails": [
      "Snowflake for database storage of availability scores.",
      "Kinesis for aggregating updates for lazy score refresh."
    ],
    "systemComponents": [
      {
        "name": "ML Availability Scoring Service",
        "responsibility": "Updates availability scores in the database multiple times a day."
      },
      {
        "name": "DB Ingestion Workers",
        "responsibility": "Reads and upserts availability scores from the database."
      },
      {
        "name": "Threshold Resolver",
        "responsibility": "Determines base thresholds for various ML models under experimentation."
      },
      {
        "name": "Deltas Framework",
        "responsibility": "Applies fixed deltas to base thresholds for optimization."
      },
      {
        "name": "Multi-Segment Optimization",
        "responsibility": "Continuously monitors and adjusts thresholds and deltas for optimal performance."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/instacarts-item-availability-architecture-solving-for-scale-and-consistency-f5661acb20a6",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 79,
    "company": "BlaBlaCar",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Prevent phishing and payment fraud",
    "title": "How we built our machine learning pipeline to fight fraud at BlaBlaCar - Part 2",
    "url": "https://medium.com/blablacar/how-we-built-our-machine-learning-pipeline-to-fight-fraud-at-blablacar-part-2-476335f459b4",
    "year": 2023,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/blablacar/how-we-built-our-machine-learning-pipeline-to-fight-fraud-at-blablacar-part-2-476335f459b4",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 80,
    "company": "Salesforce",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Summarize Slack conversations",
    "title": "AI Summarist: Get Your Time Back on Slack, Boost Productivity & Focus, Personalize Information Consumption",
    "url": "https://blog.salesforceairesearch.com/ai-summarist-slack-productivity",
    "year": 2023,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "AI Summarist is a conversational AI tool designed to summarize Slack conversations, helping users manage information overload and reduce cognitive load.",
      "The tool allows users to personalize their information consumption by providing summaries of important channels and conversations based on their preferences.",
      "Users can initiate summarization requests, receive tailored summaries, and catch up on messages quickly, enhancing productivity and focus.",
      "AI Summarist operates without storing user data, ensuring privacy while providing valuable insights into Slack conversations."
    ],
    "summary": "AI Summarist is a conversational AI tool designed to summarize Slack conversations, helping users manage information overload and reduce cognitive load. The tool allows users to personalize their information consumption by providing summaries of important channels and conversations based on their preferences. Users can initiate summarization requests, receive tailored summaries, and catch up on messages quickly, enhancing productivity and focus. AI Summarist operates without storing user data, ensuring privacy while providing valuable insights into Slack conversations.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "AI Summarist",
        "responsibility": "Summarizes Slack conversations and channels based on user requests."
      },
      {
        "name": "Slack API",
        "responsibility": "Facilitates the retrieval of chat messages for summarization."
      },
      {
        "name": "User Interface",
        "responsibility": "Allows users to initiate summarization requests and customize their summary preferences."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://blog.salesforceairesearch.com/ai-summarist-slack-productivity",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 81,
    "company": "Meta",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Show users relevant content at scale",
    "title": "Scaling the Instagram Explore recommendations system",
    "url": "https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for user and media embeddings",
      "Batch processing for pre-computation of item embeddings",
      "Feature store for managing user and item features",
      "Model serving infrastructure for deploying neural networks",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The Instagram Explore recommendations system utilizes advanced machine learning models to deliver relevant content to users at scale.",
      "A multi-stage ranking approach is implemented, consisting of retrieval, first-stage ranking, second-stage ranking, and final reranking to optimize the recommendation process.",
      "Caching and pre-computation techniques are leveraged to enhance the efficiency of the ranking system, allowing for the use of heavier models in each stage.",
      "The Two Towers neural network model is central to both retrieval and ranking, enabling the generation of user and item embeddings for improved candidate sourcing.",
      "Final recommendations are fine-tuned using a value model that balances various engagement metrics, ensuring a diverse and engaging user experience."
    ],
    "summary": "The Instagram Explore recommendations system utilizes advanced machine learning models to deliver relevant content to users at scale. A multi-stage ranking approach is implemented, consisting of retrieval, first-stage ranking, second-stage ranking, and final reranking to optimize the recommendation process. Caching and pre-computation techniques are leveraged to enhance the efficiency of the ranking system, allowing for the use of heavier models in each stage. The Two Towers neural network model is central to both retrieval and ranking, enabling the generation of user and item embeddings for improved candidate sourcing. Final recommendations are fine-tuned using a value model that balances various engagement metrics, ensuring a diverse and engaging user experience.",
    "infraDetails": [
      "Data stores for user and media embeddings",
      "Batch processing for pre-computation of item embeddings",
      "Feature store for managing user and item features",
      "Model serving infrastructure for deploying neural networks",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "Two Towers Neural Network",
        "responsibility": "Generates user and item embeddings for retrieval and ranking."
      },
      {
        "name": "First-stage Ranker",
        "responsibility": "Lightweight model that narrows down candidates from thousands to hundreds."
      },
      {
        "name": "Second-stage Ranker",
        "responsibility": "Heavy model that predicts engagement probabilities for the top candidates."
      },
      {
        "name": "Value Model",
        "responsibility": "Combines predicted probabilities to score and rank items based on user engagement."
      },
      {
        "name": "Caching System",
        "responsibility": "Stores user and item embeddings to improve inference efficiency."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 82,
    "company": "Delivery Hero",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Recommend restaurants for new customers",
    "title": "Personalisation @ Delivery Hero: Ranking restaurants for new users",
    "url": "https://tech.deliveryhero.com/personalisation-delivery-hero-ranking-restaurants-for-new-users/",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Feature store for managing restaurant features",
      "Model serving infrastructure for deploying ranking models",
      "Monitoring system for tracking model performance and user interactions",
      "Batch processing system for backtesting models on historical data",
      "Orchestration tools for managing workflows in model training and evaluation"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Delivery Hero focuses on personalizing restaurant recommendations for new users to enhance user retention and platform stickiness.",
      "The cold start problem for new users is addressed through a content-based filtering model that utilizes restaurant features instead of user interactions.",
      "A baseline model was established to approximate restaurant relevance based on popularity, delivery time, and fees, which was later improved with the LambdaMART algorithm for better ranking performance.",
      "The LambdaMART model incorporates additional features and has shown significant performance improvements over the baseline model in A/B testing."
    ],
    "summary": "Delivery Hero focuses on personalizing restaurant recommendations for new users to enhance user retention and platform stickiness. The cold start problem for new users is addressed through a content-based filtering model that utilizes restaurant features instead of user interactions. A baseline model was established to approximate restaurant relevance based on popularity, delivery time, and fees, which was later improved with the LambdaMART algorithm for better ranking performance. The LambdaMART model incorporates additional features and has shown significant performance improvements over the baseline model in A/B testing.",
    "infraDetails": [
      "Feature store for managing restaurant features",
      "Model serving infrastructure for deploying ranking models",
      "Monitoring system for tracking model performance and user interactions",
      "Batch processing system for backtesting models on historical data",
      "Orchestration tools for managing workflows in model training and evaluation"
    ],
    "systemComponents": [
      {
        "name": "Content-Based Filtering Model",
        "responsibility": "Ranks restaurants for new users based on item features."
      },
      {
        "name": "Baseline Model",
        "responsibility": "Provides a simple approximation of restaurant relevance for new users."
      },
      {
        "name": "LambdaMART Model",
        "responsibility": "Advanced ranking algorithm that improves upon the baseline model by incorporating more features."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of ranking models and user engagement metrics."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves restaurant features used in ranking models."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://tech.deliveryhero.com/personalisation-delivery-hero-ranking-restaurants-for-new-users/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 83,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict food delivery time",
    "title": "How ML Powers - When is my order coming? - Part II",
    "url": "https://bytes.swiggy.com/how-ml-powers-when-is-my-order-coming-part-ii-eae83575e3a9",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Feature engineering for speed and distance calculations",
      "Neural network model serving for ETA predictions",
      "Monitoring of ETA accuracy through Mean Absolute Error and Percentage of Orders with Inaccurate Bumps"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Swiggy's ETA model utilizes real-time signals to provide accurate delivery time estimates, incorporating various stages of the order journey.",
      "The model has transitioned from Gradient Boosting Trees to Neural Networks, resulting in improved accuracy and reduced inaccuracies in delivery time predictions.",
      "Future enhancements will explore sequence models and Graph Neural Networks to further refine ETA predictions."
    ],
    "summary": "Swiggy's ETA model utilizes real-time signals to provide accurate delivery time estimates, incorporating various stages of the order journey. The model has transitioned from Gradient Boosting Trees to Neural Networks, resulting in improved accuracy and reduced inaccuracies in delivery time predictions. Future enhancements will explore sequence models and Graph Neural Networks to further refine ETA predictions.",
    "infraDetails": [
      "Feature engineering for speed and distance calculations",
      "Neural network model serving for ETA predictions",
      "Monitoring of ETA accuracy through Mean Absolute Error and Percentage of Orders with Inaccurate Bumps"
    ],
    "systemComponents": [
      {
        "name": "ETA Model",
        "responsibility": "Predicts estimated time of arrival based on various input features."
      },
      {
        "name": "Real-time Data Processor",
        "responsibility": "Processes real-time signals from delivery executives and traffic conditions."
      },
      {
        "name": "Feature Store",
        "responsibility": "Stores and manages features used in ETA predictions."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of ETA predictions and evaluates accuracy metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/how-ml-powers-when-is-my-order-coming-part-ii-eae83575e3a9",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 84,
    "company": "Salesforce",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Recommend apps in the marketplace",
    "title": "On the Diversity and Explainability of Enterprise App Recommendation Systems",
    "url": "https://blog.salesforceairesearch.com/diversity-explainability-enterprise-app-recommendation-systems/",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Separate explanation models for generating feature-level and item-based explanations"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Salesforce's app recommendation system aims to enhance the diversity and explainability of app suggestions for enterprise customers.",
      "The system addresses the limitations of manual app recommendations, such as human error and lack of diversity, by employing a data-driven approach.",
      "A novel framework was developed that allows sales teams to control recommendation diversity and receive explanations for app suggestions in real-time.",
      "The framework includes various models to ensure high accuracy and generate reliable explanations, improving transparency and trust in the recommendations."
    ],
    "summary": "Salesforce's app recommendation system aims to enhance the diversity and explainability of app suggestions for enterprise customers. The system addresses the limitations of manual app recommendations, such as human error and lack of diversity, by employing a data-driven approach. A novel framework was developed that allows sales teams to control recommendation diversity and receive explanations for app suggestions in real-time. The framework includes various models to ensure high accuracy and generate reliable explanations, improving transparency and trust in the recommendations.",
    "infraDetails": [
      "Separate explanation models for generating feature-level and item-based explanations"
    ],
    "systemComponents": [
      {
        "name": "Apps Recommendation Engine",
        "responsibility": "Processes user requests and controls the diversity of app recommendations."
      },
      {
        "name": "Model Server",
        "responsibility": "Generates the top recommended apps and corresponding explanations."
      },
      {
        "name": "Relevance Model",
        "responsibility": "Learns the similarity between users and items for accurate recommendations."
      },
      {
        "name": "Diversity and Explanation Models (DAE)",
        "responsibility": "Controls aggregate diversity and generates explanations for recommendations."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://blog.salesforceairesearch.com/diversity-explainability-enterprise-app-recommendation-systems/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 85,
    "company": "Grab",
    "industry": "Delivery and mobility,Banking and finance",
    "industries": [
      "Delivery and mobility",
      "Banking and finance"
    ],
    "description": "Optimize promotional campaigns",
    "title": "Scaling marketing for merchants with targeted and intelligent promos",
    "url": "https://engineering.grab.com/scaling-marketing-for-merchants",
    "year": 2023,
    "category": "marketing_ads",
    "categoryLabel": "Marketing and ads",
    "components": [
      "Data storage in S3",
      "API service for triggering Chimera Spark jobs"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grab has developed Bullseye, an AI-driven promotional assignment system to optimize marketing campaigns for merchants.",
      "The system addresses gaps in previous promotional strategies by enabling targeted, customized offers based on historical consumer trends.",
      "Bullseye automates user segmentation, promo design, and optimal promo selection to enhance sales and reduce promotional spending.",
      "The implementation of Bullseye has resulted in increased sales and improved budget utilization for promotional campaigns.",
      "Future enhancements will include reinforcement learning and scaling AI adoption for regional campaigns."
    ],
    "summary": "Grab has developed Bullseye, an AI-driven promotional assignment system to optimize marketing campaigns for merchants. The system addresses gaps in previous promotional strategies by enabling targeted, customized offers based on historical consumer trends. Bullseye automates user segmentation, promo design, and optimal promo selection to enhance sales and reduce promotional spending. The implementation of Bullseye has resulted in increased sales and improved budget utilization for promotional campaigns. Future enhancements will include reinforcement learning and scaling AI adoption for regional campaigns.",
    "infraDetails": [
      "Data storage in S3",
      "API service for triggering Chimera Spark jobs"
    ],
    "systemComponents": [
      {
        "name": "Eater Segments Identifier",
        "responsibility": "Identifies users as active, churned, or new based on historical orders."
      },
      {
        "name": "Promo Designer",
        "responsibility": "Constructs a framework to design promo variations for campaigns."
      },
      {
        "name": "Offer Content Candidate Generation",
        "responsibility": "Generates variant settings of promos based on usage history."
      },
      {
        "name": "Campaign Impact Simulator",
        "responsibility": "Predicts business metrics based on user and merchant profiles."
      },
      {
        "name": "Optimal Promo Selection",
        "responsibility": "Selects the optimal offer based on predicted impact and campaign objectives."
      },
      {
        "name": "Customer Response Model",
        "responsibility": "Predicts customer responses to specific promos based on user and offer attributes."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.grab.com/scaling-marketing-for-merchants",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 86,
    "company": "GitHub",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Automated code reviews and PR tagging",
    "title": "Generative AI-enabled compliance for software development",
    "url": "https://github.blog/2023-04-11-generative-ai-enabled-compliance-for-software-development",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Kubernetes declarative deployments"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Generative AI is poised to enhance compliance in software development by automating foundational components like code reviews.",
      "The concept of separation of duties is crucial for compliance, ensuring that development and production functions are distinct.",
      "Automated code reviews can help identify risks and vulnerabilities early in the development process, promoting a more efficient workflow.",
      "Integrating generative AI into compliance programs can streamline processes that are traditionally labor-intensive, allowing developers to focus on higher-value tasks."
    ],
    "summary": "Generative AI is poised to enhance compliance in software development by automating foundational components like code reviews. The concept of separation of duties is crucial for compliance, ensuring that development and production functions are distinct. Automated code reviews can help identify risks and vulnerabilities early in the development process, promoting a more efficient workflow. Integrating generative AI into compliance programs can streamline processes that are traditionally labor-intensive, allowing developers to focus on higher-value tasks.",
    "infraDetails": [
      "Kubernetes declarative deployments"
    ],
    "systemComponents": [
      {
        "name": "Code Review System",
        "responsibility": "Facilitates the review of code changes to ensure compliance and security."
      },
      {
        "name": "Pull Request Management",
        "responsibility": "Manages the process of submitting and reviewing code changes within the development workflow."
      },
      {
        "name": "Compliance Automation Tools",
        "responsibility": "Automates compliance checks and balances to streamline development processes."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://github.blog/2023-04-11-generative-ai-enabled-compliance-for-software-development",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 87,
    "company": "Delivery Hero",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Recommend restaurants",
    "title": "Don't Worry, We Got You: Personalised Model",
    "url": "https://tech.deliveryhero.com/dont-worry-we-got-you-personalised-model-2/",
    "year": 2023,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for customer interaction data",
      "Batch processing systems for model training",
      "Stream processing systems for real-time feedback analysis",
      "Feature stores for managing and serving feature vectors",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for evaluating model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Delivery Hero focuses on personalizing restaurant recommendations based on customer interactions and preferences.",
      "The system utilizes both explicit feedback (ratings) and implicit feedback (ordering behavior) to refine customer profiles.",
      "Collaborative filtering and cosine similarity are employed to identify similar customers and generate tailored recommendations.",
      "Matrix factorization is used to efficiently score vendors for each customer, allowing for rapid experimentation and improved model performance.",
      "The company is committed to continuously enhancing its recommendation models and understanding customer preferences."
    ],
    "summary": "Delivery Hero focuses on personalizing restaurant recommendations based on customer interactions and preferences. The system utilizes both explicit feedback (ratings) and implicit feedback (ordering behavior) to refine customer profiles. Collaborative filtering and cosine similarity are employed to identify similar customers and generate tailored recommendations. Matrix factorization is used to efficiently score vendors for each customer, allowing for rapid experimentation and improved model performance. The company is committed to continuously enhancing its recommendation models and understanding customer preferences.",
    "infraDetails": [
      "Data stores for customer interaction data",
      "Batch processing systems for model training",
      "Stream processing systems for real-time feedback analysis",
      "Feature stores for managing and serving feature vectors",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for evaluating model performance"
    ],
    "systemComponents": [
      {
        "name": "Customer Interaction Data Store",
        "responsibility": "Stores explicit and implicit feedback from customer interactions."
      },
      {
        "name": "Recommendation Engine",
        "responsibility": "Generates personalized restaurant recommendations using collaborative filtering and similarity scoring."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves feature vectors for model training and inference."
      },
      {
        "name": "Model Training Pipeline",
        "responsibility": "Handles the training of recommendation models using batch and stream processing."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance and effectiveness of recommendation models."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://tech.deliveryhero.com/dont-worry-we-got-you-personalised-model-2/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 88,
    "company": "OLX",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict order delivery time",
    "title": "Machine Learning for Delivery Time Estimation",
    "url": "https://tech.olx.com/machine-learning-for-delivery-time-estimation-1-591c8df849a0",
    "year": 2023,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Batch processing system for generating predictions",
      "Model serving infrastructure for deploying machine learning models",
      "Monitoring system for tracking model performance and user interactions",
      "Feature store for managing features used in predictions"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "OLX aimed to enhance customer satisfaction by providing accurate delivery time estimates for its Pay&Ship service.",
      "The project involved exploratory data analysis to identify key factors affecting delivery times, including seller handover time and carrier delivery time.",
      "A baseline solution was developed to validate the impact of displaying estimated delivery times on the ad page before implementing a more complex machine learning model.",
      "The team considered both batch and online prediction methods for delivery time estimation, depending on the availability of user data."
    ],
    "summary": "OLX aimed to enhance customer satisfaction by providing accurate delivery time estimates for its Pay&Ship service. The project involved exploratory data analysis to identify key factors affecting delivery times, including seller handover time and carrier delivery time. A baseline solution was developed to validate the impact of displaying estimated delivery times on the ad page before implementing a more complex machine learning model. The team considered both batch and online prediction methods for delivery time estimation, depending on the availability of user data.",
    "infraDetails": [
      "Batch processing system for generating predictions",
      "Model serving infrastructure for deploying machine learning models",
      "Monitoring system for tracking model performance and user interactions",
      "Feature store for managing features used in predictions"
    ],
    "systemComponents": [
      {
        "name": "Data Store",
        "responsibility": "Stores historical delivery data and user interactions."
      },
      {
        "name": "Batch Processing System",
        "responsibility": "Processes data in batches to generate delivery time predictions."
      },
      {
        "name": "Model Serving Infrastructure",
        "responsibility": "Deploys machine learning models for real-time or batch predictions."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of the model and user engagement with delivery estimates."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves features used in the machine learning models."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.olx.com/machine-learning-for-delivery-time-estimation-1-591c8df849a0",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 89,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Target in-app messaging",
    "title": "Experimenting with Machine Learning to Target In-App Messaging",
    "url": "https://engineering.atspotify.com/2023/06/experimenting-with-machine-learning-to-target-in-app-messaging/",
    "year": 2023,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Data stores for user features and treatment assignments",
      "Batch processing system for model training and evaluation",
      "Orchestration tools for managing model deployment and A/B testing",
      "Feature store for storing and retrieving user features",
      "Monitoring systems for tracking model performance and business metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Spotify uses machine learning to enhance in-app messaging by targeting users more selectively based on their predicted response to messages.",
      "The approach involves uplift modeling to understand the heterogeneous treatment effects of in-app messages on different users.",
      "A multiheaded model is employed to calculate uplift scores for different metrics, allowing for informed eligibility decisions for messaging.",
      "Offline policy evaluation was conducted to assess the model's potential impact on business metrics before A/B testing, which showed significant improvements in user retention.",
      "The model has been successfully rolled out in production, with ongoing efforts to refine its capabilities for even greater user engagement."
    ],
    "summary": "Spotify uses machine learning to enhance in-app messaging by targeting users more selectively based on their predicted response to messages. The approach involves uplift modeling to understand the heterogeneous treatment effects of in-app messages on different users. A multiheaded model is employed to calculate uplift scores for different metrics, allowing for informed eligibility decisions for messaging. Offline policy evaluation was conducted to assess the model's potential impact on business metrics before A/B testing, which showed significant improvements in user retention. The model has been successfully rolled out in production, with ongoing efforts to refine its capabilities for even greater user engagement.",
    "infraDetails": [
      "Data stores for user features and treatment assignments",
      "Batch processing system for model training and evaluation",
      "Orchestration tools for managing model deployment and A/B testing",
      "Feature store for storing and retrieving user features",
      "Monitoring systems for tracking model performance and business metrics"
    ],
    "systemComponents": [
      {
        "name": "Uplift Model",
        "responsibility": "Predicts the conditional average treatment effect (CATE) for users to determine in-app messaging eligibility."
      },
      {
        "name": "Metalearner",
        "responsibility": "Learns uplift scores using holdout data to inform messaging strategies."
      },
      {
        "name": "Contextual Bandit Framework",
        "responsibility": "Selects actions based on user features to maximize engagement and retention."
      },
      {
        "name": "A/B Testing Framework",
        "responsibility": "Evaluates the effectiveness of the messaging model against control groups."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.atspotify.com/2023/06/experimenting-with-machine-learning-to-target-in-app-messaging/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 90,
    "company": "Nubank",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Automatically route customer phone calls",
    "title": "Presenting Precog, Nubank's Real Time Event AI",
    "url": "https://building.nubank.com.br/presenting-precog-nubanks-real-time-event-ai/",
    "year": 2023,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Downstream model microservice",
      "Low-latency temporary storage (Redis)",
      "Starspace library for embedding training"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Nubank's Precog is a real-time event AI designed to enhance customer support by automatically routing phone calls to the appropriate agents.",
      "The system leverages customer event data, such as app interactions, to create embeddings that predict customer needs in real-time.",
      "Precog has significantly improved call routing accuracy, increasing the volume of correctly routed calls to specialized agents by over 50%.",
      "The architecture allows for rapid feature engineering and reduced latency compared to traditional methods, enabling faster development cycles.",
      "Future developments will explore additional data sources and improved modeling techniques to expand Precog's capabilities."
    ],
    "summary": "Nubank's Precog is a real-time event AI designed to enhance customer support by automatically routing phone calls to the appropriate agents. The system leverages customer event data, such as app interactions, to create embeddings that predict customer needs in real-time. Precog has significantly improved call routing accuracy, increasing the volume of correctly routed calls to specialized agents by over 50%. The architecture allows for rapid feature engineering and reduced latency compared to traditional methods, enabling faster development cycles. Future developments will explore additional data sources and improved modeling techniques to expand Precog's capabilities.",
    "infraDetails": [
      "Downstream model microservice",
      "Low-latency temporary storage (Redis)",
      "Starspace library for embedding training"
    ],
    "systemComponents": [
      {
        "name": "Event Consumer Microservice",
        "responsibility": "Transforms raw event data into a string format and stores it in temporary storage."
      },
      {
        "name": "Downstream Model Microservice",
        "responsibility": "Retrieves relevant events, computes embeddings, and uses them for classification."
      },
      {
        "name": "Embedding Training Pipeline",
        "responsibility": "Trains customer event embeddings using the Starspace library."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://building.nubank.com.br/presenting-precog-nubanks-real-time-event-ai/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 91,
    "company": "Instacart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Build an internal AI assistant",
    "title": "Scaling Productivity with Ava - Instacart's Internal AI Assistant",
    "url": "https://tech.instacart.com/scaling-productivity-with-ava-instacarts-internal-ai-assistant-ed7f02558d84",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Conversation search functionality"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Instacart developed an internal AI assistant named Ava, powered by OpenAI's GPT-4 and GPT-3.5 models, which has rapidly gained adoption among employees.",
      "Ava was initially created during a company hackathon and has since evolved to include features like conversation search, automatic model upgrades, and a Prompt Exchange for sharing user-generated prompts.",
      "The assistant is designed to enhance productivity across various teams, not just engineering, by providing easy access to internal documentation and codebases.",
      "Ava's integration with Slack allows users to summarize conversations and access the assistant seamlessly, significantly reducing time spent on information retrieval.",
      "Future developments for Ava include improving its capabilities in knowledge retrieval and code execution to further assist users in complex tasks."
    ],
    "summary": "Instacart developed an internal AI assistant named Ava, powered by OpenAI's GPT-4 and GPT-3.5 models, which has rapidly gained adoption among employees. Ava was initially created during a company hackathon and has since evolved to include features like conversation search, automatic model upgrades, and a Prompt Exchange for sharing user-generated prompts. The assistant is designed to enhance productivity across various teams, not just engineering, by providing easy access to internal documentation and codebases. Ava's integration with Slack allows users to summarize conversations and access the assistant seamlessly, significantly reducing time spent on information retrieval. Future developments for Ava include improving its capabilities in knowledge retrieval and code execution to further assist users in complex tasks.",
    "infraDetails": [
      "Conversation search functionality"
    ],
    "systemComponents": [
      {
        "name": "Ava",
        "responsibility": "Internal AI assistant for productivity and coding support."
      },
      {
        "name": "Slack App",
        "responsibility": "Integration for easy access and interaction with Ava within Slack."
      },
      {
        "name": "Prompt Exchange",
        "responsibility": "Library for users to create and share conversation templates."
      },
      {
        "name": "Conversation Search",
        "responsibility": "Feature to search through past conversations for context and information."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/scaling-productivity-with-ava-instacarts-internal-ai-assistant-ed7f02558d84",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 92,
    "company": "Meta",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Translate and transcribe across speech and text",
    "title": "Bringing the world closer together with a foundational multimodal model for speech translation",
    "url": "https://ai.meta.com/blog/seamless-m4t/",
    "year": 2023,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data stores for open speech audio data and multimodal corpus.",
      "Model serving infrastructure for deploying SeamlessM4T.",
      "Monitoring tools for evaluating translation quality and safety."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Meta introduces SeamlessM4T, a unified multimodal model for translating speech and text across up to 100 languages.",
      "This model outperforms traditional cascaded systems, achieving significant improvements in translation quality and robustness against background noise.",
      "SeamlessM4T utilizes 1 million hours of open speech audio data and a multimodal corpus for training, setting new standards in translation accuracy.",
      "The system also addresses issues of gender bias and toxicity in translations, showing a notable reduction in harmful outputs."
    ],
    "summary": "Meta introduces SeamlessM4T, a unified multimodal model for translating speech and text across up to 100 languages. This model outperforms traditional cascaded systems, achieving significant improvements in translation quality and robustness against background noise. SeamlessM4T utilizes 1 million hours of open speech audio data and a multimodal corpus for training, setting new standards in translation accuracy. The system also addresses issues of gender bias and toxicity in translations, showing a notable reduction in harmful outputs.",
    "infraDetails": [
      "Data stores for open speech audio data and multimodal corpus.",
      "Model serving infrastructure for deploying SeamlessM4T.",
      "Monitoring tools for evaluating translation quality and safety."
    ],
    "systemComponents": [
      {
        "name": "SeamlessM4T",
        "responsibility": "Unified model for multimodal translation tasks."
      },
      {
        "name": "SeamlessAlign",
        "responsibility": "Corpus for automatically aligned speech translations."
      },
      {
        "name": "Blaser 2.0",
        "responsibility": "Evaluation tool for assessing translation quality across speech and text."
      },
      {
        "name": "Fairseq2",
        "responsibility": "Modeling toolkit for finetuning and inference."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://ai.meta.com/blog/seamless-m4t/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 93,
    "company": "Vimeo",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Customer support AI assistant",
    "title": "From idea to reality: Elevating our customer support through generative AI",
    "url": "https://medium.com/vimeo-engineering-blog/from-idea-to-reality-elevating-our-customer-support-through-generative-ai-101a2c5ea680",
    "year": 2023,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/vimeo-engineering-blog/from-idea-to-reality-elevating-our-customer-support-through-generative-ai-101a2c5ea680",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 94,
    "company": "Ebay",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend relevant e-commerce items",
    "title": "Building a Deep Learning Based Retrieval System for Personalized Recommendations",
    "url": "https://tech.ebayinc.com/engineering/building-a-deep-learning-based-retrieval-system-for-personalized-recommendations/",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data Lake (Hadoop)",
      "ETL System (Spark)",
      "Event Streaming Platform (Apache Kafka)",
      "Stream Processing (Apache Flink)",
      "Model Prediction Service (Nvidia Triton Inference Server)",
      "Database (Couchbase)"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "eBay developed a deep learning-based retrieval system for personalized recommendations, leveraging user click history and item metadata.",
      "The system was built in three phases: Offline, Offline/Near Real Time (NRT) Hybrid, and fully NRT, each improving the speed and efficiency of generating recommendations.",
      "Key technologies used include deep learning for embeddings, KNN search for recommendations, and various data processing tools for real-time event handling.",
      "The final NRT phase utilizes streaming technology to process user interactions in real-time, significantly reducing recommendation delays."
    ],
    "summary": "eBay developed a deep learning-based retrieval system for personalized recommendations, leveraging user click history and item metadata. The system was built in three phases: Offline, Offline/Near Real Time (NRT) Hybrid, and fully NRT, each improving the speed and efficiency of generating recommendations. Key technologies used include deep learning for embeddings, KNN search for recommendations, and various data processing tools for real-time event handling. The final NRT phase utilizes streaming technology to process user interactions in real-time, significantly reducing recommendation delays.",
    "infraDetails": [
      "Data Lake (Hadoop)",
      "ETL System (Spark)",
      "Event Streaming Platform (Apache Kafka)",
      "Stream Processing (Apache Flink)",
      "Model Prediction Service (Nvidia Triton Inference Server)",
      "Database (Couchbase)"
    ],
    "systemComponents": [
      {
        "name": "User Click Tracking System",
        "responsibility": "Captures user click history and aggregates it for analysis."
      },
      {
        "name": "Embedding Generation Service",
        "responsibility": "Generates user and item embeddings using deep learning models."
      },
      {
        "name": "KNN Search Service",
        "responsibility": "Performs KNN search to find relevant items based on user embeddings."
      },
      {
        "name": "Recommendation Application",
        "responsibility": "Delivers personalized recommendations to users in real-time."
      },
      {
        "name": "Event Streaming Service",
        "responsibility": "Handles real-time user events for immediate processing."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.ebayinc.com/engineering/building-a-deep-learning-based-retrieval-system-for-personalized-recommendations/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 95,
    "company": "Mercado Libre",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict product dimensions for delivery",
    "title": "Predicting package dimensions based on a similarity model at Mercado Libre",
    "url": "https://medium.com/mercadolibre-tech/predicting-package-dimensions-based-on-a-similarity-model-at-mercado-libre-d64a9dd4351d",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/mercadolibre-tech/predicting-package-dimensions-based-on-a-similarity-model-at-mercado-libre-d64a9dd4351d",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 96,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Recommend substitute items",
    "title": "Evolving DoorDash's Substitution Recommendations Algorithm",
    "url": "https://doordash.engineering/2022/09/08/evolving-doordashs-substitution-recommendations-algorithm/",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for item metadata and customer feedback",
      "Batch processing system for model training and evaluation",
      "Orchestration tools for managing model deployment and updates",
      "Feature store for managing and serving item embeddings",
      "Model serving infrastructure for real-time recommendation delivery",
      "Monitoring systems for tracking model performance and customer satisfaction"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash developed a substitution recommendations algorithm to enhance customer experience when ordered items are out of stock.",
      "The algorithm evolved from an unsupervised model using item metadata to a deep learning model leveraging semantic item embeddings.",
      "Customer feedback was crucial in refining the recommendations, transitioning from binary classification to deep learning approaches.",
      "The team faced challenges in measuring recommendation quality and impact, implementing experimentation infrastructure to track customer satisfaction.",
      "Future improvements will focus on richer item metadata and personalized recommendations to better meet individual customer preferences."
    ],
    "summary": "DoorDash developed a substitution recommendations algorithm to enhance customer experience when ordered items are out of stock. The algorithm evolved from an unsupervised model using item metadata to a deep learning model leveraging semantic item embeddings. Customer feedback was crucial in refining the recommendations, transitioning from binary classification to deep learning approaches. The team faced challenges in measuring recommendation quality and impact, implementing experimentation infrastructure to track customer satisfaction. Future improvements will focus on richer item metadata and personalized recommendations to better meet individual customer preferences.",
    "infraDetails": [
      "Data stores for item metadata and customer feedback",
      "Batch processing system for model training and evaluation",
      "Orchestration tools for managing model deployment and updates",
      "Feature store for managing and serving item embeddings",
      "Model serving infrastructure for real-time recommendation delivery",
      "Monitoring systems for tracking model performance and customer satisfaction"
    ],
    "systemComponents": [
      {
        "name": "Recommendation Model",
        "responsibility": "Generates substitution recommendations based on customer orders and item metadata."
      },
      {
        "name": "Customer Feedback Loop",
        "responsibility": "Collects and processes customer ratings on substitution suggestions to improve model accuracy."
      },
      {
        "name": "Experimentation Infrastructure",
        "responsibility": "Evaluates model performance and customer impact through controlled experiments."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves item embeddings and other features used in the recommendation model."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the quality and effectiveness of recommendations in real-time."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://doordash.engineering/2022/09/08/evolving-doordashs-substitution-recommendations-algorithm/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 97,
    "company": "Pinterest",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Personalize homepage contents",
    "title": "How Pinterest Leverages Realtime User Actions in Recommendation to Boost Homefeed Engagement Volume",
    "url": "https://medium.com/pinterest-engineering/how-pinterest-leverages-realtime-user-actions-in-recommendation-to-boost-homefeed-engagement-volume-165ae2e8cde8",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/pinterest-engineering/how-pinterest-leverages-realtime-user-actions-in-recommendation-to-boost-homefeed-engagement-volume-165ae2e8cde8",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 98,
    "company": "Instacart",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Search food and grocery items",
    "title": "How Instacart Uses Embeddings to Improve Search Relevance",
    "url": "https://tech.instacart.com/how-instacart-uses-embeddings-to-improve-search-relevance-e569839c3c36",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for product metadata and search logs",
      "Batch processing for model training",
      "Feature store for managing embeddings",
      "Model serving infrastructure for real-time query handling",
      "Monitoring systems for performance evaluation and model drift detection"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Instacart utilizes a deep learning model called ITEMS to enhance search relevance for its extensive catalog of over 1 billion products.",
      "The model employs a two-tower architecture to create unified embeddings for search queries and products, allowing for effective comparison and ranking.",
      "Training involves a combination of positive and negative examples, with a focus on high-quality data to mitigate noise from e-commerce search logs.",
      "Data augmentation techniques and multi-task learning are employed to enrich the model's input and improve its performance.",
      "A cascade training scheme is implemented to balance data quantity and quality, leading to significant improvements in search outcomes."
    ],
    "summary": "Instacart utilizes a deep learning model called ITEMS to enhance search relevance for its extensive catalog of over 1 billion products. The model employs a two-tower architecture to create unified embeddings for search queries and products, allowing for effective comparison and ranking. Training involves a combination of positive and negative examples, with a focus on high-quality data to mitigate noise from e-commerce search logs. Data augmentation techniques and multi-task learning are employed to enrich the model's input and improve its performance. A cascade training scheme is implemented to balance data quantity and quality, leading to significant improvements in search outcomes.",
    "infraDetails": [
      "Data stores for product metadata and search logs",
      "Batch processing for model training",
      "Feature store for managing embeddings",
      "Model serving infrastructure for real-time query handling",
      "Monitoring systems for performance evaluation and model drift detection"
    ],
    "systemComponents": [
      {
        "name": "ITEMS Model",
        "responsibility": "Generates embeddings for search queries and products to assess relevance."
      },
      {
        "name": "Data Augmentation Module",
        "responsibility": "Enhances training data by creating synthetic queries and expanding product input."
      },
      {
        "name": "Training Pipeline",
        "responsibility": "Handles the training process, including cascade training and fine-tuning of the model."
      },
      {
        "name": "Feature Store",
        "responsibility": "Stores and manages embeddings and product metadata for efficient retrieval."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and detects any drift in search relevance."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/how-instacart-uses-embeddings-to-improve-search-relevance-e569839c3c36",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 99,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Assist in e-commerce shopping",
    "title": "A Unified Multi-task Model for Supporting Multiple Virtual Assistants in Walmart",
    "url": "https://medium.com/walmartglobaltech/a-unified-multi-task-model-for-supporting-multiple-virtual-assistants-in-walmart-2b077c2c96e",
    "year": 2022,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Data stores for training data aggregation",
      "Stream processing for real-time data handling",
      "Batch processing for training model updates",
      "Feature store for managing shared features across tasks",
      "Model serving infrastructure for deploying the unified model",
      "Monitoring systems for performance tracking and error handling"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Walmart has developed a unified multi-task model to support various virtual assistants for e-commerce shopping and store associates.",
      "The model aims to improve intent classification and slot filling by leveraging shared representations across different domains, reducing maintenance costs and enhancing performance.",
      "By aggregating training data from different assistants, the unified model addresses data scarcity and improves generalization capabilities.",
      "Challenges include handling domain-specific vocabulary and ambiguities in entity recognition, which are addressed through context-aware labeling and multilingual NER models."
    ],
    "summary": "Walmart has developed a unified multi-task model to support various virtual assistants for e-commerce shopping and store associates. The model aims to improve intent classification and slot filling by leveraging shared representations across different domains, reducing maintenance costs and enhancing performance. By aggregating training data from different assistants, the unified model addresses data scarcity and improves generalization capabilities. Challenges include handling domain-specific vocabulary and ambiguities in entity recognition, which are addressed through context-aware labeling and multilingual NER models.",
    "infraDetails": [
      "Data stores for training data aggregation",
      "Stream processing for real-time data handling",
      "Batch processing for training model updates",
      "Feature store for managing shared features across tasks",
      "Model serving infrastructure for deploying the unified model",
      "Monitoring systems for performance tracking and error handling"
    ],
    "systemComponents": [
      {
        "name": "Unified Multi-task Model",
        "responsibility": "Handles intent classification and slot filling for multiple virtual assistants."
      },
      {
        "name": "Data Aggregation Pipeline",
        "responsibility": "Collects and preprocesses training data from various sources."
      },
      {
        "name": "Natural Language Processing Engine",
        "responsibility": "Processes user inputs to identify intents and extract entities."
      },
      {
        "name": "Labeling Function System",
        "responsibility": "Automatically annotates store live logs for training data enhancement."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks model performance and identifies areas for improvement."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/walmartglobaltech/a-unified-multi-task-model-for-supporting-multiple-virtual-assistants-in-walmart-2b077c2c96e",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 100,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Search for podcasts",
    "title": "Introducing Natural Language Search for Podcast Episodes",
    "url": "https://engineering.atspotify.com/2022/03/introducing-natural-language-search-for-podcast-episodes/",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Elasticsearch for traditional term-based search",
      "Vespa search engine for indexing and approximate nearest neighbor (ANN) search",
      "Vector cache for optimizing query vector computations"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Spotify has introduced Natural Language Search for podcast episodes to enhance user search experience beyond traditional term-based matching.",
      "This new search capability utilizes semantic matching to retrieve relevant content even when exact words are not present in the episode metadata.",
      "The system employs Dense Retrieval techniques, leveraging pre-trained Transformer models and vector search methods for efficient online serving.",
      "Integration with existing search infrastructure allows for a multi-source retrieval and ranking approach, improving overall podcast engagement."
    ],
    "summary": "Spotify has introduced Natural Language Search for podcast episodes to enhance user search experience beyond traditional term-based matching. This new search capability utilizes semantic matching to retrieve relevant content even when exact words are not present in the episode metadata. The system employs Dense Retrieval techniques, leveraging pre-trained Transformer models and vector search methods for efficient online serving. Integration with existing search infrastructure allows for a multi-source retrieval and ranking approach, improving overall podcast engagement.",
    "infraDetails": [
      "Elasticsearch for traditional term-based search",
      "Vespa search engine for indexing and approximate nearest neighbor (ANN) search",
      "Vector cache for optimizing query vector computations"
    ],
    "systemComponents": [
      {
        "name": "Query Encoder",
        "responsibility": "Transforms user queries into vector representations for semantic matching."
      },
      {
        "name": "Episode Encoder",
        "responsibility": "Generates vector representations of podcast episodes based on their metadata."
      },
      {
        "name": "Vespa Search Engine",
        "responsibility": "Indexes episode vectors and performs ANN search for fast retrieval."
      },
      {
        "name": "Reranking Model",
        "responsibility": "Finalizes the ranking of retrieved episodes from multiple sources based on various features."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.atspotify.com/2022/03/introducing-natural-language-search-for-podcast-episodes",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 101,
    "company": "Nextdoor",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Predict harmful comments",
    "title": "Using predictive technology to foster constructive conversations",
    "url": "https://engblog.nextdoor.com/using-predictive-technology-to-foster-constructive-conversations-4af437942bd4",
    "year": 2022,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Data stores for storing user comments and reports",
      "Feature store for managing and serving features used in model training",
      "Monitoring tools to evaluate model performance and user interactions",
      "Orchestration systems for managing the deployment of intervention tools"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Nextdoor employs predictive technology to identify and mitigate harmful comments, fostering kinder conversations among neighbors.",
      "The platform uses machine learning models to detect uncivil content and implement strategic nudges, such as reminders, to encourage positive interactions.",
      "By analyzing conversation threads and utilizing reporting data, Nextdoor aims to intervene before contentious comments escalate, thereby reducing negative feedback loops."
    ],
    "summary": "Nextdoor employs predictive technology to identify and mitigate harmful comments, fostering kinder conversations among neighbors. The platform uses machine learning models to detect uncivil content and implement strategic nudges, such as reminders, to encourage positive interactions. By analyzing conversation threads and utilizing reporting data, Nextdoor aims to intervene before contentious comments escalate, thereby reducing negative feedback loops.",
    "infraDetails": [
      "Data stores for storing user comments and reports",
      "Feature store for managing and serving features used in model training",
      "Monitoring tools to evaluate model performance and user interactions",
      "Orchestration systems for managing the deployment of intervention tools"
    ],
    "systemComponents": [
      {
        "name": "Comment Moderation Model",
        "responsibility": "Predicts the likelihood of comments being abusive based on historical data and thread context."
      },
      {
        "name": "Kindness Reminder",
        "responsibility": "Prompts users to reconsider their comments before posting potentially harmful content."
      },
      {
        "name": "Reporting System",
        "responsibility": "Allows users to report harmful comments, providing data for model training and intervention."
      },
      {
        "name": "Thread Analysis Engine",
        "responsibility": "Analyzes conversation threads to identify patterns and relationships that indicate potential contention."
      },
      {
        "name": "Notification Suppression System",
        "responsibility": "Suppresses notifications for comments in threads identified as contentious to reduce escalation."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engblog.nextdoor.com/using-predictive-technology-to-foster-constructive-conversations-4af437942bd4",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 102,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Fill shopping cart via voice dialog",
    "title": "Voice Reorder Experience: add Multiple Product Items to your shopping cart",
    "url": "https://medium.com/walmartglobaltech/voice-reorder-experience-add-multiple-product-items-to-your-shopping-cart-59d20fc61797",
    "year": 2022,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/walmartglobaltech/voice-reorder-experience-add-multiple-product-items-to-your-shopping-cart-59d20fc61797",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 103,
    "company": "Expedia",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Categorize customer feedback",
    "title": "Categorising Customer Feedback Using Unsupervised Learning",
    "url": "https://medium.com/expedia-group-tech/categorising-customer-feedback-using-unsupervised-learning-8608c1e62d48",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/expedia-group-tech/categorising-customer-feedback-using-unsupervised-learning-8608c1e62d48",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 104,
    "company": "Foodpanda",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Classify restaurants and cuisines",
    "title": "Classifying restaurant cuisines with subjective labels",
    "url": "https://medium.com/foodpanda-data/classifying-restaurant-cuisines-with-subjective-labels-fa10012d18a9",
    "year": 2022,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/foodpanda-data/classifying-restaurant-cuisines-with-subjective-labels-fa10012d18a9",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 105,
    "company": "Ebay",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Recommend products and content",
    "title": "Multi-Relevance Ranking Model for Similar Item Recommendation",
    "url": "https://tech.ebayinc.com/engineering/multi-relevance-ranking-model-for-similar-item-recommendation/",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for historical user interaction data",
      "Batch processing systems for model training",
      "Feature stores for managing user engagement features",
      "Model serving infrastructure for deploying ranking models",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "eBay's Multi-Relevance Ranking Model enhances product recommendations by incorporating various purchase intent signals from user behaviors.",
      "The model operates in three stages: retrieving relevant items, ranking them based on purchase likelihood, and re-ranking to balance seller ad rates with relevance.",
      "A shift from binary feedback to multi-relevance feedback allows the model to better capture user engagement and improve recommendation accuracy.",
      "The model's performance was validated through A/B testing, showing significant increases in purchase counts and ad revenue.",
      "Incorporating additional user actions as relevance signals has improved the overall shopping experience and conversion rates."
    ],
    "summary": "eBay's Multi-Relevance Ranking Model enhances product recommendations by incorporating various purchase intent signals from user behaviors. The model operates in three stages: retrieving relevant items, ranking them based on purchase likelihood, and re-ranking to balance seller ad rates with relevance. A shift from binary feedback to multi-relevance feedback allows the model to better capture user engagement and improve recommendation accuracy. The model's performance was validated through A/B testing, showing significant increases in purchase counts and ad revenue. Incorporating additional user actions as relevance signals has improved the overall shopping experience and conversion rates.",
    "infraDetails": [
      "Data stores for historical user interaction data",
      "Batch processing systems for model training",
      "Feature stores for managing user engagement features",
      "Model serving infrastructure for deploying ranking models",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "PLSIM Engine",
        "responsibility": "Retrieves and ranks promoted listings based on user interactions and purchase likelihood."
      },
      {
        "name": "Ranking Model",
        "responsibility": "Trained to optimize item recommendations based on historical data and user behavior."
      },
      {
        "name": "Feedback System",
        "responsibility": "Collects user actions to inform the model about relevance and intent."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.ebayinc.com/engineering/multi-relevance-ranking-model-for-similar-item-recommendation/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 106,
    "company": "Gousto",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict subscription churn",
    "title": "Using Data Science to Retain Customers",
    "url": "https://medium.com/gousto-engineering-techbrunch/using-data-science-to-retain-customers-63f19a03a0b6",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/gousto-engineering-techbrunch/using-data-science-to-retain-customers-63f19a03a0b6",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 107,
    "company": "Google",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Generate summaries",
    "title": "Auto-generated Summaries in Google Docs",
    "url": "https://ai.googleblog.com/2022/03/auto-generated-summaries-in-google-docs.html",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Self-supervised Pre-training with Transformers",
      "TPUs for serving the summarization model"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Google Docs now features auto-generated summary suggestions to help users quickly understand document content.",
      "The system utilizes a machine learning model that generates concise natural language descriptions based on document text.",
      "Document writers retain control over the suggested summaries, allowing them to edit or ignore the suggestions as needed.",
      "The model leverages advances in natural language understanding and generation, particularly through the use of Transformers and Pegasus.",
      "Challenges remain in ensuring the model's effectiveness across diverse document types and improving evaluation metrics for generated summaries."
    ],
    "summary": "Google Docs now features auto-generated summary suggestions to help users quickly understand document content. The system utilizes a machine learning model that generates concise natural language descriptions based on document text. Document writers retain control over the suggested summaries, allowing them to edit or ignore the suggestions as needed. The model leverages advances in natural language understanding and generation, particularly through the use of Transformers and Pegasus. Challenges remain in ensuring the model's effectiveness across diverse document types and improving evaluation metrics for generated summaries.",
    "infraDetails": [
      "Self-supervised Pre-training with Transformers",
      "TPUs for serving the summarization model"
    ],
    "systemComponents": [
      {
        "name": "ML Model",
        "responsibility": "Generates auto-summaries based on document content."
      },
      {
        "name": "Fine-tuning Dataset",
        "responsibility": "Provides a curated set of documents with consistent summaries for model training."
      },
      {
        "name": "Knowledge Distillation Process",
        "responsibility": "Transfers knowledge from a larger model to a smaller, more efficient model."
      },
      {
        "name": "TPU Infrastructure",
        "responsibility": "Enables fast and efficient serving of the summarization model."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://ai.googleblog.com/2022/03/auto-generated-summaries-in-google-docs.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 108,
    "company": "Yelp",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Personalize recommendations",
    "title": "Beyond Matrix Factorization: Using hybrid features for user-business recommendations",
    "url": "https://engineeringblog.yelp.com/2022/04/beyond-matrix-factorization-using-hybrid-features-for-user-business-recommendations.html",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for user-business interaction data",
      "Feature stores for storing engineered features",
      "Batch processing systems for feature extraction and model training",
      "Stream processing systems for real-time recommendation updates",
      "Model serving infrastructure for deploying the hybrid recommendation model",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Yelp transitioned from a matrix factorization approach to a hybrid recommendation model that incorporates both content-based and collaborative features to enhance user-business recommendations.",
      "The new hybrid model significantly improved performance, especially for tail users who previously suffered from cold-start issues due to limited interactions.",
      "Key features were engineered at the user-business level, including interaction scores from matrix factorization and various content-based attributes, leading to a more personalized recommendation system.",
      "The model was optimized using Normalized Discounted Cumulative Gain (NDCG) as the primary metric, ensuring a clear separation between training and evaluation periods to avoid label leakage.",
      "The implementation included a recall step to efficiently scale predictions for millions of users and businesses while addressing the challenges of negative sampling."
    ],
    "summary": "Yelp transitioned from a matrix factorization approach to a hybrid recommendation model that incorporates both content-based and collaborative features to enhance user-business recommendations. The new hybrid model significantly improved performance, especially for tail users who previously suffered from cold-start issues due to limited interactions. Key features were engineered at the user-business level, including interaction scores from matrix factorization and various content-based attributes, leading to a more personalized recommendation system. The model was optimized using Normalized Discounted Cumulative Gain (NDCG) as the primary metric, ensuring a clear separation between training and evaluation periods to avoid label leakage. The implementation included a recall step to efficiently scale predictions for millions of users and businesses while addressing the challenges of negative sampling.",
    "infraDetails": [
      "Data stores for user-business interaction data",
      "Feature stores for storing engineered features",
      "Batch processing systems for feature extraction and model training",
      "Stream processing systems for real-time recommendation updates",
      "Model serving infrastructure for deploying the hybrid recommendation model",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "Feature Engineering Pipeline",
        "responsibility": "Extracts and processes features from user-business interactions and content data."
      },
      {
        "name": "Hybrid Recommendation Model",
        "responsibility": "Combines collaborative and content-based features to generate personalized recommendations."
      },
      {
        "name": "Recall Mechanism",
        "responsibility": "Filters candidate businesses based on user preferences and location to improve prediction efficiency."
      },
      {
        "name": "Model Evaluation Framework",
        "responsibility": "Assesses model performance using metrics like NDCG and MAP, ensuring robust validation."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance and effectiveness of the recommendation system in real-time."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineeringblog.yelp.com/2022/04/beyond-matrix-factorization-using-hybrid-features-for-user-business-recommendations.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 109,
    "company": "PayPal",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Prioritize sales leads",
    "title": "Sales Pipeline Management with Machine Learning: A Lightweight Two-Layer Ensemble Classifier Framework",
    "url": "https://medium.com/paypal-tech/sales-pipeline-management-with-machine-learning-15398bab913b",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/paypal-tech/sales-pipeline-management-with-machine-learning-15398bab913b",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 110,
    "company": "Grubhub",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Forecast order volume",
    "title": "Forecasting Grubhub Order Volume At Scale",
    "url": "https://bytes.grubhub.com/forecasting-grubhub-order-volume-at-scale-a966c2f901d2",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "S3 as the underlying data lake",
      "Sqlite for local data caches"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grubhub forecasts order volume every half-hour for each region to ensure optimal courier availability.",
      "The forecasting system integrates research and production, with data scientists acting as machine learning engineers.",
      "Key infrastructure components include AWS EMR for computation, Azkaban for workflow scheduling, and Dask for distributed processing.",
      "The system emphasizes simplicity, local testing, and seamless deployment of forecasting models.",
      "Quality checks and monitoring tools are in place to validate forecasts and ensure system health."
    ],
    "summary": "Grubhub forecasts order volume every half-hour for each region to ensure optimal courier availability. The forecasting system integrates research and production, with data scientists acting as machine learning engineers. Key infrastructure components include AWS EMR for computation, Azkaban for workflow scheduling, and Dask for distributed processing. The system emphasizes simplicity, local testing, and seamless deployment of forecasting models. Quality checks and monitoring tools are in place to validate forecasts and ensure system health.",
    "infraDetails": [
      "S3 as the underlying data lake",
      "Sqlite for local data caches"
    ],
    "systemComponents": [
      {
        "name": "Forecasting Model",
        "responsibility": "Generates order volume forecasts based on historical data."
      },
      {
        "name": "Data Pipeline",
        "responsibility": "Aggregates and prepares data for forecasting."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Collects metrics and alerts for forecasting health."
      },
      {
        "name": "Workflow Scheduler",
        "responsibility": "Manages the scheduling and execution of forecasting jobs."
      },
      {
        "name": "Local Cache",
        "responsibility": "Stores historical feature sets for quick access during forecasting."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.grubhub.com/forecasting-grubhub-order-volume-at-scale-a966c2f901d2",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 111,
    "company": "Github",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Detect vulnerabilities in code",
    "title": "Leveraging machine learning to find security vulnerabilities",
    "url": "https://github.blog/2022-02-17-leveraging-machine-learning-find-security-vulnerabilities/",
    "year": 2022,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Database for relational representation of code",
      "Training set from manually written CodeQL queries"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "GitHub's code scanning now utilizes machine learning to identify potential security vulnerabilities in code before they can be exploited.",
      "The CodeQL analysis engine builds a database of the code's relational representation, allowing for targeted queries to detect vulnerabilities.",
      "Machine learning enhances the detection capabilities by training models on examples from manual CodeQL queries, enabling the identification of risks in lesser-known libraries."
    ],
    "summary": "GitHub's code scanning now utilizes machine learning to identify potential security vulnerabilities in code before they can be exploited. The CodeQL analysis engine builds a database of the code's relational representation, allowing for targeted queries to detect vulnerabilities. Machine learning enhances the detection capabilities by training models on examples from manual CodeQL queries, enabling the identification of risks in lesser-known libraries.",
    "infraDetails": [
      "Database for relational representation of code",
      "Training set from manually written CodeQL queries"
    ],
    "systemComponents": [
      {
        "name": "CodeQL Engine",
        "responsibility": "Analyzes source code to find security vulnerabilities and surface alerts."
      },
      {
        "name": "Machine Learning Models",
        "responsibility": "Trains on examples to identify potentially risky code snippets."
      },
      {
        "name": "Database",
        "responsibility": "Stores the relational representation of the code for analysis."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://github.blog/2022-02-17-leveraging-machine-learning-find-security-vulnerabilities/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 112,
    "company": "Uber",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Detect payment fraud",
    "title": "Project RADAR: Intelligent Early Fraud Detection System with Humans in the Loop",
    "url": "https://www.uber.com/en-GB/blog/project-radar-intelligent-early-fraud-detection/",
    "year": 2022,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Apache Spark for data processing and analysis",
      "AthenaX for aggregating risk-enriched payment stream data",
      "Kafka for streaming data"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Project RADAR is an AI-driven fraud detection system at Uber that integrates human expertise to enhance decision-making.",
      "The system monitors payment transactions in real-time to identify and mitigate potential fraud attacks, leveraging both machine learning and expert-driven rules.",
      "RADAR utilizes a combination of time series analysis and anomaly detection to forecast and respond to fraudulent activities effectively.",
      "The collaboration between automated systems and human analysts ensures that new and evolving fraud patterns are addressed promptly.",
      "The infrastructure supports continuous data processing and testing, allowing for rapid adaptation to changes in fraud patterns."
    ],
    "summary": "Project RADAR is an AI-driven fraud detection system at Uber that integrates human expertise to enhance decision-making. The system monitors payment transactions in real-time to identify and mitigate potential fraud attacks, leveraging both machine learning and expert-driven rules. RADAR utilizes a combination of time series analysis and anomaly detection to forecast and respond to fraudulent activities effectively. The collaboration between automated systems and human analysts ensures that new and evolving fraud patterns are addressed promptly. The infrastructure supports continuous data processing and testing, allowing for rapid adaptation to changes in fraud patterns.",
    "infraDetails": [
      "Apache Spark for data processing and analysis",
      "AthenaX for aggregating risk-enriched payment stream data",
      "Kafka for streaming data"
    ],
    "systemComponents": [
      {
        "name": "RADAR",
        "responsibility": "Detects and mitigates fraud attacks using AI and human expertise."
      },
      {
        "name": "Fraud Analysts",
        "responsibility": "Review and approve fraud detection rules and investigate complex fraud cases."
      },
      {
        "name": "Data Pipeline",
        "responsibility": "Collects and processes data for activity time-series generation."
      },
      {
        "name": "Uber Orbit Model",
        "responsibility": "Performs Bayesian time series modeling for anomaly detection."
      },
      {
        "name": "Smart Thresholds",
        "responsibility": "Prioritizes fraud attacks based on projected losses."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.uber.com/en-GB/blog/project-radar-intelligent-early-fraud-detection/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 113,
    "company": "Gojek",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict food delivery times",
    "title": "How We Estimate Food Debarkation Time With 'Tensoba'",
    "url": "https://www.gojek.io/blog/food-debarkation-tensoba",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores: Redis",
      "Batch processing: Clockwork, Merlin",
      "Real-time feature retrieval: Feast",
      "Model serving: Merlin API",
      "Monitoring: Compliance and conversion metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Gojek's Tensoba system predicts food delivery times to enhance customer satisfaction by providing reliable ETAs.",
      "The system uses historical data and real-time features to frame the ETA problem as a regression task, focusing on merchant and order-level predictors.",
      "Tensoba employs multiple models to predict different phases of delivery time, achieving a significant reduction in ETA error from 31% to 23%.",
      "The implementation involves both batch and real-time predictions, utilizing technologies like Redis for storage and Merlin for model deployment."
    ],
    "summary": "Gojek's Tensoba system predicts food delivery times to enhance customer satisfaction by providing reliable ETAs. The system uses historical data and real-time features to frame the ETA problem as a regression task, focusing on merchant and order-level predictors. Tensoba employs multiple models to predict different phases of delivery time, achieving a significant reduction in ETA error from 31% to 23%. The implementation involves both batch and real-time predictions, utilizing technologies like Redis for storage and Merlin for model deployment.",
    "infraDetails": [
      "Data stores: Redis",
      "Batch processing: Clockwork, Merlin",
      "Real-time feature retrieval: Feast",
      "Model serving: Merlin API",
      "Monitoring: Compliance and conversion metrics"
    ],
    "systemComponents": [
      {
        "name": "Tensoba",
        "responsibility": "Predicts food delivery times based on historical and real-time data."
      },
      {
        "name": "Clockwork",
        "responsibility": "Orchestrates the scheduling of batch predictions."
      },
      {
        "name": "Merlin",
        "responsibility": "Facilitates batch prediction and serves the model via API."
      },
      {
        "name": "Redis",
        "responsibility": "Stores hourly predictions for quick access."
      },
      {
        "name": "Feast",
        "responsibility": "Provides real-time feature retrieval for model predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.gojek.io/blog/food-debarkation-tensoba",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 114,
    "company": "Uber",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict estimated time of arrival",
    "title": "DeepETA: How Uber Predicts Arrival Times Using Deep Learning",
    "url": "https://www.uber.com/en-GB/blog/deepeta-how-uber-predicts-arrival-times/",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Apache Spark for data processing",
      "XGBoost for initial model training",
      "Feature store for managing input features",
      "Model serving infrastructure for real-time predictions",
      "Monitoring tools for performance tracking"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Uber's DeepETA model enhances estimated time of arrival (ETA) predictions by integrating deep learning with traditional routing engines.",
      "The model addresses challenges of latency, accuracy, and generality, providing low-latency predictions across various Uber services.",
      "DeepETA employs a hybrid approach, using machine learning to predict the residuals of traditional ETA calculations based on real-time and historical data.",
      "The architecture utilizes a transformer model with self-attention to improve accuracy by capturing complex interactions among input features.",
      "Innovative feature encoding techniques, including bucketizing continuous features and multi-resolution geospatial embeddings, contribute to the model's performance."
    ],
    "summary": "Uber's DeepETA model enhances estimated time of arrival (ETA) predictions by integrating deep learning with traditional routing engines. The model addresses challenges of latency, accuracy, and generality, providing low-latency predictions across various Uber services. DeepETA employs a hybrid approach, using machine learning to predict the residuals of traditional ETA calculations based on real-time and historical data. The architecture utilizes a transformer model with self-attention to improve accuracy by capturing complex interactions among input features. Innovative feature encoding techniques, including bucketizing continuous features and multi-resolution geospatial embeddings, contribute to the model's performance.",
    "infraDetails": [
      "Apache Spark for data processing",
      "XGBoost for initial model training",
      "Feature store for managing input features",
      "Model serving infrastructure for real-time predictions",
      "Monitoring tools for performance tracking"
    ],
    "systemComponents": [
      {
        "name": "Routing Engine",
        "responsibility": "Provides initial ETA calculations based on map data and traffic conditions."
      },
      {
        "name": "DeepETA Model",
        "responsibility": "Refines ETA predictions using deep learning techniques and real-time data."
      },
      {
        "name": "Feature Encoder",
        "responsibility": "Processes and encodes input features for the model, including geospatial data."
      },
      {
        "name": "Inference Server",
        "responsibility": "Handles real-time serving of the DeepETA model to ensure low-latency predictions."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and accuracy metrics in production."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.uber.com/en-GB/blog/deepeta-how-uber-predicts-arrival-times/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 115,
    "company": "Trivago",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Optimize accommodation ranking",
    "title": "Explore-exploit dilemma in Ranking model",
    "url": "https://tech.trivago.com/post/2022-11-04-explore-exploit-dilemma-in-ranking-model",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for historical performance data",
      "Batch processing systems for A/B testing and model training",
      "Feature stores for managing and serving features used in ranking models",
      "Model serving infrastructure for deploying ranking algorithms",
      "Monitoring dashboards for tracking exploration metrics and model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The explore-exploit dilemma in ranking models involves balancing the display of well-performing accommodations with the exploration of new options to discover potentially better choices.",
      "Trivago aims to optimize accommodation ranking by controlling the extent, cost, and quality of exploration to maximize user satisfaction and advertiser efficiency.",
      "The implementation of a lambda parameter allows for fine-tuning the exploration level, helping to achieve a balance between exploration and exploitation.",
      "A/B testing revealed that while exploration increased the share of high-quality unexplored inventory, it did not significantly shift advertiser click shares.",
      "Combining classical and model-based approaches can systematically identify promising inventory in the unknown pool, addressing the challenges of the explore-exploit dilemma."
    ],
    "summary": "The explore-exploit dilemma in ranking models involves balancing the display of well-performing accommodations with the exploration of new options to discover potentially better choices. Trivago aims to optimize accommodation ranking by controlling the extent, cost, and quality of exploration to maximize user satisfaction and advertiser efficiency. The implementation of a lambda parameter allows for fine-tuning the exploration level, helping to achieve a balance between exploration and exploitation. A/B testing revealed that while exploration increased the share of high-quality unexplored inventory, it did not significantly shift advertiser click shares. Combining classical and model-based approaches can systematically identify promising inventory in the unknown pool, addressing the challenges of the explore-exploit dilemma.",
    "infraDetails": [
      "Data stores for historical performance data",
      "Batch processing systems for A/B testing and model training",
      "Feature stores for managing and serving features used in ranking models",
      "Model serving infrastructure for deploying ranking algorithms",
      "Monitoring dashboards for tracking exploration metrics and model performance"
    ],
    "systemComponents": [
      {
        "name": "Ranking Model",
        "responsibility": "Determines the optimal order of accommodations to display based on user preferences and historical performance."
      },
      {
        "name": "Exploration Mechanism",
        "responsibility": "Controls the balance between exploring new accommodations and exploiting known high-performing options."
      },
      {
        "name": "A/B Testing Framework",
        "responsibility": "Facilitates the testing of different ranking strategies and exploration levels to evaluate performance."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks exploration levels, feature distributions, and performance metrics over time."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.trivago.com/post/2022-11-04-explore-exploit-dilemma-in-ranking-model",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 116,
    "company": "Gousto",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Recommend food items and recipes",
    "title": "Gousto R-series Vol 2: Tackling the Cold-Start Problem in Recipe Recommendation Engine",
    "url": "https://medium.com/gousto-engineering-techbrunch/gousto-r-series-vol-2-tackling-the-cold-start-problem-in-recipe-recommendation-engine-af92a434805f",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/gousto-engineering-techbrunch/gousto-r-series-vol-2-tackling-the-cold-start-problem-in-recipe-recommendation-engine-af92a434805f",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 117,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Forecast user activity metrics",
    "title": "How We Built Infrastructure to Run User Forecasts at Spotify",
    "url": "https://engineering.atspotify.com/2022/06/how-we-built-infrastructure-to-run-user-forecasts-at-spotify/",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Dockerized Python jobs on Kubernetes",
      "Google BigQuery for storing hyperparameters"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Spotify developed an infrastructure to automate user forecasts, enabling both on-demand and weekly runs.",
      "The system includes advanced hyperparameter tuning, significantly reducing the time for model training and improving quality control.",
      "Forecasting is divided into three workstreams: Mature Markets, New Markets, and Custom Models, each with tailored approaches to data processing and model training.",
      "Key components of the infrastructure include tools for hyperparameter tuning, data labeling, and model selection, ensuring accurate forecasts.",
      "The redesign focused on balancing quality control with fast iteration and enhancing internal visibility through automated visualizations."
    ],
    "summary": "Spotify developed an infrastructure to automate user forecasts, enabling both on-demand and weekly runs. The system includes advanced hyperparameter tuning, significantly reducing the time for model training and improving quality control. Forecasting is divided into three workstreams: Mature Markets, New Markets, and Custom Models, each with tailored approaches to data processing and model training. Key components of the infrastructure include tools for hyperparameter tuning, data labeling, and model selection, ensuring accurate forecasts. The redesign focused on balancing quality control with fast iteration and enhancing internal visibility through automated visualizations.",
    "infraDetails": [
      "Dockerized Python jobs on Kubernetes",
      "Google BigQuery for storing hyperparameters"
    ],
    "systemComponents": [
      {
        "name": "Parameter-Space Creator",
        "responsibility": "Sets and stores hyperparameters for evaluation via cross-validation."
      },
      {
        "name": "Data Labeler",
        "responsibility": "Labels time series data and reformats it for parallel processing."
      },
      {
        "name": "Hyperparameter Tuning",
        "responsibility": "Runs models in parallel to evaluate different hyperparameter combinations."
      },
      {
        "name": "Model Selector",
        "responsibility": "Evaluates models based on weighted errors to determine the best performing models."
      },
      {
        "name": "Model Applier",
        "responsibility": "Runs the selected model to produce forecasts for each market."
      },
      {
        "name": "QC & Manual Intervention",
        "responsibility": "Conducts quality checks on outputs and facilitates manual input from stakeholders."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.atspotify.com/2022/06/how-we-built-infrastructure-to-run-user-forecasts-at-spotify/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 118,
    "company": "Google",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Summarize conversations",
    "title": "Conversation Summaries in Google Chat",
    "url": "https://ai.googleblog.com/2022/11/conversation-summaries-in-google-chathtml",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "HTTP 404",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": false,
    "summarySource": "missing"
  },
  {
    "id": 119,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Improve travel search experience",
    "title": "Building Airbnb Categories with ML and Human-in-the-Loop",
    "url": "https://medium.com/airbnb-engineering/building-airbnb-categories-with-ml-and-human-in-the-loop-e97988e70ebb",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/airbnb-engineering/building-airbnb-categories-with-ml-and-human-in-the-loop-e97988e70ebb",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 120,
    "company": "Uber",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Send timely push notifications",
    "title": "How Uber Optimizes the Timing of Push Notifications using ML and Linear Programming",
    "url": "https://www.uber.com/en-US/blog/how-uber-optimizes-push-notifications-using-ml/",
    "year": 2022,
    "category": "optimization_pricing",
    "categoryLabel": "Optimization and pricing",
    "components": [
      "MySQL datastores for storing push notifications in a user's inbox.",
      "Uber's ML platform (Michelangelo) for model training and scheduling.",
      "Kafka for buffering push-time assignments and managing message delivery."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Uber has developed the Consumer Communication Gateway (CCG) to optimize the timing and delivery of push notifications for users.",
      "The system uses a linear programming approach to determine the best schedule for sending notifications, considering various constraints and user preferences.",
      "An XGBoost model predicts the likelihood of user engagement with notifications, allowing for more personalized and timely messaging.",
      "The implementation has led to a reduction in opt-outs and an increase in notification relevance, with plans for further enhancements and expansion across channels."
    ],
    "summary": "Uber has developed the Consumer Communication Gateway (CCG) to optimize the timing and delivery of push notifications for users. The system uses a linear programming approach to determine the best schedule for sending notifications, considering various constraints and user preferences. An XGBoost model predicts the likelihood of user engagement with notifications, allowing for more personalized and timely messaging. The implementation has led to a reduction in opt-outs and an increase in notification relevance, with plans for further enhancements and expansion across channels.",
    "infraDetails": [
      "MySQL datastores for storing push notifications in a user's inbox.",
      "Uber's ML platform (Michelangelo) for model training and scheduling.",
      "Kafka for buffering push-time assignments and managing message delivery."
    ],
    "systemComponents": [
      {
        "name": "Persistor",
        "responsibility": "Stores incoming push notifications in a user's inbox."
      },
      {
        "name": "Schedule Generator",
        "responsibility": "Fetches buffered pushes and determines the optimal schedule for delivery."
      },
      {
        "name": "Scheduler",
        "responsibility": "Triggers the delivery of scheduled pushes at the designated times."
      },
      {
        "name": "Push Delivery",
        "responsibility": "Handles the final delivery of pushes to users and performs last-mile checks."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.uber.com/en-US/blog/how-uber-optimizes-push-notifications-using-ml/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 121,
    "company": "Meta",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Personalize daily digest notifications",
    "title": "Improving Instagram notification management with machine learning and causal inference",
    "url": "https://engineering.fb.com/2022/10/31/ml-applications/instagram-notification-management-machine-learning/",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for user activity and notification data",
      "Randomized experiment framework for uplift modeling",
      "Model serving infrastructure for deploying ML models"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Meta has implemented machine learning and causal inference to enhance the personalization of daily digest notifications on Instagram.",
      "By identifying highly active users, the system reduces unnecessary notifications while maintaining user engagement.",
      "The approach moves beyond traditional click-through rate models to focus on maximizing the efficiency of notifications sent based on user activity.",
      "A randomized experiment was conducted to estimate the incremental value of sending notifications, leading to improved user experience and reduced resource usage."
    ],
    "summary": "Meta has implemented machine learning and causal inference to enhance the personalization of daily digest notifications on Instagram. By identifying highly active users, the system reduces unnecessary notifications while maintaining user engagement. The approach moves beyond traditional click-through rate models to focus on maximizing the efficiency of notifications sent based on user activity. A randomized experiment was conducted to estimate the incremental value of sending notifications, leading to improved user experience and reduced resource usage.",
    "infraDetails": [
      "Data stores for user activity and notification data",
      "Randomized experiment framework for uplift modeling",
      "Model serving infrastructure for deploying ML models"
    ],
    "systemComponents": [
      {
        "name": "Notification Management System",
        "responsibility": "Handles the generation and sending of notifications based on user activity and engagement."
      },
      {
        "name": "Causal Inference Model",
        "responsibility": "Predicts the incremental impact of sending notifications versus not sending them."
      },
      {
        "name": "Uplift Model",
        "responsibility": "Estimates the potential engagement impact of notifications at the user level."
      },
      {
        "name": "Online Scoring Service",
        "responsibility": "Evaluates notifications in real-time to determine whether to send or drop them."
      },
      {
        "name": "Experimentation Framework",
        "responsibility": "Facilitates randomized experiments to gather data for model training and evaluation."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.fb.com/2022/10/31/ml-applications/instagram-notification-management-machine-learning/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 122,
    "company": "Instacart",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Recommend relevant food items",
    "title": "Personalizing Recommendations for a Learning User",
    "url": "https://www.instacart.com/company/how-its-made/personalizing-recommendations-for-a-learning-user/",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "HTTP 308",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": false,
    "summarySource": "missing"
  },
  {
    "id": 123,
    "company": "Expedia",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Rank relevant travel deals",
    "title": "How to Optimise Rankings with Cascade Bandits",
    "url": "https://medium.com/expedia-group-tech/how-to-optimise-rankings-with-cascade-bandits-5d92dfa0f16b",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for user interaction feedback",
      "Monitoring tools for evaluating ranking performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Expedia optimized the ranking of travel deals using cascade bandits, addressing the challenges of noisy user interaction signals.",
      "Learning-to-rank algorithms are crucial for personalizing user experiences, but traditional methods can lead to suboptimal results due to implicit feedback.",
      "Cascade bandits balance exploration and exploitation, allowing the system to discover better rankings while maintaining user satisfaction.",
      "Structured bandits help manage the vast number of potential rankings by focusing on sub-arms, which represent individual items within rankings."
    ],
    "summary": "Expedia optimized the ranking of travel deals using cascade bandits, addressing the challenges of noisy user interaction signals. Learning-to-rank algorithms are crucial for personalizing user experiences, but traditional methods can lead to suboptimal results due to implicit feedback. Cascade bandits balance exploration and exploitation, allowing the system to discover better rankings while maintaining user satisfaction. Structured bandits help manage the vast number of potential rankings by focusing on sub-arms, which represent individual items within rankings.",
    "infraDetails": [
      "Data stores for user interaction feedback",
      "Monitoring tools for evaluating ranking performance"
    ],
    "systemComponents": [
      {
        "name": "Ranking System",
        "responsibility": "Generates and serves ranked lists of travel deals to users."
      },
      {
        "name": "User Interaction Feedback Collector",
        "responsibility": "Gathers click data and other user interactions to inform the ranking system."
      },
      {
        "name": "Bandit Algorithm Engine",
        "responsibility": "Implements cascade bandits to optimize ranking through exploration and exploitation."
      },
      {
        "name": "Structured Bandit Framework",
        "responsibility": "Manages the complexity of ranking by focusing on sub-arms to improve efficiency."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks the performance of rankings and user engagement metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/expedia-group-tech/how-to-optimise-rankings-with-cascade-bandits-5d92dfa0f16b",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 124,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Personalize recommendations on homepage",
    "title": "Homepage Recommendation with Exploitation and Exploration",
    "url": "https://doordash.engineering/2022/10/05/homepage-recommendation-with-exploitation-and-exploration/",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "ElasticSearch for candidate selection and retrieval",
      "Deep learning frameworks for model training and inference",
      "Feature stores for managing and serving features related to entities and consumers",
      "Monitoring systems for tracking model performance and user engagement",
      "Orchestration tools for managing the workflow of the recommendation pipeline"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash's homepage recommendation system aims to balance exploitation of known user preferences with exploration of new options to enhance user experience.",
      "The recommendation process involves three major stages: First Pass Ranking (FPR), Second Pass Ranking (SPR), and Final Ranking (FR), which together filter and rank candidates for display.",
      "A Universal Ranker (UR) model is employed to provide consistent ranking across various entity types, optimizing relevance and improving the consumer's shopping journey.",
      "The system faces challenges in comparing different entity types and maintaining scalability, leading to the development of a single model that can handle mixed entities effectively."
    ],
    "summary": "DoorDash's homepage recommendation system aims to balance exploitation of known user preferences with exploration of new options to enhance user experience. The recommendation process involves three major stages: First Pass Ranking (FPR), Second Pass Ranking (SPR), and Final Ranking (FR), which together filter and rank candidates for display. A Universal Ranker (UR) model is employed to provide consistent ranking across various entity types, optimizing relevance and improving the consumer's shopping journey. The system faces challenges in comparing different entity types and maintaining scalability, leading to the development of a single model that can handle mixed entities effectively.",
    "infraDetails": [
      "ElasticSearch for candidate selection and retrieval",
      "Deep learning frameworks for model training and inference",
      "Feature stores for managing and serving features related to entities and consumers",
      "Monitoring systems for tracking model performance and user engagement",
      "Orchestration tools for managing the workflow of the recommendation pipeline"
    ],
    "systemComponents": [
      {
        "name": "First Pass Ranking (FPR)",
        "responsibility": "Selects relevant candidates from a large pool of stores based on user preferences."
      },
      {
        "name": "Second Pass Ranking (SPR)",
        "responsibility": "Filters and pre-ranks candidates to choose the best options for display."
      },
      {
        "name": "Final Ranking (FR)",
        "responsibility": "Determines the vertical order of content shown to users on the homepage."
      },
      {
        "name": "Universal Ranker (UR)",
        "responsibility": "A deep-learning model that ranks mixed entity types based on their probability of conversion."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance and effectiveness of the recommendation system."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://doordash.engineering/2022/10/05/homepage-recommendation-with-exploitation-and-exploration/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 125,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Improve post search functionality",
    "title": "Improving Post Search at LinkedIn",
    "url": "https://engineering.linkedin.com/blog/2022/improving-post-search-at-linkedin",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Search midtier service",
      "Federated search pattern",
      "Post search indexes"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn improved its Post search functionality by simplifying the tech stack and decoupling it from the Feed systems.",
      "The re-architecture allowed for the implementation of multiple machine learning models to enhance the relevance of search results.",
      "Developer productivity increased significantly, reducing feature addition time from 6 weeks to 2 weeks and improving latency across platforms.",
      "The changes led to a notable increase in user engagement, with click-through rates improving by over 10% and messaging within networks increasing by 20%.",
      "Future work will focus on further simplification of the stack and enhancing the Post search capabilities."
    ],
    "summary": "LinkedIn improved its Post search functionality by simplifying the tech stack and decoupling it from the Feed systems. The re-architecture allowed for the implementation of multiple machine learning models to enhance the relevance of search results. Developer productivity increased significantly, reducing feature addition time from 6 weeks to 2 weeks and improving latency across platforms. The changes led to a notable increase in user engagement, with click-through rates improving by over 10% and messaging within networks increasing by 20%. Future work will focus on further simplification of the stack and enhancing the Post search capabilities.",
    "infraDetails": [
      "Search midtier service",
      "Federated search pattern",
      "Post search indexes"
    ],
    "systemComponents": [
      {
        "name": "Search Midtier",
        "responsibility": "Handles the interaction between the frontend and various search backends."
      },
      {
        "name": "First Pass Ranker (FPR)",
        "responsibility": "Optimizes recall by scanning a large number of documents and ranking them based on multiple aspects."
      },
      {
        "name": "Second Pass Ranker (SPR)",
        "responsibility": "Improves precision by re-ranking the top documents returned from the FPR."
      },
      {
        "name": "Diversity Re-ranker",
        "responsibility": "Injects diverse content into the top results to enhance discovery."
      },
      {
        "name": "Internal Validation Tools",
        "responsibility": "Assesses the quality of new candidate models and validates search result relevance."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2022/improving-post-search-at-linkedin",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 126,
    "company": "Artefact",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Evaluate success of past promotions",
    "title": "Forecasting something that never happened: how we estimated past promotions profitability",
    "url": "https://medium.com/artefact-engineering-and-data-science/forecasting-something-that-never-happened-how-we-estimated-past-promotions-profitability-5f55cfa1d477",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/artefact-engineering-and-data-science/forecasting-something-that-never-happened-how-we-estimated-past-promotions-profitability-5f55cfa1d477",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 127,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Find high-value merchants",
    "title": "Building the Model Behind DoorDash's Expansive Merchant Selection",
    "url": "https://doordash.engineering/2022/04/19/building-merchant-selection/",
    "year": 2022,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Feature Store for storing merchant features and consumer intent data.",
      "Snowflake for processing features during predictions.",
      "Monitoring dashboards for tracking model performance metrics.",
      "MLflow for managing the machine learning lifecycle."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash developed machine learning models to optimize merchant selection, ensuring that the platform's offerings align with customer demand.",
      "The models evaluate merchant characteristics and market potential, enabling sales teams to onboard high-value merchants efficiently.",
      "Feature engineering is crucial for model predictions, requiring scalable infrastructure to adapt to both local and global markets.",
      "Daily predictions and model performance monitoring are essential for maintaining the accuracy and relevance of the merchant selection process."
    ],
    "summary": "DoorDash developed machine learning models to optimize merchant selection, ensuring that the platform's offerings align with customer demand. The models evaluate merchant characteristics and market potential, enabling sales teams to onboard high-value merchants efficiently. Feature engineering is crucial for model predictions, requiring scalable infrastructure to adapt to both local and global markets. Daily predictions and model performance monitoring are essential for maintaining the accuracy and relevance of the merchant selection process.",
    "infraDetails": [
      "Feature Store for storing merchant features and consumer intent data.",
      "Snowflake for processing features during predictions.",
      "Monitoring dashboards for tracking model performance metrics.",
      "MLflow for managing the machine learning lifecycle."
    ],
    "systemComponents": [
      {
        "name": "Feature Store",
        "responsibility": "Stores and manages features related to merchants and consumer intent."
      },
      {
        "name": "Model Management System",
        "responsibility": "Handles the training and deployment of machine learning models."
      },
      {
        "name": "Prediction System",
        "responsibility": "Generates daily predictions for off-platform merchants based on the latest data."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks model performance metrics to ensure ongoing accuracy and effectiveness."
      },
      {
        "name": "Data Processing System",
        "responsibility": "Processes features and prepares data for model training and predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://doordash.engineering/2022/04/19/building-merchant-selection/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 128,
    "company": "Grammarly",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Suggest text edits",
    "title": "Under the Hood of the Grammarly Editor, Part Two: How Suggestions Work",
    "url": "https://www.grammarly.com/blog/engineering/how-suggestions-work-grammarly-editor/",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Grammarly uses an operational transformation (OT) protocol with a Delta format to manage text changes and suggestions in real-time.",
      "The system ensures that suggestions are relevant and correct by maintaining a Suggestions Repository and using a Delta Manager to manage updates.",
      "Complex suggestions can be applied seamlessly, and the architecture is designed to handle multiple suggestions at once without compromising user experience."
    ],
    "summary": "Grammarly uses an operational transformation (OT) protocol with a Delta format to manage text changes and suggestions in real-time. The system ensures that suggestions are relevant and correct by maintaining a Suggestions Repository and using a Delta Manager to manage updates. Complex suggestions can be applied seamlessly, and the architecture is designed to handle multiple suggestions at once without compromising user experience.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Suggestions Repository",
        "responsibility": "Stores all suggestions received from the back-end and manages their relevance."
      },
      {
        "name": "Delta Manager",
        "responsibility": "Keeps suggestion Deltas relevant and correct, and handles the rebase procedure."
      },
      {
        "name": "Highlights Manager",
        "responsibility": "Correctly highlights mistakes in the text based on user edits and suggestions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.grammarly.com/blog/engineering/how-suggestions-work-grammarly-editor/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 129,
    "company": "Amazon",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Suggest music to listen to",
    "title": "The Amazon Music conversational recommender is hitting the right notes",
    "url": "https://www.amazon.science/latest-news/how-amazon-music-uses-recommendation-system-machine-learning",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data stores for user listening history",
      "An orchestration layer for managing conversation flows",
      "Monitoring systems for evaluating conversation effectiveness",
      "Feature stores for managing user interaction data"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Amazon Music's conversational recommender leverages machine learning to enhance the music recommendation experience through Alexa.",
      "The system gathers contextual information from users via conversational prompts to provide personalized music suggestions.",
      "Improvements in the recommender's conversational efficiency and the integration of user listening history have significantly enhanced customer satisfaction.",
      "The approach marks a shift from rule-based dialogue systems to a more dynamic, ML-driven conversational model."
    ],
    "summary": "Amazon Music's conversational recommender leverages machine learning to enhance the music recommendation experience through Alexa. The system gathers contextual information from users via conversational prompts to provide personalized music suggestions. Improvements in the recommender's conversational efficiency and the integration of user listening history have significantly enhanced customer satisfaction. The approach marks a shift from rule-based dialogue systems to a more dynamic, ML-driven conversational model.",
    "infraDetails": [
      "Data stores for user listening history",
      "An orchestration layer for managing conversation flows",
      "Monitoring systems for evaluating conversation effectiveness",
      "Feature stores for managing user interaction data"
    ],
    "systemComponents": [
      {
        "name": "Alexa",
        "responsibility": "Voice assistant that interacts with users to gather music preferences."
      },
      {
        "name": "Music Recommender",
        "responsibility": "Generates personalized music suggestions based on user input and listening history."
      },
      {
        "name": "Data Collection System",
        "responsibility": "Collects anonymized data from user interactions to improve recommendation algorithms."
      },
      {
        "name": "Machine Learning Models",
        "responsibility": "Processes user data and conversation context to enhance recommendation accuracy."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.amazon.science/latest-news/how-amazon-music-uses-recommendation-system-machine-learning",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 130,
    "company": "Snap",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Rank relevant ads",
    "title": "Machine Learning for Snapchat Ad Ranking",
    "url": "https://eng.snap.com/machine-learning-snap-ad-ranking",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Distributed engineering systems for model training and inference",
      "Feature generation and management platform",
      "Monitoring and performance tracking infrastructure"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Snapchat's ad ranking system aims to serve relevant ads to users while maintaining privacy and user experience.",
      "The process involves multiple stages including ad eligibility filtering, candidate generation, scoring with ML models, and a real-time auction.",
      "Challenges include managing scale, latency, auction-induced selection bias, and the need for calibrated predictions.",
      "The system employs a feedback loop to continuously improve ML models based on user interactions with ads."
    ],
    "summary": "Snapchat's ad ranking system aims to serve relevant ads to users while maintaining privacy and user experience. The process involves multiple stages including ad eligibility filtering, candidate generation, scoring with ML models, and a real-time auction. Challenges include managing scale, latency, auction-induced selection bias, and the need for calibrated predictions. The system employs a feedback loop to continuously improve ML models based on user interactions with ads.",
    "infraDetails": [
      "Distributed engineering systems for model training and inference",
      "Feature generation and management platform",
      "Monitoring and performance tracking infrastructure"
    ],
    "systemComponents": [
      {
        "name": "Ad Eligibility Filter",
        "responsibility": "Filters ads based on targeting, budget, and compliance with privacy policies."
      },
      {
        "name": "Candidate Generator",
        "responsibility": "Uses lightweight ML models to select a smaller set of candidate ads for scoring."
      },
      {
        "name": "Heavy ML Models",
        "responsibility": "Generates scores for candidate ads based on predicted conversion probabilities and utility."
      },
      {
        "name": "Auction System",
        "responsibility": "Conducts the auction to determine the highest value ad to display to the user."
      },
      {
        "name": "Feedback Loop",
        "responsibility": "Collects interaction data to continuously update and improve ML models."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.snap.com/machine-learning-snap-ad-ranking",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 131,
    "company": "Instacart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Autocomplete user searches in e-commerce",
    "title": "How Instacart Uses Machine Learning-Driven Autocomplete to Help People Fill Their Carts",
    "url": "https://tech.instacart.com/how-instacart-uses-machine-learning-driven-autocomplete-to-help-people-fill-their-carts-9bc56d22bafb",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for search logs and customer queries",
      "Search embeddings model for semantic deduplication"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Instacart's Autocomplete feature enhances the shopping experience by suggesting relevant search queries as users type, helping them find products more efficiently.",
      "The system utilizes past customer searches to generate a comprehensive set of suggestions, ensuring that the autocomplete terms are relatable and relevant.",
      "Challenges such as handling misspellings and semantic deduplication are addressed through fuzzy matching and the use of search embeddings to improve suggestion quality.",
      "A multi-objective ranking model optimizes for both user engagement and conversion rates, resulting in increased items added to carts and improved overall search performance."
    ],
    "summary": "Instacart's Autocomplete feature enhances the shopping experience by suggesting relevant search queries as users type, helping them find products more efficiently. The system utilizes past customer searches to generate a comprehensive set of suggestions, ensuring that the autocomplete terms are relatable and relevant. Challenges such as handling misspellings and semantic deduplication are addressed through fuzzy matching and the use of search embeddings to improve suggestion quality. A multi-objective ranking model optimizes for both user engagement and conversion rates, resulting in increased items added to carts and improved overall search performance.",
    "infraDetails": [
      "Data stores for search logs and customer queries",
      "Search embeddings model for semantic deduplication"
    ],
    "systemComponents": [
      {
        "name": "Autocomplete System",
        "responsibility": "Generates and ranks query suggestions based on user input and past search data."
      },
      {
        "name": "Search Embeddings Model",
        "responsibility": "Identifies semantically similar queries to reduce duplicates and improve suggestion relevance."
      },
      {
        "name": "Fuzzy Matching Algorithm",
        "responsibility": "Handles misspellings in user queries to ensure relevant suggestions are provided."
      },
      {
        "name": "Ranking Model",
        "responsibility": "Optimizes the order of autocomplete suggestions based on user engagement and conversion metrics."
      },
      {
        "name": "Standardized Catalog",
        "responsibility": "Provides a common set of products across different retailers to improve suggestion accuracy for new or smaller retailers."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/how-instacart-uses-machine-learning-driven-autocomplete-to-help-people-fill-their-carts-9bc56d22bafb",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 132,
    "company": "Zillow",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Select tags for product listings",
    "title": "Helping Home Shoppers Find a Home to Love Through Home Insights",
    "url": "https://www.zillow.com/tech/helping-shoppers-find-a-home-using-home-insights/",
    "year": 2022,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Zillow's Home Insights feature enhances the home shopping experience by extracting and highlighting key phrases from property listings.",
      "The process involves keyword extraction using a fine-tuned BERT model, filtering out difficult-to-understand terms, and ranking insights based on regional trending searches.",
      "Home Insights are displayed prominently on property detail pages and listing photocards, making it easier for users to identify unique features of homes.",
      "Future developments aim to personalize Home Insights further based on individual user preferences."
    ],
    "summary": "Zillow's Home Insights feature enhances the home shopping experience by extracting and highlighting key phrases from property listings. The process involves keyword extraction using a fine-tuned BERT model, filtering out difficult-to-understand terms, and ranking insights based on regional trending searches. Home Insights are displayed prominently on property detail pages and listing photocards, making it easier for users to identify unique features of homes. Future developments aim to personalize Home Insights further based on individual user preferences.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Keyword Extraction Module",
        "responsibility": "Extracts key phrases from property descriptions using a fine-tuned BERT model."
      },
      {
        "name": "Filtering System",
        "responsibility": "Filters out difficult-to-understand terms and malformed phrases from the extracted keywords."
      },
      {
        "name": "Ranking Model",
        "responsibility": "Ranks the filtered insights based on user search traffic and regional trends."
      },
      {
        "name": "Display Interface",
        "responsibility": "Presents Home Insights on property detail pages and listing photocards."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.zillow.com/tech/helping-shoppers-find-a-home-using-home-insights/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 133,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Detect account or content fraud",
    "title": "Machine Learning for Fraud Detection in Streaming Services",
    "url": "https://netflixtechblog.medium.com/machine-learning-for-fraud-detection-in-streaming-services-b0b4ef3be3f6",
    "year": 2022,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://netflixtechblog.medium.com/machine-learning-for-fraud-detection-in-streaming-services-b0b4ef3be3f6",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 134,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Improve customer support",
    "title": "How AI Text Generation Models Are Reshaping Customer Support at Airbnb",
    "url": "https://medium.com/airbnb-engineering/how-ai-text-generation-models-are-reshaping-customer-support-at-airbnb-a851db0b4fa3",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/airbnb-engineering/how-ai-text-generation-models-are-reshaping-customer-support-at-airbnb-a851db0b4fa3",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 135,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Predict churn and upsell products",
    "title": "The journey to build an explainable AI-driven recommendation system",
    "url": "https://engineering.linkedin.com/blog/2022/the-journey-to-build-an-explainable-ai-driven-recommendation-sys",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores: ProML, Microsoft Dynamics",
      "Batch processing: Apache Spark",
      "Model serving: CrystalCandle",
      "Feature store: Not specified",
      "Monitoring: Not specified",
      "Orchestration: Not specified",
      "Stream processing: Not specified"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn developed an explainable AI-driven recommendation system to enhance sales efficiency by predicting customer churn and upsell opportunities.",
      "The system, known as Project Account Prioritizer, uses machine learning models to score accounts based on their likelihood to renew or purchase additional products.",
      "To improve trust and usability, the team integrated CrystalCandle, a model explainer that provides narrative-driven insights to help sales representatives understand the reasoning behind model scores.",
      "The combination of these tools has allowed sales teams to act more effectively on customer data, significantly improving their outreach and support efforts."
    ],
    "summary": "LinkedIn developed an explainable AI-driven recommendation system to enhance sales efficiency by predicting customer churn and upsell opportunities. The system, known as Project Account Prioritizer, uses machine learning models to score accounts based on their likelihood to renew or purchase additional products. To improve trust and usability, the team integrated CrystalCandle, a model explainer that provides narrative-driven insights to help sales representatives understand the reasoning behind model scores. The combination of these tools has allowed sales teams to act more effectively on customer data, significantly improving their outreach and support efforts.",
    "infraDetails": [
      "Data stores: ProML, Microsoft Dynamics",
      "Batch processing: Apache Spark",
      "Model serving: CrystalCandle",
      "Feature store: Not specified",
      "Monitoring: Not specified",
      "Orchestration: Not specified",
      "Stream processing: Not specified"
    ],
    "systemComponents": [
      {
        "name": "Project Account Prioritizer",
        "responsibility": "Predicts customer churn and upsell opportunities using machine learning models."
      },
      {
        "name": "CrystalCandle",
        "responsibility": "Provides narrative-driven insights to explain model predictions to sales representatives."
      },
      {
        "name": "Model Importer",
        "responsibility": "Converts model outputs into a standardized format for interpretation."
      },
      {
        "name": "Model Interpreter",
        "responsibility": "Applies model interpretation techniques to generate important feature lists."
      },
      {
        "name": "Narrative Generator",
        "responsibility": "Creates narrative insights based on model outputs and additional features."
      },
      {
        "name": "Narrative Exporter",
        "responsibility": "Distributes narrative insights to various end-user platforms."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2022/the-journey-to-build-an-explainable-ai-driven-recommendation-sys",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 136,
    "company": "Autotrader",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Personalize automotive search results",
    "title": "Real-Time Personalisation of Search Results with Auto Trader's Customer Data Platform",
    "url": "https://engineering.autotrader.co.uk/2022/11/23/real-time-personalisation-of-search-results-with-auto-traders-customer-data-platform.html",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.autotrader.co.uk/2022/11/23/real-time-personalisation-of-search-results-with-auto-traders-customer-data-platform.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 137,
    "company": "Peloton",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Recommend fitness training videos",
    "title": "How We Built: An Early-Stage Machine Learning Model for Recommendations",
    "url": "https://www.onepeloton.com/press/articles/how-we-built-machine-learning",
    "year": 2022,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Batch processing system for generating recommendations",
      "Feature store (not yet implemented)",
      "Model serving infrastructure for deploying the LSTM-based model"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Peloton's Personalization team developed an in-house recommender system to enhance the Daily Picks feature on fitness devices, moving away from AWS Personalize due to limitations in prediction scoring and recommendation freshness.",
      "The new model needed to account for diverse class attributes and user preferences, allowing for personalized recommendations based on factors like music preference and workout duration.",
      "Batch processing was employed to generate and cache recommendations, ensuring daily updates without the complexities of real-time inference.",
      "The team faced challenges related to data availability and the maturity of their data platform, which initially limited the types of data they could use for model training."
    ],
    "summary": "Peloton's Personalization team developed an in-house recommender system to enhance the Daily Picks feature on fitness devices, moving away from AWS Personalize due to limitations in prediction scoring and recommendation freshness. The new model needed to account for diverse class attributes and user preferences, allowing for personalized recommendations based on factors like music preference and workout duration. Batch processing was employed to generate and cache recommendations, ensuring daily updates without the complexities of real-time inference. The team faced challenges related to data availability and the maturity of their data platform, which initially limited the types of data they could use for model training.",
    "infraDetails": [
      "Batch processing system for generating recommendations",
      "Feature store (not yet implemented)",
      "Model serving infrastructure for deploying the LSTM-based model"
    ],
    "systemComponents": [
      {
        "name": "Recommendation Engine",
        "responsibility": "Generates personalized fitness class recommendations based on user preferences and class attributes."
      },
      {
        "name": "Data Platform",
        "responsibility": "Collects and manages user behavioral data for model training and evaluation."
      },
      {
        "name": "Batch Processing System",
        "responsibility": "Handles offline computation of recommendations and caches results for user sessions."
      },
      {
        "name": "Model Serving Infrastructure",
        "responsibility": "Deploys the LSTM-based model for generating recommendations."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.onepeloton.com/press/articles/how-we-built-machine-learning",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 138,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Categorize e-commerce products",
    "title": "Semantic Label Representation with an Application on Multimodal Product Categorization",
    "url": "https://medium.com/walmartglobaltech/semantic-label-representation-with-an-application-on-multimodal-product-categorization-63d668b943b7",
    "year": 2022,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/walmartglobaltech/semantic-label-representation-with-an-application-on-multimodal-product-categorization-63d668b943b7",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 139,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Search food and grocery items",
    "title": "3 Changes to Expand DoorDash's Product Search Beyond Delivery",
    "url": "https://doordash.engineering/2022/05/10/3-changes-to-expand-doordashs-product-search/",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Active/nextgen indexing system",
      "Federated search architecture",
      "Search storage engine",
      "Search evaluation framework"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash is expanding its product search capabilities beyond food delivery to include groceries, alcohol, and pet food, necessitating a significant upgrade to its search infrastructure.",
      "The new system incorporates machine learning techniques for improved relevance ranking and query understanding, addressing challenges posed by the vast number of new SKUs.",
      "Key improvements include active/nextgen indexing for faster updates, federated search for retrieving results across multiple verticals, and a new search storage engine to enhance performance.",
      "The updated architecture allows for modular customization of relevance for different business verticals and supports graceful degradation during production issues."
    ],
    "summary": "DoorDash is expanding its product search capabilities beyond food delivery to include groceries, alcohol, and pet food, necessitating a significant upgrade to its search infrastructure. The new system incorporates machine learning techniques for improved relevance ranking and query understanding, addressing challenges posed by the vast number of new SKUs. Key improvements include active/nextgen indexing for faster updates, federated search for retrieving results across multiple verticals, and a new search storage engine to enhance performance. The updated architecture allows for modular customization of relevance for different business verticals and supports graceful degradation during production issues.",
    "infraDetails": [
      "Active/nextgen indexing system",
      "Federated search architecture",
      "Search storage engine",
      "Search evaluation framework"
    ],
    "systemComponents": [
      {
        "name": "Search Infrastructure",
        "responsibility": "Handles indexing, retrieval, and storage of search results across multiple product verticals."
      },
      {
        "name": "Federated Search System",
        "responsibility": "Enables efficient retrieval of search results from various verticals and blends them for final output."
      },
      {
        "name": "Search Storage Engine",
        "responsibility": "Provides a robust storage solution tailored for search applications, addressing limitations of previous systems."
      },
      {
        "name": "Indexing Control Plane",
        "responsibility": "Manages the state and transitions between old and new indexes to minimize errors during updates."
      },
      {
        "name": "Learning-to-Rank Module",
        "responsibility": "Implements ranking algorithms to enhance the relevance of search results based on user queries."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://doordash.engineering/2022/05/10/3-changes-to-expand-doordashs-product-search/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 140,
    "company": "Faire",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Rank e-commerce items (feature store)",
    "title": "Real-time ranking at Faire part 2: the feature store",
    "url": "https://craft.faire.com/real-time-ranking-at-faire-part-2-the-feature-store-3f1013d3fe5d",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://craft.faire.com/real-time-ranking-at-faire-part-2-the-feature-store-3f1013d3fe5d",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 141,
    "company": "New York Times",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Personalize paywall limits",
    "title": "How The New York Times Uses Machine Learning To Make Its Paywall Smarter",
    "url": "https://open.nytimes.com/how-the-new-york-times-uses-machine-learning-to-make-its-paywall-smarter-e5771d5f46f8",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "First-party data store for user engagement metrics",
      "Randomized Control Trial (R.C.T.) data for model training and backtesting",
      "Monitoring system for performance metrics like conversion rate and engagement",
      "Orchestration tools for model deployment and updates"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The New York Times uses a causal machine learning model called the Dynamic Meter to personalize paywall limits for registered users.",
      "This model optimizes for both user engagement and subscription conversion rates, balancing the trade-off between the two.",
      "The Dynamic Meter prescribes meter limits based on first-party engagement data, allowing for smarter paywall strategies.",
      "Backtesting is employed to estimate the model's performance using historical data, ensuring effective deployment.",
      "The approach allows The Times to flexibly adjust the level of friction in the paywall based on business goals."
    ],
    "summary": "The New York Times uses a causal machine learning model called the Dynamic Meter to personalize paywall limits for registered users. This model optimizes for both user engagement and subscription conversion rates, balancing the trade-off between the two. The Dynamic Meter prescribes meter limits based on first-party engagement data, allowing for smarter paywall strategies. Backtesting is employed to estimate the model's performance using historical data, ensuring effective deployment. The approach allows The Times to flexibly adjust the level of friction in the paywall based on business goals.",
    "infraDetails": [
      "First-party data store for user engagement metrics",
      "Randomized Control Trial (R.C.T.) data for model training and backtesting",
      "Monitoring system for performance metrics like conversion rate and engagement",
      "Orchestration tools for model deployment and updates"
    ],
    "systemComponents": [
      {
        "name": "Dynamic Meter",
        "responsibility": "Prescribes personalized meter limits for users to optimize engagement and subscription rates."
      },
      {
        "name": "Data Store",
        "responsibility": "Houses first-party engagement data used for training the machine learning models."
      },
      {
        "name": "Randomized Control Trial (R.C.T.)",
        "responsibility": "Provides historical data for model training and performance estimation."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks key performance indicators such as conversion rates and user engagement."
      },
      {
        "name": "Orchestration Tools",
        "responsibility": "Facilitates the deployment and management of machine learning models."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://open.nytimes.com/how-the-new-york-times-uses-machine-learning-to-make-its-paywall-smarter-e5771d5f46f8",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 142,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Predict ad click-through rate",
    "title": "Challenges and practical lessons from building a deep-learning-based ads CTR prediction model",
    "url": "https://engineering.linkedin.com/blog/2022/challenges-and-practical-lessons-from-building-a-deep-learning-b",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Key-value store for embedding features",
      "Kafka for tracking events",
      "GDMix for model training and serving"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn transitioned from a GLMix model to a deep-learning-based CTR prediction model, achieving an 8.5% lift in CTR.",
      "The new model features a three-tower architecture (deep, wide, and shallow) to address challenges in feature interaction, memorization, and calibration.",
      "Frequent retraining of the wide tower ensures freshness of sparse ID features, while the shallow tower helps mitigate over-prediction issues in the model.",
      "Calibration remains a challenge due to exposure bias, which affects the model's ability to generalize from offline to online data."
    ],
    "summary": "LinkedIn transitioned from a GLMix model to a deep-learning-based CTR prediction model, achieving an 8.5% lift in CTR. The new model features a three-tower architecture (deep, wide, and shallow) to address challenges in feature interaction, memorization, and calibration. Frequent retraining of the wide tower ensures freshness of sparse ID features, while the shallow tower helps mitigate over-prediction issues in the model. Calibration remains a challenge due to exposure bias, which affects the model's ability to generalize from offline to online data.",
    "infraDetails": [
      "Key-value store for embedding features",
      "Kafka for tracking events",
      "GDMix for model training and serving"
    ],
    "systemComponents": [
      {
        "name": "Deep Tower",
        "responsibility": "Handles complete feature interaction using a multilayer perceptron."
      },
      {
        "name": "Wide Tower",
        "responsibility": "Memorizes historical performance of ads using sparse ID features and undergoes frequent retraining."
      },
      {
        "name": "Shallow Tower",
        "responsibility": "Calibrates predictions to reduce over-prediction and improve accuracy."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2022/challenges-and-practical-lessons-from-building-a-deep-learning-b",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 143,
    "company": "Zillow",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Identify customers that are likely to convert",
    "title": "Identifying High-Intent Buyers",
    "url": "https://www.zillow.com/tech/identifying-high-intent-buyers/",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for user interaction data",
      "Feature processing pipeline",
      "Propensity model training infrastructure",
      "Model serving infrastructure for predictions",
      "Monitoring tools for model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Zillow aims to identify high-intent buyers among millions of users to personalize their experience and assist in their real estate journey.",
      "The identification process utilizes a propensity model that predicts the likelihood of users transacting based on their past behaviors.",
      "Input features for the model include onsite and offsite activities, as well as user preferences, which are processed to create a comprehensive feature vector.",
      "The model is trained using a binary classification approach, focusing on a refined set of features to improve efficiency and interpretability."
    ],
    "summary": "Zillow aims to identify high-intent buyers among millions of users to personalize their experience and assist in their real estate journey. The identification process utilizes a propensity model that predicts the likelihood of users transacting based on their past behaviors. Input features for the model include onsite and offsite activities, as well as user preferences, which are processed to create a comprehensive feature vector. The model is trained using a binary classification approach, focusing on a refined set of features to improve efficiency and interpretability.",
    "infraDetails": [
      "Data stores for user interaction data",
      "Feature processing pipeline",
      "Propensity model training infrastructure",
      "Model serving infrastructure for predictions",
      "Monitoring tools for model performance"
    ],
    "systemComponents": [
      {
        "name": "User Interaction Data Store",
        "responsibility": "Stores user activity data for analysis and model training."
      },
      {
        "name": "Feature Processing Pipeline",
        "responsibility": "Processes raw user interaction data into usable features for the propensity model."
      },
      {
        "name": "Propensity Model",
        "responsibility": "Predicts the likelihood of users becoming high-intent buyers based on their behaviors."
      },
      {
        "name": "Model Serving Infrastructure",
        "responsibility": "Delivers predictions from the trained model to the application in real-time."
      },
      {
        "name": "Monitoring Tools",
        "responsibility": "Tracks model performance and user engagement metrics to ensure accuracy and effectiveness."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.zillow.com/tech/identifying-high-intent-buyers/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 144,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Recommend content to view",
    "title": "Reinforcement Learning for Budget Constrained Recommendations",
    "url": "https://netflixtechblog.com/reinforcement-learning-for-budget-constrained-recommendations-6cbc5263a32a",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Netflix employs reinforcement learning to optimize content recommendations within a user's finite time budget.",
      "The recommendation system balances the relevance of items against their evaluation cost, aiming to maximize user engagement.",
      "The problem is modeled as a Markov Decision Process, where the agent (recommender system) interacts with the user to construct a slate of recommendations.",
      "The system uses Temporal Difference learning to estimate value functions, allowing for effective slate construction based on user feedback.",
      "Simulations are utilized to study and refine the recommendation algorithms, focusing on metrics like play-rate and effective slate size."
    ],
    "summary": "Netflix employs reinforcement learning to optimize content recommendations within a user's finite time budget. The recommendation system balances the relevance of items against their evaluation cost, aiming to maximize user engagement. The problem is modeled as a Markov Decision Process, where the agent (recommender system) interacts with the user to construct a slate of recommendations. The system uses Temporal Difference learning to estimate value functions, allowing for effective slate construction based on user feedback. Simulations are utilized to study and refine the recommendation algorithms, focusing on metrics like play-rate and effective slate size.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Item Scorer",
        "responsibility": "Scores available items based on relevance and cost for slate construction."
      },
      {
        "name": "Sampler",
        "responsibility": "Selects items from the scored list using methods like Epsilon-Greedy."
      },
      {
        "name": "Recommender Agent",
        "responsibility": "Constructs slates of recommendations based on user interaction and feedback."
      },
      {
        "name": "User Model",
        "responsibility": "Predicts user engagement and feedback based on historical data."
      },
      {
        "name": "Simulation Engine",
        "responsibility": "Generates simulated data for training and evaluating recommendation algorithms."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://netflixtechblog.com/reinforcement-learning-for-budget-constrained-recommendations-6cbc5263a32a",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 145,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Forecast anomalies in refrigeration",
    "title": "Forecast Anomalies in Refrigeration with PySpark & Sensor-data",
    "url": "https://medium.com/walmartglobaltech/forecast-anomalies-in-refrigeration-with-pyspark-sensor-data-195f23ae24e2",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/walmartglobaltech/forecast-anomalies-in-refrigeration-with-pyspark-sensor-data-195f23ae24e2",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 146,
    "company": "Stitch Fix",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend e-commerce items",
    "title": "Client Time Series Model: a Multi-Target Recommender System based on Temporally-Masked Encoders",
    "url": "https://multithreaded.stitchfix.com/blog/2022/10/14/client-time-series-model/",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Single inference endpoint",
      "Raw feature input with minimal preprocessing",
      "Centralized training pipeline"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Stitch Fix's Client Time Series Model (CTSM) is a multi-target recommender system that focuses on the time dimension of client interactions to improve recommendation quality and system maintainability.",
      "CTSM utilizes a unified client embedding that updates with each interaction, allowing for better integration of diverse data sources and reducing the complexity of maintaining multiple models.",
      "The model employs a Temporally-Masked Encoder (TME) for efficient processing of client updates, enabling instant reflection of client interactions in recommendations across platforms.",
      "CTSM has shown significant improvements in key performance indicators, resource consumption, and maintenance requirements compared to previous models."
    ],
    "summary": "Stitch Fix's Client Time Series Model (CTSM) is a multi-target recommender system that focuses on the time dimension of client interactions to improve recommendation quality and system maintainability. CTSM utilizes a unified client embedding that updates with each interaction, allowing for better integration of diverse data sources and reducing the complexity of maintaining multiple models. The model employs a Temporally-Masked Encoder (TME) for efficient processing of client updates, enabling instant reflection of client interactions in recommendations across platforms. CTSM has shown significant improvements in key performance indicators, resource consumption, and maintenance requirements compared to previous models.",
    "infraDetails": [
      "Single inference endpoint",
      "Raw feature input with minimal preprocessing",
      "Centralized training pipeline"
    ],
    "systemComponents": [
      {
        "name": "Client Embedding",
        "responsibility": "Represents the client state and updates with each interaction."
      },
      {
        "name": "Temporally-Masked Encoder",
        "responsibility": "Processes client updates and maintains time-safe embeddings."
      },
      {
        "name": "Inference Endpoint",
        "responsibility": "Serves recommendations based on the latest client embeddings."
      },
      {
        "name": "Training Pipeline",
        "responsibility": "Handles the training of the unified model with raw features."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://multithreaded.stitchfix.com/blog/2022/10/14/client-time-series-model/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 147,
    "company": "Gojek",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict estimated time of delivery",
    "title": "How We Estimate Food Debarkation Time With 'Tensoba'",
    "url": "https://medium.com/gojekengineering/how-we-estimate-food-debarkation-time-with-tensoba-da05674cb758",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for historical order data",
      "Real-time data processing systems for order features",
      "Feature store for storing and managing features used in model training",
      "Model serving infrastructure for deploying Tensoba models",
      "Monitoring systems for tracking model performance and compliance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Gojek's Tensoba system aims to accurately predict food delivery times to enhance customer satisfaction and trust.",
      "The system differentiates between two types of Estimated Time of Arrival (ETA): ETA Discovery and ETA Checkout, each serving different customer needs.",
      "Tensoba utilizes machine learning regression techniques, incorporating various order-level and merchant-level features to improve ETA accuracy.",
      "The model performance is evaluated using both offline metrics (like RMSE, MAE, MAPE) and online metrics (compliance and conversion rates).",
      "Tensoba has successfully reduced ETA error from 31% to 23% compared to previous benchmarks."
    ],
    "summary": "Gojek's Tensoba system aims to accurately predict food delivery times to enhance customer satisfaction and trust. The system differentiates between two types of Estimated Time of Arrival (ETA): ETA Discovery and ETA Checkout, each serving different customer needs. Tensoba utilizes machine learning regression techniques, incorporating various order-level and merchant-level features to improve ETA accuracy. The model performance is evaluated using both offline metrics (like RMSE, MAE, MAPE) and online metrics (compliance and conversion rates). Tensoba has successfully reduced ETA error from 31% to 23% compared to previous benchmarks.",
    "infraDetails": [
      "Data stores for historical order data",
      "Real-time data processing systems for order features",
      "Feature store for storing and managing features used in model training",
      "Model serving infrastructure for deploying Tensoba models",
      "Monitoring systems for tracking model performance and compliance"
    ],
    "systemComponents": [
      {
        "name": "Tensoba Model",
        "responsibility": "Predicts ETA based on historical and real-time data."
      },
      {
        "name": "ETA Discovery",
        "responsibility": "Provides customers with estimated delivery times before checkout."
      },
      {
        "name": "ETA Checkout",
        "responsibility": "Gives customers precise delivery time estimates during the checkout process."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and compliance with actual delivery times."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/gojekengineering/how-we-estimate-food-debarkation-time-with-tensoba-da05674cb758",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 148,
    "company": "Zillow",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Extract text features",
    "title": "Incorporating Listing Descriptions into the Zestimate",
    "url": "https://www.zillow.com/tech/incorporating-listing-descriptions-into-the-zestimate/",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Home Insights pipeline for extracting and ranking terms",
      "Feature stores for managing extracted features",
      "Embedding vector representations for text features",
      "Dimensionality reduction techniques like PCA for feature optimization"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Zillow is exploring ways to incorporate detailed listing descriptions into its Zestimate valuation model to enhance accuracy.",
      "Traditional methods like regular expressions are limited in flexibility, prompting the use of advanced natural language processing techniques.",
      "The Home Insights product developed by Zillow's Personalization team aids in extracting and categorizing relevant terms from listing descriptions.",
      "By leveraging a real estate taxonomy, Zillow aims to identify and classify features mentioned in descriptions, improving model explainability and performance.",
      "The collaboration between teams at Zillow exemplifies the benefits of integrating insights from different domains to enhance machine learning applications."
    ],
    "summary": "Zillow is exploring ways to incorporate detailed listing descriptions into its Zestimate valuation model to enhance accuracy. Traditional methods like regular expressions are limited in flexibility, prompting the use of advanced natural language processing techniques. The Home Insights product developed by Zillow's Personalization team aids in extracting and categorizing relevant terms from listing descriptions. By leveraging a real estate taxonomy, Zillow aims to identify and classify features mentioned in descriptions, improving model explainability and performance. The collaboration between teams at Zillow exemplifies the benefits of integrating insights from different domains to enhance machine learning applications.",
    "infraDetails": [
      "Home Insights pipeline for extracting and ranking terms",
      "Feature stores for managing extracted features",
      "Embedding vector representations for text features",
      "Dimensionality reduction techniques like PCA for feature optimization"
    ],
    "systemComponents": [
      {
        "name": "Home Insights",
        "responsibility": "Extracts and ranks distinguishing terms from property listing descriptions."
      },
      {
        "name": "Valuation Team",
        "responsibility": "Implements and tests new features in the Zestimate model."
      },
      {
        "name": "Personalization Team",
        "responsibility": "Develops tools and models that enhance user experience through tailored insights."
      },
      {
        "name": "NLP Models",
        "responsibility": "Processes and analyzes text data to extract meaningful features."
      },
      {
        "name": "Real Estate Taxonomy",
        "responsibility": "Organizes terms into a hierarchical structure for better feature classification."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.zillow.com/tech/incorporating-listing-descriptions-into-the-zestimate/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 149,
    "company": "Etsy",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Rank marketplace search results",
    "title": "Deep Learning for Search Ranking at Etsy",
    "url": "https://www.etsy.com/uk/codeascraft/deep-learning-for-search-ranking-at-etsy",
    "year": 2022,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://www.etsy.com/uk/codeascraft/deep-learning-for-search-ranking-at-etsy",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 150,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Curate e-commerce product recommendations",
    "title": "Scaling Product Recommendations using Basket Analysis- Part 1",
    "url": "https://medium.com/walmartglobaltech/scaling-product-recommendations-using-basket-analysis-part-1-8434d4f8756f",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/walmartglobaltech/scaling-product-recommendations-using-basket-analysis-part-1-8434d4f8756f",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 151,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Optimize trip price",
    "title": "Pricing at Lyft",
    "url": "https://eng.lyft.com/pricing-at-lyft-8a4022065f8b",
    "year": 2022,
    "category": "optimization_pricing",
    "categoryLabel": "Optimization and pricing",
    "components": [
      "Flink",
      "Spark",
      "Redis"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft's pricing system aims to optimize trip prices by balancing supply and demand while ensuring reliability, fairness, and competitiveness.",
      "The pricing architecture consists of three layers: Pricing Orchestration, Pricing Operations, and Algorithmic Pricing, which work together to achieve pricing goals.",
      "The system leverages real-time algorithms and machine learning to adapt to market volatility and improve pricing decisions based on dynamic conditions.",
      "Online reinforcement learning is utilized to continuously test and adjust pricing strategies in response to real-time market data."
    ],
    "summary": "Lyft's pricing system aims to optimize trip prices by balancing supply and demand while ensuring reliability, fairness, and competitiveness. The pricing architecture consists of three layers: Pricing Orchestration, Pricing Operations, and Algorithmic Pricing, which work together to achieve pricing goals. The system leverages real-time algorithms and machine learning to adapt to market volatility and improve pricing decisions based on dynamic conditions. Online reinforcement learning is utilized to continuously test and adjust pricing strategies in response to real-time market data.",
    "infraDetails": [
      "Flink",
      "Spark",
      "Redis"
    ],
    "systemComponents": [
      {
        "name": "API Layer",
        "responsibility": "Provides access to market signals and session-level information."
      },
      {
        "name": "Cache Layer",
        "responsibility": "Ensures price stability and consistency while reducing latency through caching."
      },
      {
        "name": "Calculation Layer",
        "responsibility": "Fetches information from the cache and executes price calculations."
      },
      {
        "name": "Storage",
        "responsibility": "Records details of price quotes in a compliant and efficient manner."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/pricing-at-lyft-8a4022065f8b",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 152,
    "company": "Grammarly",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Correct grammatical errors",
    "title": "Innovating the Basics: Achieving Superior Precision and Recall in Grammatical Error Correction",
    "url": "https://www.grammarly.com/blog/engineering/innovating-the-basics/",
    "year": 2022,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Data stores for evaluation datasets",
      "Batch processing systems for model training",
      "Real-time monitoring systems for user interaction",
      "Feature stores for storing linguistic rules and patterns",
      "Model serving infrastructure for deploying GEC models"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grammarly focuses on achieving high precision and recall in grammatical error correction (GEC) to maintain user trust.",
      "The GEC system combines various approaches, including sequence-to-sequence rewriting, sequence tagging, and pattern-based rules.",
      "User interaction and feedback play a critical role in refining GEC suggestions and improving overall system performance."
    ],
    "summary": "Grammarly focuses on achieving high precision and recall in grammatical error correction (GEC) to maintain user trust. The GEC system combines various approaches, including sequence-to-sequence rewriting, sequence tagging, and pattern-based rules. User interaction and feedback play a critical role in refining GEC suggestions and improving overall system performance.",
    "infraDetails": [
      "Data stores for evaluation datasets",
      "Batch processing systems for model training",
      "Real-time monitoring systems for user interaction",
      "Feature stores for storing linguistic rules and patterns",
      "Model serving infrastructure for deploying GEC models"
    ],
    "systemComponents": [
      {
        "name": "Sequence-to-sequence model",
        "responsibility": "Translates text with errors into error-free text through complete rewrites."
      },
      {
        "name": "Sequence tagging system",
        "responsibility": "Identifies and corrects specific errors in sentences individually."
      },
      {
        "name": "Pattern-based rules engine",
        "responsibility": "Applies syntax rules to detect and suggest corrections for grammatical mistakes."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.grammarly.com/blog/engineering/innovating-the-basics/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 153,
    "company": "Twitter",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Recommend accounts to follow",
    "title": "Model-based candidate generation for account recommendations",
    "url": "https://blog.twitter.com/engineering/en_us/topics/insights/2022/model-based-candidate-generation-for-account-recommendations",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Two-stage recommendation pipeline",
      "Feature store for embedding features",
      "Monitoring system for engagement metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Twitter's account recommendation system employs a two-stage recommendation pipeline consisting of candidate generation and ranking phases.",
      "The new model-based framework enhances personalization by integrating multiple features, allowing for a more holistic view of user interests.",
      "A two-tower model is utilized, focusing on consumer and producer behaviors to improve the relevance of recommendations.",
      "The unified framework has led to increased global engagement and reduced maintenance overhead by retiring older heuristics."
    ],
    "summary": "Twitter's account recommendation system employs a two-stage recommendation pipeline consisting of candidate generation and ranking phases. The new model-based framework enhances personalization by integrating multiple features, allowing for a more holistic view of user interests. A two-tower model is utilized, focusing on consumer and producer behaviors to improve the relevance of recommendations. The unified framework has led to increased global engagement and reduced maintenance overhead by retiring older heuristics.",
    "infraDetails": [
      "Two-stage recommendation pipeline",
      "Feature store for embedding features",
      "Monitoring system for engagement metrics"
    ],
    "systemComponents": [
      {
        "name": "Candidate Generation Model",
        "responsibility": "Retrieves a set of highly relevant account candidates based on user interests."
      },
      {
        "name": "Ranking Model",
        "responsibility": "Ranks the retrieved candidates in real-time to produce final recommendations."
      },
      {
        "name": "Consumer Tower",
        "responsibility": "Generates embeddings reflecting user consumption behaviors."
      },
      {
        "name": "Producer Tower",
        "responsibility": "Generates embeddings reflecting account production behaviors."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://blog.twitter.com/engineering/en_us/topics/insights/2022/model-based-candidate-generation-for-account-recommendations",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 154,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Improve customer travel experience",
    "title": "Intelligent Automation Platform: Empowering Conversational AI and Beyond at Airbnb",
    "url": "https://medium.com/airbnb-engineering/intelligent-automation-platform-empowering-conversational-ai-and-beyond-at-airbnb-869c44833ff2",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/airbnb-engineering/intelligent-automation-platform-empowering-conversational-ai-and-beyond-at-airbnb-869c44833ff2",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 155,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Flag incorrectly captured locations",
    "title": "Using deep learning to detect dissonance between address text and location",
    "url": "https://bytes.swiggy.com/using-deep-learning-to-detect-dissonance-between-address-text-and-location-4b228bc2c3fb",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data stores for storing address and delivery data",
      "Monitoring system for tracking delivery accuracy and customer feedback",
      "Feature store for managing input features used in model training"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Swiggy uses deep learning to detect discrepancies between customer-entered addresses and their GPS locations during order onboarding.",
      "Incorrect customer locations can lead to delivery issues, impacting both customer experience and delivery partner efficiency.",
      "The system classifies address-location pairs as accurate or inaccurate using a binary classification model trained on synthesized datasets.",
      "Label-0 datasets are created from successfully delivered orders, while label-1 datasets are generated by perturbing label-0 locations to identify inaccuracies."
    ],
    "summary": "Swiggy uses deep learning to detect discrepancies between customer-entered addresses and their GPS locations during order onboarding. Incorrect customer locations can lead to delivery issues, impacting both customer experience and delivery partner efficiency. The system classifies address-location pairs as accurate or inaccurate using a binary classification model trained on synthesized datasets. Label-0 datasets are created from successfully delivered orders, while label-1 datasets are generated by perturbing label-0 locations to identify inaccuracies.",
    "infraDetails": [
      "Data stores for storing address and delivery data",
      "Monitoring system for tracking delivery accuracy and customer feedback",
      "Feature store for managing input features used in model training"
    ],
    "systemComponents": [
      {
        "name": "Address Validation Model",
        "responsibility": "Classifies the accuracy of captured customer locations against entered addresses."
      },
      {
        "name": "Data Aggregation Engine",
        "responsibility": "Synthesizes label-0 and label-1 datasets from delivery data."
      },
      {
        "name": "Geohash Encoder",
        "responsibility": "Converts geographic coordinates into string format for model input."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks model performance and delivery accuracy metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/using-deep-learning-to-detect-dissonance-between-address-text-and-location-4b228bc2c3fb",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 156,
    "company": "Uber",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Verify documents",
    "title": "Uber's Real-Time Document Check",
    "url": "https://www.uber.com/en-GB/blog/ubers-real-time-document-check/",
    "year": 2022,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Verification Results database for storing verification data and results."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Uber's Real-Time Document Check aims to enhance rider safety by verifying identities through a robust document verification process.",
      "The system is designed to meet criteria such as data privacy, real-time verification, and global coverage, accommodating various national IDs and documents.",
      "A mobile client-side machine learning model is utilized to ensure high-quality image capture for document verification, reducing failures due to poor image quality.",
      "The solution incorporates both automated and human-in-the-loop processes to handle diverse document types and user scenarios effectively."
    ],
    "summary": "Uber's Real-Time Document Check aims to enhance rider safety by verifying identities through a robust document verification process. The system is designed to meet criteria such as data privacy, real-time verification, and global coverage, accommodating various national IDs and documents. A mobile client-side machine learning model is utilized to ensure high-quality image capture for document verification, reducing failures due to poor image quality. The solution incorporates both automated and human-in-the-loop processes to handle diverse document types and user scenarios effectively.",
    "infraDetails": [
      "Verification Results database for storing verification data and results."
    ],
    "systemComponents": [
      {
        "name": "Document Image Collection",
        "responsibility": "Interface for users to capture and upload document images."
      },
      {
        "name": "Document Image Processing",
        "responsibility": "Processes uploaded images for classification, transcription, and fraud detection."
      },
      {
        "name": "Verification Results Database",
        "responsibility": "Stores all data related to document verification and results."
      },
      {
        "name": "Client-side ML Model",
        "responsibility": "Checks image quality before capture to ensure high-quality document images."
      },
      {
        "name": "Server-side Push System",
        "responsibility": "Delivers verification results to users after processing."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.uber.com/en-GB/blog/ubers-real-time-document-check/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 157,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Optimize email sending time and frequency",
    "title": "Nightingale: Scalable Daily Sales Email Sending Decision Model",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/nightingale-scalable-daily-email-sending-decision-model",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Retraining Pipeline",
      "Feature Platform (Mercury)",
      "BigQuery for seed table generation",
      "Model performance monitoring dashboards"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed the Nightingale model to optimize daily sales email sending decisions, enhancing customer engagement and reducing unsubscribe rates.",
      "The model leverages historical customer interaction data to predict customer behavior and determine optimal email sending times and frequencies.",
      "An automated retraining pipeline was established to ensure the model remains effective by utilizing the latest customer data and adapting to changing behaviors.",
      "Nightingale demonstrates improved performance metrics, including a reduction in unsubscribe costs while maintaining revenue and engagement levels."
    ],
    "summary": "Wayfair developed the Nightingale model to optimize daily sales email sending decisions, enhancing customer engagement and reducing unsubscribe rates. The model leverages historical customer interaction data to predict customer behavior and determine optimal email sending times and frequencies. An automated retraining pipeline was established to ensure the model remains effective by utilizing the latest customer data and adapting to changing behaviors. Nightingale demonstrates improved performance metrics, including a reduction in unsubscribe costs while maintaining revenue and engagement levels.",
    "infraDetails": [
      "Retraining Pipeline",
      "Feature Platform (Mercury)",
      "BigQuery for seed table generation",
      "Model performance monitoring dashboards"
    ],
    "systemComponents": [
      {
        "name": "Nightingale Model",
        "responsibility": "Predicts customer behavior regarding purchases and unsubscribes from daily sales emails."
      },
      {
        "name": "Horus Model",
        "responsibility": "Estimates expected Gross Revenue Stable (GRS) for customers."
      },
      {
        "name": "Osiris Model",
        "responsibility": "Estimates expected unsubscribe costs for customers."
      },
      {
        "name": "Retraining Pipeline",
        "responsibility": "Automates the retraining process for the Nightingale model using the latest data."
      },
      {
        "name": "Daily Sales Notification Platform",
        "responsibility": "Executes the actual sending of customer emails based on model decisions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/nightingale-scalable-daily-email-sending-decision-model",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 158,
    "company": "Didact AI",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Predict stock prices",
    "title": "Didact AI: The anatomy of an ML-powered stock picking engine",
    "url": "https://principiamundi.com/posts/didact-anatomy",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data ingestion pipeline",
      "Feature engineering pipeline",
      "Monitoring system",
      "Backup/Restore workflow"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Didact AI developed a machine learning-powered stock picking engine that consistently outperformed the S&P 500 over a year.",
      "The system's architecture emphasizes rapid experimentation in feature engineering and execution speed.",
      "Key components include a data ingestion pipeline, feature engineering pipeline, and modeling subsystems, which are crucial for processing financial market data.",
      "Despite its success, Didact AI was eventually shut down due to perceived lack of product-market fit."
    ],
    "summary": "Didact AI developed a machine learning-powered stock picking engine that consistently outperformed the S&P 500 over a year. The system's architecture emphasizes rapid experimentation in feature engineering and execution speed. Key components include a data ingestion pipeline, feature engineering pipeline, and modeling subsystems, which are crucial for processing financial market data. Despite its success, Didact AI was eventually shut down due to perceived lack of product-market fit.",
    "infraDetails": [
      "Data ingestion pipeline",
      "Feature engineering pipeline",
      "Monitoring system",
      "Backup/Restore workflow"
    ],
    "systemComponents": [
      {
        "name": "Pythia",
        "responsibility": "Forecasting model"
      },
      {
        "name": "Cassandra",
        "responsibility": "Regime model"
      },
      {
        "name": "Socrates",
        "responsibility": "Model explanations"
      },
      {
        "name": "Feature Explorer",
        "responsibility": "Exploration and diagnostics of features"
      },
      {
        "name": "Workflow Monitoring",
        "responsibility": "Monitoring system health and performance"
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://principiamundi.com/posts/didact-anatomy",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 159,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Identify specific entities within a text",
    "title": "Wayfair's New Approach to Aspect Based Sentiment Analysis Helps Customers Easily Find \"Long Tail\" Products",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/wayfairs-new-approach-to-aspect-based-sentiment-analysis-helps-customers-easily-find-long-tail-products",
    "year": 2022,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data stores for customer reviews and product information",
      "Batch processing systems for model training",
      "Real-time streaming systems for processing incoming reviews",
      "Feature stores for managing and serving features used in models",
      "Model serving infrastructure for deploying ABSA models",
      "Monitoring systems for tracking model performance and user interactions"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair employs Aspect Based Sentiment Analysis (ABSA) to enhance product discovery for niche customer segments.",
      "ABSA allows for the identification of specific product aspects and their associated sentiments, improving the relevance of product recommendations.",
      "The model combines aspect extraction and sentiment analysis into a single process, increasing efficiency and accuracy.",
      "Wayfair's approach has led to significant improvements in model performance, as evidenced by a nearly 2X increase in the macro-F1 score.",
      "Future applications of ABSA include enabling customers to filter products based on specific attributes during searches."
    ],
    "summary": "Wayfair employs Aspect Based Sentiment Analysis (ABSA) to enhance product discovery for niche customer segments. ABSA allows for the identification of specific product aspects and their associated sentiments, improving the relevance of product recommendations. The model combines aspect extraction and sentiment analysis into a single process, increasing efficiency and accuracy. Wayfair's approach has led to significant improvements in model performance, as evidenced by a nearly 2X increase in the macro-F1 score. Future applications of ABSA include enabling customers to filter products based on specific attributes during searches.",
    "infraDetails": [
      "Data stores for customer reviews and product information",
      "Batch processing systems for model training",
      "Real-time streaming systems for processing incoming reviews",
      "Feature stores for managing and serving features used in models",
      "Model serving infrastructure for deploying ABSA models",
      "Monitoring systems for tracking model performance and user interactions"
    ],
    "systemComponents": [
      {
        "name": "ABSA Model",
        "responsibility": "Identifies product aspects and their sentiments from customer reviews."
      },
      {
        "name": "Data Labeling System",
        "responsibility": "Ensures consistent labeling of aspects and sentiments for training data."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages features used in the ABSA model for training and inference."
      },
      {
        "name": "Model Serving Infrastructure",
        "responsibility": "Deploys the trained ABSA model for real-time inference."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and user engagement metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/wayfairs-new-approach-to-aspect-based-sentiment-analysis-helps-customers-easily-find-long-tail-products",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 160,
    "company": "Oda",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict driver's non-driving time",
    "title": "How we went from zero insight to predicting service time with a machine learning model - Part 2/2",
    "url": "https://medium.com/oda-product-tech/how-we-went-from-zero-insight-to-predicting-service-time-with-a-machine-learning-model-part-2-2-ad8b0c3e4838",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/oda-product-tech/how-we-went-from-zero-insight-to-predicting-service-time-with-a-machine-learning-model-part-2-2-ad8b0c3e4838",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 161,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict intent in customer support messages",
    "title": "Building Wayfair's First Virtual Assistant: Automating Customer Service by Text Based Intent Prediction",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/building-wayfairs-first-virtual-assistant-automating-customer-service-by-text-based-intent-prediction",
    "year": 2022,
    "category": "llm_assistant",
    "categoryLabel": "LLM assistants",
    "components": [
      "Data stores for customer interaction data",
      "Batch processing system for data labeling and model training",
      "Model serving infrastructure for deploying the intent prediction model",
      "Monitoring systems to track model performance and detect errors",
      "Feature store for managing features used in model training"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed a Virtual Assistant (VA) to automate customer service interactions through text-based intent prediction, aiming to enhance customer experience and service efficiency.",
      "The project involved creating a comprehensive intent taxonomy and collecting a large dataset of customer interactions for model training, achieving over 90% accuracy in intent classification.",
      "The team transitioned from a base BERT model to distilBERT to improve inference speed, successfully reducing response time to 88 ms while maintaining high accuracy.",
      "The VA was tested in an A/B experiment, revealing a slight decrease in prediction accuracy due to shifts in customer intent distribution and utterance length compared to training data."
    ],
    "summary": "Wayfair developed a Virtual Assistant (VA) to automate customer service interactions through text-based intent prediction, aiming to enhance customer experience and service efficiency. The project involved creating a comprehensive intent taxonomy and collecting a large dataset of customer interactions for model training, achieving over 90% accuracy in intent classification. The team transitioned from a base BERT model to distilBERT to improve inference speed, successfully reducing response time to 88 ms while maintaining high accuracy. The VA was tested in an A/B experiment, revealing a slight decrease in prediction accuracy due to shifts in customer intent distribution and utterance length compared to training data.",
    "infraDetails": [
      "Data stores for customer interaction data",
      "Batch processing system for data labeling and model training",
      "Model serving infrastructure for deploying the intent prediction model",
      "Monitoring systems to track model performance and detect errors",
      "Feature store for managing features used in model training"
    ],
    "systemComponents": [
      {
        "name": "Intent Taxonomy",
        "responsibility": "Defines and categorizes customer intents for accurate prediction."
      },
      {
        "name": "Data Collection Pipeline",
        "responsibility": "Gathers and prepares customer chat data for labeling and model training."
      },
      {
        "name": "Model Training Framework",
        "responsibility": "Trains the intent prediction model using labeled data and selected algorithms."
      },
      {
        "name": "Model Serving Layer",
        "responsibility": "Handles real-time requests and serves the trained intent prediction model."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and user interactions to ensure quality and reliability."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/building-wayfairs-first-virtual-assistant-automating-customer-service-by-text-based-intent-prediction",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 162,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Estimate the impact of product changes",
    "title": "Ocelot: Scaling observational causal inference at LinkedIn",
    "url": "https://engineering.linkedin.com/blog/2022/ocelot--scaling-observational-causal-inference-at-linkedin",
    "year": 2022,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Data pipelines (Java, Spark, R jobs) running on Azkaban",
      "Integration with internal feature store (Feathr)"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn's Ocelot platform enables scalable observational causal inference to estimate the impact of product changes when A/B testing is not feasible.",
      "The platform includes a user-friendly web application that allows data scientists to conduct causal studies without coding, ensuring robust results through built-in validation and checks.",
      "Ocelot integrates with LinkedIn's feature store, Feathr, to streamline data preparation and enhance the accuracy of causal modeling.",
      "The system supports various causal inference methods and emphasizes the importance of robustness checks to maintain high standards in causal studies."
    ],
    "summary": "LinkedIn's Ocelot platform enables scalable observational causal inference to estimate the impact of product changes when A/B testing is not feasible. The platform includes a user-friendly web application that allows data scientists to conduct causal studies without coding, ensuring robust results through built-in validation and checks. Ocelot integrates with LinkedIn's feature store, Feathr, to streamline data preparation and enhance the accuracy of causal modeling. The system supports various causal inference methods and emphasizes the importance of robustness checks to maintain high standards in causal studies.",
    "infraDetails": [
      "Data pipelines (Java, Spark, R jobs) running on Azkaban",
      "Integration with internal feature store (Feathr)"
    ],
    "systemComponents": [
      {
        "name": "Ocelot UI",
        "responsibility": "Provides a guided interface for users to set up and execute causal studies."
      },
      {
        "name": "Ocelot web services",
        "responsibility": "Handles the backend processing and execution of causal modeling code."
      },
      {
        "name": "Ocelot pipelines",
        "responsibility": "Manages data preparation and execution of causal modeling using integrated jobs."
      },
      {
        "name": "Feature Store (Feathr)",
        "responsibility": "Supplies covariate data for causal studies, simplifying data selection for users."
      },
      {
        "name": "Azkaban",
        "responsibility": "Workflow manager used to orchestrate the execution of data pipelines."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2022/ocelot--scaling-observational-causal-inference-at-linkedin",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 163,
    "company": "Grab",
    "industry": "Delivery and mobility,Banking and finance",
    "industries": [
      "Delivery and mobility",
      "Banking and finance"
    ],
    "description": "Detect fraud with graph models",
    "title": "Graph for fraud detection",
    "url": "https://engineering.grab.com/graph-for-fraud-detection",
    "year": 2022,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Graph databases for storing entity relationships",
      "Batch processing systems for model training",
      "Feature stores for managing node features",
      "Monitoring systems for model performance and fraud detection efficacy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grab employs graph-based models for fraud detection to address the challenges posed by evolving fraud patterns across its diverse business verticals.",
      "Graph models are advantageous as they require minimal feature engineering and can effectively detect unknown fraud without heavy reliance on labeled data.",
      "The Relational Graph Convolutional Network (RGCN) is utilized to process graph data, achieving high performance even with a small percentage of labeled nodes.",
      "Graph-based approaches provide better explainability for fraud detection, allowing for visualization of connections and patterns among entities.",
      "By leveraging graph structures, Grab aims to proactively identify potential fraudsters before fraudulent activities occur."
    ],
    "summary": "Grab employs graph-based models for fraud detection to address the challenges posed by evolving fraud patterns across its diverse business verticals. Graph models are advantageous as they require minimal feature engineering and can effectively detect unknown fraud without heavy reliance on labeled data. The Relational Graph Convolutional Network (RGCN) is utilized to process graph data, achieving high performance even with a small percentage of labeled nodes. Graph-based approaches provide better explainability for fraud detection, allowing for visualization of connections and patterns among entities. By leveraging graph structures, Grab aims to proactively identify potential fraudsters before fraudulent activities occur.",
    "infraDetails": [
      "Graph databases for storing entity relationships",
      "Batch processing systems for model training",
      "Feature stores for managing node features",
      "Monitoring systems for model performance and fraud detection efficacy"
    ],
    "systemComponents": [
      {
        "name": "Relational Graph Convolutional Network (RGCN)",
        "responsibility": "Processes graph data to generate node embeddings and predict fraud probabilities."
      },
      {
        "name": "Graph Database",
        "responsibility": "Stores and manages the relationships and connections between different entities in the Grab ecosystem."
      },
      {
        "name": "Feature Store",
        "responsibility": "Houses and manages the features used for nodes in the graph, enhancing model performance."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of the fraud detection model and identifies areas for improvement."
      },
      {
        "name": "Batch Processing System",
        "responsibility": "Facilitates the training of the graph-based models on large datasets."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.grab.com/graph-for-fraud-detection",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 164,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Make causally valid forecasts",
    "title": "Causal Forecasting at Lyft (Part 1)",
    "url": "https://eng.lyft.com/causal-forecasting-at-lyft-part-1-14cca6ff3d6d",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Lyft's Causal Forecasting System aims to provide accurate forecasts of key business metrics by understanding causal relationships rather than relying on mere correlations.",
      "The system utilizes Directed Acyclic Graphs (DAGs) to represent causal relationships among various business variables, allowing for a structured approach to modeling.",
      "By integrating empirical data and experimental results, Lyft can create models that not only predict outcomes but also inform policy decisions for optimizing business strategies.",
      "The model collection enables product-focused teams to make informed decisions while embedding a comprehensive understanding of the marketplace."
    ],
    "summary": "Lyft's Causal Forecasting System aims to provide accurate forecasts of key business metrics by understanding causal relationships rather than relying on mere correlations. The system utilizes Directed Acyclic Graphs (DAGs) to represent causal relationships among various business variables, allowing for a structured approach to modeling. By integrating empirical data and experimental results, Lyft can create models that not only predict outcomes but also inform policy decisions for optimizing business strategies. The model collection enables product-focused teams to make informed decisions while embedding a comprehensive understanding of the marketplace.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Causal Forecasting System",
        "responsibility": "Forecasting key business metrics based on causal relationships."
      },
      {
        "name": "Modeling Framework",
        "responsibility": "Facilitating the creation and integration of various causal models."
      },
      {
        "name": "User Interface",
        "responsibility": "Allowing users to interact with models and evaluate different scenarios."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/causal-forecasting-at-lyft-part-1-14cca6ff3d6d",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 165,
    "company": "Glassdoor",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Recommend interesting posts to users",
    "title": "Personalized Fishbowl Recommendations with Learned Embeddings: Part 2",
    "url": "https://medium.com/glassdoor-engineering/personalized-fishbowl-recommendations-with-learned-embeddings-part-2-78a16b04d396",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/glassdoor-engineering/personalized-fishbowl-recommendations-with-learned-embeddings-part-2-78a16b04d396",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 166,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Improve video quality at scale",
    "title": "For your eyes only: improving Netflix video quality with neural networks",
    "url": "https://netflixtechblog.com/for-your-eyes-only-improving-netflix-video-quality-with-neural-networks-5b8d032da09c",
    "year": 2022,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Netflix has improved video quality by integrating neural networks into their video encoding pipeline, specifically for video downscaling.",
      "The new 'deep downscaler' replaces traditional resampling methods, resulting in better video quality tailored to various screen resolutions and network conditions.",
      "Extensive testing showed that the deep downscaler significantly enhances video quality across different codecs, with a majority of users preferring it over traditional methods.",
      "The implementation of the deep downscaler is efficient, running on both CPU and GPU, and is integrated into Netflix's next-generation encoding platform, Cosmos."
    ],
    "summary": "Netflix has improved video quality by integrating neural networks into their video encoding pipeline, specifically for video downscaling. The new 'deep downscaler' replaces traditional resampling methods, resulting in better video quality tailored to various screen resolutions and network conditions. Extensive testing showed that the deep downscaler significantly enhances video quality across different codecs, with a majority of users preferring it over traditional methods. The implementation of the deep downscaler is efficient, running on both CPU and GPU, and is integrated into Netflix's next-generation encoding platform, Cosmos.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Deep Downscaler",
        "responsibility": "Improves video quality through neural network-based downscaling."
      },
      {
        "name": "Cosmos",
        "responsibility": "Next-generation encoding platform that integrates various encoding workflows."
      },
      {
        "name": "Stratum Function",
        "responsibility": "Serverless layer for running stateless and computationally-intensive functions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://netflixtechblog.com/for-your-eyes-only-improving-netflix-video-quality-with-neural-networks-5b8d032da09c",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 167,
    "company": "Glassdoor",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Recommend interesting posts to users",
    "title": "Personalized Fishbowl Recommendations with Learned Embeddings: Part 1",
    "url": "https://medium.com/glassdoor-engineering/personalized-fishbowl-recommendations-with-learned-embeddings-part-1-6031abe84661",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/glassdoor-engineering/personalized-fishbowl-recommendations-with-learned-embeddings-part-1-6031abe84661",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 168,
    "company": "Dailymotion",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Recommend diversified video content",
    "title": "Optimizing video feed recommendations with diversity: Machine Learning first steps",
    "url": "https://medium.com/dailymotion/optimizing-video-feed-recommendations-with-diversity-machine-learning-first-steps-4cf9abdbbffd",
    "year": 2022,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Data stores for user interactions and video metadata",
      "Batch processing systems for historical data analysis",
      "Real-time streaming systems for live user engagement tracking",
      "Feature stores for managing and serving features used in recommendations",
      "Model serving infrastructure for deploying ranking algorithms",
      "Monitoring tools for tracking performance and user engagement metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Dailymotion redesigned its video recommendation system to enhance user experience on mobile applications by focusing on personalized and diverse content.",
      "The new recommender system employs a two-stage approach: retrieving candidate videos and ranking them based on user interests and engagement metrics.",
      "Key features of the recommender include variability in recommendations, explainability, and the ability to iterate quickly based on user feedback.",
      "The architecture includes multiple rankers to ensure diversity in video recommendations, preventing users from seeing the same content repeatedly.",
      "The system also addresses the cold start problem by allowing new users to select their interests during onboarding, ensuring a balanced representation of content."
    ],
    "summary": "Dailymotion redesigned its video recommendation system to enhance user experience on mobile applications by focusing on personalized and diverse content. The new recommender system employs a two-stage approach: retrieving candidate videos and ranking them based on user interests and engagement metrics. Key features of the recommender include variability in recommendations, explainability, and the ability to iterate quickly based on user feedback. The architecture includes multiple rankers to ensure diversity in video recommendations, preventing users from seeing the same content repeatedly. The system also addresses the cold start problem by allowing new users to select their interests during onboarding, ensuring a balanced representation of content.",
    "infraDetails": [
      "Data stores for user interactions and video metadata",
      "Batch processing systems for historical data analysis",
      "Real-time streaming systems for live user engagement tracking",
      "Feature stores for managing and serving features used in recommendations",
      "Model serving infrastructure for deploying ranking algorithms",
      "Monitoring tools for tracking performance and user engagement metrics"
    ],
    "systemComponents": [
      {
        "name": "Candidate Selector",
        "responsibility": "Retrieves all videos that can be recommended based on user interests."
      },
      {
        "name": "Ranker",
        "responsibility": "Produces an ordered list of videos for a given user, utilizing multiple ranking algorithms."
      },
      {
        "name": "Exploration Ranker",
        "responsibility": "Randomly selects videos to surface new content and prevent repetitive recommendations."
      },
      {
        "name": "Freshness & Performance Ranker",
        "responsibility": "Ranks videos based on freshness and user engagement metrics."
      },
      {
        "name": "User Interest Manager",
        "responsibility": "Handles user interest selection during onboarding to personalize recommendations."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/dailymotion/optimizing-video-feed-recommendations-with-diversity-machine-learning-first-steps-4cf9abdbbffd",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 169,
    "company": "Siemens Healthineers",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Optimize software testing",
    "title": "Using Machine Learning for Fast Test Feedback to Developers and Test Suite Optimization",
    "url": "https://www.infoq.com/articles/machine-learning-test-feedback-optimization/",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Machine learning can significantly reduce feedback time for developers by predicting test results before tests are fully executed.",
      "Optimizing the execution order of test suites using ML can lead to quicker identification of errors, saving both time and resources.",
      "Integrating data from source control and test execution logs allows for better defect assignment in multi-team environments, reducing inefficiencies.",
      "The system can predict failing tests with an average accuracy of 78%, enabling developers to take proactive measures based on predictions.",
      "Data quality and semantic integration are crucial for effective machine learning applications in software testing."
    ],
    "summary": "Machine learning can significantly reduce feedback time for developers by predicting test results before tests are fully executed. Optimizing the execution order of test suites using ML can lead to quicker identification of errors, saving both time and resources. Integrating data from source control and test execution logs allows for better defect assignment in multi-team environments, reducing inefficiencies. The system can predict failing tests with an average accuracy of 78%, enabling developers to take proactive measures based on predictions. Data quality and semantic integration are crucial for effective machine learning applications in software testing.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Prediction Engine",
        "responsibility": "Predicts test results based on commit metadata and historical data."
      },
      {
        "name": "Test Suite Optimizer",
        "responsibility": "Optimizes the execution order of test suites to minimize runtime."
      },
      {
        "name": "Data Integration Module",
        "responsibility": "Integrates data from various sources for enhanced analysis and defect assignment."
      },
      {
        "name": "Defect Routing System",
        "responsibility": "Assigns defects to the appropriate teams based on historical data and similarity analysis."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.infoq.com/articles/machine-learning-test-feedback-optimization/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 170,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Make causally valid forecasts",
    "title": "Causal Forecasting at Lyft (Part 2)",
    "url": "https://eng.lyft.com/causal-forecasting-at-lyft-part-2-418f1febca5a",
    "year": 2022,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "IndexTensors for data representation and manipulation",
      "PyTorch framework for model training and optimization"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft's causal forecasting system aims to create accurate predictions that align with experimental data, enabling better decision-making.",
      "The system is designed to allow parallel model development, ensuring that data scientists can work independently while maintaining compatibility.",
      "Key innovations include 'IndexTensors' for efficient data manipulation and a modular approach to model design, allowing for easy swapping and hierarchical organization.",
      "The evaluation of models focuses on causal validity and predictive accuracy, utilizing metrics like MASE for performance assessment.",
      "The ultimate goal is to optimize decision-making processes based on the insights generated from the forecasting models."
    ],
    "summary": "Lyft's causal forecasting system aims to create accurate predictions that align with experimental data, enabling better decision-making. The system is designed to allow parallel model development, ensuring that data scientists can work independently while maintaining compatibility. Key innovations include 'IndexTensors' for efficient data manipulation and a modular approach to model design, allowing for easy swapping and hierarchical organization. The evaluation of models focuses on causal validity and predictive accuracy, utilizing metrics like MASE for performance assessment. The ultimate goal is to optimize decision-making processes based on the insights generated from the forecasting models.",
    "infraDetails": [
      "IndexTensors for data representation and manipulation",
      "PyTorch framework for model training and optimization"
    ],
    "systemComponents": [
      {
        "name": "IndexTensors",
        "responsibility": "Facilitates index-aligned operations and efficient data manipulation."
      },
      {
        "name": "ModelCollections",
        "responsibility": "Organizes multiple models into a hierarchical structure for better management."
      },
      {
        "name": "Causal Validity Evaluator",
        "responsibility": "Compares model predictions against experimental outcomes to ensure causal accuracy."
      },
      {
        "name": "Predictive Accuracy Evaluator",
        "responsibility": "Assesses model performance using backtesting and metrics like MASE."
      },
      {
        "name": "Optimization Engine",
        "responsibility": "Calculates optimal decisions based on model outputs and constraints."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/causal-forecasting-at-lyft-part-2-418f1febca5a",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 171,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Deliver more relevant job recommendations",
    "title": "Improving job matching with machine-learned activity features",
    "url": "https://engineering.linkedin.com/blog/2022/improving-job-matching-with-machine-learned-activity-features-",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for member profiles and job postings",
      "Batch processing for historical job activity data",
      "Real-time streaming for capturing member interactions",
      "Feature store for storing and managing activity embeddings",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for evaluating model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn's Talent Solutions team aims to enhance job matching through personalized recommendations using machine-learned activity features.",
      "The JYMBII service utilizes members' job-seeking activities to create an 'activity embedding' that captures their preferences beyond static profile data.",
      "The article discusses the limitations of traditional aggregation methods for job activity features and introduces a machine-learned approach to improve personalization.",
      "Two models were tested: a geometrically-decaying average embedding and a more complex sequence-based model using deep learning techniques for better aggregation."
    ],
    "summary": "LinkedIn's Talent Solutions team aims to enhance job matching through personalized recommendations using machine-learned activity features. The JYMBII service utilizes members' job-seeking activities to create an 'activity embedding' that captures their preferences beyond static profile data. The article discusses the limitations of traditional aggregation methods for job activity features and introduces a machine-learned approach to improve personalization. Two models were tested: a geometrically-decaying average embedding and a more complex sequence-based model using deep learning techniques for better aggregation.",
    "infraDetails": [
      "Data stores for member profiles and job postings",
      "Batch processing for historical job activity data",
      "Real-time streaming for capturing member interactions",
      "Feature store for storing and managing activity embeddings",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for evaluating model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "JYMBII",
        "responsibility": "Provides personalized job recommendations based on member profiles and activities."
      },
      {
        "name": "Activity Embedding Model",
        "responsibility": "Generates embeddings from members' job-seeking activities to enhance recommendation accuracy."
      },
      {
        "name": "Geometrically-Decaying Average Model",
        "responsibility": "Implements a weighted averaging approach to account for recency in job interactions."
      },
      {
        "name": "Sequence-Based Deep Learning Model",
        "responsibility": "Utilizes advanced models like CNNs to learn complex aggregation functions for activity embeddings."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2022/improving-job-matching-with-machine-learned-activity-features-",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 172,
    "company": "Cookidoo",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Personalize recipe recommendations",
    "title": "Building A Recipe Recommender System For the Thermomix on Cookidoo - Part 1",
    "url": "https://www.alexanderthamm.com/de/blog/building-a-recipe-recommender-system-for-the-thermomix-on-cookidoo/",
    "year": 2022,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for user interaction data",
      "Batch processing system for model training",
      "Feature store for recipe metadata",
      "Model serving infrastructure for delivering recommendations",
      "Monitoring system for evaluating model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Cookidoo aims to provide personalized recipe recommendations for its users, enhancing their cooking experience with tailored suggestions.",
      "The recommender system is structured into three main components: Model Selection, Candidate Selection, and Scoring & Ranking.",
      "The team emphasizes the importance of using interaction data over explicit ratings for training models, as it yields better results.",
      "Privacy and GDPR compliance are prioritized in the design of the system, ensuring user data is handled securely.",
      "The initial implementation utilized the LightFM package for matrix factorization, allowing for quick deployment and iterative improvements."
    ],
    "summary": "Cookidoo aims to provide personalized recipe recommendations for its users, enhancing their cooking experience with tailored suggestions. The recommender system is structured into three main components: Model Selection, Candidate Selection, and Scoring & Ranking. The team emphasizes the importance of using interaction data over explicit ratings for training models, as it yields better results. Privacy and GDPR compliance are prioritized in the design of the system, ensuring user data is handled securely. The initial implementation utilized the LightFM package for matrix factorization, allowing for quick deployment and iterative improvements.",
    "infraDetails": [
      "Data stores for user interaction data",
      "Batch processing system for model training",
      "Feature store for recipe metadata",
      "Model serving infrastructure for delivering recommendations",
      "Monitoring system for evaluating model performance"
    ],
    "systemComponents": [
      {
        "name": "Model Selection",
        "responsibility": "Define training data and select the best model for the recommendation use case."
      },
      {
        "name": "Candidate Selection",
        "responsibility": "Select items that are considered for recommendation based on user preferences."
      },
      {
        "name": "Scoring & Ranking",
        "responsibility": "Score user-item combinations and create individual rankings for each user."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.alexanderthamm.com/de/blog/building-a-recipe-recommender-system-for-the-thermomix-on-cookidoo/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 173,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Improve ML model performance with multitask learning",
    "title": "Applying multitask learning to AI models at LinkedIn",
    "url": "https://engineering.linkedin.com/blog/2022/applying-multitask-learning-to-ai-models-at-linkedin",
    "year": 2022,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Multitask training framework",
      "Data stores for job postings and resumes",
      "Feature extraction systems"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn employs multitask learning to enhance the performance of AI models by training them on related tasks simultaneously.",
      "This approach addresses challenges such as varying label distributions and differing feature requirements across tasks, allowing for more effective data utilization.",
      "The multitask training framework enables the use of shared and task-specific model architectures, improving model performance and user engagement metrics.",
      "Applications of this framework include cross-domain skill extraction and member company affinity learning, leading to significant improvements in job recommendations and recruiter search relevance."
    ],
    "summary": "LinkedIn employs multitask learning to enhance the performance of AI models by training them on related tasks simultaneously. This approach addresses challenges such as varying label distributions and differing feature requirements across tasks, allowing for more effective data utilization. The multitask training framework enables the use of shared and task-specific model architectures, improving model performance and user engagement metrics. Applications of this framework include cross-domain skill extraction and member company affinity learning, leading to significant improvements in job recommendations and recruiter search relevance.",
    "infraDetails": [
      "Multitask training framework",
      "Data stores for job postings and resumes",
      "Feature extraction systems"
    ],
    "systemComponents": [
      {
        "name": "Contextual Skill Model",
        "responsibility": "Tags skill terms in job postings and resumes to determine valid skill entities."
      },
      {
        "name": "Multitask Deep Neural Network",
        "responsibility": "Trains on diverse activity signals to improve recruiter-candidate affinity and search relevance."
      },
      {
        "name": "Embedding Systems",
        "responsibility": "Generates member and company embeddings to represent affinities for improved search outcomes."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2022/applying-multitask-learning-to-ai-models-at-linkedin",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 174,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Apply causality in experiments and marketing",
    "title": "A Survey of Causal Inference Applications at Netflix",
    "url": "https://netflixtechblog.com/a-survey-of-causal-inference-applications-at-netflix-b62d25175e6f",
    "year": 2022,
    "category": "marketing_ads",
    "categoryLabel": "Marketing and ads",
    "components": [
      "Monitoring systems for experimental outcomes"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Netflix employs causal inference methods to understand the impact of product changes on member satisfaction and viewing behavior.",
      "The company utilizes AB testing and quasi-experimental designs to measure causal effects, particularly in areas like localization and product innovation.",
      "Recent internal summits have focused on sharing best practices and methodologies for causal analysis among Netflix scientists.",
      "Innovative frameworks like the Causal Ranker are being developed to enhance recommendation systems by incorporating causal insights.",
      "Netflix aims to leverage causal inference to improve decision-making and member experience across its platform."
    ],
    "summary": "Netflix employs causal inference methods to understand the impact of product changes on member satisfaction and viewing behavior. The company utilizes AB testing and quasi-experimental designs to measure causal effects, particularly in areas like localization and product innovation. Recent internal summits have focused on sharing best practices and methodologies for causal analysis among Netflix scientists. Innovative frameworks like the Causal Ranker are being developed to enhance recommendation systems by incorporating causal insights. Netflix aims to leverage causal inference to improve decision-making and member experience across its platform.",
    "infraDetails": [
      "Monitoring systems for experimental outcomes"
    ],
    "systemComponents": [
      {
        "name": "Causal Ranker",
        "responsibility": "Enhances recommendation systems by applying causal inference to improve member engagement."
      },
      {
        "name": "AB Testing Framework",
        "responsibility": "Facilitates controlled experiments to measure the impact of product changes on user behavior."
      },
      {
        "name": "Simulation Tools",
        "responsibility": "Used for evaluating the consistency and variance of incrementality estimates."
      },
      {
        "name": "Data Analysis Systems",
        "responsibility": "Analyzes historical data to estimate causal effects and inform product decisions."
      },
      {
        "name": "Monitoring Systems",
        "responsibility": "Tracks the outcomes of experiments and causal analyses to ensure data-driven decision making."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://netflixtechblog.com/a-survey-of-causal-inference-applications-at-netflix-b62d25175e6f",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 175,
    "company": "Pinterest",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Recommend bids for advertizers",
    "title": "Advertiser Recommendation Systems at Pinterest",
    "url": "https://medium.com/pinterest-engineering/advertiser-recommendation-systems-at-pinterest-ccb255fbde20",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/pinterest-engineering/advertiser-recommendation-systems-at-pinterest-ccb255fbde20",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 176,
    "company": "Grubhub",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Forecast volume order",
    "title": "\"I See Tacos In Your Future\": Order Volume Forecasting at Grubhub",
    "url": "https://bytes.grubhub.com/i-see-tacos-in-your-future-order-volume-forecasting-at-grubhub-44d47ad08d5b",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Time-series data stores",
      "Batch processing systems for historical data analysis",
      "Feature stores for managing predictors like weather and holidays",
      "Model serving infrastructure for deploying forecasting models",
      "Monitoring systems for tracking model performance and data quality"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grubhub's Order Volume Forecasting (OVF) utilizes historical order data and various predictors to forecast the number of orders in specific regions over short time frames.",
      "The forecasting process involves handling time-series data, which requires adjustments to traditional machine learning methodologies due to the dependencies between data points.",
      "Grubhub employs a combination of local and global models to account for regional variations in order patterns, while also using autoregressive and time-indexed predictors for flexibility.",
      "Backtesting is a crucial step in the modeling process, allowing Grubhub to evaluate model performance against known historical data before making future predictions."
    ],
    "summary": "Grubhub's Order Volume Forecasting (OVF) utilizes historical order data and various predictors to forecast the number of orders in specific regions over short time frames. The forecasting process involves handling time-series data, which requires adjustments to traditional machine learning methodologies due to the dependencies between data points. Grubhub employs a combination of local and global models to account for regional variations in order patterns, while also using autoregressive and time-indexed predictors for flexibility. Backtesting is a crucial step in the modeling process, allowing Grubhub to evaluate model performance against known historical data before making future predictions.",
    "infraDetails": [
      "Time-series data stores",
      "Batch processing systems for historical data analysis",
      "Feature stores for managing predictors like weather and holidays",
      "Model serving infrastructure for deploying forecasting models",
      "Monitoring systems for tracking model performance and data quality"
    ],
    "systemComponents": [
      {
        "name": "Order Volume Forecasting Model",
        "responsibility": "Predicts future order volumes based on historical data and various predictors."
      },
      {
        "name": "Backtesting Framework",
        "responsibility": "Evaluates model performance using historical data to ensure accuracy before deployment."
      },
      {
        "name": "Feature Engineering Module",
        "responsibility": "Processes and aggregates predictors such as weather and holiday information for use in forecasting."
      },
      {
        "name": "Ensemble Model Aggregator",
        "responsibility": "Combines predictions from multiple models to generate a single forecast for each region."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.grubhub.com/i-see-tacos-in-your-future-order-volume-forecasting-at-grubhub-44d47ad08d5b",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 177,
    "company": "Slack",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Detect spam invites",
    "title": "Blocking Slack Invite Spam With Machine Learning",
    "url": "https://slack.engineering/blocking-slack-invite-spam-with-machine-learning/",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "In-house service for serving model predictions",
      "Kubernetes for deploying models as microservices",
      "S3 for storing model versions"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Slack developed a machine learning model to effectively block spam invites, improving upon a labor-intensive rule-based system.",
      "The model uses historical data to predict invite acceptance, allowing for better identification of spam invites with fewer false positives.",
      "By automating the spam detection process, Slack significantly reduced the need for human oversight, freeing up engineering resources.",
      "The machine learning approach outperformed the previous hand-tuned filter, demonstrating a marked decrease in false positives."
    ],
    "summary": "Slack developed a machine learning model to effectively block spam invites, improving upon a labor-intensive rule-based system. The model uses historical data to predict invite acceptance, allowing for better identification of spam invites with fewer false positives. By automating the spam detection process, Slack significantly reduced the need for human oversight, freeing up engineering resources. The machine learning approach outperformed the previous hand-tuned filter, demonstrating a marked decrease in false positives.",
    "infraDetails": [
      "In-house service for serving model predictions",
      "Kubernetes for deploying models as microservices",
      "S3 for storing model versions"
    ],
    "systemComponents": [
      {
        "name": "Spam Detection Model",
        "responsibility": "Predicts whether an invite is spam based on historical data and features."
      },
      {
        "name": "Model Serving Service",
        "responsibility": "Handles the deployment and scoring of machine learning models in production."
      },
      {
        "name": "Data Logging System",
        "responsibility": "Records all blocked invites for periodic human review."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://slack.engineering/blocking-slack-invite-spam-with-machine-learning/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 178,
    "company": "Faire",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Search and navigate marketplace items",
    "title": "Building Faire's new marketplace ranking infrastructure",
    "url": "https://craft.faire.com/building-faires-new-marketplace-ranking-infrastructure-a53bf938aba0",
    "year": 2021,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://craft.faire.com/building-faires-new-marketplace-ranking-infrastructure-a53bf938aba0",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 179,
    "company": "Doordash",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict delivery supply and demand",
    "title": "Managing Supply and Demand Balance Through Machine Learning",
    "url": "https://doordash.engineering/2021/06/29/managing-supply-and-demand-balance-through-machine-learning/",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for storing historical supply and demand data",
      "Batch processing systems for generating forecasts",
      "Feature stores for managing and serving features used in forecasting models",
      "Model serving infrastructure for deploying forecasting models",
      "Monitoring systems to track model performance and supply-demand metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash developed a mobilization system to balance delivery supply and demand by offering incentives to Dashers during peak times.",
      "The system focuses on market-level metrics to measure supply and demand, accounting for regional variations and external factors like traffic and weather.",
      "Forecasting is done using a regression approach with the LightGBM framework, allowing for multivariate forecasting and extrapolation to new markets.",
      "The team emphasizes the importance of understanding causal relationships in their forecasting models to avoid misleading conclusions."
    ],
    "summary": "DoorDash developed a mobilization system to balance delivery supply and demand by offering incentives to Dashers during peak times. The system focuses on market-level metrics to measure supply and demand, accounting for regional variations and external factors like traffic and weather. Forecasting is done using a regression approach with the LightGBM framework, allowing for multivariate forecasting and extrapolation to new markets. The team emphasizes the importance of understanding causal relationships in their forecasting models to avoid misleading conclusions.",
    "infraDetails": [
      "Data stores for storing historical supply and demand data",
      "Batch processing systems for generating forecasts",
      "Feature stores for managing and serving features used in forecasting models",
      "Model serving infrastructure for deploying forecasting models",
      "Monitoring systems to track model performance and supply-demand metrics"
    ],
    "systemComponents": [
      {
        "name": "Mobilization System",
        "responsibility": "Allocates incentives to Dashers based on predicted supply and demand imbalances."
      },
      {
        "name": "Forecasting Engine",
        "responsibility": "Generates supply and demand forecasts using regression models."
      },
      {
        "name": "Incentive Allocation Module",
        "responsibility": "Determines the incentive levels needed to balance supply and demand."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://doordash.engineering/2021/06/29/managing-supply-and-demand-balance-through-machine-learning/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 180,
    "company": "OLX",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend e-commerce items",
    "title": "Item2Vec: Neural Item Embeddings to enhance recommendations",
    "url": "https://tech.olx.com/item2vec-neural-item-embeddings-to-enhance-recommendations-1fd948a6f293",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Monitoring tools for tracking user engagement metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Item2Vec is a neural network-based approach to enhance item recommendations in e-commerce by mapping items into a high-dimensional semantic space.",
      "The system addresses the cold start problem by embedding items based on their content, allowing for recommendations even for newly posted items.",
      "Combining collaborative filtering and content-based methods, Item2Vec improves recommendation accuracy and user engagement, leading to a 10-20% uplift in target metrics.",
      "The integration of Item2Vec has shifted user interactions from search-based navigation to more efficient item discovery through recommendations."
    ],
    "summary": "Item2Vec is a neural network-based approach to enhance item recommendations in e-commerce by mapping items into a high-dimensional semantic space. The system addresses the cold start problem by embedding items based on their content, allowing for recommendations even for newly posted items. Combining collaborative filtering and content-based methods, Item2Vec improves recommendation accuracy and user engagement, leading to a 10-20% uplift in target metrics. The integration of Item2Vec has shifted user interactions from search-based navigation to more efficient item discovery through recommendations.",
    "infraDetails": [
      "Monitoring tools for tracking user engagement metrics"
    ],
    "systemComponents": [
      {
        "name": "Encoder",
        "responsibility": "Embeds items into a high-dimensional vector space based on their content."
      },
      {
        "name": "Collaborative Filtering System",
        "responsibility": "Generates recommendations based on user interactions and item co-occurrences."
      },
      {
        "name": "Content-Based Recommender",
        "responsibility": "Provides recommendations based on item attributes when user interaction data is sparse."
      },
      {
        "name": "A/B Testing Framework",
        "responsibility": "Evaluates the effectiveness of different recommendation algorithms."
      },
      {
        "name": "Monitoring Tools",
        "responsibility": "Tracks and analyzes user engagement and recommendation performance metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.olx.com/item2vec-neural-item-embeddings-to-enhance-recommendations-1fd948a6f293",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 181,
    "company": "Dropbox",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Search by image content",
    "title": "How image search works at Dropbox",
    "url": "https://dropbox.tech/machine-learning/how-image-search-works-at-dropbox",
    "year": 2021,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Forward index for mapping files to metadata and category space vectors.",
      "Inverted index for mapping categories to posting lists of images.",
      "Word vector representation for queries and categories.",
      "Nautilus search engine for implementing the search functionality."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Dropbox's image search leverages machine learning to allow users to search for images based on content rather than filenames.",
      "The system uses an image classification model to generate category scores for images and employs word vectors to interpret search queries in relation to these categories.",
      "A relevance function calculates how well an image matches a query, ranking images based on their relevance scores.",
      "The architecture repurposes existing text search methods to efficiently handle image search, utilizing both forward and inverted indexes.",
      "To optimize for scalability, the system employs approximations to reduce storage and processing costs while maintaining performance."
    ],
    "summary": "Dropbox's image search leverages machine learning to allow users to search for images based on content rather than filenames. The system uses an image classification model to generate category scores for images and employs word vectors to interpret search queries in relation to these categories. A relevance function calculates how well an image matches a query, ranking images based on their relevance scores. The architecture repurposes existing text search methods to efficiently handle image search, utilizing both forward and inverted indexes. To optimize for scalability, the system employs approximations to reduce storage and processing costs while maintaining performance.",
    "infraDetails": [
      "Forward index for mapping files to metadata and category space vectors.",
      "Inverted index for mapping categories to posting lists of images.",
      "Word vector representation for queries and categories.",
      "Nautilus search engine for implementing the search functionality."
    ],
    "systemComponents": [
      {
        "name": "Image Classifier",
        "responsibility": "Generates category scores for images using a convolutional neural network."
      },
      {
        "name": "Forward Index",
        "responsibility": "Maps each image to its metadata and category space vector."
      },
      {
        "name": "Inverted Index",
        "responsibility": "Stores posting lists of images for each category based on positive scores."
      },
      {
        "name": "Search Engine (Nautilus)",
        "responsibility": "Handles the search queries and retrieves relevant images based on the indexes."
      },
      {
        "name": "Word Vector System",
        "responsibility": "Provides vector representations for words to facilitate query interpretation."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://dropbox.tech/machine-learning/how-image-search-works-at-dropbox",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 182,
    "company": "Scribd",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Extract metadata from documents",
    "title": "Information Extraction at Scribd",
    "url": "https://tech.scribd.com/blog/2021/information-extraction-at-scribd.html",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for storing extracted metadata and document embeddings",
      "Batch processing systems for handling document uploads and metadata extraction",
      "Feature stores for managing and serving extracted keyphrases and entities",
      "Orchestration tools for coordinating the extraction and linking processes",
      "Monitoring systems to track the performance of extraction models"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Scribd's information extraction system focuses on extracting metadata from user-uploaded documents to enhance discovery and recommendation processes.",
      "The system employs keyphrase and entity extraction to provide a rich semantic description of documents, identifying major themes and proper nouns.",
      "Challenges in extracting meaningful data from text-heavy documents were addressed through unsupervised approaches and the use of knowledge bases for entity linking.",
      "The integration of extracted keyphrases and entities allows for improved document categorization and the discovery of related content."
    ],
    "summary": "Scribd's information extraction system focuses on extracting metadata from user-uploaded documents to enhance discovery and recommendation processes. The system employs keyphrase and entity extraction to provide a rich semantic description of documents, identifying major themes and proper nouns. Challenges in extracting meaningful data from text-heavy documents were addressed through unsupervised approaches and the use of knowledge bases for entity linking. The integration of extracted keyphrases and entities allows for improved document categorization and the discovery of related content.",
    "infraDetails": [
      "Data stores for storing extracted metadata and document embeddings",
      "Batch processing systems for handling document uploads and metadata extraction",
      "Feature stores for managing and serving extracted keyphrases and entities",
      "Orchestration tools for coordinating the extraction and linking processes",
      "Monitoring systems to track the performance of extraction models"
    ],
    "systemComponents": [
      {
        "name": "Keyphrase Extraction Module",
        "responsibility": "Extracts keyphrases from documents using statistical methods and language-specific rules."
      },
      {
        "name": "Named Entity Extraction Module",
        "responsibility": "Identifies and counts named entities in documents, normalizing them for accurate representation."
      },
      {
        "name": "Entity Linking Component",
        "responsibility": "Links extracted entities to a knowledge base to enhance normalization and provide additional context."
      },
      {
        "name": "Document Embedding System",
        "responsibility": "Embeds documents, keyphrases, and entities in a shared space for improved discovery and clustering."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.scribd.com/blog/2021/information-extraction-at-scribd.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 183,
    "company": "Microsoft",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Rank customer support cases",
    "title": "ML and customer support (Part 1): Using Machine Learning to enable world-class customer support",
    "url": "https://medium.com/data-science-at-microsoft/ml-and-customer-support-part-1-using-machine-learning-to-enable-world-class-customer-support-c90b3b02f6a3",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/data-science-at-microsoft/ml-and-customer-support-part-1-using-machine-learning-to-enable-world-class-customer-support-c90b3b02f6a3",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 184,
    "company": "Stitch Fix",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend e-commerce inventory",
    "title": "Algorithm-Assisted Inventory Curation",
    "url": "https://multithreaded.stitchfix.com/blog/2021/05/12/algorithm-assisted-inventory-curation/",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for storing merchandise attributes and client interactions",
      "Custom extenders for fetching and formatting feature data"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Stitch Fix developed a merchandise recommender system called 'Style Explorer' to enhance inventory curation and improve supply chain management.",
      "The system utilizes a wide range of features, including human-assigned data, imagery, and client-item embeddings to predict merchandise performance.",
      "A dimensionality reduction technique, UMAP, is employed to manage the sparse feature space before training various model architectures.",
      "Continuous evaluation of model performance is crucial, using custom business-facing metrics to ensure alignment with company goals.",
      "Simulations of the buying process help assess the potential impact of the Style Explorer recommendations on inventory performance."
    ],
    "summary": "Stitch Fix developed a merchandise recommender system called 'Style Explorer' to enhance inventory curation and improve supply chain management. The system utilizes a wide range of features, including human-assigned data, imagery, and client-item embeddings to predict merchandise performance. A dimensionality reduction technique, UMAP, is employed to manage the sparse feature space before training various model architectures. Continuous evaluation of model performance is crucial, using custom business-facing metrics to ensure alignment with company goals. Simulations of the buying process help assess the potential impact of the Style Explorer recommendations on inventory performance.",
    "infraDetails": [
      "Data stores for storing merchandise attributes and client interactions",
      "Custom extenders for fetching and formatting feature data"
    ],
    "systemComponents": [
      {
        "name": "Style Explorer",
        "responsibility": "Predicts merchandise performance and assists in inventory curation."
      },
      {
        "name": "Imagery Extender",
        "responsibility": "Featurizes product images to extract visual attributes."
      },
      {
        "name": "Model Management Layer",
        "responsibility": "Stores and manages the deployment of trained models."
      },
      {
        "name": "Simulation Framework",
        "responsibility": "Simulates buying decisions to evaluate model effectiveness."
      },
      {
        "name": "Dimensionality Reduction System",
        "responsibility": "Reduces feature space complexity before model training."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://multithreaded.stitchfix.com/blog/2021/05/12/algorithm-assisted-inventory-curation/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 185,
    "company": "Twitter",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Forecast resource usage and cost",
    "title": "Forecasting SQL query resource usage with machine learning",
    "url": "https://blog.twitter.com/engineering/en_us/topics/insights/2021/forecasting-sql-query-resource-usage-with-machine-learning",
    "year": 2021,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Google Cloud Storage (GCS)",
      "Training cluster for model training",
      "Serving cluster for model serving"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Twitter's Interactive Query team developed a SQL federation system to handle increasing data analytics needs on a petabyte scale.",
      "The team implemented a machine learning-based prediction system to forecast SQL query resource usage, addressing issues like query scheduling and elastic scaling.",
      "Two models were trained on historical SQL query logs to predict CPU time and peak memory usage, achieving over 97% accuracy.",
      "The system utilizes a web-based prediction service that exposes RESTful API endpoints for real-time resource usage forecasting."
    ],
    "summary": "Twitter's Interactive Query team developed a SQL federation system to handle increasing data analytics needs on a petabyte scale. The team implemented a machine learning-based prediction system to forecast SQL query resource usage, addressing issues like query scheduling and elastic scaling. Two models were trained on historical SQL query logs to predict CPU time and peak memory usage, achieving over 97% accuracy. The system utilizes a web-based prediction service that exposes RESTful API endpoints for real-time resource usage forecasting.",
    "infraDetails": [
      "Google Cloud Storage (GCS)",
      "Training cluster for model training",
      "Serving cluster for model serving"
    ],
    "systemComponents": [
      {
        "name": "Training Cluster",
        "responsibility": "Performs data cleaning, discretization, and model training."
      },
      {
        "name": "Model Repository",
        "responsibility": "Stores trained models in a central repository."
      },
      {
        "name": "Serving Cluster",
        "responsibility": "Fetches models and serves predictions via a web application."
      },
      {
        "name": "Prediction Service",
        "responsibility": "Exposes RESTful API endpoints for forecasting CPU time and peak memory."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://blog.twitter.com/engineering/en_us/topics/insights/2021/forecasting-sql-query-resource-usage-with-machine-learning",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 186,
    "company": "Google",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Suggest past photos to look at",
    "title": "A snapshot of AI-powered reminiscing in Google Photos",
    "url": "https://medium.com/people-ai-research/a-snapshot-of-ai-powered-reminiscing-in-google-photos-5a05d2f2aa46",
    "year": 2021,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/people-ai-research/a-snapshot-of-ai-powered-reminiscing-in-google-photos-5a05d2f2aa46",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 187,
    "company": "Uber",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Identify cash intermediaries",
    "title": "Applying Machine Learning in Internal Audit with Sparsely Labeled Data",
    "url": "https://www.uber.com/en-GB/blog/ml-internal-audit/",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Random Forest and Gradient Boosted Decision Trees for model training",
      "Support Vector Machine for final predictions"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Uber applied machine learning to identify cash intermediaries in internal audits, addressing the challenge of sparsely labeled data.",
      "The initial approach involved heuristic methods and SQL, which proved limited due to the complexity of relationships between agents and non-agents.",
      "A dual-model architecture was developed, utilizing transaction-level and vendor-level data to improve predictions of agents.",
      "The final model combined tree-based methods and Support Vector Machines, optimizing for recall and balanced accuracy to handle imbalanced data."
    ],
    "summary": "Uber applied machine learning to identify cash intermediaries in internal audits, addressing the challenge of sparsely labeled data. The initial approach involved heuristic methods and SQL, which proved limited due to the complexity of relationships between agents and non-agents. A dual-model architecture was developed, utilizing transaction-level and vendor-level data to improve predictions of agents. The final model combined tree-based methods and Support Vector Machines, optimizing for recall and balanced accuracy to handle imbalanced data.",
    "infraDetails": [
      "Random Forest and Gradient Boosted Decision Trees for model training",
      "Support Vector Machine for final predictions"
    ],
    "systemComponents": [
      {
        "name": "Data Ingestion Module",
        "responsibility": "Ingests data from the Spend Management platform for analysis."
      },
      {
        "name": "Heuristic Engine",
        "responsibility": "Builds initial heuristics based on local team inquiries to identify potential agents."
      },
      {
        "name": "Model Training Pipeline",
        "responsibility": "Trains machine learning models using transaction-level and vendor-level data."
      },
      {
        "name": "Prediction Aggregation Module",
        "responsibility": "Aggregates predictions from the first model to prepare data for the final prediction model."
      },
      {
        "name": "Final Prediction Model",
        "responsibility": "Uses all features to make the final predictions on vendor classification."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.uber.com/en-GB/blog/ml-internal-audit/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 188,
    "company": "Microsoft",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Cluster customer support issues by similarity",
    "title": "ML and customer support (Part 2): Leveraging topic modeling to identify the top investment areas in support cases",
    "url": "https://medium.com/data-science-at-microsoft/ml-and-customer-support-part-2-leveraging-topic-modeling-to-identify-the-top-investment-areas-in-f0348382c251",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/data-science-at-microsoft/ml-and-customer-support-part-2-leveraging-topic-modeling-to-identify-the-top-investment-areas-in-f0348382c251",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 189,
    "company": "Gousto",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Recommend food items and recipes",
    "title": "Gousto R-series vol 1: Three tales of the Rouxcommender family",
    "url": "https://medium.com/gousto-engineering-techbrunch/gousto-r-series-vol-1-three-tales-of-the-rouxcommender-family-a3555a93edea",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/gousto-engineering-techbrunch/gousto-r-series-vol-1-three-tales-of-the-rouxcommender-family-a3555a93edea",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 190,
    "company": "Apple",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Recognize people in photos",
    "title": "Recognizing People in Photos Through Private On-Device Machine Learning",
    "url": "https://machinelearning.apple.com/research/recognizing-people-photos",
    "year": 2021,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Deep neural networks for feature extraction"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Apple's Photos app utilizes on-device machine learning to recognize people in images, enhancing user experience by allowing easy browsing and organization of photos.",
      "The system builds a private knowledge graph that learns from identity information, enabling features like the Memories function that curates themed video vignettes.",
      "Challenges include ensuring equitable recognition across diverse demographics and accurately identifying individuals in dynamic scenes with varying conditions.",
      "The recognition process involves constructing a gallery of known individuals through clustering techniques and assigning new observations to this gallery using advanced embedding methods."
    ],
    "summary": "Apple's Photos app utilizes on-device machine learning to recognize people in images, enhancing user experience by allowing easy browsing and organization of photos. The system builds a private knowledge graph that learns from identity information, enabling features like the Memories function that curates themed video vignettes. Challenges include ensuring equitable recognition across diverse demographics and accurately identifying individuals in dynamic scenes with varying conditions. The recognition process involves constructing a gallery of known individuals through clustering techniques and assigning new observations to this gallery using advanced embedding methods.",
    "infraDetails": [
      "Deep neural networks for feature extraction"
    ],
    "systemComponents": [
      {
        "name": "Photos App",
        "responsibility": "Provides user interface for browsing and organizing images."
      },
      {
        "name": "Recognition Algorithm",
        "responsibility": "Identifies individuals in images using embeddings and clustering."
      },
      {
        "name": "Knowledge Graph",
        "responsibility": "Learns and organizes identity information to enhance user experience."
      },
      {
        "name": "Clustering Engine",
        "responsibility": "Builds and updates the gallery of known individuals from user photos."
      },
      {
        "name": "Feature Extraction Module",
        "responsibility": "Extracts face and upper body embeddings from images."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://machinelearning.apple.com/research/recognizing-people-photos",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 191,
    "company": "Pinterest",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Find lookalike users for ad targeting",
    "title": "The machine learning behind delivering relevant ads",
    "url": "https://medium.com/pinterest-engineering/the-machine-learning-behind-delivering-relevant-ads-8987fc5ba1c0",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/pinterest-engineering/the-machine-learning-behind-delivering-relevant-ads-8987fc5ba1c0",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 192,
    "company": "Pinterest",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Detect spam users",
    "title": "Fighting Spam using Clustering and Automated Rule Creation",
    "url": "https://medium.com/pinterest-engineering/fighting-spam-using-clustering-and-automated-rule-creation-1c01d8c11a05",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/pinterest-engineering/fighting-spam-using-clustering-and-automated-rule-creation-1c01d8c11a05",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 193,
    "company": "PayPal",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Detect payment fraud",
    "title": "Deploying Large-scale Fraud Detection Machine Learning Models at PayPal",
    "url": "https://medium.com/paypal-tech/machine-learning-model-ci-cd-and-shadow-platform-8c4f44998c78",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/paypal-tech/machine-learning-model-ci-cd-and-shadow-platform-8c4f44998c78",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 194,
    "company": "Datto",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Predict hard drive failures",
    "title": "Predicting Hard Drive Failure with Machine Learning",
    "url": "https://datto.engineering/post/predicting-hard-drive-failure-with-machine-learning",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "Fetch error",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": false,
    "summarySource": "missing"
  },
  {
    "id": 195,
    "company": "Bumble",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Detect rude messages",
    "title": "Multilingual message content moderation at scale (part 2)",
    "url": "https://medium.com/bumble-tech/multilingual-message-content-moderation-at-scale-7ea562e29e25",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/bumble-tech/multilingual-message-content-moderation-at-scale-7ea562e29e25",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 196,
    "company": "Nextdoor",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Send relevant and timely updates",
    "title": "Nextdoor Notifications: How we use ML to keep neighbors informed",
    "url": "https://engblog.nextdoor.com/nextdoor-notifications-how-we-use-ml-to-keep-neighbors-informed-57d8f707aab0?gi=85c7ad8c8658",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Redis store for candidate retrieval and notification budgets",
      "Event-driven architecture for triggering the notification pipeline"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Nextdoor uses machine learning to enhance the relevance and timeliness of notifications sent to neighbors about local updates.",
      "The system transitioned from a heuristic approach to a machine learning model that predicts the relevance of notifications based on various features.",
      "A notification budget is implemented to control the volume of notifications sent to each neighbor, ensuring a balance between engagement and user experience.",
      "Personalized thresholds for sending notifications are dynamically adjusted using a PID controller to optimize the notification budget for each neighbor."
    ],
    "summary": "Nextdoor uses machine learning to enhance the relevance and timeliness of notifications sent to neighbors about local updates. The system transitioned from a heuristic approach to a machine learning model that predicts the relevance of notifications based on various features. A notification budget is implemented to control the volume of notifications sent to each neighbor, ensuring a balance between engagement and user experience. Personalized thresholds for sending notifications are dynamically adjusted using a PID controller to optimize the notification budget for each neighbor.",
    "infraDetails": [
      "Redis store for candidate retrieval and notification budgets",
      "Event-driven architecture for triggering the notification pipeline"
    ],
    "systemComponents": [
      {
        "name": "Notification Pipeline",
        "responsibility": "Handles the flow of notifications from creation to delivery based on engagement events."
      },
      {
        "name": "Relevance Model",
        "responsibility": "Predicts the relevance of notifications to neighbors using features from posts, recipients, and authors."
      },
      {
        "name": "Budget Model",
        "responsibility": "Calculates and updates the weekly notification budget for each neighbor based on engagement metrics."
      },
      {
        "name": "PID Controller",
        "responsibility": "Dynamically adjusts thresholds for sending notifications to meet budget constraints."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engblog.nextdoor.com/nextdoor-notifications-how-we-use-ml-to-keep-neighbors-informed-57d8f707aab0?gi=85c7ad8c8658",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 197,
    "company": "Dropbox",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Identify best time for renewal charge",
    "title": "Optimizing payments with machine learning",
    "url": "https://dropbox.tech/machine-learning/optimizing-payments-with-machine-learning",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Edgestore (metadata storage system)",
      "Airflow (for scheduling data collection jobs)",
      "Stormcrow (internal feature gating service)"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Dropbox optimized its payment processing by applying machine learning to determine the best times for charging customers during subscription renewals.",
      "The previous static rule-based system for managing payment retries was replaced with a machine learning model that predicts optimal charge times, resulting in increased success rates and reduced involuntary churn.",
      "The implementation of a Predict Service allowed for faster prediction latencies and a cleaner separation of concerns between the Payments Platform and the machine learning infrastructure."
    ],
    "summary": "Dropbox optimized its payment processing by applying machine learning to determine the best times for charging customers during subscription renewals. The previous static rule-based system for managing payment retries was replaced with a machine learning model that predicts optimal charge times, resulting in increased success rates and reduced involuntary churn. The implementation of a Predict Service allowed for faster prediction latencies and a cleaner separation of concerns between the Payments Platform and the machine learning infrastructure.",
    "infraDetails": [
      "Edgestore (metadata storage system)",
      "Airflow (for scheduling data collection jobs)",
      "Stormcrow (internal feature gating service)"
    ],
    "systemComponents": [
      {
        "name": "Payments Platform",
        "responsibility": "Manages payment processing and lifecycle for customers."
      },
      {
        "name": "Predict Service",
        "responsibility": "Serves machine learning model predictions for optimal charge times."
      },
      {
        "name": "Edgestore",
        "responsibility": "Stores customer metadata and signals relevant for payment processing."
      },
      {
        "name": "Airflow",
        "responsibility": "Schedules and automates data collection jobs."
      },
      {
        "name": "Stormcrow",
        "responsibility": "Facilitates internal feature gating for targeting customer segments."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://dropbox.tech/machine-learning/optimizing-payments-with-machine-learning",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 198,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Rank restaurants in search",
    "title": "Learning To Rank Restaurants",
    "url": "https://bytes.swiggy.com/learning-to-rank-restaurants-c6a69ba4b330",
    "year": 2021,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for customer order history and engagement metrics",
      "Batch processing systems for offline simulations and model training",
      "Real-time streaming systems for capturing customer interactions",
      "Feature stores for managing and serving features to models",
      "Model serving infrastructure for deploying ranking models",
      "Monitoring systems for tracking model performance and metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Swiggy's restaurant ranking models have evolved from simple utility functions to advanced deep learning architectures to enhance user experience.",
      "The new models focus on multi-objective optimization, balancing relevance with other business goals like delivery experience.",
      "Pairwise loss functions have been found to outperform pointwise loss in learning the relative ordering of restaurants.",
      "The architecture incorporates a Wide and Deep model with TensorFlow Lattice to improve memorization of individual customer preferences.",
      "Future improvements will include customer segment-specific models and the integration of more real-time signals."
    ],
    "summary": "Swiggy's restaurant ranking models have evolved from simple utility functions to advanced deep learning architectures to enhance user experience. The new models focus on multi-objective optimization, balancing relevance with other business goals like delivery experience. Pairwise loss functions have been found to outperform pointwise loss in learning the relative ordering of restaurants. The architecture incorporates a Wide and Deep model with TensorFlow Lattice to improve memorization of individual customer preferences. Future improvements will include customer segment-specific models and the integration of more real-time signals.",
    "infraDetails": [
      "Data stores for customer order history and engagement metrics",
      "Batch processing systems for offline simulations and model training",
      "Real-time streaming systems for capturing customer interactions",
      "Feature stores for managing and serving features to models",
      "Model serving infrastructure for deploying ranking models",
      "Monitoring systems for tracking model performance and metrics"
    ],
    "systemComponents": [
      {
        "name": "Ranking Model",
        "responsibility": "Predicts the relevance of restaurants based on customer context and preferences."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves features used in the ranking models."
      },
      {
        "name": "Data Processing Pipeline",
        "responsibility": "Handles the collection and processing of customer order data for model training."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance metrics and alerts for any anomalies."
      },
      {
        "name": "Orchestration Tool",
        "responsibility": "Coordinates the workflow of data processing, model training, and serving."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/learning-to-rank-restaurants-c6a69ba4b330",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 199,
    "company": "Brex",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Classify bank transactions",
    "title": "How We Built a (Mostly) Automated System to Solve Credit Card Merchant Classification",
    "url": "https://medium.com/brexeng/how-we-built-a-mostly-automated-system-to-solve-credit-card-merchant-classification-f9108029e59b",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/brexeng/how-we-built-a-mostly-automated-system-to-solve-credit-card-merchant-classification-f9108029e59b",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 200,
    "company": "Grammarly",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Capture what readers pay attention to",
    "title": "ATTN: How Grammarly's NLP/ML Team Figured Out Where Readers Focus in an Email",
    "url": "https://www.grammarly.com/blog/engineering/readers-attention/",
    "year": 2021,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data stores for storing evaluation datasets and model outputs",
      "Batch processing systems for aggregating reader attention data",
      "Feature stores for managing and serving linguistic features used in modeling",
      "Model serving infrastructure for deploying attention models",
      "Monitoring systems for evaluating model performance and user interactions"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grammarly's NLP/ML team developed a method to measure reader attention in emails using an attention heatmap.",
      "The team faced challenges in creating an evaluation dataset for attention, as it is a subjective human behavior that cannot be directly labeled.",
      "They implemented a reading speed measurement technique to approximate attention, allowing for scalable data collection.",
      "The model for reader attention was built using linguistic features and a cost-value approach, significantly improving accuracy over previous methods."
    ],
    "summary": "Grammarly's NLP/ML team developed a method to measure reader attention in emails using an attention heatmap. The team faced challenges in creating an evaluation dataset for attention, as it is a subjective human behavior that cannot be directly labeled. They implemented a reading speed measurement technique to approximate attention, allowing for scalable data collection. The model for reader attention was built using linguistic features and a cost-value approach, significantly improving accuracy over previous methods.",
    "infraDetails": [
      "Data stores for storing evaluation datasets and model outputs",
      "Batch processing systems for aggregating reader attention data",
      "Feature stores for managing and serving linguistic features used in modeling",
      "Model serving infrastructure for deploying attention models",
      "Monitoring systems for evaluating model performance and user interactions"
    ],
    "systemComponents": [
      {
        "name": "Attention Heatmap Generator",
        "responsibility": "Creates visual representations of reader attention based on model predictions."
      },
      {
        "name": "Data Collection Interface",
        "responsibility": "Facilitates the reading task for participants to gather attention data."
      },
      {
        "name": "Attention Model",
        "responsibility": "Predicts reader attention based on linguistic features and reading behavior."
      },
      {
        "name": "Evaluation Dataset Builder",
        "responsibility": "Constructs datasets for training and validating the attention model."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks model performance metrics and user engagement with the attention features."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.grammarly.com/blog/engineering/readers-attention/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 201,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Extract information from images",
    "title": "How DoorDash Quickly Spins Up Multiple Image Recognition Use Cases",
    "url": "https://doordash.engineering/2021/11/03/how-doordash-quickly-spins-up-multiple-image-recognition-use-cases/",
    "year": 2021,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Image data stores for storing incoming images.",
      "ETL (Extract-Transform-Load) jobs for data processing.",
      "Model tracking dashboards for monitoring performance.",
      "Data augmentation techniques for improving model training."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash developed an in-house image recognition solution to efficiently process large volumes of image data collected by delivery drivers.",
      "The new system allows for rapid iteration and deployment of models, leveraging transfer learning and pre-trained models to minimize resource expenditure.",
      "By integrating the solution with existing data sources, DoorDash can quickly analyze images while ensuring compliance with privacy regulations.",
      "The lightweight pipeline enables quick onboarding of new use cases, enhancing operational efficiency and reducing reliance on third-party vendors."
    ],
    "summary": "DoorDash developed an in-house image recognition solution to efficiently process large volumes of image data collected by delivery drivers. The new system allows for rapid iteration and deployment of models, leveraging transfer learning and pre-trained models to minimize resource expenditure. By integrating the solution with existing data sources, DoorDash can quickly analyze images while ensuring compliance with privacy regulations. The lightweight pipeline enables quick onboarding of new use cases, enhancing operational efficiency and reducing reliance on third-party vendors.",
    "infraDetails": [
      "Image data stores for storing incoming images.",
      "ETL (Extract-Transform-Load) jobs for data processing.",
      "Model tracking dashboards for monitoring performance.",
      "Data augmentation techniques for improving model training."
    ],
    "systemComponents": [
      {
        "name": "Image Recognition Models",
        "responsibility": "Train and classify images using deep learning techniques."
      },
      {
        "name": "ETL Pipeline",
        "responsibility": "Process and transform image data for model input and output."
      },
      {
        "name": "Real-Time Prediction Service",
        "responsibility": "Serve trained models for real-time image analysis."
      },
      {
        "name": "Model Tracking Dashboard",
        "responsibility": "Monitor and evaluate model performance and job status."
      },
      {
        "name": "Data Store",
        "responsibility": "Store raw images and processed outputs for downstream services."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://doordash.engineering/2021/11/03/how-doordash-quickly-spins-up-multiple-image-recognition-use-cases/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 202,
    "company": "Apple",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Identify best user experience",
    "title": "Interpretable Adaptive Optimization",
    "url": "https://machinelearning.apple.com/research/interpretable-adaptive-optimization",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for user feedback aggregation",
      "Batch processing systems for statistical analysis",
      "Feature stores for managing treatment variants",
      "Model serving infrastructure for deploying optimization algorithms",
      "Monitoring systems for tracking performance and user interactions"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Apple's Interpretable Adaptive Optimization focuses on enhancing user experience while maintaining privacy through statistical learning algorithms.",
      "The system employs Bayesian inference and reinforcement learning to adaptively optimize user interactions based on delayed and anonymized feedback.",
      "By integrating hypothesis testing with multi-armed bandit approaches, the system allows human operators to make informed decisions while maximizing yield.",
      "Empirical Bayesian shrinkage estimation is utilized to improve reward estimation in the presence of noise, enhancing the stability of treatment assignments."
    ],
    "summary": "Apple's Interpretable Adaptive Optimization focuses on enhancing user experience while maintaining privacy through statistical learning algorithms. The system employs Bayesian inference and reinforcement learning to adaptively optimize user interactions based on delayed and anonymized feedback. By integrating hypothesis testing with multi-armed bandit approaches, the system allows human operators to make informed decisions while maximizing yield. Empirical Bayesian shrinkage estimation is utilized to improve reward estimation in the presence of noise, enhancing the stability of treatment assignments.",
    "infraDetails": [
      "Data stores for user feedback aggregation",
      "Batch processing systems for statistical analysis",
      "Feature stores for managing treatment variants",
      "Model serving infrastructure for deploying optimization algorithms",
      "Monitoring systems for tracking performance and user interactions"
    ],
    "systemComponents": [
      {
        "name": "Feedback Aggregator",
        "responsibility": "Collects and anonymizes user feedback for analysis."
      },
      {
        "name": "Bayesian Inference Engine",
        "responsibility": "Applies Bayesian methods to estimate treatment rewards and uncertainties."
      },
      {
        "name": "Reinforcement Learning Agent",
        "responsibility": "Adapts treatment selections based on user feedback and optimization goals."
      },
      {
        "name": "Hypothesis Testing Module",
        "responsibility": "Conducts statistical tests to evaluate the performance of different treatment variants."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks the performance of treatments and provides insights for human operators."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://machinelearning.apple.com/research/interpretable-adaptive-optimization",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 203,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Data privacy and security",
    "title": "Automating Data Protection at Scale, Part 2",
    "url": "https://medium.com/airbnb-engineering/automating-data-protection-at-scale-part-2-c2b8d2068216",
    "year": 2021,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/airbnb-engineering/automating-data-protection-at-scale-part-2-c2b8d2068216",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 204,
    "company": "Capital One",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Identify suspicious account activity",
    "title": "How Machine Learning Can Help Fight Money Laundering",
    "url": "https://www.capitalone.com/tech/machine-learning/how-machine-learning-can-help-fight-money-laundering/",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Data stores for customer and transaction attributes",
      "Machine learning model serving infrastructure",
      "Feature store for managing model features",
      "Monitoring systems for alert generation and triage",
      "Orchestration tools for model training and deployment"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Machine learning (ML) is being integrated into anti-money laundering (AML) efforts to enhance the detection of suspicious account activities.",
      "Traditional rule-based monitoring systems are becoming less effective due to the evolving tactics of criminals, necessitating a shift to ML-based approaches.",
      "Capital One's ML system utilizes a random forest model to analyze customer and transaction data, providing a score that indicates the likelihood of suspicious activity.",
      "The system allows for rapid adaptability and prioritization of investigations, improving the efficiency of AML teams.",
      "Regular audits and feature pruning ensure the model remains accurate and relevant to changing customer behaviors."
    ],
    "summary": "Machine learning (ML) is being integrated into anti-money laundering (AML) efforts to enhance the detection of suspicious account activities. Traditional rule-based monitoring systems are becoming less effective due to the evolving tactics of criminals, necessitating a shift to ML-based approaches. Capital One's ML system utilizes a random forest model to analyze customer and transaction data, providing a score that indicates the likelihood of suspicious activity. The system allows for rapid adaptability and prioritization of investigations, improving the efficiency of AML teams. Regular audits and feature pruning ensure the model remains accurate and relevant to changing customer behaviors.",
    "infraDetails": [
      "Data stores for customer and transaction attributes",
      "Machine learning model serving infrastructure",
      "Feature store for managing model features",
      "Monitoring systems for alert generation and triage",
      "Orchestration tools for model training and deployment"
    ],
    "systemComponents": [
      {
        "name": "Random Forest Model",
        "responsibility": "Analyzes transaction data to generate scores indicating suspicious activity."
      },
      {
        "name": "Feature Engineering Module",
        "responsibility": "Creates and manages features based on customer and transaction attributes."
      },
      {
        "name": "Alert Triage System",
        "responsibility": "Prioritizes alerts based on scores to streamline investigations."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Provides insights and transparency for AML investigators."
      },
      {
        "name": "Model Training Pipeline",
        "responsibility": "Handles the training and updating of the machine learning model."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.capitalone.com/tech/machine-learning/how-machine-learning-can-help-fight-money-laundering/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 205,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Assign color names to products",
    "title": "From RGB to Descriptive Color Names: Wayfair's in-house color algorithms to improve customer shopping experience.",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/from-rgb-to-descriptive-color-names-wayfairs-in-house-color-algorithms-to-improve-customer-shopping-experience",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Mini-batch K-means for clustering RGB values",
      "Faiss for similarity search and nearest neighbor mapping",
      "GPU acceleration for optimized index search"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed an in-house color algorithm to improve the shopping experience by assigning descriptive color names to products based on their RGB values.",
      "The algorithm captures the relationship between RGBs and color names through a hierarchical color taxonomy, allowing for accurate and granular color tagging.",
      "This system aims to enhance customer satisfaction by ensuring that product searches yield relevant results, such as filtering for specific shades like 'Teal Sofa'.",
      "The color tagging pipeline involves extracting dominant colors from product images and mapping them to the defined color taxonomy for accurate tagging."
    ],
    "summary": "Wayfair developed an in-house color algorithm to improve the shopping experience by assigning descriptive color names to products based on their RGB values. The algorithm captures the relationship between RGBs and color names through a hierarchical color taxonomy, allowing for accurate and granular color tagging. This system aims to enhance customer satisfaction by ensuring that product searches yield relevant results, such as filtering for specific shades like 'Teal Sofa'. The color tagging pipeline involves extracting dominant colors from product images and mapping them to the defined color taxonomy for accurate tagging.",
    "infraDetails": [
      "Mini-batch K-means for clustering RGB values",
      "Faiss for similarity search and nearest neighbor mapping",
      "GPU acceleration for optimized index search"
    ],
    "systemComponents": [
      {
        "name": "Color Taxonomy",
        "responsibility": "Defines the hierarchical relationship between RGB values and their associated color names."
      },
      {
        "name": "Color Tagging Pipeline",
        "responsibility": "Extracts dominant colors from product images and maps them to the color taxonomy."
      },
      {
        "name": "RGB Clustering Module",
        "responsibility": "Clusters RGB values from product images to identify dominant colors."
      },
      {
        "name": "Similarity Search Engine",
        "responsibility": "Utilizes Faiss for efficient nearest neighbor searches to map extracted colors to the taxonomy."
      },
      {
        "name": "Human-in-the-loop Evaluation System",
        "responsibility": "Evaluates the accuracy of color tags through human feedback."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/from-rgb-to-descriptive-color-names-wayfairs-in-house-color-algorithms-to-improve-customer-shopping-experience",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 206,
    "company": "Capital One",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Automate incident management",
    "title": "Automated detection, diagnosis & remediation of app failure",
    "url": "https://www.capitalone.com/tech/machine-learning/automated-detection-diagnosis-remediation-of-application-failure/",
    "year": 2021,
    "category": "anomaly_ops",
    "categoryLabel": "Anomaly and operations",
    "components": [
      "Real-time monitoring tools",
      "Data streaming infrastructure",
      "Inference engine for anomaly detection",
      "Integration of monitoring data across technology stack"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Capital One has automated incident management to quickly detect, diagnose, and remediate application failures using machine learning.",
      "The complexity of modern applications necessitates a robust system to analyze large volumes of data generated during failures.",
      "By integrating machine learning with existing monitoring tools, Capital One aims to reduce the time engineers spend identifying the root causes of issues.",
      "The system captures and analyzes real-time data from various components, enabling faster resolution of incidents and improved customer experience."
    ],
    "summary": "Capital One has automated incident management to quickly detect, diagnose, and remediate application failures using machine learning. The complexity of modern applications necessitates a robust system to analyze large volumes of data generated during failures. By integrating machine learning with existing monitoring tools, Capital One aims to reduce the time engineers spend identifying the root causes of issues. The system captures and analyzes real-time data from various components, enabling faster resolution of incidents and improved customer experience.",
    "infraDetails": [
      "Real-time monitoring tools",
      "Data streaming infrastructure",
      "Inference engine for anomaly detection",
      "Integration of monitoring data across technology stack"
    ],
    "systemComponents": [
      {
        "name": "Monitoring Tools",
        "responsibility": "Capture and monitor application performance and health."
      },
      {
        "name": "Inference Engine",
        "responsibility": "Analyze monitoring data to detect anomalies indicative of application failures."
      },
      {
        "name": "Causal Model",
        "responsibility": "Identify the root cause of failures based on detected anomalies."
      },
      {
        "name": "Data Integration Layer",
        "responsibility": "Stream and integrate data from multiple sources for real-time analysis."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.capitalone.com/tech/machine-learning/automated-detection-diagnosis-remediation-of-application-failure/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 207,
    "company": "Pinterest",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Detect policy-violating comments",
    "title": "How Pinterest powers a healthy comment ecosystem with machine learning",
    "url": "https://medium.com/pinterest-engineering/how-pinterest-powers-a-healthy-comment-ecosystem-with-machine-learning-9e5c3414c8ad",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/pinterest-engineering/how-pinterest-powers-a-healthy-comment-ecosystem-with-machine-learning-9e5c3414c8ad",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 208,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Personalize homepage content (podcasts, playlist, music)",
    "title": "The Rise (and Lessons Learned) of ML Models to Personalize Content on Home (Part I)",
    "url": "https://engineering.atspotify.com/2021/11/the-rise-and-lessons-learned-of-ml-models-to-personalize-content-on-home-part-i/",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Real-time model serving infrastructure",
      "Automated feature logging system",
      "Scheduled Scio pipelines for feature transformation",
      "Kubeflow pipelines for model retraining",
      "Data validation mechanisms for training and serving features"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Spotify uses machine learning models to personalize the content displayed on users' Home pages, focusing on music and podcasts.",
      "The recommendation process involves two stages: candidate generation and ranking, with the first part being the focus of this article.",
      "The ML stack has evolved to automate processes for deploying and maintaining models, improving reliability and speed of iterations.",
      "Key challenges included ensuring consistent feature processing between training and serving, which was addressed through unified data handling and validation."
    ],
    "summary": "Spotify uses machine learning models to personalize the content displayed on users' Home pages, focusing on music and podcasts. The recommendation process involves two stages: candidate generation and ranking, with the first part being the focus of this article. The ML stack has evolved to automate processes for deploying and maintaining models, improving reliability and speed of iterations. Key challenges included ensuring consistent feature processing between training and serving, which was addressed through unified data handling and validation.",
    "infraDetails": [
      "Real-time model serving infrastructure",
      "Automated feature logging system",
      "Scheduled Scio pipelines for feature transformation",
      "Kubeflow pipelines for model retraining",
      "Data validation mechanisms for training and serving features"
    ],
    "systemComponents": [
      {
        "name": "Podcast Model",
        "responsibility": "Predicts podcasts a listener is likely to enjoy."
      },
      {
        "name": "Shortcuts Model",
        "responsibility": "Predicts the listener\u2019s next familiar listen."
      },
      {
        "name": "Playlists Model",
        "responsibility": "Predicts playlists a new listener is likely to enjoy."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.atspotify.com/2021/11/the-rise-and-lessons-learned-of-ml-models-to-personalize-content-on-home-part-i/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 209,
    "company": "Stitch Fix",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend looks",
    "title": "Stitching together spaces for query-based recommendations",
    "url": "https://multithreaded.stitchfix.com/blog/2021/08/13/stitching-together-spaces-for-query-based-recommendations/",
    "year": 2021,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for catalog and client information",
      "Multi-objective ranking system"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Stitch Fix employs query-based recommendations to enhance personalized shopping experiences by incorporating contextual elements into their recommendation system.",
      "The system utilizes computer vision to analyze community inspiration images, mapping detected clothing items to a catalog of anchor items for personalized recommendations.",
      "By leveraging latent embeddings and client preferences, the recommendations are tailored to individual clients while ensuring diversity in the suggested items."
    ],
    "summary": "Stitch Fix employs query-based recommendations to enhance personalized shopping experiences by incorporating contextual elements into their recommendation system. The system utilizes computer vision to analyze community inspiration images, mapping detected clothing items to a catalog of anchor items for personalized recommendations. By leveraging latent embeddings and client preferences, the recommendations are tailored to individual clients while ensuring diversity in the suggested items.",
    "infraDetails": [
      "Data stores for catalog and client information",
      "Multi-objective ranking system"
    ],
    "systemComponents": [
      {
        "name": "Client Recommendations Team",
        "responsibility": "Leads the development of query-based personalized recommendations."
      },
      {
        "name": "Core Representation Learning Team",
        "responsibility": "Builds the latent style space for item representation."
      },
      {
        "name": "Styling Recommendations Team",
        "responsibility": "Develops personalization affinity scores for recommendations."
      },
      {
        "name": "Shop Recommendations Team",
        "responsibility": "Creates image and item similarity services."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://multithreaded.stitchfix.com/blog/2021/08/13/stitching-together-spaces-for-query-based-recommendations/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 210,
    "company": "Ocado",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Forecast e-commerce grocery demand",
    "title": "Finding the sweet spot",
    "url": "https://careers.ocadogroup.com/blogs/careers-blogs/our-technologies/finding-the-sweet-spot",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for storing historical sales data and forecasts",
      "Batch processing systems for generating daily forecasts",
      "Feature stores for managing and serving features used in machine learning models",
      "Model serving infrastructure for deploying and scaling forecasting models",
      "Monitoring systems to track forecast accuracy and model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Accurate demand forecasting is crucial for e-commerce grocery retailers to balance stock levels and customer satisfaction.",
      "Ocado employs a variety of machine learning models, including deep neural networks, to generate forecasts that adapt to changing demand patterns.",
      "The system utilizes heuristic algorithms for new retailers and automates the optimization of forecasts based on recent sales data.",
      "Future developments include general neural networks that can quickly adapt to new retailers and models that estimate forecast uncertainty."
    ],
    "summary": "Accurate demand forecasting is crucial for e-commerce grocery retailers to balance stock levels and customer satisfaction. Ocado employs a variety of machine learning models, including deep neural networks, to generate forecasts that adapt to changing demand patterns. The system utilizes heuristic algorithms for new retailers and automates the optimization of forecasts based on recent sales data. Future developments include general neural networks that can quickly adapt to new retailers and models that estimate forecast uncertainty.",
    "infraDetails": [
      "Data stores for storing historical sales data and forecasts",
      "Batch processing systems for generating daily forecasts",
      "Feature stores for managing and serving features used in machine learning models",
      "Model serving infrastructure for deploying and scaling forecasting models",
      "Monitoring systems to track forecast accuracy and model performance"
    ],
    "systemComponents": [
      {
        "name": "Forecasting Engine",
        "responsibility": "Generates demand forecasts using various machine learning models."
      },
      {
        "name": "Data Ingestion Pipeline",
        "responsibility": "Collects and processes sales data from retail partners."
      },
      {
        "name": "Heuristic Algorithm Module",
        "responsibility": "Provides initial forecasts for new retailers using simple heuristics."
      },
      {
        "name": "Neural Network Models",
        "responsibility": "Utilizes deep learning techniques to improve forecast accuracy over time."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks the performance and accuracy of forecasting models."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://careers.ocadogroup.com/blogs/careers-blogs/our-technologies/finding-the-sweet-spot",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 211,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Categorize e-commerce products",
    "title": "Deep Learning: Product Categorization and Shelving",
    "url": "https://medium.com/walmartglobaltech/deep-learning-product-categorization-and-shelving-630571e81e96",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for catalog data",
      "Batch processing for model training",
      "Feature store for product attributes",
      "Model serving infrastructure for predictions",
      "Monitoring tools for model performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Walmart's e-commerce platform faces challenges in product discoverability due to incorrect product categorization.",
      "The process involves identifying items with default taxonomy hierarchies and building models to predict the correct product type.",
      "A CNN-LSTM model was selected for its performance, achieving an accuracy of 88% on validation data.",
      "The project aims to improve SEO exposure and overall product discoverability by assigning the correct product taxonomy hierarchy."
    ],
    "summary": "Walmart's e-commerce platform faces challenges in product discoverability due to incorrect product categorization. The process involves identifying items with default taxonomy hierarchies and building models to predict the correct product type. A CNN-LSTM model was selected for its performance, achieving an accuracy of 88% on validation data. The project aims to improve SEO exposure and overall product discoverability by assigning the correct product taxonomy hierarchy.",
    "infraDetails": [
      "Data stores for catalog data",
      "Batch processing for model training",
      "Feature store for product attributes",
      "Model serving infrastructure for predictions",
      "Monitoring tools for model performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "Product Catalog API",
        "responsibility": "Handles the integration of newly assigned product taxonomy into the catalog."
      },
      {
        "name": "Model Training Pipeline",
        "responsibility": "Facilitates the training of the CNN-LSTM model using pre-processed product data."
      },
      {
        "name": "Validation Framework",
        "responsibility": "Manages the manual validation process for predicted product types."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/walmartglobaltech/deep-learning-product-categorization-and-shelving-630571e81e96",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 212,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend learning content",
    "title": "Mozrt, a Deep Learning Recommendation System Empowering Walmart Store Associates with a Personalized Learning Experience",
    "url": "https://medium.com/walmartglobaltech/mozrt-a-deep-learning-recommendation-system-empowering-walmart-store-associates-with-a-5d42c08d88da",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/walmartglobaltech/mozrt-a-deep-learning-recommendation-system-empowering-walmart-store-associates-with-a-5d42c08d88da",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 213,
    "company": "Walmart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Identify refrigeration defrost",
    "title": "Predicting Defrost in Refrigeration Cases at Walmart using Fourier Transform",
    "url": "https://medium.com/walmartglobaltech/predicting-defrost-in-refrigeration-cases-at-walmart-using-fourier-transform-e64c0c59323",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/walmartglobaltech/predicting-defrost-in-refrigeration-cases-at-walmart-using-fourier-transform-e64c0c59323",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 214,
    "company": "New York Times",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Recommend content to read",
    "title": "Machine Learning and Reader Input Help Us Recommend Articles",
    "url": "https://open.nytimes.com/we-recommend-articles-with-a-little-help-from-our-friends-machine-learning-and-reader-input-e17e85d6cf04",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for storing articles and their associated tags.",
      "Universal Sentence Encoder for generating vector representations of articles."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The New York Times developed a machine-learning model to enhance article recommendations based on reader interests.",
      "The model uses natural language processing to classify articles into multiple interest categories, moving away from cumbersome tag-based queries.",
      "An ensemble of logistic regression models was employed to improve prediction accuracy, utilizing LDA topic vectors, keyword vectors, and Universal Sentence Encoder embeddings.",
      "Despite improved performance, human oversight is deemed essential to ensure the relevance and appropriateness of recommendations."
    ],
    "summary": "The New York Times developed a machine-learning model to enhance article recommendations based on reader interests. The model uses natural language processing to classify articles into multiple interest categories, moving away from cumbersome tag-based queries. An ensemble of logistic regression models was employed to improve prediction accuracy, utilizing LDA topic vectors, keyword vectors, and Universal Sentence Encoder embeddings. Despite improved performance, human oversight is deemed essential to ensure the relevance and appropriateness of recommendations.",
    "infraDetails": [
      "Data stores for storing articles and their associated tags.",
      "Universal Sentence Encoder for generating vector representations of articles."
    ],
    "systemComponents": [
      {
        "name": "Article Classifier",
        "responsibility": "Predicts interests based on article text using multi-label classification."
      },
      {
        "name": "LDA Model",
        "responsibility": "Generates topic vectors representing the underlying topics of articles."
      },
      {
        "name": "Keyword Vector Generator",
        "responsibility": "Identifies and creates vectors based on unusually common words in articles."
      },
      {
        "name": "Universal Sentence Encoder",
        "responsibility": "Transforms article text into vector representations for semantic understanding."
      },
      {
        "name": "Editorial Oversight System",
        "responsibility": "Ensures human judgment is involved in the final recommendation process."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://open.nytimes.com/we-recommend-articles-with-a-little-help-from-our-friends-machine-learning-and-reader-input-e17e85d6cf04",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 215,
    "company": "Mercado Libre",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Forecast demand for e-commerce items",
    "title": "Marketplace Forecasting: Sales or Demand? Why not both? Let's find out!",
    "url": "https://medium.com/mercadolibre-tech/global-time-series-forecasting-models-for-item-level-demand-and-sales-forecasts-in-our-marketplace-aee2956957ae",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/mercadolibre-tech/global-time-series-forecasting-models-for-item-level-demand-and-sales-forecasts-in-our-marketplace-aee2956957ae",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 216,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Rank food dishes in search",
    "title": "Using Deep Learning for Ranking in Dish Search",
    "url": "https://bytes.swiggy.com/using-deep-learning-for-ranking-in-dish-search-4df2772dddce",
    "year": 2021,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Food index for dish retrieval",
      "Click-through data storage for training",
      "Feature transformation mechanisms for numerical inputs"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Swiggy's dish search involves two main steps: dish retrieval and dish ranking, which are crucial for understanding customer intent and providing relevant results.",
      "Deep learning techniques are employed to rank dishes based on various features, including dish relevance, restaurant characteristics, popularity, and delivery time.",
      "The ranking model is trained on historical click-through data, allowing it to learn which dishes are more relevant based on user interactions.",
      "A modular approach is used in the model architecture, where different input fields are processed separately before being combined to produce a final ranking score."
    ],
    "summary": "Swiggy's dish search involves two main steps: dish retrieval and dish ranking, which are crucial for understanding customer intent and providing relevant results. Deep learning techniques are employed to rank dishes based on various features, including dish relevance, restaurant characteristics, popularity, and delivery time. The ranking model is trained on historical click-through data, allowing it to learn which dishes are more relevant based on user interactions. A modular approach is used in the model architecture, where different input fields are processed separately before being combined to produce a final ranking score.",
    "infraDetails": [
      "Food index for dish retrieval",
      "Click-through data storage for training",
      "Feature transformation mechanisms for numerical inputs"
    ],
    "systemComponents": [
      {
        "name": "Dish Retrieval System",
        "responsibility": "Retrieves relevant dishes based on user queries from the food index."
      },
      {
        "name": "Ranking Model",
        "responsibility": "Scores and ranks the retrieved dishes based on various input features."
      },
      {
        "name": "Feature Store",
        "responsibility": "Stores and manages features related to dishes, restaurants, and user interactions."
      },
      {
        "name": "Click-Through Data Collector",
        "responsibility": "Collects and stores historical click-through data for model training."
      },
      {
        "name": "Embedding Layer",
        "responsibility": "Generates embeddings for dish names and queries to facilitate semantic understanding."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/using-deep-learning-for-ranking-in-dish-search-4df2772dddce",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 217,
    "company": "PayPal",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Recommend financial products",
    "title": "Cross-Selling Optimization Using Deep Learning",
    "url": "https://medium.com/paypal-tech/a-deep-learning-based-approach-to-optimizing-actions-e1ae9d1df152",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/paypal-tech/a-deep-learning-based-approach-to-optimizing-actions-e1ae9d1df152",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 218,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Automate ads placement and bidding",
    "title": "Evolution of Ads Bidding at Wayfair",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/evolution-of-ads-bidding-at-wayfair",
    "year": 2021,
    "category": "marketing_ads",
    "categoryLabel": "Marketing and ads",
    "components": [
      "Bidding Console for analysts to control bidding objectives and parameters.",
      "Observability tools for monitoring model performance and decision-making processes."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed an automated Ads Bidding Platform to optimize ad placements and bidding strategies across various channels.",
      "The platform addresses challenges from earlier ad bidding methods, such as duplication of efforts and lack of observability, by providing a centralized, extensible, and configurable system.",
      "Key components of the platform include data engineering, a bidding console, single bid calculators, and an arbitration mechanism to select the best bids from multiple approaches."
    ],
    "summary": "Wayfair developed an automated Ads Bidding Platform to optimize ad placements and bidding strategies across various channels. The platform addresses challenges from earlier ad bidding methods, such as duplication of efforts and lack of observability, by providing a centralized, extensible, and configurable system. Key components of the platform include data engineering, a bidding console, single bid calculators, and an arbitration mechanism to select the best bids from multiple approaches.",
    "infraDetails": [
      "Bidding Console for analysts to control bidding objectives and parameters.",
      "Observability tools for monitoring model performance and decision-making processes."
    ],
    "systemComponents": [
      {
        "name": "Data Engineering (FORGE)",
        "responsibility": "Processes and normalizes data for consumption by various systems."
      },
      {
        "name": "Bidding Console",
        "responsibility": "Allows analysts to set and control bidding objectives."
      },
      {
        "name": "Single Bid Calculator (SBC)",
        "responsibility": "Generates bids for individual bidding units using various data signals."
      },
      {
        "name": "Arbitration",
        "responsibility": "Determines the best bid from multiple SBC outputs."
      },
      {
        "name": "Observability Tools",
        "responsibility": "Provides insights into model performance and decision-making."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/evolution-of-ads-bidding-at-wayfair",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 219,
    "company": "Capital One",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Improve cardholder experience",
    "title": "Improving Virtual Card Numbers with Edge Machine Learning",
    "url": "https://www.capitalone.com/tech/machine-learning/edge-machine-learning-eno-virtual-card-numbers/",
    "year": 2021,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Data Monitoring Systems for rule and pattern maintenance",
      "Feature Engineering Tools for model development"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Capital One's Eno browser extension enhances the virtual card number (VCN) experience by using edge machine learning to improve the detection of payment pages and fields.",
      "The integration of machine learning allows for a more accurate and seamless VCN process, reducing reliance on brittle rules and manual maintenance.",
      "This initiative aims to enhance cardholder security by ensuring that VCNs are unique to each merchant, minimizing exposure to fraud.",
      "The project was driven by a diverse team of engineers from the Capital One Technology Development Program, showcasing a commitment to innovation and career development."
    ],
    "summary": "Capital One's Eno browser extension enhances the virtual card number (VCN) experience by using edge machine learning to improve the detection of payment pages and fields. The integration of machine learning allows for a more accurate and seamless VCN process, reducing reliance on brittle rules and manual maintenance. This initiative aims to enhance cardholder security by ensuring that VCNs are unique to each merchant, minimizing exposure to fraud. The project was driven by a diverse team of engineers from the Capital One Technology Development Program, showcasing a commitment to innovation and career development.",
    "infraDetails": [
      "Data Monitoring Systems for rule and pattern maintenance",
      "Feature Engineering Tools for model development"
    ],
    "systemComponents": [
      {
        "name": "Eno",
        "responsibility": "Intelligent assistant that manages virtual card numbers and enhances user experience."
      },
      {
        "name": "Machine Learning Model",
        "responsibility": "Automates the identification of payment pages and fields to improve accuracy."
      },
      {
        "name": "Feature Engineering Team",
        "responsibility": "Develops and maintains the machine learning capabilities for the Eno extension."
      },
      {
        "name": "Product Owner",
        "responsibility": "Guides the project vision and aligns the team with business objectives."
      },
      {
        "name": "Engineering Leads",
        "responsibility": "Oversee the technical implementation and integration of machine learning solutions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.capitalone.com/tech/machine-learning/edge-machine-learning-eno-virtual-card-numbers/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 220,
    "company": "Shopify",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Categorize e-commerce products",
    "title": "Using Rich Image and Text Data to Categorize Products at Scale",
    "url": "https://shopify.engineering/using-rich-image-text-data-categorize-products",
    "year": 2021,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Data stores for product information and categorization results.",
      "Batch processing systems for training the model on large datasets.",
      "Feature stores for managing and serving product features used in the model.",
      "Model serving infrastructure to provide real-time predictions to users.",
      "Monitoring systems to track model performance and accuracy metrics."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Shopify reevaluated its product categorization model to better understand the diverse products sold by millions of merchants.",
      "The new model improved leaf precision by 8% and doubled the coverage of product predictions.",
      "Key metrics for the model included accuracy and coverage, ensuring predictions were both correct and widely applicable.",
      "The categorization process utilized a hierarchical structure based on the Google Product Taxonomy, which presents unique challenges.",
      "The model incorporated both text and image features through transfer learning, using pre-trained models for embeddings."
    ],
    "summary": "Shopify reevaluated its product categorization model to better understand the diverse products sold by millions of merchants. The new model improved leaf precision by 8% and doubled the coverage of product predictions. Key metrics for the model included accuracy and coverage, ensuring predictions were both correct and widely applicable. The categorization process utilized a hierarchical structure based on the Google Product Taxonomy, which presents unique challenges. The model incorporated both text and image features through transfer learning, using pre-trained models for embeddings.",
    "infraDetails": [
      "Data stores for product information and categorization results.",
      "Batch processing systems for training the model on large datasets.",
      "Feature stores for managing and serving product features used in the model.",
      "Model serving infrastructure to provide real-time predictions to users.",
      "Monitoring systems to track model performance and accuracy metrics."
    ],
    "systemComponents": [
      {
        "name": "Product Categorization Model",
        "responsibility": "Categorizes products into a hierarchical taxonomy using text and image features."
      },
      {
        "name": "Feature Vectorization Module",
        "responsibility": "Converts raw product features into embeddings for model input."
      },
      {
        "name": "Training Infrastructure",
        "responsibility": "Facilitates the training of the model on large datasets with high computational demands."
      },
      {
        "name": "Prediction Service",
        "responsibility": "Delivers real-time predictions to internal teams and partners."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks model performance metrics such as accuracy and coverage."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://shopify.engineering/using-rich-image-text-data-categorize-products",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 221,
    "company": "Scribd",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Recommend content to read",
    "title": "Embedding-based Retrieval at Scribd",
    "url": "https://tech.scribd.com/blog/2021/embedding-based-retrieval-scribd.html",
    "year": 2021,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Elasticsearch for embedding-based retrieval and faceted search.",
      "User index for mapping user IDs to user embeddings.",
      "Item index for storing item metadata and embeddings.",
      "AWS EC2 instances for hosting the Elasticsearch cluster.",
      "Datadog for monitoring and alerting."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Scribd has transitioned from a collaborative filtering approach to an embedding-based retrieval system for personalized content recommendations.",
      "The system utilizes Elasticsearch to perform fast, reliable nearest neighbors search while supporting faceted search based on user-specific business rules.",
      "Elasticsearch was chosen for its community support, documentation, and ability to handle batch updates, despite some limitations in real-time updates.",
      "The architecture includes user and item indices that store embeddings and metadata, enabling efficient querying for personalized recommendations."
    ],
    "summary": "Scribd has transitioned from a collaborative filtering approach to an embedding-based retrieval system for personalized content recommendations. The system utilizes Elasticsearch to perform fast, reliable nearest neighbors search while supporting faceted search based on user-specific business rules. Elasticsearch was chosen for its community support, documentation, and ability to handle batch updates, despite some limitations in real-time updates. The architecture includes user and item indices that store embeddings and metadata, enabling efficient querying for personalized recommendations.",
    "infraDetails": [
      "Elasticsearch for embedding-based retrieval and faceted search.",
      "User index for mapping user IDs to user embeddings.",
      "Item index for storing item metadata and embeddings.",
      "AWS EC2 instances for hosting the Elasticsearch cluster.",
      "Datadog for monitoring and alerting."
    ],
    "systemComponents": [
      {
        "name": "User Index",
        "responsibility": "Maps user IDs to corresponding user embeddings."
      },
      {
        "name": "Item Index",
        "responsibility": "Stores item metadata and embeddings for faceted search."
      },
      {
        "name": "Elasticsearch Cluster",
        "responsibility": "Performs nearest neighbors search and handles queries for recommendations."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks system performance and alerts for issues."
      },
      {
        "name": "Kibana",
        "responsibility": "Provides data visualization capabilities."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.scribd.com/blog/2021/embedding-based-retrieval-scribd.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 222,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Detect fraud in online food delivery",
    "title": "DeFraudNet: An End-to-End Weak Supervision Framework to Detect Fraud in Online Food Delivery",
    "url": "https://bytes.swiggy.com/defraudnet-an-end-to-end-weak-supervision-framework-to-detect-fraud-in-online-food-delivery-22366ddce461",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Data and feature pipeline",
      "Label generation pipeline",
      "Discriminator pipeline"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DeFraudNet is an end-to-end weak supervision framework designed to detect fraud in online food delivery, addressing the challenges of labeling data in a dynamic fraud landscape.",
      "The system utilizes a combination of human expertise and automated labeling functions to generate weak labels for training data, significantly reducing the manual labeling effort.",
      "Key components of the framework include a data and feature pipeline, a label generation pipeline, a discriminator pipeline, and an evaluation stage for ongoing system assessment.",
      "The implementation has resulted in a notable improvement in fraud detection recall and has saved substantial manual effort in label generation."
    ],
    "summary": "DeFraudNet is an end-to-end weak supervision framework designed to detect fraud in online food delivery, addressing the challenges of labeling data in a dynamic fraud landscape. The system utilizes a combination of human expertise and automated labeling functions to generate weak labels for training data, significantly reducing the manual labeling effort. Key components of the framework include a data and feature pipeline, a label generation pipeline, a discriminator pipeline, and an evaluation stage for ongoing system assessment. The implementation has resulted in a notable improvement in fraud detection recall and has saved substantial manual effort in label generation.",
    "infraDetails": [
      "Data and feature pipeline",
      "Label generation pipeline",
      "Discriminator pipeline"
    ],
    "systemComponents": [
      {
        "name": "Data & Feature Pipeline",
        "responsibility": "Builds features for training, validation, and golden datasets."
      },
      {
        "name": "Label Generation Pipeline",
        "responsibility": "Generates weak labels for training and validation datasets using labeling functions."
      },
      {
        "name": "Discriminator Pipeline",
        "responsibility": "Trains final discriminator models on features and labels from previous stages."
      },
      {
        "name": "Evaluation System",
        "responsibility": "Facilitates ongoing evaluation of the fraud detection system using human evaluators."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/defraudnet-an-end-to-end-weak-supervision-framework-to-detect-fraud-in-online-food-delivery-22366ddce461",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 223,
    "company": "Amazon",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict coordinates of delivery location",
    "title": "Using learning-to-rank to precisely locate where to deliver packages",
    "url": "https://www.amazon.science/blog/using-learning-to-rank-to-precisely-locate-where-to-deliver-packages",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for historical GPS delivery data",
      "Feature store for storing and managing features derived from GPS and map data",
      "Batch processing system for generating candidate locations from past delivery data",
      "Model serving infrastructure for deploying the learning-to-rank model",
      "Monitoring system to track model performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The article discusses the application of learning-to-rank techniques to improve the accuracy of package delivery location predictions.",
      "Traditional methods like centroid computation and kernel density estimation struggle with noisy GPS data, leading to inefficiencies in delivery.",
      "The learning-to-rank approach leverages past GPS data to select the best candidate location for deliveries, significantly outperforming previous methods.",
      "The model uses a random forest algorithm to evaluate candidate locations based on various features, ensuring more precise delivery coordinates."
    ],
    "summary": "The article discusses the application of learning-to-rank techniques to improve the accuracy of package delivery location predictions. Traditional methods like centroid computation and kernel density estimation struggle with noisy GPS data, leading to inefficiencies in delivery. The learning-to-rank approach leverages past GPS data to select the best candidate location for deliveries, significantly outperforming previous methods. The model uses a random forest algorithm to evaluate candidate locations based on various features, ensuring more precise delivery coordinates.",
    "infraDetails": [
      "Data stores for historical GPS delivery data",
      "Feature store for storing and managing features derived from GPS and map data",
      "Batch processing system for generating candidate locations from past delivery data",
      "Model serving infrastructure for deploying the learning-to-rank model",
      "Monitoring system to track model performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "Random Forest Model",
        "responsibility": "Predicts the best delivery location based on past GPS data and features."
      },
      {
        "name": "Candidate Location Generator",
        "responsibility": "Creates potential delivery locations from historical GPS data."
      },
      {
        "name": "Feature Engineering Module",
        "responsibility": "Extracts and manages features relevant to delivery location predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.amazon.science/blog/using-learning-to-rank-to-precisely-locate-where-to-deliver-packages",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 224,
    "company": "PayPal",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Predict declined transactions",
    "title": "Using Machine Learning to Improve Payment Authorization Rate",
    "url": "https://medium.com/paypal-tech/using-machine-learning-to-improve-payment-authorization-rates-bc3b2cbf4999",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for transaction and issuer response data",
      "Batch processing systems for aggregating transaction data",
      "Feature stores for managing and serving features used in model training",
      "Model serving infrastructure for deploying machine learning models",
      "Monitoring systems for evaluating model performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "PayPal implemented machine learning models to predict declined transactions and improve payment authorization rates.",
      "The models utilize various features, including issuer decline ratios and transaction timing, to enhance prediction accuracy.",
      "By using Gradient Boosting Machine (GBM), PayPal doubled the accuracy of issuer response predictions compared to traditional rule-based methods.",
      "The system allows for tailored user experiences to ensure valid purchases go through, significantly improving authorization rates."
    ],
    "summary": "PayPal implemented machine learning models to predict declined transactions and improve payment authorization rates. The models utilize various features, including issuer decline ratios and transaction timing, to enhance prediction accuracy. By using Gradient Boosting Machine (GBM), PayPal doubled the accuracy of issuer response predictions compared to traditional rule-based methods. The system allows for tailored user experiences to ensure valid purchases go through, significantly improving authorization rates.",
    "infraDetails": [
      "Data stores for transaction and issuer response data",
      "Batch processing systems for aggregating transaction data",
      "Feature stores for managing and serving features used in model training",
      "Model serving infrastructure for deploying machine learning models",
      "Monitoring systems for evaluating model performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "Feature Engineering Module",
        "responsibility": "Aggregates raw transaction and issuer response data to create relevant features for the model."
      },
      {
        "name": "Model Training Pipeline",
        "responsibility": "Trains machine learning models using historical data and optimizes hyperparameters."
      },
      {
        "name": "Prediction Engine",
        "responsibility": "Predicts the likelihood of transaction declines and provides recommendations for alternative actions."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks model performance metrics and alerts for any anomalies in predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/paypal-tech/using-machine-learning-to-improve-payment-authorization-rates-bc3b2cbf4999",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 225,
    "company": "Stripe",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Detect fraud in online payments",
    "title": "A primer on machine learning for fraud detection",
    "url": "https://stripe.com/en-mx/guides/primer-on-machine-learning-for-fraud-protection",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Data stores for transaction history and fraud signals",
      "Feature store for managing features used in model training",
      "Orchestration tools for deploying and managing models",
      "Monitoring systems for tracking model performance and fraud detection efficacy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Stripe Radar is a machine learning-based fraud prevention solution that leverages data from the Stripe network to detect and adapt to online payment fraud.",
      "The system balances the trade-offs between false positives and false negatives, helping businesses optimize their fraud detection while minimizing the impact on legitimate transactions.",
      "Radar's algorithms evaluate every transaction for fraud risk, using signals from previous transactions and other relevant data to inform risk assessments."
    ],
    "summary": "Stripe Radar is a machine learning-based fraud prevention solution that leverages data from the Stripe network to detect and adapt to online payment fraud. The system balances the trade-offs between false positives and false negatives, helping businesses optimize their fraud detection while minimizing the impact on legitimate transactions. Radar's algorithms evaluate every transaction for fraud risk, using signals from previous transactions and other relevant data to inform risk assessments.",
    "infraDetails": [
      "Data stores for transaction history and fraud signals",
      "Feature store for managing features used in model training",
      "Orchestration tools for deploying and managing models",
      "Monitoring systems for tracking model performance and fraud detection efficacy"
    ],
    "systemComponents": [
      {
        "name": "Stripe Radar",
        "responsibility": "Fraud prevention and detection using machine learning algorithms."
      },
      {
        "name": "Data Pipeline",
        "responsibility": "Collecting and processing transaction data for analysis and model training."
      },
      {
        "name": "Feature Store",
        "responsibility": "Managing and serving features used in machine learning models."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracking the performance of fraud detection models and alerting for anomalies."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://stripe.com/en-mx/guides/primer-on-machine-learning-for-fraud-protection",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 226,
    "company": "Slack",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Predict Slack connect invites",
    "title": "Email Classification",
    "url": "https://slack.engineering/email-classification/",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Job queue for managing real-time mutations and updates",
      "Database for Team Context to perform lookups and maintain counts"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Slack developed an Email Classification system to predict whether an invited email address is internal or external for Slack Connect invites.",
      "The classification engine utilizes various contexts, including Settings Context, Inviter Context, and Team Context, to make accurate predictions.",
      "An eventually-consistent architecture was designed to handle real-time domain knowledge while minimizing compute costs, using a mutation job system for updates.",
      "The Team Context data store aggregates email domain counts by role, allowing for dynamic classification based on user roles within the organization."
    ],
    "summary": "Slack developed an Email Classification system to predict whether an invited email address is internal or external for Slack Connect invites. The classification engine utilizes various contexts, including Settings Context, Inviter Context, and Team Context, to make accurate predictions. An eventually-consistent architecture was designed to handle real-time domain knowledge while minimizing compute costs, using a mutation job system for updates. The Team Context data store aggregates email domain counts by role, allowing for dynamic classification based on user roles within the organization.",
    "infraDetails": [
      "Job queue for managing real-time mutations and updates",
      "Database for Team Context to perform lookups and maintain counts"
    ],
    "systemComponents": [
      {
        "name": "Classification Engine",
        "responsibility": "Determines if an email address is internal or external based on various contexts."
      },
      {
        "name": "Team Context Data Store",
        "responsibility": "Stores aggregate counts of email domains grouped by user roles for classification."
      },
      {
        "name": "Mutation Job System",
        "responsibility": "Handles real-time updates to domain counts when users join, change roles, or are deactivated."
      },
      {
        "name": "Healer Component",
        "responsibility": "Detects and corrects data drift in the domain counts."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://slack.engineering/email-classification/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 227,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend furniture items",
    "title": "MARS: Transformer Networks for Sequential Recommendation",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/mars-transformer-networks-for-sequential-recommendation",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Wayfair's MARS (Multi-headed Attention Recommender System) leverages transformer networks to adapt to changing customer preferences based on their browsing history.",
      "The model uses sequential inputs to improve recommendation accuracy, achieving a 67% lift in recall compared to traditional matrix factorization methods.",
      "MARS learns item embeddings that reflect customer style preferences, enabling it to recommend items across different product classes effectively.",
      "Future iterations of MARS will incorporate more complex inputs, such as customer demographics and product image embeddings, to enhance recommendation quality."
    ],
    "summary": "Wayfair's MARS (Multi-headed Attention Recommender System) leverages transformer networks to adapt to changing customer preferences based on their browsing history. The model uses sequential inputs to improve recommendation accuracy, achieving a 67% lift in recall compared to traditional matrix factorization methods. MARS learns item embeddings that reflect customer style preferences, enabling it to recommend items across different product classes effectively. Future iterations of MARS will incorporate more complex inputs, such as customer demographics and product image embeddings, to enhance recommendation quality.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "MARS Model",
        "responsibility": "Utilizes transformer architecture to provide personalized recommendations based on sequential browsing history."
      },
      {
        "name": "Data Cleaning Module",
        "responsibility": "Prepares the input data by removing rarely viewed items and adjacent duplicates."
      },
      {
        "name": "Embedding Layer",
        "responsibility": "Generates item and positional embeddings for the input sequence."
      },
      {
        "name": "Attention Mechanism",
        "responsibility": "Learns the relationships between different items based on their browsing sequence."
      },
      {
        "name": "Recommendation Engine",
        "responsibility": "Ranks items based on scores to provide top recommendations."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/mars-transformer-networks-for-sequential-recommendation",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 228,
    "company": "Grammarly",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Detect grammatical errors",
    "title": "Grammatical Error Correction: Tag, Not Rewrite",
    "url": "https://www.grammarly.com/blog/engineering/gec-tag-not-rewrite/",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for training and evaluation datasets",
      "Model serving infrastructure for GECToR",
      "Monitoring systems for model performance and inference speed",
      "Orchestration tools for managing model training and inference iterations"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grammarly's approach to grammatical error correction (GEC) focuses on tagging errors rather than rewriting sentences, which simplifies the task to language understanding.",
      "The system uses a sequence-tagging model that applies custom transformation tags to each token, allowing for faster inference and clearer explanations of corrections.",
      "With a vocabulary of 5,000 transformation tags, the model achieves high error coverage and state-of-the-art performance on GEC benchmarks.",
      "The GECToR model is significantly faster than traditional neural machine translation systems, achieving up to 10 times faster inference times.",
      "This innovative approach demonstrates that exploring alternative methods can lead to more efficient and effective solutions in NLP."
    ],
    "summary": "Grammarly's approach to grammatical error correction (GEC) focuses on tagging errors rather than rewriting sentences, which simplifies the task to language understanding. The system uses a sequence-tagging model that applies custom transformation tags to each token, allowing for faster inference and clearer explanations of corrections. With a vocabulary of 5,000 transformation tags, the model achieves high error coverage and state-of-the-art performance on GEC benchmarks. The GECToR model is significantly faster than traditional neural machine translation systems, achieving up to 10 times faster inference times. This innovative approach demonstrates that exploring alternative methods can lead to more efficient and effective solutions in NLP.",
    "infraDetails": [
      "Data stores for training and evaluation datasets",
      "Model serving infrastructure for GECToR",
      "Monitoring systems for model performance and inference speed",
      "Orchestration tools for managing model training and inference iterations"
    ],
    "systemComponents": [
      {
        "name": "GECToR",
        "responsibility": "Sequence-tagging model for grammatical error correction"
      },
      {
        "name": "Transformation Tagger",
        "responsibility": "Generates transformation tags for each token in the input sequence"
      },
      {
        "name": "Preprocessing Algorithm",
        "responsibility": "Aligns source and target tokens and generates corresponding tags"
      },
      {
        "name": "Inference Engine",
        "responsibility": "Applies transformation tags iteratively to correct sentences"
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and inference speed"
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.grammarly.com/blog/engineering/gec-tag-not-rewrite/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 229,
    "company": "Nordstrom",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Generate outfit combinations",
    "title": "AI-Created Outfits",
    "url": "https://medium.com/tech-at-nordstrom/ai-created-outfits-9529300a1af3",
    "year": 2021,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/tech-at-nordstrom/ai-created-outfits-9529300a1af3",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 230,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Deliver orders on time",
    "title": "Using ML and Optimization to Solve DoorDash's Dispatch Problem",
    "url": "https://doordash.engineering/2021/08/17/using-ml-and-optimization-to-solve-doordashs-dispatch-problem/",
    "year": 2021,
    "category": "optimization_pricing",
    "categoryLabel": "Optimization and pricing",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "DoorDash's dispatch system, DeepRed, utilizes machine learning and optimization to efficiently deliver orders from stores to customers.",
      "The system aims to maximize Dasher earnings while ensuring timely deliveries, overcoming challenges such as supply-demand balance and external conditions like weather.",
      "DeepRed employs a two-stage process involving ML models for individual order predictions and a mixed-integer optimization model for system-wide decisions.",
      "The dispatch process includes generating potential offers, predicting order dynamics through ML, and finalizing decisions via optimization."
    ],
    "summary": "DoorDash's dispatch system, DeepRed, utilizes machine learning and optimization to efficiently deliver orders from stores to customers. The system aims to maximize Dasher earnings while ensuring timely deliveries, overcoming challenges such as supply-demand balance and external conditions like weather. DeepRed employs a two-stage process involving ML models for individual order predictions and a mixed-integer optimization model for system-wide decisions. The dispatch process includes generating potential offers, predicting order dynamics through ML, and finalizing decisions via optimization.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Offer Candidate Generator",
        "responsibility": "Identifies potential Dashers for new orders based on proximity and availability."
      },
      {
        "name": "ML Layer",
        "responsibility": "Estimates order ready times, travel times, and acceptance likelihood for potential offers."
      },
      {
        "name": "Optimization Layer",
        "responsibility": "Scores and ranks potential offers, makes decisions on batching orders, and manages dispatch timing."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://doordash.engineering/2021/08/17/using-ml-and-optimization-to-solve-doordashs-dispatch-problem/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 231,
    "company": "Zillow",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend similar homes",
    "title": "Improving Recommendation Quality by Tapping into Listing Text",
    "url": "https://www.zillow.com/tech/improve-quality-listing-text/",
    "year": 2021,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data pipeline for embedding generation",
      "Airflow for orchestration of data workflows",
      "Feature store for managing generated embeddings",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for evaluating model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Zillow's Relevance Team improved home recommendations by incorporating text from property listings into their machine learning models.",
      "A scalable system was developed to generate embedding vectors from listing descriptions, which enhanced the recommendation system's performance.",
      "The integration of these embeddings led to significant improvements in information retrieval metrics, particularly for vacant properties.",
      "The project utilized various embedding models, including Word2Vec and BERT, and established a pipeline for daily embedding generation."
    ],
    "summary": "Zillow's Relevance Team improved home recommendations by incorporating text from property listings into their machine learning models. A scalable system was developed to generate embedding vectors from listing descriptions, which enhanced the recommendation system's performance. The integration of these embeddings led to significant improvements in information retrieval metrics, particularly for vacant properties. The project utilized various embedding models, including Word2Vec and BERT, and established a pipeline for daily embedding generation.",
    "infraDetails": [
      "Data pipeline for embedding generation",
      "Airflow for orchestration of data workflows",
      "Feature store for managing generated embeddings",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for evaluating model performance"
    ],
    "systemComponents": [
      {
        "name": "Embedding Generation Pipeline",
        "responsibility": "Generates millions of listing description embeddings from various machine learning models."
      },
      {
        "name": "Recommendation System",
        "responsibility": "Utilizes embeddings to recommend similar homes and improve search rankings."
      },
      {
        "name": "Airflow DAG",
        "responsibility": "Orchestrates the daily generation of embeddings."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.zillow.com/tech/improve-quality-listing-text/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 232,
    "company": "Lifen",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Recognize PDF layout",
    "title": "Fast graph-based layout detection",
    "url": "https://medium.com/lifen-engineering/fast-graph-based-layout-detection-19fc7ab11b17",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/lifen-engineering/fast-graph-based-layout-detection-19fc7ab11b17",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 233,
    "company": "PayPal",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Prevent repeated payment fraud",
    "title": "How PayPal Uses Real-time Graph Database and Graph Analysis to Fight Fraud",
    "url": "https://medium.com/paypal-tech/how-paypal-uses-real-time-graph-database-and-graph-analysis-to-fight-fraud-96a2b918619a",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/paypal-tech/how-paypal-uses-real-time-graph-database-and-graph-analysis-to-fight-fraud-96a2b918619a",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 234,
    "company": "Bumble",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Detect rude messages",
    "title": "Multilingual message content moderation at scale (part 1)",
    "url": "https://medium.com/bumble-tech/multilingual-message-content-moderation-at-scale-ddd0da1e23ed",
    "year": 2021,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/bumble-tech/multilingual-message-content-moderation-at-scale-ddd0da1e23ed",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 235,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Personalize homepage content (podcasts, playlist, music)",
    "title": "The Rise (and Lessons Learned) of ML Models to Personalize Content on Home (Part II)",
    "url": "https://engineering.atspotify.com/2021/11/the-rise-and-lessons-learned-of-ml-models-to-personalize-content-on-home-part-ii/",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Managed Kubeflow clusters",
      "Python SDK for Kubeflow"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Spotify has transitioned from a siloed experimentation platform to using managed Kubeflow clusters for model training and evaluation.",
      "The team emphasizes the importance of establishing baselines with heuristic solutions before deploying ML models to ensure improvements can be measured effectively.",
      "Custom evaluation metrics and dashboards have been developed to provide deeper insights into model performance beyond standard metrics.",
      "Maintaining models in production requires careful consideration of retraining strategies to avoid technical debt and ensure models remain relevant."
    ],
    "summary": "Spotify has transitioned from a siloed experimentation platform to using managed Kubeflow clusters for model training and evaluation. The team emphasizes the importance of establishing baselines with heuristic solutions before deploying ML models to ensure improvements can be measured effectively. Custom evaluation metrics and dashboards have been developed to provide deeper insights into model performance beyond standard metrics. Maintaining models in production requires careful consideration of retraining strategies to avoid technical debt and ensure models remain relevant.",
    "infraDetails": [
      "Managed Kubeflow clusters",
      "Python SDK for Kubeflow"
    ],
    "systemComponents": [
      {
        "name": "Podcast Model",
        "responsibility": "Predicts podcasts a listener is likely to listen to."
      },
      {
        "name": "Shortcuts Model",
        "responsibility": "Predicts the listener\u2019s next familiar listen."
      },
      {
        "name": "Playlists Model",
        "responsibility": "Predicts playlists a new listener is likely to enjoy."
      },
      {
        "name": "Evaluation Dashboard",
        "responsibility": "Allows manual evaluation of recommendations based on specific listener features."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.atspotify.com/2021/11/the-rise-and-lessons-learned-of-ml-models-to-personalize-content-on-home-part-ii/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 236,
    "company": "Swiggy",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Estimate travel distance",
    "title": "Learning to Predict Two-Wheeler Travel Distance",
    "url": "https://bytes.swiggy.com/learning-to-predict-two-wheeler-travel-distance-752d836d741d",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Historical GPS trajectory data store",
      "Feature store for historical and real-time features",
      "Model serving infrastructure for distance prediction",
      "Monitoring system for model performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Swiggy's Data Science team developed a machine learning model to accurately predict two-wheeler travel distances using historical GPS trajectory data from delivery partners.",
      "Existing map services were found inadequate for Swiggy's specific use cases, prompting the need for a custom solution that accounts for the unique challenges of two-wheeler navigation in Indian cities.",
      "The model synthesizes ground truth distances from various noisy estimates, including trajectory and snapped route distances, to improve prediction accuracy.",
      "Feature engineering incorporates both real-time and historical data, leveraging geographical, temporal, and time-of-day dimensions to enhance model performance."
    ],
    "summary": "Swiggy's Data Science team developed a machine learning model to accurately predict two-wheeler travel distances using historical GPS trajectory data from delivery partners. Existing map services were found inadequate for Swiggy's specific use cases, prompting the need for a custom solution that accounts for the unique challenges of two-wheeler navigation in Indian cities. The model synthesizes ground truth distances from various noisy estimates, including trajectory and snapped route distances, to improve prediction accuracy. Feature engineering incorporates both real-time and historical data, leveraging geographical, temporal, and time-of-day dimensions to enhance model performance.",
    "infraDetails": [
      "Historical GPS trajectory data store",
      "Feature store for historical and real-time features",
      "Model serving infrastructure for distance prediction",
      "Monitoring system for model performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "Distance Estimation Model",
        "responsibility": "Predicts two-wheeler travel distances based on synthesized ground truth and features."
      },
      {
        "name": "Feature Engineering Module",
        "responsibility": "Generates real-time and historical features for model input."
      },
      {
        "name": "Data Aggregation System",
        "responsibility": "Aggregates historical data across geographical and temporal dimensions."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks model performance and accuracy metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://bytes.swiggy.com/learning-to-predict-two-wheeler-travel-distance-752d836d741d",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 237,
    "company": "Expedia",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Personalize travel search results",
    "title": "Personalized Ranking Model for Lodging",
    "url": "https://medium.com/expedia-group-tech/personalized-ranking-model-for-lodging-5be43ae975fe",
    "year": 2021,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/expedia-group-tech/personalized-ranking-model-for-lodging-5be43ae975fe",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 238,
    "company": "Scribd",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Classify documents",
    "title": "Categorizing user-uploaded documents",
    "url": "https://tech.scribd.com/blog/2021/categorizing-user-uploaded-documents.html",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for user-uploaded documents",
      "Vector representation system for document embeddings",
      "Model serving infrastructure for categorization",
      "Monitoring system for model performance and data quality"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Scribd categorizes user-uploaded documents using a unified taxonomy informed by Subject Matter Experts and user-reading patterns.",
      "The process involves creating dense vector representations of documents and clustering them using dimensionality reduction techniques like t-SNE and HDBSCAN.",
      "Active learning is employed to enhance the model's training set, ensuring it captures a diverse range of document types for accurate categorization.",
      "The project highlights the importance of high-quality labeled data and annotation alignment in improving model performance for text classification tasks.",
      "Future steps include expanding the taxonomy dynamically as new content is uploaded and adapting the approach for multi-language support."
    ],
    "summary": "Scribd categorizes user-uploaded documents using a unified taxonomy informed by Subject Matter Experts and user-reading patterns. The process involves creating dense vector representations of documents and clustering them using dimensionality reduction techniques like t-SNE and HDBSCAN. Active learning is employed to enhance the model's training set, ensuring it captures a diverse range of document types for accurate categorization. The project highlights the importance of high-quality labeled data and annotation alignment in improving model performance for text classification tasks. Future steps include expanding the taxonomy dynamically as new content is uploaded and adapting the approach for multi-language support.",
    "infraDetails": [
      "Data stores for user-uploaded documents",
      "Vector representation system for document embeddings",
      "Model serving infrastructure for categorization",
      "Monitoring system for model performance and data quality"
    ],
    "systemComponents": [
      {
        "name": "Taxonomy Builder",
        "responsibility": "Creates and updates the unified taxonomy based on user-reading patterns and expert insights."
      },
      {
        "name": "Embedding Generator",
        "responsibility": "Generates dense vector representations of user-uploaded documents."
      },
      {
        "name": "Clustering Engine",
        "responsibility": "Clusters document embeddings to identify groups and subclusters for categorization."
      },
      {
        "name": "Categorization Model",
        "responsibility": "Supervised model that assigns categories to documents based on extracted key phrases and entities."
      },
      {
        "name": "Active Learning System",
        "responsibility": "Improves the training set by incorporating feedback from Subject Matter Experts on model predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.scribd.com/blog/2021/categorizing-user-uploaded-documents.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 239,
    "company": "Meta",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Personalize the newsfeed content",
    "title": "How machine learning powers Facebook's News Feed ranking",
    "url": "https://engineering.fb.com/2021/01/26/ml-applications/news-feed-ranking/",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Feed leaf databases for storing user interactions and posts"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Facebook's News Feed ranking system utilizes machine learning to personalize content for over 2 billion users, ensuring relevance and engagement.",
      "The ranking algorithm predicts user preferences based on various signals, such as likes and interactions, to optimize content visibility.",
      "A complex scoring system aggregates multiple predictions to create a single ranking score for each user's feed, incorporating user feedback and engagement metrics.",
      "The architecture supports real-time processing of vast amounts of data, allowing for quick updates to the ranking based on user interactions."
    ],
    "summary": "Facebook's News Feed ranking system utilizes machine learning to personalize content for over 2 billion users, ensuring relevance and engagement. The ranking algorithm predicts user preferences based on various signals, such as likes and interactions, to optimize content visibility. A complex scoring system aggregates multiple predictions to create a single ranking score for each user's feed, incorporating user feedback and engagement metrics. The architecture supports real-time processing of vast amounts of data, allowing for quick updates to the ranking based on user interactions.",
    "infraDetails": [
      "Feed leaf databases for storing user interactions and posts"
    ],
    "systemComponents": [
      {
        "name": "Feed Aggregator",
        "responsibility": "Collects relevant information about posts and analyzes features to predict post value and ranking."
      },
      {
        "name": "Web/PHP Layer",
        "responsibility": "Handles front-end requests and queries the feed aggregator."
      },
      {
        "name": "Predictors",
        "responsibility": "Run models in parallel to score candidate posts for ranking."
      },
      {
        "name": "Feed Leaf Databases",
        "responsibility": "Store user interactions and posts for retrieval and processing."
      },
      {
        "name": "Multitask Neural Networks",
        "responsibility": "Generate predictions based on various features of posts to inform ranking."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.fb.com/2021/01/26/ml-applications/news-feed-ranking/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 240,
    "company": "Google",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Correct grammatical errors",
    "title": "Grammar Correction as You Type, on Pixel 6",
    "url": "https://ai.googleblog.com/2021/10/grammar-correction-as-you-type-on-pixel.html",
    "year": 2021,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Cloud-based grammar model for training data generation"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Google has introduced a grammar correction feature in Gboard for Pixel 6 that operates entirely on-device to enhance user privacy.",
      "The system addresses challenges such as memory size limitations and latency requirements while correcting grammatical errors in real-time as users type.",
      "The model employs a hybrid architecture combining a Transformer encoder and LSTM decoder, optimized for mobile constraints.",
      "Training data for the model is generated using a technique called hard distillation, which improves the quality of grammar corrections.",
      "The feature is designed to handle partial sentences, providing suggestions even when users do not complete their sentences."
    ],
    "summary": "Google has introduced a grammar correction feature in Gboard for Pixel 6 that operates entirely on-device to enhance user privacy. The system addresses challenges such as memory size limitations and latency requirements while correcting grammatical errors in real-time as users type. The model employs a hybrid architecture combining a Transformer encoder and LSTM decoder, optimized for mobile constraints. Training data for the model is generated using a technique called hard distillation, which improves the quality of grammar corrections. The feature is designed to handle partial sentences, providing suggestions even when users do not complete their sentences.",
    "infraDetails": [
      "Cloud-based grammar model for training data generation"
    ],
    "systemComponents": [
      {
        "name": "On-device Grammar Model",
        "responsibility": "Corrects grammatical errors in real-time as users type."
      },
      {
        "name": "Cloud-based Grammar Model",
        "responsibility": "Generates training data for the on-device model using hard distillation."
      },
      {
        "name": "Gboard",
        "responsibility": "Interface for users to type and receive grammar correction suggestions."
      },
      {
        "name": "Heuristic Engine",
        "responsibility": "Determines the grammatical correctness of sentence prefixes."
      },
      {
        "name": "Edit Alignment System",
        "responsibility": "Aligns original and corrected sentences to provide accurate replacement suggestions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://ai.googleblog.com/2021/10/grammar-correction-as-you-type-on-pixel.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 241,
    "company": "Nubank",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Predict conversions and attract new customers",
    "title": "Beyond prediction machines",
    "url": "https://building.nubank.com.br/beyond-prediction-machines/",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for storing customer data and transaction history",
      "Batch processing systems for analyzing historical data",
      "Stream processing systems for real-time data analysis",
      "Orchestration tools for managing data workflows",
      "Feature stores for managing and serving features used in models",
      "Model serving infrastructure for deploying predictive and causal models",
      "Monitoring systems for tracking model performance and business metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Nubank's Data Science team is focusing on leveraging causal inference alongside traditional machine learning to tackle complex decision-making problems.",
      "While predictive models are useful for making predictions, they may not be suitable for optimization tasks that require understanding the impact of actions, such as marketing strategies.",
      "Causal inference allows Nubank to estimate the marginal effects of actions, such as how coupon distribution affects customer conversion rates, providing a more effective approach to decision-making.",
      "The company emphasizes the importance of understanding causation over correlation to answer critical business questions and improve customer engagement."
    ],
    "summary": "Nubank's Data Science team is focusing on leveraging causal inference alongside traditional machine learning to tackle complex decision-making problems. While predictive models are useful for making predictions, they may not be suitable for optimization tasks that require understanding the impact of actions, such as marketing strategies. Causal inference allows Nubank to estimate the marginal effects of actions, such as how coupon distribution affects customer conversion rates, providing a more effective approach to decision-making. The company emphasizes the importance of understanding causation over correlation to answer critical business questions and improve customer engagement.",
    "infraDetails": [
      "Data stores for storing customer data and transaction history",
      "Batch processing systems for analyzing historical data",
      "Stream processing systems for real-time data analysis",
      "Orchestration tools for managing data workflows",
      "Feature stores for managing and serving features used in models",
      "Model serving infrastructure for deploying predictive and causal models",
      "Monitoring systems for tracking model performance and business metrics"
    ],
    "systemComponents": [
      {
        "name": "Data Science Team",
        "responsibility": "Focus on leveraging machine learning and causal inference to solve business problems."
      },
      {
        "name": "Analytics Engineering",
        "responsibility": "Support data analysis and model development."
      },
      {
        "name": "Causal Inference Research",
        "responsibility": "Investigate and apply causal inference techniques to improve decision-making."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://building.nubank.com.br/beyond-prediction-machines/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 242,
    "company": "Grammarly",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Correct grammatical errors",
    "title": "Adversarial Grammatical Error Correction",
    "url": "https://www.grammarly.com/blog/engineering/adversarial-grammatical-error-correction",
    "year": 2021,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Data stores for storing training and evaluation datasets.",
      "Stream/batch processing systems for handling data ingestion and preprocessing.",
      "Orchestration tools for managing model training and deployment workflows.",
      "Feature stores for managing and serving features used in model training.",
      "Model serving infrastructure to deploy the trained GEC models for real-time inference.",
      "Monitoring systems to track model performance and detect issues in real-time."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Grammarly has developed an AI-powered writing assistant focused on grammatical error correction (GEC), leveraging generative adversarial networks (GANs) for improved contextual suggestions.",
      "The proposed GAN framework includes a generator that transforms grammatically incorrect sentences into corrected versions and a discriminator that evaluates the quality of these corrections.",
      "This approach aims to optimize the corrections not just for grammatical accuracy but also for semantic consistency, addressing limitations of traditional GEC models.",
      "Experiments showed that adversarially trained models consistently outperformed conventional methods, leading to better alignment with human-generated corrections.",
      "Future work will focus on refining the framework and training techniques to further enhance GEC performance."
    ],
    "summary": "Grammarly has developed an AI-powered writing assistant focused on grammatical error correction (GEC), leveraging generative adversarial networks (GANs) for improved contextual suggestions. The proposed GAN framework includes a generator that transforms grammatically incorrect sentences into corrected versions and a discriminator that evaluates the quality of these corrections. This approach aims to optimize the corrections not just for grammatical accuracy but also for semantic consistency, addressing limitations of traditional GEC models. Experiments showed that adversarially trained models consistently outperformed conventional methods, leading to better alignment with human-generated corrections. Future work will focus on refining the framework and training techniques to further enhance GEC performance.",
    "infraDetails": [
      "Data stores for storing training and evaluation datasets.",
      "Stream/batch processing systems for handling data ingestion and preprocessing.",
      "Orchestration tools for managing model training and deployment workflows.",
      "Feature stores for managing and serving features used in model training.",
      "Model serving infrastructure to deploy the trained GEC models for real-time inference.",
      "Monitoring systems to track model performance and detect issues in real-time."
    ],
    "systemComponents": [
      {
        "name": "Generator",
        "responsibility": "Transforms grammatically incorrect sentences into grammatically correct rewrites."
      },
      {
        "name": "Discriminator",
        "responsibility": "Evaluates the quality of generated corrections and provides feedback to the generator."
      },
      {
        "name": "Training Framework",
        "responsibility": "Facilitates adversarial training between the generator and discriminator to optimize correction quality."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.grammarly.com/blog/engineering/adversarial-grammatical-error-correction",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 243,
    "company": "Scribd",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Classify user-uploaded documents",
    "title": "Identifying Document Types at Scribd",
    "url": "https://tech.scribd.com/blog/2021/identifying-document-types.html",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for labeled documents and pages",
      "Monitoring tools for model performance and error analysis"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Scribd's document classification system aims to identify various document types from a diverse corpus of user-uploaded documents using a multi-component machine learning approach.",
      "The system employs a computer vision model to classify documents based on visual cues, ensuring language-agnostic processing.",
      "An active learning strategy is utilized to gather labeled data for training, focusing on binary classifiers to improve model accuracy iteratively.",
      "The final model combines page classifications with additional metadata to predict the overall document type, addressing challenges such as overconfidence in predictions."
    ],
    "summary": "Scribd's document classification system aims to identify various document types from a diverse corpus of user-uploaded documents using a multi-component machine learning approach. The system employs a computer vision model to classify documents based on visual cues, ensuring language-agnostic processing. An active learning strategy is utilized to gather labeled data for training, focusing on binary classifiers to improve model accuracy iteratively. The final model combines page classifications with additional metadata to predict the overall document type, addressing challenges such as overconfidence in predictions.",
    "infraDetails": [
      "Data stores for labeled documents and pages",
      "Monitoring tools for model performance and error analysis"
    ],
    "systemComponents": [
      {
        "name": "Page Classifier",
        "responsibility": "Classifies individual pages of documents using a computer vision model."
      },
      {
        "name": "Document Classifier",
        "responsibility": "Aggregates page classifications and metadata to determine the overall document type."
      },
      {
        "name": "Data Gathering System",
        "responsibility": "Collects labeled data through active learning and binary classification."
      },
      {
        "name": "Error Analysis Module",
        "responsibility": "Analyzes model predictions to identify and address overconfidence and misclassifications."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.scribd.com/blog/2021/identifying-document-types.html",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 244,
    "company": "Oda",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict driver's non-driving time",
    "title": "How we went from zero insight to predicting service time with a machine learning model - Part 1",
    "url": "https://medium.com/oda-product-tech/how-we-went-from-zero-insight-to-predicting-service-time-with-a-machine-learning-model-part-1-516b9545d02f",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/oda-product-tech/how-we-went-from-zero-insight-to-predicting-service-time-with-a-machine-learning-model-part-1-516b9545d02f",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 245,
    "company": "Mercado Libre",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict customer engagement and LTV",
    "title": "Causal Inference - Estimating Long-term Engagement",
    "url": "https://medium.com/mercadolibre-tech/causal-inference-estimating-long-term-engagement-fac517929073",
    "year": 2021,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/mercadolibre-tech/causal-inference-estimating-long-term-engagement-fac517929073",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 246,
    "company": "Dailymotion",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Target contextual advertising",
    "title": "How Deep Learning can boost Contextual Advertising Capabilities",
    "url": "https://medium.com/dailymotion/how-deep-learning-can-boost-contextual-advertising-capabilities-c9ca7c8fc4e9",
    "year": 2021,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/dailymotion/how-deep-learning-can-boost-contextual-advertising-capabilities-c9ca7c8fc4e9",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 247,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Optimize digital ads",
    "title": "Building Scalable and Performant Marketing ML Systems at Wayfair",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/building-scalable-and-performant-marketing-ml-systems-at-wayfair",
    "year": 2021,
    "category": "marketing_ads",
    "categoryLabel": "Marketing and ads",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Wayfair employs machine learning to optimize marketing decisions across various ad formats, including digital and physical ads.",
      "The company utilizes general propensity models for scalable marketing performance, while specialized response and uplift models are developed for specific marketing programs.",
      "A multi-layer marketing ML platform, named WayLift, is designed to optimize marketing campaigns by balancing the exploitation of the best ads with exploration of alternative treatments.",
      "WayLift integrates customer scoring, decision optimization, and feedback generation models to enhance marketing effectiveness and adapt to changing environments."
    ],
    "summary": "Wayfair employs machine learning to optimize marketing decisions across various ad formats, including digital and physical ads. The company utilizes general propensity models for scalable marketing performance, while specialized response and uplift models are developed for specific marketing programs. A multi-layer marketing ML platform, named WayLift, is designed to optimize marketing campaigns by balancing the exploitation of the best ads with exploration of alternative treatments. WayLift integrates customer scoring, decision optimization, and feedback generation models to enhance marketing effectiveness and adapt to changing environments.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "General Propensity Models",
        "responsibility": "Predict the likelihood of customer engagement and purchases based on observational data."
      },
      {
        "name": "Channel-Specific Response Models",
        "responsibility": "Target specific customer segments for individual marketing programs."
      },
      {
        "name": "Uplift Models",
        "responsibility": "Identify 'persuadables' whose conversions are influenced by ad treatments."
      },
      {
        "name": "WayLift",
        "responsibility": "Optimize marketing decisions using reinforcement learning to balance ad treatment strategies."
      },
      {
        "name": "Customer Scoring Models",
        "responsibility": "Provide insights into customer characteristics and preferences."
      },
      {
        "name": "Feedback Generation Models",
        "responsibility": "Forecast long-term financial impacts of marketing decisions based on near-term engagement metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/building-scalable-and-performant-marketing-ml-systems-at-wayfair",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 248,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Show relevant content to new customers",
    "title": "Share of Voice Optimization Engine",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/share-of-voice-optimization-engine",
    "year": 2021,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for storing optimization outputs and customer data",
      "Batching and parallel processing systems to enhance algorithm speed"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair's Share of Voice Optimization Engine aims to optimize content placement for new customers by balancing short-term marketing goals with long-term business objectives.",
      "The engine uses a constrained optimization solver to maximize customer-level message relevance while adhering to predetermined Share of Voice targets.",
      "It translates business and model inputs into an optimized assignment of Customer x Message x Placement, ensuring that each placement is populated with relevant messages.",
      "The system leverages propensity scoring models to assess the relevance of messages for individual customers, enhancing the personalization of content displayed.",
      "The optimization process is designed to be efficient, utilizing batching and parallelization to handle the large number of permutations involved."
    ],
    "summary": "Wayfair's Share of Voice Optimization Engine aims to optimize content placement for new customers by balancing short-term marketing goals with long-term business objectives. The engine uses a constrained optimization solver to maximize customer-level message relevance while adhering to predetermined Share of Voice targets. It translates business and model inputs into an optimized assignment of Customer x Message x Placement, ensuring that each placement is populated with relevant messages. The system leverages propensity scoring models to assess the relevance of messages for individual customers, enhancing the personalization of content displayed. The optimization process is designed to be efficient, utilizing batching and parallelization to handle the large number of permutations involved.",
    "infraDetails": [
      "Data stores for storing optimization outputs and customer data",
      "Batching and parallel processing systems to enhance algorithm speed"
    ],
    "systemComponents": [
      {
        "name": "Share of Voice Optimization Engine",
        "responsibility": "Maximizes customer-level message relevance while meeting Share of Voice targets."
      },
      {
        "name": "Gurobi Solver",
        "responsibility": "Handles the mathematical optimization of customer-message-placement assignments."
      },
      {
        "name": "Customer Propensity Scoring Models",
        "responsibility": "Predicts the likelihood of customers purchasing from various product categories."
      },
      {
        "name": "Placement Value Matrix",
        "responsibility": "Determines the relative value of different placements for message display."
      },
      {
        "name": "Message x Placement Applicability Matrix",
        "responsibility": "Defines which messages can be shown in which placements."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/share-of-voice-optimization-engine",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 249,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Optimize paid media marketing",
    "title": "Contextual Bandit for Marketing Treatment Optimization",
    "url": "https://www.aboutwayfair.com/careers/tech-blog/contextual-bandit-for-marketing-treatment-optimization",
    "year": 2021,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Wayfair has developed a scalable algorithmic decision-making platform called WayLift to optimize paid media marketing using contextual bandit algorithms.",
      "The platform aims to enhance customer acquisition, conversion, and loyalty by making data-driven marketing decisions on a large scale.",
      "WayLift utilizes the open-source library Vowpal Wabbit for contextual bandit learning, which allows for efficient exploration and exploitation of marketing strategies.",
      "The learning process involves observing context, selecting actions based on learned policies, estimating rewards, and updating the model based on feedback."
    ],
    "summary": "Wayfair has developed a scalable algorithmic decision-making platform called WayLift to optimize paid media marketing using contextual bandit algorithms. The platform aims to enhance customer acquisition, conversion, and loyalty by making data-driven marketing decisions on a large scale. WayLift utilizes the open-source library Vowpal Wabbit for contextual bandit learning, which allows for efficient exploration and exploitation of marketing strategies. The learning process involves observing context, selecting actions based on learned policies, estimating rewards, and updating the model based on feedback.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "WayLift",
        "responsibility": "Algorithmic decision-making platform for optimizing marketing treatments."
      },
      {
        "name": "Vowpal Wabbit",
        "responsibility": "Open-source library for efficient contextual bandit learning."
      },
      {
        "name": "Demeter",
        "responsibility": "In-house engine for forecasting delayed rewards."
      },
      {
        "name": "Reward Estimator",
        "responsibility": "Models that estimate the rewards for different marketing actions."
      },
      {
        "name": "Exploration Algorithm",
        "responsibility": "Assigns probabilities to actions based on estimated rewards for exploration."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/careers/tech-blog/contextual-bandit-for-marketing-treatment-optimization",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 250,
    "company": "Microsoft",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Classify cloud workload types",
    "title": "How we used ML - and heuristic data labeling - to help customers with their cloud migration",
    "url": "https://medium.com/data-science-at-microsoft/how-we-used-ml-and-heuristic-data-labeling-to-help-customers-with-their-cloud-migration-d3af7ff020fc",
    "year": 2021,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/data-science-at-microsoft/how-we-used-ml-and-heuristic-data-labeling-to-help-customers-with-their-cloud-migration-d3af7ff020fc",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 251,
    "company": "Github",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Help users find contribution opportunities",
    "title": "How we built the good first issues feature",
    "url": "https://github.blog/2020-01-22-how-we-built-good-first-issues/",
    "year": 2020,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Weakly-supervised Training Approach"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "GitHub launched the good first issues feature to help new contributors find accessible entry points into open source projects.",
      "The feature utilizes machine learning to recommend issues based on both project maintainers' labels and automated detection methods.",
      "Initially, recommendations were limited to issues labeled by maintainers, but the updated version increased coverage to 70% of repositories by incorporating ML-based recommendations.",
      "The system prioritizes precision over recall to minimize false positives, ensuring that only genuinely beginner-friendly issues are surfaced."
    ],
    "summary": "GitHub launched the good first issues feature to help new contributors find accessible entry points into open source projects. The feature utilizes machine learning to recommend issues based on both project maintainers' labels and automated detection methods. Initially, recommendations were limited to issues labeled by maintainers, but the updated version increased coverage to 70% of repositories by incorporating ML-based recommendations. The system prioritizes precision over recall to minimize false positives, ensuring that only genuinely beginner-friendly issues are surfaced.",
    "infraDetails": [
      "Weakly-supervised Training Approach"
    ],
    "systemComponents": [
      {
        "name": "Recommendation Engine",
        "responsibility": "Generates issue recommendations for new contributors based on labels and ML analysis."
      },
      {
        "name": "Label Curation System",
        "responsibility": "Maintains a curated list of labels to identify beginner-friendly issues."
      },
      {
        "name": "Training Data Processor",
        "responsibility": "Builds and manages the labeled training set for the machine learning model."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://github.blog/2020-01-22-how-we-built-good-first-issues/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 252,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Serve personalized learning recommendations",
    "title": "A closer look at the AI behind course recommendations on LinkedIn Learning, Part 1",
    "url": "https://engineering.linkedin.com/blog/2020/course-recommendations-ai-part-one",
    "year": 2020,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Key-value store for online recommendation storage",
      "Data streams for processing user interactions and engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn Learning uses a large-scale content recommendation engine to provide personalized course recommendations to over 690 million members.",
      "The recommendation engine operates with both offline and online architectures, where personalized recommendations are computed offline and stored for quick access online.",
      "Key components of the recommendation engine include Response Prediction and Collaborative Filtering, which work together to enhance the relevance of course suggestions.",
      "The system is designed to handle a growing number of courses and users, continuously evolving to improve engagement and learning outcomes."
    ],
    "summary": "LinkedIn Learning uses a large-scale content recommendation engine to provide personalized course recommendations to over 690 million members. The recommendation engine operates with both offline and online architectures, where personalized recommendations are computed offline and stored for quick access online. Key components of the recommendation engine include Response Prediction and Collaborative Filtering, which work together to enhance the relevance of course suggestions. The system is designed to handle a growing number of courses and users, continuously evolving to improve engagement and learning outcomes.",
    "infraDetails": [
      "Key-value store for online recommendation storage",
      "Data streams for processing user interactions and engagement"
    ],
    "systemComponents": [
      {
        "name": "Response Prediction",
        "responsibility": "Predicts member-course relevance using learner profile features and course metadata."
      },
      {
        "name": "Collaborative Filtering",
        "responsibility": "Identifies relevant courses based on past implicit engagement data from learners."
      },
      {
        "name": "Recommendation Blending",
        "responsibility": "Combines outputs from Response Prediction and Collaborative Filtering to generate final course recommendations."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2020/course-recommendations-ai-part-one",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 253,
    "company": "Bumble",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Derive information from images",
    "title": "Image detection as a service",
    "url": "https://medium.com/bumble-tech/image-detection-as-a-service-9bd463f74f43",
    "year": 2020,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/bumble-tech/image-detection-as-a-service-9bd463f74f43",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 254,
    "company": "Gojek",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Generate names for pickup points",
    "title": "How Gojek Uses NLP to Name Pickup Locations at Scale",
    "url": "https://www.gojek.io/blog/nlp-cartobert",
    "year": 2020,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data stores for historical booking data and chat logs",
      "Pre-processing pipeline for data masking and text normalization",
      "Monitoring system for model performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Gojek developed CartoBERT, an NLP model to accurately name pickup points for its ride-hailing services.",
      "The model improves upon previous statistical methods by using deep learning to understand the context of booking texts.",
      "CartoBERT achieved a 25% increase in accuracy, reaching approximately 93% in generating valid pickup point names.",
      "The system allows for scalable automatic generation of pickup point names across multiple geographies with minimal human intervention.",
      "Future improvements include exploring active learning to enhance model efficiency and considering open-sourcing a general Indonesia Bahasa ALBERT model."
    ],
    "summary": "Gojek developed CartoBERT, an NLP model to accurately name pickup points for its ride-hailing services. The model improves upon previous statistical methods by using deep learning to understand the context of booking texts. CartoBERT achieved a 25% increase in accuracy, reaching approximately 93% in generating valid pickup point names. The system allows for scalable automatic generation of pickup point names across multiple geographies with minimal human intervention. Future improvements include exploring active learning to enhance model efficiency and considering open-sourcing a general Indonesia Bahasa ALBERT model.",
    "infraDetails": [
      "Data stores for historical booking data and chat logs",
      "Pre-processing pipeline for data masking and text normalization",
      "Monitoring system for model performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "CartoBERT",
        "responsibility": "NLP model for recognizing and generating pickup point names from booking texts."
      },
      {
        "name": "Data Pre-processing Pipeline",
        "responsibility": "Handles data masking, normalization, and prepares text for model training."
      },
      {
        "name": "Token Classification Layer",
        "responsibility": "Fine-tunes the model to predict tokens belonging to pickup point names."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.gojek.io/blog/nlp-cartobert",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 255,
    "company": "Mozilla",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Predict the outcome of software tests",
    "title": "Testing Firefox more efficiently with machine learning",
    "url": "https://hacks.mozilla.org/2020/07/testing-firefox-more-efficiently-with-machine-learning/",
    "year": 2020,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "ActiveData (data warehouse for test execution status)"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Mozilla aims to enhance the efficiency of its continuous integration (CI) system for Firefox testing by leveraging machine learning to predict test outcomes.",
      "With around 85,000 unique test files and over 90 configurations, the current CI system faces significant computational demands, running approximately 2.3 billion tests daily.",
      "The integration of machine learning allows for a more data-driven approach to selecting tests, reducing unnecessary runs and alleviating the cognitive load on developers.",
      "By correlating patches to tests using historical regression data, Mozilla can optimize test selection and configuration, ultimately saving time and resources."
    ],
    "summary": "Mozilla aims to enhance the efficiency of its continuous integration (CI) system for Firefox testing by leveraging machine learning to predict test outcomes. With around 85,000 unique test files and over 90 configurations, the current CI system faces significant computational demands, running approximately 2.3 billion tests daily. The integration of machine learning allows for a more data-driven approach to selecting tests, reducing unnecessary runs and alleviating the cognitive load on developers. By correlating patches to tests using historical regression data, Mozilla can optimize test selection and configuration, ultimately saving time and resources.",
    "infraDetails": [
      "ActiveData (data warehouse for test execution status)"
    ],
    "systemComponents": [
      {
        "name": "CI System",
        "responsibility": "Manages the execution of tests across various configurations and platforms."
      },
      {
        "name": "ActiveData",
        "responsibility": "Stores and manages the status of all test executions."
      },
      {
        "name": "Machine Learning Model",
        "responsibility": "Predicts the optimal set of tests to run based on historical data."
      },
      {
        "name": "Heuristic Algorithms",
        "responsibility": "Analyzes test failures and correlations to identify potential regressions."
      },
      {
        "name": "Data Collection System",
        "responsibility": "Gathers data about patches and test results for analysis."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://hacks.mozilla.org/2020/07/testing-firefox-more-efficiently-with-machine-learning/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 256,
    "company": "Adyen",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Predict probability of transaction success",
    "title": "Optimizing payment conversion rates with contextual multi-armed bandits",
    "url": "https://www.adyen.com/blog/optimizing-payment-conversion-rates-with-contextual-multi-armed-bandits",
    "year": 2020,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [],
    "sourceError": "HTTP 404",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": false,
    "summarySource": "missing"
  },
  {
    "id": 257,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Detect payment fraud",
    "title": "Explainable Fraud Detection",
    "url": "https://www.aboutwayfair.com/tech-innovation/explainable-fraud-detection",
    "year": 2020,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Data stores for order information",
      "Batch processing for model training",
      "Stream processing for real-time fraud detection",
      "Feature store for managing input features",
      "Model serving infrastructure for deploying fraud detection models",
      "Monitoring systems for tracking model performance and explainability"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair employs Explainable Artificial Intelligence (XAI) to enhance fraud detection, particularly for payment fraud involving stolen credit cards.",
      "The fraud detection system categorizes orders into three buckets, with uncertain cases sent to human reviewers for manual investigation, necessitating model explainability.",
      "Various explanation methods like Permutation importance, Lime, and SHAP are utilized to interpret model predictions, focusing on local explanations for individual cases.",
      "The article discusses the trade-off between model interpretability and predictive performance, emphasizing the importance of understanding model decisions in fraud detection."
    ],
    "summary": "Wayfair employs Explainable Artificial Intelligence (XAI) to enhance fraud detection, particularly for payment fraud involving stolen credit cards. The fraud detection system categorizes orders into three buckets, with uncertain cases sent to human reviewers for manual investigation, necessitating model explainability. Various explanation methods like Permutation importance, Lime, and SHAP are utilized to interpret model predictions, focusing on local explanations for individual cases. The article discusses the trade-off between model interpretability and predictive performance, emphasizing the importance of understanding model decisions in fraud detection.",
    "infraDetails": [
      "Data stores for order information",
      "Batch processing for model training",
      "Stream processing for real-time fraud detection",
      "Feature store for managing input features",
      "Model serving infrastructure for deploying fraud detection models",
      "Monitoring systems for tracking model performance and explainability"
    ],
    "systemComponents": [
      {
        "name": "Fraud Detection Model",
        "responsibility": "Classifies orders as fraudulent or non-fraudulent using machine learning algorithms."
      },
      {
        "name": "Human Review System",
        "responsibility": "Handles uncertain cases by allowing human reviewers to investigate and evaluate orders."
      },
      {
        "name": "Explanation Engine",
        "responsibility": "Generates explanations for model predictions using methods like Lime and SHAP."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves features used in the fraud detection models."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and the effectiveness of explanations provided to human reviewers."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/tech-innovation/explainable-fraud-detection",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 258,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Provide location suggestions",
    "title": "How Lyft predicts a rider's destination for better in-app experience",
    "url": "https://eng.lyft.com/how-lyft-predicts-your-destination-with-attention-791146b0a439",
    "year": 2020,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for historical ride data",
      "Batch processing system for model training",
      "Feature store for managing ride features",
      "Model serving infrastructure for real-time predictions",
      "Monitoring system for evaluating model performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft predicts rider destinations to enhance user experience by providing relevant location suggestions.",
      "The prediction model uses historical ride data to personalize recommendations, limiting candidate destinations to those previously visited by the rider.",
      "An attention mechanism, specifically multi-head attention, is employed to determine the most relevant historical rides for the current session.",
      "The model was trained on 16 million rides and showed an 8% improvement in top 2 accuracy, leading to a 3.5% increase in destination setting by users.",
      "Continuous optimizations are planned to further improve the display of suggested destinations."
    ],
    "summary": "Lyft predicts rider destinations to enhance user experience by providing relevant location suggestions. The prediction model uses historical ride data to personalize recommendations, limiting candidate destinations to those previously visited by the rider. An attention mechanism, specifically multi-head attention, is employed to determine the most relevant historical rides for the current session. The model was trained on 16 million rides and showed an 8% improvement in top 2 accuracy, leading to a 3.5% increase in destination setting by users. Continuous optimizations are planned to further improve the display of suggested destinations.",
    "infraDetails": [
      "Data stores for historical ride data",
      "Batch processing system for model training",
      "Feature store for managing ride features",
      "Model serving infrastructure for real-time predictions",
      "Monitoring system for evaluating model performance"
    ],
    "systemComponents": [
      {
        "name": "Candidate Set Generator",
        "responsibility": "Limits candidate destinations based on rider's historical rides."
      },
      {
        "name": "Attention Mechanism",
        "responsibility": "Scores and weights historical rides to determine relevance for current session."
      },
      {
        "name": "Joint Self-Attention Layer",
        "responsibility": "Frames the meaning of each ride in the context of surrounding rides."
      },
      {
        "name": "Pointwise Feedforward Layer",
        "responsibility": "Processes raw ride features to extract context vectors."
      },
      {
        "name": "Model Evaluation System",
        "responsibility": "Assesses model performance and accuracy metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/how-lyft-predicts-your-destination-with-attention-791146b0a439",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 259,
    "company": "Zillow",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Generate floor plans from photos",
    "title": "Zillow Floor Plan: Training Models to Detect Windows, Doors and Openings in Panoramas",
    "url": "https://www.zillow.com/tech/training-models-to-detect-windows-doors-in-panos/",
    "year": 2020,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Data stores for annotated panorama images",
      "Object detection model training infrastructure",
      "Model serving infrastructure for deploying predictions",
      "Monitoring systems for model performance evaluation"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Zillow is developing a system to generate floor plans from 360-degree panoramas by detecting windows, doors, and openings (WDOs).",
      "The project emphasizes the importance of custom class definitions for WDOs to meet specific business needs, particularly for accurate floor plan representation.",
      "Data collection and annotation were critical, with a focus on consistency and quality to ensure effective model training.",
      "The team explored two training routes for the object detection model, ultimately opting to train directly on the panoramas to leverage their unique characteristics."
    ],
    "summary": "Zillow is developing a system to generate floor plans from 360-degree panoramas by detecting windows, doors, and openings (WDOs). The project emphasizes the importance of custom class definitions for WDOs to meet specific business needs, particularly for accurate floor plan representation. Data collection and annotation were critical, with a focus on consistency and quality to ensure effective model training. The team explored two training routes for the object detection model, ultimately opting to train directly on the panoramas to leverage their unique characteristics.",
    "infraDetails": [
      "Data stores for annotated panorama images",
      "Object detection model training infrastructure",
      "Model serving infrastructure for deploying predictions",
      "Monitoring systems for model performance evaluation"
    ],
    "systemComponents": [
      {
        "name": "Data Annotation Tool",
        "responsibility": "Facilitates the labeling of WDOs in panorama images."
      },
      {
        "name": "Object Detection Model",
        "responsibility": "Detects and localizes WDOs in 360-degree panoramas."
      },
      {
        "name": "Model Serving Infrastructure",
        "responsibility": "Deploys the trained model to generate predictions on new panorama images."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and accuracy over time."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.zillow.com/tech/training-models-to-detect-windows-doors-in-panos/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 260,
    "company": "Linkedin",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Serve personalized learning recommendations",
    "title": "A closer look at the AI behind course recommendations on LinkedIn Learning, Part 2",
    "url": "https://engineering.linkedin.com/blog/2020/course-recommendations-ai-part-two",
    "year": 2020,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for learner and course engagement history",
      "Batch processing systems for data curation and preprocessing",
      "Feature stores for managing learner and course embeddings",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "LinkedIn Learning's course recommendation engine utilizes a combination of Response Prediction and Collaborative Filtering models to generate personalized recommendations.",
      "The Collaborative Filtering approach has evolved to include Deep Neural Network-based methods, which outperform traditional techniques by capturing complex relationships in learner engagement data.",
      "The Response Prediction model leverages learner profile features and course metadata to assess relevance, using a Generalized Linear Mixture Model for personalization.",
      "The system incorporates extensive data preprocessing to ensure that only meaningful engagement data influences the recommendations."
    ],
    "summary": "LinkedIn Learning's course recommendation engine utilizes a combination of Response Prediction and Collaborative Filtering models to generate personalized recommendations. The Collaborative Filtering approach has evolved to include Deep Neural Network-based methods, which outperform traditional techniques by capturing complex relationships in learner engagement data. The Response Prediction model leverages learner profile features and course metadata to assess relevance, using a Generalized Linear Mixture Model for personalization. The system incorporates extensive data preprocessing to ensure that only meaningful engagement data influences the recommendations.",
    "infraDetails": [
      "Data stores for learner and course engagement history",
      "Batch processing systems for data curation and preprocessing",
      "Feature stores for managing learner and course embeddings",
      "Model serving infrastructure for deploying recommendation models",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "Response Prediction Model",
        "responsibility": "Predicts member-course relevance using learner profiles and course metadata."
      },
      {
        "name": "Collaborative Filtering Model",
        "responsibility": "Generates recommendations based on long-duration engagement data using neural networks."
      },
      {
        "name": "Data Preprocessing Pipeline",
        "responsibility": "Curates and filters engagement data to reduce noise before model training."
      },
      {
        "name": "Embedding Layer",
        "responsibility": "Outputs low-dimensional vector representations for learners and courses."
      },
      {
        "name": "Model Serving Infrastructure",
        "responsibility": "Deploys trained models to generate real-time course recommendations."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.linkedin.com/blog/2020/course-recommendations-ai-part-two",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 261,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Optimize marketing spending",
    "title": "Optimizing DoorDash's Marketing Spend with Machine Learning",
    "url": "https://doordash.engineering/2020/07/31/optimizing-marketing-spend-with-ml/",
    "year": 2020,
    "category": "marketing_ads",
    "categoryLabel": "Marketing and ads",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "DoorDash developed a Marketing Automation platform to optimize marketing spend across various channels, leveraging machine learning to enhance budget allocation.",
      "The platform uses attribution data to understand user interactions and create cost curves that inform how marketing spend translates to user acquisition.",
      "By generating synthetic data through machine learning, DoorDash improves the reliability of campaign-level cost curves, enabling automated bidding for marketing campaigns."
    ],
    "summary": "DoorDash developed a Marketing Automation platform to optimize marketing spend across various channels, leveraging machine learning to enhance budget allocation. The platform uses attribution data to understand user interactions and create cost curves that inform how marketing spend translates to user acquisition. By generating synthetic data through machine learning, DoorDash improves the reliability of campaign-level cost curves, enabling automated bidding for marketing campaigns.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Attribution Data System",
        "responsibility": "Collects and processes data on user interactions with marketing channels to assign credit for conversions."
      },
      {
        "name": "Cost Curve Generator",
        "responsibility": "Creates cost curves based on historical and synthetic data to determine the relationship between spend and user acquisition."
      },
      {
        "name": "Machine Learning Models",
        "responsibility": "Predicts expected conversions for campaigns at various spend levels, enhancing the reliability of cost curves."
      },
      {
        "name": "Automated Bidding System",
        "responsibility": "Allocates budget to campaigns based on optimized spend targets derived from cost curves."
      },
      {
        "name": "Campaign Metadata Storage",
        "responsibility": "Stores metadata about campaigns to assist in identifying similarities and improving model predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://doordash.engineering/2020/07/31/optimizing-marketing-spend-with-ml/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 262,
    "company": "Etsy",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Personalize e-commerce search",
    "title": "Bringing Personalized Search to Etsy",
    "url": "https://www.etsy.com/codeascraft/bringing-personalized-search-to-etsy/",
    "year": 2020,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://www.etsy.com/codeascraft/bringing-personalized-search-to-etsy/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 263,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Rank travel search results",
    "title": "Improving Deep Learning for Ranking Stays at Airbnb",
    "url": "https://medium.com/airbnb-engineering/improving-deep-learning-for-ranking-stays-at-airbnb-959097638bde",
    "year": 2020,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/airbnb-engineering/improving-deep-learning-for-ranking-stays-at-airbnb-959097638bde",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 264,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Improve search experience for new customers",
    "title": "Bayesian Product Ranking at Wayfair",
    "url": "https://www.aboutwayfair.com/tech-innovation/bayesian-product-ranking-at-wayfair",
    "year": 2020,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for historical order and interaction data"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed a Bayesian product ranking system to enhance the shopping experience for new customers by identifying and presenting products with broad appeal.",
      "The system utilizes logistic regression to model product appeal, accounting for position effects and historical performance while incorporating Bayesian methods for better estimates.",
      "To mitigate noise from sparse data, the algorithm employs empirical Bayesian regularization and integrates multiple customer interaction signals beyond just orders.",
      "The model is updated daily using a Bayesian approach, allowing it to adapt to changing customer preferences while retaining historical performance data.",
      "Real-time ranking of products balances the need for exploiting known appealing products and exploring new options to gather more data."
    ],
    "summary": "Wayfair developed a Bayesian product ranking system to enhance the shopping experience for new customers by identifying and presenting products with broad appeal. The system utilizes logistic regression to model product appeal, accounting for position effects and historical performance while incorporating Bayesian methods for better estimates. To mitigate noise from sparse data, the algorithm employs empirical Bayesian regularization and integrates multiple customer interaction signals beyond just orders. The model is updated daily using a Bayesian approach, allowing it to adapt to changing customer preferences while retaining historical performance data. Real-time ranking of products balances the need for exploiting known appealing products and exploring new options to gather more data.",
    "infraDetails": [
      "Data stores for historical order and interaction data"
    ],
    "systemComponents": [
      {
        "name": "Logistic Regression Model",
        "responsibility": "Models the probability of product orders based on position and historical performance."
      },
      {
        "name": "Bayesian Estimation Framework",
        "responsibility": "Provides a method for regularizing estimates and incorporating prior information."
      },
      {
        "name": "Daily Update Loop",
        "responsibility": "Updates product rankings using new customer data while retaining historical insights."
      },
      {
        "name": "Recommendation Engine",
        "responsibility": "Ranks and displays products in real-time to optimize customer engagement."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/tech-innovation/bayesian-product-ranking-at-wayfair",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 265,
    "company": "Twitter",
    "industry": "Social platforms",
    "industries": [
      "Social platforms"
    ],
    "description": "Predict value of ad requests",
    "title": "Using machine learning to predict the value of ad requests",
    "url": "https://blog.twitter.com/engineering/en_us/topics/insights/2020/using-machine-learning-to-predict-the-value-of-ad-requests",
    "year": 2020,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Feature store for request features",
      "Model serving infrastructure for ML model",
      "Monitoring system for performance metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Twitter's Adserver processes ad requests from two main sources: Twitter Owned and Operated (TOO) products and MoPub.",
      "Initially, a heuristic solution was used to filter low-value ad requests, but it had limitations in reliability and required manual threshold tuning.",
      "A machine learning model was implemented to predict the value of ad requests, significantly reducing the number of processed TAP requests while increasing revenue.",
      "The ML model is lightweight, continuously trained, and outputs updated models every hour to optimize request processing.",
      "The implementation improved computational efficiency and overall system metrics for both TAP and TOO ad requests."
    ],
    "summary": "Twitter's Adserver processes ad requests from two main sources: Twitter Owned and Operated (TOO) products and MoPub. Initially, a heuristic solution was used to filter low-value ad requests, but it had limitations in reliability and required manual threshold tuning. A machine learning model was implemented to predict the value of ad requests, significantly reducing the number of processed TAP requests while increasing revenue. The ML model is lightweight, continuously trained, and outputs updated models every hour to optimize request processing. The implementation improved computational efficiency and overall system metrics for both TAP and TOO ad requests.",
    "infraDetails": [
      "Feature store for request features",
      "Model serving infrastructure for ML model",
      "Monitoring system for performance metrics"
    ],
    "systemComponents": [
      {
        "name": "Adserver",
        "responsibility": "Processes incoming ad requests and serves relevant ads."
      },
      {
        "name": "Heuristic Filter",
        "responsibility": "Initially filters low-value ad requests based on predefined rules."
      },
      {
        "name": "ML Model",
        "responsibility": "Predicts the value of ad requests to prioritize processing."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks performance metrics and system efficiency."
      },
      {
        "name": "Feature Store",
        "responsibility": "Stores features used for predicting ad request values."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://blog.twitter.com/engineering/en_us/topics/insights/2020/using-machine-learning-to-predict-the-value-of-ad-requests",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 266,
    "company": "Zynga",
    "industry": "Gaming",
    "industries": [
      "Gaming"
    ],
    "description": "Personalize push notification timing",
    "title": "Deep Reinforcement Learning in Production Part 2: Personalizing User Notifications",
    "url": "https://towardsdatascience.com/deep-reinforcement-learning-in-production-part-2-personalizing-user-notifications-812a68ce2355",
    "year": 2020,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Machine learning pipeline powered by RL Bakery",
      "Batch training workflow for updating the RL agent",
      "Feature store for user engagement metrics",
      "Model serving infrastructure for real-time notification recommendations",
      "Monitoring system for tracking engagement metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Zynga implemented deep reinforcement learning (RL) to personalize push notification timing for their game, Words With Friends Instant, aiming to increase user engagement.",
      "The previous segment-based approach was limited by crude time zone approximations and lacked personalization, prompting the shift to an RL-based solution.",
      "The RL agent was trained to determine the optimal time to send notifications based on user historical interactions, resulting in a 10% increase in click-through rates.",
      "The system operates in an offline, batch RL setup, allowing the agent to learn from past data and adapt to changing user patterns without manual tuning.",
      "This successful implementation has been deployed to millions of players, showcasing the effectiveness of RL for personalization applications."
    ],
    "summary": "Zynga implemented deep reinforcement learning (RL) to personalize push notification timing for their game, Words With Friends Instant, aiming to increase user engagement. The previous segment-based approach was limited by crude time zone approximations and lacked personalization, prompting the shift to an RL-based solution. The RL agent was trained to determine the optimal time to send notifications based on user historical interactions, resulting in a 10% increase in click-through rates. The system operates in an offline, batch RL setup, allowing the agent to learn from past data and adapt to changing user patterns without manual tuning. This successful implementation has been deployed to millions of players, showcasing the effectiveness of RL for personalization applications.",
    "infraDetails": [
      "Machine learning pipeline powered by RL Bakery",
      "Batch training workflow for updating the RL agent",
      "Feature store for user engagement metrics",
      "Model serving infrastructure for real-time notification recommendations",
      "Monitoring system for tracking engagement metrics"
    ],
    "systemComponents": [
      {
        "name": "RL Agent",
        "responsibility": "Selects optimal notification timing actions based on user interactions to maximize engagement."
      },
      {
        "name": "RL Bakery",
        "responsibility": "Facilitates the machine learning pipeline for collecting, training, and performing batch recommendations."
      },
      {
        "name": "Data Store",
        "responsibility": "Stores user historical interactions and engagement metrics for training the RL agent."
      },
      {
        "name": "Batch Training Workflow",
        "responsibility": "Updates the RL agent daily using historical data to improve notification timing strategies."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of notifications and user engagement metrics to inform future optimizations."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://towardsdatascience.com/deep-reinforcement-learning-in-production-part-2-personalizing-user-notifications-812a68ce2355",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 267,
    "company": "Zillow",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Rank homes to buy",
    "title": "Guided Search - Personalized Search Refinements to Help Customers Find their Dream Home",
    "url": "https://www.zillow.com/tech/personalized-search-refinements/",
    "year": 2020,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Clickstream data for user behavior analysis",
      "User interaction tracking for model training"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Zillow's Guided Search enhances the home buying experience by suggesting personalized search refinements based on user behavior and regional preferences.",
      "The system ranks refinements using clickstream data to model the probability of user engagement with suggested filters.",
      "Two models are employed: one for co-occurrence of filters and another for capturing filter revisions, allowing for adaptive suggestions based on user interactions.",
      "Initial AB tests show a 33% increase in engagement with the suggested refinements, indicating positive impacts on user experience and business metrics."
    ],
    "summary": "Zillow's Guided Search enhances the home buying experience by suggesting personalized search refinements based on user behavior and regional preferences. The system ranks refinements using clickstream data to model the probability of user engagement with suggested filters. Two models are employed: one for co-occurrence of filters and another for capturing filter revisions, allowing for adaptive suggestions based on user interactions. Initial AB tests show a 33% increase in engagement with the suggested refinements, indicating positive impacts on user experience and business metrics.",
    "infraDetails": [
      "Clickstream data for user behavior analysis",
      "User interaction tracking for model training"
    ],
    "systemComponents": [
      {
        "name": "Guided Search UI",
        "responsibility": "Displays personalized search refinements to users."
      },
      {
        "name": "Ranking Model",
        "responsibility": "Estimates the probability of user engagement with filter suggestions."
      },
      {
        "name": "Data Aggregation Layer",
        "responsibility": "Processes clickstream data to derive insights on filter usage."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.zillow.com/tech/personalized-search-refinements/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 268,
    "company": "Picnic",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict delivery drop times",
    "title": "Optimal drop times using machine learning",
    "url": "https://blog.picnic.nl/the-trade-off-between-efficiency-and-being-on-time-optimizing-drop-times-using-machine-learning-d3f6fb1b0f31",
    "year": 2020,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data warehouse for capturing data from various back-end systems and third parties",
      "Feature store for managing and serving features used in the model",
      "Monitoring system to track model performance and on-time delivery metrics",
      "Orchestration tools for managing the deployment and scheduling of model predictions",
      "Batch processing system for handling historical data analysis and model training"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Picnic developed a machine learning model to predict delivery drop times, which is crucial for optimizing their distribution system.",
      "The model aims to balance efficiency and on-time delivery, reducing the safety buffer needed for deliveries while maintaining customer satisfaction.",
      "Using exploratory data analysis, various features affecting delivery times were identified, and a multilayer perceptron model was chosen for its performance improvements.",
      "A pilot test showed a 20% increase in delivery efficiency with only a slight decrease in on-time performance, leading to a gradual rollout of the model across multiple hubs."
    ],
    "summary": "Picnic developed a machine learning model to predict delivery drop times, which is crucial for optimizing their distribution system. The model aims to balance efficiency and on-time delivery, reducing the safety buffer needed for deliveries while maintaining customer satisfaction. Using exploratory data analysis, various features affecting delivery times were identified, and a multilayer perceptron model was chosen for its performance improvements. A pilot test showed a 20% increase in delivery efficiency with only a slight decrease in on-time performance, leading to a gradual rollout of the model across multiple hubs.",
    "infraDetails": [
      "Data warehouse for capturing data from various back-end systems and third parties",
      "Feature store for managing and serving features used in the model",
      "Monitoring system to track model performance and on-time delivery metrics",
      "Orchestration tools for managing the deployment and scheduling of model predictions",
      "Batch processing system for handling historical data analysis and model training"
    ],
    "systemComponents": [
      {
        "name": "Data Science Team",
        "responsibility": "Developing and refining the drop time prediction model."
      },
      {
        "name": "Vehicle Routing Model",
        "responsibility": "Determining optimal delivery routes based on predicted drop times."
      },
      {
        "name": "MLP Model",
        "responsibility": "Predicting delivery drop times to improve efficiency and on-time performance."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracking the performance of the delivery system and model predictions."
      },
      {
        "name": "Data Warehouse",
        "responsibility": "Storing and managing data from various sources for analysis and model training."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://blog.picnic.nl/the-trade-off-between-efficiency-and-being-on-time-optimizing-drop-times-using-machine-learning-d3f6fb1b0f31",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 269,
    "company": "Shopify",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Categorize e-commerce products",
    "title": "Categorizing Products at Scale",
    "url": "https://shopify.engineering/categorizing-products-at-scale",
    "year": 2020,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [
      "Data stores for product information",
      "Batch processing system using PySpark for featurization",
      "Model serving infrastructure for logistic regression predictions",
      "Monitoring system for model performance and evaluation metrics"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Shopify implemented a product categorization engine to help business owners classify their diverse products, leveraging a hierarchical taxonomy with over 5000 categories.",
      "The system utilizes a simple logistic regression model combined with a unique featurization technique to handle the scale and structure of the classification problem effectively.",
      "By employing Kesler\u2019s Construction, the model can manage thousands of categories while maintaining interpretability and reducing computational costs.",
      "The categorization engine is used by over 20 teams at Shopify to provide personalized insights and recommendations to business owners across various platforms."
    ],
    "summary": "Shopify implemented a product categorization engine to help business owners classify their diverse products, leveraging a hierarchical taxonomy with over 5000 categories. The system utilizes a simple logistic regression model combined with a unique featurization technique to handle the scale and structure of the classification problem effectively. By employing Kesler\u2019s Construction, the model can manage thousands of categories while maintaining interpretability and reducing computational costs. The categorization engine is used by over 20 teams at Shopify to provide personalized insights and recommendations to business owners across various platforms.",
    "infraDetails": [
      "Data stores for product information",
      "Batch processing system using PySpark for featurization",
      "Model serving infrastructure for logistic regression predictions",
      "Monitoring system for model performance and evaluation metrics"
    ],
    "systemComponents": [
      {
        "name": "Product Categorization Engine",
        "responsibility": "Classifies products into predefined categories using a hierarchical taxonomy."
      },
      {
        "name": "Featurization Module",
        "responsibility": "Transforms product data into a machine-understandable format for model training."
      },
      {
        "name": "Logistic Regression Model",
        "responsibility": "Performs classification of products based on featurized input data."
      },
      {
        "name": "Inference System",
        "responsibility": "Generates predictions for product categories based on the trained model."
      },
      {
        "name": "Evaluation Metrics System",
        "responsibility": "Assesses model performance using hierarchical evaluation measures."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://shopify.engineering/categorizing-products-at-scale",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 270,
    "company": "Gojek",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Target cross-sell to existing users",
    "title": "How We Built a Matchmaking Algorithm to Cross-Sell Products",
    "url": "https://www.gojek.io/blog/how-we-built-a-matchmaking-algorithm-to-cross-sell-products",
    "year": 2020,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "BigQuery for data storage and retrieval",
      "ETL processes using pandas for data transformation",
      "Spark's distributed environment for building the recommendation engine",
      "Spark ML library for implementing matrix factorization"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Gojek developed a matchmaking algorithm to enhance cross-selling of its various services to existing users.",
      "The initial approach used a classification model but faced scalability issues, prompting a shift to a recommendation system.",
      "The recommendation engine utilizes a utility matrix to predict user-product interactions, leveraging collaborative filtering techniques.",
      "Matrix Factorization was chosen as the final approach due to its efficiency in handling large datasets and implicit feedback.",
      "Field tests demonstrated significant improvements in conversion rates, validating the effectiveness of the algorithm."
    ],
    "summary": "Gojek developed a matchmaking algorithm to enhance cross-selling of its various services to existing users. The initial approach used a classification model but faced scalability issues, prompting a shift to a recommendation system. The recommendation engine utilizes a utility matrix to predict user-product interactions, leveraging collaborative filtering techniques. Matrix Factorization was chosen as the final approach due to its efficiency in handling large datasets and implicit feedback. Field tests demonstrated significant improvements in conversion rates, validating the effectiveness of the algorithm.",
    "infraDetails": [
      "BigQuery for data storage and retrieval",
      "ETL processes using pandas for data transformation",
      "Spark's distributed environment for building the recommendation engine",
      "Spark ML library for implementing matrix factorization"
    ],
    "systemComponents": [
      {
        "name": "Recommendation Engine",
        "responsibility": "Matches users with products based on their interaction history."
      },
      {
        "name": "Utility Matrix",
        "responsibility": "Stores customer-product interaction data to inform recommendations."
      },
      {
        "name": "ETL Pipeline",
        "responsibility": "Transforms raw data into a usable format for the recommendation system."
      },
      {
        "name": "Field Testing Framework",
        "responsibility": "Evaluates the performance of the recommendation model in real-world scenarios."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.gojek.io/blog/how-we-built-a-matchmaking-algorithm-to-cross-sell-products",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 271,
    "company": "PayPal",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Detect payment fraud",
    "title": "Multi-Domain Fraud Detection While Reducing Good User Declines",
    "url": "https://medium.com/paypal-tech/multi-domain-fraud-detection-while-reducing-good-user-declines-part-i-e8bba5b07da8",
    "year": 2020,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Data stores for transaction data and user profiles",
      "Batch processing systems for historical data analysis",
      "Real-time stream processing for live transaction monitoring",
      "Feature store for managing and serving features used in model training",
      "Model serving infrastructure for deploying the fraud detection models",
      "Monitoring systems for tracking model performance and detecting drift"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The article discusses a multi-domain fraud detection system that optimizes for both fraud detection and the approval of legitimate users.",
      "It employs a multi-task learning framework to detect various fraud patterns while minimizing false positives.",
      "The approach includes robust feature learning to maintain performance despite changes in data distribution post-deployment.",
      "The architecture utilizes shared parameters and cross-stitch units to enhance the model's ability to generalize across different fraud types."
    ],
    "summary": "The article discusses a multi-domain fraud detection system that optimizes for both fraud detection and the approval of legitimate users. It employs a multi-task learning framework to detect various fraud patterns while minimizing false positives. The approach includes robust feature learning to maintain performance despite changes in data distribution post-deployment. The architecture utilizes shared parameters and cross-stitch units to enhance the model's ability to generalize across different fraud types.",
    "infraDetails": [
      "Data stores for transaction data and user profiles",
      "Batch processing systems for historical data analysis",
      "Real-time stream processing for live transaction monitoring",
      "Feature store for managing and serving features used in model training",
      "Model serving infrastructure for deploying the fraud detection models",
      "Monitoring systems for tracking model performance and detecting drift"
    ],
    "systemComponents": [
      {
        "name": "Multi-Task Learning Model",
        "responsibility": "Detects multiple types of fraud patterns using shared parameters."
      },
      {
        "name": "Cross-Stitch Units",
        "responsibility": "Facilitates knowledge sharing between task-specific networks to improve generalization."
      },
      {
        "name": "Robust Feature Learning Module",
        "responsibility": "Learns stable feature representations to handle data distribution shifts."
      },
      {
        "name": "Joint Optimizer",
        "responsibility": "Optimizes the training process for both long-term and near-term fraud patterns."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/paypal-tech/multi-domain-fraud-detection-while-reducing-good-user-declines-part-i-e8bba5b07da8",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 272,
    "company": "OLX",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Detect stolen photos",
    "title": "Fighting fraud with Triplet Loss",
    "url": "https://tech.olx.com/fighting-fraud-with-triplet-loss-86e5f79c7a3e",
    "year": 2020,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Data stores for storing images and their embeddings",
      "Batch processing system for generating embeddings from images",
      "Feature store for managing image embeddings and metadata",
      "Model serving infrastructure for deploying the Siamese network",
      "Monitoring tools for tracking model performance and fraud detection accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Fraudsters often steal and alter images to create fake listings, making it crucial to detect such duplicates efficiently.",
      "The system utilizes embeddings to compare images quickly by calculating distances between their low-dimensional representations.",
      "A Siamese network with triplet loss is employed to generate embeddings, ensuring that similar images are closer together in the embedding space.",
      "The model can generate multiple positive examples from a single image through augmentation, enhancing training efficiency.",
      "By using a combination of easy, semi-hard, and hard triplets, the network is trained to effectively distinguish between original and altered images."
    ],
    "summary": "Fraudsters often steal and alter images to create fake listings, making it crucial to detect such duplicates efficiently. The system utilizes embeddings to compare images quickly by calculating distances between their low-dimensional representations. A Siamese network with triplet loss is employed to generate embeddings, ensuring that similar images are closer together in the embedding space. The model can generate multiple positive examples from a single image through augmentation, enhancing training efficiency. By using a combination of easy, semi-hard, and hard triplets, the network is trained to effectively distinguish between original and altered images.",
    "infraDetails": [
      "Data stores for storing images and their embeddings",
      "Batch processing system for generating embeddings from images",
      "Feature store for managing image embeddings and metadata",
      "Model serving infrastructure for deploying the Siamese network",
      "Monitoring tools for tracking model performance and fraud detection accuracy"
    ],
    "systemComponents": [
      {
        "name": "Image Database",
        "responsibility": "Stores original and uploaded images for comparison."
      },
      {
        "name": "Embedding Generator",
        "responsibility": "Transforms images into low-dimensional embeddings for faster comparison."
      },
      {
        "name": "Siamese Network",
        "responsibility": "Trains to produce embeddings that minimize distance between similar images."
      },
      {
        "name": "Triplet Loss Function",
        "responsibility": "Guides the training of the Siamese network by ensuring proper distance metrics between images."
      },
      {
        "name": "Fraud Detection Module",
        "responsibility": "Analyzes distances between embeddings to identify potential fraud."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.olx.com/fighting-fraud-with-triplet-loss-86e5f79c7a3e",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 273,
    "company": "Stripe",
    "industry": "Fintech and banking",
    "industries": [
      "Fintech and banking"
    ],
    "description": "Detect fraud in online payments",
    "title": "Similarity clustering to catch fraud rings",
    "url": "https://stripe.com/blog/similarity-clustering",
    "year": 2020,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Automated model retraining for continuous improvement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Stripe employs machine learning to detect and cluster accounts created by fraudsters, enhancing their ability to identify and block fraudulent activities.",
      "The system uses similarity scores based on shared attributes between accounts to predict potential fraud, moving beyond traditional heuristic methods.",
      "By leveraging clustering techniques, Stripe's risk analysts can efficiently review accounts and focus on more sophisticated fraud cases.",
      "The clustering approach not only improves fraud detection but also serves as a foundational tool for other systems within Stripe's fraud prevention infrastructure."
    ],
    "summary": "Stripe employs machine learning to detect and cluster accounts created by fraudsters, enhancing their ability to identify and block fraudulent activities. The system uses similarity scores based on shared attributes between accounts to predict potential fraud, moving beyond traditional heuristic methods. By leveraging clustering techniques, Stripe's risk analysts can efficiently review accounts and focus on more sophisticated fraud cases. The clustering approach not only improves fraud detection but also serves as a foundational tool for other systems within Stripe's fraud prevention infrastructure.",
    "infraDetails": [
      "Automated model retraining for continuous improvement"
    ],
    "systemComponents": [
      {
        "name": "Similarity Model",
        "responsibility": "Predicts potential fraud by calculating similarity scores between account pairs."
      },
      {
        "name": "Candidate Edge Generator",
        "responsibility": "Creates a set of account pairs to be scored based on shared attributes."
      },
      {
        "name": "Clustering Algorithm",
        "responsibility": "Identifies clusters of accounts based on similarity scores and connected components."
      },
      {
        "name": "Risk Analyst Interface",
        "responsibility": "Provides tools for analysts to review and investigate clustered accounts."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://stripe.com/blog/similarity-clustering",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 274,
    "company": "Doordash",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Search for restaurants and dishes",
    "title": "Things Not Strings: Understanding Search Intent with Better Recall",
    "url": "https://doordash.engineering/2020/12/15/understanding-search-intent-with-better-recall/",
    "year": 2020,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Elasticsearch for document retrieval",
      "Search pipeline for recall and ranking",
      "Three-part recall pipeline for query processing"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "DoorDash faced challenges with their out-of-the-box search solution as query volume and corpus size grew, leading to poor search experiences for users.",
      "The search pipeline was re-engineered to improve recall and ranking, focusing on the most frequently searched queries to enhance relevance and conversion rates.",
      "Key improvements included treating queries as concepts rather than strings and implementing a new ranking model that incorporates search context information."
    ],
    "summary": "DoorDash faced challenges with their out-of-the-box search solution as query volume and corpus size grew, leading to poor search experiences for users. The search pipeline was re-engineered to improve recall and ranking, focusing on the most frequently searched queries to enhance relevance and conversion rates. Key improvements included treating queries as concepts rather than strings and implementing a new ranking model that incorporates search context information.",
    "infraDetails": [
      "Elasticsearch for document retrieval",
      "Search pipeline for recall and ranking",
      "Three-part recall pipeline for query processing"
    ],
    "systemComponents": [
      {
        "name": "Recall Component",
        "responsibility": "Retrieves relevant store and item documents based on user queries."
      },
      {
        "name": "Ranking Component",
        "responsibility": "Reorders retrieved documents to best meet consumer needs."
      },
      {
        "name": "Query Transformation Module",
        "responsibility": "Standardizes and interprets user queries to improve search relevance."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://doordash.engineering/2020/12/15/understanding-search-intent-with-better-recall/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 275,
    "company": "Spotify",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Recommend shortcuts for homepage",
    "title": "Reach for the Top: How Spotify Built Shortcuts in Just Six Months",
    "url": "https://engineering.atspotify.com/2020/04/reach-for-the-top-how-spotify-built-shortcuts-in-just-six-months/",
    "year": 2020,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "BigQuery for storing and analyzing feature serving statistics and model outputs.",
      "Hourly-batch pipelines for processing and emitting statistics.",
      "Monitoring dashboards for visualizing model performance and alert mechanisms."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Spotify launched Shortcuts to enhance user experience by providing quick access to recently played and favored content.",
      "The development involved collaboration across teams, focusing on personalized recommendations through heuristics and machine learning models.",
      "Initial analysis revealed that users frequently listen to a small number of entities, guiding the design of Shortcuts to surface these favorites effectively.",
      "The team iterated on heuristics before transitioning to machine learning models, ultimately achieving a significant improvement in recommendation accuracy.",
      "Robust monitoring and alert systems were established to ensure the model's performance and address potential issues post-launch."
    ],
    "summary": "Spotify launched Shortcuts to enhance user experience by providing quick access to recently played and favored content. The development involved collaboration across teams, focusing on personalized recommendations through heuristics and machine learning models. Initial analysis revealed that users frequently listen to a small number of entities, guiding the design of Shortcuts to surface these favorites effectively. The team iterated on heuristics before transitioning to machine learning models, ultimately achieving a significant improvement in recommendation accuracy. Robust monitoring and alert systems were established to ensure the model's performance and address potential issues post-launch.",
    "infraDetails": [
      "BigQuery for storing and analyzing feature serving statistics and model outputs.",
      "Hourly-batch pipelines for processing and emitting statistics.",
      "Monitoring dashboards for visualizing model performance and alert mechanisms."
    ],
    "systemComponents": [
      {
        "name": "Recommendation Heuristics",
        "responsibility": "Provide a baseline for recommendations and enable quick iterations."
      },
      {
        "name": "Machine Learning Models",
        "responsibility": "Predict user favorites based on listening history and optimize recommendations."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Detect issues in model serving and upstream data sources, and alert the team."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.atspotify.com/2020/04/reach-for-the-top-how-spotify-built-shortcuts-in-just-six-months",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 276,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Recommend complementary products",
    "title": "The Visual Complements Model (ViCs): Complementary Product Recommendations From Visual Cues",
    "url": "https://www.aboutwayfair.com/tech-innovation/the-visual-complements-model-vics-complementary-product-recommendations-from-visual-cues",
    "year": 2020,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Data stores for product imagery and customer interaction data",
      "Batch processing for training the ViCs model",
      "Orchestration tools for managing model training and deployment",
      "Feature store for storing product embeddings and compatibility features",
      "Model serving infrastructure for real-time recommendation generation",
      "Monitoring systems to evaluate model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Wayfair developed the Visual Complements Model (ViCs) to recommend complementary products based on visual cues rather than customer browsing history.",
      "The model uses a Siamese Network architecture with triplet loss to create an embedding space that captures compatibility between products.",
      "ViCs aims to address challenges such as cold start problems and biases in traditional recommendation systems by leveraging diverse training data from various sources.",
      "The model has shown promising results in providing stylistically compatible product recommendations, enhancing the shopping experience for customers."
    ],
    "summary": "Wayfair developed the Visual Complements Model (ViCs) to recommend complementary products based on visual cues rather than customer browsing history. The model uses a Siamese Network architecture with triplet loss to create an embedding space that captures compatibility between products. ViCs aims to address challenges such as cold start problems and biases in traditional recommendation systems by leveraging diverse training data from various sources. The model has shown promising results in providing stylistically compatible product recommendations, enhancing the shopping experience for customers.",
    "infraDetails": [
      "Data stores for product imagery and customer interaction data",
      "Batch processing for training the ViCs model",
      "Orchestration tools for managing model training and deployment",
      "Feature store for storing product embeddings and compatibility features",
      "Model serving infrastructure for real-time recommendation generation",
      "Monitoring systems to evaluate model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "ViCs Model",
        "responsibility": "Generates product recommendations based on visual compatibility."
      },
      {
        "name": "Siamese Network",
        "responsibility": "Learns the embedding space for product compatibility using triplet loss."
      },
      {
        "name": "Data Pipeline",
        "responsibility": "Handles the collection and processing of training data from multiple sources."
      },
      {
        "name": "Feature Store",
        "responsibility": "Stores embeddings and features for products to facilitate recommendations."
      },
      {
        "name": "Recommendation Engine",
        "responsibility": "Serves real-time product recommendations to users based on the ViCs model."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/tech-innovation/the-visual-complements-model-vics-complementary-product-recommendations-from-visual-cues",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 277,
    "company": "Dailymotion",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Automatically categorize videos",
    "title": "How we used Cross-Lingual Transfer Learning to categorize our content",
    "url": "https://medium.com/dailymotion/how-we-used-cross-lingual-transfer-learning-to-categorize-our-content-c8e0f9c1c6c3",
    "year": 2020,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/dailymotion/how-we-used-cross-lingual-transfer-learning-to-categorize-our-content-c8e0f9c1c6c3",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 278,
    "company": "Duolingo",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Teaching foreign languages",
    "title": "How Duolingo uses AI in every part of its app",
    "url": "https://venturebeat.com/ai/how-duolingo-uses-ai-in-every-part-of-its-app/",
    "year": 2020,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Data stores for user profiles and performance metrics",
      "Monitoring systems for user engagement and performance"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Duolingo leverages AI to enhance its language learning experience, utilizing data from its 30 million monthly active users.",
      "The app employs a spaced repetition system to tailor lessons based on individual user performance and knowledge retention.",
      "Birdbrain, Duolingo's machine learning system, personalizes lesson difficulty and content based on user proficiency and past performance.",
      "The platform also incorporates an algorithm called Blame to analyze user mistakes and provide targeted feedback for improvement.",
      "Duolingo's continuous investment in AI has led to significant advancements in personalized learning and user engagement."
    ],
    "summary": "Duolingo leverages AI to enhance its language learning experience, utilizing data from its 30 million monthly active users. The app employs a spaced repetition system to tailor lessons based on individual user performance and knowledge retention. Birdbrain, Duolingo's machine learning system, personalizes lesson difficulty and content based on user proficiency and past performance. The platform also incorporates an algorithm called Blame to analyze user mistakes and provide targeted feedback for improvement. Duolingo's continuous investment in AI has led to significant advancements in personalized learning and user engagement.",
    "infraDetails": [
      "Data stores for user profiles and performance metrics",
      "Monitoring systems for user engagement and performance"
    ],
    "systemComponents": [
      {
        "name": "Birdbrain",
        "responsibility": "Personalizes lesson difficulty and content based on user performance."
      },
      {
        "name": "Spaced Repetition System",
        "responsibility": "Tracks user knowledge and optimizes practice sessions."
      },
      {
        "name": "Blame Algorithm",
        "responsibility": "Analyzes user mistakes to provide feedback on specific areas of confusion."
      },
      {
        "name": "Session Generator",
        "responsibility": "Constructs personalized lessons based on user data."
      },
      {
        "name": "Smart Tips",
        "responsibility": "Offers corrective grammar tips based on user errors."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://venturebeat.com/ai/how-duolingo-uses-ai-in-every-part-of-its-app/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 279,
    "company": "Firefox",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Automatically assign new untriaged bugs",
    "title": "Teaching machines to triage Firefox bugs",
    "url": "https://hacks.mozilla.org/2019/04/teaching-machines-to-triage-firefox-bugs/",
    "year": 2019,
    "category": "anomaly_ops",
    "categoryLabel": "Anomaly and operations",
    "components": [
      "Data store for historical bug reports",
      "Machine learning model training infrastructure",
      "Feature extraction system from bug titles and comments",
      "Model serving for real-time bug triage",
      "Monitoring system for model performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Mozilla developed BugBug, a machine learning tool to automatically assign products and components to new untriaged bugs in Firefox.",
      "The tool utilizes a large dataset of historical bug reports to train an XGBoost model, focusing on components with sufficient bug filings.",
      "BugBug operates with a confidence threshold of 60%, achieving over 80% precision in its assignments, significantly reducing the time needed for manual triage.",
      "Since its deployment, BugBug has triaged around 350 bugs, with a median response time of 2 days for developers to act on these bugs."
    ],
    "summary": "Mozilla developed BugBug, a machine learning tool to automatically assign products and components to new untriaged bugs in Firefox. The tool utilizes a large dataset of historical bug reports to train an XGBoost model, focusing on components with sufficient bug filings. BugBug operates with a confidence threshold of 60%, achieving over 80% precision in its assignments, significantly reducing the time needed for manual triage. Since its deployment, BugBug has triaged around 350 bugs, with a median response time of 2 days for developers to act on these bugs.",
    "infraDetails": [
      "Data store for historical bug reports",
      "Machine learning model training infrastructure",
      "Feature extraction system from bug titles and comments",
      "Model serving for real-time bug triage",
      "Monitoring system for model performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "BugBug",
        "responsibility": "Automatically assigns products and components to new untriaged bugs."
      },
      {
        "name": "XGBoost Model",
        "responsibility": "Trained on historical bug data to classify and triage bugs."
      },
      {
        "name": "Feature Extraction Module",
        "responsibility": "Collects features from bug titles, comments, and associated keywords."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://hacks.mozilla.org/2019/04/teaching-machines-to-triage-firefox-bugs/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 280,
    "company": "Dropbox",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Predict files users search for",
    "title": "Using machine learning to predict what file you need next",
    "url": "https://dropbox.tech/machine-learning/content-suggestions-machine-learning",
    "year": 2019,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Fast database for retrieving recent files and their signals",
      "Spark cluster for processing historic data",
      "Feature vector encoding system",
      "ML prediction pipeline for ranking files",
      "Feature gating system (Stormcrow) for user experiments"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Dropbox developed a machine learning system to predict which files users are likely to need next based on their recent and frequent access patterns.",
      "The initial version utilized heuristics to rank files, focusing on recency, frequency, and a combined metric called 'frecency'.",
      "User feedback and logging were critical for refining the heuristics and determining the effectiveness of the suggestions.",
      "The system transitioned to a machine learning model to better capture user behavior patterns and improve prediction accuracy.",
      "The ML pipeline includes steps for fetching candidate files, extracting signals, encoding features, and scoring for ranking."
    ],
    "summary": "Dropbox developed a machine learning system to predict which files users are likely to need next based on their recent and frequent access patterns. The initial version utilized heuristics to rank files, focusing on recency, frequency, and a combined metric called 'frecency'. User feedback and logging were critical for refining the heuristics and determining the effectiveness of the suggestions. The system transitioned to a machine learning model to better capture user behavior patterns and improve prediction accuracy. The ML pipeline includes steps for fetching candidate files, extracting signals, encoding features, and scoring for ranking.",
    "infraDetails": [
      "Fast database for retrieving recent files and their signals",
      "Spark cluster for processing historic data",
      "Feature vector encoding system",
      "ML prediction pipeline for ranking files",
      "Feature gating system (Stormcrow) for user experiments"
    ],
    "systemComponents": [
      {
        "name": "Heuristic Engine",
        "responsibility": "Initial ranking of files based on user access patterns using defined heuristics."
      },
      {
        "name": "Logging System",
        "responsibility": "Captures user interactions and feedback to refine heuristics and model performance."
      },
      {
        "name": "ML Model",
        "responsibility": "Predicts the likelihood of file access based on user behavior and historical data."
      },
      {
        "name": "Candidate File Selector",
        "responsibility": "Fetches a limited set of candidate files for ranking to optimize performance."
      },
      {
        "name": "Signal Fetcher",
        "responsibility": "Retrieves relevant signals and metadata for each candidate file to inform predictions."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://dropbox.tech/machine-learning/content-suggestions-machine-learning",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 281,
    "company": "Zoominfo",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Predict data accuracy",
    "title": "Using Machine Learning to Determine Contact Accuracy Scores",
    "url": "https://engineering.zoominfo.com/machine-learning-accuracy-scores",
    "year": 2019,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Feature extraction mechanisms"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "ZoomInfo developed a contact accuracy score to better assess the correctness of contact data by considering multiple factors rather than relying on single metrics like last updated date or human verification.",
      "The contact accuracy score incorporates various elements such as data source, completeness, and the recency of updates to provide a more reliable measure of data accuracy.",
      "Machine learning techniques were employed to analyze a ground truth dataset, allowing for efficient evaluation of the larger dataset without the need for exhaustive manual verification.",
      "The process involved exploratory data analysis to identify predictive features, followed by model development using algorithms like logistic regression to calculate the accuracy score."
    ],
    "summary": "ZoomInfo developed a contact accuracy score to better assess the correctness of contact data by considering multiple factors rather than relying on single metrics like last updated date or human verification. The contact accuracy score incorporates various elements such as data source, completeness, and the recency of updates to provide a more reliable measure of data accuracy. Machine learning techniques were employed to analyze a ground truth dataset, allowing for efficient evaluation of the larger dataset without the need for exhaustive manual verification. The process involved exploratory data analysis to identify predictive features, followed by model development using algorithms like logistic regression to calculate the accuracy score.",
    "infraDetails": [
      "Feature extraction mechanisms"
    ],
    "systemComponents": [
      {
        "name": "Data Collection Module",
        "responsibility": "Collects and verifies ground truth data for accuracy assessment."
      },
      {
        "name": "Feature Extraction Engine",
        "responsibility": "Identifies and extracts relevant features from the dataset for model training."
      },
      {
        "name": "Machine Learning Model",
        "responsibility": "Develops and applies algorithms to predict contact accuracy scores."
      },
      {
        "name": "Data Analysis Framework",
        "responsibility": "Conducts exploratory data analysis to determine predictive power of various fields."
      },
      {
        "name": "Score Calculation System",
        "responsibility": "Calculates and assigns accuracy scores based on the developed model."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://engineering.zoominfo.com/machine-learning-accuracy-scores",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 282,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Recommend marketplace items",
    "title": "Machine Learning-Powered Search Ranking of Airbnb Experiences",
    "url": "https://medium.com/airbnb-engineering/machine-learning-powered-search-ranking-of-airbnb-experiences-110b4b1a0789",
    "year": 2019,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for user interaction logs and Experience features",
      "Batch processing system for offline model training and scoring",
      "Orchestration using Airflow for managing the ranking pipeline",
      "Feature engineering processes to create user and Experience features",
      "Monitoring tools for evaluating model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Airbnb developed a machine learning-powered search ranking system for its Experiences marketplace, which grew from 500 to over 20,000 Experiences in two years.",
      "The ranking system evolved through three stages, starting with a strong baseline model that utilized user interaction data to rank Experiences.",
      "Personalization was introduced in the second stage, leveraging user data such as booked homes and click history to enhance the relevance of search results.",
      "The system demonstrated significant improvements in bookings, achieving a 13% increase by implementing the ML ranking model over a random ranking approach."
    ],
    "summary": "Airbnb developed a machine learning-powered search ranking system for its Experiences marketplace, which grew from 500 to over 20,000 Experiences in two years. The ranking system evolved through three stages, starting with a strong baseline model that utilized user interaction data to rank Experiences. Personalization was introduced in the second stage, leveraging user data such as booked homes and click history to enhance the relevance of search results. The system demonstrated significant improvements in bookings, achieving a 13% increase by implementing the ML ranking model over a random ranking approach.",
    "infraDetails": [
      "Data stores for user interaction logs and Experience features",
      "Batch processing system for offline model training and scoring",
      "Orchestration using Airflow for managing the ranking pipeline",
      "Feature engineering processes to create user and Experience features",
      "Monitoring tools for evaluating model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "Data Collection Module",
        "responsibility": "Collects user interaction data and Experience features for model training."
      },
      {
        "name": "Ranking Model",
        "responsibility": "Implements machine learning algorithms to rank Experiences based on user data."
      },
      {
        "name": "Personalization Engine",
        "responsibility": "Generates personalized ranking features based on user behavior and preferences."
      },
      {
        "name": "Pipeline Orchestrator",
        "responsibility": "Manages the workflow of data processing, model training, and scoring using Airflow."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and user engagement metrics to ensure effectiveness."
      }
    ],
    "sourceFetched": true,
    "summarySource": "llm",
    "sourceUrl": "https://r.jina.ai/http://medium.com/airbnb-engineering/machine-learning-powered-search-ranking-of-airbnb-experiences-110b4b1a0789",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 283,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict location of traffic control elements",
    "title": "Detecting Stop Signs and Traffic Signals: Deep Learning at Lyft Mapping",
    "url": "https://eng.lyft.com/detecting-stop-signs-and-traffic-signals-deep-learning-at-lyft-mapping-75bac609c231",
    "year": 2019,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Telemetry data store for driver speed and GPS traces"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft developed a deep-learning algorithm to predict the location of traffic control elements (TCEs) like stop signs and traffic signals using anonymized driver telemetry data.",
      "The algorithm improves route accuracy, driver position prediction, and supports autonomous vehicle navigation by updating maps in real-time.",
      "A convolutional neural network (CNN) was trained on speed behavior patterns near intersections to classify TCEs, achieving a validation accuracy of over 91% in San Francisco."
    ],
    "summary": "Lyft developed a deep-learning algorithm to predict the location of traffic control elements (TCEs) like stop signs and traffic signals using anonymized driver telemetry data. The algorithm improves route accuracy, driver position prediction, and supports autonomous vehicle navigation by updating maps in real-time. A convolutional neural network (CNN) was trained on speed behavior patterns near intersections to classify TCEs, achieving a validation accuracy of over 91% in San Francisco.",
    "infraDetails": [
      "Telemetry data store for driver speed and GPS traces"
    ],
    "systemComponents": [
      {
        "name": "Telemetry Data Processor",
        "responsibility": "Collects and processes anonymized driver telemetry data."
      },
      {
        "name": "Bounding Box Generator",
        "responsibility": "Creates labeled bounding boxes around intersections for TCE detection."
      },
      {
        "name": "Convolutional Neural Network",
        "responsibility": "Classifies traffic control elements based on driver speed patterns."
      },
      {
        "name": "Kernel Density Estimator",
        "responsibility": "Analyzes speed and distance data to identify driver behavior near intersections."
      },
      {
        "name": "Map Update System",
        "responsibility": "Updates the internal map with detected TCEs in real-time."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/detecting-stop-signs-and-traffic-signals-deep-learning-at-lyft-mapping-75bac609c231",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 284,
    "company": "Gojek",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Personalize search results",
    "title": "The Secret Sauce Behind Search Personalisation",
    "url": "https://www.gojek.io/blog/the-secret-sauce-behind-search-personalisation",
    "year": 2019,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for user preferences and order history",
      "Monitoring tools for tracking search to order conversions",
      "Feature store for managing personalization features"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Gojek's GoFood personalizes search results based on user preferences and past order history to enhance the food ordering experience.",
      "The system uses a learning to rank approach, where relevance scores for restaurants are calculated based on user interactions such as clicks and orders.",
      "By implementing a pairwise ranking model, Gojek improved search to ordering conversions by 20% and achieved a 23% improvement in NDCG.",
      "Personalization reduces cognitive load for users, allowing them to make quicker decisions without scrolling through numerous options."
    ],
    "summary": "Gojek's GoFood personalizes search results based on user preferences and past order history to enhance the food ordering experience. The system uses a learning to rank approach, where relevance scores for restaurants are calculated based on user interactions such as clicks and orders. By implementing a pairwise ranking model, Gojek improved search to ordering conversions by 20% and achieved a 23% improvement in NDCG. Personalization reduces cognitive load for users, allowing them to make quicker decisions without scrolling through numerous options.",
    "infraDetails": [
      "Data stores for user preferences and order history",
      "Monitoring tools for tracking search to order conversions",
      "Feature store for managing personalization features"
    ],
    "systemComponents": [
      {
        "name": "Search Engine",
        "responsibility": "Delivers personalized restaurant search results based on user preferences."
      },
      {
        "name": "Learning to Rank Model",
        "responsibility": "Predicts relevance scores for restaurants using user interaction data."
      },
      {
        "name": "AB Testing Framework",
        "responsibility": "Evaluates the effectiveness of the personalization model against control groups."
      },
      {
        "name": "Data Store",
        "responsibility": "Stores user preferences, order history, and restaurant statistics."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks performance metrics such as search to order conversion rates."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.gojek.io/blog/the-secret-sauce-behind-search-personalisation",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 285,
    "company": "Instacart",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Spot lost demand",
    "title": "Modeling the unseen",
    "url": "https://tech.instacart.com/modeling-the-unseen-6a51c9a02430",
    "year": 2019,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for customer interaction and conversion data",
      "Batch processing systems for historical data analysis",
      "Real-time stream processing for monitoring shopper availability",
      "Feature stores for managing features used in modeling",
      "Model serving infrastructure for deploying estimation models",
      "Monitoring systems for tracking model performance and validation"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Instacart faces challenges in measuring lost demand due to fluctuating shopper availability and customer fulfillment options.",
      "The company has developed models to estimate lost demand by analyzing customer conversion probabilities based on fulfillment option availability.",
      "Two distinct models are built for pre-checkout and checkout stages to better capture customer intent and improve accuracy.",
      "Validation of these models is done through offline metrics like AUC and online A/B testing to ensure reliability in estimating lost demand."
    ],
    "summary": "Instacart faces challenges in measuring lost demand due to fluctuating shopper availability and customer fulfillment options. The company has developed models to estimate lost demand by analyzing customer conversion probabilities based on fulfillment option availability. Two distinct models are built for pre-checkout and checkout stages to better capture customer intent and improve accuracy. Validation of these models is done through offline metrics like AUC and online A/B testing to ensure reliability in estimating lost demand.",
    "infraDetails": [
      "Data stores for customer interaction and conversion data",
      "Batch processing systems for historical data analysis",
      "Real-time stream processing for monitoring shopper availability",
      "Feature stores for managing features used in modeling",
      "Model serving infrastructure for deploying estimation models",
      "Monitoring systems for tracking model performance and validation"
    ],
    "systemComponents": [
      {
        "name": "Conversion Probability Model",
        "responsibility": "Estimates customer conversion based on fulfillment option availability."
      },
      {
        "name": "Pre-checkout Model",
        "responsibility": "Analyzes customer behavior before checkout to identify potential lost demand."
      },
      {
        "name": "Checkout Model",
        "responsibility": "Focuses on customer behavior during checkout to refine demand estimates."
      },
      {
        "name": "Validation Framework",
        "responsibility": "Ensures model accuracy through offline and online validation methods."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/modeling-the-unseen-6a51c9a02430",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 286,
    "company": "Apple",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Identify text language",
    "title": "Language Identification from Very Short Strings",
    "url": "https://machinelearning.apple.com/research/language-identification-from-very-short-strings",
    "year": 2019,
    "category": "nlp_generation",
    "categoryLabel": "NLP and generation",
    "components": [
      "Database of documents for training"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Apple's language identification (LID) system improves accuracy for very short strings using bi-directional LSTM neural networks.",
      "The new approach reduces error rates by 15% to 60% and model sizes by 40% to 80% compared to previous methods.",
      "This system enhances user experiences in applications like QuickType keyboards and Smart Responses by providing more accurate language identification.",
      "The bi-LSTM architecture allows for effective handling of character-level sequence labeling, crucial for short input strings.",
      "The model maintains a smaller memory footprint and scales efficiently with additional training data."
    ],
    "summary": "Apple's language identification (LID) system improves accuracy for very short strings using bi-directional LSTM neural networks. The new approach reduces error rates by 15% to 60% and model sizes by 40% to 80% compared to previous methods. This system enhances user experiences in applications like QuickType keyboards and Smart Responses by providing more accurate language identification. The bi-LSTM architecture allows for effective handling of character-level sequence labeling, crucial for short input strings. The model maintains a smaller memory footprint and scales efficiently with additional training data.",
    "infraDetails": [
      "Database of documents for training"
    ],
    "systemComponents": [
      {
        "name": "Language Identifier",
        "responsibility": "Identifies the language of input text based on short character strings."
      },
      {
        "name": "Bi-LSTM Model",
        "responsibility": "Processes character sequences to classify languages using a recurrent neural network architecture."
      },
      {
        "name": "Training Database",
        "responsibility": "Houses representative documents for various languages to train the LID model."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://machinelearning.apple.com/research/language-identification-from-very-short-strings",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 287,
    "company": "Stitch Fix",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Extract information from customer notes",
    "title": "Give Me Jeans not Shoes: How BERT Helps Us Deliver What Clients Want",
    "url": "https://multithreaded.stitchfix.com/blog/2019/07/15/give-me-jeans/",
    "year": 2019,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Feature extraction systems",
      "Bidirectional LSTM for feature vector generation"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Stitch Fix utilizes BERT, a state-of-the-art NLP model, to extract meaningful information from customer notes, known as Fix Notes.",
      "The model helps stylists better understand client preferences and requests, enhancing the clothing selection process.",
      "BERT's attention mechanisms allow for dynamic word representations that capture contextual relationships, improving the accuracy of item recommendations.",
      "The integration of BERT features into the styling algorithm enables a more nuanced understanding of client requests, although human stylists still play a crucial role in final selections."
    ],
    "summary": "Stitch Fix utilizes BERT, a state-of-the-art NLP model, to extract meaningful information from customer notes, known as Fix Notes. The model helps stylists better understand client preferences and requests, enhancing the clothing selection process. BERT's attention mechanisms allow for dynamic word representations that capture contextual relationships, improving the accuracy of item recommendations. The integration of BERT features into the styling algorithm enables a more nuanced understanding of client requests, although human stylists still play a crucial role in final selections.",
    "infraDetails": [
      "Feature extraction systems",
      "Bidirectional LSTM for feature vector generation"
    ],
    "systemComponents": [
      {
        "name": "BERT Model",
        "responsibility": "Extracts contextual embeddings from Fix Notes to understand client requests."
      },
      {
        "name": "Styling Algorithm",
        "responsibility": "Integrates various features, including BERT outputs, to recommend clothing items."
      },
      {
        "name": "Bidirectional LSTM",
        "responsibility": "Processes the final contextual embeddings to generate a condensed feature vector."
      },
      {
        "name": "SoftMax Layer",
        "responsibility": "Predicts the probability of items in the inventory based on the feature vector."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://multithreaded.stitchfix.com/blog/2019/07/15/give-me-jeans/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 288,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Detect errors in maps",
    "title": "How Lyft Creates Hyper-Accurate Maps from Open-Source Maps and Real-Time Data",
    "url": "https://eng.lyft.com/how-lyft-creates-hyper-accurate-maps-from-open-source-maps-and-real-time-data-8dcf9abdd46a",
    "year": 2019,
    "category": "classification_tagging",
    "categoryLabel": "Classification and tagging",
    "components": [],
    "sourceError": "HTTP 410",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": false,
    "summarySource": "missing"
  },
  {
    "id": 289,
    "company": "King",
    "industry": "Gaming",
    "industries": [
      "Gaming"
    ],
    "description": "Automate playtesting pipeline",
    "title": "Human-Like Playtesting with Deep Learning",
    "url": "https://medium.com/techking/human-like-playtesting-with-deep-learning-92adafffe921",
    "year": 2019,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/techking/human-like-playtesting-with-deep-learning-92adafffe921",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 290,
    "company": "Gojek",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Analyse the relevance of search results",
    "title": "Is This What You Were Looking For?",
    "url": "https://www.gojek.io/blog/is-this-what-you-were-looking-for",
    "year": 2019,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Elastic Search for search result personalization",
      "Machine learning models for re-ranking search results"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Gojek's GoFood platform processes over 1.2 million daily orders, making search relevance crucial for user satisfaction.",
      "The company uses normalized Discounted Cumulative Gain (nDCG) as a key metric to measure and improve search result relevance.",
      "Higher relevance in search results is hypothesized to lead to better conversion rates and increased customer satisfaction.",
      "The system tracks user actions such as clicks and orders to calculate nDCG and refine search result rankings.",
      "Gojek aims to personalize search results based on various contextual parameters to enhance user experience."
    ],
    "summary": "Gojek's GoFood platform processes over 1.2 million daily orders, making search relevance crucial for user satisfaction. The company uses normalized Discounted Cumulative Gain (nDCG) as a key metric to measure and improve search result relevance. Higher relevance in search results is hypothesized to lead to better conversion rates and increased customer satisfaction. The system tracks user actions such as clicks and orders to calculate nDCG and refine search result rankings. Gojek aims to personalize search results based on various contextual parameters to enhance user experience.",
    "infraDetails": [
      "Elastic Search for search result personalization",
      "Machine learning models for re-ranking search results"
    ],
    "systemComponents": [
      {
        "name": "Search Engine",
        "responsibility": "Handles user search queries and retrieves relevant results."
      },
      {
        "name": "Telemetry System",
        "responsibility": "Tracks user interactions such as clicks and orders to inform relevance metrics."
      },
      {
        "name": "Machine Learning Models",
        "responsibility": "Re-ranks search results based on user preferences and contextual factors."
      },
      {
        "name": "Data Aggregation Module",
        "responsibility": "Calculates nDCG scores to evaluate search result effectiveness."
      },
      {
        "name": "User Preference Database",
        "responsibility": "Stores user preferences and historical data to personalize search results."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.gojek.io/blog/is-this-what-you-were-looking-for",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 291,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Build a marketing automation platform",
    "title": "Building Lyft's Marketing Automation Platform",
    "url": "https://eng.lyft.com/lyft-marketing-automation-b43b7b7537cc",
    "year": 2019,
    "category": "marketing_ads",
    "categoryLabel": "Marketing and ads",
    "components": [
      "Airflow",
      "Orchestration system (Symphony)",
      "Monitoring and logging infrastructure"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft's marketing automation platform, Symphony, aims to enhance user acquisition efficiency by automating routine marketing decisions.",
      "The platform leverages machine learning to predict user lifetime value (LTV) and allocate marketing budgets across various channels.",
      "Key components of Symphony include an LTV forecaster, budget allocator, and bidders, which work together to optimize ad campaigns.",
      "The system allows marketers to focus on innovation and experimentation rather than operational tasks, ultimately improving return on investment.",
      "Continuous learning and human feedback are essential for the success of the automation system, ensuring high-quality model outputs."
    ],
    "summary": "Lyft's marketing automation platform, Symphony, aims to enhance user acquisition efficiency by automating routine marketing decisions. The platform leverages machine learning to predict user lifetime value (LTV) and allocate marketing budgets across various channels. Key components of Symphony include an LTV forecaster, budget allocator, and bidders, which work together to optimize ad campaigns. The system allows marketers to focus on innovation and experimentation rather than operational tasks, ultimately improving return on investment. Continuous learning and human feedback are essential for the success of the automation system, ensuring high-quality model outputs.",
    "infraDetails": [
      "Airflow",
      "Orchestration system (Symphony)",
      "Monitoring and logging infrastructure"
    ],
    "systemComponents": [
      {
        "name": "Lifetime Value (LTV) Forecaster",
        "responsibility": "Measures the efficiency of acquisition channels based on user value predictions."
      },
      {
        "name": "Budget Allocator",
        "responsibility": "Collects marketing performance data and allocates budgets using probabilistic models."
      },
      {
        "name": "Bidders",
        "responsibility": "Deploys budget allocations to various channels and manages ad serving strategies."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/lyft-marketing-automation-b43b7b7537cc",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 292,
    "company": "Wayfair",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Model uplift",
    "title": "Modeling Uplift Directly: Uplift Decision Tree with KL Divergence and Euclidean Distance as Splitting Criteria",
    "url": "https://www.aboutwayfair.com/tech-innovation/modeling-uplift-directly-uplift-decision-tree-with-kl-divergence-and-euclidean-distance-as-splitting-criteria",
    "year": 2019,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Wayfair utilizes uplift models to predict the incremental effect of treatments on individual outcomes, particularly for display ad targeting.",
      "The uplift decision tree approach, which directly optimizes for uplift, has been identified as the most effective method through extensive backtesting and A/B testing.",
      "This model employs Kullback-Leibler Divergence and squared Euclidean Distance as splitting criteria to maximize the divergence between treatment and control group distributions."
    ],
    "summary": "Wayfair utilizes uplift models to predict the incremental effect of treatments on individual outcomes, particularly for display ad targeting. The uplift decision tree approach, which directly optimizes for uplift, has been identified as the most effective method through extensive backtesting and A/B testing. This model employs Kullback-Leibler Divergence and squared Euclidean Distance as splitting criteria to maximize the divergence between treatment and control group distributions.",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://www.aboutwayfair.com/tech-innovation/modeling-uplift-directly-uplift-decision-tree-with-kl-divergence-and-euclidean-distance-as-splitting-criteria",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 293,
    "company": "Gojek",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Accurately forecast demand",
    "title": "Under the Hood of Gojek's Automated Forecasting Tool",
    "url": "https://www.gojek.io/blog/under-the-hood-of-gojeks-automated-forecasting-tool",
    "year": 2019,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Batch processing for model training and evaluation",
      "Feature store for managing and serving features used in forecasting",
      "Model serving infrastructure for deploying the forecasting models",
      "Monitoring systems to track model performance and accuracy"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Gojek developed GO-FORECAST, an automated forecasting tool that democratizes access to reliable demand predictions across teams.",
      "The tool utilizes the XGBoost algorithm and incorporates exogenous variables, outperforming traditional methods like ARIMA and ETS in benchmarking tests.",
      "GO-FORECAST features time-series cross-validation to ensure accurate model tuning while respecting temporal data structures.",
      "The tool allows users to create multiple related models simultaneously and provides insights into feature importance and model performance."
    ],
    "summary": "Gojek developed GO-FORECAST, an automated forecasting tool that democratizes access to reliable demand predictions across teams. The tool utilizes the XGBoost algorithm and incorporates exogenous variables, outperforming traditional methods like ARIMA and ETS in benchmarking tests. GO-FORECAST features time-series cross-validation to ensure accurate model tuning while respecting temporal data structures. The tool allows users to create multiple related models simultaneously and provides insights into feature importance and model performance.",
    "infraDetails": [
      "Batch processing for model training and evaluation",
      "Feature store for managing and serving features used in forecasting",
      "Model serving infrastructure for deploying the forecasting models",
      "Monitoring systems to track model performance and accuracy"
    ],
    "systemComponents": [
      {
        "name": "GO-FORECAST",
        "responsibility": "Automated forecasting tool that performs the entire ML pipeline for demand predictions."
      },
      {
        "name": "XGBoost",
        "responsibility": "Main algorithm used for generating forecasts, capable of handling exogenous variables."
      },
      {
        "name": "Time-Series Cross-Validation",
        "responsibility": "Methodology used for tuning models while respecting the time structure of data."
      },
      {
        "name": "Feature Importance Ranking",
        "responsibility": "Feature that ranks variables based on their impact on the forecasting model."
      },
      {
        "name": "Scenario Prediction",
        "responsibility": "Functionality that allows users to simulate various future scenarios based on different input variables."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://www.gojek.io/blog/under-the-hood-of-gojeks-automated-forecasting-tool",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 294,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict rides and driver hours",
    "title": "Making cohort-based long-term forecasts at Lyft",
    "url": "https://eng.lyft.com/making-long-term-forecasts-at-lyft-fac475b3ba52",
    "year": 2019,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data stores for user activity and cohort information",
      "Batch processing systems for cohort data analysis",
      "Feature stores for storing and retrieving cohort features",
      "Model serving infrastructure for deploying forecasting models",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft utilizes a cohort-based forecasting model to predict rides and driver hours, focusing on user behavior over time.",
      "Cohorts are defined by users who complete their first ride or driving hour in a specific region during a specific week, allowing for tailored predictions based on user characteristics.",
      "The model incorporates churn and resurrection rates to estimate active users and rides over time, adapting to the unique behaviors of different cohorts.",
      "A Spline type model is employed to better capture the retention curves of cohorts, addressing the heterogeneity in user behavior during the initial weeks of app usage."
    ],
    "summary": "Lyft utilizes a cohort-based forecasting model to predict rides and driver hours, focusing on user behavior over time. Cohorts are defined by users who complete their first ride or driving hour in a specific region during a specific week, allowing for tailored predictions based on user characteristics. The model incorporates churn and resurrection rates to estimate active users and rides over time, adapting to the unique behaviors of different cohorts. A Spline type model is employed to better capture the retention curves of cohorts, addressing the heterogeneity in user behavior during the initial weeks of app usage.",
    "infraDetails": [
      "Data stores for user activity and cohort information",
      "Batch processing systems for cohort data analysis",
      "Feature stores for storing and retrieving cohort features",
      "Model serving infrastructure for deploying forecasting models",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "Cohort Model",
        "responsibility": "Forecasts rides and driver hours based on user cohorts."
      },
      {
        "name": "Retention Curve Estimator",
        "responsibility": "Estimates user retention and churn rates over time."
      },
      {
        "name": "Spline Model",
        "responsibility": "Models retention curves using a Spline approach to capture user behavior."
      },
      {
        "name": "Data Processing Pipeline",
        "responsibility": "Handles the ingestion and processing of user activity data."
      },
      {
        "name": "Monitoring Dashboard",
        "responsibility": "Tracks the performance of forecasting models and user engagement metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/making-long-term-forecasts-at-lyft-fac475b3ba52",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 295,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Predict fraudulent activity",
    "title": "Fingerprinting fraudulent behavior",
    "url": "https://eng.lyft.com/fingerprinting-fraudulent-behavior-6663d0264fad",
    "year": 2018,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Model serving infrastructure",
      "Event stream processing"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft's fraud detection system has evolved from traditional feature engineering to a more model-centric approach using modern machine learning techniques.",
      "The system identifies fraudulent behavior through 'behavior fingerprints' that reveal patterns in user activity, such as high cancellation rates and driver contact.",
      "Neural networks are employed to capture complex sequential data from user activity logs, allowing for more robust detection of fraud patterns.",
      "The transition to gradient-boosted decision trees (GBDT) and neural networks has improved the model's ability to handle diverse and rich data sources.",
      "Lyft's approach emphasizes the importance of developing features that remain effective against adaptive fraud tactics."
    ],
    "summary": "Lyft's fraud detection system has evolved from traditional feature engineering to a more model-centric approach using modern machine learning techniques. The system identifies fraudulent behavior through 'behavior fingerprints' that reveal patterns in user activity, such as high cancellation rates and driver contact. Neural networks are employed to capture complex sequential data from user activity logs, allowing for more robust detection of fraud patterns. The transition to gradient-boosted decision trees (GBDT) and neural networks has improved the model's ability to handle diverse and rich data sources. Lyft's approach emphasizes the importance of developing features that remain effective against adaptive fraud tactics.",
    "infraDetails": [
      "Model serving infrastructure",
      "Event stream processing"
    ],
    "systemComponents": [
      {
        "name": "Fraud Detection Model",
        "responsibility": "Identifies fraudulent user behavior using machine learning techniques."
      },
      {
        "name": "Feature Engineering System",
        "responsibility": "Generates and refines features from user activity data to improve model accuracy."
      },
      {
        "name": "Data Ingestion Pipeline",
        "responsibility": "Collects and processes user activity logs and other relevant data sources for analysis."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/fingerprinting-fraudulent-behavior-6663d0264fad",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 296,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Improve streaming quality",
    "title": "Using Machine Learning to Improve Streaming Quality at Netflix",
    "url": "https://netflixtechblog.com/using-machine-learning-to-improve-streaming-quality-at-netflix-9651263ef09f",
    "year": 2018,
    "category": "anomaly_ops",
    "categoryLabel": "Anomaly and operations",
    "components": [
      "Data stores for user interaction and streaming metrics",
      "Real-time monitoring systems for network performance",
      "Batch processing systems for historical data analysis",
      "Feature stores for managing and serving features used in machine learning models",
      "Model serving infrastructure for deploying adaptive streaming algorithms"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Netflix employs machine learning to enhance streaming quality by addressing technical challenges related to diverse network and device conditions.",
      "The system adapts video quality during playback based on real-time network performance and user experience metrics.",
      "Predictive caching is utilized to pre-load content based on user behavior, reducing wait times for video playback.",
      "Device anomaly detection models help identify and address issues across a wide range of devices, improving overall user experience."
    ],
    "summary": "Netflix employs machine learning to enhance streaming quality by addressing technical challenges related to diverse network and device conditions. The system adapts video quality during playback based on real-time network performance and user experience metrics. Predictive caching is utilized to pre-load content based on user behavior, reducing wait times for video playback. Device anomaly detection models help identify and address issues across a wide range of devices, improving overall user experience.",
    "infraDetails": [
      "Data stores for user interaction and streaming metrics",
      "Real-time monitoring systems for network performance",
      "Batch processing systems for historical data analysis",
      "Feature stores for managing and serving features used in machine learning models",
      "Model serving infrastructure for deploying adaptive streaming algorithms"
    ],
    "systemComponents": [
      {
        "name": "Network Quality Predictor",
        "responsibility": "Characterizes and predicts network quality to optimize video streaming."
      },
      {
        "name": "Adaptive Streaming Algorithm",
        "responsibility": "Adjusts video quality in real-time based on network and device conditions."
      },
      {
        "name": "Predictive Caching Model",
        "responsibility": "Caches content based on predicted user behavior to enhance playback speed."
      },
      {
        "name": "Device Reliability Model",
        "responsibility": "Detects and prioritizes device-related issues to improve user experience."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://netflixtechblog.com/using-machine-learning-to-improve-streaming-quality-at-netflix-9651263ef09f",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 297,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Identify user fraud",
    "title": "From shallow to deep learning in fraud",
    "url": "https://eng.lyft.com/from-shallow-to-deep-learning-in-fraud-9dafcbcef743?gi=6e6a315e3f92",
    "year": 2018,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Feature engineering framework",
      "Model serving infrastructure"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "The transition from simple logistic regression to more complex models like gradient-boosted decision trees (GBDT) was driven by the need to capture intricate feature interactions in fraud detection.",
      "The team faced challenges in productionizing GBDTs due to their complexity and the need for reliable serialization methods, leading to the development of a custom library for model versioning.",
      "As fraudsters evolved, the team recognized the limitations of traditional models and began incorporating deep learning techniques to handle more complex data signals.",
      "A collaborative approach between engineering and research science was essential to improve the ML infrastructure and streamline the prototype-to-production process."
    ],
    "summary": "The transition from simple logistic regression to more complex models like gradient-boosted decision trees (GBDT) was driven by the need to capture intricate feature interactions in fraud detection. The team faced challenges in productionizing GBDTs due to their complexity and the need for reliable serialization methods, leading to the development of a custom library for model versioning. As fraudsters evolved, the team recognized the limitations of traditional models and began incorporating deep learning techniques to handle more complex data signals. A collaborative approach between engineering and research science was essential to improve the ML infrastructure and streamline the prototype-to-production process.",
    "infraDetails": [
      "Feature engineering framework",
      "Model serving infrastructure"
    ],
    "systemComponents": [
      {
        "name": "Fraud Decision Service",
        "responsibility": "Handles the initial fraud detection logic and model predictions."
      },
      {
        "name": "Feature Serving Service",
        "responsibility": "Provides features to models in production, ensuring consistency and availability."
      },
      {
        "name": "Model Execution Service",
        "responsibility": "Executes models asynchronously to improve performance and handle complex features."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/from-shallow-to-deep-learning-in-fraud-9dafcbcef743?gi=6e6a315e3f92",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 298,
    "company": "Instacart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Predict grocery item availability",
    "title": "Predicting the real-time availability of 200 million grocery items",
    "url": "https://tech.instacart.com/predicting-real-time-availability-of-200-million-grocery-items-in-us-canada-stores-61f43a16eafe",
    "year": 2018,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Data warehouse (Snowflake) for feature engineering",
      "Batch processing system for scoring every 60 minutes",
      "Caching mechanism for infrequently changing features"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Instacart developed a machine learning model to predict the real-time availability of 200 million grocery items, leveraging data from over 100,000 shoppers across 20,000 stores.",
      "The model addresses the challenges of item availability and find-ability, using historical data to predict whether an item will be found in-store.",
      "Feature engineering plays a crucial role, with item-level, time-based, and categorical features being utilized to enhance prediction accuracy.",
      "The scoring architecture processes tens of terabytes of data every hour, allowing for efficient real-time predictions and improved customer experience."
    ],
    "summary": "Instacart developed a machine learning model to predict the real-time availability of 200 million grocery items, leveraging data from over 100,000 shoppers across 20,000 stores. The model addresses the challenges of item availability and find-ability, using historical data to predict whether an item will be found in-store. Feature engineering plays a crucial role, with item-level, time-based, and categorical features being utilized to enhance prediction accuracy. The scoring architecture processes tens of terabytes of data every hour, allowing for efficient real-time predictions and improved customer experience.",
    "infraDetails": [
      "Data warehouse (Snowflake) for feature engineering",
      "Batch processing system for scoring every 60 minutes",
      "Caching mechanism for infrequently changing features"
    ],
    "systemComponents": [
      {
        "name": "Item Availability Model",
        "responsibility": "Predicts the availability of grocery items based on historical data and features."
      },
      {
        "name": "Feature Engineering Pipeline",
        "responsibility": "Processes and creates features from raw data to be used in the model."
      },
      {
        "name": "Scoring Architecture",
        "responsibility": "Scores over 200 million items every hour, optimizing resource usage and processing time."
      },
      {
        "name": "Data Storage (Postgres)",
        "responsibility": "Stores the prediction scores for further use in the application."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/predicting-real-time-availability-of-200-million-grocery-items-in-us-canada-stores-61f43a16eafe",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 299,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Personalize marketing offers",
    "title": "Empowering personalized marketing with machine learning",
    "url": "https://eng.lyft.com/empowering-personalized-marketing-with-machine-learning-fd36e6bdeca6",
    "year": 2018,
    "category": "recommendation_ranking",
    "categoryLabel": "Recommendation and ranking",
    "components": [
      "Data stores for storing passenger profiles and marketing offers.",
      "Batch processing systems for analyzing historical data and training models.",
      "Feature stores for managing and serving features used in machine learning models.",
      "Model serving infrastructure for deploying predictive models in real-time.",
      "Monitoring systems to track model performance and detect drifts in user behavior."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft utilizes machine learning to personalize marketing offers, enhancing customer engagement and retention.",
      "The process involves defining business questions, available resources, and key metrics to optimize marketing strategies.",
      "Machine learning models predict incremental rides and costs associated with different marketing offers, allowing for data-driven decision-making.",
      "The system accounts for uncertainties in human behavior and aims to minimize variance in outcomes while adhering to budget constraints.",
      "Continuous learning and adaptation are crucial, as user behaviors and market conditions can change over time."
    ],
    "summary": "Lyft utilizes machine learning to personalize marketing offers, enhancing customer engagement and retention. The process involves defining business questions, available resources, and key metrics to optimize marketing strategies. Machine learning models predict incremental rides and costs associated with different marketing offers, allowing for data-driven decision-making. The system accounts for uncertainties in human behavior and aims to minimize variance in outcomes while adhering to budget constraints. Continuous learning and adaptation are crucial, as user behaviors and market conditions can change over time.",
    "infraDetails": [
      "Data stores for storing passenger profiles and marketing offers.",
      "Batch processing systems for analyzing historical data and training models.",
      "Feature stores for managing and serving features used in machine learning models.",
      "Model serving infrastructure for deploying predictive models in real-time.",
      "Monitoring systems to track model performance and detect drifts in user behavior."
    ],
    "systemComponents": [
      {
        "name": "Data Store",
        "responsibility": "Stores passenger profiles and marketing offer inventories."
      },
      {
        "name": "Batch Processing System",
        "responsibility": "Analyzes historical data and trains machine learning models."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves features for machine learning models."
      },
      {
        "name": "Model Serving Infrastructure",
        "responsibility": "Deploys predictive models for real-time decision-making."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks model performance and user behavior changes."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/empowering-personalized-marketing-with-machine-learning-fd36e6bdeca6",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 300,
    "company": "Instacart",
    "industry": "E-commerce and retail",
    "industries": [
      "E-commerce and retail"
    ],
    "description": "Optimize food delivery logistics",
    "title": "Space, Time and Groceries",
    "url": "https://tech.instacart.com/space-time-and-groceries-a315925acf3a",
    "year": 2017,
    "category": "optimization_pricing",
    "categoryLabel": "Optimization and pricing",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [
      "Instacart faces the challenge of optimizing grocery delivery logistics to ensure timely and accurate deliveries.",
      "The logistics problem involves solving a complex Vehicle Routing Problem with Time Windows (VRPTW), which is further complicated by various shopper capabilities and real-time uncertainties.",
      "Instacart has implemented machine learning and novel algorithms to improve delivery efficiency, reducing delivery times significantly.",
      "The system relies on continuous GPS data collection to optimize routing and assignment of shoppers, which is visualized using Datashader for better operational insights."
    ],
    "summary": "Instacart faces the challenge of optimizing grocery delivery logistics to ensure timely and accurate deliveries. The logistics problem involves solving a complex Vehicle Routing Problem with Time Windows (VRPTW), which is further complicated by various shopper capabilities and real-time uncertainties. Instacart has implemented machine learning and novel algorithms to improve delivery efficiency, reducing delivery times significantly. The system relies on continuous GPS data collection to optimize routing and assignment of shoppers, which is visualized using Datashader for better operational insights.",
    "infraDetails": [],
    "systemComponents": [
      {
        "name": "Fulfillment Engine",
        "responsibility": "Determines which orders each shopper should fulfill based on urgency and efficiency."
      },
      {
        "name": "Demand Forecasting System",
        "responsibility": "Predicts future demand for grocery deliveries to optimize logistics."
      },
      {
        "name": "Capacity Management System",
        "responsibility": "Manages the availability and capabilities of shoppers to fulfill orders."
      },
      {
        "name": "Pricing and Staffing Planning System",
        "responsibility": "Plans staffing levels and pricing strategies based on demand and capacity."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://tech.instacart.com/space-time-and-groceries-a315925acf3a",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 301,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "Predict Value of Homes",
    "title": "Using Machine Learning to Predict Value of Homes On Airbnb",
    "url": "https://medium.com/airbnb-engineering/using-machine-learning-to-predict-value-of-homes-on-airbnb-9272d3d4739d",
    "year": 2017,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Feature repository (Zipline)",
      "Airflow for orchestration"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Airbnb has developed a machine learning infrastructure that significantly reduces the cost of deploying new models to production.",
      "The infrastructure includes a feature repository called Zipline, which allows data scientists to use high-quality, reusable features for model training.",
      "AutoML tools are incorporated into the workflow to expedite model selection and performance benchmarking.",
      "A framework named ML Automator translates Jupyter notebooks into Airflow pipelines, simplifying the productionization of machine learning models."
    ],
    "summary": "Airbnb has developed a machine learning infrastructure that significantly reduces the cost of deploying new models to production. The infrastructure includes a feature repository called Zipline, which allows data scientists to use high-quality, reusable features for model training. AutoML tools are incorporated into the workflow to expedite model selection and performance benchmarking. A framework named ML Automator translates Jupyter notebooks into Airflow pipelines, simplifying the productionization of machine learning models.",
    "infraDetails": [
      "Feature repository (Zipline)",
      "Airflow for orchestration"
    ],
    "systemComponents": [
      {
        "name": "Zipline",
        "responsibility": "Provides a repository of high-quality, reusable features for model training."
      },
      {
        "name": "ML Automator",
        "responsibility": "Translates Jupyter notebooks into Airflow pipelines for model productionization."
      },
      {
        "name": "Airflow",
        "responsibility": "Orchestrates machine learning workflows and manages scheduling of tasks."
      },
      {
        "name": "AutoML tools",
        "responsibility": "Facilitates model selection and performance benchmarking."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://medium.com/airbnb-engineering/using-machine-learning-to-predict-value-of-homes-on-airbnb-9272d3d4739d",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 302,
    "company": "Netflix",
    "industry": "Media and streaming",
    "industries": [
      "Media and streaming"
    ],
    "description": "Improve Streamning Quality",
    "title": "Using Machine Learning to Improve Streaming Quality at Netflix",
    "url": "https://medium.com/netflix-techblog/using-machine-learning-to-improve-streaming-quality-at-netflix-9651263ef09f",
    "year": 2018,
    "category": "anomaly_ops",
    "categoryLabel": "Anomaly and operations",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/netflix-techblog/using-machine-learning-to-improve-streaming-quality-at-netflix-9651263ef09f",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 303,
    "company": "Booking.com",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "150 Successful Machine Learning Models",
    "title": "150 Successful Machine Learning Models: 6 Lessons Learned at Booking.com",
    "url": "https://blog.acolyer.org/2019/10/07/150-successful-machine-learning-models/",
    "year": 2019,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Distributed model serving infrastructure to minimize latency.",
      "Response Distribution Analysis for monitoring model quality."
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Booking.com has successfully integrated around 150 machine learning models into their product stack, delivering significant business value.",
      "Key lessons learned include the importance of distinguishing model performance from business performance and the necessity of clear problem definitions.",
      "Early feedback on model quality and minimizing prediction serving latency are critical for maintaining high conversion rates.",
      "Randomized controlled trials are essential for assessing the business impact of machine learning models."
    ],
    "summary": "Booking.com has successfully integrated around 150 machine learning models into their product stack, delivering significant business value. Key lessons learned include the importance of distinguishing model performance from business performance and the necessity of clear problem definitions. Early feedback on model quality and minimizing prediction serving latency are critical for maintaining high conversion rates. Randomized controlled trials are essential for assessing the business impact of machine learning models.",
    "infraDetails": [
      "Distributed model serving infrastructure to minimize latency.",
      "Response Distribution Analysis for monitoring model quality."
    ],
    "systemComponents": [
      {
        "name": "Traveller Preferences Models",
        "responsibility": "Make predictions about user preferences in a semantic layer."
      },
      {
        "name": "Item Space Navigation Models",
        "responsibility": "Track user browsing history to inform recommendations."
      },
      {
        "name": "User Interface Optimisation Models",
        "responsibility": "Optimize UI elements based on user context and preferences."
      },
      {
        "name": "Content Curation Models",
        "responsibility": "Curate and display relevant human-generated content such as reviews."
      },
      {
        "name": "Content Augmentation Models",
        "responsibility": "Compute additional information about trip options and pricing trends."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://blog.acolyer.org/2019/10/07/150-successful-machine-learning-models/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 304,
    "company": "Chicisimo",
    "industry": "Fashion and retail",
    "industries": [
      "Fashion and retail"
    ],
    "description": "Grow User base using vertical ML approch",
    "title": "How we grew from 0 to 4 million women on our fashion app, with a vertical machine learning approach",
    "url": "https://medium.com/hackernoon/how-we-grew-from-0-to-4-million-women-on-our-fashion-app-with-a-vertical-machine-learning-approach-f8b7fc0a89d7",
    "year": 2019,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [],
    "sourceError": "",
    "hasComponents": false,
    "summaryPoints": [],
    "summary": "",
    "infraDetails": [],
    "systemComponents": [],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/hackernoon/how-we-grew-from-0-to-4-million-women-on-our-fashion-app-with-a-vertical-machine-learning-approach-f8b7fc0a89d7",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 305,
    "company": "Airbnb",
    "industry": "Travel,E-commerce and retail",
    "industries": [
      "Travel",
      "E-commerce and retail"
    ],
    "description": "ML Powered search ranking",
    "title": "Machine Learning-Powered Search Ranking of Airbnb Experiences",
    "url": "https://medium.com/airbnb-engineering/machine-learning-powered-search-ranking-of-airbnb-experiences-110b4b1a0789",
    "year": 2019,
    "category": "search_retrieval",
    "categoryLabel": "Search and retrieval",
    "components": [
      "Data stores for search logs and user interactions",
      "Batch processing system for offline model training and scoring",
      "Orchestration using Airflow for scheduling and managing workflows",
      "Feature engineering processes for user and experience data",
      "Model serving infrastructure for deploying ranking models",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Airbnb developed a machine learning-powered search ranking system for its Experiences marketplace, which has grown significantly since its launch.",
      "The ranking system evolved through multiple stages, starting with a simple baseline model and advancing to personalized recommendations based on user data.",
      "Key features for ranking included experience duration, price, reviews, and user interactions, with the model improving bookings by 13% in initial tests.",
      "Personalization was introduced by leveraging user booking history and click data to tailor search results to individual preferences."
    ],
    "summary": "Airbnb developed a machine learning-powered search ranking system for its Experiences marketplace, which has grown significantly since its launch. The ranking system evolved through multiple stages, starting with a simple baseline model and advancing to personalized recommendations based on user data. Key features for ranking included experience duration, price, reviews, and user interactions, with the model improving bookings by 13% in initial tests. Personalization was introduced by leveraging user booking history and click data to tailor search results to individual preferences.",
    "infraDetails": [
      "Data stores for search logs and user interactions",
      "Batch processing system for offline model training and scoring",
      "Orchestration using Airflow for scheduling and managing workflows",
      "Feature engineering processes for user and experience data",
      "Model serving infrastructure for deploying ranking models",
      "Monitoring systems for tracking model performance and user engagement"
    ],
    "systemComponents": [
      {
        "name": "Search Ranking Model",
        "responsibility": "Ranks experiences based on user interactions and experience features."
      },
      {
        "name": "Data Collection Pipeline",
        "responsibility": "Collects and stores user interaction data for training the ranking model."
      },
      {
        "name": "Personalization Engine",
        "responsibility": "Generates personalized ranking features based on user booking history and click behavior."
      },
      {
        "name": "Orchestration Tool (Airflow)",
        "responsibility": "Manages the scheduling and execution of data processing and model training tasks."
      },
      {
        "name": "Monitoring System",
        "responsibility": "Tracks the performance of the ranking model and user engagement metrics."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://r.jina.ai/http://medium.com/airbnb-engineering/machine-learning-powered-search-ranking-of-airbnb-experiences-110b4b1a0789",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 306,
    "company": "Lyft",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "Shallow to deep learning in fraud",
    "title": "From shallow to deep learning in fraud",
    "url": "https://eng.lyft.com/from-shallow-to-deep-learning-in-fraud-9dafcbcef743",
    "year": 2018,
    "category": "fraud_abuse",
    "categoryLabel": "Fraud and abuse",
    "components": [
      "Feature engineering framework",
      "Model serving infrastructure"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Lyft's fraud detection system evolved from simple logistic regression models to more complex gradient-boosted decision trees (GBDT) to better capture feature interactions.",
      "The transition highlighted the need for improved infrastructure and a more efficient prototype-to-production pipeline to handle sophisticated fraud patterns.",
      "Challenges included model interpretability and the need for reliable serialization methods for deploying models in production.",
      "The team adopted TensorFlow for deep learning models to manage complex sequential inputs, while also addressing issues with package versioning and model execution.",
      "Collaboration between engineering and research science was crucial in redesigning the infrastructure and improving the overall machine learning process."
    ],
    "summary": "Lyft's fraud detection system evolved from simple logistic regression models to more complex gradient-boosted decision trees (GBDT) to better capture feature interactions. The transition highlighted the need for improved infrastructure and a more efficient prototype-to-production pipeline to handle sophisticated fraud patterns. Challenges included model interpretability and the need for reliable serialization methods for deploying models in production. The team adopted TensorFlow for deep learning models to manage complex sequential inputs, while also addressing issues with package versioning and model execution. Collaboration between engineering and research science was crucial in redesigning the infrastructure and improving the overall machine learning process.",
    "infraDetails": [
      "Feature engineering framework",
      "Model serving infrastructure"
    ],
    "systemComponents": [
      {
        "name": "Fraud Decision Service",
        "responsibility": "Handles the deployment and execution of fraud detection models."
      },
      {
        "name": "Feature Store",
        "responsibility": "Manages and serves features used in model training and inference."
      },
      {
        "name": "Model Serialization Library",
        "responsibility": "Facilitates the serialization and versioning of machine learning models for production."
      },
      {
        "name": "Asynchronous Execution Trigger Group",
        "responsibility": "Enables the execution of models in an asynchronous manner to optimize performance."
      },
      {
        "name": "Experimentation Framework",
        "responsibility": "Evaluates the impact of models and features in a structured manner."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.lyft.com/from-shallow-to-deep-learning-in-fraud-9dafcbcef743",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 307,
    "company": "Uber",
    "industry": "Delivery and mobility",
    "industries": [
      "Delivery and mobility"
    ],
    "description": "100+ Petabytes with Minute Latency",
    "title": "Uber's Big Data Platform: 100+ Petabytes with Minute Latency",
    "url": "https://eng.uber.com/uber-big-data-platform/",
    "year": 2018,
    "category": "forecasting_eta",
    "categoryLabel": "Forecasting and ETA",
    "components": [
      "Hadoop data lake",
      "Apache Spark for programmatic access"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Uber's Big Data platform has evolved to manage over 100 petabytes of data with a focus on minimizing latency for data access.",
      "The transition from traditional OLTP databases to a Hadoop-based data lake has allowed for more scalable and efficient data ingestion and processing.",
      "Key technologies like Presto, Apache Spark, and Apache Hive have been integrated to enhance data querying capabilities and flexibility for users.",
      "The introduction of a central schema service has improved data reliability and reduced the fragility of data ingestion processes."
    ],
    "summary": "Uber's Big Data platform has evolved to manage over 100 petabytes of data with a focus on minimizing latency for data access. The transition from traditional OLTP databases to a Hadoop-based data lake has allowed for more scalable and efficient data ingestion and processing. Key technologies like Presto, Apache Spark, and Apache Hive have been integrated to enhance data querying capabilities and flexibility for users. The introduction of a central schema service has improved data reliability and reduced the fragility of data ingestion processes.",
    "infraDetails": [
      "Hadoop data lake",
      "Apache Spark for programmatic access"
    ],
    "systemComponents": [
      {
        "name": "Hadoop Data Lake",
        "responsibility": "Centralized storage for raw data ingestion and processing."
      },
      {
        "name": "Presto",
        "responsibility": "Enables interactive ad hoc user queries."
      },
      {
        "name": "Apache Spark",
        "responsibility": "Facilitates programmatic access to raw data."
      },
      {
        "name": "Apache Hive",
        "responsibility": "Handles extremely large queries."
      },
      {
        "name": "Central Schema Service",
        "responsibility": "Collects, stores, and serves schemas for data consistency."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.uber.com/uber-big-data-platform/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 308,
    "company": "Dropbox",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Modern OCR with CV and DL",
    "title": "Creating a Modern OCR Pipeline Using Computer Vision and Deep Learning",
    "url": "https://blogs.dropbox.com/tech/2017/04/creating-a-modern-ocr-pipeline-using-computer-vision-and-deep-learning/",
    "year": 2017,
    "category": "computer_vision",
    "categoryLabel": "Computer vision",
    "components": [
      "Feature Store",
      "Batch processing systems"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Dropbox is leveraging modern OCR technology through computer vision and deep learning to enhance its services.",
      "The integration of real-time AI capabilities in Dropbox Dash is supported by a robust feature store.",
      "Context engineering is utilized to improve the AI's understanding of user needs and workflows."
    ],
    "summary": "Dropbox is leveraging modern OCR technology through computer vision and deep learning to enhance its services. The integration of real-time AI capabilities in Dropbox Dash is supported by a robust feature store. Context engineering is utilized to improve the AI's understanding of user needs and workflows.",
    "infraDetails": [
      "Feature Store",
      "Batch processing systems"
    ],
    "systemComponents": [
      {
        "name": "Feature Store",
        "responsibility": "Stores and manages features for real-time AI applications."
      },
      {
        "name": "Real-time AI System",
        "responsibility": "Processes data and provides AI capabilities in real-time."
      },
      {
        "name": "Batch Processing System",
        "responsibility": "Handles large volumes of data processing in batches."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://blogs.dropbox.com/tech/2017/04/creating-a-modern-ocr-pipeline-using-computer-vision-and-deep-learning/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  },
  {
    "id": 309,
    "company": "Uber",
    "industry": "Tech",
    "industries": [
      "Tech"
    ],
    "description": "Scaling ML with Michelangelo",
    "title": "Scaling Machine Learning at Uber with Michelangelo",
    "url": "https://eng.uber.com/scaling-michelangelo/",
    "year": 2019,
    "category": "generic",
    "categoryLabel": "General ML systems",
    "components": [
      "Centralized feature store",
      "Batch training system",
      "Distributed training infrastructure"
    ],
    "sourceError": "",
    "hasComponents": true,
    "summaryPoints": [
      "Uber's Michelangelo platform has evolved significantly since its inception, enabling the deployment of hundreds of machine learning models across various applications.",
      "The platform initially focused on batch training and predictions but has expanded to include features like a centralized feature store and real-time prediction services.",
      "Uber's diverse ML applications range from optimizing restaurant recommendations in Uber Eats to improving ETA accuracy for rides.",
      "The success of scaling ML at Uber is attributed not only to technology but also to effective organizational and process design."
    ],
    "summary": "Uber's Michelangelo platform has evolved significantly since its inception, enabling the deployment of hundreds of machine learning models across various applications. The platform initially focused on batch training and predictions but has expanded to include features like a centralized feature store and real-time prediction services. Uber's diverse ML applications range from optimizing restaurant recommendations in Uber Eats to improving ETA accuracy for rides. The success of scaling ML at Uber is attributed not only to technology but also to effective organizational and process design.",
    "infraDetails": [
      "Centralized feature store",
      "Batch training system",
      "Distributed training infrastructure"
    ],
    "systemComponents": [
      {
        "name": "Product Teams",
        "responsibility": "Own and deploy ML models in production, equipped with necessary skills."
      },
      {
        "name": "Specialist Teams",
        "responsibility": "Provide expertise for complex ML problems and collaborate with product teams."
      },
      {
        "name": "Research Teams",
        "responsibility": "Collaborate on applied problems and guide future research directions."
      },
      {
        "name": "ML Platform Teams",
        "responsibility": "Develop and maintain the Michelangelo platform and its components."
      }
    ],
    "sourceFetched": true,
    "sourceUrl": "https://eng.uber.com/scaling-michelangelo/",
    "summarySource": "llm",
    "summaryModel": "gpt-4o-mini"
  }
];
