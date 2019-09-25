
// class Visitor{
//     constructor(name_,){
//         this.name = name_;
//         this.num_like_it = 0;
//     }
//     count_like_it(){
//         this.num_like_it++;
//     }
// }

// class visitor_manager{
//     constructor(){
//     }
// }

function submitted_from_visitor(){
    t = document.getElementById('textbox_for_visitor').value;
    document.getElementById('visitor').innerText="Welcome to my website, "+t+"! Click the button below as much as possible!";
    document.getElementById('textbox_for_visitor').value="";
    // var v = new Visitor(t)
    // return v;
}

function button_like_it(){
    t = document.getElementById("num_count").value;
    num_count = 1;
    if (t != null){
        num_count = document.getElementById("num_count").value;
        num_count++;
    }
    document.getElementById("num_count").value = num_count;
    document.getElementById("num_count").innerText = num_count + " Like it!"

    if(num_count > 5){
        document.getElementById("great_thanks").innerText = "Thank you very much! Please keep in touch!"
    }
    if(num_count > 10){
        document.getElementById("great_thanks").innerText = "Thank you! But I am not sure I can give you a lot..."
    }

    return
}

// function add_new_name(dict_, new_name){
//     var index = dict_.length
//     key = "index"
//     dict_.key = new_name
//     return dict_
// }

