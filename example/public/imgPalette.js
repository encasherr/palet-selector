(function( $ ) {

    const containerHtml = `
    <div>
        This will contain  the image
    </div>
    `;
 
    $.fn.platify = function() {
 
        console.log('build html');
        this.append(containerHtml);
        return this;
 
    };
 
}( jQuery ));

