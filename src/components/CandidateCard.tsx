import React from 'react';
import type { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
  rank: number;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, rank }) => {
  const probabilityPercentage = Math.round(candidate.probability * 100);
  
  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 2:
        return 'bg-gray-100 text-gray-800 border-gray-300';
      case 3:
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRankBadgeColor(rank)}`}>
              {rank}位
            </span>
            <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-1">{candidate.party}</p>
          <p className="text-xs text-gray-500">{candidate.district}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">{probabilityPercentage}%</div>
          <div className="text-xs text-gray-500">当選確率</div>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${probabilityPercentage}%` }}
        ></div>
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        更新: {new Date(candidate.updatedAt).toLocaleDateString('ja-JP')}
      </div>
    </div>
  );
};

export default CandidateCard;