let grid = null;
$(window).on("mousemove",function(e){
    //console.log(e);
    gsap.to(".cursor",{
                        left:e.clientX,
                        top:e.clientY,
                        duration:0.3
                    });
});
$(".filter li").on("click",function(){
    console.log($(this).data("filter-word"));
    grid.isotope({ filter: "."+$(this).data("filter-word") });
    $(this).addClass("on").siblings().removeClass("on");
    // $(this).addClass("on");
    // $(this).siblings().removeClass("on");
    return false;
});
$(".filter li").on("mouseenter",function(){
    $(".cursor .txt").text("CLICK");
    gsap.killTweensOf(".cursor"); // 기존에 있던 motion 없애라....
    gsap.to(".cursor",{
                        width:80,
                        height:80,
                        backgroundColor:"#ff0000",
                        ease:"elastic",
                        duration:1
    })
});
$(".filter li").on("mouseleave",function(){
    $(".cursor .txt").text("");
    gsap.killTweensOf(".cursor");
    gsap.to(".cursor",{
                        width:10,
                        height:10,
                        backgroundColor:"#ffffff",
                        ease:"power4",
                        duration:0.25
    })
});
$("#works .grid").on("mouseenter","li",function(){
    $(".cursor .txt").text("VIEW");
    gsap.killTweensOf(".cursor"); // 기존에 있던 motion 없애라....
    gsap.to(".cursor",{
                        width:80,
                        height:80,
                        backgroundColor:"#ff0000",
                        ease:"elastic",
                        duration:1
    })
});
$("#works .grid").on("mouseleave","li",function(){
    $(".cursor .txt").text("");
    gsap.killTweensOf(".cursor");
    gsap.to(".cursor",{
                        width:10,
                        height:10,
                        backgroundColor:"#ffffff",
                        ease:"power4",
                        duration:0.25
    })
});


$.ajax({
    url:"typo.json",
    success:function(data){
        console.log(data);
        const typoList = data.typoList;
        const imgFolder = data.imageFolder;
        $.each(typoList,function(i,item){
            $("#works .grid").append(
                `
                    <li class="item ${item.category}">
                        <a href="" data-fancybox="${item.category}" data-src="${imgFolder}${item.img}" data-caption="${item.title}">
                            <div class="imgBox">
                                <img src="${imgFolder}${item.img}" alt="">
                            </div>
                            <div class="infoBox">
                                <h2>${item.title}</h2>
                                <p class="desc">
                                    ${item.desc}
                                </p>
                                <p class="point">
                                    <span>${item.point}</span>
                                </p>
                            </div>
                        </a>
                    </li>        
                `
            )
        });
        Fancybox.bind("[data-fancybox]", {});
        $("body").imagesLoaded(function(){
            grid = $("#works .grid").isotope({
                // options
                itemSelector: ".item",
                layoutMode: "masonry"
            });
        });
        //console.log(grid);
    }
});