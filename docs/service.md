---
permalink: /service.html
title: サービス
bodyclass: service
---

# サービス
日本地図学会が提供している様々なサービスの一覧です。機関誌「地図」の他、名誉会員のインタビュー動画や防災委員会による「みんなの自然災害伝承碑アーカイブ」など、学会員と社会に役に立つサービス提供を継続しております。
{:.heading-text}

<div class="top-section" data-hash-target="#Journal-of-the-Japan-Cartographers-Association">
  <h2>機関誌 「地図」 －空間表現の科学－</h2>
  <p class="heading-text">「地図」(Journal of the Japan Cartographers Association)は日本地図学会の機関誌で、原則として年4回発行する本学会の機関サービスです。この機関誌「地図」は、日本地図学会会則第4条に記されている本学会の目的「地図学に関する研究の連絡、 提携を図ることにより、地図学の理論の構築と普及および地図・空間情報などに関する技術の向上に資するとともに、これらの応用および地図教育などの発展に寄与し、もって地図学の発達、普及を推進すること」にふさわしい論文等のほか、 学会員に対する情報提供のための記事を掲載するもので、 地図学におけるわが国の代表的な学術誌として、1963年の創刊以来継続して刊行しております。</p>
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
  <h2>みんなの自然災害伝承碑</h2>
  <p class="heading-text">2020年より、日本国土地理院が各市区町村経由で収集し、地理院地図で地図上に公開されている<a href="https://www.gsi.go.jp/bousaichiri/denshouhi.html" target="_blank">自然災害伝承碑</a>の情報収集を市民参加型で行うための、地図情報収集プラットフォームです。このサービスは <a href="https://monumen.to/" target="_blank">Monumen.to</a> をベースに、先人による自然災害の様子や教訓を石碑やモニュメントに刻み、後世の私たちに遺してくれた、その貴重な情報をデジタルアーカイブすることで、まだアーカイブされていない自然災害伝承碑情報を補完していきます。</p>
  <div class="back-to-top">
    <a href="{{'/monumento.html' | relative_url}}">VIEW MORE</a>
  </div>
</div>


<div class="top-section">
  <h2>日本地図学会 GitHubラボ</h2>
  <p class="heading-text">広報・IT委員会を中心に、日本地図学会の新サービスや実験的なプロダクトを GitHub 上でテストしています。原則、誰でも参画可能なオープンリポジトリとして公開していますので、興味のある方はぜひ Pull Request や Fork など自由に Contribute いただければ幸いです。</p>
  <div class="button-discord">
    <a href="https://discord.gg/MEVck7H"><img src="{{ site.baseurl }}/assets/img/main/btn_discord.svg" class="w-100" alt=""></a>
  </div>
</div>
