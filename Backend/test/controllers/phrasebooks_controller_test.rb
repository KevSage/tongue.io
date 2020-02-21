require 'test_helper'

class PhrasebooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @phrasebook = phrasebooks(:one)
  end

  test "should get index" do
    get phrasebooks_url, as: :json
    assert_response :success
  end

  test "should create phrasebook" do
    assert_difference('Phrasebook.count') do
      post phrasebooks_url, params: { phrasebook: { average_score: @phrasebook.average_score, language_id: @phrasebook.language_id, user_id: @phrasebook.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show phrasebook" do
    get phrasebook_url(@phrasebook), as: :json
    assert_response :success
  end

  test "should update phrasebook" do
    patch phrasebook_url(@phrasebook), params: { phrasebook: { average_score: @phrasebook.average_score, language_id: @phrasebook.language_id, user_id: @phrasebook.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy phrasebook" do
    assert_difference('Phrasebook.count', -1) do
      delete phrasebook_url(@phrasebook), as: :json
    end

    assert_response 204
  end
end
