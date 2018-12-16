require 'test_helper'

class SightseeningsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sightseenings_index_url
    assert_response :success
  end

  test "should get show" do
    get sightseenings_show_url
    assert_response :success
  end

  test "should get new" do
    get sightseenings_new_url
    assert_response :success
  end

  test "should get edit" do
    get sightseenings_edit_url
    assert_response :success
  end

end
