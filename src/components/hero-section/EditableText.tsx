import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

interface EditableTextProps {
  text: string;
  onTextChange: (newText: string) => void;
  className?: string;
  placeholder?: string;
}

const EditableText = ({
  text,
  onTextChange,
  className = "",
  placeholder = "Click to edit...",
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    if (editedText.trim() !== text) {
      onTextChange(editedText.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`w-full bg-transparent border-b-2 border-blue-500 focus:outline-none ${className} ${
          !isDark ? "text-gray-900" : "text-white"
        }`}
        placeholder={placeholder}
      />
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={`cursor-text hover:opacity-80 transition-opacity ${className} ${
        !isDark ? "text-gray-900" : "text-white"
      }`}
    >
      {text || placeholder}
    </div>
  );
};

export default EditableText;
