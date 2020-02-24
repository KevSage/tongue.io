# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_23_170016) do

  create_table "entries", force: :cascade do |t|
    t.integer "phrasebook_id", null: false
    t.integer "phrase_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["phrase_id"], name: "index_entries_on_phrase_id"
    t.index ["phrasebook_id"], name: "index_entries_on_phrasebook_id"
  end

  create_table "languages", force: :cascade do |t|
    t.string "name"
    t.string "abbr"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "nation_langauages", force: :cascade do |t|
    t.integer "nation_id", null: false
    t.integer "langauge_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["langauge_id"], name: "index_nation_langauages_on_langauge_id"
    t.index ["nation_id"], name: "index_nation_langauages_on_nation_id"
  end

  create_table "nations", force: :cascade do |t|
    t.string "name"
    t.string "capital"
    t.string "region"
    t.integer "population"
    t.string "currency"
    t.string "currency_code"
    t.string "currency_symbol"
    t.integer "language_id"
    t.string "flag"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["language_id"], name: "index_nations_on_language_id"
  end

  create_table "phrasebooks", force: :cascade do |t|
    t.integer "language_id", null: false
    t.integer "average_score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.index ["language_id"], name: "index_phrasebooks_on_language_id"
  end

  create_table "phrases", force: :cascade do |t|
    t.string "category"
    t.string "input"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_nations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "nation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nation_id"], name: "index_user_nations_on_nation_id"
    t.index ["user_id"], name: "index_user_nations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "nation_id"
    t.string "avatar"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "entries", "phrasebooks"
  add_foreign_key "entries", "phrases"
  add_foreign_key "nation_langauages", "langauges"
  add_foreign_key "nation_langauages", "nations"
  add_foreign_key "phrasebooks", "languages"
  add_foreign_key "user_nations", "nations"
  add_foreign_key "user_nations", "users"
end
