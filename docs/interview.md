---
permalink: /interview.html
layout: under_service
title: インタビュー
bodyclass: service
---


## インタビュー
インタビュー詳細（動画）についてのページ<br>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
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