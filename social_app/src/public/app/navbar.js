let navlinks=$(".navbar .nav-link")
navlinks.click((event)=>{
 
     let componenturl=`./components/${$(event.target).attr("data-component")}.html`
     $("#content").load(componenturl)
})