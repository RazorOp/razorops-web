describe 'sample', type: :feature, js: true do
  it 'has the page title' do
    visit '/'
    # `binding.pry` is useful for crafting the right selector
    # or checking the actual state of the page
    # binding.pry # test will pause here
    expect(find('.btn-banner-primary').text).to eq('Schedule Demo')
  end
end
