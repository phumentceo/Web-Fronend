
    const categories = [
        { 
            id: 1,
            name: 'Phone',
            title : "Phone the popular for combodain",
            img   : "https://cdn.shopify.com/s/files/1/0458/5927/4902/files/iphone-xr-apple-by-ozmobiles-2_6ac824a1-0e9d-4743-b0a8-73bc11deaaa2_600x.jpg?v=1727160358",
            qty   : 100,
        },
        { 
            id: 2, 
            name: 'Computer',
            title : "Computer new stock",
            img   : "https://thumbs.dreamstime.com/z/variety-computers-both-laptop-desktops-sale-computer-store-computers-sale-computer-store-135429635.jpg",
            qty   : 50,
        },
        { 
            id: 3,
            name: 'Clothes',
            title : "Computer new stock",
            img   : "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/fe679993-4bb5-4179-b13c-1febabcc1189/width=450/00040-948056869.jpeg",
            qty   : 100,
            types: [
                { id: 1, name: 'Men' },
                { id: 2, name: 'Women' },
                { id: 3, name: 'Children' }
            ]

        }
    ];

    const slides = [
        {
            id : 1,
           "image" : 'https://media.product.which.co.uk/prod/images/original/f4e8c0ef7c7b-phones-vertical-header.jpg'
        },
        {
            'id' : 2,
            'image' :  'https://allgen.com/wp-content/uploads/2019/11/san-antonio-computer-store-parts-department.jpg',
        },
        {
            'id' : 3,
            'image' : 'https://media.burford.co.uk/images/SNY04089.jpg_edit.width-1440_05001m7uKQ0crRoI.jpg'
        }
    ];


    const products = [
        {
            "id" : 1,
            "name" : "Vivo X100",
            "price" : 400,
            "qty"   : 10,
            "image" : "https://tradingshenzhen.com/13803-large_default/vivo-x100-16gb256gb.jpg"
        },
        {
            "id" : 2,
            "name" : "I phone 13 pro Golden",
            "price" : 400,
            "qty"   : 10,
            "image" : "https://compasia.com.ph/cdn/shop/files/iphone-13-pro-max-smart-locked-490911_600x.png?v=1722544104"
        },
        {
            "id" : 3,
            "name" : "I phone 13 pro",
            "price" : 400,
            "qty"   : 10,
            "image" : "https://buy.gazelle.com/cdn/shop/files/iPhone_13_Pro_Max_-_Green_-_Overlap_Trans-cropped.jpg?v=1734651797&width=1946"
        },
        {
            "id" : 4,
            "name" : "I phone 13 pro",
            "price" : 400,
            "qty"   : 10,
            "image" : "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1719300660152/40ed4c1601b8b87b1b7a8d8ef6ea2b0d.png"
        },
        {
            "id" : 5,
            "name" : "I phone 13 pro",
            "price" : 400,
            "qty"   : 10,
            "image" : "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1719300660152/40ed4c1601b8b87b1b7a8d8ef6ea2b0d.png"
        },
        {
            "id" : 6,
            "name" : "I phone 13 pro",
            "price" : 400,
            "qty"   : 10,
            "image" : "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1719300660152/40ed4c1601b8b87b1b7a8d8ef6ea2b0d.png"
        },
        {
            "id" : 7,
            "name" : "I phone 13 pro",
            "price" : 400,
            "qty"   : 10,
            "image" : "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1719300660152/40ed4c1601b8b87b1b7a8d8ef6ea2b0d.png"
        },
        {
            "id" : 8,
            "name" : "I phone 13 pro",
            "price" : 400,
            "qty"   : 10,
            "image" : "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1719300660152/40ed4c1601b8b87b1b7a8d8ef6ea2b0d.png"
        }
    ]

    const categoriesItem = document.getElementById('categories-item');
    const slidesItem   = document.querySelector('.slides-item');

    categories.forEach((value,index) => {
        if (value.types) {
            let dropdownMenu = ``;
            dropdownMenu += `
                <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          ${value.name}
                        </a>
                        <ul class="dropdown-menu">`;
                          value.types.map((value,index) => {
                            dropdownMenu += ` <li><a class="dropdown-item" href="#">${value.name}</a></li>`;
                          })             
                dropdownMenu += `
                       </ul>
                </li>
            `;

            

            categoriesItem.innerHTML += dropdownMenu;
            

        } else {

            let dropdownMenu = ` `;
            
            dropdownMenu += `
            <li class="nav-item">
                    <a class="nav-link text-light" href="#">${value.name}</a>
            </li>
            `;
            categoriesItem.innerHTML += dropdownMenu;
        }
    });


    slides.map((value,index) => {
        let slideHTML = ``;
        slideHTML += `
            <div class="carousel-item ${(index == 0) ? 'active' : ''}">
                <img style="height: 500px;" src="${value.image}" class="d-block w-100" alt="...">
            </div>
        `;

        slidesItem.innerHTML += slideHTML;

    });


    const categoryLeft = document.querySelector("#category-left");
    const categoryRight = document.querySelector("#category-right");

    categories.map((value,index) => {
        let  leftInner = ``;
        if(index != 2){
             leftInner += `
                <div class="col-lg-12 p-0 m-0 mb-3">
                    <div class="card category-item">
                        <img style='height:400px; object-fit:cover;' src="${value.img}" alt="">
                        <div class="card-body">
                            <h3>${value.name}</h3>
                            <p>${value.title}</p>
                            <p>${value.qty} Product</p>
                        </div>
                    </div>
                </div>
            `;

            categoryLeft.innerHTML += leftInner;
        }else{
            let rightInner = ``;
            rightInner += `
            <div class="card category-item">
                <img style='height:815px; object-fit:cover;' src="${value.img}" alt="">
                <div class="card-body">
                    <h3>${value.name}</h3>
                    <p>${value.title}</p>
                     <p>${value.qty} Product</p>
                </div>
            </div>
            `;

            categoryRight.innerHTML += rightInner;
        }
    })



    const productShow = document.querySelector("#show-products");

    products.forEach((value,index) => {
        let productHtml = ``;

        productHtml  += `
            <div class="col-lg-3 col-md-6 col-12 mb-3">
                <div class="card product shadow-sm">
                    <img src="${value.image}" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${value.name}</h5>
                        <p class="card-text">$${value.price}</p>
                        <div class="icon-block">
                            <i data-bs-toggle="modal" data-bs-target="#modal-show_product" class="bi bi-search"></i>
                            <i class="bi bi-heart"></i>
                            <i class="bi bi-bag-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;

        productShow.innerHTML += productHtml;
    });


    
