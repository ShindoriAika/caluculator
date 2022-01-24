// funcAPI（funcコンポーネントからデータを読み込み、APIとして公開）
import func from '../../components/func'

export default function handler(req, res) {
  res.json(func)
}