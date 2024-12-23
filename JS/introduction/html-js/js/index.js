
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


    
