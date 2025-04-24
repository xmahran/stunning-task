import { useState } from "react";
import { dummyContent } from "../utils/contentData";

interface GeneratedContent {
  title: string;
  subtitle: string;
  image: string;
}

export const useContentGenerator = () => {
  const [content, setContent] = useState<GeneratedContent>({
    title: dummyContent[0].title,
    subtitle: dummyContent[0].subtitle,
    image: dummyContent[0].image,
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNewContent = () => {
    setIsGenerating(true);

    // simulate AI generation delay
    setTimeout(() => {
      const nextIndex = Math.floor(Math.random() * dummyContent.length);
      setContent({
        title: dummyContent[nextIndex].title,
        subtitle: dummyContent[nextIndex].subtitle,
        image: dummyContent[nextIndex].image,
      });
      setIsGenerating(false);
    }, 1000);
  };

  const updateContent = (updates: Partial<GeneratedContent>) => {
    setContent((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return {
    content,
    isGenerating,
    generateNewContent,
    updateContent,
  };
};
