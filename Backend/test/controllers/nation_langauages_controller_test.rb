require 'test_helper'

class NationLangauagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @nation_langauage = nation_langauages(:one)
  end

  test "should get index" do
    get nation_langauages_url, as: :json
    assert_response :success
  end

  test "should create nation_langauage" do
    assert_difference('NationLangauage.count') do
      post nation_langauages_url, params: { nation_langauage: { langauge_id: @nation_langauage.langauge_id, nation_id: @nation_langauage.nation_id } }, as: :json
    end

    assert_response 201
  end

  test "should show nation_langauage" do
    get nation_langauage_url(@nation_langauage), as: :json
    assert_response :success
  end

  test "should update nation_langauage" do
    patch nation_langauage_url(@nation_langauage), params: { nation_langauage: { langauge_id: @nation_langauage.langauge_id, nation_id: @nation_langauage.nation_id } }, as: :json
    assert_response 200
  end

  test "should destroy nation_langauage" do
    assert_difference('NationLangauage.count', -1) do
      delete nation_langauage_url(@nation_langauage), as: :json
    end

    assert_response 204
  end
end
