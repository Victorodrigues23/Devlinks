function togglemode() {
    
    const html = document.documentElement

    const img = document.querySelector('#profile img')


    //troca do botao do switch/////////////////////////////////////////////////////////////////////////////////////////////
    html.classList.toggle('light')

 ////   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////    //fazer a troca do avatar//-------------------------------------------------------------------------------------------
    
    if (html.classList.contains('light')) {

    img.setAttribute('src', './assets/avatar2.png')
    
    }

    else {
    
    img.setAttribute('src', './assets/avatar1.png')

    }
    
  //---------------------------------------------------------------------------------------------------------------------  
    
}



//if (html.classList.contains("light")) {
    
//html.classList.remove ("light") 

//else {
//    html.classList.add("light")
//}