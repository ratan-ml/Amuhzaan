# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Product.destroy_all
    User.destroy_all


    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    
    puts "Creating demo user..."
    User.create!(
        name: 'demo',
        email: 'demo@user.io', 
        password: 'password'
    )
    puts "creating more users"
    # More users
    10.times do 
        User.create!({
            name: Faker::Name.name,
            email: Faker::Internet.unique.email,
            password: 'password'
        }) 
    end
    puts "creating product"
    10.times do
        Product.create!({
            name: Faker::Book.title,
            description: Faker::Lorem.paragraph(sentence_count: 6),
            price: Faker::Commerce.price(range: 9.99..24.99),
            category: 'test'
        })
    end

    10.times do
        Product.create!({
            name: Faker::Book.title,
            description: Faker::Lorem.paragraph(sentence_count: 6),
            price: Faker::Commerce.price(range: 9.99..24.99),
            category: 'test2'
        })
    end

    10.times do
        Product.create!({
            name: Faker::Book.title,
            description: Faker::Lorem.paragraph(sentence_count: 6),
            price: Faker::Commerce.price(range: 9.99..24.99),
            category: 'test3'
        })
    end


    # test_subj = Product.create(
    #     name: 'Test Product', 
    #     description: 'Test Description.', 
    #     price: 1.99, 
    #     category: 'test')

    puts "Done!"
# end