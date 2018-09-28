source 'https://rubygems.org'

gem "rake"
ruby "2.5.0"

# Happy Jekylling!
gem 'jekyll', '~> 3.8.3'
gem 'jekyll-seo-tag'
gem 'minima', '~> 2.0'
gem 'puma'
gem 'rubocop', '~> 0.58.2', require: false

gem 'jekyll-admin', group: :jekyll_plugins
gem 'sinatra'
gem "sinatra-cross_origin", "~> 0.3.1"
gem 'json'

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-feed', '~> 0.6'
end

group :development, :test do
  gem 'pry'
  gem 'rack'
  gem 'rack-jekyll'
  gem 'rspec'
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
end
