export default function App() {
  return (
    <>
      <header>
        <div className="nav">
          <div className="nav-left">
            <img src="/images/bitshield-logo.png" alt="BitShield Logo" />
            <span>BitShield</span>
          </div>
          <nav className="nav-links">
            <a href="#services">服務內容</a>
            <a href="#demo">網站範例</a>
            <a href="#team">團隊介紹</a>
            <a href="#contact">聯絡我們</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="top">
          <div>
            <h1 className="hero-title">為民宿打造安心又好看的官方網站</h1>
            <p className="hero-subtitle">
              BitShield 是一個具資安背景的學生團隊，目前專注在民宿官網設計與開發，
              幫你把故事、房型與照片用最簡單好懂的方式呈現給旅客。
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn-primary">了解民宿網站服務</a>
              <a href="#contact" className="btn-secondary">我要討論專案</a>
            </div>

            <p className="hero-tag">
              正在進行與學校合作的產學計畫，持續優化民宿網站體驗與基本安全設定。
            </p>
          </div>

          <div>
            <img src="/images/bitshield-logo.png" alt="BitShield 民宿網站示意圖" />
          </div>
        </section>

        {/* Services */}
        <section id="services">
          <h2 className="section-title">我們能幫民宿做什麼</h2>
          <p className="section-desc">
            從版型設計、前端開發到上線教學，都由我們一條龍處理。
            資安部分目前還在進一步學習中，會先協助基本安全設定。
          </p>

          <div className="card-grid">
            <article className="card">
              <h3>民宿官方網站設計</h3>
              <p>RWD 響應式版面、首頁、房型介紹、相簿、交通地圖與聯絡表單，一次幫你規劃好。</p>
              <a href="#">了解詳情（之後連到服務頁）</a>
            </article>

            <article className="card">
              <h3>網站建置與基本安全</h3>
              <p>協助設定網域、憑證（HTTPS）、簡單備份與管理帳號建議，為未來進階資安打好基礎。</p>
              <a href="#">未來資安服務規畫</a>
            </article>

            <article className="card">
              <h3>產學合作與在地支持</h3>
              <p>配合學校產學計畫，聚焦在澎湖等旅宿地區，實際訪談民宿主、優化網站體驗。</p>
              <a href="#">認識產學計畫</a>
            </article>
          </div>
        </section>

        {/* Demo / Works */}
        <section id="demo">
          <h2 className="section-title">網站範例</h2>
          <p className="section-desc">
            目前正在累積民宿案例，下列為示範網站與 BitShield 自家官網，實際合作時會依照每間民宿的風格客製。
          </p>

          <div className="card-grid">
            <article className="card">
              <h3>海光民宿（示範）</h3>
              <p>以海景照片與房型介紹為主的一頁式官網，適合房間數較少的海邊民宿。</p>
              <a href="#">開啟示範網站</a>
            </article>

            <article className="card">
              <h3>森旅親子民宿（示範）</h3>
              <p>著重遊樂設施與周邊景點介紹，搭配大量圖片與FAQ，友善親子旅客。</p>
              <a href="#">開啟示範網站</a>
            </article>

            <article className="card">
              <h3>BitShield 官方網站</h3>
              <p>你現在看到的這個網站也是我們的作品之一，用來展示整體視覺與排版能力。</p>
              <a href="#top">回到首頁頂部</a>
            </article>
          </div>
        </section>

        {/* Team */}
        <section id="team">
          <h2 className="section-title">BitShield 團隊</h2>
          <p className="section-desc">
            我們是熱愛程式與設計的學生團隊，擅長前端開發、UI 切版與資安基礎。
            每個專案都由成員直接與你鷹...
          </p>

          <div className="team-grid">
            <div className="team-card">
              <div className="avatar"></div>
              <h3>成員 A</h3>
              <div className="team-role">前端 / 網頁切版</div>
              <p>負責 React、RWD 與動畫效果。</p>
            </div>

            <div className="team-card">
              <div className="avatar"></div>
              <h3>成員 B</h3>
              <div className="team-role">設計 / UIUX</div>
              <p>負責視覺、Logo 與排版規劃。</p>
            </div>

            <div className="team-card">
              <div className="avatar"></div>
              <h3>成員 C</h3>
              <div className="team-role">基礎資安 / 部署</div>
              <p>協助 HTTPS、基本安全設定與部署。</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="section-title">聯絡我們</h2>
          <p className="section-desc">想了解合作方式？歡迎留言，我們會盡快回覆！</p>

          <div className="contact-grid">
            <form>
              <div>
                <label>姓名</label>
                <input type="text" placeholder="請輸入你的名字" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="example@mail.com" />
              </div>
              <div>
                <label>訊息</label>
                <textarea placeholder="想討論的內容..."></textarea>
              </div>
              <button className="btn-primary" style={{ border: "none" }}>
                送出表單
              </button>
            </form>

            <div>
              <p>也可以直接寫 Email 給我們：</p>
              <p><strong>bitshield.team@gmail.com</strong></p>
              <p>我們通常會在 1～2 天內回覆！</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © 2025 BitShield 民宿網站製作團隊 — All Rights Reserved.
      </footer>
    </>
  );
}
