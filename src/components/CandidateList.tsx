import React from 'react';
import type { Candidate } from '../types';
import CandidateCard from './CandidateCard';

interface CandidateListProps {
  candidates: Candidate[];
  selectedPrefecture: string;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, selectedPrefecture }) => {
  if (!selectedPrefecture) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">都道府県を選択してください</div>
      </div>
    );
  }

  if (candidates.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">{selectedPrefecture}の候補者データがありません</div>
      </div>
    );
  }

  const sortedCandidates = [...candidates].sort((a, b) => b.probability - a.probability);
  const district = candidates[0]?.district;

  return (
    <div>
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">
          全国 &gt; {selectedPrefecture}
        </nav>
        <h2 className="text-2xl font-bold text-gray-900">{district}</h2>
        <p className="text-gray-600 mt-1">候補者一覧 ({candidates.length}人)</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        {sortedCandidates.map((candidate, index) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            rank={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;