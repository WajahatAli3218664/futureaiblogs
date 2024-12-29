"use client"
import React from 'react'
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const posts = [
    {
        id: '1',
        title: "Artificial Intelligence in Healthcare",
        description:"Revolutionizing patient care through the power of artificial intelligence, AI is transforming the healthcare industry by improving early diagnosis, treatment plans, and providing personalized care for individuals. Advanced AI algorithms can process vast amounts of medical data to identify patterns, predict outcomes, and recommend the most effective treatment options. From enhancing medical imaging technology to facilitating remote patient monitoring, AI's role in healthcare is expanding, making healthcare services more efficient, accessible, and tailored to individual needs. By leveraging AI, healthcare providers can offer better patient outcomes, reduce costs, and streamline operations, all while making medical research more precise and effective.",
        image: "/images/health.jpg"
    },
    {
        id: '2',
        title: "The Rise of AI in Education",
        description: "AI is playing a significant role in the evolution of education by creating more personalized learning experiences. With AI-powered tools, students can receive tailored tutoring, feedback, and lesson plans based on their unique learning needs. AI systems can also curate smart content that adapts to the learning pace of each student, helping them grasp difficult concepts faster and more effectively. Moreover, AI is revolutionizing the administrative aspects of education by automating tasks like grading, scheduling, and resource management, allowing educators to focus more on teaching. This integration of AI is creating a more efficient, scalable, and accessible education system that meets the diverse needs of students worldwide..",
        image: "/images/educate.jpg"
    },
    {
        id: '3',
        title: "AI and Sustainable Development",
        description: "Artificial intelligence is playing a crucial role in promoting environmental sustainability by enabling smarter energy management, waste reduction, and conservation efforts. AI algorithms can optimize the operation of energy grids, balancing the supply and demand for electricity in real time, which helps reduce waste and maximize efficiency. In the area of waste management, AI can help identify recyclable materials and improve the sorting processes, contributing to less waste ending up in landfills. Furthermore, AI-driven models are being used to predict climate patterns, manage natural resources more efficiently, and design sustainable urban solutions that reduce the carbon footprint. These innovations are paving the way for a more sustainable future, where AI helps mitigate the impacts of climate change and fosters a cleaner planet.",
        image: "/images/sustain.jpg"
    },
    {
        id: '4',
        title: "AI in Autonomous Vehicles",
        description: "The development of autonomous vehicles powered by artificial intelligence is revolutionizing the way we think about transportation. Self-driving cars, equipped with AI systems, use real-time data from cameras, sensors, and radar to make decisions, navigate complex environments, and ensure passenger safety. AI allows vehicles to recognize obstacles, interpret traffic signals, and predict the behavior of pedestrians and other drivers. This technology is improving safety on the roads, reducing human error, and potentially lowering accident rates. As autonomous vehicles become more advanced, they promise to make transportation more efficient, reduce traffic congestion, and offer greater mobility to individuals who are unable to drive themselves.",
        image: "/images/vehicle.jpg"
    },
    {
        id: '5',
        title: "The Role of AI in Cybersecurity",
        description: "With the increasing frequency and complexity of cyberattacks, AI is becoming a critical tool in defending against these threats. AI systems are capable of monitoring network traffic in real time, detecting anomalies that could indicate malicious activities. By using machine learning algorithms, AI can identify patterns of behavior associated with cyberattacks, such as phishing, malware, and ransomware, allowing organizations to proactively block potential threats before they can cause damage. AI-powered cybersecurity solutions can also automate tasks such as vulnerability scanning, reducing the workload on human security professionals and allowing them to focus on more complex issues. The integration of AI into cybersecurity is a game-changer in the fight against cybercrime and data breaches.",
        image: "/images/cyber.jpg"
    },
    {
        id: '6',
        title: "AI in Financial Technology (FinTech)",
        description: "Artificial intelligence is reshaping the financial industry by providing new solutions for managing investments, detecting fraud, and optimizing customer service. In trading, AI algorithms are used to analyze vast amounts of market data to identify trends, predict price movements, and optimize trading strategies. In fraud detection, AI systems can spot irregular transactions in real-time and flag potential security risks. AI-powered chatbots are also enhancing customer service by providing instant responses to customer inquiries, handling routine transactions, and improving overall user experience. These innovations are driving greater efficiency, security, and convenience in financial services, empowering both consumers and institutions to make smarter financial decisions",
        image: "/images/finance.jpg"
    },
    {
        id: '7',
        title: "AI and the Future of Work",
        description: "The future of work is being shaped by artificial intelligence, which is driving a shift toward intelligent automation and digital transformation in the workplace. AI technologies are enabling businesses to automate routine tasks, freeing up employees to focus on higher-level strategic work. AI-powered tools like virtual assistants, predictive analytics, and automated workflows are enhancing productivity, streamlining operations, and allowing organizations to scale more efficiently. Moreover, AI is transforming the employee experience by providing personalized learning opportunities, performance feedback, and career development insights. As AI continues to evolve, it will play an even greater role in reshaping industries, creating new job opportunities, and making work more flexible, adaptable, and collaborative.",
        image: "/images/future.webp"
    },
    {
        id: '8',
        title: "AI in E-commerce",
        description: "Artificial intelligence is revolutionizing the e-commerce industry by enhancing the customer experience and optimizing business operations. AI-powered recommendation systems analyze customer behavior and preferences to provide personalized product suggestions, improving the chances of a purchase. Chatbots and virtual assistants are improving customer service by offering instant support, answering queries, and assisting with order placements. AI also plays a significant role in inventory management by predicting demand trends and optimizing stock levels, which helps businesses minimize waste and ensure product availability. Additionally, AI is being used for fraud detection, improving payment security, and creating a seamless shopping experience. As e-commerce continues to grow, AI will be at the forefront of creating more efficient, personalized, and secure online shopping environments.",
        image: "/images/ecom.jpg"
    },
    {
        id: '9',
        title: "Ethical Concerns in Artificial Intelligence",
        description: "As artificial intelligence becomes more integrated into society, ethical concerns surrounding its use have come to the forefront. AI systems, while powerful, can perpetuate biases that exist in data, leading to unfair or discriminatory outcomes. Addressing these biases is essential for ensuring that AI technologies are used responsibly and equitably. Furthermore, transparency and accountability in AI systems are critical for gaining public trust and ensuring that decisions made by AI are understandable and justifiable. There are also concerns about privacy, surveillance, and the potential for AI to be used in ways that infringe upon individual rights. As AI continues to advance, it is crucial to establish guidelines, regulations, and ethical frameworks that ensure the responsible development and deployment of these technologies, allowing AI to benefit society without compromising core values.",
        image: "/images/ethics.webp"
    },
]



const post = ({ params } : {params: {id: string}}) => {
  const {id} = params;
  const post = posts.find((p) => p.id === id);

  if(!post) {
    return (
        <div className='h-screen flex justify-center items-center'>
            <h2 className='text-3xl font-bold'>404: Post Not Found </h2>                     
        </div>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
        <p key={index} className='mt-4 text-justify'>
            {para.trim()}
        </p>
    ));
  };

  return (
    <div className='mx-w-3xl mx-auto p-5'>
        <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center animate-color-change'>
            {" "}
            {post.title}
            </h1>

            {post.image && (
                <img
                src={post.image}
                alt={post.title}
                className='w-full h-auto rounded-md mt-4'
                />
            )}

            <div className='mt-6 text-lg text-slate-700'>
                {renderParagraphs(post.description)}

            </div>

        <CommentSection postId={post.id}/>
        <AuthorCard/>
    </div>
  )

}

export default post