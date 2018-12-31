class Api::CardsController < ApplicationController
  before_action :set_category, except: [:index]
  before_action :set_card, only: [:show, :update, :destroy]

  def index
    render json: Card.all
  end

  def show
    render json: @card
  end

  def create
    card = @category.cards.new(card_params)
    if card.save
      render json: card
    else
      render json: card.errors, status: 422
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors, status: 422
    end
  end

  def destroy
    @card.destroy
  end

  private
  def set_card
    @card = Card.find(params[:id])
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def card_params
    params.require(:card).permit(:question, :answer, :dollar_value, :accepted_answers)
  end
end
