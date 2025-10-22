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
  padding: 24px 0;                /* 放松上下间距 */
  min-height: 100px;               /* 提供“上下两线之间”的可视高度 */
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

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> was named a <strong>Turing Fellow</strong>, <strong>The Alan Turing Institute</strong>, <em>2021</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> was appointed as <strong>AXA Chair in Internet of Everything</strong>, supported by <strong>AXA Research Fund</strong>, <em>2020</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received the <strong>TÜBİTAK Science Award 2020</strong>, <em>The Scientific and Technological Research Council of Turkey (TÜBİTAK)</em>, <em>2020</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Dr. Akan</strong> receives the <strong>ACM NanoCom Outstanding Milestone Award</strong>, in recognition of his foundational contributions in developing theoretical and experimental molecular communication models for neural systems and brain. <em>NanoCom</em>.</p>
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
                <p><em>IEEE Networking Letters</em>: <strong>Dr. Akan</strong> will be serving on the <strong>inaugural editorial board</strong> for the soon to be launched journal.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Tooba Khan</strong> has received <strong>IEEE INFOCOM 2018 Best-in-Session Presentation Award</strong> for presenting the paper entitled “Information Theoretical Analysis of Synaptic Communication for Nanonetworks” (co-authored by <em>Hamideh Ramezani, Tooba Khan and Ozgur B. Akan</em>) in <strong>IEEE INFOCOM 2018</strong>, Honolulu, USA, <em>April 2018</em>. <em>Tooba Khan</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has been appointed as the <strong>IEEE Nanotechnology Council (NTC) Distinguished Lecturer</strong>, <em>IEEE NTC</em>, <em>January 2017–December 2017</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p>Our paper titled “<strong>Crowdsourcing-based Mobile Network Tomography for xG Wireless Systems</strong>” (co-authored by <em>Ergin Dinc, Mustafa Ozger, Ahmet F. Ates, Ibrahim Delibalta and Ozgur B. Akan</em>) has received the <strong>Best Paper Award</strong>, <strong>IEEE ISCC 2016</strong>, Messina, Italy, <em>June 2016</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Ergin Dinc</strong> has been awarded <strong>Ph.D. degree</strong>. Congratulations!</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received the <strong>2015 Sedat Simavi Award</strong> in the category of sciences with its work “Physical Model and Analysis of Forster Resonance Energy Transfer (FRET) Based Nano Molecular Communication Channel,” <em>2015</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has been elected as the member of <strong>Science Academy</strong>, <em>2015</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has been named an <strong>IEEE Fellow</strong>, with the citation: “For contributions to wireless sensor networks”, <em>2016</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Ozgur Ergul</strong> has been awarded <strong>Ph.D. degree</strong>. Congratulations!</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received the <strong>Outstanding Faculty of the Year Award 2014</strong>, <em>Faculty of Engineering, Koc University</em>, <em>2014</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received <strong>TÜBİTAK Young Scientist Award 2014</strong>, <em>The Scientific and Technological Research Council of Turkey (TÜBİTAK)</em>, <em>2014</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p>The <strong>Minerva Project</strong> on <strong>Bloomberg Businessweek</strong>: “Telecommunications the key to spinal cord disorders” – <em>Bloomberg Businessweek, 14.11.2014</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p>“<strong>Kadir Has Awards’</strong> have found their owners. ‘The Promising Scientist Award’ was granted to <strong>Prof. Dr. Ozgur B. Akan</strong>.” – <em>Hurriyet, 19.03.2014</em>. <a href="html">[html]</a></p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p>The article featuring <strong>Project MINERVA</strong> and NWCL’s research on nano-communications appears in <strong>Popular Science</strong>. <a href="pdf">[pdf]</a></p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has been selected to the list of “The 100 Most Influential Turkish Scientists” by <strong>Platin Magazine</strong>, <em>Turkey's leading monthly business publication</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received <strong>Kadir Has University Promising Scientist Award 2014</strong>, <em>Kadir Has University</em>, <em>2014</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p>Article featuring <strong>Project MINERVA</strong> and nano-communications in <strong>Panorama</strong> (<em>Kadir Has University magazine</em>). <a href="pdf">[pdf]</a></p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received <strong>Young Scientist Award 2014 (BAGEP 2014)</strong>, <em>The Science Academy</em>, <em>2014</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received the <strong>Scientist of the Year Award 2013</strong>, <em>Bilim Kahramanlari Dernegi</em>, <em>2013</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p>Our research project on <strong>communication theoretical investigations of nervous nanonetworks</strong> has been awarded the <strong>European Research Council's (ERC) Consodilator Grant</strong> with an amount of <strong>1,8 million Euro</strong> for 5 years.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Project MINERVA</strong> covered on <strong>ACM TechNews</strong> (<em>Dec 2013</em>). <a href="html">[html]</a></p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> featured on nationwide TV (<strong>NTV</strong>) answering questions about <strong>Project MINERVA</strong> (<em>Dec 2013</em>). <a href="video">[video]</a></p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p>“The first ever Consolidator Grant in Turkey goes to <strong>MINERVA</strong>.” – <em>Cumhuriyet, 08.12.2013</em>. <a href="pdf">[pdf]</a></p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p>“<strong>Prof. Ozgur B. AKAN</strong> of Koc University awarded 1.8 million Euro grant by <strong>European Research Council (ERC)</strong>.” – <em>Hürriyet Ankara, 14.12.2013</em>. <a href="link">[link]</a></p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> delivers an oral and poster presentation on “Fundamentals of Nanoscale Communications and Nanonetworks” at <strong>Koc University - Kyoto University International Symposium on "New Frontiers in Health Sciences and Technologies"</strong>, Kyoto, Japan.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives tutorials on “FRET-based Nanoscale Wireless Communications” and “Intra-body Molecular Nanonetworks” at <strong>The 1st International Summer School on Nanocommunications</strong>, <em>Nano Communications Center (NCC), Tampere University of Technology, Tampere, Finland</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Derya Malak</strong> has been awarded <strong>M.Sc. degree</strong>. Congratulations!</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received <strong>Outstanding Faculty of the Year Award 2012</strong>, <em>Faculty of Engineering, Koc University</em>, <em>2012</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Biologically-inspired and Nanoscale Communication and Networking” at the <strong>International Doctoral School on Advanced Topics in Electrical and Electronic Engineering and Informatics</strong>, <em>University of Pavia, Italy</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> joins as a “<strong>YOUNG SCIENTIST</strong>” and delivers an invited talk on “Frontiers in Nanotechnology” panel in the <strong>World Economic Forum (Summer Davos) 2012</strong>, in Tianjin, China.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Murat Kocaoglu</strong> has been awarded <strong>M.Sc. degree</strong>. Congratulations!</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Ahmet Ozan Bicen</strong> has been affiliated to <strong>Broadband Wireless Networking Lab (BWN Lab), Georgia Institute of Technology</strong> as a Ph.D. candidate.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Ahmet Ozan Bicen</strong> has been awarded <strong>M.Sc. degree</strong>. Congratulations!</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> chairs <strong>ACM MOBICOM 2012</strong>, <em>Istanbul</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Ahmet Ozan Bicen</strong> presents the paper titled “Energy-efficient RF Source Power Control for Opportunistic Distributed Sensing in Wireless Passive Sensor Networks” in <strong>IEEE ISCC 2012</strong>, <em>July 2012</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> is <strong>TPC Co-Chair</strong> of <strong>IEEE ISCC 2012</strong>, <em>Cappadocia</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Murat Kuscu</strong> delivers a presentation titled “FRET-based Single-pair, Broadcast and Multi-step Nanocommunications with Multi-exciton Transmission” in <strong>N3Summit 2012</strong>, to be held at <em>Universitat Politecnica de Catalunya, Barcelona</em>, <em>June 2012</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> chairs a Session on “Applications of Nanocommunication &amp; Nanonetworks” in <strong>N3Summit 2012</strong>, to be held at <em>Universitat Politecnica de Catalunya, Barcelona</em> in <em>21st and 22nd of June, 2012</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Derya Malak</strong> presents the papers titled “On the Node Density Limits and Rate-Delay-Energy Tradeoffs in Ad Hoc Nanonetworks with Minimum Energy Coding” and “An Information Theoretical Analysis of Broadcast Networks and Channel Routing for FRET-based Nanoscale Communications” in <strong>IEEE MoNaCom 2012</strong> (in conjunction with <strong>IEEE ICC 2012</strong>), <em>June 2012</em></p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> chairs <strong>2nd IEEE International Workshop on Molecular and Nano-Scale Communications (MoNaCom 2012)</strong> in conjunction with <strong>IEEE ICC 2012</strong>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p>Our paper “<strong>Mobile Ad Hoc Nanonetworks with Collision-Based Molecular Communication</strong>” has been selected as the <strong>Spotlight Paper</strong> for the <em>March 2012 issue of the IEEE Transactions on Mobile Computing</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Murat Kocaoglu</strong> presents the paper titled “Minimum Energy Coding for Wireless NanoSensor Networks” in <strong>IEEE INFOCOM 2012</strong>, <em>March 2012</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Burhan Gulbahar</strong> has been awarded <strong>Ph.D. degree</strong>. Congratulations!</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has received <strong>IBM Shared University Research (SUR) Award</strong> for the project “Fundamentals of Green Communications and Networking,” <em>IBM</em>, <em>2011</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Baris Atakan</strong> has been awarded <strong>Ph.D. degree</strong>. Congratulations!</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>NWCL Workshop 2011</strong> is held on <em>December 14, 2011</em> in <em>NWCL-Lab (ENG-140)</em>. Detailed information is available in <a href="Workshop Webpage">Workshop Webpage</a>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> delivers an <strong>Invited Presentation</strong> titled “Next-generation Communications for Pervasive Surveillance” in the <strong>Workshop on Emerging Surveillance Capabilities and Requirements</strong> organized by the <em>Institute for the Protection and Security of the Citizen (IPSC), Joint Research Center (JRC), European Commission</em>, on <em>July 5-6, 2011</em>, in Ispra, Italy.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> chairs a Session on “Molecular Communications” in <strong>N3Summit 2011</strong>, to be held at <em>Universitat Politecnica de Catalunya, Barcelona</em> in <em>22nd and 23rd of June, 2011</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives an <strong>Ignite Talk</strong> at <strong>FET11</strong> in <em>Hungary</em>, on <em>May 2011</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> presents the paper titled “A Nanoscale Communication Channel with Fluorescence Resonance Energy Transfer (FRET)” in <strong>IEEE Monacom 2011</strong> (in conjunction with <strong>IEEE INFOCOM 2011</strong>), <em>April 2011</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> is elected as <strong>IEEE Communications Society Distinguished Lecturer</strong>, <em>IEEE</em>, <em>January 2011-December 2012</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> receives <strong>IEEE Communications Society 2010 Outstanding Young Researcher Award</strong> for <em>Europe, Middle-East and Africa Region (as runner-up)</em>, <em>IEEE ComSoc</em>, <em>2011</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Bio-inspired and Nano-scale Communication and Networking” at <strong>IEEE GLOBECOM 2010</strong> in <em>Miami, USA</em>, on <em>December 2010</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Eren Balevi</strong> defends his <strong>M.Sc. thesis</strong> on <em>Aug. 30, 2010</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has receives <strong>IBM Faculty Award 2010</strong>, <em>IBM</em>, <em>2010</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Aydin Guney</strong> defends his <strong>M.Sc. thesis</strong> on <em>May 15, 2010</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Muammer Arik</strong> and <strong>Prof. Akan</strong> receive <strong>METU Thesis Advisor of the Year Award 2010</strong>, <em>METU 2010</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Ertan Gul</strong> defends his <strong>M.Sc. thesis</strong> on <em>Apr. 4, 2010</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Gokhan Isbitiren</strong> defends his <strong>M.Sc. thesis</strong> on <em>Dec. 23, 2009</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Bio-inspired and Nano-scale Communication and Networking” at <strong>IEEE ISWCS 2009</strong> in <em>Siena, Italy</em> on <em>Sept. 2009</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives <strong>Keynote Speech</strong> on “Bio-inspired and Nano-scale Molecular Communications: From Evolution to Evaluation” at <strong>SPECTS 2009</strong> in <em>Istanbul Turkey</em> on <em>July 2009</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Next Generation Sensor Networks” <strong>IEEE SIU 2009</strong> in <em>Antalya Turkey</em> on <em>Apr. 2009</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> receives <strong>Turkish Academy of Sciences Distinguished Young Scientist Award 2008 (TUBA-GEBIP)</strong>, <em>Turkish Academy of Sciences</em>, <em>2008</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> receives <strong>IBM Faculty Award 2008</strong>, <em>IBM</em>, <em>2008</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> receives <strong>METU Outstanding Young Researcher Award 2008</strong>, <em>Middle East Technical University</em>, <em>2008</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> receives <strong>Parlar Foundation Research Encouragement Award</strong>, <em>Prof. Mustafa Parlar Foundation</em>, <em>2006</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> receives <strong>Editor of the Year Award</strong>, <em>AD HOC Networks Journal (Elsevier Science)</em>, <em>2006</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> receives <strong>Best Paper Award</strong>, <strong>IEEE ISCN 2006</strong>, <em>Istanbul, Turkey</em>, <em>June 2006</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Wireless Multimedia Sensor Networks” at <strong>NATO-ARW</strong> in <em>Romania</em> on <em>Sept. 2006</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Wireless Sensor Networks for Military and Defense Applications” at <strong>NATO-ARW</strong> in <em>Romania</em> on <em>Sept. 2006</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Multimedia Communication in Wireless Sensor Networks” at <strong>IEEE ISCN 2006</strong> in <em>Istanbul Turkey</em> on <em>June 2006</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> has receives <strong>TUBITAK-Career Award</strong>, <em>The Scientific & Technological Research Council of Turkey</em>, <em>2005</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Correlation-based Communication in Wireless Sensor Networks” at <strong>IEEE Communication Society-TR Chapter Distinguished Seminer</strong> in <em>Istanbul Turkey</em> on <em>June 2005</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives an invited talk on “Wireless Sensor Networks and Applications” at <strong>ASELSAN Inc.</strong> in <em>Ankara Turkey</em> on <em>Jan. 2005</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>
        <div class="news-item">
            <div class="news-text">
                <p><strong>Prof. Akan</strong> gives a tutorial on “Wireless Sensor Networks: State-of-the-art and Research Challenges” at <strong>IFIP TC6 NET-CON 2004</strong> in <em>Palma de Mallorca Spain</em> on <em>Nov. 2004</em>.</p>
            </div>
            <div class="thumb"></div>
        </div>

    </div>
</div>