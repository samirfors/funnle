class CreatePicks < ActiveRecord::Migration
  def change
    create_table :picks do |t|
      t.string :url
      t.references :user, index: true

      t.timestamps
    end
  end
end
