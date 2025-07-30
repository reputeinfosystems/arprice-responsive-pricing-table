"use strict";
jQuery( document ).on(
	'click',
	'.tve_tab_title_item',
	function(){
		setTimeout(
			function() {
				arplite_remove_column_height();
				arplite_hide_blank_rows();
				arplite_header_title_responsive();
				arplite_short_code_responsive();
				arplite_price_wrapper_responsive();
				arplite_column_desc_responsive();
				arplite_set_best_plan_button_height();
				arplite_button_height_responsive();
				arplite_adjust_column_height();
			},
			1000
		);
		arplite_responsive_template_width_calculation();
		adjust_template_footer_height();
	}
);
jQuery( document ).on(
	'click',
	'.vc_tta-tab',
	function(){
		setTimeout(
			function() {
				arplite_remove_column_height();
				arplite_hide_blank_rows();
				arplite_header_title_responsive();
				arplite_short_code_responsive();
				arplite_price_wrapper_responsive();
				arplite_column_desc_responsive();
				arplite_set_best_plan_button_height();
				arplite_button_height_responsive();
				arplite_adjust_column_height();
			},
			1000
		);
		arplite_responsive_template_width_calculation();
		adjust_template_footer_height();
	}
);

jQuery( document ).on(
	'click',
	'.eael-tabs-nav li',
	function(){
		setTimeout(
			function() {
				remove_column_height();
				arp_hide_blank_rows();
				arp_header_title_responsive();
				arp_short_code_responsive();
				arp_price_wrapper_responsive();
				arp_column_desc_responsive();
				set_best_plan_button_height();
				arp_button_height_responsive();
				adjust_column_height();
			},
			500
		);
		arplite_responsive_template_width_calculation();
		adjust_template_footer_height();
	}
);

jQuery( document ).on(
	'click',
	'.elementor-tabs',
	function(){
		setTimeout(
			function() {
				remove_column_height();
				arp_hide_blank_rows();
				arp_header_title_responsive();
				arp_short_code_responsive();
				arp_price_wrapper_responsive();
				arp_column_desc_responsive();
				set_best_plan_button_height();
				arp_button_height_responsive();
				adjust_column_height();
			},
			500
		);
		arplite_responsive_template_width_calculation();
		adjust_template_footer_height();
	}
);


