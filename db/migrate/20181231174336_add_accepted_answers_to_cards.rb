class AddAcceptedAnswersToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :accepted_answers, :text
  end
end
