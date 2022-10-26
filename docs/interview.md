---
permalink: /interview.html
layout: under_service
title: インタビュー
bodyclass: service
---


## インタビュー
1963年の日本地図学会創立より、地図学の理論構築と普及、地図・空間情報などに関する技術の向上に尽力されてきた学会員の方々にインタビューを行っております。主に名誉会員の方々に2022年より若手会員が中心となって撮影チームが巡回しておりますので、ご協力をどうぞよろしくお願いいたします。
{:.heading-text}

<ul class="interview-list">
  {% for post in site.posts %}
    {% if post.categories.first == 'movie' %}
    {% if post.categories[1] == 'interview' %}
    <li>
      <a href="{{ post.movie }}" target="_blank">
        <div class="thumb"><img src="{{ site.baseurl }}{{ post.thumbnail }}" class="w-100" alt=""></div>
        <div class="title">{{ post.title }}</div>
        <div class="text">{{ post.text }}</div>
      </a>
    </li>
    {% endif %}
    {% endif %}
  {% endfor %}
</ul>