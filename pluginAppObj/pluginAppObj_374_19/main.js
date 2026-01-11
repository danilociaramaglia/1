function justifiedgallery_pluginAppObj_374_19() {
	var $gallery,
        grid = "",
        loaders = [],
        loadingTimeout,
        effect = "none";

    
    
	x5engine.boot.push(function(){

        grid = $("#jg_pluginAppObj_374_19 .jg-container");
		$gallery = $('#jg_pluginAppObj_374_19 .jg-container').justifiedGallery({
			rowHeight : 260,
			margins : 6,
            justifyThreshold: 0.90,
            captions: false,
            thumbnailPath: function (currentPath, width, height, image) {
                var origImgPath = image.dataset.origSrc;
                var thumbH = parseInt(image.dataset.th);
                var fullwidthH = parseInt(image.dataset.fwh);
                var showboxH = parseInt(image.dataset.sbh);

                if (height > thumbH){
                    if ((fullwidthH > showboxH && height > showboxH) || (fullwidthH < showboxH && height < fullwidthH)) // possible case to choose full width image
                        return origImgPath.replace(/(.*)(\..*)/, "$1_fw$2");
                    else // all other cases, included the equality between sizes. Preferred choice cause this image is loaded also for showbox
                        return origImgPath.replace(/(.*)(\..*)/, "$1_sb$2");
                }
                else
                    return origImgPath;
            }
		});
    
        $gallery.justifiedGallery().on('jg.complete', function (e) {
			resized_pluginAppObj_374_19();
		});
		$gallery.justifiedGallery().on('jg.resize', function (e) {
			resized_pluginAppObj_374_19();
		});
    
        
        if ("online" !== 'uipreview'){    
            x5engine.utils.onElementInViewPort($("#jg_pluginAppObj_374_19 .jg-container")[0],loadImage,$("#jg_pluginAppObj_374_19 .jg-container .grid-item .item-img:lt(1)").height() /3);
        }
        else {
            loadImage();
        }
    
		
	});
    
    function loadImage(){ 
        $gallery.imagesLoaded().progress(function(imgLoad, image){}).done(function (instance) {         
            if (effect !== "none") {
                loaders.push(new GridLoaderFx($gallery));
                applyFx();
            }
        });
    }
    
	function create_showbox(){
        $("#jg_pluginAppObj_374_19 .grid-item.showbox").off("click.sb");
        $("#jg_pluginAppObj_374_19 .grid-item.showbox").on("click.sb", function(e) { 
            var starting_index = parseInt($(this).attr("data-index"),10);
            var images = ['pluginAppObj/pluginAppObj_374_19/YF42s_sb.jpg','pluginAppObj/pluginAppObj_374_19/Obtri7w_sb.jpg','pluginAppObj/pluginAppObj_374_19/VDS3nn_sb.jpg','pluginAppObj/pluginAppObj_374_19/2aBcD_sb.jpg','pluginAppObj/pluginAppObj_374_19/8vd410_sb.jpg','pluginAppObj/pluginAppObj_374_19/3acvT_sb.jpg','pluginAppObj/pluginAppObj_374_19/ZcZa3_sb.jpg','pluginAppObj/pluginAppObj_374_19/1gllbA1_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr42-copiaj_sb.jpg','pluginAppObj/pluginAppObj_374_19/6TTg91ds_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1171-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/27ap_sb.jpg','pluginAppObj/pluginAppObj_374_19/bJHc11_sb.jpg','pluginAppObj/pluginAppObj_374_19/1JJHsz3_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande107_sb.jpg','pluginAppObj/pluginAppObj_374_19/cZa1n_sb.jpg','pluginAppObj/pluginAppObj_374_19/37ap_sb.jpg','pluginAppObj/pluginAppObj_374_19/1JHszv_sb.jpg','pluginAppObj/pluginAppObj_374_19/4c_sb.jpg','pluginAppObj/pluginAppObj_374_19/nh3_sb.jpg','pluginAppObj/pluginAppObj_374_19/nh2_sb.jpg','pluginAppObj/pluginAppObj_374_19/1a_sb.jpg','pluginAppObj/pluginAppObj_374_19/hggg_sb.jpg','pluginAppObj/pluginAppObj_374_19/16c_sb.jpg','pluginAppObj/pluginAppObj_374_19/7c_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1090_sb.jpg','pluginAppObj/pluginAppObj_374_19/5c_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr43-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/10c_sb.jpg','pluginAppObj/pluginAppObj_374_19/nh4_sb.jpg','pluginAppObj/pluginAppObj_374_19/d7jjm_sb.jpg','pluginAppObj/pluginAppObj_374_19/kol_sb.jpg','pluginAppObj/pluginAppObj_374_19/8cvc8_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr4-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr56-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr50-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr54-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/9c_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr52-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/12c_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr57-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/17c_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1098_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr51-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/czCF70aa_sb.jpg','pluginAppObj/pluginAppObj_374_19/v54saz_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande42_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande7_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande0_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande80_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande81_sb.jpg','pluginAppObj/pluginAppObj_374_19/cxvd410_sb.jpg','pluginAppObj/pluginAppObj_374_19/09lil09_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1161_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1081_sb.jpg','pluginAppObj/pluginAppObj_374_19/1nbwre_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1011_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr62-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/nh5nh_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande104_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr59-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr58-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr67-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande99_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande98_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande100_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1137-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1003_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr66-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1160-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/i88u_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr61_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr26-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr25-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr70-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr63-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/14c_sb.jpg','pluginAppObj/pluginAppObj_374_19/15c_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr55-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/11c_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr64-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1059_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr68-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1144_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr33-copia-2_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1046_sb.jpg','pluginAppObj/pluginAppObj_374_19/gran12-c_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr5-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr6-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/nh1_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1162_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1055-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/61m0s3_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1062_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1140-copia-2_sb.jpg','pluginAppObj/pluginAppObj_374_19/0g54ca_sb.jpg','pluginAppObj/pluginAppObj_374_19/20121202_205740-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/20121202_200919-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/b4c43p_sb.jpg','pluginAppObj/pluginAppObj_374_19/looo_sb.jpg','pluginAppObj/pluginAppObj_374_19/P1000526-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1096_sb.jpg','pluginAppObj/pluginAppObj_374_19/nh5_sb.jpg','pluginAppObj/pluginAppObj_374_19/20121202_202002-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1065-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1153-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1134_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF11609-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr65-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1139_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr69_sb.jpg','pluginAppObj/pluginAppObj_374_19/6m0s3ce_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1157-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/xs912_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1166_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1105_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1061-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/b76z0o_sb.jpg','pluginAppObj/pluginAppObj_374_19/gr48_sb.jpg','pluginAppObj/pluginAppObj_374_19/DSCF1082_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande91-copia_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande70_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande71_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande89_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande84_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande92_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande88_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande47-c_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande6--2-_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande49_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande90_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande9_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande109_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande101_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande102_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande105_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande85_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande106_sb.jpg','pluginAppObj/pluginAppObj_374_19/grande103_sb.jpg','pluginAppObj/pluginAppObj_374_19/m09u7A_sb.jpg','pluginAppObj/pluginAppObj_374_19/xmiy_sb.jpg','pluginAppObj/pluginAppObj_374_19/po7xc_sb.jpg','pluginAppObj/pluginAppObj_374_19/bv4h_sb.jpg'];var imagesDescriptions = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
            var medias = [];
            for (var i = 0; i < images.length; i++) {
                medias[i] = {url: images[i], type: "image", description: imagesDescriptions[i]};
            } 
            x5engine.imShowBox({media: medias}, starting_index, $(this));
            return false; 
        });
    }

    function resized_pluginAppObj_374_19(){
        $('#jg_pluginAppObj_374_19 .grid-item').each(function(){
            $(this).find('.overlay-content').css({width: $(this).width(), height: $(this).height()});
        });
    }
    
    function applyFx() {
        loadingTimeout = setTimeout(function () {
            // Apply effect.
            loaders[0]._render();
        }, 500);
    }
    
    function GridLoaderFx(el, options) {
        this.el = el;
        this.items = $(el).find('.grid-item .item-img');
    }

    GridLoaderFx.prototype._render = function () {
        // Reset styles.
        this._resetStyles();

        var self = this,
            effectSettings = this.effects[effect],
            animeOpts = effectSettings.animeOpts

        if (effectSettings.perspective != undefined) {
            [].slice.call(this.items).forEach(function (item) {
                item.parentNode.style.WebkitPerspective = item.parentNode.style.perspective = effectSettings.perspective + 'px';
            });
        }

        if (effectSettings.origin != undefined) {
            [].slice.call(this.items).forEach(function (item) {
                item.style.WebkitTransformOrigin = item.style.transformOrigin = effectSettings.origin;
            });
        }

        if (effectSettings.lineDrawing != undefined) {
            [].slice.call(this.items).forEach(function (item) {
                // Create SVG.
                var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                    path = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
                    itemW = item.offsetWidth-0.1,
                    itemH = item.offsetHeight;

                svg.setAttribute('width', itemW + 'px');
                svg.setAttribute('height', itemH + 'px');
                svg.setAttribute('viewBox', '0 0 ' + itemW + ' ' + itemH);
                svg.setAttribute('class', 'grid__deco');
                path.setAttribute('d', 'M0,0 l' + itemW + ',0 0,' + itemH + ' -' + itemW + ',0 0,-' + itemH);
                path.setAttribute('stroke-dashoffset', anime.setDashoffset(path));
                svg.appendChild(path);
                item.parentNode.appendChild(svg);
            });

            var animeLineDrawingOpts = effectSettings.animeLineDrawingOpts;
            animeLineDrawingOpts.targets = document.querySelectorAll('#jg_pluginAppObj_374_19 .jg-container .grid__deco > path');
            anime.remove(animeLineDrawingOpts.targets);
            anime(animeLineDrawingOpts);
        }

        if (effectSettings.revealer != undefined) {
            [].slice.call(this.items).forEach(function (item) {
                var revealer = document.createElement('div');
                revealer.className = 'grid__reveal';
                if (effectSettings.revealerOrigin != undefined) {
                    revealer.style.transformOrigin = effectSettings.revealerOrigin;
                }
                if (effectSettings.revealerColor != undefined) {
                    revealer.style.backgroundColor = 'rgba(159, 171, 176, 1)';
                }
                item.parentNode.appendChild(revealer);
            });

            var animeRevealerOpts = effectSettings.animeRevealerOpts;
            animeRevealerOpts.targets = document.querySelectorAll('#jg_pluginAppObj_374_19 .jg-container .grid__reveal');
            animeRevealerOpts.begin = function (obj) {
                for (var i = 0, len = obj.animatables.length; i < len; ++i) {
                    obj.animatables[i].target.style.opacity = 1;
                }
            };
            anime.remove(animeRevealerOpts.targets);
            anime(animeRevealerOpts);
        }

        if (effectSettings.itemOverflowHidden) {
            [].slice.call(this.items).forEach(function (item) {
                item.parentNode.style.overflow = 'hidden';
            });
        }

        animeOpts.targets = effectSettings.sortTargetsFn && typeof effectSettings.sortTargetsFn === 'function' ? [].slice.call(this.items).sort(effectSettings.sortTargetsFn) : document.querySelectorAll("#jg_pluginAppObj_374_19 .jg-container .item-img");
        animeOpts.complete = animeComplete;
        anime.remove(animeOpts.targets);
        anime(animeOpts);
    };
    
    function animeComplete(anim) {
        if (anim.completed)
            $("#jg_pluginAppObj_374_19 .jg-container .grid-item img.item-img").removeClass("back-show").addClass("no-show");
    }
    

    GridLoaderFx.prototype._resetStyles = function () {
        this.el.style = "";
        this.el.style.perspective = "";
        this.el.style.WebkitPerspective = this.el.style.perspective = 'none';
        [].slice.call(this.items).forEach(function (item) {
            var gItem = item.parentNode;
            item.style.opacity = 0;
            item.style.WebkitTransformOrigin = item.style.transformOrigin = '50% 50%';
            item.style.transform = 'none';

            var svg = item.parentNode.querySelector('svg.grid__deco');
            if (svg) {
                gItem.removeChild(svg);
            }

            var revealer = item.parentNode.querySelector('.grid__reveal');
            if (revealer) {
                gItem.removeChild(revealer);
            }

            gItem.style.overflow = '';
        });
    };

	/**
	 * Effects.
	 */
	GridLoaderFx.prototype.effects = {
		'Hapi': {
			animeOpts: {
				duration: function(t,i) {
					return 600 + i*75;
				},
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0,1]	
			}
		},
		'Amun': {
			// Sort target elements function.
			sortTargetsFn: function(a,b) {
				var aBounds = a.getBoundingClientRect(),
					bBounds = b.getBoundingClientRect();

				return (aBounds.left - bBounds.left) || (aBounds.top - bBounds.top);
			},
			animeOpts: {
				duration: function(t,i) {
					return 500 + i*50;
				},
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: function(t,i) {
						return 250 + i*50;
					},
					easing: 'linear'
				},
				translateY: [400,0]
			}
		},
		'Kek': {
			sortTargetsFn: function(a,b) {
				return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
			},
			animeOpts: {
				duration: 800,
				easing: [0.1,1,0.3,1],
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				translateX: [-500,0],
				rotateZ: [15,0]
			}
		},
		'Isis': {
			animeOpts: {
				duration: 900,
				elasticity: 500,
				delay: function(t,i) {
					return i*15;
				},
				opacity: {
					value: [0,1],
					duration: 300,
					easing: 'linear'
				},
				translateX: function() {
					return [anime.random(0,1) === 0 ? 100 : -100,0];
				},
				translateY: function() {
					return [anime.random(0,1) === 0 ? 100 : -100,0];
				}
			}
		},
		'Montu': {
			perspective: 800,
			origin: '50% 0%',
			animeOpts: {
				duration: 1500,
				elasticity: 400,
				delay: function(t,i) {
					return i*75;
				},
				opacity: {
					value: [0,1],
					duration: 1000,
					easing: 'linear'
				},
				rotateX: [-90,0]
			}
		},
		'Osiris': {
			perspective: 3000,
			animeOpts: {
				duration: function() {
					return anime.random(500,1000)
				},
				easing: [0.2,1,0.3,1],
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					duration: 700,
					easing: 'linear'
				},
				translateZ: {
					value: [-3000,0],
					duration: 1000
				},
				rotateY: ['-1turns',0]
			}
		},
		'Satet': {
			animeOpts: {
				duration: 800,
				elasticity: 600,
				delay: function(t,i) {
					return i*100;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				scaleX: {
					value: [0.4,1]
				},
				scaleY: {
					value: [0.6,1],
					duration: 1000
				}
			}
		},
		'Atum': {
			sortTargetsFn: function(a,b) {
				var docScrolls = {top : document.body.scrollTop + document.documentElement.scrollTop},
					y1 = window.innerHeight + docScrolls.top,
					aBounds = a.getBoundingClientRect(),
					ay1 = aBounds.top + docScrolls.top + aBounds.height/2,
					bBounds = b.getBoundingClientRect(),
					by1 = bBounds.top + docScrolls.top + bBounds.height/2;

				return Math.abs(y1-ay1) - Math.abs(y1-by1);
			},
			perspective: 1000,
			origin: '50% 0%',
			animeOpts: {
				duration: 800,
				easing: [0.1,1,0.3,1],
				delay: function(t,i) {
					return i*35;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				translateX: [100,0],
				translateY: [-100,0],
				translateZ: [400,0],
				rotateZ: [10,0],
				rotateX: [75,0]
			}
		},
		'Ra': {
			origin: '50% 0%',
			animeOpts: {
				duration: 500,
				easing: 'easeOutBack',
				delay: function(t,i) {
					return i * 100;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				translateY: [400,0],
				scaleY: [
					{value: [3,0.6], delay: function(t,i) {return i * 100 + 120;}, duration: 300, easing: 'easeOutExpo'},
					{value: [0.6,1], duration: 1400, easing: 'easeOutElastic'}
				],
				scaleX: [
					{value: [0.9,1.05], delay: function(t,i) {return i * 100 + 120;}, duration: 300, easing: 'easeOutExpo'},
					{value: [1.05,1], duration: 1400, easing: 'easeOutElastic'}
				]
			}
		},
		'Sobek': {
			animeOpts: {
				duration: 600,
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i*100;
				},
				opacity: {
					value: [0,1],
					duration: 100,
					easing: 'linear'
				},
				translateX: function(t,i) {
					var docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft},
						x1 = window.innerWidth/2 + docScrolls.left,
						tBounds = t.getBoundingClientRect(),
						x2 = tBounds.left +docScrolls.left + tBounds.width/2;

					return [x1-x2,0];
				},
				translateY: function(t,i) {
					var docScrolls = {top : document.body.scrollTop + document.documentElement.scrollTop},
						y1 = window.innerHeight + docScrolls.top,
						tBounds = t.getBoundingClientRect(),
						y2 = tBounds.top + docScrolls.top + tBounds.height/2;

					return [y1-y2,0];
				},
				rotate: function(t,i) {
					var x1 = window.innerWidth/2,
						tBounds = t.getBoundingClientRect(),
						x2 = tBounds.left + tBounds.width/2;

					return [x2 < x1 ? 90 : -90,0];
				},
				scale: [0,1]
			}
		},
		'Ptah': {
			itemOverflowHidden: true,
			sortTargetsFn: function(a,b) {
				return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
			},
			origin: '100% 0%',
			animeOpts: {
				duration: 500,
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: 400,
					easing: 'linear'
				},
				rotateZ: [45,0]
			}
		},
		'Bes': {
			revealer: true,
			revealerOrigin: '100% 50%',
			animeRevealerOpts: {
				duration: 800,
				delay: function(t,i) {
					return i*75;
				},
				easing: 'easeInOutQuart',
				scaleX: [1,0]
			},
			animeOpts: {
				duration: 800,
				easing: 'easeInOutQuart',
				delay: function(t,i) {
					return i*75;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0.8,1]
			}
		},
		'Seker': {
			revealer: true,
			revealerOrigin: '50% 100%',
			animeRevealerOpts: {
				duration: 500,
				delay: function(t,i) {
					return i*50;
				},
				easing: [0.7,0,0.3,1],
				translateY: [100,0],
				scaleY: [1,0]
			},
			animeOpts: {
				duration: 500,
				easing: [0.7,0,0.3,1],
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					duration: 400,
					easing: 'linear'
				},
				translateY: [100,0],
				scale: [0.8,1]
			}
		},
		'Nut': {
			revealer: true,
			revealerColor: '#1d1d1d',
			itemOverflowHidden: true,
			animeRevealerOpts: {
				easing: 'easeOutCubic',
				delay: function(t,i) {
					return i*100;
				},
				translateX: [
					{value: ['101%','0%'], duration: 400 },
					{value: ['0%','-101%'], duration: 400}
				]
			},
			animeOpts: {
				duration: 900,
				easing: 'easeOutCubic',
				delay: function(t,i) {
					return 400+i*100;
				},
				opacity: {
					value: 1,
					duration: 1,
					easing: 'linear'
				},
				scale: [0.8,1]
			}
		},
		'Shu': {
			lineDrawing: true,
			animeLineDrawingOpts: {
				duration: 800,
				delay: function(t,i) {
					return i*150;
				},
				easing: 'easeInOutSine',
				strokeDashoffset: [anime.setDashoffset, 0],
				opacity: [
					{value: [0,1]},
					{value: [1,0], duration: 200, easing: 'linear', delay:500}
				]
			},
			animeOpts: {
				duration: 800,
				easing: [0.2,1,0.3,1],
				delay: function(t,i) {
					return i*150 + 800;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0.5,1]
			}
		}
	};
}