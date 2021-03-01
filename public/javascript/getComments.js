function getComments(){
    //creating an object so i can start to make requests
    var xhr = new XMLHttpRequest();
    //this is a method of the XMLHttprequest class
    //it expects the type of request and the end point
    xhr.open('GET','https://us-central1-nicolesapp-16d15.cloudfunctions.net/getcomments');
    //when the server responds to this method the below is calles
    //track the stats changes of the request
    xhr.onreadystatechange=function(){
        var DONE = 4; //signifies the request is done
        var OK = 200; //statis 200 means it succesfully returned
        //check everything went ok with this particular object
        if(xhr.readyState==DONE){
            if(xhr.status==OK){
                //then start to manipulate the DOM
                var sHTML="";
                //take out the input from the response text
                //Json object has a built in parse function that takes out the string of text
                //sent by the user and creates an object array of this string
                var data = JSON.parse(xhr.responseText);
                //go over all the comments in the array created above from the string of all
                //text comments created
                for(var i =0;i<data.length;i++){
                    sHTML+="<p> Handle: "+data[i].handle+"</p>";
                    sHTML+="<p> Comment: "+data[i].comment+"</p>";
                    sHTML += "<button onclick=deleteComment(" + "'" + data[i].id + "'" + ")>Delete Comment </button>";
                }

                //may have to change this back
                document.getElementById("comments").innerHTML=sHTML;
            }
            else{
                console.log('Error: '+xhr.status); //some error happened
            }
        }
    }
    //
    xhr.send(null);
}
//invoke getComments every minute
setInterval(getComments,60000);