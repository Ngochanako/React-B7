import React, { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES, useEffect, useState } from 'react'
interface KeyInfo {
    keyName: string;
    keyCode: number;
  }
export default function B10() {
    const [keyInfo, setKeyInfo] = useState<KeyInfo|null>(null);

  useEffect(() => {
    const handleKeyPress = (event:KeyboardEvent) => {
      setKeyInfo({
        keyName: event.key,
        keyCode: event.keyCode,
      });
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  return (
    <div>
      <p>Bài 10</p>
      {keyInfo && (
        <div>
          <p>Bạn đã nhấn phím: {keyInfo.keyName}</p>
          <p>Mã phím: {keyInfo.keyCode}</p>
        </div>
      )}
    </div>
  )
}
