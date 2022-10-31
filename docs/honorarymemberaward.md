---
permalink: /honorarymemberaward.html
layout: under_award
title: 名誉会員
bodyclass: award
---

# 名誉会員
名誉会員についての詳細を記載。詳細テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
{:.heading-text}

<div class="top-section">
  <h2>第16回（令和4年度）受賞結果</h2>
  <p class="heading-text">※受賞者の所属は、受賞当時のものとします。</p>
  <div class="award-list">
    {% for post in site.posts %}
      {% if post.categories[0] == 'honorarymembers' %}
      {% if post.categories[1] == '16th' %}
      <div class="list-box">
        <a href="{{ post.url | relative_url }}" class="list-box-inner">
          <div class="box-icon"><img src="{{ site.baseurl }}{{ post.thumbnail }}" class="w-100" alt=""></div>
          <div class="box-title">{{ post.title }}</div>
          <div class="box-members">
            {% for member in post.members %}
            {{ member }}<br>
            {% endfor %}
          </div>
        </a>
      </div>
      {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="top-section">
  <h2>第15回（令和3年度）受賞結果</h2>
  <p class="heading-text">※受賞者の所属は、受賞当時のものとします。</p>
  <div class="award-list">
    {% for post in site.posts %}
      {% if post.categories[0] == 'honorarymembers' %}
      {% if post.categories[1] == '15th' %}
      <div class="list-box">
        <a href="{{ post.url | relative_url }}" class="list-box-inner">
          <div class="box-icon"><img src="{{ site.baseurl }}{{ post.thumbnail }}" class="w-100" alt=""></div>
          <div class="box-title">{{ post.title }}</div>
          <div class="box-members">
            {% for member in post.members %}
            {{ member }}<br>
            {% endfor %}
          </div>
        </a>
      </div>
      {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="top-section">
  <h2>第15回（令和3年度）受賞結果</h2>
  <p class="heading-text">※受賞者の所属は、受賞当時のものとします。　※ 第15回（令和3年度）該当なし。</p>
  <div class="award-list">
    {% for post in site.posts %}
      {% if post.categories[0] == 'honorarymembers' %}
      {% if post.categories[1] == '15th' %}
      <div class="list-box">
        <a href="{{ post.url | relative_url }}" class="list-box-inner">
          <div class="box-icon"><img src="{{ site.baseurl }}{{ post.thumbnail }}" class="w-100" alt=""></div>
          <div class="box-title">{{ post.title }}</div>
          <div class="box-members">
            {% for member in post.members %}
            {{ member }}<br>
            {% endfor %}
          </div>
        </a>
      </div>
      {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</div>