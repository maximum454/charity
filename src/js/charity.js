//= partials/jquery.min.js
//= partials/jquery.arcticmodal-0.3.min.js
$(function () {
    $('.popap_box').click(function () {
        $('#modalbox_' + $(this).data('body')).arcticmodal({
            overlay: {
                css: {
                    backgroundColor: 'transparent'
                }
            }
        });
    });
});