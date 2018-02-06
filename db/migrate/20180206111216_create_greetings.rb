class CreateGreetings < ActiveRecord::Migration[5.1]
  def change
    create_table :greetings do |t|
      t.text :message

      t.timestamps
    end
  end
end
