$('document').ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  // 編輯的 Modal 事件
  $('#editModal').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget);
    var title = $(btn).data('title');
    var modal = $(this);
    modal.find('.modal-title').text(title); 
  });

  $('#removeModal').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget);
    var title = $(btn).data('title');
    var modal = $(this);
    modal.find('.modal-title').text('確認刪除 ' + title);
  })

  $('#checkModal').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget);
    var title = $(btn).data('title');
    var modal = $(this);
    modal.find('.modal-title').text(title);
  })
});