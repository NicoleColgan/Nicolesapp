function deleteComment(id){
    console.log("Deleting comment");
    var xhr= new XMLHttpRequest();
    var url="https://us-central1-nicolesapp-16d15.cloudfunctions.net/deleteComment"+
        "?id="+id;
    xhr.open('DELETE',url);
    //track state changes of the request
    xhr.onreadystatechange=function (){
        var DONE = 4;
        var OK=200;
        if (xhr.readyState===DONE){
            if(xhr.status===OK){
                //if comment deleted succesfully
                //call getComments to refresh page
                console.log(xhr.responseText);
                getComments();
            }
            else {
                console.log('Error: '+xhr.status);
            }
        }
    };
    xhr.send(null);
}
