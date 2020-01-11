( function( $ ) {
	wp.customize( 'name', function( value ) {
		value.bind( function( to ) {
			$( '.name a' ).text( to );
		} );
	} );
	wp.customize( 'description', function( value ) {
		value.bind( function( to ) {
			$( '.description' ).text( to );
		} );
	} );
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-name, '.description' ).css( {
					'clip': 'rect(2px, 2px, 2px, 2px)',
					'position': 'absolute'
				} );
			} else {
				$( '.name, .description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );

				$( '.name, .name a, .description, .description a' ).css( {
					color: to
				} );
			}
		} );
	} );
} )( jQuery );
