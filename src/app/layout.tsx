import type { Metadata } from 'next'
import '@/assets/styles/global.scss'

export const metadata: Metadata = {
  metadataBase: new URL('https://earlystudio.com'),
  title: 'Early Studio',
  description:
    'Early Studioは、データサイエンス、データエンジニアリング、３D解析やデータ構築技術に強みを持つアーリーリフレクションのエンターテイメントプロダクションチームです。豊富な実績の持つクリエイティブチームにより、３Dキャラクター、VR、AR等のプロダクションを実現します。',
  openGraph: {
    images: '/ogp.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
