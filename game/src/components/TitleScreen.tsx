// 🎬 Title Screen Component ✨
import './TitleScreen.css';

interface TitleScreenProps {
  onStart: () => void;
  hasSave: boolean;
  onContinue: () => void;
}

export function TitleScreen({ onStart, hasSave, onContinue }: TitleScreenProps) {
  return (
    <div className="title-screen">
      <div className="title-content">
        <div className="title-glyph">🔮</div>
        <h1 className="game-title">
          <span className="title-echoes">Echoes of</span>
          <span className="title-ellidra">Ellidra</span>
        </h1>
        <p className="title-subtitle">
          A Visual Novel where Language Shapes Reality ✨
        </p>
        
        <div className="title-buttons">
          {hasSave && (
            <button className="title-btn continue-btn" onClick={onContinue}>
              📖 Continue Journey
            </button>
          )}
          <button className="title-btn start-btn" onClick={onStart}>
            ⚔️ New Adventure
          </button>
        </div>

        <div className="title-features">
          <div className="feature">🏛️ Choose Your Faction</div>
          <div className="feature">🔤 Master Ellidric Language</div>
          <div className="feature">🌀 Explore Memory Drifts</div>
          <div className="feature">💫 Shape Your Destiny</div>
        </div>
      </div>

      <div className="title-footer">
        <p>A game about memory, language, and the power of choice</p>
        <p className="credits">Built with React + TypeScript + Vite 💜</p>
      </div>
    </div>
  );
}
