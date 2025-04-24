import { RefreshCw } from "lucide-react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import EditableText from "../ui/EditableText";
import { useContentGenerator } from "../../hooks/useContentGenerator";

const HeroSection = () => {
  const { content, isGenerating, generateNewContent, updateContent } =
    useContentGenerator();

  return (
    <div className="w-screen h-screen flex items-center justify-center p-8 bg-background-primary-light dark:bg-background-primary-dark">
      <ThemeToggle />

      {/*3D container */}
      <div className="relative w-full max-w-6xl bg-background-secondary-light/70 dark:bg-background-secondary-dark/70 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/20 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* left column - text content */}
          <div className="flex-1 p-8 lg:p-16 space-y-8">
            <div className="space-y-6">
              <div className="h-[120px] sm:h-[144px] flex items-center">
                <EditableText
                  text={content.title}
                  variant="title"
                  onTextChange={(text) => updateContent({ title: text })}
                />
              </div>
              <div className="h-[56px] sm:h-[84px] flex items-center">
                <EditableText
                  text={content.subtitle}
                  variant="subtitle"
                  onTextChange={(text) => updateContent({ subtitle: text })}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" fullWidth onClick={() => {}}>
                Get Started
              </Button>
              <Button
                variant="secondary"
                fullWidth
                icon={RefreshCw}
                onClick={generateNewContent}
                isLoading={isGenerating}
              >
                Regenerate with AI
              </Button>
            </div>
          </div>

          {/* right column - image */}
          <div className="lg:w-[600px] bg-gradient-to-br from-accent-light-from/10 to-accent-light-to/10 dark:from-accent-dark-from/10 dark:to-accent-dark-to/10 overflow-hidden">
            <div className="aspect-square w-full h-full relative">
              <img
                src={content.image}
                alt="AI Generated Design"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-light-from/10 to-accent-light-to/10 dark:from-accent-dark-from/10 dark:to-accent-dark-to/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
