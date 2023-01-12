

var allProducts=[];

if(localStorage.getItem("x")== null)
{
    var allProducts=[];
}else{

allProducts= JSON.parse(localStorage.getItem("x"));
display();
}

function addProduct(){

    var oneProduct={
        pNameId:document.getElementById("pNameId").value,
        pPriceId:document.getElementById("pPriceId").value,
        pCatId:document.getElementById("pCatId").value,
        pDescId:document.getElementById("pDescId").value,
    
    
    }
    
     allProducts.push(oneProduct);
     localStorage.setItem("x",JSON.stringify(allProducts));
   
     console.log(allProducts)
     display();
     clearInputs();
  
}

function display(){

    var counter =``;

    for(var i =0 ; i<allProducts.length ; i++){

        counter+=`<tr>
        <td>${allProducts[i].pNameId}</td>
        <td>${allProducts[i].pPriceId}</td>
        <td>${allProducts[i].pCatId}</td>
        <td>${allProducts[i].pDescId}</td>
        <td><button class="btn btn-outline-warning" onclick="retriveInInputs(${i})">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteBtn(${i})">Delete</button></td>
        

    </tr>`
    }

    document.getElementById("tBody").innerHTML=counter;
}

function clearInputs(){
    pNameId=document.getElementById("pNameId").value="";
    pPriceId=document.getElementById("pPriceId").value="";
    pCatId=document.getElementById("pCatId").value="";
    pDescId=document.getElementById("pDescId").value="";

}

function deleteBtn(productIndex){

  allProducts.splice(productIndex,1); //delete from array
  //2- display
  display();
  //3-local storage
   localStorage.setItem("x", JSON.stringify(allProducts))
}

function retriveInInputs(updateIndex)
{   
    // 1
    document.getElementById("pNameId").value = allProducts[updateIndex].pNameId
    document.getElementById("pPriceId").value = allProducts[updateIndex].pPriceId
    document.getElementById("pCatId").value = allProducts[updateIndex].pCatId
    document.getElementById("pDescId").value = allProducts[updateIndex].pDescId

    //2
    document.getElementById("myBtn").innerHTML = "Update Product Ya User"
    document.getElementById("myBtn").setAttribute( "onclick" , `updateProduct(${updateIndex})` )

}




function updateProduct( proIndex )
{   

    allProducts[proIndex].pNameId = document.getElementById("pNameId").value
    allProducts[proIndex].pPriceId = document.getElementById("pPriceId").value
    allProducts[proIndex].pCatId = document.getElementById("pCatId").value
    allProducts[proIndex].pDescId = document.getElementById("pDescId").value

    display();

    localStorage.setItem("x" , JSON.stringify(allProducts)  )

     //2
     document.getElementById("myBtn").innerHTML = "Add Product"
     document.getElementById("myBtn").setAttribute( "onclick" , `addProduct()` )
 
     clearInputs()
}


function test(x)
{
    console.log(x)

var counter=``
    
        for(var i =0 ; i<allProducts.length ; i++){

            if( allProducts[i].pNameId.toLowerCase().includes(  x  )   )
    {

        counter+=`<tr>
        <td>${allProducts[i].pNameId}</td>
        <td>${allProducts[i].pPriceId}</td>
        <td>${allProducts[i].pCatId}</td>
        <td>${allProducts[i].pDescId}</td>
        <td><button class="btn btn-outline-warning" onclick="retriveInInputs(${i})">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteBtn(${i})">Delete</button></td>
        

    </tr>`
    }



        }

        document.getElementById("tBody").innerHTML=counter;
        
    
}