jQuery( document ).ready(
	function () {

		if ((navigator.userAgent.match( /iPhone/i )) || (navigator.userAgent.match( /iPod/i )) || (navigator.userAgent.match( /iPad/i ))) {
			jQuery( ".ArpPricingTableColumnWrapper" ).on(
				'touchstart',
				function () {
				}
			);
		}

		var mobile_view_width = jQuery( '#arplite_template_main_container' ).attr( 'data-mobile-width' );
		var tablet_view_width = jQuery( '#arplite_template_main_container' ).attr( 'data-tablet-width' );
		var tablet_items      = jQuery( '.arplite_front_main_container' ).find( '.ArpPriceTable' ).attr( 'data-tablet-items' );

		if (mobile_view_width == '') {
			var device_width = 480;
		} else {
			var device_width = mobile_view_width;
		}

		if (tablet_view_width == '') {
			var tablet_width = 770;
		} else {
			var tablet_width = tablet_view_width;
		}

		var width = jQuery( window ).width();

		var template_type = '';

		var preview = jQuery( "#is_tbl_preview" ).val();
		if (preview == 1) {
			jQuery( "span.ribbontext_1" ).addClass( 'ribbontext_preview' );
			jQuery( "span.ribbontext_2" ).addClass( 'ribbontext_preview' );
		}

		var array    = new Array();
		var template = '';

		jQuery( '.arplite_template_main_container' ).each(
			function () {
				template = jQuery( this ).attr( 'data-arp-template' );
				jQuery( '.' + template ).find( ".arp_allcolumnsdiv" ).find( '.ArpPricingTableColumnWrapper' ).each(
					function (i) {
						if (jQuery( this ).find( '.arpcolumnheader' ).hasClass( 'has_arp_shortcode' )) {
							array[i] = 'has_header_scode';
						} else {
							array[i] = 0;
						}
					}
				);
			}
		);

		var default_scode_position = new Array( 'arplitetemplate_1', 'arplitetemplate_11' );
		var position_scode_2       = new Array( 'arplitetemplate_8' );

		if (jQuery.inArray( template, default_scode_position ) > -1) {
			if (jQuery.inArray( 'has_header_scode', array ) > -1) {
				jQuery( '.' + template ).find( ".arp_allcolumnsdiv" ).find( '.ArpPricingTableColumnWrapper' ).each(
					function (i) {
						jQuery( this ).find( '.arpcolumnheader' ).addClass( 'has_arp_shortcode' );
						var div = jQuery( '<div class=\'arp_header_shortcode\'></div>' );
						if ( ! jQuery( this ).find( '.arpcolumnheader' ).find( 'div' ).hasClass( 'arp_header_shortcode' )) {
							div.insertAfter( jQuery( this ).find( '.arpcolumnheader' ).find( '.arppricetablecolumntitle' ) );
						}
					}
				);
			}
		} else if (jQuery.inArray( template, position_scode_2 ) > -1) {
			if (jQuery.inArray( 'has_header_scode', array ) > -1) {
				jQuery( '.' + template ).find( ".arp_allcolumnsdiv" ).find( '.ArpPricingTableColumnWrapper' ).each(
					function (i) {
						jQuery( this ).find( '.arpcolumnheader' ).addClass( 'has_arp_shortcode' );
						var div = jQuery( '<div class=\'arp_header_shortcode\'></div>' );
						if ( ! jQuery( this ).find( '.arpcolumnheader' ).find( 'div' ).hasClass( 'arp_header_shortcode' )) {
							jQuery( this ).find( '.arpcolumnheader' ).prepend( div );
						}
					}
				);
			}
		}

		if (template == 'arplitetemplate_8') {
			jQuery( '.ArpPricingTableColumnWrapper' ).each(
				function () {
					jQuery( this ).find( 'div.arp_header_shortcode' ).css( 'min-height', '100px' );
				}
			);
		}
		arplite_remove_column_height();
		arplite_hide_blank_rows();
		arplite_header_title_responsive();
		arplite_short_code_responsive();
		arplite_price_wrapper_responsive();
		arplite_column_desc_responsive();
		arplite_set_best_plan_button_height();
		arplite_button_height_responsive();
		arplite_adjust_column_height();

		arplite_responsive_template_width_calculation();

		jQuery( '.ArpPricingTableColumnWrapper' ).each(
			function () {
				if (jQuery( this ).hasClass( 'column_highlight' )) {
					jQuery( this ).attr( 'has_column_highlighted', 'true' );
				} else {
					jQuery( this ).attr( 'has_column_highlighted', 'false' );
				}
			}
		);

		arplite_adjust_template_footer_height();
	}
);
function arplite_responsive_template_width_calculation() {

	jQuery( '.arplite_template_main_container' ).each(
		function () {
			var $this = jQuery( this );

			var container_width = $this.width();

			var columns = $this.find( '.ArpPricingTableColumnWrapper:visible' ).length;

			var toal_columns = $this.find( '.ArpPricingTableColumnWrapper' ).length;

			var total_hidden_column = (toal_columns - columns);

			var display_col_mobile  = 1;
			var display_col_tablet  = 3;
			var display_col_desktop = $this.attr( 'data-column-desktop' )

			var caption = $this.find( '.ArpPricingTableColumnWrapper.maincaptioncolumn:visible' ).length;

			var mobile_width = $this.attr( 'data-mobile-width' );

			var tablet_width = $this.attr( 'data-tablet-width' );

			var current_width = jQuery( window ).width();

			var is_responsive = $this.attr( 'data-is-responsive' );

			var all_column_width = $this.attr( 'data-all-column-width' );

			var caption_custom_width = $this.find( '.maincaptioncolumn' ).attr( 'data-has_custom_column_width' );

			var column_space = $this.attr( 'data-space-columns' );

			var responsive_width = $this.attr( 'data-responsive-width-arr' );

			responsive_width = JSON.parse( responsive_width );

			var desktop_width_include_space = responsive_width.with_space;

			var desktop_width_exclude_space = responsive_width.no_space;

			var width_inc_space = desktop_width_include_space[0];
			var width_exc_space = desktop_width_exclude_space[0];

			if (total_hidden_column > 0) {
				var width_exc_space_without_par = width_exc_space.replace( '%', '' );
				width_exc_space_without_par     = parseInt( width_exc_space_without_par );
				var tot_wid                     = (width_exc_space_without_par * toal_columns);
				width_exc_space                 = tot_wid / columns + '%';

				var width_inc_space_without_par = width_inc_space.replace( '%', '' );
				width_inc_space_without_par     = parseInt( width_inc_space_without_par );
				var tot_space_wid               = (width_inc_space_without_par * toal_columns);
				width_inc_space                 = (tot_space_wid / columns) + '%';
			}

			if (current_width <= mobile_width) {
				jQuery( '.arp_hidden_div' ).remove();
				if (is_responsive == 1) {
					if (display_col_mobile == 'All' || (display_col_mobile > columns)) {
						display_col_mobile = columns;
					} else {
						var container_width = $this.css( 'width' ).replace( 'px', '' );
						container_width     = parseInt( container_width );
						var display_cols    = display_col_mobile;
						display_cols        = parseInt( display_cols );

						if (column_space > 0) {

							var column_width = $this.find( '.ArpPricingTableColumnWrapper:visible' ).css( 'width' ).replace( 'px', '' );
							column_width     = parseInt( column_width );

							var actual_width = ((container_width / display_cols));

							actual_width = actual_width - column_space;

							var final_width = ((actual_width * 100) / container_width);

							final_width = Math.floor( final_width );
							if (display_cols == 1) {
								final_width = 100;
							}
							if (caption_custom_width == 'true') {
								$this.find( '.ArpPricingTableColumnWrapper:not(.maincaptioncolumn)' ).css( 'width', final_width + '%' );
							} else {
								$this.find( '.ArpPricingTableColumnWrapper:visible' ).css( 'width', final_width + '%' );
							}

						} else {
							var column_width = 100 / parseInt( display_cols );
							if (caption_custom_width == 'true') {
								$this.find( '.ArpPricingTableColumnWrapper:not(.maincaptioncolumn)' ).css( 'width', column_width + '%' );
							} else {
								$this.find( '.ArpPricingTableColumnWrapper:visible' ).css( 'width', column_width + '%' );
							}
						}

					}

				} else {

					if (caption > 0 && caption_custom_width == 'true') {
						$this.find( '.ArpPricingTableColumnWrapper:not(.maincaptioncolumn):visible' ).css( 'width', all_column_width + 'px' );
					} else {
						$this.find( '.ArpPricingTableColumnWrapper:visible' ).css( 'width', all_column_width + 'px' );
					}
					$this.find( '.ArpPricingTableColumnWrapper:visible' ).each(
						function (e) {
							if ((e + 1) % display_col_mobile == 0) {
								jQuery( this ).after( '<div class="arp_hidden_div" style="float:left;width:100%;clear:both;"></div>' );
							}
						}
					);
				}

			} else if (current_width <= tablet_width && current_width > mobile_width) {
				jQuery( '.arp_hidden_div' ).remove();
				if (is_responsive == 1) {
					if (display_col_tablet == 'All' || (display_col_tablet > columns)) {
						display_col_tablet = columns;
					}
					var container_width = $this.css( 'width' ).replace( 'px', '' );
					container_width     = parseInt( container_width );
					var display_cols    = display_col_tablet;
					display_cols        = parseInt( display_cols );

					if (column_space > 0) {

						var column_width = $this.find( '.ArpPricingTableColumnWrapper:visible' ).css( 'width' ).replace( 'px', '' );
						column_width     = parseInt( column_width );

						var actual_width = ((container_width / display_cols));

						actual_width = actual_width - column_space;

						var final_width = ((actual_width * 100) / container_width);

						final_width             = Math.floor( final_width );
						var col_space_in_perc   = ((column_space * 100) / container_width);
						var cap_col_final_width = Math.floor( final_width - col_space_in_perc );
						if (caption_custom_width == 'true') {
							$this.find( '.ArpPricingTableColumnWrapper:not(.maincaptioncolumn)' ).css( 'width', final_width + '%' );
							$this.find( '.ArpPricingTableColumnWrapper.maincaptioncolumn' ).css( 'width', cap_col_final_width + '%' );
						} else {
							$this.find( '.ArpPricingTableColumnWrapper:visible' ).css( 'width', final_width + '%' );
						}
					} else {
						var column_width = 100 / parseInt( display_cols );
						if (caption_custom_width == 'true') {
							$this.find( '.ArpPricingTableColumnWrapper' ).css( 'width', column_width + '%' );
						} else {
							$this.find( '.ArpPricingTableColumnWrapper:visible' ).css( 'width', column_width + '%' );
						}
					}
				} else {
					if (caption > 0 && caption_custom_width == 'true') {
						$this.find( '.ArpPricingTableColumnWrapper:not(.maincaptioncolumn):visible' ).css( 'width', all_column_width + 'px' );
					} else {
						$this.find( '.ArpPricingTableColumnWrapper:visible' ).css( 'width', all_column_width + 'px' );
					}
					$this.find( '.ArpPricingTableColumnWrapper:visible' ).each(
						function (e) {
							if ((e + 1) % display_col_tablet == 0) {
								jQuery( this ).after( '<div class="arp_hidden_div" style="float:left;width:100%;clear:both;"></div>' );
							}
						}
					);
				}
			} else {
				jQuery( '.arp_hidden_div' ).remove();
				if (caption_custom_width == 'true') {
					var  default_val = $this.find( '.maincaptioncolumn' ).attr( 'data-width' );
					if (default_val > '0px') {
						$this.find( '.ArpPricingTableColumnWrapper' ).css( 'width',default_val );
					} else {
						$this.find( '.ArpPricingTableColumnWrapper' ).css( 'width','' );
					}
					$this.find( '.ArpPricingTableColumnWrapper:not(.maincaptioncolumn)' ).css( 'width', '' );
				} else {
					$this.find( '.ArpPricingTableColumnWrapper' ).css( 'width', '' );
				}
			}

		}
	);
}
function arplite_redirect(re_url, is_new_tab, is_script, object, template_id, column_id) {
	var plan_id       = jQuery( '#' + column_id ).attr( 'data-order' );
	var is_preview    = jQuery( object ).parents( '.arplite_template_main_container' ).attr( 'data-table-preview' );
	var ajaxurl_value = jQuery( '#ajaxurl' ).val();
	if (jQuery( object ).find( '#main_column_0' ).hasClass( 'maincaptioncolumn' )) {
		var caption_column = 1;
	} else {
		var caption_column = 0;
	}

	if (is_new_tab == '1') {
		var win = window.open( re_url, '_blank' );
		win.focus();
	} else {
		arpricelite_redirection_handler( is_script, object, re_url, is_new_tab );
	}
}
jQuery( window ).load(
	function () {
		arplite_adjust_column_height();
	}
);

var rtime;
var timeout = false;
var delta   = 10;

jQuery( window ).resize(
	function() {
		rtime = new Date();
		if (timeout === false) {
			timeout = true;
			setTimeout( resizeend, delta );
		}
	}
);

function resizeend() {
	if (new Date() - rtime < delta) {
		setTimeout( resizeend, delta );
	} else {
		timeout = false;
		setTimeout(
			function () {
				arplite_remove_column_height();
				arplite_hide_blank_rows();
				arplite_header_title_responsive();
				arplite_short_code_responsive();
				arplite_price_wrapper_responsive();
				arplite_column_desc_responsive();
				arplite_set_best_plan_button_height();
				arplite_button_height_responsive();
				arplite_adjust_column_height();
			},
			1000
		);

		var mobile_view_width = jQuery( '#arplite_template_main_container' ).attr( 'data-mobile-width' );
		var tablet_view_width = jQuery( '#arplite_template_main_container' ).attr( 'data-tablet-width' );
		var tablet_items      = jQuery( '.arplite_front_main_container' ).find( '.ArpPriceTable' ).attr( 'data-tablet-items' );

		if (mobile_view_width == '') {
			var device_width = 480;
		} else {
			var device_width = mobile_view_width;
		}

		if (tablet_view_width == '') {
			var tablet_width = 770;
		} else {
			var tablet_width = tablet_view_width;
		}

		var width         = jQuery( window ).width();
		var template_type = '';

		arplite_responsive_template_width_calculation();
	}
}

