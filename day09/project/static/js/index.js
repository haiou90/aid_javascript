$(function(){
    // alert('外部js文件加载完成');
    // console.log(blogData);
    // console.log(faderData);


    var BASE_URL = '../static/images/'

    var html = ''
    $.each(faderData,function(i,o){
        html += ' <li class="slide">'
        html += '<a href="#">'
        html += `<img src="${BASE_URL + o.img_url} " alt="">`
        html += `<span class="imginfo">${o.img_info}</span>`
        html += '</a></li>'
    })
    console.log(html)
    $('.fader_controls').before(html);


    $('.fader').easyFader();


    function add_blogs(data){
        var html = ''
        $.each(data,function(i,o){
            var blog =  `
            <div class="blogs">
                <h3 class="blogtitle">
                    <a href="#">${o.blogtitle}</a>
                </h3>
                <div class="blogpic">
                    <a href="#">
                        <img src="${BASE_URL + o.blogpic}" alt="">
                    </a>
                </div>
                <p class="blogtext">
                    ${o.blogtext}
                </p>
                <ul>
                    <li class="author"><a href="#">${o.bloginfo.author}</a> </li>
                    <li class="lmname"><a href="#">${o.bloginfo.lmname}</a></li>
                    <li class="timer"><a href="#">${o.bloginfo.timer}</a></li>
                    <li class="view"><a href="#">${o.bloginfo.view}</a></li>
                    <li class="like"><a href="#">${o.bloginfo.like}</a></li>
                </ul>
            </div> `

            html += blog
        })
        $('.blogsbox').append(html)
    }

    add_blogs(blogData.slice(0,3));

    $(document).scroll(function(){
        var scrollTop = $()
    })

})

