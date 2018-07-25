describe "sample", type: :feature, js: true do
  it "has the page title" do
    visit '/'
    # `binding.pry` is useful for crafting the right selector
    # or checking the actual state of the page
    # binding.pry # test will pause here
    expect(find('.post-hero__title').text).to eq('Continuous delivery simplified on kubernetes')
  end
end
