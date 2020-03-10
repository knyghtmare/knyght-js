// Data Types
{
    string: "string of text",
    int: 405,
    double: 3.565,
    boolean: true, // false
    array: [1, 2, 3],
    object: {attr1: "attr1", attr2: "attr2"},
    date: new Date("<YYYY-mm-dd>"),
    object_id: <ObjectId>,
    no_value: null
}

/* Additional data types

timestamps
binary Data
regular expressions
JS code

*/

// all information goes into a collection

/* CRUD

C -> Create
R -> Read
U -> Update
D -> Delete

*/

// inserting

db.students.insertOne({
      name : "Majed",
      major : "EE",
      gpa: 4.00,
      awards: ["Valedictorian", "Summa Cum Laude"]
})

db.students.insertMany([
    {name: "Shawon", major: "EE", gpa: 3.00},
    {name: "Nayeem", major: "BBA", gpa: 3.20}
])

// finding records

db.students.find({})

db.students.find({major : "EE"}, {_id: 0})

db.students.find({major : "EE", name : "Mahnaz"}, {_id: 0})

// or

db.students.find(
    {$or: [
      {major: "Chemistry"}, {major: "ENV Studies"}
          ]},
    {_id : 0})

// comparisons

db.students.find({ gpa: {$gt: 3.50} }, {_id: 0}).sort({gpa : -1})

// won't return the id field
db.students.find({}, {_id: 0})

// limit results

db.students.find({}, {_id: 0}).limit(3)

// sorting

db.students.find({}, {_id: 0}).sort({name : 1})

db.students.find({}, {_id: 0}).sort({gpa: -1, name : 1})

// updating and deleting

// updating
db.students.updateOne(
    {major: "ENV Studies"},
    {
      $set:
          {major : "ENV"}
    }
)

db.students.updateMany(
    {major: "EE"},
    {
      $set:
          {major : "EEE"}
    }
)

// replace
db.students.replaceOne()

// delete
db.students.deleteOne()
db.students.deleteMany()

//  bulk actions

db.students.bulkWrite(
      [
         { insertOne :
            {
               "document" :
               {
                  name: "Andrew", major: "Architecture", gpa: 3.2
               }
            }
         },
         { insertOne :
            {
               "document" :
               {
                  name: "Terry", major: "Math", gpa: 3.8
               }
            }
         },
         { updateOne :
            {
               filter : { name : "Terry" },
               update : { $set : { gpa : 4.0 } }
            }
         },
         { deleteOne :
            { filter : { name : "Kate"} }
         },
         { replaceOne :
            {
               filter : { name : "Claire" },
               replacement : { name: "Genny", major: "Counsling", gpa: 2.4 }
            }
         }
    ],
    {ordered: false}
   );

// text indexing

db.stores.insertMany(
   [
     { _id: 1, name: "Java Hut", description: "Coffee and cakes" },
     { _id: 2, name: "Burger Buns", description: "Gourmet hamburgers" },
     { _id: 3, name: "Coffee Shop", description: "Just coffee" },
     { _id: 4, name: "Clothes Clothes Clothes", description: "Discount clothing" },
     { _id: 5, name: "Java Shopping", description: "Indonesian goods" }
   ]
)

db.stores.createIndex( { name: "text", description: "text" } )

db.stores.find({ $text: {$search: "Coffee" } })

db.stores.find({ $text: {$search: "Java Hut Coffee" } })

db.stores.find(
   { $text: { $search: "java hut coffee" } },
   // ranks in order of closest to search term
   { score: { $meta: "textScore" } }
).sort( { score: { $meta: "textScore" } } )

// aggregation

db.purchase_orders.insertMany(
     [
          {product: "toothbrush", total: 4.75, customer: "Mike"},
          {product: "guitar", total: 199.99, customer: "Tom"},
          {product: "milk", total: 11.33, customer: "Mike"},
          {product: "pizza", total: 8.50, customer: "Karen"},
          {product: "toothbrush", total: 4.75, customer: "Karen"},
          {product: "pizza", total: 4.75, customer: "Dave"},
          {product: "toothbrush", total: 4.75, customer: "Mike"}
     ]
)

// find out how many toothbrushes were sold
db.purchase_orders.count({product: "toothbrush"})

// Find list of all products sold
db.purchase_orders.distinct("product")

// Find the total amount of money spent by each customer
db.purchase_orders.aggregate(
     [
          {$match: {} },
          {$group: {_id: "$customer", total: { $sum: "$total"} } }
     ]
)

// Find how much has been spent on each product and sort it by price
db.purchase_orders.aggregate(
     [
          {$match: {} },
          {$group: {_id: "$product", total: { $sum: "$total"} } },
          {$sort: {total: -1}}
     ]
)

// Find how much money each customer has spent on toothbrushes and pizza
db.purchase_orders.aggregate(
     [
          {$match: {product: {$in: ["toothbrush", "pizza"]} } },
          {$group: {_id: "$product", total: { $sum: "$total"} } },
     ]
)

// https://docs.mongodb.com/manual/reference/operator/aggregation/
// Show the list of all pipeline operators