function arplite_remove_column_height(){
	var template_main   = document.getElementsByClassName( 'arplite_template_main_container' );
	var total_main_temp = template_main.length;

	for ( var i = 0; i < total_main_temp; i++ ) {

		var current_temp = template_main[i];

		var priceWrappers = current_temp.querySelectorAll( '.ArpPricingTableColumnWrapper' );

		var total_wrappers = priceWrappers.length;

		for ( var p = 0; p < total_wrappers; p++ ) {

			var current_col = priceWrappers[p];

			if ( current_col.offsetHeight > 0 && current_col.offsetWidth > 0 ) {

				var listItems = current_col.querySelectorAll( 'li' );
				var total_lis = listItems.length;

				for ( var l = 0; l < total_lis; l++ ) {
					var current_list_item                 = listItems[l];
					current_list_item.style.height        = '';
					current_list_item.style.minHeight     = '';
					current_list_item.style.lineHeight    = '';
					current_list_item.style.paddingTop    = '';
					current_list_item.style.paddingBottom = '';
				}

			}

		}

	}
}
function arplite_adjust_column_height() {
	jQuery( '.arplite_template_main_container' ).each(
		function() {
			var $this       = jQuery( this );
			var base_height = [];
			var first_id    = $this.find( '.ArpPricingTableColumnWrapper:visible' ).first().attr( 'id' );
			var new_height  = [];
			$this.find( '.ArpPricingTableColumnWrapper:visible' ).each(
				function() {
					jQuery( this ).find( 'ul.arppricingtablebodyoptions li' ).each(
						function() {
							jQuery( this ).css( 'height', '' );
						}
					);
				}
			);
			$this.find( '.ArpPricingTableColumnWrapper:visible' ).first().find( 'ul.arppricingtablebodyoptions li' ).each(
				function(x) {
					base_height[x] = jQuery( this ).outerHeight();
				}
			);

			$this.find( '.ArpPricingTableColumnWrapper:visible:not(#' + first_id + ')' ).each(
				function(c) {
					var col_id = jQuery( this ).attr( 'id' ).replace( 'main_column_', '' );
					jQuery( this ).find( 'ul.arppricingtablebodyoptions li' ).each(
						function(e) {
							if (base_height[e] > jQuery( this ).height()) {
								new_height[e] = base_height[e];
							} else {
								base_height[e] = new_height[e] = jQuery( this ).height();
							}
						}
					);
				}
			);
			$this.find( '.ArpPricingTableColumnWrapper:visible' ).each(
				function(x) {
					jQuery( this ).find( 'ul.arppricingtablebodyoptions li:not(.arp_last_list_item)' ).each(
						function(n) {
							jQuery( this ).height( new_height[n] + 'px' );
						}
					);
				}
			);
		}
	);
}

function adjust_column_title() {
	var base_height_arr      = new Array();
	var col_title_height_arr = new Array();
	var sort_keys            = new Array();
	var base_height_json     = '';
	jQuery( '.ArpPricingTableColumnWrapper' ).each(
		function (x) {
			var col_id = jQuery( this ).attr( 'id' );

			var base_height    = jQuery( this ).find( '.arpcolumnheader' ).height();
			base_height_arr[x] = base_height;
			sort_keys[x]       = base_height;

			if (jQuery( this ).hasClass( 'maincaptioncolumn' )) {
				var col_title_height = jQuery( this ).find( '.arpcaptiontitle' ).height();
			} else {
				var col_title_height = jQuery( this ).find( '.arppricetablecolumntitle' ).height();
			}

			col_title_height_arr[x] = col_title_height;
		}
	);

	sort_keys.sort(
		function (a, b) {
			return b - a;
		}
	);

	heighest_height = sort_keys[0];

	var h_column_id = '';

	for (var key in base_height_arr) {
		if (heighest_height == base_height_arr[key]) {
			h_column_id = 'main_column_' + key;
		}
	}

	var base_height = jQuery( '#' + h_column_id ).find( '.arpcolumnheader' ).height();
	if (jQuery( '.ArpPricingTableColumnWrapper#' + h_column_id ).hasClass( 'maincaptioncolumn' )) {
		var base_title_height = jQuery( '#' + h_column_id ).find( '.arpcaptiontitle' ).height();
	} else {
		var base_title_height = jQuery( '#' + h_column_id ).find( '.bestPlanTitle' ).height();
	}

	jQuery( '.ArpPricingTableColumnWrapper' ).each(
		function () {
			if (h_column_id != jQuery( this ).attr( 'id' )) {
				jQuery( this ).find( '.arpcolumnheader' ).height( base_height );
				if (jQuery( this ).hasClass( 'maincaptioncolumn' )) {
					jQuery( this ).find( '.arpcaptiontitle' ).height( base_title_height );
				} else {
					jQuery( this ).find( '.arppricetablecolumntitle' ).height( base_title_height );
				}
			}
		}
	);
}

