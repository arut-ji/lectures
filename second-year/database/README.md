# SQL and NoSQL Database comparison

This is an assignment on the subject; Information Systems and Databases. In this assignment, 
Firebase Cloud Firestore is selected to be compared with SQL database.

## Introduction to Cloud Firestore

### Firebase Cloud Firestore
According to Cloud Firestore documentation site, it is a flexible, scalable database for mobile, web and 
server development from Google's Firebase and Google Cloud Platform (GCP). Moreover, the Cloud Firestore
provides syncing functionality to client apps through real-time listeners and as well as offers offline support
for mobile and web apps.

In fact, Cloud Firestore is actually a service which allows developers to perform rapid application development.
Instead of an actual 3-tier application development, Cloud Firestore binds the server-sided service with database. So, 
developers could use Firestore as an API service in accessing data via either Firestore Client SDK or Firestore Admin SDK.  

## Get started with Cloud Firestore
When developing any application with Firestore, there are some few steps those are required as a prerequisite.
### 1. Create a Cloud Firestore project on Firebase console.
Since Firestore is one of Firebase products, developers have to create a Firebase project to use Firestore.
This can be done on [Firebase console](https://console.firebase.google.com). 
### 2. Set up development environment
Firestore provides several SDK on many languages so developer may choose the one that they are familiar with.
But in this particular example, we'll illustrate the Firestore usage with a the javascript SDK for web.
### 3. Initialize a Cloud Firestore instance.
When using Firestore in the app, an instance of Firestore has to be created. This step can be done by
the following code-fragment.

```javascript
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

const db = firebase.firestore();
```

## Cloud Firestore Data Model
Before illustrating comparisons features between SQL approach and Firestore, we would like to show 
how data in Firestore are structured.

Cloud Firestore is a NoSQL, document-oriented database. Instead of storing data in the tabular-manner, 
data are actually be kept in **_documents_** which are also be organized into **_collections_**.

### Documents
In SQL, a row of a table represents a fact with predefined-integrity. In contrast, Cloud Firestore represents
a fact in the form of documents. In each document, it is contained with fields which map to values and can be 
considered as attributes. Moreover, each document can be identified by its name and the name of each document
in the same collection has to be unique.

For example, a document representing the fact of a president **Trumann H S** shall be looked like this.

![President "Trumann H S" document](./assets/document-structure.png)

From the example, a document is similar structured like a JSON (Javascript Object Notation) record.
In fact, it is but with a few differences. In development, it can be treated as a JSON object.

### Collections
For Cloud Firestore, a collection acts like a container for documents to live in. It is similar to tables
in SQL which contains facts. Since the Cloud Firestore is schemaless, document format can be different 
even they are in the same collection but using the same structure for documents which are contained in the same collection
is suggested in order to perform easier document querying.

## Features Comparison
In the next topic, we will be discussing on Cloud Firestore features in compare with SQL features.
These following topics will be focused.

- Selecting all or particular columns from one table
- Selecting specified rows from on a table [todo]
- Built-in functions [todo]
- Calculations [todo]
- The grouping feature [todo]
- Selecting columns and rows from several tables [todo]
- Subqueries [todo]
- Use more than one copy of a table [todo] 
- Correlated subqueries [todo]
- Subqueries with testing for existence [todo]
- Views [todo]

Basically when performing queries in Cloud Firestore, a reference to the specific a document or a collection
has to be identified. Then, we use a identified-reference to query. 

### Selecting all or particular columns from one table
For querying all attributes from documents, it can be done easily.

```javascript
//Create a reference to the "president" collection 
const presidentRef = db.collection("president")

//Perform documents query
const query = presidentRef.get()
```

For querying with Firestore, it cannot select particular columns in the documents. It has to be done 
in the application logical business. 

```javascript
//Create a reference to the "president" collection
const presidentRef = db.collection("president")

//Perform documents query
const query = presidentRef.get()

//Filter the required-attributes from each document using Javascript
const result = query.then( (snapshot) => {
    return snapshot.map(document => {
        const data = document.data()
        return {
            id: document.id,
            data: {
                'pres_name': data['pres_name'],
                'birth_year': data['birth_year']
            }
        }
    })
})
```

For ``ORDER BY`` feature in SQL, it can be done in Cloud Firestore as in this example.

```javascript
//Create a reference to the "president" collection
const presidentRef = db.collection("president")

//Perform documents query with "order by" in ascending order 
const query = presidentRef.orderBy('pres_name').get()

//Perform documents query with "order by" in descending order 
const query = presidentRef.orderBy('pres_name', 'desc').get()
```

### Selecting specified rows from one a table
In Cloud Firestore manner, it would be said as selecting specified document from a collection.
For operations which are using in Firestore query, those are similar to operations in SQL.
These following operations are supported:

- equal to (==)
- greater than or equal to (>=)
- less than or equal to(<=) 
- greater then (>)
- less than (>)

But in contrast, Firestore doesn't support ``OR`` logical operation. When the ``AND`` logical operation
is needed, it can be done using this following code-snippet as well as ``LIKE`` operation, it is not yet 
support.

```javascript
//Create a reference to "president" collection
const presidentRef = db.collection("president")

//Perform documents query with "where" clause
const query = presidentRef
                    .where("state_born","==","Missouri")
                    .where("death_age","<=","80")
```
