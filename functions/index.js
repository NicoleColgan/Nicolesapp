const functions = require('firebase-functions');
const admin = require('firebase-admin');
//import cors library to say your happy to accept anny origin
const cors = require('cors')({origin: true});
admin.initializeApp();

exports.postcomment = functions.https.onRequest((request, response) =>
{
  //1. receive comment in here from user POST request
  // 2. connect to our firestore database
  cors(request,response,() => {
    const currentTime = admin.firestore.Timestamp.now();
    request.body.timestamp = currentTime;
  return admin.firestore().collection('comment').add(request.body).then(()=>{
    response.send("Saved in the database");
  });
})});

exports.getcomments = functions.https.onRequest((request, response) =>
{
// now to send the info back to the user
// 1. CONNECT TO FIRESTORE DATABASE
  //connect to our firestore database
  cors(request,response,() => {
let myData = []
    //changed comment to comments here
    //order by defaults to ascending order
return admin.firestore().collection('comment').orderBy("timestamp","desc").get().then((
    snapshot) => {

  if (snapshot.empty) {
    console.log('No matching documents');
    response.send('No data in database');
    return;
  }
  snapshot.forEach(doc =>{
    //add an id attribute to each data point
    let docObj={}; //empty array
    docObj.id=doc.id;
    myData.push(Object.assign(docObj,doc.data())); //merging them together
  });
  // 2. SEND DATA BACK TO CLIENT
  response.send(myData);
    })
})});
exports.deleteComment = functions.https.onRequest((request,response)=>{
  cors(request,response,()=>{
    //your function body goes here
    admin.firestore().collection('comment').doc(request.query.id).delete().then(function()
    {
      response.send("Document successfully deleted");
    })
  });
});