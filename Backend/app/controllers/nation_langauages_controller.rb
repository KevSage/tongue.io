class NationLangauagesController < ApplicationController
  before_action :set_nation_langauage, only: [:show, :update, :destroy]

  # GET /nation_langauages
  def index
    @nation_langauages = NationLangauage.all

    render json: @nation_langauages
  end

  # GET /nation_langauages/1
  def show
    render json: @nation_langauage, :include => {:nations}
  end

  # POST /nation_langauages
  def create
    @nation_langauage = NationLangauage.new(nation_langauage_params)

    if @nation_langauage.save
      render json: @nation_langauage, status: :created, location: @nation_langauage
    else
      render json: @nation_langauage.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /nation_langauages/1
  def update
    if @nation_langauage.update(nation_langauage_params)
      render json: @nation_langauage
    else
      render json: @nation_langauage.errors, status: :unprocessable_entity
    end
  end

  # DELETE /nation_langauages/1
  def destroy
    @nation_langauage.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nation_langauage
      @nation_langauage = NationLangauage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def nation_langauage_params
      params.require(:nation_langauage).permit(:nation_id, :langauge_id)
    end
end
