import React, { useState } from 'react';

type TrainSettings = {
    minutes: number;
    seconds: number;
    interval: number;
    selectedNumbers: number[];
    selectedColors: string[];
};

interface CreateTrainProps {
    onSubmit: (settings: TrainSettings) => void;
}

export const CreateTrain: React.FC<CreateTrainProps> = ({ onSubmit }) => {
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [interval, setInterval] = useState<number>(0);

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectAllColors, setSelectAllColors] = useState<boolean>(false);

    const handleColorClick = (color: string) => {
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter((c) => c !== color));
        } else {
            setSelectedColors([...selectedColors, color]);
        }
    };

    const handleSelectAllColors = () => {
        if (selectAllColors) {
            setSelectedColors([]);
        } else {
            setSelectedColors(['red', 'blue', 'green', 'yellow']);
        }
        setSelectAllColors(!selectAllColors);
    };

    const handleNumberClick = (number: number) => {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
        } else {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedNumbers([]);
        } else {
            setSelectedNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
        setSelectAll(!selectAll);
    };

    const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setMinutes(value);
    };

    const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setSeconds(value);
    };

    const handleIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setInterval(value);
    };

    const formattedTime = `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trainSettings = {
            minutes,
            seconds,
            interval,
            selectedNumbers,
            selectedColors,
        };
        onSubmit(trainSettings);
    };

    const isFormValid = (minutes > 0 || seconds > 0) && interval > 0 && selectedNumbers.length > 0 && selectedColors.length > 0;

    return (
        <section className="create-train">
            <h1>Create a new train</h1>

            <form onSubmit={handleSubmit} className="create-train-form">
                <div className="form-inputs">

                    <div className="form-item row">
                        <label htmlFor="duration" className="duration">
                            ⏲ Duration:
                        </label>
                        <div className="time-picker">
                            <input type="number" id="train-minutes" min={0} max={59} value={minutes} onChange={handleMinutesChange} />
                            :
                            <input type="number" id="train-seconds" min={0} max={59} value={seconds} onChange={handleSecondsChange} />
                        </div>
                    </div>
                    <div className="form-item row">
                        <label htmlFor="interval" className="interval">
                            🏃‍♂️ Interval:
                        </label>
                        <div className="time-picker">
                            <input type="number" id="train-seconds" min={0} max={59} value={interval} onChange={handleIntervalChange} />
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="numbers" className="numbers">
                            🔢 Numbers:
                        </label>
                        <div className="input-row">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                                <button
                                    key={number}
                                    className={`number-button ${selectedNumbers.includes(number) ? 'selected' : ''}`}
                                    onClick={() => handleNumberClick(number)}
                                    type="button"
                                >
                                    {number}
                                </button>
                            ))}
                            <button className="select-all" onClick={handleSelectAll} type="button">
                                {selectAll ? 'Deselect All' : 'Select All'}
                            </button>
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="colors" className="colors">
                            🎨 Colors:
                        </label>
                        <div className="input-row">
                            {['red', 'blue', 'green', 'yellow'].map((color) => (
                                <button
                                    key={color}
                                    className={`color-button ${color} ${selectedColors.includes(color) ? 'selected' : ''}`}
                                    onClick={() => handleColorClick(color)}
                                    type="button"
                                />
                            ))}
                            <button
                                className={`color-button gradient-button ${selectAllColors ? 'selected' : ''}`}
                                onClick={handleSelectAllColors}
                                type="button"
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className="start-train" disabled={!isFormValid}>
                    Start
                </button>
            </form>
        </section>
    );
};
