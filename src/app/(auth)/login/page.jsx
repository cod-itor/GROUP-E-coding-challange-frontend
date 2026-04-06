// app/login/page.jsx
import Navbar from "../../components/NavbarComponent";
import ForumCard from "../../components/ForumCard";
import ButtonComponent from "../../components/ButtonComponent";
import { MdEmail, MdLock, MdVisibility } from "react-icons/md";
import InputForm from "@/app/components/InputFormComponent";

export default function LoginPage() {
  const forumData = [
    {
      title: "NullPointerException in Spring Boot Controller",
      description: "I'm getting a NullPointerException when trying to autowire my Service layer...",
      tags: ['java', 'springboot'],
      author: "Mao Meanmean",
      isActive: false
    },
    {
      title: "Docker container not starting on Linux",
      description: "My Docker container is failing to start on my Linux machine. I've checked the logs...",
      tags: ['docker_container', 'linux'],
      author: "Mao Meanmean",
      isActive: true
    },
    {
      title: "React State not updating immediately",
      description: "I'm using useState to update a counter, but when I console.log...",
      tags: ['react_js', 'web_programming'],
      author: "Mao Meanmean",
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative flex items-center justify-center p-4 lg:p-8 overflow-hidden">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 z-0 opacity-25" 
           style={{ backgroundImage: 'radial-gradient(#004d8c 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        <div className="flex flex-col w-full max-w-lg mx-auto lg:mx-0">
          <Navbar />

          <InputForm />
        </div>

        {/* Right Section (Cards) */}
        <div className="hidden lg:flex flex-col gap-8 relative max-w-md ml-auto">
          {forumData.map((item, index) => (
            <ForumCard key={index} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}