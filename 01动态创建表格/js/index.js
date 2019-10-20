var box =document.querySelector('.box')
var tbody = box.querySelector('tbody');
var ass = tbody.querySelectorAll('a');
var addBtn = box.querySelector('#addBtn');
var cover = document.querySelector('#cover');
var dialog = document.querySelector('#dialog')
var comBtn = dialog.querySelector('.comBtn')
var clos = dialog.querySelector('#close')
tbody.onclick  =function (e) {
    //判断点击是不是a
    if(e.target.nodeName =='A'){
        var a = e.target;
        //删除tr
        this.removeChild(a.parentElement.parentElement);
    }
}

// 单击添加数据
addBtn.addEventListener('click',()=> {
    //显示遮罩层和对话框
    cover.style.display = 'block';
    dialog.style.display = 'block';
});

//单击完成按钮
comBtn.addEventListener('click',()=>{
    //获取txt1 去掉两端空格
    let str1 = txt1.value.trim();
    console.log(str1);
    let str2 = txt2.value.trim();
    console.log(str2);
    
    if (str1.length && str2.length) {
        //遮罩层，对话框消失
        cover.style.display = 'none';
        dialog.style.display = 'none';
        //创建表格 tr
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        //创建td
        for(let i =0; i < 3; i++){
            let td =document.createElement('td');
            if(i == 0){
                td.innerHTML = str1;
            }else if(i == 1){
                td.innerHTML = str2;
            }else{
                //创建a
                let a = document.createElement('a');
                a.href = 'javascript:;';
                a.innerHTML = '删除';
                td.appendChild(a);
            }
            tr.appendChild(td);
        }
        txt1.value = '';
        txt2.value = '兴';

    } else {
        alert('电影名称不能为空！')
    }
})

//点击关闭对话框
clos.addEventListener('click',()=>{
    //关闭遮罩层，对话框
    cover.style.display = 'none';
    dialog.style.display = 'none';
})
