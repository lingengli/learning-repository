//插入略缩图列表
function insertList(data) {
    var html = '';
    var box = document.getElementById("div4");

    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        html += '<div class="h5" id="item' + i + '">' +
            '<a href="img/3.jpg" class="ph">' +
            '	<img src="'+ dataItem.thumb + '" alt="3">'+
            '</a>' +
            '<div class="decs">' + dataItem.title + '</div>' +
            '<div class="decs1">' + dataItem.subTitle + '</div>' +
            '<div class="hh5">' +
            '	<a href="#1" class="name">' + dataItem.name + '</a>' +
            '</div>' +
            '</div>';
    }

    box.innerHTML = html;
}

//插入略缩图分页页码
function insertPage() {

    var box = document.getElementById("div4");


    var wrapper = document.createElement('div');
    wrapper.setAttribute("class", "h6");

    for (var i = 0; i <= 3; i++) {
        var pageItem = document.createElement("a");
        if (i == 0) {
            pageItem.setAttribute("class", "active");
        }
        pageItem.setAttribute("href", "#" + i);
        pageItem.setAttribute("onclick", "pageChage(" + i + ")");
        if (i == 3) {
            pageItem.innerHTML = "···";
        }
        else {
            pageItem.innerHTML = (i + 1);
        }
        wrapper.appendChild(pageItem);
    }

    box.appendChild(wrapper);
}

//略缩图页码变更监听函数
//点击页码时，根据页码的数字来更换数据
function pageChage(index) {
    if (index == 1) {
        var box = document.getElementById("div4");
        box.innerHTML = "";
        insertList(listData1);
        insertPage();
    }

    if (index == 0) {
        var box = document.getElementById("div4");
        box.innerHTML = "";
        insertList(listData);
        insertPage();
    }
}

var listData = [
    {
        "title": "纪念碑谷-季节旅行",
        "subTitle": "季节旅行",
        "name": "纪念碑谷",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行2",
        "subTitle": "季节旅行2",
        "name": "纪念碑谷2",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行3",
        "subTitle": "季节旅行3",
        "name": "纪念碑谷3",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行4",
        "subTitle": "季节旅行4",
        "name": "纪念碑谷4",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行5",
        "subTitle": "季节旅行5",
        "name": "纪念碑谷5",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行6",
        "subTitle": "季节旅行6",
        "name": "纪念碑谷6",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行7",
        "subTitle": "季节旅行7",
        "name": "纪念碑谷7",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行8",
        "subTitle": "季节旅行8",
        "name": "纪念碑谷8",
        "thumb": "img/3.jpg"
    }
];

var listData1 = [
    {
        "title": "纪念碑谷-季节旅行1",
        "subTitle": "季节旅行",
        "name": "纪念碑谷",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行1",
        "subTitle": "季节旅行",
        "name": "纪念碑谷",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行1",
        "subTitle": "季节旅行",
        "name": "纪念碑谷",
        "thumb": "img/3.jpg"
    },
    {
        "title": "纪念碑谷-季节旅行1",
        "subTitle": "季节旅行",
        "name": "纪念碑谷",
        "thumb": "img/3.jpg"
    },
];

insertList(listData);
insertPage();


//插入文章列表
function insertArtcileList(data1) {
    var html = '';

    var box = document.getElementById("div9");

    console.log("未循环:%o", html);

// <div class="hh9" id="item3-0">
// 	<a href="#1">	
// 		<img src="3.jpg" alt="3"></img>	
// 		<div class="h9-1">		
// 			<button>经验观点</button>		
// 			<div class="h9-2">无缝体验,电话智能</div>		
// 			<div class="h9-3">人工与智能混合服务,语音电话体验设计</div>	
// 		</div>
// 	</a>
// </div>

    for (var i = 0; i < data1.length; i++) {
        var dataItem = data1[i];
        html += '<div class="hh9" id="item3-' + i + '">' +
            '<a href="#1">' +
            '	<img src="' + dataItem.thumb + '" alt="3"></img>' +
            '	<div class="h9-1">' +
            '		<button>' + dataItem.button + '</button>' +
            '		<div class="h9-2">' + dataItem.title + '</div>' +
            '		<div class="h9-3">' + dataItem.subTitle + '</div>' +
            '	</div>' +
            '</a>' +
            '</div>';

        console.log("循环第" + i + "步：%o", html);
    }

    box.innerHTML = html;
}

function insertPage1() {

    var box = document.getElementById("div9");

    var wrapper = document.createElement('div');
    wrapper.setAttribute("class", "h6");

    for (var i = 0; i <= 3; i++) {
        var pageItem = document.createElement("a");
        if (i == 0) {
            pageItem.setAttribute("class", "active");
        }
        pageItem.setAttribute("href", "#" + i);
        pageItem.setAttribute("onclick", "pageChage1(" + i + ")");
        if (i == 3) {
            pageItem.innerHTML = "···";
        }
        else {
            pageItem.innerHTML = (i + 1);
        }
        wrapper.appendChild(pageItem);
    }

    box.appendChild(wrapper);
}

