function Yamin() {
	var cho_list = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
	var joong_list = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
	var jong_list = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
	var rules = [
		["머", "대"],
		["대", "머"],
		["며", "띠"],
		["명", "띵"],
		["디", "ㅁ"],
		["광", "팡"],
		["피", "끠"],
		["귀", "커"],
		["커", "귀"],
		["유", "윾"],
		["비", "네"],
		["빅", "넥"],
		["네", "비"],
		["넥", "빅"],
		["우", "윽"],
		["왕", "앟"],
		["근", "ㄹ"],
		["비버", "뜨또"],
		["비냉", "ㅇ도뜨"],
		["오우야", "퍄"],
		["또", "SE"],
		["복복", "뾲"],
		["조조", "쬬"],
		["돌돔", "똚"],
		["존좋", "쬲"],
		["부부", "쀼"],
		["장", "튽"],
		["号哭", "믁뽓"], 
		["시", "N"],
		["드", "⊆"],
		["김", "숲"],
		["식", "싀"]
	];
	var inter;
	var trans;
	var reg_inter;
	var reg_trans;
    function init() {
	    inter = [];
	    trans = [];
	    for(var i in rules) {
		    inter.push(rules[i][0]);
		    trans.push(rules[i][1]);
	    }
	    reg_inter = new RegExp(inter.join("|"), "g");
	    reg_trans = new RegExp(trans.join("|"), "g");
    }
    this.convert = function(input) {
	    return input.replace(reg_inter, function(yamin){
			return trans[inter.indexOf(yamin)];
		});
    };
    this.translate = function(input) {
	    return input.replace(reg_trans, function(hoonmin){
			return inter[trans.indexOf(hoonmin)];
		});
    };
    this.disassemble = function(input) {
		var code = input.charCodeAt(0) - 0xAC00;
		var jong = code % 28;
		var joong = ((code - jong) / 28) % 21;
		var cho = parseInt(((code - jong) / 28) / 21);
		return {
			"jong": jong_list[jong],
			"joong": joong_list[joong],
			"cho": cho_list[cho]
		};
    };
    init();
}
