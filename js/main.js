let links = document.querySelectorAll('.portfolio .shuffel li');
let imgs = document.querySelectorAll('.portfolio .box');
console.log(imgs);
links.forEach((li) => {
    li.addEventListener('click' ,removActive);
    li.addEventListener('click' , function()
    {
        imgs.forEach((img)=>
        {
            img.style.display = "none";
        })
        document.querySelectorAll(this.dataset.cat).forEach((el) =>
        {
            el.style.display="block";
        })
    });
})


// remove active and put active
function removActive()
{
    links.forEach((li) =>
    {
        li.classList.remove('active');
        this.classList.add('active');
    })

}
//mange items
// function showItems()
// {
//     imgs.forEach((img)=>
//     {
//         img.style.display = "none";
//     })

// }