class Api::QuestionController < ApplicationController
  before_action :set_category
  before_action :set_question, only: [:show, :update, :destroy]

  def index
    render json: @category.question.all
  end

  def show
    render json: @question
  end

  def create
    question = @category.question.new(question_params)
    if question.save
      render json: question
    else
      render json: question.errors, status: 422
    end
  end

  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: 422
    end
  end

  def destroy
    @question.destroy
  end

  private
  def set_question
    @question = Question.find(params[:id])
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def question_params
    params.require(:question).permit(:question, :answer, :dollar_value)
  end
end
