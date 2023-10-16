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
    User.create!({
        name: 'demo',
        email: 'demo@user.io', 
        password: 'password'
    })
    puts "creating more users"
    # More users
    User.create!({
        name: 'demo2',
        email: 'demo2@user.io', 
        password: 'password'
    })
    puts "creating more users"

    puts "creating product"


    10.times do
        Product.create!({
            name: Faker::Book.title,
            feature: [
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6)],
            description: Faker::Lorem.paragraph(sentence_count: 6),
            price: Faker::Commerce.price(range: 9.99..24.99),
            category: 'electronics'
        })
    end

    10.times do
        Product.create!({
            name: Faker::Book.title,
            feature: [
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6)],
            description: Faker::Lorem.paragraph(sentence_count: 6),
            price: Faker::Commerce.price(range: 9.99..24.99),
            category: 'clothing'
        })
    end

    10.times do
        Product.create!({
            name: Faker::Book.title,
            feature: [
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6)],
            description: Faker::Lorem.paragraph(sentence_count: 6),
            price: Faker::Commerce.price(range: 9.99..24.99),
            category: 'home'
        })
    end

    10.times do
        Product.create!({
            name: Faker::Book.title,
            feature: [
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6)],
            description: Faker::Lorem.paragraph(sentence_count: 6),
            price: Faker::Commerce.price(range: 9.99..24.99),
            category: 'books'
        })
    end

    10.times do
        Product.create!({
            name: Faker::Book.title,
            feature: [
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6),
                Faker::Lorem.paragraph(sentence_count: 6)],
            description: Faker::Lorem.paragraph(sentence_count: 6),
            price: Faker::Commerce.price(range: 9.99..24.99),
            category: 'sports'
        })
    end


    # test_subj = Product.create(
    #     name: 'Test Product', 
    #     description: 'Test Description.', 
    #     price: 1.99, 
    #     category: 'test')

    puts "Done!"
# end