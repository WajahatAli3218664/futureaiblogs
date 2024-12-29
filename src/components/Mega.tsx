import React from 'react'
import BlogCard from '../components/BlogCard';
import { parse } from 'date-fns'; // Import the parse function from date-fns
import { format } from 'date-fns'; // Import the format function

const Mega = () => {
  const posts = [
    {
      id: '1',
      title: "Artificial Intelligence in Healthcare",
      description: "Revolutionizing patient care, early diagnosis, and personalized treatments through advanced AI algorithms.",
      date: "11-08-2024",
      imageUrl: "/images/health.jpg"
    },
    {
      id: '2',
      title: "The Rise of AI in Education",
      description: "Enhancing learning experiences with personalized tutoring, smart content, and efficient administrative systems.",
      date: "12-08-2024",
      imageUrl: "/images/educate.jpg"
    },
    {
      id: '3',
      title: "AI and Sustainable Development",
      description: "Driving environmental sustainability through smart energy grids, waste management, and carbon footprint reduction.",
      date: "13-08-2024",
      imageUrl: "/images/sustain.jpg"
    },
    {
      id: '4',
      title: "AI in Autonomous Vehicles",
      description: "Powering self-driving cars with real-time decision-making, precision navigation, and advanced safety protocols.",
      date: "14-08-2024",
      imageUrl: "/images/vehicle.jpg"
    },
    {
      id: '5',
      title: "The Role of AI in Cybersecurity",
      description: "Detecting and preventing cyber threats with real-time monitoring, anomaly detection, and predictive analysis.",
      date: "15-08-2024",
      imageUrl: "/images/cyber.jpg"
    },
    {
      id: '6',
      title: "AI in Financial Technology (FinTech)",
      description: "Optimizing trading strategies, fraud detection, and customer service through intelligent financial systems.",
      date: "16-08-2024",
      imageUrl: "/images/finance.jpg"
    },
    {
      id: '7',
      title: "AI and the Future of Work",
      description: "Transforming workplaces with intelligent automation, productivity tools, and virtual assistants.",
      date: "17-08-2024",
      imageUrl: "/images/future.webp"
    },
    {
      id: '8',
      title: "AI in E-commerce",
      description: "Enhancing customer experience with personalized recommendations, chatbots, and inventory management.",
      date: "18-08-2024",
      imageUrl: "/images/ecom.jpg"
    },
    {
      id: '9',
      title: "Ethical Concerns in Artificial Intelligence",
      description: "Addressing biases, transparency, and accountability in AI systems for a responsible future.",
      date: "19-08-2024",
      imageUrl: "/images/ethics.webp"
    },
  ];

  return (
    <div className='my-14 mr-4 ml-4 lg:ml-6 lg:mr-6'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
        {" "}
        Explore AI Innovations<br /> A Journey Through Cutting-Edge Technology!
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {posts.map((post, index) => {
          const formattedDate = format(parse(post.date, 'dd-MM-yyyy', new Date()), 'MMMM dd, yyyy');
          return (
            <div className='fade-in' key={post.id}>
              <div className='blog-card'>
                <BlogCard post={{ ...post, date: formattedDate }} isDarkBackground={index % 2 === 0} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Mega;
