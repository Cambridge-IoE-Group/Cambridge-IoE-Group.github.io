---
layout: page
title: News
permalink: /news/
description: News of the IoE Group
nav: true
nav_order: 6
---

<!-- {% include news.liquid %} -->

<style>
/* 整体：列表上方先画一条线 */
.news-list{
  margin-top: .5rem;
  border-top: 2px solid var(--global-divider-color);
}

/* 每条新闻：底部画线，设置足够内边距与最小高度，垂直居中文本 */
.news-item{
  display: flex;
  align-items: center;            /* 垂直居中文本（与可选缩略图） */
  gap: 1.25rem;
  padding: 18px 0;                /* 放松上下间距 */
  min-height: 88px;               /* 提供“上下两线之间”的可视高度 */
  border-bottom: 2px solid var(--global-divider-color);
}

/* 文本本身：提高行距和字号，去掉段落默认外边距 */
.news-text{ flex: 1 1 auto; }
.news-text p{
  margin: 0;
  line-height: 1.8;               /* 行距更舒适 */
  font-size: 1.05rem;
}

/* 可选：右侧配图（若后续需要左右排图文） */
.news-item .thumb{ flex: 0 0 auto; }
.news-item .thumb img{
  max-width: 220px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
}

/* 响应式：小屏改为上下堆叠，保持舒适间距 */
@media (max-width: 768px){
  .news-item{
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0;
    min-height: unset;            /* 小屏不强制最小高度 */
  }
  .news-item .thumb{ margin-top: .5rem; }
  .news-text p{ font-size: 1rem; line-height: 1.75; }
}

/* 超窄屏缩小图片 */
@media (max-width: 400px){
  .news-item .thumb img{ max-width: 160px; }
}
</style>




