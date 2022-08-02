import { useState } from 'react';

const InGameMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}
      >
        MENU
      </button>
      {isExpanded ? (
        <div style={{ position: 'absolute', top: 20, left: 100, zIndex: 1 }}>
          Ellooooooo
        </div>
      ) : null}
    </div>
  );
};

export default InGameMenu;
