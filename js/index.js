var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput");
var webList=[];


function addWebsite(){
    var site = {
        name:siteNameInput.value,
        url:siteUrlInput.value,
        
    }
 webList.push(site);
 console.log(webList);
 clearForm();
 displayData();
 


}


function clearForm (){
    siteNameInput.value="";
    siteUrlInput.value="";
   

}

function displayData(){
    var data = "";
    for(var i = 0 ;i<webList.length ; i++){
        data += `   <tr>
        <td>${i}</td>
        <td>${webList[i].name}</td>
        <td><a class="text-decoration-none text-dark" href="${webList[i].url}">"${webList[i].url}"</a></td>
        <td>
        <button class="btn btn-primary" onclick="deleteItem(${i})" >delete</button>
        </td>
        
        
        
        
        </tr>`
        document.getElementById("displayData").innerHTML =data;

    }
}



function deleteItem(index){

    webList.splice(index,1);
    displayData();

}

function urlValidtion(){
   var urlvalid= siteUrlInput.value;
   var urlre=/^(https?|ftp):\/\/(-\.)?([a-zA-Z0-9]+\.)+([a-zA-Z]{2,})(\/[^\s]*)?$/;
   var validtionResult =urlre.test(urlvalid);
   if(validtionResult==true){
    addWebsite();
   }
    else {
        alert("Site URL must be a valid one")
    }
}























/*function visitWebsite(){
var sites= document.getElementById("visitors").href=(siteUrlInput.value);
console.log(sites);
}*/