function arplite_header_title_responsive(){

	var responsive_templates = arplite_responsive_json();
	var header_temp_obj_1    = responsive_templates.header_level_types_front_array_1;
	var header_temp_obj_2    = responsive_templates.header_level_types_front_array_2;

	var header_min_height = arplite_header_min_height();

	var template_container   = document.getElementsByClassName( 'arplite_template_main_container' );
	var total_temp_container = template_container.length;

	for (var t = 0; t < total_temp_container; t++ ) {
		var cur_temp_container = template_container[t];
		var step_cls           = '';
		var template           = cur_temp_container.getAttribute( 'data-reference-template' );

		var ref_template = template.replace( 'arplitetemplate_','' );
		if ( ref_template >= 20 ) {
			var ref_id = parseInt( ref_template ) - 3
			template   = 'arplitetemplate_' + ref_id;
		}

		var min_height = 0;
		if ( typeof header_min_height[template] != 'undefined' ) {
			min_height = header_min_height[template];
		}

		if ( template && template != "" ) {
			var cols       = cur_temp_container.querySelectorAll( '.ArpPricingTableColumnWrapper:not(.arp_hidden_captioncolumn)' );
			var total_cols = cols.length;

			for ( var c = 0; c < total_cols; c++ ) {
				var cur_col = cols[c];
				if ( header_temp_obj_1.type_1.indexOf( template ) > -1 ) {
					var column_header = '';
					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' ) {
						cur_col.getElementsByClassName( 'arpcolumnheader' )[0].style.height = 'auto';
						column_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}
					if ( typeof column_header != 'undefined' && column_header != '' && typeof column_header.getElementsByClassName( 'bestPlanTitle' )[0] != 'undefined' ) {
						column_header.getElementsByClassName( 'bestPlanTitle' )[0].style.height = 'auto';
					}

					if ( typeof column_header != 'undefined' && column_header != '' && typeof column_header.getElementsByClassName( 'arpcaptiontitle' )[0] != 'undefined' ) {
						column_header.getElementsByClassName( 'arpcaptiontitle' )[0].style.height = 'auto';
					}
				} else if ( header_temp_obj_1.type_3.indexOf( template ) > -1 ) {
					var column_header = '';
					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' ) {
						cur_col.getElementsByClassName( 'arpcolumnheader' )[0].style.height = 'auto';
						column_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}
					if ( typeof column_header != 'undefined' && column_header != '' && typeof column_header.getElementsByClassName( 'arppricetablecolumntitle' )[0] != 'undefined' ) {
						column_header.getElementsByClassName( 'arppricetablecolumntitle' )[0].style.height = 'auto';
					}
				} else {
					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' && typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0].getElementsByClassName( 'bestPlanTitle' )[0] != 'undefined' ) {
						cur_col.getElementsByClassName( 'arpcolumnheader' )[0].getElementsByClassName( 'bestPlanTitle' )[0].style.height = 'auto';
					}
				}
			}

			if ( header_temp_obj_1.type_4.indexOf( template ) > -1 ) {
				for (var c = 0; c < total_cols; c++ ) {
					var cur_col = cols[c];
					if ( cur_col.querySelector( '.arp_header_shortcode' + step_cls ) != null ) {
						cur_col.querySelector( '.arp_header_shortcode' + step_cls ).style.height = 'auto';
					}
				}
			}

			var max_height                 = 0;
			var max_title_container_height = 0;

			for ( var c = 0; c < total_cols; c++ ) {
				var cur_col = cols[c];
				if ( header_temp_obj_1.type_1.indexOf( template ) > -1 ) {
					var offset_height = 0;
					if ( typeof cur_col.getElementsByClassName( 'bestPlanTitle' )[0] != 'undefined' ) {
						offset_height = cur_col.getElementsByClassName( 'bestPlanTitle' )[0].offsetHeight;
					}

					if ( typeof cur_col.getElementsByClassName( 'arpcaptiontitle' )[0] != 'undefined' ) {
						offset_height = cur_col.getElementsByClassName( 'arpcaptiontitle' )[0].offsetHeight;
					}

					if ( offset_height < min_height ) {
						offset_height = min_height;
					}

					if ( max_height < offset_height ) {
						max_height = offset_height;
					}
				} else if ( header_temp_obj_1.type_3.indexOf( template ) > -1 ) {
					var offset_height = 0;
					if ( typeof cur_col.getElementsByClassName( 'arppricetablecolumntitle' )[0] != 'undefined' ) {
						offset_height = cur_col.getElementsByClassName( 'arppricetablecolumntitle' )[0].offsetHeight;
					}
					if ( offset_height < min_height ) {
						offset_height = min_height;
					}
					if ( max_height < offset_height ) {
						max_height = offset_height;
					}
				} else {
					var col_header = '';
					var new_height = 0;

					if (typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined') {
						col_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}

					if ( col_header.querySelector( '.bestPlanTitle' + step_cls ) != null ) {
						new_height = col_header.querySelector( '.bestPlanTitle' + step_cls ).offsetHeight;
						if ( new_height < min_height ) {
							new_height = min_height;
						}
					}

					if ( max_height < new_height ) {
						max_height                 = new_height;
						max_title_container_height = new_height;
					}
				}
			}

			var max_height_shortcode = 0;

			if (header_temp_obj_1.type_4.indexOf( template ) > -1) {
				for ( var c = 0; c < total_cols; c++ ) {
					var cur_col          = cols[c];
					var shortcode_height = 0;

					if ( cur_col.querySelector( '.arp_header_shortcode' + step_cls ) != null ) {
						shortcode_height = cur_col.querySelector( '.arp_header_shortcode' + step_cls ).offsetHeight;
					}

					if ( max_height < shortcode_height ) {
						max_height = shortcode_height;
					}
				}
			}

			for (var c = 0; c < total_cols; c++ ) {
				var cur_col = cols[c];
				if (header_temp_obj_2.type_4.indexOf( template ) > -1) {
					var col_header = '';
					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' ) {
						cur_col.getElementsByClassName( 'arpcolumnheader' )[0].style.height = max_height + 'px';
						col_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}

					if ( col_header != '' && typeof col_header.getElementsByClassName( 'arpcaptiontitle' )[0] != 'undefined' ) {
						col_header.getElementsByClassName( 'arpcaptiontitle' )[0].style.height = (parseInt( max_height ) - 40) + 'px';
					}

					if ( col_header != '' && typeof col_header.getElementsByClassName( 'bestPlanTitle' )[0] != 'undefined' ) {
						col_header.getElementsByClassName( 'bestPlanTitle' )[0].style.height = (parseInt( max_height ) - 40 ) + 'px';
					}
				} else if (header_temp_obj_2.type_1.indexOf( template ) > -1) {
					var col_header = '';
					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' ) {
						col_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}
					if ( col_header != '' && col_header.querySelector( '.bestPlanTitle' + step_cls ) != null ) {
						col_header.querySelector( '.bestPlanTitle' + step_cls ).style.height = max_height + 'px';
					}

					if ( typeof cur_col.getElementsByClassName( 'arpcaptiontitle' )[0] != 'undefined' ) {
						cur_col.getElementsByClassName( 'arpcaptiontitle' )[0].style.marginTop = max_height + 'px';
					}
				} else if ( header_temp_obj_2.type_5.indexOf( template ) > -1 ) {
					var col_header = '';
					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' ) {
						col_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}

					if ( col_header != '' && typeof col_header.getElementsByClassName( 'arppricetablecolumntitle' )[0] != 'undefined' ) {
						col_header.getElementsByClassName( 'arppricetablecolumntitle' )[0].style.height = max_height + 'px';
					}

					if ( typeof cur_col.getElementsByClassName( 'arpcaptiontitle' )[0] != 'undefined' ) {
						cur_col.getElementsByClassName( 'arpcaptiontitle' )[0].style.marginTop = max_height + 'px';
					}
				} else if (header_temp_obj_2.type_2.indexOf( template ) > -1) {
					var col_header = '';

					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' ) {
						col_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}

					if ( col_header != '' && typeof col_header.getElementsByClassName( 'bestPlanTitle' ) != 'undefined' ) {
						col_header.getElementsByClassName( 'bestPlanTitle' ).style.height = max_height + 'px';
					}

					if ( col_header != '' && typeof col_header.getElementsByClassName( 'arpcaptiontitle' )[0] != 'undefined' ) {
						var first_col = cur_temp_container.querySelector( '.ArpPricingTableColumnWrapper:not(.maincaptioncolumn) .arppricetablecolumntitle' );
						col_header.getElementsByClassName( 'arpcaptiontitle' )[0].style.marginTop = (parseInt( first_col.outerHeight ) + 1) + 'px';
					}
				} else {
					var col_header = '';
					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' ) {
						col_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}

					if ( col_header.querySelector( '.bestPlanTitle' + step_cls ) != null ) {
						col_header.querySelector( '.bestPlanTitle' + step_cls ).style.height = max_title_container_height + 'px';
					}
				}
			}

			if ( header_temp_obj_1.type_4.indexOf( template ) > -1 ) {
				for ( var c = 0; c < total_cols; c++ ) {
					var cur_col    = cols[c];
					var col_header = '';
					if ( typeof cur_col.getElementsByClassName( 'arpcolumnheader' )[0] != 'undefined' ) {
						col_header = cur_col.getElementsByClassName( 'arpcolumnheader' )[0];
					}

					if ( col_header.querySelector( '.arp_header_shortcode' + step_cls ) != null ) {
						col_header.querySelector( '.arp_header_shortcode' + step_cls ).style.height = max_height + 'px';
					}

				}
			}

		}

	}
}

function arplite_header_min_height(){
	return {
		'arplitetemplate_1':80,
		'arplitetemplate_2':63,
		'arplitetemplate_3':70,
		'arplitetemplate_4':0,
		'arplitetemplate_5':55,
		'arplitetemplate_6':95,
		'arplitetemplate_7':0,
		'arplitetemplate_8':0,
		'arplitetemplate_9':0,
		'arplitetemplate_10':50,
		'arplitetemplate_11':80,
		'arplitetemplate_12':0,
		'arplitetemplate_13':60,
		'arplitetemplate_14':0,
		'arplitetemplate_15':60,
		'arplitetemplate_16':80,
		'arplitetemplate_17':0,
		'arplitetemplate_18':0,
		'arplitetemplate_19':0,
		'arplitetemplate_20':0,
		'arplitetemplate_21':0,
		'arplitetemplate_22':0,
		'arplitetemplate_23':205,
		'arplitetemplate_24':100
	};
}

