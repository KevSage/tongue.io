require 'test_helper'

class UserNationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_nation = user_nations(:one)
  end

  test "should get index" do
    get user_nations_url, as: :json
    assert_response :success
  end

  test "should create user_nation" do
    assert_difference('UserNation.count') do
      post user_nations_url, params: { user_nation: { nation_id: @user_nation.nation_id, user_id: @user_nation.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_nation" do
    get user_nation_url(@user_nation), as: :json
    assert_response :success
  end

  test "should update user_nation" do
    patch user_nation_url(@user_nation), params: { user_nation: { nation_id: @user_nation.nation_id, user_id: @user_nation.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_nation" do
    assert_difference('UserNation.count', -1) do
      delete user_nation_url(@user_nation), as: :json
    end

    assert_response 204
  end
end
