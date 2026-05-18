import DeckStage from '@/components/deck/DeckStage'
import { slides } from '@/components/deck/slides'

export const metadata = {
  title: 'BITRA · Brandbook 2026',
  robots: 'noindex,nofollow',
}

export default function BrandbookPage() {
  return <DeckStage slides={slides} />
}
