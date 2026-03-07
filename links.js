
window.acts = function(type){
    if (typeof type !== "string") return "";

    let main = State.variables.CLOUD;

    let mom = main + "mom/";
    let sis = main + "sis/";
    let aunt = main + "aunt/";
    let doc = main + "doc/";
    let you = main + "you/";

    let mom_l_home = mom + "l/home/";
    let mom_l_mp = mom + "l/mp/";
    let mom_c_home = mom + "c/home/";
    let mom_c_mp = mom + "c/mp/";

    let sis_d_home = sis + "d/home/";
    let sis_d_bm = sis + "d/bm/";
    let sis_s_home = sis + "s/home/";
    let sis_s_bm = sis + "s/bm/";


    let vid = {

        mom_l_hj1: mom_l_home + "hj1/",
        mom_l_hj2: mom_l_home + "hj2/",
        mom_l_bj1: mom_l_home + "bj1/",
        mom_l_bj2: mom_l_home + "bj2/",
        mom_l_sex1: mom_l_home + "sex1/",
        mom_l_sex2: mom_l_home + "sex2/",
        mom_l_anal1: mom_l_home + "anal1/",

        mom_l_mp_bj1: mom_l_home + "bj1/",
        mom_l_mp_tj2: mom_l_home + "tj2/",

        mom_c_tease1: mom_c_home + "tease1/",
        mom_c_tease2: mom_c_home + "tease1/",
        mom_c_solo1: mom_c_home + "solo1/",
        mom_c_bj1: mom_c_home + "bj1/",
        mom_c_sex1: mom_c_home + "sex1/",
        mom_c_sex2: mom_c_home + "sex2/",

        mom_c_mp_hj1: mom_c_mp + "hj1/",

        sis_d_hj1: sis_d_home + "hj1/",
        sis_d_hj2: sis_d_home + "hj2/",
        sis_d_bj1: sis_d_home + "bj1/",
        sis_d_bj2: sis_d_home + "bj2/",
        sis_d_peg1: sis_d_home + "peg1/",
        sis_d_sex1: sis_d_home + "sex1/",
        sis_d_toy1: sis_d_home + "toy1/",

        sis_s_hj1: sis_s_home + "hj1/",
        sis_s_hj2: sis_s_home + "hj2/",
        sis_s_bj1: sis_s_home + "bj1/",
        sis_s_sex1: sis_s_home + "sex1/",
        sis_s_sex2: sis_s_home + "sex2/",
        sis_s_toy1: sis_s_home + "anal1/"
    };  

    if(!vid[type])return "";
    return vid[type];
};


window.rndacts = function(type) {
    if (typeof type !== "string") return "";

    let main = State.variables.CLOUD;

    let mp = main + "mp/";
    let hhc = main + "hhc/";

    let vid = { 
        hhc_sex: hhc + "sex/",
        mp_work1: mp + "work/1/" + (Math.floor(Math.random() * 32) + 1) + ".webp",
        mp_work2: mp + "work/2/" + (Math.floor(Math.random() * 32) + 1) + ".webp",
        mp_work3: mp + "work/3/" + (Math.floor(Math.random() * 32) + 1) + ".webp",
        mp_work4: mp + "work/4/" + (Math.floor(Math.random() * 32) + 1) + ".webp"
    };

    if (!vid[type]) return "";
    return vid[type];
};



window.rndgifs = function(type) {
    if (typeof type !== "string") return "";

    let main = State.variables.CLOUD;

    let vid = {
        hentai: (main + "hentaigifs/" + Math.floor(Math.random() * 34) + 1 + ".webp"),
        porn: (main + "gifs/" + Math.floor(Math.random() * 32) + 1 + ".webp")
    };

    if (!vid[type]) return "";
    return (vid[type]);
};