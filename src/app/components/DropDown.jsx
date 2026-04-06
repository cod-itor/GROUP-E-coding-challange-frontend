'use client';
import React, { useState } from "react";
import FilterBubble from "./filterBubble";

const QUESTIONS_DATA = [
  {
    category: "Docker",
    askedBy: "Mao Meanmean",
    title: "Docker container not starting on Linux",
    description:
      "My Docker container is failing to start on my Linux machine. I've checked the logs, but I'm not sure what's causing the issue. Any ideas?",
    tags: ["#docker_container", "#linux"],
    answerCount: 10,
  },
  {
    category: "Java",
    askedBy: "John Smith",
    title: "How to implement generics in Java",
    description:
      "I'm trying to understand how generics work in Java and how to properly use them in my code.",
    tags: ["#java", "#generics"],
    answerCount: 15,
  },
  {
    category: "Web",
    askedBy: "Sarah Johnson",
    title: "Best practices for responsive design",
    description:
      "What are the best practices for creating responsive web designs that work on all devices?",
    tags: ["#web", "#responsive"],
    answerCount: 8,
  },
  {
    category: "Database",
    askedBy: "Mike Wilson",
    title: "SQL optimization tips",
    description: "How can I optimize my SQL queries for better performance?",
    tags: ["#database", "#sql"],
    answerCount: 12,
  },
  {
    category: "Linux",
    askedBy: "Emma Davis",
    title: "Linux file permissions explained",
    description:
      "Can someone explain Linux file permissions and how chmod works?",
    tags: ["#linux", "#permissions"],
    answerCount: 6,
  },
];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(QUESTIONS_DATA.map((q) => q.category))];

  

  return (
    
      <div className="flex gap-4 mb-6">
    
        <div className="relative inline-block w-40">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2 bg-white border border-[#73899A] rounded-lg text-[#00518E] font-semibold text-sm hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            {selectedCategory || "All Categories"}
            <span className="text-lg">▼</span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#73899A] rounded-lg shadow-lg z-10">
              
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleSelectCategory(category)}
                  className="w-full px-4 py-2 text-left text-[#00518E] font-medium text-sm hover:bg-[#E6EEF4] transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
      



        
      </div>

      
    </div>
  );
}
