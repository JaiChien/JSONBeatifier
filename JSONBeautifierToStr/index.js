(function(){

	let JSONBeautifierToStr = function(data){

		let obj =function(d, dep){
			let depNow = dep+1
			
			if(typeof(d)=="string"||typeof(d)=='number'){
				return '"'+d+'",'
			}else if(Array.isArray(d)){
				let str = "["
				for(let k in d){
					str+='\n'

					for(let i=0;i<depNow;++i){
						str+='\t'
					}

					str+=obj(d[k],depNow)
				}
				str=str.slice(0,(str.length-1))
				str+='\n'
				
				for(let i=0;i<dep;++i){
					str+='\t'
				}

				str+="],"
				return str
			}else{
				let str = "{"
				for(let k in d){
					str+='\n'

					for(let i=0;i<depNow;++i){
						str+='\t'
					}

					str+='"'+k+'":'+obj(d[k],depNow)
				}
				str=str.slice(0,(str.length-1))
				str+='\n'
				
				for(let i=0;i<dep;++i){
					str+='\t'
				}

				str+="},"
				return str
			}
		}

		let start = function(d){
			let dep = 1
			let str="{"
			for(let key in d){
				str+='\n'
				str+='\t'
				str+='"'+key+'":'+obj(d[key], dep)
			}
			str=str.slice(0,(str.length-1))
			str+='\n'
			str+="}"
			return str
		}

		return start(data)
	}

	// console.log(JSONBeautifierToStr({a:"123",bbb:{ccc:"123",ddd:{eee:"123"}}}))
	if (typeof exports == "object") {
	    module.exports = JSONBeautifierToStr;
	} else if (typeof define == "function" && define.amd) {
	    define([], function() {
	        return JSONBeautifierToStr;
	    })
	} else if (window.Vue) {
	    Vue.use(JSONBeautifierToStr);
	}
	// vue-cookies can exist independently,no dependencies library
	if(typeof window!=="undefined"){
	    window.JSONBeautifierToStr = JSONBeautifierToStr;
	}

}());
