

const netFlixaccordion = document.querySelectorAll('.netflix_accordion_content')
    netFlixaccordion.forEach((item,index) =>{
        let header = item.querySelector('.netflix_accordion_header');
        header.addEventListener("click", ()=>{
            item.classList.toggle('active');

            let accordionBody = item.querySelector('netflix_accordion_body');
            if(item.classList.contains('active')){
                accordionBody.style.height = `${accordionBody.Height}px`;
            }else{
                accordionBody.style.height = '0px'
            }
            console.log(accordionBody);

            removeActive(index);
        });
    });

    function removeActive(index1){
        netFlixaccordion.forEach((item2,index2) =>{
            if(index1 != index2){
                item2.classList.remove('active');
                let acbdy = item2.querySelector('.netflix_accordion_body');
                acbdy.style.height = '0px';
            }
        })
    }


    var getFrom = document.getElementById('getForm');
    var error = document.getElementById('error');
    var error1 = document.getElementById('error1');
    var emailIput =document.getElementById('emailIput');
    var floatingInput =document.getElementById('floatingInput')
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   
    getFrom.addEventListener('submit',e=>{
        e.preventDefault();
        var name = e.target.email.value;
        if(emailRegex.test(name)){
            error.textContent = '';
            emailIput.style.border = '1px solid green';
        }else{
            error.textContent= 'Please put a valid email';
             emailIput.style.border = '1px solid rgb(229, 9, 20)';
        }
        console.log(name);



    })

    var formGet = document.getElementById('getForm1');
    formGet.addEventListener('submit', e=>{
        e.preventDefault();
        var nama1 = e.target.email1.value;
        if(emailRegex.test(nama1)){
            error1.textContent = '';
            floatingInput.style.border = '1px solid green';
        }else{
            error1.textContent= 'Please put a valid email';
            floatingInput.style.border = '1px solid rgb(229, 9, 20)'
        }
    })


    