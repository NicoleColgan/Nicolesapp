function postComments(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://us-central1-nicolesapp-16d15.cloudfunctions.net/postcomment');
    xhr.setRequestHeader("Content-type","application/json");
    //track state changes of the request
    xhr.onreadystatechange=function(){
        var DONE = 4;
        var OK = 200;
        if(xhr.readyState===DONE){
            if(xhr.status===OK){
                //call get comments to retrieve the latest comments
                getComments();
            }
            else{
                //some error must have occured
                console.log('Error: '+xhr.status);
            }
        }

    };
    xhr.send(JSON.stringify(
        {"handle":document.getElementById('handle').value,
        "comment": document.getElementById('comment').value}
    ));
}