import React from 'react'
import ReleaseCard from '../components/ReleaseCard';
import Footer from '../components/Footer';

const moviesInCinemas = [
  {
    id: 1,
    title: "Telling Lies - A Standup Solo ",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA5IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355617-pmmxqcavds-portrait.jpg",
    language: "Aashish Solanki",
    time: "499/-",
  },
  {
    id: 2,
    title: "Bhala Manushya",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNyBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00454706-dgzljwlhae-portrait.jpg",
    language: "Naman Jain",
    time: "299/-",
  },
  {
    id: 3,
    title: "Spoiler Alert - Standup Comedy",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyOSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00457865-kepvylmuul-portrait.jpg",
    language: "Anshu Mor",
    time: "499/-",
  },
  {
    id: 4,
    title: "Married Bachelor - Family friendly show",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA1IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00375103-eehhjbghjr-portrait.jpg",
    language: "Gourav Mahna",
    time: "249/-",
  },
  {
    id: 5,
    title: "Live Standup",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAxMiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00430844-jrvuumhcde-portrait.jpg",
    language: "Akshay Srivastava",
    time: "349/-",
  },
];

const music = [
  {
    id: 1,
    title: "Red FM Unwind Papon",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00454874-neybgvncan-portrait.jpg",
    language: "Concerts",
    time: "399/-",
  },
  {
    id: 2,
    title: "Piyush Mishra's Aarambh 2.0",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00461986-xhlarzecsw-portrait.jpg",
    language: "Piyush Mishra's",
    time: "599/-",
  },
  {
    id: 3,
    title: "Rahgir: Thokron Ke Dhabe",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00352052-vqdphjjvvf-portrait.jpg",
    language: "Concerts",
    time: "499/-",
  },
  {
    id: 4,
    title: "Sunburn Festival 2025",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00457262-eeuqpcwzvq-portrait.jpg",
    language: "Concerts",
    time: "7000/-",
  },
];

const Show = () => {
  return (
    <>
    
    <div className="lg:py-20 md:py-20">
      {/* Comedy Section */}
      <div className="w-full py-5  border-gray-600">
        <h1 className="text-3xl font-semibold px-6 lg:px-30">Comedy Show</h1>
      </div>

      <div className="px-6 lg:px-30 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {moviesInCinemas.map((movie) => (
            <ReleaseCard
              key={movie.id}
              title={movie.title}
              poster={movie.posterUrl}
              language={movie.language}
              time={movie.time}
            />
          ))}
        </div>
      </div>

      {/* Music Section */}
      <div className="w-full py-5 border-gray-600">
        <h1 className="text-3xl lg:px-30 font-semibold px-6">Music Show</h1>
      </div>

      <div className="px-6 lg:px-30 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {music.map((movie) => (
            <ReleaseCard
              key={movie.id}
              title={movie.title}
              poster={movie.posterUrl}
              language={movie.language}
              time={movie.time}
            />
          ))}
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Show;
