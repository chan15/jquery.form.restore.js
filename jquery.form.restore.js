(function($) {
    $.fn.formRestore = function(data) {
        return this.each(function() {
            $(this).find(':input').each(function() {
                var name = this.name;

                if (typeof(data[name]) !== 'undefined') {
                    var value = data[name]

                    switch (this.type) {
                        case 'text':
                        case 'textarea':
                        case 'hidden':
                            this.value = value;
                            break;
                        case 'radio':
                            $(this).prop('checked', (this.value == value));
                            break;
                        case 'checkbox':
                            if (value.indexOf(',') !== -1) {
                                var sp = value.split(',');

                                for (var i in sp) {
                                    if ($.trim(this.value) == $.trim(sp[i])) {
                                        $(this).prop('checked', true);
                                        break;
                                    } else {
                                        $(this).prop('checked', false);
                                    }
                                }
                            } else {
                                $(this).prop('checked', (this.value == value));
                            }
                            break;
                        case 'select-one':
                            $(this).find('option').each(function() {
                                $(this).prop('selected', ($(this).val() == value));
                            });
                            break;
                        case 'select-multiple':
                            $(this).find('option').each(function() {
                                if (value.indexOf(',') !== -1) {
                                    var sp = value.split(',');

                                    for (var i in sp) {
                                        if ($.trim($(this).val()) == $.trim(sp[i])) {
                                            $(this).prop('selected', true);
                                            break;
                                        } else {
                                            $(this).prop('selected', false);
                                        }
                                    }
                                } else {
                                    $(this).prop('selected', ($(this).val() == value));
                                }
                            });
                            break;
                    }
                }
            });
        });
    }
}(jQuery));
