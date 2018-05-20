/* 1-
~ db  => get the data base you have
~ use testdb => to create and access the db under name 'testdb'
~ db.dropDatabase()  => this will delete the data base you are working on
~ db.table1.insert() => this will create a table "collection" under the name of '`' and add json data into it
~ show collections => this will show us all tables "collections" we have in the given db
~ db.table1.find() => this will find all json info inside this table "collection"
~ db.table1.find().pretty() => this will find all JSON info inside this table "collection" and present it in JSON format
~ db.table1.findOne() => this will find only one json info inside this table "collection" / the first one
~ db.table1.findOne().pretty() => this will find only one json info inside this table "collection" / the first one and present it in JSON format
~ db.table1.remove({"_id": ObjectId("3428034820ojow024234234")}) => this will delete a intry from this table according to its ID
~ db.table1.remove("name":"ahmad") => this will delete a intry from this table according to its name

~ db.table1.update({"_id": ObjectId("3428034820ojow024234234")},
  {
    "userid": 37459,
    "balance": "$3,467.07",
    "age": 30,
    "eyeColor": "brown",
    "name": "Maura Nelson",
    "gender": "female",
    "company": "APPLIDECK",
    "email": "mauranelson@applideck.com",
    "phone": "+1 (960) 438-3066",
    "registered": "2014-04-13T04:04:11 -02:00"
  }

) => this will update a single entry/ the updated information is inside the {}

~db.table1.drop() =>  this will delete the whole table1 "collection"

~ db.table1.find("name":"Ahmad") => this will find all json info inside this table "collection" under name and spacificlly Ahmad
~ db.table1.findOne("name":"Ahmad") => this will find all json info inside this table "collection" under name and spacificlly Ahmad but the FIRST OUTPUT only

~ db.table1.find(
{"name":"Ahmad", 'age':'23'} 
) => this will find all json info inside this table "collection" under name and spacificlly 'Ahmad' and age 23

~ db.table1.find(
{
    $or:
    [
      {"name":"Ahmad"},
      {'eyecolor':'black'}
    ]
}
) => this will find all json info inside this table1 "collection" under name and spacificlly 'Ahmad' and with condition 'eyecolor:black'


~ db.table1.find(
{
    $or:
    [
      { "age":{$gte:30} },
      {'eyecolor':'black'}
    ]
}
) => this will find all json info inside this table1 "collection" with these conditions age=>30 and eyecolor:black

//similar you can use 
$gt: greater than
$lt: less than 
$lte: less than or equal 

~ db.table1.find(
    { "gender": "female"}
    { "name": 1, _id:0}
)
=> this will return the all data that include gender=femele and will show only name and not id . this is because we set the name to 1 "i.e true" and the id to 0 "false"


~ db.table1.find(
    { "gender": "female"}
    { "name": 1, _id:0}
).limit(3)
=> this will return the all data that include gender=femele and will show only name and not id . this is because we set the name to 1 "i.e true" and the id to 0 "false"
and only the first 3 records.

// if we chose .skip(3) instead of .limit(3) this will return skip the first three entries and show the rest.


//adding indexing to the table:
to add index to any entry so the search will be too much faster you need to add the code below:
~ db.table1.ensureIndex({'email':1}) //:1 means set it to true and always _id is indexed too.
~ db.table1.getIndexes()  // this will show all indexed objects
~ db.table1.dropIndex({'email':1}) // this will remove the index from the object


// Aggregated functions: this will group out the search result 
~ db.table1.aggregate({
    $group :{
        _id : "$eyecolor",
        total : {$sum :1}
    }
}) 
// this will group according to the eyecolor and sum them: the output will be:
                                    {"_id" : "Green", "total" : 14}// the mumber of people with Green eyes are 14
                                    {"_id" : "Brown", "total" : 10}// the mumber of people with Brown eyes are 10
                                    {"_id" : "Blue", "total" : 4}// the mumber of people with Blue eyes are 4


~ db.table1.aggregate({
    $group :{
        _id : "$gender",
        avgAge : {$avg :"$age"}
    }
})
// this will group according to the gender and give the average of age of each gender
// you can change to $max or $min too instead of $avg