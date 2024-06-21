module Jekyll
  module CategorySortFilter
    def sort_and_group_categories(posts)
      # Create a hash to store categories and their posts
      categories = Hash.new { |hash, key| hash[key] = [] }
      
      # Iterate through posts and group them by category
      posts.each do |post|
        post['categories'].each do |category|
          categories[category] << post
        end
      end
      
      # Sort the categories alphabetically
      sorted_categories = categories.keys.sort
      
      # Return sorted categories with nested posts
      sorted_categories.map { |category| { 'name' => category, 'posts' => categories[category] } }
    end
  end
end

Liquid::Template.register_filter(Jekyll::CategorySortFilter)
