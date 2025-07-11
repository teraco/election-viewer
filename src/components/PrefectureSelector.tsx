import React from 'react';

interface PrefectureSelectorProps {
  selectedPrefecture: string;
  onPrefectureChange: (prefecture: string) => void;
  availablePrefectures: string[];
}

const PrefectureSelector: React.FC<PrefectureSelectorProps> = ({
  selectedPrefecture,
  onPrefectureChange,
  availablePrefectures,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor="prefecture-select" className="block text-sm font-medium text-gray-700 mb-2">
        都道府県を選択
      </label>
      <select
        id="prefecture-select"
        value={selectedPrefecture}
        onChange={(e) => onPrefectureChange(e.target.value)}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">都道府県を選択してください</option>
        {availablePrefectures.map((prefecture) => (
          <option key={prefecture} value={prefecture}>
            {prefecture}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PrefectureSelector;