<div class="news-wrap">
  <div class="news-list">

    <!-- 2023 -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> gave a <strong>Keynote Speech</strong>, “Internet of Everything - From Molecules to the Universe,” at <strong>IEEE CAMAD 2023</strong>, Edinburgh, UK, <em>November 2023</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> delivered a <strong>Tutorial</strong>, “Internet of Bio-Nano Things: Getting Practical with Molecular Communications,” at <strong>IEEE Future Networks World Forum 2023</strong>, Baltimore, MD, USA, <em>November 2023</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> gave an <strong>Invited Talk</strong>, “Internet of Everything - From Molecules to the Universe,” at <strong>Clare Hall College, University of Cambridge</strong>, <em>August 2023</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> is serving as <strong>Associate Editor</strong>, <em>IEEE Transactions on Molecular, Biological and Multi-Scale Communications</em>, <em>since 2023</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> is serving as <strong>Editor</strong>, <em>Scientific Reports (Nature)</em>, <em>since 2023</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- 2022 -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> delivered a <strong>Tutorial</strong>, “Internet of Bio-Nano Things: Getting Practical with Molecular Communications,” at <strong>IEEE GLOBECOM 2022</strong>, Rio de Janeiro, Brazil, <em>December 2022</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> gave an <strong>Invited Talk</strong>, “Internet of Everything - From Molecules to the Universe,” at the <strong>Nanjing Institute of Technology Seminar</strong>, <em>October 2022</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- 2021 -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> was named a <strong>Turing Fellow</strong>, <strong>The Alan Turing Institute</strong>, <em>2021</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- 2020 -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> was appointed as <strong>AXA Chair in Internet of Everything</strong>, supported by <strong>AXA Research Fund</strong>, <em>2020</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><strong>Prof. Akan</strong> has received the <strong>TÜBİTAK Science Award</strong> 2020, <em>The Scientific and Technological Research Council of Turkey (TÜBİTAK)</em>, <em>2020</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- Awards / Editorial etc. -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>Dr. Akan</strong> receives the <strong>ACM NanoCom Outstanding Milestone Award</strong>, recognizing foundational contributions to theoretical and experimental molecular communication models for neural systems and brain. <em>NanoCom</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><strong>Murat Kuscu</strong> has been awarded the <strong>IEEE Turkey Ph.D. Thesis Award</strong>, <em>2018</em>. <em>Murat Kuscu</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><em>IEEE Networking Letters</em>: <strong>Dr. Akan</strong> will serve on the inaugural editorial board of the soon-to-be-launched journal.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- 2018 -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>Tooba Khan</strong> received the <strong>IEEE INFOCOM 2018 Best-in-Session Presentation Award</strong> for “Information Theoretical Analysis of Synaptic Communication for Nanonetworks” (co-authors: <em>Hamideh Ramezani, Tooba Khan, Ozgur B. Akan</em>), <strong>IEEE INFOCOM 2018</strong>, Honolulu, USA, <em>April 2018</em>. <em>Tooba Khan</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- 2017–2016 -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>IEEE Nanotechnology Council (NTC) Distinguished Lecturer</strong>: <strong>Prof. Akan</strong>, <em>January 2017 – December 2017</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p>Our paper “<strong>Crowdsourcing-based Mobile Network Tomography for xG Wireless Systems</strong>” (<em>Ergin Dinc, Mustafa Ozger, Ahmet F. Ates, Ibrahim Delibalta, Ozgur B. Akan</em>) received the <strong>Best Paper Award</strong>, <strong>IEEE ISCC 2016</strong>, Messina, Italy, <em>June 2016</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <div class="news-item">
      <div class="news-text">
        <p><strong>Ergin Dinc</strong> has been awarded the <strong>Ph.D.</strong> degree — Congratulations!</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- 2015–2016（Koç University 段落拆分） -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>Sedat Simavi Award (Sciences)</strong> to <strong>Prof. Akan</strong> for “Physical Model and Analysis of FRET-Based Nano Molecular Communication Channel,” <em>2015</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>
    <div class="news-item">
      <div class="news-text">
        <p><strong>Elected member</strong> of the <strong>Science Academy</strong>, <em>2015</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>
    <div class="news-item">
      <div class="news-text">
        <p><strong>IEEE Fellow</strong> (<em>2016</em>) with citation: “For contributions to wireless sensor networks”.</p>
      </div>
      <div class="thumb"></div>
    </div>
    <div class="news-item">
      <div class="news-text">
        <p><strong>Ozgur Ergul</strong> has been awarded the <strong>Ph.D.</strong> degree — Congratulations! <em>Derya Malak</em>.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- 2014（全部逐条拆分） -->
    <div class="news-item"><div class="news-text"><p><strong>Outstanding Faculty of the Year Award</strong>, Faculty of Engineering, <strong>Koç University</strong>, <em>2014</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>TÜBİTAK Young Scientist Award</strong>, <em>2014</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Bloomberg Businessweek</strong> feature: “Telecommunications the key to spinal cord disorders,” <em>14.11.2014</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>“<strong>Kadir Has Awards</strong> … ‘The Promising Scientist Award’ was granted to <strong>Prof. Dr. Ozgur B. Akan</strong>.” — <em>Hürriyet, 19.03.2014</em>. [html]</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Popular Science</strong>: Article featuring <strong>Project MINERVA</strong> and NWCL’s nano-communications. [pdf]</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Platin Magazine</strong>: Listed among “The 100 Most Influential Turkish Scientists”.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Kadir Has University Promising Scientist Award 2014</strong> to <strong>Prof. Akan</strong>, <em>2014</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Panorama</strong> (Kadir Has University magazine): Feature on <strong>Project MINERVA</strong> &amp; nano-communications. [pdf]</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>BAGEP 2014 — Young Scientist Award</strong>, <em>The Science Academy</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Scientist of the Year Award 2013</strong>, <em>Bilim Kahramanları Derneği</em>, <em>2013</em>.</p></div><div class="thumb"></div></div>

    <!-- 2013（逐条拆分） -->
    <div class="news-item"><div class="news-text"><p><strong>ERC Consolidator Grant</strong>: Communication-theoretical investigations of nervous nanonetworks awarded <em>€1.8M</em> for 5 years.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>ACM TechNews</strong> coverage of <strong>Project MINERVA</strong> (<em>Dec 2013</em>). [html]</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>NTV</strong> national TV: Interview on <strong>Project MINERVA</strong> (<em>Dec 2013</em>). [video]</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>“The first ever Consolidator Grant in Turkey goes to <strong>MINERVA</strong>.” — <em>Cumhuriyet, 08.12.2013</em>. [pdf]</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>“<strong>Prof. Ozgur B. AKAN</strong> of Koç University awarded €1.8M grant by <strong>ERC</strong>.” — <em>Hürriyet Ankara, 14.12.2013</em>. [link]</p></div><div class="thumb"></div></div>

    <!-- Koç–Kyoto Symposium（已是单条） -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>Koç University – Kyoto University International Symposium</strong> on “New Frontiers in Health Sciences and Technologies,” Kyoto, Japan: Oral and poster presentations on “Fundamentals of Nanoscale Communications and Nanonetworks”.</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- NCC (Tampere) —— 拆成两条 -->
    <div class="news-item">
      <div class="news-text">
        <p><strong>The 1st International Summer School on Nanocommunications</strong>, NCC, Tampere University of Technology, Finland: Tutorials on “FRET-based Nanoscale Wireless Communications” and “Intra-body Molecular Nanonetworks”.</p>
      </div>
      <div class="thumb"></div>
    </div>
    <div class="news-item">
      <div class="news-text">
        <p><strong>Derya Malak</strong> awarded the <strong>M.Sc.</strong> degree — Congratulations!</p>
      </div>
      <div class="thumb"></div>
    </div>

    <!-- 2012 —— 全部拆分 -->
    <div class="news-item"><div class="news-text"><p><strong>Outstanding Faculty of the Year Award</strong>, Faculty of Engineering, <strong>Koç University</strong>, <em>2012</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>University of Pavia</strong>: Tutorial “Biologically-inspired and Nanoscale Communication and Networking,” International Doctoral School on Advanced Topics in EEE &amp; Informatics.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>World Economic Forum (Summer Davos) 2012</strong>, Tianjin, China: Joined as a <strong>Young Scientist</strong>; invited talk on “Frontiers in Nanotechnology”.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>Murat Kocaoglu</strong> awarded the <strong>M.Sc.</strong> degree — Congratulations!</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>Ahmet Ozan Bicen</strong> affiliated to <strong>BWN Lab, Georgia Tech</strong> as Ph.D. candidate.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>Ahmet Ozan Bicen</strong> awarded the <strong>M.Sc.</strong> degree — Congratulations!</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>ACM MobiCom 2012</strong>, Istanbul: Served as Chair (<em>SIGMOBILE</em>).</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>IEEE ISCC 2012</strong>: “Energy-efficient RF Source Power Control for Opportunistic Distributed Sensing in Wireless Passive Sensor Networks,” presented by <strong>Ahmet Ozan Bicen</strong>, <em>July 2012</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>IEEE ISCC 2012</strong>, Cappadocia: <strong>TPC Co-Chair</strong> (Prof. Akan).</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>N3Summit 2012</strong>, UPC Barcelona: <strong>Murat Kocaoglu</strong> presents “FRET-based Single-pair, Broadcast and Multi-step Nanocommunications with Multi-exciton Transmission”.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>N3Summit 2012</strong>: Sessions on “Applications of Nanocommunication &amp; Nanonetworks” chaired by <strong>Prof. Akan</strong>, <em>June 21–22, 2012</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>IEEE MoNaCom 2012</strong> (with IEEE ICC 2012): <strong>Derya Malak</strong> presents works on node density limits, rate–delay–energy tradeoffs, and FRET-based nanoscale communications, <em>June 2012</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>2nd IEEE MoNaCom 2012</strong> (with IEEE ICC 2012) chaired by <strong>Prof. Akan</strong>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p>Paper “<strong>Mobile Ad Hoc Nanonetworks with Collision-Based Molecular Communication</strong>” selected as <strong>Spotlight Paper</strong>, <em>IEEE Transactions on Mobile Computing</em>, <em>March 2012</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>IEEE INFOCOM 2012</strong>, <em>March 2012</em>: <strong>Murat Kocaoglu</strong> presents “Minimum Energy Coding for Wireless NanoSensor Networks”.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>Burhan Gulbahar</strong> awarded the <strong>Ph.D.</strong> degree — Congratulations!</p></div><div class="thumb"></div></div>

    <!-- 2011（逐条拆分） -->
    <div class="news-item"><div class="news-text"><p><strong>IBM SUR Award</strong> for “Fundamentals of Green Communications and Networking,” <em>2011</em>.</p></div><div class="thumb"></div></div>
    
    <div class="news-item"><div class="news-text"><p><strong>Baris Atakan</strong> awarded the <strong>Ph.D.</strong> degree — Congratulations!</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>NWCL Workshop 2011</strong> held on Dec 14, 2011 (ENG-140).</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p>Invited presentation “<strong>Next-generation Communications for Pervasive Surveillance</strong>” at <em>IPSC/JRC, European Commission</em>, Ispra, Italy, <em>July 5–6, 2011</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>N3Summit 2011</strong>, UPC Barcelona: Session on “Molecular Communications” chaired by <strong>Prof. Akan</strong>, <em>June 22–23, 2011</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>FET11</strong>, Hungary: Ignite Talk by <strong>Prof. Akan</strong>, <em>May 2011</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>IEEE MoNaCom 2011</strong> (with IEEE INFOCOM 2011): “A Nanoscale Communication Channel with FRET,” <em>April 2011</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p>Elected <strong>IEEE Communications Society Distinguished Lecturer</strong>, <em>Jan 2011 – Dec 2012</em>.</p></div><div class="thumb"></div></div>

    <!-- 2010–2009（逐条拆分） -->
    <div class="news-item"><div class="news-text"><p><strong>IEEE ComSoc 2010 Outstanding Young Researcher Award</strong> (EMEA, runner-up), <em>2011</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>Tutorial “Bio-inspired and Nano-scale Communication and Networking,” <strong>IEEE GLOBECOM 2010</strong>, Miami, USA, <em>Dec 2010</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Eren Balevi</strong> defends <strong>M.Sc.</strong>, <em>Aug 30, 2010</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>IBM Faculty Award 2010</strong> to <strong>Prof. Akan</strong>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Aydin Guney</strong> defends <strong>M.Sc.</strong>, <em>May 15, 2010</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>METU Thesis Advisor of the Year 2010 (with <strong>Muammer Arik</strong>).</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Ertan Gul</strong> defends <strong>M.Sc.</strong>, <em>Apr 4, 2010</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Gokhan Isbitiren</strong> defends <strong>M.Sc.</strong>, <em>Dec 23, 2009</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>Tutorial “Bio-inspired and Nano-scale Communication and Networking,” <strong>IEEE ISWCS 2009</strong>, Siena, Italy, <em>Sept 2009</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>Keynote “Bio-inspired and Nano-scale Molecular Communications: From Evolution to Evaluation,” <strong>SPECTS 2009</strong>, Istanbul, <em>July 2009</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>Tutorial “Next Generation Sensor Networks,” <strong>IEEE SIU 2009</strong>, Antalya, <em>Apr 2009</em>.</p></div><div class="thumb"></div></div>

    <!-- 2008–2006（逐条拆分） -->
    <div class="news-item"><div class="news-text"><p><strong>TÜBA-GEBİP Distinguished Young Scientist Award</strong>, <em>2008</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>IBM Faculty Award</strong>, <em>2008</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>METU Outstanding Young Researcher Award</strong>, <em>2008</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Parlar Foundation Research Encouragement Award</strong>, <em>2006</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p><strong>Editor of the Year Award</strong>, <em>Ad Hoc Networks (Elsevier)</em>, <em>2006</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p><strong>Best Paper Award</strong>, <strong>IEEE ISCN 2006</strong>, Istanbul, <em>June 2006</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>Tutorial “Wireless Multimedia Sensor Networks,” <strong>NATO-ARW</strong>, Romania, <em>Sept 2006</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>Tutorial “Wireless Sensor Networks for Military and Defense Applications,” <strong>NATO-ARW</strong>, Romania, <em>Sept 2006</em>.</p></div><div class="thumb"></div></div>
    <div class="news-item"><div class="news-text"><p>Tutorial “Multimedia Communication in Wireless Sensor Networks,” <strong>IEEE ISCN 2006</strong>, Istanbul, <em>June 2006</em>.</p></div><div class="thumb"></div></div>

    <!-- 2005–2004（拆成两条） -->
    <div class="news-item"><div class="news-text"><p><strong>TÜBİTAK Career Award</strong>, <em>2005</em>.</p></div><div class="thumb"></div></div>

    <div class="news-item"><div class="news-text"><p>Invited/tutorial talks: IEEE ComSoc-TR Distinguished Seminar (Istanbul, <em>June 2005</em>), ASELSAN (Ankara, <em>Jan 2005</em>), and <strong>IFIP TC6 NET-CON 2004</strong> (Palma de Mallorca, <em>Nov 2004</em>): “Wireless Sensor Networks: State-of-the-art and Research Challenges”.</p></div><div class="thumb"></div></div>

  </div>
</div>
