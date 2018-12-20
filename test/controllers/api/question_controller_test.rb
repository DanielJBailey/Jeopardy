require 'test_helper'

class Api::QuestionControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_question_index_url
    assert_response :success
  end

  test "should get show" do
    get api_question_show_url
    assert_response :success
  end

  test "should get create" do
    get api_question_create_url
    assert_response :success
  end

  test "should get update" do
    get api_question_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_question_destroy_url
    assert_response :success
  end

end
