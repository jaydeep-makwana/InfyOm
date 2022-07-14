let output = document.getElementById("output");
let clear_btn = document.getElementById('ce-btn');
let equal_btn = document.getElementById('equal-btn');

clear_btn.addEventListener('click', ()=>{
    output.value = null;
});

equal_btn.addEventListener('click', ()=>{
     console.log(output.value);
});



let click_btn = (id) => {
    let input = document.getElementById(id);


    input.addEventListener('click', () => {
        if (output != "") {
            output.value = output.value + input.innerText;
        } else {
            output.value = input.innerText;
        }
    });

}

click_btn('num-1');
click_btn('num-2');
click_btn('num-3');
click_btn('num-4');
click_btn('num-5');
click_btn('num-6');
click_btn('num-7');
click_btn('num-8');
click_btn('num-9');
click_btn('num-0');
click_btn('sub-btn');
click_btn('multiply-btn');
click_btn('divide-btn');
click_btn('addition-btn');

