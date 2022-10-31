---
permalink: /mapaward.html
layout: under_award
title: 日本地図学会　地図展優秀地図選定
bodyclass: award
contests:
  - 第11回（平成30年度）優秀賞 #8
  - 第10回（平成29年度）優秀賞 #7
  - 第9回（平成28年度）優秀賞 #6
  - 第8回（平成27年度）優秀賞 #5
  - 第7回（平成26年度）優秀賞 #4
  - 第7回（平成26年度）惜しくも、受賞をのがした作品 #3
  - 第6回（平成25年度）優秀賞 #2
  - 第6回（平成25年度）惜しくも、受賞をのがした作品 #1
map_contests: [
# ['category_name', 'main_title', has_submaps, has_corp, 'sub_category_name', 'sub_title', 'corp_title', 'corp_text']
  ['mapaward-11', '第11回（平成30年度）優秀賞', false, false],
  ['mapaward-10', '第10回（平成29年度）優秀賞', false, false],
  ['mapaward-9', '第9回（平成28年度）優秀賞', false, false],
  ['mapaward-8', '第8回（平成27年度）優秀賞', false, false],
  ['mapaward-7', '第7回（平成26年度）優秀賞', true, true, 'mapaward-7-2', '惜しくも、受賞をのがした作品', '平成26年度定期大会　地図・図書展示　出展機関・企業', '１．朝日航洋(株)　　２．海上保安庁海洋情報部　　３．(株)グローバルプランニング ４．国土地図(株)　　５．国土地理院　　<br>　　６．(株)古今書院 ７．（株）ゼンリン８．地図工房トンビの目　　９．(一財)地図情報センター 10．東京カートグラフィック(株)　　11．(株)東京地図研究社　　12．(一財)日本水路協会 <br>13．(一財)日本地図センター　　14．北海道地図(株)'],
  ['mapaward-6', '第6回（平成25年度）優秀賞', true, true, 'mapaward-6-2', '惜しくも、受賞をのがした作品', '平成25年度定期大会　地図・図書展示　出展機関・企業', '１．地図工房トンビの目　　２．北海道地図(株)　　３．(株)古今書院 ４．(株)グローバルプランニング　　５．(株)ゼンリン　<br>　６．東京カートグラフィック(株)７．海上保安庁 海洋情報部　　８．国土交通省 国土地理院　　９．(一財)日本水路協会 　　10．(一財)地図情報センター'],
]
---

# 地図展優秀地図選定
「地図展優秀地図」とは？<br>日本地図学会定期大会では、毎年「地図・図書展」を開催しております。本学会において、「定期大会地図・図書展に出展された地図の中から優秀地図を選定・表彰することで地図展への関心を高めるとともに、質の高い地図を発掘し、ICC（国際地図学会）の国際地図展への出展を推薦すること」が議論されました。これを受け、平成20年度定期大会から、日本の地図作製技術向上の一助になることを願い、「優秀地図の表彰」を実施しています。<br>表彰は、定期大会に参加した会員により、地図・図書展示会場において、「地図作製の企画及び作製技術に優れている」と認められる地図（試作品を含む紙地図を対象）を３点選定し、投票する形で行われています。<br>なお、「地図展優秀地図選定」の運営は、日本地図学会マップセンター委員会が中心となって実施しており、毎年、出展希望の機関・企業から広く募集しております。定期大会地図・図書展に関するお問い合せは、学会事務局までお願いいたします。
{:.heading-text}

{% for contest in page.map_contests %}
<div class="top-section">
  <h2>{{contest[1]}}</h2>
  <div class="award-list award-list-{{contest[0]}}">
    {% for post in site.posts %}
      {% if post.categories[0] == 'mapaward' %}
      {% if post.categories[1] == contest[0] %}
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
  {% if contest[2] %}
  <h3>{{contest[5]}}</h3>
  <div class="award-list award-list-{{contest[4]}}">
    {% for post in site.posts %}
      {% if post.categories[0] == 'mapaward' %}
      {% if post.categories[1] == contest[4] %}
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
  {% endif %}
  {% if contest[2] %}
  <h3>{{contest[6]}}</h3>
  <div class="corp-text">{{contest[7]}}</div>
  {% endif %}
</div>
{% endfor %}