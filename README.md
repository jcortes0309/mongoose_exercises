# Mongoose Exercises

## Basic Schema

1. Construct a Mongoose model for a programming language that contains a name, website, date it first appeared, programming paradigms, typing discipline, inventors, the date of the current release, and the names of other languages it was influenced by.

2. Construct a Mongoose model for an album that looks like this:

```
{
  name: 'Lush Life',
  artist: 'John Coltrane',
  released: new Date('1961-01-01'),
  tracks: [
    {
      name: 'Like Someone in Love',
      songWriters: ['Jimmy Van Heusen'],
      duration: 300
    },
    {
      name: 'I Love You',
      songWriters: ['Cole Porter'],
      duration: 333
    },
    {
      name: 'Trane\'s Slo Blues,
      songWriters: ['John Coltrane'],
      duration: 365
    },
    {
      name: 'Lush Life',
      songWriters: ['Billy Strayhorn'],
      duration: 840
    },
    {
      name: 'I Hear a Rhapsody',
      songWriters: ['Jack Baker', 'George Fragos', 'Dick Gasparre'],
      duration: 361
    }
  ],
  personnel: [
    {
      name: 'John Coltrane',
      instrument: 'Tenor saxophone'
    },
    {
      name: 'Art Taylor',
      instrument: 'Drums'
    },
    {
      name: 'Paul Chambers',
      instrument: 'Bass'
    },
    {
      name: 'Donald Byrd',
      instrument: 'Trumpet'
    }
  ]
}
```


## Basic CRUD (Create, Retrieve, Update, Delete)

1. Using the programming language model you made in the first section, write a Node program to create a programming language in the DB.
2. Write a program to find all programming languages in the collection.
3. Write a program to find a programming language by its name.
4. Write a program to update a programming language's website URL.
5. Write a program to find a programming language by its name, then print out its object ID.


## Validation

Add data validation to the programming language model. Making:

* name required
* date first appeared required
* an inventor's name is required
* at least one inventor is required (this will require some research :)
* Try saving an object that doesn't meet the requirements. Do you get an error? Print out the detailed validation errors.
* Save an object that does meet the requirements.
