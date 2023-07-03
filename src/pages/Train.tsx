import React, { useState } from 'react';
import { InTrain } from '../components/InTrain';
import { CreateTrain } from '../components/CreateTrain';


type TrainSettings = {
    minutes: number;
    seconds: number;
    interval: number;
    selectedNumbers: number[];
    selectedColors: string[];
  };

export const Train: React.FC = () => {
  const [trainSettings, setTrainSettings] = useState<TrainSettings | null>(null);

  const handleTrainSettingsSubmit = (settings: TrainSettings) => {
    setTrainSettings(settings);
  };

  return (
    <section className="train">
      {trainSettings ? (
        <InTrain trainSettings={trainSettings} />
      ) : (
        <CreateTrain onSubmit={handleTrainSettingsSubmit} />
      )}
    </section>
  );
};

export default Train;
