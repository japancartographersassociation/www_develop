---
title: トップページ
---



<h2>カテゴリ・tournament抽出</h2>
<ul>
  {% for post in site.posts %}
    {% if post.categories.first == 'tournament' %}
    <li>
      <div><b>サムネイル(thumbnail):</b> <img src="{{ post.thumbnail }}" style="width:100px;" alt=""></div>
      <div><b>日付(date):</b> {{ post.date | date: "%y/%m/%d" }}</div>
      <div><b>カテゴリー(tags):</b> [{{ post.tags.first }}]</div>
      <div><b>タイトル(title):</b> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
      <div><b>要約文(description):</b> {{ post.description }}</div>
    </li>
    {% endif %}
  {% endfor %}
</ul>


<h2>カテゴリ・jcacjaward抽出</h2>
<ul>
  {% for post in site.posts %}
    {% if post.categories.first == 'jcacjaward' %}
    <li>
      <div><b>アイコン(thumbnail):</b> <img src="{{ post.thumbnail }}" style="width:100px;" alt=""></div>
      <div><b>賞名(title):</b> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
      <div>
        <b>受賞者名(members):</b> <br>
        {% for member in post.members %}
        {{ member }}<br>
        {% endfor %}
      </div>
    </li>
    {% endif %}
  {% endfor %}
</ul>


<h2>カテゴリ・honorarymembers抽出</h2>
<ul>
  {% for post in site.posts %}
    {% if post.categories.first == 'honorarymembers' %}
    <li>
      <div><b>アイコン(thumbnail):</b> <img src="{{ post.thumbnail }}" style="width:100px;" alt=""></div>
      <div><b>賞名(title):</b> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
      <div>
        <b>受賞者名(members):</b> <br>
        {% for member in post.members %}
        {{ member }}<br>
        {% endfor %}
      </div>
    </li>
    {% endif %}
  {% endfor %}
</ul>
