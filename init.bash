# sequelize model:generate --name owners --attributes firstName:string,lastName:string,email:string,password:integer
# sequelize model:generate --name dogs --attributes dogName:string,ownerID:integer,zipcode:integer,breed:string,age:integer,fixed:boolean,description:string,faveToy:string,faveGame:string,faveTreat:string,energy:string,size:string,imageURL:string
# sequelize model:generate --name messages --attributes dogID:integer,message:string,timestamp:date
# npx babel routes/registration.js --out-file compiled-file.js