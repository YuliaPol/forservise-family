jQuery(function ($) {
    $(document).ready(function () {
        $('#add-field_section').on('click', function () {
            var chapter_id = $(this).data('id');
            var newChapter =
                '<div class="row" id="chapter-' + chapter_id + '">' +
                '    <div class="col-md-8">' +
                '        <div class="form-group">' +
                '            <input type="text"' +
                '                name="Section[description][' + chapter_id + ']"' +
                '                class="form-control" placeholder="Описание раздела">' +
                '        </div>' +
                '    </div>' +
                '    <div class="col-md-4">' +
                '        <div class="form-group">' +
                '            <span' +
                '                class="btn btn-primary btn-file upload-chapter-file">' +
                '                Загрузить... <input type="file"' +
                '                    name="Section[file][' + chapter_id + '][]"' +
                '                                multiple="">' +
                '            </span>' +
                '            <span class="file-name"></span>' +
                '        </div>' +
                '    </div>' +
                '    <div class="col-md-8">' +
                '        <div class="form-group">' +
                '            <input type="text" name="Section[link][' + chapter_id + ']"' +
                '                class="form-control"' +
                '                placeholder="Ссылка на источник ресурса">' +
                '        </div>' +
                '    </div>' +
                '    <div class="col-md-4">' +
                '        <div class="form-group">' +
                '            <div class="btn btn-danger btn-icon"' +
                '                onclick="popupDeleteChapter(&#39;chapter-' + chapter_id + '&#39;);">' +
                '                <i class="pli-close"></i>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
            $(this).data('id', chapter_id + 1);
            $(newChapter).appendTo('#box-curse-section');
        });
        $('.user-update-photo').change( function(e){
            var fileName = e.target.files[0].name;
            if (e.target.files && e.target.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('.preview-photo .user-photo img').attr('src', e.target.result);
                    $('.preview-photo').fadeIn();
                }
                reader.readAsDataURL(e.target.files[0]);
            }
            $(this).parents('.btn').next('.file-name').html(fileName);
        });
        $('#box-curse-section').on('change', '.upload-chapter-file input', function(e){
            var fileName = e.target.files[0].name;
            $(this).parents('.btn').next('.file-name').html(fileName);
        });
    });
    $('#questions-id_type_question').change( function(e){
        $('.block-params').css('display','none');
        $('.type-'+$(this).val()).css('display','block');
        $('.box-for-question').empty();
    });
    $('.form-add-question').on('click', '.add-new-any-question', function(){
        var idNewQuestion = $(this).data('id');
        var type = $('#questions-id_type_question').val();
        if(type == 2){
            var newQuestion = 
            '<div class="row pad-ver" id="'+ idNewQuestion +'">'+
            '    <div class="col-md-12">'+
            '        <div class="col-md-7">'+
            '            <input type="text" name="Question[name][' + idNewQuestion + ']" class="form-control" placeholder="Название ответа на вопрос">'+
            '        </div>'+
            '        <div class="col-md-1">'+
            '            <div class="checkbox">'+
            '                <input name="QuestionSave[mark_true][]" value="' + idNewQuestion +'" id="QuestionSave_' + idNewQuestion + '" class="magic-checkbox" type="checkbox">'+
            '                <label for="QuestionSave_' + idNewQuestion + '"></label>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-md-2">'+
            '            <div class="btn btn-danger  glyphicon glyphicon-remove"'+
            '            onclick="return popupDeleteQuestionDynamic(&#39;' + idNewQuestion +'&#39;)"'+
            '            ;=""></div>'+
            '        </div>'+
            '    </div>'+
            '</div>';
        }
        else {
            var newQuestion = 
            '<div class="row pad-ver" id="'+ idNewQuestion +'">'+
            '    <div class="col-md-12">'+
            '        <div class="col-md-7">'+
            '            <input type="text" name="Question[name][' + idNewQuestion + ']" class="form-control" placeholder="Название ответа на вопрос">'+
            '        </div>'+
            '        <div class="col-md-1">'+
            '            <div class="radio">'+
            '                <input class="magic-radio" type="radio" name="Question[mark_true][]" id="question_mark_' + idNewQuestion + '" value="' + idNewQuestion + '">'+
            '                <label for="question_mark_' + idNewQuestion +'"></label>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-md-2">'+
            '            <div class="btn btn-danger  glyphicon glyphicon-remove"'+
            '            onclick="return popupDeleteQuestionDynamic(&#39;' + idNewQuestion +'&#39;)"'+
            '            ;=""></div>'+
            '        </div>'+
            '    </div>'+
            '</div>';
        }
            $(this).data('id', idNewQuestion + 1);
            $(newQuestion).appendTo('.box-for-question');
    });
});