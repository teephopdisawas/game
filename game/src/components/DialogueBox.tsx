// 🎮 Dialogue Box Component 💬✨
import { useState, useEffect } from 'react';
import type { DialogueLine } from '../types';
import './DialogueBox.css';

interface DialogueBoxProps {
  dialogue: DialogueLine[];
  onComplete: () => void;
}

export function DialogueBox({ dialogue, onComplete }: DialogueBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentLine = dialogue[currentIndex];
  const isLastLine = currentIndex === dialogue.length - 1;

  // Typewriter effect ✍️
  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let charIndex = 0;
    const text = currentLine?.text || '';
    
    const timer = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayedText(text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [currentIndex, currentLine?.text]);

  const handleClick = () => {
    if (isTyping) {
      // Skip to end of current text
      setDisplayedText(currentLine?.text || '');
      setIsTyping(false);
    } else if (isLastLine) {
      // Dialogue complete
      onComplete();
    } else {
      // Next line
      setCurrentIndex(prev => prev + 1);
    }
  };

  const getEmotionClass = (emotion?: string) => {
    switch (emotion) {
      case 'happy': return 'emotion-happy';
      case 'sad': return 'emotion-sad';
      case 'angry': return 'emotion-angry';
      case 'mysterious': return 'emotion-mysterious';
      default: return '';
    }
  };

  if (!currentLine) return null;

  return (
    <div className="dialogue-container" onClick={handleClick}>
      <div className={`dialogue-box ${getEmotionClass(currentLine.emotion)}`}>
        <div className="speaker-name">
          {currentLine.speaker}
        </div>
        <div className="dialogue-text">
          {displayedText}
          {isTyping && <span className="cursor">▌</span>}
        </div>
        <div className="dialogue-hint">
          {isTyping ? '⏭️ Click to skip' : isLastLine ? '✨ Click to continue' : '➡️ Click for next'}
        </div>
      </div>
      <div className="dialogue-progress">
        {dialogue.map((_, i) => (
          <span 
            key={i} 
            className={`progress-dot ${i <= currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
