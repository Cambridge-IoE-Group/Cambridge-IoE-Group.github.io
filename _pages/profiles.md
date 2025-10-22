---
layout: profiles
permalink: /people/
title: people
description: Members of the IoE Group
nav: true
nav_order: 4

profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: right
    image: prof_pic.jpg
    content: people/about_prof_akan.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Prof. Ozgur Baris Akan, IEEE Fellow</p>
      <p>Principal Investigator of IoE Group</p>

  - align: left
    image: haofan.jpg
    content: people/about_haofan.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Haofan Dong</p>
      <p>Third-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: hongbin.jpg
    content: people/about_hongbin.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Hongbin Ni</p>
      <p>Third-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: zhengyang.jpg
    content: people/about_zhengyang.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Zhengyang Zhang</p>
      <p>Third-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: shaojie.jpg
    content: people/about_shaojie.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Shaojie Zhang</p>
      <p>Second-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: tansel.jpg
    content: people/about_tansel.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Osman Tansel Baydas</p>
      <p>Second-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: sila.jpg
    content: people/about_sila.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Ayse Sila Okcu</p>
      <p>Second-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: tiff.jpg
    content: people/about_tianfu.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Houtianfu Wang</p>
      <p>Second-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: hanlin.png
    content: people/about_hanlin.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Hanlin Cai</p>
      <p>First-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: melih.jpg
    content: people/about_melih.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Melih Sahin</p>
      <p>First-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: fati.jpg
    content: people/about_fatih.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Fatih Efe Bilgen</p>
      <p>First-year PhD Student, University of Cambridge, UK</p>

  - align: left
    image: dilara.jpg
    content: people/about_koc_dilara.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Dilara Aktas	</p>
      <p>Final-year PhD Student, Koç University, Turkey</p>

  - align: left
    image: ahmet.jpg
    content: people/about_koc_ahmet.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Ahmet Burak Kilic</p>
      <p>Final-year Master's Student, Koç University, Turkey</p>

  - align: left
    image: fatihmerdan.jpeg
    content: people/about_koc_fatih.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Fatih Merdan</p>
      <p>Final-year Master's Student, Koç University, Turkey</p>
# add new member here
---



<style>
/* === 统一所有头像尺寸（命中 layout: profiles 的结构）=== */
.profile img.img-fluid {
  width: 320px !important;
  height: 320px !important;
  object-fit: cover;
  border-radius: 8px;   /* 如果想要圆形头像可改成 50% */
  display: block;
  margin: 0 auto;
}

/* 小屏自适应 */
@media (max-width: 576px) {
  .profile img.img-fluid {
    width: 250px !important;
    height: 250px !important;
  }
}
</style>



<!-- ===== Alumni (one-line with dotted leaders) ===== -->
<style>
  /* 局部样式，仅作用于本页 */
  .alumni { list-style: none; margin: 1.5rem 0; padding: 0; }
  .alumni li { display: flex; align-items: baseline; gap: .6rem; }
  .alumni .name { white-space: nowrap; }
  /* 领点（dot leaders） */
  .alumni .dots {
    flex: 1 1 auto;
    border-bottom: 1px dotted var(--global-divider-color);
    transform: translateY(-0.25em); /* 让点线更贴近文本中线 */
  }
  .alumni .meta {
    white-space: nowrap;
    color: var(--global-text-color-light);
    font-variant-numeric: tabular-nums; /* 年份等宽对齐更稳 */
  }
  @media (max-width: 576px) {
    /* 小屏保底：必要时换行，但尽量保留点线 */
    .alumni li { flex-wrap: wrap; }
    .alumni .dots { min-width: 40px; flex: 1 1 100px; }
  }
</style>






<h2 id="alumni">Alumni</h2>

