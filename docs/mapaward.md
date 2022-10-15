---
permalink: /mapaward.html
layout: under_award
title: 地図展優秀地図選定
bodyclass: award
contests:
  - 第11回（平成30年度）
  - 第10回（平成29年度）
  - 第9回（平成28年度）
  - 第8回（平成27年度）
  - 第7回（平成26年度）
  - 第6回（平成25年度）
  - 第5回（平成24年度）
  - 第4回（平成23年度）
  - 第3回（平成22年度）
  - 第2回（平成21年度）
  - 第1回（平成20年度）
---

# 地図展優秀地図選定
「地図展優秀地図」とは？<br>日本地図学会定期大会では、毎年「地図・図書展」を開催しております。本学会において、「定期大会地図・図書展に出展された地図の中から優秀地図を選定・表彰することで地図展への関心を高めるとともに、質の高い地図を発掘し、ICC（国際地図学会）の国際地図展への出展を推薦すること」が議論されました。これを受け、平成20年度定期大会から、日本の地図作製技術向上の一助になることを願い、「優秀地図の表彰」を実施しています。<br>表彰は、定期大会に参加した会員により、地図・図書展示会場において、「地図作製の企画及び作製技術に優れている」と認められる地図（試作品を含む紙地図を対象）を３点選定し、投票する形で行われています。<br>なお、「地図展優秀地図選定」の運営は、日本地図学会マップセンター委員会が中心となって実施しており、毎年、出展希望の機関・企業から広く募集しております。定期大会地図・図書展に関するお問い合せは、学会事務局までお願いいたします。
{:.heading-text}

{% for contest in page.contests %}
{% assign mapaward_num = forloop.index|minus:page.contests.size|abs|plus:1 %}
{% assign mapaward_cat = 'mapaward-'|append:mapaward_num %}
<div class="top-section">
  <h2>{{contest}}優秀賞</h2>
  <div class="award-list">
    {% for post in site.posts %}
      {% if post.categories[0] == 'mapaward' %}
      {% if post.categories[1] == mapaward_cat %}
      <div class="list-box">
        <div class="list-box-inner">
          <div class="box-map-title">{{post.title}}</div>
          <div class="box-map-image"><img src="{{ site.baseurl }}{{ post.thumbnail }}" alt=""></div>
          <div class="box-map-text">{{post.text}}</div>
        </div>
      </div>
      {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</div>
{% endfor %}