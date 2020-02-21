require 'test_helper'

class NationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @nation = nations(:one)
  end

  test "should get index" do
    get nations_url, as: :json
    assert_response :success
  end

  test "should create nation" do
    assert_difference('Nation.count') do
      post nations_url, params: { nation: { capital: @nation.capital, currency: @nation.currency, currency_code: @nation.currency_code, currency_symbol: @nation.currency_symbol, flag: @nation.flag, language_id: @nation.language_id, name: @nation.name, population: @nation.population, region: @nation.region } }, as: :json
    end

    assert_response 201
  end

  test "should show nation" do
    get nation_url(@nation), as: :json
    assert_response :success
  end

  test "should update nation" do
    patch nation_url(@nation), params: { nation: { capital: @nation.capital, currency: @nation.currency, currency_code: @nation.currency_code, currency_symbol: @nation.currency_symbol, flag: @nation.flag, language_id: @nation.language_id, name: @nation.name, population: @nation.population, region: @nation.region } }, as: :json
    assert_response 200
  end

  test "should destroy nation" do
    assert_difference('Nation.count', -1) do
      delete nation_url(@nation), as: :json
    end

    assert_response 204
  end
end
