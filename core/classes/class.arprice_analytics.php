<?php

if ( ! defined( 'ABSPATH' ) ) { exit; }

class arpricelite_analytics {

	function __construct() {

		if ( is_plugin_active( 'elementor/elementor.php' ) ) {
			add_action( 'arplite_load_assets_for_elementor', array( $this, 'arplite_load_assets_for_elementor_func' ), 10, 2 );
		}
		add_shortcode( 'ARPLite', array( $this, 'arplite_Shortcode' ) );
	}

	function arplite_Shortcode( $atts ) {

		global $wpdb, $arpricelite_analytics;

		extract(
			shortcode_atts(
				array(
					'id' => '1',
				),
				$atts
			)
		);
		global $is_gutenberg;
		$is_gutenberg = false;
		if( !empty( $atts['is_gutenberg'] ) && 'true' == $atts['is_gutenberg'] ){
			$is_gutenberg = true;
		}

		global $is_beaverbuilder;
		$is_beaverbuilder = false;
		if( !empty( $atts['is_beaverbuilder'] ) && 'true' == $atts['is_beaverbuilder'] ){
			$is_beaverbuilder = true;
		}
		
		global $is_divibuilder;
		$is_divibuilder = false;
		if( !empty( $atts['is_divibuilder'] ) && 'true' == $atts['is_divibuilder'] ){
			$is_divibuilder = true;
		}

		global $is_fusionbuilder;
		$is_fusionbuilder = false;
		if( !empty( $atts['is_fusionbuilder'] ) && 'true' == $atts['is_fusionbuilder'] ){
			$is_fusionbuilder = true;
		}
		
		$table_id = isset( $atts['id'] ) ? intval( $atts['id'] ) : '';

		if ( $table_id == '' ) {
			$table_id = 1;
		}

		$result          = $wpdb->get_row( $wpdb->prepare( 'select * from ' . $wpdb->prefix . 'arplite_arprice where ID=%d', $table_id ) );
		$pricetable_name = isset( $result ) ? $result->table_name : '';
		if ( $pricetable_name == '' ) {
			return esc_html__( 'Please Select Valid Pricing Table', 'arprice-responsive-pricing-table' );
		} elseif ( $result->status != 'published' ) {
			return esc_html__( 'Please Select Valid Pricing Table', 'arprice-responsive-pricing-table' );
		} elseif ( $result->is_template == 1 ) {
			return '';
		}

		require_once ARPLITE_PRICINGTABLE_DIR . '/core/views/arprice_front.php';

		$contents = arplite_get_pricing_table_string( $table_id );

		$contents = apply_filters( 'arplite_predisplay_pricingtable', $contents, $table_id );

		if ( ! empty( $_REQUEST['action'] ) && ( 'elementor' == $_REQUEST['action'] || 'elementor_ajax' == $_REQUEST['action'] ) ) {
			do_action( 'arplite_load_assets_for_elementor', $table_id, sanitize_text_field($_REQUEST['action']) );
		}

		return $contents;

	}

	function arplite_load_assets_for_elementor_func( $table_id = '', $action = '' ) {

		global $wpdb, $arpricelite_version,$arplite_pricingtable,$arpricelite_assset_version;

		if ( ! empty( $table_id ) ) {

			$template_data = $wpdb->get_row( $wpdb->prepare( 'SELECT template_name,is_template FROM `' . $wpdb->prefix . 'arplite_arprice` WHERE ID = %d', $table_id ) );

			if ( ! empty( $template_data ) ) {
				$is_template = $template_data->is_template;
				if ( $is_template ) {
					wp_register_style( 'arplitetemplate_' . $template_data->template_name . '_css', ARPLITE_PRICINGTABLE_URL . '/css/templates/arplitetemplate_' . $template_data->template_name . '.css', array(), $arpricelite_version );
					wp_print_styles( 'arplitetemplate_' . $template_data->template_name . '_css' );

				} else {
					wp_register_style( 'arplitetemplate_' . $table_id . '_css', ARPLITE_PRICINGTABLE_UPLOAD_URL . '/css/arplitetemplate_' . $table_id . '.css', array(), $arpricelite_version );
					wp_print_styles( 'arplitetemplate_' . $table_id . '_css' );

				}
			}
		}
		wp_register_style( 'arplite_font_css_front', ARPLITE_PRICINGTABLE_URL . '/fonts/arp_fonts.css', array(), $arpricelite_assset_version );
		wp_print_styles('arplite_font_css_front');

		wp_register_script('arplite_front_js', ARPLITE_PRICINGTABLE_URL . '/js/arprice_front.js', array(), $arpricelite_assset_version);
        wp_print_scripts('arplite_front_js');

		wp_register_style( 'fontawesome', ARPLITE_PRICINGTABLE_URL . '/css/font-awesome.css', array(), $arpricelite_assset_version );

		
		if ( 'elementor_ajax' == $action  || 'elementor' == $action) {

			$arplite_pricingtable->arplite_front_assets( true );
			$arplite_pricingtable->arplite_front_inline_css_callback( $table_id, 0, true, $arplite_elementor = true );
		}

	}
}


