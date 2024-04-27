<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'company' );

/** Database username */
define( 'DB_USER', 'admin1' );

/** Database password */
define( 'DB_PASSWORD', 'admin1' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'f$/]QtD~Y)ZM_0y$v&(O1Z&)f7q%{DU)u*j$a<wEwWZ04$$H!sd[3W7PFkJ-=kp*' );
define( 'SECURE_AUTH_KEY',  'Y!j/~6totR-}4rLW8KnvF(f+zyJ8jwCg}KCtLVMf|d|*ZiL*(tq:[$zrtco9$(ic' );
define( 'LOGGED_IN_KEY',    ',-hKWkm/Ak{E+Z5B>H_w+d%IWaJ}(61/Qyw<x(n!qw2Vex#v9a>sRJI?||2YSTQF' );
define( 'NONCE_KEY',        '} r(KSj)J:;F4b=|qp;%w?auZt_<{0KXN$MA*dd%=7x%^/xf.V(W_A_!]Ac ]Oes' );
define( 'AUTH_SALT',        'Z2swd&,?8%>*Wi56xqr~TXy$/>sUBFJ<RO&nrI1q90HQzG7Frr?&+/<+{u]*`=Wg' );
define( 'SECURE_AUTH_SALT', 'l6O$G^+eL`([V%y^YOF@4I4U/(kixwI]!lY4|tutoI!B!0~g)jC9Iyw*nj7=:%~S' );
define( 'LOGGED_IN_SALT',   'M0oYJrR%ykBu/S9-Thk.ux37 hw[5zqh58b#Za4H4II8v npOJPK7B51_zA?ltT^' );
define( 'NONCE_SALT',       'Xle}L}[Sz,VBbMSBtu_b3ie[QR=|0RlyE6.MZDr}mU~z!*7GB^<%FrcZL[_U 4^I' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
