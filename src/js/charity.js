//= partials/jquery.min.js
//= partials/jquery.arcticmodal-0.3.min.js
$(function () {
    /*link*/
    $("a[href='#']").click(function () {
        return false;
    });

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