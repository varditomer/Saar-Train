import React, { useEffect, useState } from 'react';

type TrainSettings = {
  minutes: number;
  seconds: number;
  interval: number;
  selectedNumbers: number[];
  selectedColors: string[];
};

export const InTrain = ({ trainSettings }: { trainSettings: TrainSettings }) => {
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);

  useEffect(() => {
    let intervalId: number | null = null;
    let remainingNumbers: number[] = [...trainSettings.selectedNumbers];

    const showRandomNumber = () => {
      if (remainingNumbers.length === 0) {
        clearInterval(intervalId!);
        return;
      }

      const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
      const randomNumber = remainingNumbers.splice(randomIndex, 1)[0];
      setCurrentNumber(randomNumber);
    };

    showRandomNumber(); // Show the first number immediately

    intervalId = setInterval(showRandomNumber, trainSettings.interval * 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [trainSettings]);

  const numberStyle: React.CSSProperties = {
    background: trainSettings.selectedColors[Math.floor(Math.random() * trainSettings.selectedColors.length)],
  };

  return (
    <section className="in-train">
      <div className="current-number" style={numberStyle}>
        {currentNumber}
      </div>

    </section>
  );
};

