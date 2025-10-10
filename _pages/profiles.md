---
layout: profiles
permalink: /people/
title: people
description: Members of the Cambridge IoE Group
nav: true
nav_order: 1

profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: right
    image: prof_pic.jpg
    content: people/about_prof_akan.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Room 113, CAPE Building, Electrical Engineering Division</p>
      <p>Department of Engineering, University of Cambridge,</p>
      <p>9, JJ Thomson Avenue, Cambridge, CB3 0FA</p>
      
  - align: left
    image: prof_pic.jpg
    content: people/about_haofan.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: people/about_hongbin.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: people/about_zhengyang.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: people/about_shaojie.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: people/about_tansel.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: people/about_slia.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: people/about_tianfu.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: hanlin.png
    content: people/about_hanlin.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: people/about_melih.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: people/about_fatih.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
---


<style>
/* 基准：教授头像尺寸（随便改一个数，其他成员自动=3/4） */
:root { --prof-avatar: 220px; }

/* 假设 profiles 布局把每个人渲染为一个 .profile 容器，并在其中放 <img> 头像。*/
.profile:first-of-type img {
  width:  var(--prof-avatar);
  height: var(--prof-avatar);
  object-fit: cover;
}

/* 除教授外的所有成员：3/4 尺寸 */
.profile:not(:first-of-type) img {
  width:  calc(var(--prof-avatar) * 0.75);
  height: calc(var(--prof-avatar) * 0.75);
  object-fit: cover;
}

/* 可选：小屏再缩一点 */
@media (max-width: 576px) {
  .profile:first-of-type img {
    width:  calc(var(--prof-avatar) * 0.85);
    height: calc(var(--prof-avatar) * 0.85);
  }
  .profile:not(:first-of-type) img {
    width:  calc(var(--prof-avatar) * 0.75 * 0.85);
    height: calc(var(--prof-avatar) * 0.75 * 0.85);
  }
}
</style>
