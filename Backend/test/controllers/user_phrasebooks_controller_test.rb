require 'test_helper'

class UserPhrasebooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_phrasebook = user_phrasebooks(:one)
  end

  test "should get index" do
    get user_phrasebooks_url, as: :json
    assert_response :success
  end

  test "should create user_phrasebook" do
    assert_difference('UserPhrasebook.count') do
      post user_phrasebooks_url, params: { user_phrasebook: { phrasebook_id: @user_phrasebook.phrasebook_id, user_id: @user_phrasebook.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_phrasebook" do
    get user_phrasebook_url(@user_phrasebook), as: :json
    assert_response :success
  end

  test "should update user_phrasebook" do
    patch user_phrasebook_url(@user_phrasebook), params: { user_phrasebook: { phrasebook_id: @user_phrasebook.phrasebook_id, user_id: @user_phrasebook.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_phrasebook" do
    assert_difference('UserPhrasebook.count', -1) do
      delete user_phrasebook_url(@user_phrasebook), as: :json
    end

    assert_response 204
  end
end
