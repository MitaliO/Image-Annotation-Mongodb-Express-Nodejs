function addAnnotation(left, top, width, height, label) {
    var html = '<div class="entry">' +
        '<p class="line"><span class="boldme">Object: </span>' + label + '</p>' +
        '<p class="line"><span class="boldme">Corner: </span>' + left + 'x' + top + '</p>' +
        '<p class="line"><span class="boldme">Size: </span>' + width + 'x' + height + '</p>' +
        '</div>'
    $('#annotated_box').append(html);
}
