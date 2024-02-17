let productContainer = document.querySelector('.productContainer');
let popularContainer = document.querySelector("#popularContainer")
let cartIcon = document.querySelector('#cartIcon');
let cartList = document.querySelector('.cartList');

let products =[
    {name:'Wooden Chair' , headline: 'Ladki ki chair', image :'https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJzfGVufDB8fDB8fHww', price :'1,200'},
    {name:'Green Chair' , headline: 'chair', image :'https://images.unsplash.com/photo-1611464908623-07f19927264e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price :'2,999'},
    {name:'Orange Chair' , headline: 'Orange chair', image :'https://images.unsplash.com/photo-1561677978-583a8c7a4b43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price :'699'},
    {name:'Wooden Table' , headline: 'Wooden Table', image :'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price :'5,999'},
    {name:'White Table' , headline: 'White Table', image :'https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price :'3,599'},
];

let cart =[];


function addToCart(){
  
    productContainer.addEventListener('click',function(details){
        if(details.target.classList.contains('add')){
            console.log('add kro');
            console.log(details.target);//iise to ko mila jispe click hua.par clicked bande ki dataset ki value nikalnge
            // console.log(details.target.dataset.index);// ye index value dega

            cart.push(products[details.target.dataset.index]) // products[0]- array ki index ki tarah kaam aaega
        }
    })
}

function checkCart(){
    cartIcon.addEventListener('click',function(){
        cartList.style.display = 'block';

        let clutter = "";
        cart.forEach((e)=>{
            clutter +=`<div class="flex mt-2 items-center w-full h-8 justify-between">
            <div class="imgs w-12 h-8 bg-gray-600 rounded-lg">
                <img src="${e.image}" class="w-full h-full object-center overflow-hidden" alt="">
            </div>
            <div class="content">
                <h1 class="font-bold text-sm">${e.name}</h1>
            </div>
        </div>`
        })

        cartList.innerHTML = clutter;
    })
}




function addProduct(){
let clutter ='';
let popClutter ='';
products.forEach((e,index)=>{
    clutter += `<div class="card w-2/3 bg-white h-64 rounded-lg p-2 shrink-0">
    <div class="imgContainer rounded-lg overflow-hidden bg-[#dadada] w-full h-2/3">
        <img src="${e.image}" class="w-full h-full object-cover">
    </div>
    <div class="details flex items-center justify-between">
        <div>
            <h2 class="font-bold">${e.name}</h2>
            <p class="text-gray-500 font-semibold">${e.headline}</p>
            <h6 class="font-bold">&#8377; ${e.price}</h6>
        </div>
        <button data-index="${index}" class="add bg-slate-900 w-8 h-8 rounded-full"><i data-index="${index}" class="add ri-add-line text-white"></i></button>
    </div>
</div>`;

    popClutter += ` <div class="popCard rounded-lg bg-white w-2/3 p-4 shrink-0 flex items-center justify-between">
    <div class="imgs bg-gray-900 overflow-hidden rounded-lg w-1/3 h-full">
        <img src="${e.image}" class="w-full h-full object-cover" alt="">
    </div>
    <div>
        <h2 class="font-bold">${e.name}</h2>
        <p class="text-gray-500">${e.headline}</p>
        <h5 class="font-bold">&#8377; ${e.price}</h5>
    </div>
</div>
`
})

productContainer.innerHTML = clutter;
popularContainer.innerHTML = popClutter;
}

addProduct();

addToCart();
checkCart();