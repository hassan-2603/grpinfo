const tab_scroll = document.getElementById("tab_bar");
tab_scroll.addEventListener("wheel" ,(e)=>{
    e.preventDefault();
    tab_scroll.scrollLeft+= e.deltaY;

});

let profiles ={

    
       "mujtaba": {"name": "MUJTABA HASSAN","age":"20","email":"mujtabahassan2603@gmail.com","m.no":"+917061858716","address":"K.R.B. PUSA ROAD, SAMASTIPUR,BIHAR(848131), India" ,"main_bg_color":"radial-gradient(circle, rgb(1, 126, 7),rgb(0, 0, 0))","main_border_color":" rgba(0, 233, 12, 0.6)",
        "div_m_1_back_color":"rgba(4, 214, 32, 0.3)","div_m_1_box_shadow":" 0 0 20px 5px rgb(0, 255, 13)","image_1_filter":"drop-shadow(0px 9px 12px rgba(0,255,13,0.6))",
        "div_l_1_bg_color":"radial-gradient(circle, rgba(9, 221, 45, 0.3),rgba(0, 0, 0, 0.1))","div_l_2_color":"rgb(43, 255, 0)","div_l_2_textshadow":"0 0 4px 3px green",
        "tab_bar_bgcolor":"radial-gradient(circle, rgba(9, 221, 45, 0.3),rgba(0, 0, 0, 0.1))","profile_hover":"green",
        "div_r_1_bg_color":"radial-gradient(circle, rgba(9, 221, 45, 0.3),rgba(0, 0, 0, 0.1))","div_r_2_color":"rgb(43, 255, 0)","div_r_2_textshadow":"0 0 4px 3px green",
        "textboxcolor":"chartreuse","bu_boxshadow":"0 0 12px 5px rgba(15, 51, 1, 0.6)","bu_boxshadow_hover":" 0 0 12px 5px rgba(72, 255, 0, 0.6)",
        "time_date_color":"chartreuse","name_holder_filter":"drop-shadow(0 5px 8px rgba(0,255,13,0.6))","popup_border_color":"rgba(0, 233, 12, 0.6)",
        "contact_color":"chartreuse","close_pop_boxshadow":"0 0 12px 5px rgba(18, 22, 18, 0.3)","close_pop_hover_box_shadow":" 0 0 12px 5px rgba(0, 216, 29, 0.8)",
        "c_input_color":"chartreuse","c_input_placholder_color":"chartreuse","c_sumit_color":"chartreuse","c_sumit_hover_box":"0 0 12px 5px rgba(0, 216, 29, 0.8)","pf_image":"./images/images(1).jpg",
        "profile_id":"p_1"
       },

       
       "satyam": {"name": "SATYAM KUMAR","age":"20","email":"satyamkumar63331@gmail.com","m.no":"+919798317456","address":"PURNIA,BIHAR, India" ,"main_bg_color":"radial-gradient(circle, rgb(1, 3, 126),rgb(0, 0, 0))","main_border_color":" rgba(0, 19, 233, 0.6)",
        "div_m_1_back_color":"rgba(4, 36, 214, 0.3)","div_m_1_box_shadow":" 0 0 20px 5px rgb(0, 38, 255)","image_1_filter":"drop-shadow(0px 9px 12px rgba(0, 26, 255, 0.6))",
        "div_l_1_bg_color":"radial-gradient(circle, rgba(9, 20, 221, 0.3),rgba(0, 0, 0, 0.1))","div_l_2_color":"rgb(0, 140, 255)","div_l_2_textshadow":"0 0 4px 3px blue",
        "tab_bar_bgcolor":"radial-gradient(circle, rgba(9, 73, 221, 0.3),rgba(0, 0, 0, 0.1))","profile_hover":"blue",
        "div_r_1_bg_color":"radial-gradient(circle, rgba(9, 37, 221, 0.3),rgba(0, 0, 0, 0.1))","div_r_2_color":"rgb(0, 140, 255)","div_r_2_textshadow":"0 0 4px 3px rgb(0, 140, 255)",
        "textboxcolor":"rgb(0, 140, 255)","bu_boxshadow":"0 0 12px 5px rgba(1, 8, 51, 0.6)","bu_boxshadow_hover":" 0 0 12px 5px rgba(0, 21, 255, 0.6)",
        "time_date_color":"rgb(0, 140, 255)","name_holder_filter":"drop-shadow(0 5px 8px rgba(8, 0, 255, 0.6))","popup_border_color":"rgba(0, 35, 233, 0.6)",
        "contact_color":"rgb(0, 140, 255)","close_pop_boxshadow":"0 0 12px 5px rgba(18, 18, 22, 0.3)","close_pop_hover_box_shadow":" 0 0 12px 5px rgba(4, 0, 216, 0.8)",
        "c_input_color":"rgb(0, 140, 255)","c_input_placholder_color":"blue","c_sumit_color":"rgb(0, 140, 255)","c_sumit_hover_box":"0 0 12px 5px rgba(0, 11, 216, 0.8)","pf_image":"./images/images(2).jpg",
        "profile_id":"p_2"
       },

       
       "devesh": {"name": "Devesh Kumar Singh","age":"20","email":"deveshsinghbaghel5@gmail.com","m.no":"+919651658298","address":"GORAKHPUR ,UTTAR PRADESH , India" ,"main_bg_color":"radial-gradient(circle, rgb(214, 182, 0),rgb(0, 0, 0))","main_border_color":" rgba(253, 228, 1, 0.6)",
        "div_m_1_back_color":"rgba(214, 193, 4, 0.3)","div_m_1_box_shadow":" 0 0 20px 5px rgb(255, 217, 0)","image_1_filter":"drop-shadow(0px 9px 12px rgba(255, 196, 0, 0.6))",
        "div_l_1_bg_color":"radial-gradient(circle, rgba(221, 172, 9, 0.3),rgba(0, 0, 0, 0.1))","div_l_2_color":"yellow","div_l_2_textshadow":"0 0 4px 3px yellow",
        "tab_bar_bgcolor":"radial-gradient(circle, rgba(221, 189, 9, 0.3),rgba(0, 0, 0, 0.1))","profile_hover":"yellow",
        "div_r_1_bg_color":"radial-gradient(circle, rgba(221, 200, 9, 0.3),rgba(0, 0, 0, 0.1))","div_r_2_color":"yellow","div_r_2_textshadow":"0 0 4px 3px yellow",
        "textboxcolor":"yellow","bu_boxshadow":"0 0 12px 5px rgba(15, 51, 1, 0.6)","bu_boxshadow_hover":" 0 0 12px 5px rgba(255, 251, 0, 0.6)",
        "time_date_color":"yellow","name_holder_filter":"drop-shadow(0 5px 8px rgba(255, 208, 0, 0.6))","popup_border_color":"rgba(233, 198, 0, 0.6)",
        "contact_color":"yellow","close_pop_boxshadow":"0 0 12px 5px rgba(22, 21, 18, 0.3)","close_pop_hover_box_shadow":" 0 0 12px 5px rgba(216, 176, 0, 0.8)",
        "c_input_color":"yellow","c_input_placholder_color":"yellow","c_sumit_color":"yellow","c_sumit_hover_box":"0 0 12px 5px rgba(216, 184, 0, 0.8)","pf_image":"./images/images(3).jpg"
        ,"profile_id":"p_3"
       },

       "pritam": {"name": "Vidyanshu Raj","age":"20","email":"worldofgamers788@gmail.com","m.no":"+919608786627","address":"DALTON GANJ, RANCHI,JHARKHAND, India" ,"main_bg_color":"radial-gradient(circle, rgb(214, 182, 0),rgb(0, 0, 0))","main_border_color":" rgba(253, 228, 1, 0.6)",
        "div_m_1_back_color":"rgba(214, 193, 4, 0.3)","div_m_1_box_shadow":" 0 0 20px 5px rgb(255, 217, 0)","image_1_filter":"drop-shadow(0px 9px 12px rgba(255, 196, 0, 0.6))",
        "div_l_1_bg_color":"radial-gradient(circle, rgba(221, 172, 9, 0.3),rgba(0, 0, 0, 0.1))","div_l_2_color":"yellow","div_l_2_textshadow":"0 0 4px 3px yellow",
        "tab_bar_bgcolor":"radial-gradient(circle, rgba(221, 189, 9, 0.3),rgba(0, 0, 0, 0.1))","profile_hover":"yellow",
        "div_r_1_bg_color":"radial-gradient(circle, rgba(221, 200, 9, 0.3),rgba(0, 0, 0, 0.1))","div_r_2_color":"yellow","div_r_2_textshadow":"0 0 4px 3px yellow",
        "textboxcolor":"yellow","bu_boxshadow":"0 0 12px 5px rgba(15, 51, 1, 0.6)","bu_boxshadow_hover":" 0 0 12px 5px rgba(255, 251, 0, 0.6)",
        "time_date_color":"yellow","name_holder_filter":"drop-shadow(0 5px 8px rgba(255, 208, 0, 0.6))","popup_border_color":"rgba(233, 198, 0, 0.6)",
        "contact_color":"yellow","close_pop_boxshadow":"0 0 12px 5px rgba(22, 21, 18, 0.3)","close_pop_hover_box_shadow":" 0 0 12px 5px rgba(216, 176, 0, 0.8)",
        "c_input_color":"yellow","c_input_placholder_color":"yellow","c_sumit_color":"yellow","c_sumit_hover_box":"0 0 12px 5px rgba(216, 184, 0, 0.8)","pf_image":"./images/images(4).jpg"
        ,"profile_id":"p_4"
       }
};

