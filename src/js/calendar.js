$(function() {
    calDateMatch();
    calDateMore();
});

// calendar - date - match popup : 경기 상세 팝업
var calDateMatch = function() {
    var popup = $('.month-data-popup');

    // open
    $('.month-data .date-content .match').on('click', function(e) {
        e.stopPropagation();
        $this = $(this);
        var offsetLeft = $this.offset().left + $this.width();
        if($this.closest('td').index() > 4) {
            offsetLeft = $this.offset().left - popup.outerWidth();
        }
        popup.removeClass('show')
            .offset({top: $this.offset().top + 10, left: offsetLeft + 20})
            .addClass('show');
    })
    
    // close
    popup.on('click', function(e) {
        e.stopPropagation();
    })
    $('body').on('click.closeDateMatch', function() {
        popup.removeClass('show');
    })
};

// calendar - date - more popup : 더보기 팝업
var calDateMore = function() {
    // open
    $('.date-content .more').on('click', function(e) {
        $('body').off('click.closeMore');
        $('.month-data .popup-copied').remove();
        e.stopPropagation();
        $this = $(this);
        $wrap = $this.closest('.date-wrap');
        $wrap.clone(true,true)
            .appendTo($wrap.parent())
            .removeClass().addClass('popup-copied');
        setTimeout(function() {
            $wrap.next().addClass('show')
        }, 100)

        // close
        $wrap.next().on('click', function(e) {
            e.stopPropagation();
        })
        $('body').on('click.closeMore', function() {
            $wrap.next('.popup-copied').remove();
        })
    })

    
};