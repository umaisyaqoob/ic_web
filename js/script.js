// ============ Menubar ============
let menubar = document.getElementById('menubar')
let page_menu = document.querySelector('.page-menu-list')
menubar.addEventListener('click', function(){
    page_menu.classList.add('active')
})


// ============ XMark ============
let xmark = document.getElementById('xmark')
xmark.addEventListener('click', function(){
    page_menu.classList.remove('active')
})

// ============ ChatBtn ============
let chat_btn = document.getElementById('chat-btn')
let chatbot_id = document.getElementById('chatbot-id')
chat_btn.addEventListener('click', function(){
    console.log('OK')
    chatbot_id.classList.toggle('active')
})

// ============ Chatbot ============
window.addEventListener('resize', function(){
    var screenWidth  = window.innerWidth
    let chatbot_id = document.getElementById('chatbot-id')
    if (screenWidth > 868){
        chatbot_id.classList.remove('active')
    }
})
