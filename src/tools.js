export const empty_board = {
    "18" : null, "28" : null, "38" : null, "48" : null, "58" : null, "68" : null, "78" : null, "88" : null,
    "17" : null, "27" : null, "37" : null, "47" : null, "57" : null, "67" : null, "77" : null, "87" : null,
    "16" : null, "26" : null, "36" : null, "46" : null, "56" : null, "66" : null, "76" : null, "86" : null,
    "15" : null, "25" : null, "35" : null, "45" : null, "55" : null, "65" : null, "75" : null, "85" : null,
    "14" : null, "24" : null, "34" : null, "44" : null, "54" : null, "64" : null, "74" : null, "84" : null,
    "13" : null, "23" : null, "33" : null, "43" : null, "53" : null, "63" : null, "73" : null, "83" : null,
    "12" : null, "22" : null, "32" : null, "42" : null, "52" : null, "62" : null, "72" : null, "82" : null,
    "11" : null, "21" : null, "31" : null, "41" : null, "51" : null, "61" : null, "71" : null, "81" : null
};

export const default_positions = {
    BR : ["18", "88"],
    BN : ["28", "78"],
    BB : ["38", "68"],
    BQ : ["48"],
    BK : ["58"],
    BP : ["17", "27", "37", "47", "57", "67", "77", "87"],
    
    WR : ["11", "81"],
    WN : ["21", "71"],
    WB : ["31", "61"],
    WQ : ["41"],
    WK : ["51"],
    WP : ["12", "22", "32", "42", "52", "62", "72", "82"],
};

export function change_box_class(box_class_name, new_class){
    return box_class_name.substring(0, 4) + new_class;
}

export function detect_click_target(e){

    if (e.target.className.substring(0, 3) !== "bsq" && e.target.className.substring(0, 3) !== "wsq"){
        return false;
    }
    let id = e.target.id, className = e.target.className;

    return {
        "id" : id,
        "piece" : className.substring(4, 7),
    };
}