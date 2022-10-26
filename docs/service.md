---
permalink: /service.html
title: サービス
bodyclass: service
---

# サービス
サービス詳細の概要を記載。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキス
{:.heading-text}

<div class="top-section">
  <h2>機関誌 「地図」 －空間表現の科学－</h2>
  <p class="heading-text">概要テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
  <div class="top-menus">
    <div class="menu-box">
      <div class="menu-box-inner">
        <div class="menu-title">最新号目次</div>
        <div class="menu-text">最新号及び、J-STAGEに掲載されていないバックナンバーの目次を掲載してます。</div>
        <div class="menu-button">
          <div class="d-grid">
            <a href="{{'/latestjournal.html' | relative_url}}" class="btn btn-default btn-arrow-right">目次ページ</a>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-box">
      <div class="menu-box-inner">
        <div class="menu-title">電子ジャーナル</div>
        <div class="menu-text">バックナンバーを電子ジャーナルとして公開しております。</div>
        <div class="menu-button">
          <div class="d-grid">
            <a href="https://www.jstage.jst.go.jp/browse/jjca/-char/ja" target="_blank" class="btn btn-default btn-arrow-right">J-STAGEサイト</a>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-box">
      <div class="menu-box-inner">
        <div class="menu-title">添付地図目録</div>
        <div class="menu-text">機関誌「地図」に添付された地図の目録を掲載しております。</div>
        <div class="menu-button">
          <div class="d-grid">
            <a href="{{'/attachedmaps.html' | relative_url}}" class="btn btn-default btn-arrow-right">添付地図ページ</a>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-box">
      <div class="menu-box-inner">
        <div class="menu-title">投稿規定</div>
        <div class="menu-text">機関誌「地図」に添付された地図の目録を掲載しております。</div>
        <ul class="menu-links">
          <li data-parent-active>・<span class="text">投稿規程</span><a href="{{'/archive/file/journal/toukoukitei.pdf' | relative_url}}"><span class="icon-pdf"></span></a></li>
          <li data-parent-active>・<span class="text">投稿原稿送付状</span><a href="{{'/archive/file/journal/soufuzyou.pdf' | relative_url}}"><span class="icon-pdf"></span></a><a href="{{'/archive/file/journal/soufuzyou.doc' | relative_url}}"><span class="icon-doc"></span></a></li>
          <li data-parent-active>・<span class="text">投稿原稿執筆の手引き</span><a href="{{'/archive/file/journal/genkou_tebiki.pdf' | relative_url}}"><span class="icon-pdf"></span></a><a href="{{'/archive/file/journal/genkou_tebiki.docx' | relative_url}}"><span class="icon-doc"></span></a></li>
          <li data-parent-active>・<span class="text">投稿のひな型</span><a href="{{'/archive/file/journal/toukou_hinagata.pdf' | relative_url}}"><span class="icon-pdf"></span></a><a href="{{'/archive/file/journal/toukou_hinagata.docx' | relative_url}}"><span class="icon-doc"></span></a></li>
          <li data-parent-active>・<span class="text">編集作業の流れ</span><a href="{{'/archive/file/journal/flow.pdf' | relative_url}}"><span class="icon-pdf"></span></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="d-grid col-md-16 mx-auto my-5">
    <a href="{{'journal.html' | relative_url}}" class="btn btn-default btn-lg btn-arrow-right">機関誌に関する告知</a>
  </div>
</div>


<div class="top-section">
  <h2>インタビュー</h2>
  <ul class="interview-list colomun-3">
    {% for post in site.posts %}
      {% if post.categories.first == 'movie' %}
      {% if post.categories[1] == 'interview' %}
      <li>
        <a href="{{ post.movie }}" target="_blank">
          <div class="thumb"><img src="{{ site.baseurl }}{{ post.thumbnail }}" class="w-100" alt=""></div>
          <div class="title">{{ post.title }}</div>
        </a>
      </li>
      {% endif %}
      {% endif %}
    {% endfor %}
  </ul>
  <div class="back-to-top">
    <a href="{{'/interview.html' | relative_url}}">VIEW MORE</a>
  </div>
</div>


<div class="top-section">
  <h2>みんなの自然災害伝承</h2>
  <p class="heading-text">概要テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
  <div class="back-to-top">
    <a href="{{'/monumento.html' | relative_url}}">VIEW MORE</a>
  </div>
</div>


<div class="top-section">
  <h2>日本地図学会 GitHubラボ</h2>
  <p class="heading-text">概要テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
  <div class="button-discord">
    <a href="https://discord.gg/MEVck7H"><img src="{{ site.baseurl }}/assets/img/main/btn_discord.svg" class="w-100" alt=""></a>
  </div>
</div>
