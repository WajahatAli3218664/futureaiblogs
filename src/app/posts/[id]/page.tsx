"use client"
import React from 'react'
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const posts = [
    {
        id: '1',
        title: "Hunza Valley",
        description: `Hunza Valley, often called Heaven on Earth, is a mesmerizing region in northern Pakistan. Surrounded by towering peaks of the Karakoram range, it is divided into three parts: Upper, Central, and Lower Hunza, each with its unique charm. Upper Hunza boasts the iconic Passu Cones and the Khunjerab Pass, a gateway to China. Central Hunza is home to the historic Baltit and Altit Forts, showcasing centuries-old traditions. The valley's orchards bloom with apricots, cherries, and apples, adding vibrant colors to the landscape. Visitors can enjoy trekking, cultural festivals, and breathtaking vistas. Hunza's warm hospitality, delicious local cuisine, and serene environment offer an unforgettable experience.`,
        image: "/images/img1.png"
    },
    {
        id: '2',
        title: "Skardu",
        description: `Skardu, a gem in the Gilgit-Baltistan region, is famous for its surreal landscapes and towering mountains. Nestled among the Karakoram and Himalayas, it serves as a gateway to some of the world's tallest peaks, including K2. Visitors can explore Shangrila Lake, Satpara Lake, and ancient forts like Shigar Fort, blending history with scenic beauty. The town is also a base for thrilling treks to Baltoro Glacier and Deosai National Park, known as the "Land of Giants." Skardu offers a mix of adventure, culture, and tranquility, making it a must-visit for nature enthusiasts and explorers alike.`,
        image: "/images/img2.png"
    },
    {
        id: '3',
        title: "Khunjerab Pass",
        description: `Khunjerab Pass, situated at an altitude of 4,693 meters, is the highest paved international border crossing in the world. Connecting Pakistan and China, it is a key point on the historic Karakoram Highway, often called the "Eighth Wonder of the World." The pass offers unparalleled views of snow-capped peaks and expansive landscapes. It's also home to the Khunjerab National Park, where rare wildlife like snow leopards and ibex roam freely. The serene environment and strategic significance make Khunjerab Pass a highlight for adventurers and history enthusiasts exploring the northern regions.`,
        image: "/images/img3.png"
    },
    {
        id: '4',
        title: "Fairy Meadows",
        description: `Fairy Meadows, a picturesque alpine meadow, lies at the base of Nanga Parbat, the ninth-highest mountain in the world. Renowned for its lush green fields, dense pine forests, and majestic mountain views, it is a paradise for trekkers and photographers. Visitors can embark on a jeep ride and a thrilling trek to reach this serene destination. Camping under a starry sky and waking up to breathtaking sunrises are experiences that leave visitors in awe. Fairy Meadows is a blend of adventure and tranquility, perfect for those seeking nature's untouched beauty.`,
        image: "/images/img4.png"
    },
    {
        id: '5',
        title: "Yasin Valley",
        description: `Yasin Valley, nestled in the Ghizer district of Gilgit-Baltistan, is a hidden paradise surrounded by snow-capped peaks and flowing streams. Known for its traditional Wakhi culture, the valley provides an authentic glimpse into the lives of its warm and hospitable residents. Visitors can explore scenic trekking routes leading to pristine glaciers and high-altitude passes. The serene environment, combined with the region's natural splendor, makes Yasin Valley a haven for adventure seekers and those looking to escape into nature's lap.`,
        image: "/images/img5.png"
    },
    {
        id: '6',
        title: "Gilgit",
        description: `Gilgit, the capital of Gilgit-Baltistan, is a vibrant city surrounded by breathtaking mountain ranges. Situated at the confluence of the Gilgit and Hunza rivers, it serves as a gateway to the spectacular Karakoram and Himalayas. The city is rich in history, with landmarks such as the Kargah Buddha and centuries-old rock carvings. Its bustling bazaars offer local handicrafts, gemstones, and delicious regional cuisine. Gilgit's strategic location and cultural diversity make it a hub for travelers exploring northern Pakistan.`,
        image: "/images/img6.png"
    },
    {
        id: '7',
        title: "Khaplu",
        description: `Khaplu, a serene town in the Ghanche District, is often referred to as the "Valley of Kings." Famous for the historic Khaplu Palace, it showcases the architectural and cultural heritage of the region. The town is surrounded by the majestic Karakoram Range and the serene Shyok River. Visitors can explore nearby valleys, hike through stunning landscapes, and immerse themselves in the local Balti culture. Khaplu is a tranquil retreat that combines history, nature, and warm hospitality.`,
        image: "/images/img7.png"
    },
    {
        id: '8',
        title: "Naltar Valley",
        description: `Naltar Valley is a pristine alpine destination known for its dense forests, vibrant meadows, and colorful lakes. Located near Gilgit, it offers a peaceful escape into nature. The valley's famous Satrangi Lake and Blue Lake are renowned for their surreal hues, reflecting the surrounding mountains. In winter, Naltar becomes a skiing paradise, attracting enthusiasts from around the globe. Its enchanting beauty and tranquil environment make Naltar Valley a favorite destination for nature lovers and adventurers alike.`,
        image: "/images/img8.png"
    },
    {
        id: '9',
        title: "Phander Lake",
        description: `Phander Lake, nestled in the Ghizer district, is often described as "nature's masterpiece." Its turquoise waters, surrounded by lush green meadows and dramatic mountains, create a breathtakingly serene setting. The lake is a popular spot for fishing and boating, while the nearby Phander Valley offers charming villages and picturesque landscapes. Visitors are captivated by the tranquility and beauty of this hidden gem, making it a must-visit destination in northern Pakistan.`,
        image: "/images/img9.png"
    }
];



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