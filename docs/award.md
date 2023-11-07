---
permalink: /award.html
title: 日本地図学会　表彰実績
bodyclass: award
---

# 表彰実績
地図学の理論構築と普及、地図・空間情報などに関する技術の向上に尽力された個人や法人、団体を表彰しています。論文賞、論文奨励賞、野村正七地図賞、作品・出版賞、教育普及賞、功労賞、特別賞といった多様な評価軸で、毎年１回選定し、受賞理由も含めてこちらにアーカイブしております。
{:.heading-text}

<div class="top-section">
  <h2>学会賞</h2>
  <div class="award-heading">
    <h3>第17回（令和5年度）受賞結果</h3>
    <p>※受賞者の所属は、受賞当時のものとします。</p>
  </div>
  <div class="award-list">
    {% assign jcacjaward_count = 0 %}
    {% for post in site.posts %}
      {% if post.categories[0] == 'jcacjaward' %}
      {% if post.categories[1] == '17th' %}
      {% if jcacjaward_count < 3 %}
      {% assign jcacjaward_count = jcacjaward_count|plus:1 %}
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
      {% endif %}
    {% endfor %}
  </div>
  <div class="back-to-top">
    <a href="{{'/jcacjaward.html' | relative_url}}">VIEW MORE</a>
  </div>
</div>

<!--
<div class="top-section">
  <h2>名誉会員</h2>
  <div class="award-heading">
    <h3>第16回（令和4年度）受賞結果</h3>
    <p>※受賞者の所属は、受賞当時のものとします。</p>
  </div>
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
  <div class="back-to-top">
    <a href="{{'/honorarymemberaward.html' | relative_url}}">VIEW MORE</a>
  </div>
</div>
-->

<div class="top-section">
  <h2>地図展優秀地図</h2>
  <div class="award-heading">
    <h3>第11回（平成30年度）優秀賞</h3>
  </div>
  <div class="award-list">
    {% for post in site.posts %}
      {% if post.categories[0] == 'mapaward' %}
      {% if post.categories[1] == 'mapaward-11' %}
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
  <div class="back-to-top">
    <a href="{{'/mapaward.html' | relative_url}}">VIEW MORE</a>
  </div>
</div>

<div class="top-section">
  <h2>瀬戸玲子基金<small>女性のための地図振興支援助成事業</small></h2>
  <div class="sr-row">
    <div class="sr-text">
      故・瀬戸玲子氏のご遺志を反映し、日本地図学会では女性研究者等の地位向上を目的に、女性会員を対象とした地図に関する研究や事業等への資金助成を行う「瀬戸玲子基金・女性のための地図振興支援助成事業」を2022年度からスタートしました。<br>
      支援対象は地図学研究、地図を中心とした地理学研究に加え、地図を活用したビジネス事業化、地図を担う女性の地位向上に資するイベントなども含みます。<br>
      女性の日本地図学会会員であれば、誰でも応募できます。<br>
      1件の支援金額は最大100万円です。（支援件数、年間予算などを考慮して、支援金額は申請額より減額することがあります）<br>
    </div>
    <div class="sr-image"><img src="{{ site.baseurl }}/assets/img/main/img_setoreiko.jpg" class="w-100" alt=""></div>
  </div>
  <!--
  <div class="back-to-top">
    <a href="{{'/setoreiko-fund.html' | relative_url}}">VIEW MORE</a>
  </div>
  -->
</div>

