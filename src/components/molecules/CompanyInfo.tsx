import styles from './CompanyInfo.module.scss'

export default function CompanyInfo() {
  return (
    <table className={styles.info}>
      <tbody>
        <tr>
          <th>事業所名</th>
          <td>
            株式会社アーリーリフレクション
            <br />
            エンターテインメントテック事業部
          </td>
        </tr>
        <tr>
          <th>事業内容</th>
          <td>
            AR・VR・MR等の3Dグラフィックスからリアルタイムモーションキャプチャー、映像グラフィックコンテンツの作成
            <br />
            リアル×バーチャルのハイブリッドライブ、キャラクターライブの作成
            <br />
            映像製作
          </td>
        </tr>
        <tr>
          <th>所在地</th>
          <td>
            〒101-0051
            <br />
            東京都千代田区神田神保町1-22-2
            <br />
            VORT神保町Ⅳ 4F
          </td>
        </tr>
        <tr>
          <th>資本金</th>
          <td>1000万円</td>
        </tr>
        <tr>
          <th>設立</th>
          <td>2007年</td>
        </tr>
        <tr>
          <th>代表取締役</th>
          <td>田中喜之</td>
        </tr>
      </tbody>
    </table>
  )
}
