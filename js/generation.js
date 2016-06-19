/**************************************
* Generation: A CSS3 Based framework. *
*      This is Generation 1.0         *
**************************************/

var Generation = Generation || {
	version: "1",
	get: function(id)
	{
		return this._parse(document.getElementById(id));
	},
	_parse: function(el)
	{
		return {
			original: el,
			click: function(fnc)
			{
				this.original.addEventListener("click", fnc);
			},
			hover: function(fnc)
			{
				this.original.addEventListener("mouseenter", fnc);
			},
			leave: function(fnc)
			{
				this.original.addEventListener("mouseleave", fnc);
			},
			move: function(fnc)
			{
				this.original.addEventListener("mousemove", fnc);
			},
			mousedown: function(fnc)
			{
				this.original.addEventListener("mousedown", fnc);
			},
			mouseup: function(fnc)
			{
				this.original.addEventListener("mouseup", fnc);
			},
			keydown: function(fnc)
			{
				this.original.addEventListener("keydown", fnc);
			},
			keyup: function(fnc)
			{
				this.original.addEventListener("keyup", fnc);
			},
			keypress: function(fnc)
			{
				this.original.addEventListener("keypress", fnc);
			},
			html: function(h)
			{
				if(typeof h === "undefined")
					return this.original.innerHTML;
				this.original.innerHTML = h;
			},
			value: function(h)
			{
				if(typeof h === "undefined")
					return this.original.value;
				this.original.value = h;
			},
			css: function(map)
			{
				if(typeof h === "undefined")
					return this.original.style;
				for(var i in map)
				{
					this.original.style[i] = map[i];
				}
			}
		};
	},
	compatible: function(v)
	{
		if(this.version === v)
			return true;
		return false;
	}
};