function updatetime(){
    let now = new Date();
    let k = now.toLocaleTimeString();
    document.getElementById("times").textContent= k;
};

setInterval(updatetime,1000);

function show_popup(){
    playaudio();
    document.getElementById("popup").style.display="flex";
}

function hidepopup(){
    playaudio();
    document.getElementById("popup").style.display="none";
}

let active_state ="mujtaba";

function change_pf(a){
    const profile = profiles[a];
    playaudio();
    let k=0;
    document.getElementById("main").style.backgroundImage = profile["main_bg_color"];
    document.getElementById("main").style.borderColor = profile["main_border_color"];
    document.getElementById(profile["profile_id"]).style.transition = "all 0.2s ease";
    document.getElementById(profile["profile_id"]).style.borderColor = profile["div_r_2_color"];
    document.getElementById(profile["profile_id"]).style.borderWidth = "2px";
    document.getElementById(profile["profile_id"]).style.transform = "scale(1.05)";

    document.getElementById(profiles[active_state]["profile_id"]).style.transform = "scale(0.95)";
    document.getElementById(profiles[active_state]["profile_id"]).style.borderWidth = "1px";
    document.getElementById(profiles[active_state]["profile_id"]).style.borderColor = "rgba(255,255,255,0.6)";
    active_state=a;

 


    document.getElementById("div_m_1").style.background = profile["div_m_1_back_color"];
    document.getElementById("div_m_1").style.boxShadow = profile["div_m_1_box_shadow"];

    document.getElementById("div_l_1").style.backgroundImage = profile["div_l_1_bg_color"];
    document.getElementById("div_l_2").style.color = profile["div_l_2_color"];
    document.getElementById("div_l_2").style.textShadow = profile["div_l_2_textshadow"];
    document.getElementById("tab_bar").style.backgroundImage = profile["tab_bar_bgcolor"];
    document.getElementById("div_r_1").style.backgroundImage = profile["div_r_1_bg_color"];
    document.getElementById("div_r_2").style.color = profile["div_r_2_color"];
    document.getElementById("div_r_2").style.textShadow = profile["div_r_2_textshadow"];
    document.getElementById("div_r_2").style.textShadow = profile["div_r_2_textshadow"];
    document.querySelectorAll(".text_box").forEach(element => {
        if(k%2===0){
            
            element.style.color = profile["textboxcolor"];
        }else{
            element.style.color = "white";
        }
        
        k=k+1;
    });
    // document.getElementsByClassName("bu")[0].style.boxShadow = profile["bu_boxshadow"];
    // document.getElementsByClassName("bu")[1].style.boxShadow = profile["bu_boxshadow"];
    document.getElementById("main_image").style.filter = profile["image_1_filter"];
    document.getElementById('main_image').src = profile["pf_image"];
    document.getElementById("time_date").style.color = profile["time_date_color"];
    document.getElementById("statics").style.color = profile["time_date_color"];

    document.getElementById("name_holder").style.filter = profile["name_holder_filter"];
    document.getElementById("name_holder").textContent = profile["name"];
    document.getElementById("popup").style.borderColor = profile["popup_border_color"];
    document.getElementById("contact_us").style.color = profile["contact_color"];
    document.getElementById("span_1").style.color = profile["div_r_2_color"];
    document.getElementById("span_2").style.color = profile["div_r_2_color"];
    document.getElementById("close_pop").style.boxShadow = profile["close_pop_boxshadow"];
    document.querySelectorAll(".c_input").forEach(element => {
        
           element.style.color = profile["c_input_color"];
           element.classList.add("placeholder-"+profile["c_input_placholder_color"]);
        
   });

   
   document.getElementById("c_sumit").style.color = profile["c_sumit_color"];
   document.getElementById("email_field").textContent = "● Email-Address : " + profile.email;
   document.getElementById("phone_field").textContent = "● Phone : " + profile["m.no"];
   document.getElementById("home_address_field").textContent = "● Home-Address : " + profile.address; 
   



}

let list =["mujtaba","satyam","devesh","pritam"];

function move(a){
    if(a===1){
     const index =list.indexOf(active_state);
     if(index===3){
        change_pf(list[0]);
     }else{
        change_pf(list[index+1]);
     }
    }else{
        const index =list.indexOf(active_state);
        if(index===0){
            change_pf(list[3]);
        }else{
            change_pf(list[index-1]);
        }
    }
}

function playaudio(){
    const sound = document.getElementById("audioa");
    sound.currentTime=0;
    sound.play();
}