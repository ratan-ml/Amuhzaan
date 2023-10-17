# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


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

# Electronics
electronics1 = Product.create(
    name: "FMotorola Moto G Stylus 5G | 2021 | 2-Day Battery | Unlocked | Made for US 4/128GB | 48MP Camera | Cosmic Emerald",
    feature: [
        "Carrier Compatibility: AT&T (4G, VoLTE), Verizon (5G sub6 NSA, VoLTE), T-Mobile (5G sub6 SA/NSA, VoLTE, WiFi Calling, Video Calling), Tracfone (GSM, CDMA), Spectrum (5G sub6 NSA, VoLTE, WiFi Calling). Not supported: U.S. Cellular, Republic Wireless, Xfinity Wireless.",
        "Performance: Powered by Qualcomm Snapdragon 480 5G processor for ultra-fast 5G speed, streaming, and downloads.",
        "Built-in Stylus: Perfect for navigation, highlighting, editing, and precise tasks. Use it for jotting notes, editing photos, sketching, and controlling apps and games.",
        "48MP Quad Camera: Capture sharper and brighter 12MP photos, even in low-light conditions, with the 48MP Quad Camera System.",
        "Battery Life and Storage: Up to two days of battery life with a 5000mAh battery. Enjoy 128GB of built-in storage and expand up to 1TB with a microSD card."
    ],
    description: "The Moto G Stylus 5G is a versatile smartphone that combines powerful performance and creative flexibility. With blazing-fast 5G connectivity, a built-in stylus for precise tasks, a 48MP Quad Camera for stunning photos, and extended battery life, it's your go-to device for work and play. Enjoy the expansive 6.8\" Full HD+ display, ample storage, and water-repellent design. Stay connected with carrier compatibility, and unleash your productivity and creativity with this feature-packed phone.",
    category: "electronics",
    price: 145.11,
)

electronics2 = Product.create(
    name: "SAMSUNG Galaxy A54 5G A Series Cell Phone, Factory Unlocked Android Smartphone, 128GB w/ 6.4” Fluid Display Screen, Hi Res Camera, Long Battery Life, Refined Design, US Version, 2023, Awesome Black",
    feature: [
        "CRISP DETAIL, CLEAR DISPLAY: Enjoy binge-watching on a clear, 6.4\" screen* that provides a smooth entertainment experience; Scroll through social feeds and watch action-packed movies, catching all the details you need on your Galaxy A54 5G",
        "PRO SHOTS WITH EASE: Brilliant sunrises, awesome selfies — capture incredible content with Galaxy A54 5G; Snap clear images with Single Take** and OIS, and even take shots in low light with Nightography",
        "CHARGE UP AND CHARGE ON: Always be ready for an impromptu photo op or newly released video with a powerful battery that has your back; With a long-lasting, Super Fast Charging*** 5,000mAh battery, Galaxy A54 5G keeps you up and running",
        "POWERFUL 5G PERFORMANCE: Do what you love most — play games, watch movies or post photos — at the speed of life with Galaxy A54 5G; Our best of Galaxy A Series powers your day with an impressive processor and virtually lag-free 5G****",
        "NEW LOOK, ADDED DURABILITY: Galaxy A54 5G is stylish and strong; Redesigned and refined, the best of our Galaxy A Series has a sleek, triple-lens design and front and back Gorilla Glass 5 that resists spills and dust*****"
    ],
    description: "The Galaxy A54 5G is your perfect entertainment companion, featuring a clear 6.4-inch screen for immersive viewing. Capture stunning photos and selfies with ease using Single Take and OIS, even in low-light conditions. Stay powered up and ready for impromptu photo opportunities with its long-lasting, fast-charging 5,000mAh battery. Enjoy lag-free 5G performance for gaming, streaming, and more with a powerful processor. With a stylish, durable design and robust security features, the Galaxy A54 5G is the ideal choice for your on-the-go lifestyle. Plus, you'll have ample room for all your memories and files with expandable storage of up to 1TB.",
    category: "electronics",
    price: 409.99,
)

electronics3 = Product.create(
    name: "HP Newest 14\" Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 8GB RAM, 192GB Storage(64GB eMMC+128GB Micro SD), 1 Year Office 365, Webcam, HDMI, WiFi, USB-A&C, Win 11 S",
    feature: [
        "14\" HD Display: Enjoy a 14.0-inch diagonal, HD (1366 x 768) micro-edge BrightView display with virtually no bezels for an ultra-wide viewing experience.",
        "Processor & Graphics: Powered by an Intel Celeron N4120 processor with 4 cores, 4 threads, and Intel UHD Graphics 600 for reliable multitasking.",
        "RAM & Storage: Equipped with 8GB of high-bandwidth DDR4 memory for smooth multitasking and 64GB high-speed eMMC storage for your office and webinar needs.",
        "Ports: Offers a variety of ports, including USB 3.1 Type-C, USB 3.1 Type-A, HDMI, and a headphone/microphone combo jack, along with a microSD slot.",
        "Windows 11 Home in S mode: Easily switch to regular Windows 11 for a more versatile computing experience."
    ],
    description: "The 14\" HD laptop is designed to enhance your computing experience. With its expansive HD display featuring micro-edge BrightView and minimal bezels, you'll enjoy an immersive viewing experience. Powered by the Intel Celeron N4120 processor and Intel UHD Graphics 600, this laptop offers reliable performance for multitasking. It comes with 8GB of high-bandwidth DDR4 memory for smooth operation and 64GB of high-speed eMMC storage to meet your office and webinar needs. With a variety of ports and the option to switch to regular Windows 11 from Windows 11 Home in S mode, this laptop is versatile and practical for various computing tasks.",
    category: "electronics",
    price: 299.99,
)


puts "Done!"
