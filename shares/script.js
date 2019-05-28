function getMobileOperatingSystem() { // Определение операционной системы
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	// Windows Phone must come first because its UA also contains "Android"
	if (/windows phone/i.test(userAgent)) {
		return "Windows Phone";
	}

	if (/android/i.test(userAgent)) {
		return "Android";
	}

	// iOS detection from: http://stackoverflow.com/a/9039885/177710
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "iOS";
	}

	return "unknown";
}







window.onload = function () {

	//Автоматическое добавление data-size
	/* 	$(".zooming a").attr("data-size", function (index, value) {
			let next = $(this).children();
			if (value) {
				return;
			} else {
				let imageNaturalWidth = next.prop('naturalWidth');
				let imageNaturalHeight = next.prop('naturalHeight');
				return imageNaturalWidth + "x" + imageNaturalHeight;
			}
		}); */

	let zooming = document.querySelectorAll('.zooming a');
	for (let k = 0; k < zooming.length; k++) {
		let children = zooming[k].firstElementChild;
		let data = zooming[k].dataset.size;
		if (data) {
			continue;
		} else {
			let imageNaturalWidth = children.naturalWidth;
			let imageNaturalHeight = children.naturalHeight;
			zooming[k].dataset.size = `${imageNaturalWidth}x${imageNaturalHeight}`;
		}
	}
	//Автоматическое добавление data-size end



	//Автоматическое добавление html-кода для плагина 
	let body = document.querySelector('body');
	body.insertAdjacentHTML('afterBegin', '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__counter"></div><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>');
	//Автоматическое добавление html-кода для плагина end


	//Автоматическое добавление к союзам неразрывный пробел
	/* let vrez = $(".vrez");
	let podzag = $(".podzag");

	vrez.html(function (index, value) {
		return changeUnions(index, value);
	});

	podzag.html(function (index, value) {
		return changeUnions(index, value);
	});

	function changeUnions(index, value) {
		let text = value.replace(/\s(и)\s/g, ' $1&nbsp;')
			.replace(/\s(к)\s/g, ' $1&nbsp;')
			.replace(/\s(в)\s/g, ' $1&nbsp;')
			.replace(/\s(же)\s/g, ' $1&nbsp;')
			.replace(/\s(ибо)\s/g, ' $1&nbsp;')
			.replace(/\s(или)\s/g, ' $1&nbsp;')
			.replace(/\s(как)\s/g, ' $1&nbsp;')
			.replace(/\s(о)\s/g, ' $1&nbsp;')
			.replace(/\s(с)\s/g, ' $1&nbsp;')
			.replace(/\s(у)\s/g, ' $1&nbsp;')
			.replace(/\s(на)\s/g, ' $1&nbsp;');
		return text;
	} */
	//Автоматическое добавление к союзам неразрывний пробел end






	// Резинка

	/* 	class Bounces {
			constructor(options) {
				this.selector = document.querySelector(options.selector);
				this.selectorLength = this.selector.scrollHeight - innerHeight;

				this.transition = 'all .3s ease-out';

				this.startPoint = 0;
				this.nowPoint = 0;

				this.translate = 0;
				this.direction = '';
				this.return = false;

				document.addEventListener('touchstart', this.setTouchstart.bind(this), false);
				document.addEventListener('touchmove', this.setTouchmove.bind(this), false);
				document.addEventListener('touchend', this.setTouchend.bind(this), false);
			}

			setTouchstart(event) {
				event.stopPropagation();
				this.startPoint = event.changedTouches[0].clientY;
			}

			setTouchmove(event) {
				this.nowPoint = event.changedTouches[0].clientY;
				var yAbs = Math.abs(this.startPoint - this.nowPoint);
				if (yAbs > 0) {
					if (this.nowPoint < this.startPoint) {
						this.direction = 't';
						if (window.pageYOffset >= this.selectorLength) {
							this.return = true;
							this.doBounces();
						}
					} else {
						this.direction = 'b';
						if (window.pageYOffset === 0) {
							this.return = true;
							this.doBounces();
						}
					}
				}
			}

			setTouchend(event) {
				if (this.return) {
					this.returnTranslate();
				}
			}

			returnTranslate() {
				this.selector.style.transition = this.transition;
				setTimeout(() => {
					this.selector.style.transition = 'none';
				}, 300);
				this.selector.style.transform = 'translateY(' + 0 + 'px)';
				this.translate = 0;
				this.return = false;
			}

			doBounces() {
				this.translate += 3;
				if (this.direction === 'b') {
					this.selector.style.transform = 'translateY(' + this.translate + 'px)';
				} else {
					this.selector.style.transform = 'translateY(-' + this.translate + 'px';
				}
			}
		}


		if (getMobileOperatingSystem() === "Android") {
			let bounces = new Bounces({
				selector: 'body',
			});
		} */

	// Резинка end













	// Анимация с библиотекой Animate.css

	/* 	let options = { //Значения по умолчанию
			selector: '',
			animationName: 'fadeIn',
		};

		function animateCSS(settings) {
			options = Object.assign(options, settings);
			let node = document.querySelectorAll(options.selector);
			delete options.selector;
			const animationName = options.animationName;
			delete options.animationName;
			const list = Object.values(options);
			for (let k = 0; k < node.length; k++) {
				node[k].classList.add(...list);
				node[k].dataset.aos = animationName;
			}
		}

		animateCSS({
			selector: '.test',
			animationName: 'fadeIn',
			// Дописываются ключи (не важно какое имя) с нужными значениями (css классами) 
		});


		AOS.init({
			useClassNames: true,
			initClassName: false,
			animatedClassName: 'animated',
		}); */

	// Анимация с библиотекой Animate.css end









	// Анимация AOS

	function AOSAnimate(settings) {
		let node = document.querySelectorAll(settings.selector);
		let arrData = settings.animationData.map(function (item) {
			let data = item.split('=')[0];
			let name = item.split('=')[1].slice(1, -1);
			return {
				dataAttr: data,
				nameAttr: name,
			};
		});

		for (let k = 0; k < node.length; k++) {
			for (let m = 0; m < arrData.length; m++) {
				node[k].setAttribute(arrData[m].dataAttr, arrData[m].nameAttr);
			}
		}
	}


	AOSAnimate({
		selector: '.test-2',
		animationData: ['data-aos="fade-up"'],
	});



	AOS.init();

	// Анимация  AOS end







}