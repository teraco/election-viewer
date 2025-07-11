import { useState, useMemo } from 'react'
import type { Candidate } from './types'
import PrefectureSelector from './components/PrefectureSelector'
import CandidateList from './components/CandidateList'
import candidatesData from './data/candidates.json'

function App() {
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('')
  const [candidates] = useState<Candidate[]>(candidatesData)

  const availablePrefectures = useMemo(() => {
    const prefectures = Array.from(new Set(candidates.map(c => c.prefecture)))
    return prefectures.sort()
  }, [candidates])

  const filteredCandidates = useMemo(() => {
    if (!selectedPrefecture) return []
    return candidates.filter(c => c.prefecture === selectedPrefecture)
  }, [candidates, selectedPrefecture])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            参議院選挙候補者×当選確率ビューア
          </h1>
          <p className="text-gray-600">
            都道府県を選択して候補者の当選確率をご確認ください
          </p>
        </header>

        <main>
          <PrefectureSelector
            selectedPrefecture={selectedPrefecture}
            onPrefectureChange={setSelectedPrefecture}
            availablePrefectures={availablePrefectures}
          />

          <CandidateList
            candidates={filteredCandidates}
            selectedPrefecture={selectedPrefecture}
          />
        </main>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>データ更新日: {candidates.length > 0 ? new Date(candidates[0].updatedAt).toLocaleDateString('ja-JP') : ''}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
