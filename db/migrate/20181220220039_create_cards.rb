class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.text :question
      t.text :answer
      t.integer :dollar_value
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
