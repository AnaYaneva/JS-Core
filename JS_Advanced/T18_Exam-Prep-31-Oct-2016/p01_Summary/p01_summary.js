/**
 * Created by PC on 18.7.2017 г..
 */
function generateSummary(selector) {
   //$(selector).on('click',function () {
   //   let summaryContent=$('#content strong').text();
   //    createSummary(summaryContent);
   //});
//
   //function createSummary(summaryContent) {
   //    let summary=$('<div>');
   //    summary.attr('id', 'summary');
   //    let title=$('<h2>').text('Summary');
   //    let paragraph=$('<p>').text(summaryContent);
//
   //    summary.append(title);
   //    summary.append(paragraph);
//
   //    let parent=$('#content').parent();
   //    parent.append(summary);
   //}
    $(selector).on('click',function () {
        let strong = $('#content strong').text();

        let div = $('<div>').attr('id', 'summary');
        let h2 = $('<h2>').text('Summary');
        let p = $('<p>').text(strong);

        $(div).append(h2).append(p);
        $('#content').parent().append(div);
    });
}