<ul class="alumni">
  <li><span class="name">Dr. Beyza Ezgi Örtlek</span><span class="dots"></span><span class="meta">Ph.D., 2025</span></li>
  <li><span class="name">Hilal Esra Yaldiz</span><span class="dots"></span><span class="meta">M.Sc., 2025</span></li>
  <li><span class="name">Melih Şahin</span><span class="dots"></span><span class="meta">M.Sc., 2025</span></li>
  <li><span class="name">Fatih Efe Bilgen</span><span class="dots"></span><span class="meta">M.Sc., 2025</span></li>
  <li><span class="name">Dr. Meltem Civas</span><span class="dots"></span><span class="meta">Ph.D., 2024</span></li>
  <li><span class="name">Dr. Caglar Koca</span><span class="dots"></span><span class="meta">Ph.D., 2024</span></li>
  <li><span class="name">Dr. Tooba Khan</span><span class="dots"></span><span class="meta">Ph.D., 2022</span></li>
  <li><span class="name">Nafi Ahmet Turgut</span><span class="dots"></span><span class="meta">M.Sc., 2022</span></li>
  <li><span class="name">Dr. Muharrem Arik</span><span class="dots"></span><span class="meta">Ph.D., 2019</span></li>
  <li><span class="name">Dr. Naveed Ahmed Abbasi</span><span class="dots"></span><span class="meta">Ph.D., 2018</span></li>
  <li><span class="name">Dr. Turker Yilmaz</span><span class="dots"></span><span class="meta">Ph.D., 2018</span></li>
  <li><span class="name">Dr. Hamideh Ramezani</span><span class="dots"></span><span class="meta">Ph.D., 2018</span></li>
  <li><span class="name">Dr. Oktay Cetinkaya</span><span class="dots"></span><span class="meta">Ph.D., 2018</span></li>
  <li><span class="name">Dr. Ecehan B. Pehlivanoglu</span><span class="dots"></span><span class="meta">Ph.D., 2018</span></li>
  <li><span class="name">Dr. Bilgesu A. Bilgin</span><span class="dots"></span><span class="meta">PostDoc, 2017</span></li>
  <li><span class="name">Dr. Murat Kuscu</span><span class="dots"></span><span class="meta">Ph.D., 2017</span></li>
  <li><span class="name">Dr. Mustafa Ozger</span><span class="dots"></span><span class="meta">Ph.D., 2017</span></li>
  <li><span class="name">Dr. Ergin Dinc</span><span class="dots"></span><span class="meta">Ph.D., 2016</span></li>
  <li><span class="name">Dr. Ozgur Ergul</span><span class="dots"></span><span class="meta">Ph.D., 2015</span></li>
  <li><span class="name">Kardelen Cepni</span><span class="dots"></span><span class="meta">M.Sc., 2015</span></li>
  <li><span class="name">Orkhan Badirkhanli</span><span class="dots"></span><span class="meta">M.Sc., 2014</span></li>
  <li><span class="name">Bige Deniz Unluturk</span><span class="dots"></span><span class="meta">M.Sc., 2013</span></li>
  <li><span class="name">Deniz Kilinc</span><span class="dots"></span><span class="meta">M.Sc., 2013</span></li>
  <li><span class="name">Derya Malak</span><span class="dots"></span><span class="meta">M.Sc., 2013</span></li>
  <li><span class="name">Dr. Burhan Gulbahar</span><span class="dots"></span><span class="meta">Ph.D., 2012</span></li>
  <li><span class="name">Dr. Ghalib A. Shah</span><span class="dots"></span><span class="meta">PostDoc, 2012</span></li>
  <li><span class="name">Murat Kocaoglu</span><span class="dots"></span><span class="meta">M.Sc., 2012</span></li>
  <li><span class="name">Ahmet Ozan Bicen</span><span class="dots"></span><span class="meta">M.Sc., 2012</span></li>
  <li><span class="name">Dr. Baris Atakan</span><span class="dots"></span><span class="meta">Ph.D., 2011</span></li>
  <li><span class="name">Mert Can Oto</span><span class="dots"></span><span class="meta">M.Sc., 2011</span></li>
  <li><span class="name">Eren Balevi</span><span class="dots"></span><span class="meta">M.Sc., 2010</span></li>
  <li><span class="name">Ertan Gul</span><span class="dots"></span><span class="meta">M.Sc., 2010</span></li>
  <li><span class="name">Gokhan Isbitiren</span><span class="dots"></span><span class="meta">M.Sc., 2009</span></li>
  <li><span class="name">Muharrem Arik</span><span class="dots"></span><span class="meta">M.Sc., 2008</span></li>
  <li><span class="name">Ibrahim Karaaslan</span><span class="dots"></span><span class="meta">M.Sc., 2008</span></li>
  <li><span class="name">Mehmet Talha Isik</span><span class="dots"></span><span class="meta">M.Sc., 2007</span></li>
  <li><span class="name">Orhan Ayran</span><span class="dots"></span><span class="meta">M.Sc., 2007</span></li>
  <li><span class="name">Mehmet Yagli</span><span class="dots"></span><span class="meta">M.Sc., 2006</span></li>
</ul>