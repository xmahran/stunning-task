import { useState, useCallback, useEffect } from "react";

interface EditableTextProps {
  text: string;
  variant: "title" | "subtitle";
  onTextChange?: (text: string) => void;
}

const EditableText = ({ text, variant, onTextChange }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(text);

  // Update local state when prop changes and not editing
  useEffect(() => {
    if (!isEditing) {
      setEditableText(text);
    }
  }, [text, isEditing]);

  const handleDoubleClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsEditing(false);
    if (editableText.trim() === "") {
      setEditableText(text);
    } else if (editableText !== text) {
      onTextChange?.(editableText);
    }
  }, [editableText, text, onTextChange]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableText(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        (e.target as HTMLInputElement).blur();
      }
    },
    []
  );

  const baseStyles = {
    title: `
      text-4xl sm:text-5xl font-bold leading-tight 
      bg-gradient-to-r from-accent-light-from to-accent-light-to dark:from-accent-dark-from dark:to-accent-dark-to bg-clip-text text-transparent 
      transition-all duration-300 w-full outline-none focus:outline-none
      relative group hover:scale-[1.02] transform-gpu min-h-[1.2em]
    `,
    subtitle: `
      text-lg sm:text-xl text-secondary-light dark:text-secondary-dark
      transition-all duration-300 w-full outline-none focus:outline-none
      relative group hover:text-primary-light dark:hover:text-primary-dark hover:scale-[1.01] transform-gpu min-h-[1.2em]
    `,
  };

  const inputStyles = {
    title: `
      bg-transparent text-4xl sm:text-5xl font-bold leading-tight w-full
      focus:outline-none focus:ring-0 border-none
      bg-gradient-to-r from-accent-light-from to-accent-light-to dark:from-accent-dark-from dark:to-accent-dark-to bg-clip-text text-transparent
    `,
    subtitle: `
      bg-transparent text-lg sm:text-xl w-full
      focus:outline-none focus:ring-0 border-none
      text-secondary-light dark:text-secondary-dark
    `,
  };

  return (
    <div
      className={variant === "title" ? baseStyles.title : baseStyles.subtitle}
    >
      {isEditing ? (
        <input
          type="text"
          value={editableText}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={
            variant === "title" ? inputStyles.title : inputStyles.subtitle
          }
          autoFocus
        />
      ) : (
        <div onDoubleClick={handleDoubleClick} className="cursor-text">
          {editableText}
        </div>
      )}

      <div
        className={`absolute ${
          variant === "title" ? "-bottom-2 h-0.5" : "-bottom-1 h-px"
        } 
        left-0 right-0 origin-center 
        bg-gradient-to-r 
        ${
          variant === "title"
            ? "from-accent-light-from/0 via-accent-light-to/50 to-accent-light-from/0 dark:from-accent-dark-from/0 dark:via-accent-dark-to/70 dark:to-accent-dark-from/0"
            : "from-secondary-light/0 via-secondary-light/40 to-secondary-light/0 dark:from-secondary-dark/0 dark:via-secondary-dark/50 dark:to-secondary-dark/0"
        } 
        transform scale-x-0 group-hover:scale-x-100 
        transition-transform duration-500 ease-out`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r 
        ${
          variant === "title"
            ? "from-accent-light-from/0 via-accent-light-to/5 to-accent-light-from/0 dark:from-accent-dark-from/0 dark:via-accent-dark-to/5 dark:to-accent-dark-from/0"
            : "from-secondary-light/0 via-secondary-light/5 to-secondary-light/0"
        } 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500 rounded-lg -z-10`}
      />
    </div>
  );
};

export default EditableText;
