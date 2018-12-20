# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Place.destroy_all
kingdom = Place.create(name: "mall", description: " bla bla blabla bla bla bla ", location: "Riyad", image: "", duration: 2)
edge = Place.create(name: "edge of the world", description: "Something", duration: 5.5)
diriyah = Place.create(name: "Diriyah", description: "Something", duration: 2.5)
heet = Place.create(name: "Heet Cave", description: "Something", duration: 3)
