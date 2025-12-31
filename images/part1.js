
      document.addEventListener('DOMContentLoaded', () => {
    
    const menuLinks = document.querySelectorAll('.menu-link');

    function handleLinkClick(event) {
       
        
        const currentActive = document.querySelector('.menu-link.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        
        event.target.classList.add('active');
    }

  
    menuLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
});


 document.addEventListener('DOMContentLoaded', () => {
   
    const menuLinks = document.querySelectorAll('.cer');

  
    function handleLinkClick(event) {
       
        const currentActive = document.querySelector('.cer.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        
        event.target.classList.add('active');
    }

    
    menuLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
});