var ilData = [
    {
        "thumb": "img/3.jpg",
        "button": "经验观点",
        "title": "无缝体验,电话智能",
        "subTitle": "人工与智能混合服务,语音电话体验设计"
    },
    {
        "thumb": "img/3.jpg",
        "button": "经验观点",
        "title": "222222222",
        "subTitle": "人工与智能混合服务,语音电话体验设计"
    },
    {
        "thumb": "img/3.jpg",
        "button": "经验观点",
        "title": "333333333",
        "subTitle": "人工与智能混合服务,语音电话体验设计"
    }
];

insertArtcileList(ilData);
insertPage1();

function artcileChage(menu3) {
    var wz = "";
    var box = document.getElementById("div7");
    for (var i = 0; i < menu3.length; i++) {
        var menuItem = menu3[i];
        wz += '<ul>' + '<li>' + '<a href="#4">' + menuItem.title + '</a>' + '</li>' + '</ul>'
    }


    box.innerHTML = wz;
}

var menu3 = [
    {
        title: '推荐文章'
    },
    {
        title: '最新文章'
    }
];

artcileChage(menu3);


//文章列表页码变更监听函数
function pageChage1(index) {

}

//实现菜单的事件绑定 onclick 属性以及 function函数定义的使用
//实现点击菜单更换列表数据 var 变量声明 if...else 以及 for / while 语句的应用

//插入菜单/导航
function menu(data) {
    var li = '';
    var box = document.getElementById("div11");
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        //自循环

        var subList = '';
        if (dataItem.child) {
            subList += '<div class="dropdown-content">';
            for (var x = 0; x < dataItem.child.length; x++) {
                var childItem = dataItem.child[x];
                subList += '<a href="#1">' + childItem.title + '</a>';
            }
            subList += "</div>";
        }


        li += '<li >' +
            '<a href="#1">' + dataItem.title + subList + '</a>' +
            '</li>';
    }

    box.innerHTML = li;
}

var menuData = [
    {
        title: "首页"
    },
    {
        title: "发现",
        child: [
            {
                title: '作品'
            },
            {
                title: '活动'
            }
        ]
    },
    {
        title: "学习"
    },
    {
        title: "课程"
    }
];

menu(menuData);


function menu2(data) {
    var wz = '<ul>';
    var box = document.getElementById("div3");
    for (var i = 0; i < data.length; i++) {
        var menuItem = data[i];
        wz += '<li>' + '<a href="#4" id=dav' + i + ' onclick="classA(this.id)" class="">' + menuItem.title + '</a>' + '</li>';
    }
    wz += '</ul>';
    box.innerHTML = wz;
}

function classA(id) {

    document.getElementById(id).setAttribute('class', 'active');
}

var menuData2 = [
    {
        title: '首页推荐'
    },
    {
        title: '佳作分享'
    },
    {
        title: '最新文章'
    }
];

menu2(menuData2);

var articleList = [
    {title: "设计中的留白", link: "http://www.baidu.com"},
    {title: "《U1》01 - 不要再傻傻分不清楚", link: "http://www.baidu.com"},
    {title: "10条建议打造更聪明的设计流程", link: "http://www.baidu.com"},
    {title: "UI设计师应掌握的知识体系以及职业规划！", link: "http://www.baidu.com"},
    {title: "2016年十个必须尝试的设计工具", link: "http://www.baidu.com"},
    {title: "《U1》05 - 三年入职大公司", link: "http://www.baidu.com"},
    {title: "《U1》04 - UI入门技能选择", link: "http://www.baidu.com"},
    {title: "初识产品设计", link: "http://www.baidu.com"},
    {title: "设计师该如何快速成长？", link: "http://www.baidu.com"},
    {title: "合理利用对齐", link: "http://www.baidu.com"},
    {title: "如何寻找设计灵感？写给刚入行的设计师", link: "http://www.baidu.com"},
    {title: "《U1》06 - 抄袭别人，超越自己", link: "http://www.baidu.com"},
    {title: "UI设计师们都快要失业了吗", link: "http://www.baidu.com"}
]


function insertLastArticleList(data) {
    var html = "";

    for (var i = 0; i < data.length; i++) {
        html += '<li class="article-list-item">' +
            '<a href="' + data[i].link + '">' + data[i].title + '</a>' +
            '</li>';
    }


    var wrapper = document.getElementById("articleList");
    if (wrapper != null) {
        wrapper.innerHTML = html;
    }

}


insertLastArticleList(articleList);


function thumbListWrapper(data) {
    var html = "";
    var box = document.getElementById("thumb1");
    for(var i = 0; i<data.length; i++){
        html +='<img src="'+ data[i].thumb +'" class="thumb-list-item">'
    }
    box.innerHTML = html;
}

var thumbList = [
    {
        thumb : 'img/5.png'
    },
    {
        thumb : 'img/6.png'
    },
    {
        thumb : 'img/7.png'
    }
]

thumbListWrapper(thumbList);



function partner(data) {
    var html = '';
    var box = document.getElementById('partnerlogo');

    for(var i=0 ; i<data.length; i++){
        html += '<li>' +
                    '<a href="#">' + '<img src="' + data[i].logo + '">' + '</a>' +
                '</li>'
    }
    box.innerHTML = html;
}

var partnerlogo = [
    {
        logo: 'img/8.png'
    },
    {
        logo: 'img/8.png'
    },
    {
        logo: 'img/8.png'
    },
    {
        logo: 'img/8.png'
    },
    {
        logo: 'img/8.png'
    },
    {
        logo: 'img/8.png'
    }
]

partner(partnerlogo);