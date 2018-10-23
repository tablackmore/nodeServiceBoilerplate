# Boilerplate node webservice

A simple webservice for getting creating and deleting items.

##  Install and start

```bash
npm install
npm run start
```

## http interface

http://localchost:8081/items [get] - returns all items

http://localchost:8081/items [post] - {json body} - adds an item and returns the id of the item created

http://localchost:8081/items/:id [get] - returns the item with a given id

http://localchost:8081/items/:id [delete] - deletes the item with a given id

