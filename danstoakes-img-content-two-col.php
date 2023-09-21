<?php
/**
 * Plugin Name:       Image Content Two Column
 * Plugin URI:        https://github.com/danstoakes/2023-content-three-col-WP-block
 * Description:       Simple two column block for an image and content.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Dan Stoakes
 * License:           GPL-2.0-or-later
 * Text Domain:       danstoakes-img-content-two-col
 *
 * @package           danstoakes-img-content-two-col
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function danstoakes_img_content_two_col_block_init () {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'danstoakes_img_content_two_col_block_init' );
