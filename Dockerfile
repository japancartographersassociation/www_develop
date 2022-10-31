FROM jekyll/jekyll:latest
ENV PAGES_REPO_NWO dev-lockup/www_develop_lockupdev
RUN gem install webrick