function arplite_responsive_json() {
	return {
		"header_level_types": {
			"type_1": [],
			"type_2": [],
			"type_3": [],
			"type_4": [],
			"type_5": ["arplitetemplate_1", "arplitetemplate_2", "arplitetemplate_8", "arplitetemplate_11", "arplitetemplate_23" ],
			"type_6": ["arplitetemplate_7"],
			"type_7": [],
			"type_8": []
		},
		"header_title_types": {
			"type_1": ["arplitetemplate_1"],
			"type_2": ["arplitetemplate_2", "arplitetemplate_7", "arplitetemplate_8", "arplitetemplate_11", "arplitetemplate_23"],
			"type_3": [],
			"type_4": [],
			"type_5": [],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"header_level_types_front_array_1": {
			"type_1": ["arplitetemplate_1"],
			"type_2": ["arplitetemplate_2", "arplitetemplate_7", "arplitetemplate_8", "arplitetemplate_11"],
			"type_3": ["arplitetemplate_23"],
			"type_4": [],
			"type_5": [],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"header_level_types_front_array_2": {
			"type_1": [],
			"type_2": [],
			"type_3": ["arplitetemplate_2", "arplitetemplate_7", "arplitetemplate_8", "arplitetemplate_11"],
			"type_4": ["arplitetemplate_1"],
			"type_5": ["arplitetemplate_23"],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"column_wrapper_height": {
			"type_1": [],
			"type_2": ["arplitetemplate_1", "arplitetemplate_2", "arplitetemplate_7", "arplitetemplate_8", "arplitetemplate_11", "arplitetemplate_23"],
			"type_3": [],
			"type_4": [],
			"type_5": [],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"price_wrapper_types": {
			"type_1": ["arplitetemplate_2", "arplitetemplate_11", "arplitetemplate_8", "arplitetemplate_23"],
			"type_2": ["arplitetemplate_7"],
			"type_3": [],
			"type_4": [],
			"type_5": ["arplitetemplate_1"],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"price_level_types": {
			"type_1": ["arplitetemplate_1", "arplitetemplate_7", "arplitetemplate_11"],
			"type_2": ["arplitetemplate_2", "arplitetemplate_8", "arplitetemplate_23"],
			"type_3": [],
			"type_4": [],
			"type_5": [],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"price_label_level_types": {
			"type_1": ["arplitetemplate_7", "arplitetemplate_11"],
			"type_2": ["arplitetemplate_1", "arplitetemplate_2", "arplitetemplate_8", "arplitetemplate_23"],
			"type_3": [],
			"type_4": [],
			"type_5": [],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"body_li_level_types": {
			"type_1": ["arplitetemplate_8"],
			"type_2": [],
			"type_3": [],
			"type_4": [],
			"type_5": [],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"column_description_types": {
			"type_1": ["arplitetemplate_1", "arplitetemplate_8", "arplitetemplate_2"],
			"type_2": ["arplitetemplate_7", "arplitetemplate_11", "arplitetemplate_23"],
			"type_3": [],
			"type_4": [],
			"type_5": [],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"button_level_types": {
			"type_1": ["arplitetemplate_8", "arplitetemplate_11"],
			"type_2": ["arplitetemplate_1", "arplitetemplate_2", "arplitetemplate_7", "arplitetemplate_23"],
			"type_3": [],
			"type_4": [],
			"type_5": [],
			"type_6": [],
			"type_7": [],
			"type_8": []
		},
		"slider_types": {
			"type_1": ["arplitetemplate_8"],
			"type_2": [],
			"type_3": [],
			"type_4": [],
			"type_5": ["arplitetemplate_1", "arplitetemplate_2", "arplitetemplate_7", "arplitetemplate_11", "arplitetemplate_23"],
			"type_6": [],
			"type_7": [],
			"type_8": []
		}
	}
}

function arplite_price_wrapper_responsive() {
	var responsive_templates   = arplite_responsive_json();
	var price_wrapper_temp_obj = responsive_templates.price_wrapper_types;

	var template_container = document.querySelectorAll( '.arplite_template_main_container:not([data-reference-template="arplitetemplate_4"])' );
	var total_container    = template_container.length;
	for ( var con = 0; con < total_container; con++ ) {
		var container = template_container[con];
		var template  = container.getAttribute( 'data-reference-template' );

		var ref_template = template.replace( 'arplitetemplate_','' );
		if ( ref_template >= 20 ) {
			var ref_id = parseInt( ref_template ) - 3
			template   = 'arplitetemplate_' + ref_id;
		}

		var cols = container.querySelectorAll( '.ArpPricingTableColumnWrapper' );
		var tcol = cols.length;

		for ( var s = 0; s < tcol; s++ ) {
			var col = cols[s];
			if ( col.querySelector( '.arp_price_wrapper' ) != null ) {
				col.querySelector( '.arp_price_wrapper' ).style.height = 'auto';
			}
		}

		var max_height = 0;
		for ( var c = 0; c < tcol; c++ ) {
			var col = cols[c];
			if ( col.querySelector( '.arp_price_wrapper' ) != null ) {
				new_height = col.querySelector( '.arp_price_wrapper' ).offsetHeight;
				if ( new_height && max_height < new_height ) {
					max_height = new_height;
				}
			}
		}

		for ( var c = 0; c < tcol; c++ ) {
			var col = cols[c];
			if ( col.querySelector( '.arp_price_wrapper' ) != null ) {
				col.querySelector( '.arp_price_wrapper' ).style.height = max_height + 'px';
			}
		}

		if ( template && price_wrapper_temp_obj.type_3.indexOf( template ) > -1 ) {
			for ( var c = 0; c < tcol; c++ ) {
				var col = cols[c];
				if ( col.querySelector( '.arppricetablecolumnprice' ) != null ) {
					col.querySelector( '.arppricetablecolumnprice' ).style.height = 'auto';
				}
				if ( col.querySelector( '.arpcaptiontitle' ) != null ) {
					col.querySelector( '.arpcaptiontitle' ).style.height = 'auto';
				}
			}

			var max_height = 0;
			var new_height = 0;

			for ( var c = 0; c < tcol; c++ ) {
				var col     = cols[c];
				var classes = col.getAttribute( 'class' );
				if ( classes.indexOf( 'maincaptioncolumn' ) > -1 ) {
					new_height = col.querySelector( '.arpcaptiontitle' ).offsetHeight;
				} else {
					new_height = col.querySelector( '.arppricetablecolumnprice' ).offsetHeight;
				}

				if ( new_height && max_height < new_height ) {
					max_height = new_height;
				}

			}
			for ( var c = 0; c < tcol; c++ ) {
				var col = cols[c];

				if ( col.querySelector( '.arppricetablecolumnprice' ) != null ) {
					col.querySelector( '.arppricetablecolumnprice' ).style.height = max_height + 'px';
				}

				if ( col.querySelector( '.arpcaptiontitle' ) != null ) {
					col.querySelector( '.arpcaptiontitle' ).style.height = max_height + 'px';
				}

				if (jQuery( col ).hasClass( 'maincaptioncolumn' ) && jQuery( col ).find( '.arppricetablecolumnprice' ).is( ':visible' )) {
					col.querySelector( '.arppricingtablebodycontent' ).style.marginTop = max_height + 'px';
				}

			}
		} else if ( template && price_wrapper_temp_obj.type_4.indexOf( template ) > -1 ) {
			var max_height       = 0;
			var new_height       = 0;
			var price_header     = 0;
			var new_price_header = 0;
			for ( var c = 0; c < tcol; c++ ) {
				var col = cols[c];
				if ( col.querySelector( '.arppricetablecolumntitle .bestPlanTitle' ) != null ) {
					new_height = col.querySelector( '.arppricetablecolumntitle .bestPlanTitle' ).offsetHeight;
					if ( new_height = max_height < new_height ) {
						max_height = new_height;
					}
				}
			}
			for ( var c = 0; c < tcol; c++ ) {
				var col = cols[c];
				if (col.querySelector( '.arp_price_wrapper' ) != null ) {
					var price_header = col.querySelector( '.arp_price_wrapper' ).offsetHeight;
					if ( price_header && new_price_header < price_header ) {
						new_price_header = price_header;
					}
				}
			}
			var arpcolumnheader_height = max_height + new_price_header;
			for ( var c = 0; c < tcol; c++ ) {
				var col = cols[c];
				if ( col.querySelector( '.arpcolumnheader' ) != null ) {
					col.querySelector( '.arpcolumnheader' ).style.height = arpcolumnheader_height + 'px';
				}
			}
		} else if ( template && price_wrapper_temp_obj.type_5.indexOf( template ) > -1 ) {

			var arpcolumnheader_height;
			var max_title_height         = 0;
			var max_price_height         = 0;
			var current_title_max_height = 0;
			for ( var c = 0; c < tcol; c++ ) {
				var col              = cols[c];
				var arp_title_height = jQuery( col ).find( '.arppricetablecolumntitle' ).outerHeight();
				var arp_price_height = jQuery( col ).find( '.arppricetablecolumnprice' ).outerHeight();
				if (arp_title_height > max_title_height) {
					max_title_height = arp_title_height;
				}
				if (arp_price_height > max_price_height) {
					max_price_height = arp_price_height;
				}

				if ( current_title_max_height < arp_title_height ) {
					current_title_max_height = arp_title_height;
				}
			}

			arpcolumnheader_height = max_title_height + arp_price_height;

			for ( var c = 0; c < tcol; c++ ) {
				var col = cols[c];
				if (col.querySelector( '.arpcaptiontitle' ) != null) {
					col.querySelector( '.arpcaptiontitle' ).style.height = max_price_height + 'px';
				}
				if ( col.querySelector( '.arpcolumnheader' ) != null ) {
					col.querySelector( '.arpcolumnheader' ).style.height = arpcolumnheader_height + 'px';
				}

				if ( col.querySelector( '.bestPlanTitle' ) != null ) {
					col.querySelector( '.bestPlanTitle' ).style.height = current_title_max_height + 'px';
				}
			}
		}
	}
}

if (jQuery.isFunction( jQuery().on )) {
	jQuery( document ).on(
		'mouseenter',
		'.ArpPricingTableColumnWrapper',
		function (event) {
			var parent_table = jQuery( this ).parents( '.ArpPriceTable' ).first();
			if (jQuery( this ).hasClass( 'maincaptioncolumn' ) == false) {
				jQuery( parent_table ).find( '.ArpPricingTableColumnWrapper' ).removeClass( 'column_highlight' );
			}
		}
	);

	jQuery( document ).on(
		'mouseleave',
		'.ArpPricingTableColumnWrapper',
		function (event) {
			jQuery( '.ArpPricingTableColumnWrapper' ).each(
				function () {
					var has_column_highlighted = jQuery( this ).attr( 'has_column_highlighted' );
					if (has_column_highlighted == 'true') {
						jQuery( this ).addClass( 'column_highlight' );
					}
				}
			);
		}
	);
} else {
	jQuery( '.ArpPricingTableColumnWrapper' ).on(
		'mouseenter',
		function (event) {
			var parent_table = jQuery( this ).parents( '.ArpPriceTable' ).first();
			if (jQuery( this ).hasClass( 'maincaptioncolumn' ) == false) {
				jQuery( parent_table ).find( '.ArpPricingTableColumnWrapper' ).removeClass( 'column_highlight' );
			}
		}
	);
	jQuery( '.ArpPricingTableColumnWrapper' ).on(
		'mouseleave',
		function (event) {
			jQuery( '.ArpPricingTableColumnWrapper' ).each(
				function () {
					var has_column_highlighted = jQuery( this ).attr( 'has_column_highlighted' );
					if (has_column_highlighted == 'true') {
						jQuery( this ).addClass( 'column_highlight' );
					}
				}
			);
		}
	);
}
function arplite_set_best_plan_button_height() {
	var responsive_templates = arplite_responsive_json();
	var btn_temp_obj         = responsive_templates.button_level_types;

	var containers = document.getElementsByClassName( 'arplite_template_main_container' );
	var total_cons = containers.length;
	for ( var t = 0; t < total_cons; t++ ) {
		var container = containers[t];
		var template  = container.getAttribute( 'data-reference-template' );

		var ref_template = template.replace( 'arplitetemplate_','' );
		if ( ref_template >= 20 ) {
			var ref_id = parseInt( ref_template ) - 3
			template   = 'arplitetemplate_' + ref_id;
		}

		if ( btn_temp_obj.type_1.indexOf( template ) > -1 ) {
			var btns  = container.querySelectorAll( '.arppricetablebutton' );
			var tbtns = btns.length;
			for ( var b = 0; b < tbtns; b++ ) {
				var btn          = btns[b];
				btn.style.height = 'auto';
			}

			var max_height = 0;
			for ( var b = 0; b < tbtns; b++ ) {
				var btn = btns[b];
				if ( max_height < btn.offsetHeight ) {
					max_height = btn.offsetHeight;
				}
			}

			for ( var b = 0; b < tbtns; b++ ) {
				var btn          = btns[b];
				btn.style.height = max_height + 'px';
			}

		}
	}
}
function arplite_column_desc_responsive() {
	var responsive_templates = arplite_responsive_json();
	var col_desc_temp_obj    = responsive_templates.column_description_types;

	var template_container = document.getElementsByClassName( 'arplite_template_main_container' );
	var total_container    = template_container.length;

	for ( var t = 0; t < total_container; t++ ) {
		var container      = template_container[t];
		var step_cls       = '';
		var is_column_desc = (container.querySelector( '.column_description' ) != null) ? container.querySelectorAll( '.column_description' ).length : 0;
		var template       = container.getAttribute( 'data-reference-template' );

		var ref_template = template.replace( 'arplitetemplate_','' );
		if ( ref_template >= 20 ) {
			var ref_id = parseInt( ref_template ) - 3
			template   = 'arplitetemplate_' + ref_id;
		}

		if ( container.querySelector( '#arprice_toggle_content_value' ) != null ) {

			var switch_front_radio_val = container.querySelector( '#arprice_toggle_content_value' ).value;

			var switch_steps = JSON.parse( document.getElementById( "arp_toggle_swtich_steps" ).value );

			var step_keys = Object.keys( switch_steps );
			for ( var k = 0; k < step_keys.length; k++ ) {
				var ck       = step_keys[k];
				var cur_step = switch_steps[ck];
				if ( cur_step.indexOf( switch_front_radio_val ) > -1 ) {
					var cstep = cur_step.split( '|' );
					step_cls  = '.' + cstep[parseInt( cstep.length ) - 1];
				}
			}
		}

		if ( template && template != "" && is_column_desc > 0 && col_desc_temp_obj.type_1.indexOf( template ) == -1 ) {

			var cols  = container.querySelectorAll( '.ArpPricingTableColumnWrapper' );
			var tcols = cols.length;

			for ( var c = 0; c < tcols; c++ ) {
				var col = cols[c];
				if ( col.querySelector( '.column_description' ) != null ) {
					col.querySelector( '.column_description' ).style.height = 'auto';
				}
			}

			var max_height = 0;
			var new_height = 0;
			for ( var c = 0; c < tcols; c++ ) {
				var col = cols[c];
				if ( col.querySelector( '.column_description' + step_cls ) != null ) {
					new_height = col.querySelector( '.column_description' + step_cls ).offsetHeight;
				}

				if ( new_height && max_height < new_height ) {
					max_height = new_height;
				}
			}

			for ( var c = 0; c < tcols; c++ ) {
				var col = cols[c];
				if ( col.querySelector( '.column_description' + step_cls ) != null ) {
					col.querySelector( '.column_description' + step_cls ).style.height = max_height + 'px';
				}
			}
		}
	}
}
function arplite_column_wrapper_height(toggle) {

	var containers = document.getElementsByClassName( 'arplite_template_main_container' );
	var total_con  = containers.length;
	for ( var t = 0; t < total_con; t++ ) {
		var container = containers[t];

		var reference_template = container.getAttribute( 'data-reference-template' );
		var mobile_width       = container.getAttribute( 'data-mobile-width' );
		var is_animated        = container.getAttribute( 'data-is-animated' );
		var hover_effect       = container.getAttribute( 'data-hover-type' );

		var window_width = jQuery( window ).width();

		var plus_height             = container.getAttribute( 'data-column-wrapper-width-arr' );
		var highlighted_plus_height = container.getAttribute( 'data-column-wrapper-highlighted-height' );
		var default_height          = container.getAttribute( 'data-column-wrapper-default-height' );
		default_height              = parseInt( default_height );
		plus_height                 = parseInt( plus_height );
		highlighted_plus_height     = parseInt( highlighted_plus_height );

		var column_max_height = 0;

		var cols  = container.querySelectorAll( '.ArpPricingTableColumnWrapper' );
		var tcols = cols.length;

		var arpOriginalHeight = false;
		var OriginalHeights   = [];
		if ( window_width <= mobile_width ) {
			arpOriginalHeight = true;
		}

		for ( var c = 0; c < tcols; c++ ) {
			var col          = cols[c];
			col.style.height = 'auto';
			var col_id       = col.getAttribute( 'id' );

			if ( window_width > mobile_width ) {
				if ( is_animated == 0) {
					col.style.marginBottom = '20px';
				} else {
					col.style.marginBottom = '40px';
				}

				if ( jQuery( col ).parents( '.widget_arp_widget' ) ) {
					if ( is_animated == 0 ) {
						col.style.marginBottom = '10px';
					} else {
						col.style.marginBottom = '30px';
					}
				}
			} else {
				if ( is_animated == 0 ) {
					col.style.marginBottom = '10px';
				} else {
					col.style.marginBottom = '30px';
				}
			}

			var column_height = col.querySelector( '.arpplan' ).offsetHeight;

			if ( toggle !== undefined ) {
				if ( navigator.userAgent.toLowerCase().indexOf( 'safariW' ) > -1) {
					if ( col.querySelector( '.arp_column_content_wrapper' ) != null ) {
						column_height = col.querySelector( '.arp_column_content_wrapper' ).offsetHeight;

					}
				}
			}

			if ( arpOriginalHeight ) {
				OriginalHeights[col_id] = column_height;
			}

			if ( hover_effect == 'hover_effect' && col.getAttribute( 'class' ).indexOf( 'column_height' ) == -1) {
				if ( column_height > column_max_height ) {
					column_max_height = column_height + plus_height;
				}
			} else if ( hover_effect == 'hover_effect' && col.getAttribute( 'class' ).indexOf( 'column_height' ) > -1 ) {
				if ( column_height > column_max_height ) {
					column_max_height = column_height;
				}

				if ( plus_height < 0 ) {
					column_max_height = column_height + plus_height;
				}
				column_max_height = column_max_height - highlighted_plus_height;
			} else {
				if ( column_height > column_max_height ) {
					column_max_height = col.offsetHeight + default_height;
				}
			}
		}

		if ( reference_template == 'arplitetemplate_25' ) {
			column_max_height = column_max_height - highlighted_plus_height;
		}

		if ( is_animated == 0 ) {
			for ( var c = 0; c < tcols; c++ ) {
				var col    = cols[c];
				var col_id = col.getAttribute( 'id' );

				if ( col.offsetHeight > 0 && col.offsetWidth > 0 ) {
					if ( reference_template == 'arplitetemplate_9' && col.getAttribute( 'class' ).indexOf( 'maincaptioncolumn' ) > -1 && jQuery( window ).width() < 420 ) {
						if ( col.querySelector( '.arpcaptiontitle' ) ) {
							col.querySelector( '.arpcaptiontitle' ).style.marginTop = '0px';
						}
						if ( col.querySelector( '.arpcolumnheader' ) != null ) {
							col.querySelector( '.arpcolumnheader' ).style.minHeight = '0px';
						}
						if ( arpOriginalHeight ) {
							col.style.height = ( parseInt( OriginalHeights[col_id] ) + 25 ) + 'px';
						} else {
							col.style.height = (col.offsetHeight + 25) + 'px';
						}
					} else {
						if ( arpOriginalHeight ) {
							col.style.height = ( parseInt( OriginalHeights[col_id] ) + 25 ) + 'px';
						} else {
							col.style.height = column_max_height + 'px';
						}
					}
				}
			}
		}
	}
}
function arplite_adjust_template_footer_height() {

	jQuery( '.arplite_template_main_container' ).each(
		function () {
			var is_footer_content = 0;
			jQuery( this ).find( '.ArpPricingTableColumnWrapper' ).each(
				function () {
					if (jQuery( this ).find( '.arp_btn_before_content' ).is( ':visible' ) === true) {
						is_footer_content++;
					} else if (jQuery( this ).find( '.arp_btn_after_content' ).is( ':visible' ) === true) {
						is_footer_content++;
					}
				}
			);
			jQuery( this ).find( '.ArpPricingTableColumnWrapper' ).each(
				function () {
					if (is_footer_content > 0 && ! jQuery( this ).find( '.arp_btn_before_content' ).is( ':visible' )) {
						var footer_content_position = jQuery( this ).attr( 'data-column-footer-position' );
						if (footer_content_position == 0) {
							jQuery( this ).find( '.arpcolumnfooter' ).addClass( 'has_footer_content' ).addClass( 'footer_below_content' );
							jQuery( this ).find( '.arpcolumnfooter' ).find( '.arp_btn_after_content' ).css( 'display', 'block' );
						} else if (footer_content_position == 1) {
							jQuery( this ).find( '.arpcolumnfooter' ).addClass( 'has_footer_content' ).addClass( 'footer_above_content' );
							jQuery( this ).find( '.arpcolumnfooter' ).find( '.arp_btn_before_content' ).css( 'display', 'block' );
						}
					}
				}
			);
			if (is_footer_content > 0) {
				jQuery( this ).find( '.ArpPricingTableColumnWrapper.maincaptioncolumn' ).find( '.arpcolumnfooter' ).addClass( 'has_footer_content' );
			}

		}
	);

}
function arplite_hide_blank_rows() {
	var template_container = document.getElementsByClassName( 'arplite_template_main_container' );
	var total_container    = template_container.length;

	for ( var t = 0; t < total_container; t++ ) {

		var current_container = template_container[t];

		var template_id = current_container.getAttribute( 'data-reference-template' );

		var hide_balnk_rows = current_container.getAttribute( 'data-hide-blank-rows' );

		if ( hide_balnk_rows == 'yes' ) {

			var arpColumns    = current_container.querySelectorAll( '.ArpPricingTableColumnWrapper .arppricingtablebodycontent' );
			var total_columns = arpColumns.length;
			for ( var c = 0; c < total_columns; c++ ) {
				var arpColumn   = arpColumns[c];
				var bodyContent = arpColumn.querySelectorAll( 'li:not(.arp_last_list_item)' );

				var total_list = bodyContent.length;
				var j          = 0;
				for ( var l = (parseInt( total_list ) - 1); l >= 0; l-- ) {
					var current_li = bodyContent[l];
					arplite_removeClass( current_li,'arp_hide_bottom_blank_row' );
					current_li.style.display = '';
					if ( ArpLiteIsBlank( jQuery( current_li ).find( '.arp_row_description_text:visible' ) )) {
						current_li.style.display = 'none';
					} else {
						current_li.style.display = '';
						j                        = l;
						break;
					}
				}

				for ( var i = 0; i < j; i++ ) {
					var current_li = bodyContent[i];
					if ( current_li.style.display == 'none' ) {
						arplite_removeClass( current_li,'arp_hide_bottom_blank_row' );
						current_li.style.display = '';
					}
				}
			}
		}
	}
}
function ArpLiteIsBlank(obj) {
	if ( 'undefined' != typeof obj.attr( 'data-isBlank' ) && 'blank' == obj.attr( 'data-isBlank' ) ) {
		return true;
	} else {
		return false;
	}
}
function arpricelite_redirection_handler(is_script, object, re_url, is_new_tab) {
	var hash_pattern = /(#)/g;

	if (re_url != "#" && re_url != "" && ! hash_pattern.test( re_url )) {
		re_url = re_url;
	} else if ( hash_pattern.test( re_url ) || re_url.indexOf( '#' ) > -1 ) {

		var new_re_url = re_url.split( '#' );
		var n_re_url   = new_re_url[0];
		var n_hs_url   = new_re_url[1];
		if (re_url.indexOf( '?' ) > -1) {
			re_url = n_re_url + '#' + n_hs_url;
		} else {
			var btn_link = re_url;

			re_url = n_re_url + '#' + n_hs_url;
		}
	}

	location.href = re_url;
}

function arplite_short_code_responsive() {
	var container = document.getElementsByClassName( 'arplite_template_main_container' );
	var total_con = container.length;

	for ( var cn = 0; cn < total_con; cn++ ) {
		var cur_con       = container[cn];
		var arp_class     = '';
		var max_height    = 0;
		var new_height    = 0;
		var reduce_height = 0;
		var template      = cur_con.getAttribute( 'data-reference-template' );

		if ( template == 'arplitetemplate_8' || template == 'arplitetemplate_7' ) {
			arp_class = '.arp_header_shortcode';
			if ( template == 'arplitetemplate_7' ) {
				reduce_height = 6;
			}
		} else {
			continue;
		}

		var cols = cur_con.querySelectorAll( '.ArpPricingTableColumnWrapper' );
		var clen = cols.length;
		for ( var c = 0; c < clen; c++ ) {
			var col = cols[c];

			if ( col.querySelector( arp_class ) != null && col.querySelector( arp_class ).offsetHeight > 0 ) {
				col.querySelector( arp_class ).style.height = 'auto';
			}
		}

		for ( var c = 0; c < clen; c++ ) {
			var col = cols[c];
			if ( col.querySelector( arp_class ) != null && col.querySelector( arp_class ).offsetHeight > 0 ) {
				new_height = col.querySelector( arp_class ).offsetHeight;
				if ( new_height && max_height < new_height ) {
					max_height = col.querySelector( arp_class ).offsetHeight;
				}
			}
		}

		for ( var c = 0; c < clen; c++ ) {

			var col = cols[c];
			if ( col.querySelector( arp_class ) != null && col.querySelector( arp_class ).offsetHeight > 0 ) {
				col.querySelector( arp_class ).style.height = ( parseInt( max_height ) - reduce_height ) + 'px';
			}
		}
	}
}


jQuery( document ).on(
	'click',
	'.arp_header_image_lightbox,.arp_youtube_video_lightbox,.arp_vimeo_video_lightbox,.arp_screenr_video_lightbox,.arp_html5_video_lightbox,.arp_dailymotion_video_lightbox,.arp_metacafe_video_lightbox',
	function() {
		var $this                    = jQuery( this );
		var unique_main_container_id = jQuery( this ).parents( '#arplite_template_main_container' ).attr( 'data-arp-uniq-id' );
		var content                  = jQuery( '#arplite_template_main_container' ).find( '.arp_video_content' );
		content[0].style.opacity     = 0;
		content.parents( '.arp_front_modal_overlay' ).addClass( 'arp_active' );
		var close_content = "<div class='arp_video_popup_close'></div>";
		content.html( close_content + $this.data( 'bpopup' ) || '' );

		jQuery( '.arp_video_content' ).attr( 'style','' );
		jQuery( '.arp_video_content' ).find( 'video' ).attr( 'style','' );

		if ($this.hasClass( 'arp_header_image' )) {

			var ifr = content.find( '.arp_video_ifr' )[0];
			jQuery( ifr ).on(
				'load',
				function() {
					var width  = ifr.style.width;
					var height = ifr.style.height;
					if (width == 'auto') {
						var doc = this.contentDocument;
						width   = jQuery( doc ).find( 'img' ).width();
					}
					ifr.style.width = width + 'px';
					if (height == 'auto') {
						var doc = this.contentDocument;
						height  = jQuery( doc ).find( 'img' ).height();
					}
					ifr.style.height           = height + 'px';
					content[0].style.width     = (parseInt( width ) + 50) + 'px';
					content[0].style.height    = (parseInt( height ) + 50) + 'px';
					var win_width              = jQuery( window ).width();
					var win_height             = jQuery( window ).height();
					var modal_width            = parseInt( width ) + 50;
					var modal_height           = parseInt( height ) + 50;
					var left_per               = modal_width * 100 / win_width;
					content[0].style.marginTop = ((-1) * content[0].offsetHeight / 2) + 'px';
					content[0].style.opacity   = 1;
				}
			);
		} else {

			var ifr     = content.find( '.arp_video_ifr' )[0];
			var ifr_len = content.find( '.arp_video_ifr' ).length;
			if (ifr_len > 0) {

				jQuery( ifr ).on(
					'load',
					function() {
						var width  = ifr.style.width;
						var height = ifr.style.height;
						if (width == 'auto') {
							width = jQuery( ifr ).width();
						}
						ifr.style.width = width + 'px';
						if (height == 'auto') {
							height = jQuery( ifr ).height();
						}
						ifr.style.height = height + 'px';

						ifr.style.height = 'auto';
						ifr.style.width  = 'auto';

						content[0].style.width  = ( parseInt( jQuery( ifr ).width() ) + 150 ) + 'px';
						content[0].style.height = ( parseInt( jQuery( ifr ).height() ) + 60 ) + 'px';

						var win_width              = jQuery( window ).width();
						var win_height             = jQuery( window ).height();
						var modal_width            = parseInt( width ) + 50;
						var modal_height           = parseInt( height ) + 50;
						var left_per               = modal_width * 100 / win_width;
						content[0].style.marginTop = ((-1) * content[0].offsetHeight / 2) + 'px';
						content[0].style.opacity   = 1;
					}
				);
			} else {

				if ($this.hasClass( 'arp_html5_video_lightbox' )) {
					setTimeout(
						function() {
							content[0].style.width    = 'auto';
							content[0].style.height   = 'auto';
							content[0].style.overflow = 'scroll';

							content[0].style.marginTop = ((-1) * content[0].offsetHeight / 2) + 'px';
							content[0].style.opacity   = 1;

						},
						500
					);
				}

			}
		}
	}
);

jQuery( document ).on(
	'click',
	'.arp_video_popup_close',
	function() {
		jQuery( '.arp_video_content' ).parents( '.arp_front_modal_overlay' ).removeClass( 'arp_active' );
	}
);

function arp_addClass(elements, className) {
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if ( element == null ) {
			continue;
		}
		if (element.classList) {
			element.classList.add( className );
		} else {
			element.className += ' ' + className;
		}
	}
}

function arplite_removeClass(elements, className) {
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if ( element == null ) {
			continue;
		}
		if (element.classList) {
			element.classList.remove( className );
		} else {
			element.className = element.className.replace( new RegExp( '(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' );
		}
	}
}

function arplite_button_height_responsive(){
	var arp_button_array = ["arplitetemplate_5","arplitetemplate_20","arplitetemplate_21","arplitetemplate_26"];

	var template_container = document.getElementsByClassName( 'arplite_template_main_container' );
	var total_templates    = template_container.length;

	for ( var t = 0; t < total_templates; t++ ) {
		var current_template   = template_container[t];
		var reference_template = current_template.getAttribute( 'data-reference-template' );

		if ( arp_button_array.indexOf( reference_template ) > -1 ) {
			var arp_columns = current_template.querySelectorAll( '.ArpPricingTableColumnWrapper:not(.column_highlight)' );
			var total_cols  = arp_columns.length;

			for ( var c = 0; c < total_cols; c++ ) {
				var current_col         = arp_columns[c];
				var col_button          = current_col.querySelector( '.bestPlanButton:not(.bestPlanRowButton)' );
				col_button.style.height = 'auto';
			}

			var max_height = 0;

			for ( var c = 0; c < total_cols; c++ ) {
				var current_col = arp_columns[c];
				var col_button  = current_col.querySelector( '.bestPlanButton:not(.bestPlanRowButton)' );

				var new_height = jQuery( col_button ).height();
				if ( new_height && max_height < new_height ) {
					max_height = new_height;
				}
			}

			for ( var c = 0; c < total_cols; c++ ) {
				var current_col           = arp_columns[c];
				var col_button            = current_col.querySelector( '.bestPlanButton:not(.bestPlanRowButton)' );
				col_button.style.height   = max_height + 'px';
				var col_btn_wrap          = current_col.querySelector( '.arpcolumnfooter' );
				col_btn_wrap.style.height = max_height + 'px';
			}

		}
	}

	setTimeout(
		function(){
			arplite_column_wrapper_height();
		},
		600
	);

}
