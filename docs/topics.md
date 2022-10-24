---
permalink: /topics.html
title: TOPICS
bodyclass: topics
---

# TOPICS
日本地図学会からの公式情報はこちらです。公式ブログである <a href="https://note.com/jcacj" target="_blank">note</a> にも、関連する話題などが掲載されておりますので併せてご利用ください。
{:.heading-text}

<div class="topics-list">
{% for post in site.posts %}
  {% if post.categories.first == 'tournament' or post.categories.first == 'event' or post.categories.first == 'conference' or post.categories.first == 'official' %}
  <a href="{{post.url | relative_url}}" class="topics">
    <div class="t-img"><img src="{{ site.baseurl }}{{post.thumbnail}}" alt="" class="w-100"></div>
    <div class="t-info">
      <span class="t-date">{{post.date | date: "%Y.%m.%d"}}</span>
      {% for tag in post.tags %}
      <span class="t-tag">{{tag}}</span>
      {% endfor %}
    </div>
    <div class="t-val">
      <p class="name">{{post.title}}</p>
      <p>{{post.description}}</p>
    </div>
  </a>
  {% endif %}
{% endfor %}
</div>