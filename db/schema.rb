# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140712141656) do

  create_table "admins", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "admins", ["email"], name: "index_admins_on_email", unique: true
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true

  create_table "cart_items", force: true do |t|
    t.integer  "quantity"
    t.integer  "cart_id"
    t.integer  "product_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "cart_items", ["cart_id"], name: "index_cart_items_on_cart_id"
  add_index "cart_items", ["product_id"], name: "index_cart_items_on_product_id"

  create_table "carts", force: true do |t|
    t.integer  "client_info_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "carts", ["client_info_id"], name: "index_carts_on_client_info_id"

  create_table "client_infos", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.integer  "phone"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.integer  "zip"
    t.integer  "client_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "client_infos", ["client_id"], name: "index_client_infos_on_client_id"

  create_table "clients", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "clients", ["email"], name: "index_clients_on_email", unique: true
  add_index "clients", ["reset_password_token"], name: "index_clients_on_reset_password_token", unique: true

  create_table "products", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
