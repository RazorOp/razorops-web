module Jekyll
  module CategoryFilter
    def related_posts_by_category(post, posts)
      # Get the categories of the current post
      current_categories = post['categories']
      
      # Select posts that share at least one category with the current post, excluding the current post itself
      related_posts = posts.select do |p|
        p != post && (p['categories'] & current_categories).any?
      end
      
      # Return the related posts
      related_posts
    end
  end
end

Liquid::Template.register_filter(Jekyll::CategoryFilter)
