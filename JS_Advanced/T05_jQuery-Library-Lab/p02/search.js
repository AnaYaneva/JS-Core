/**
 * Created by PC on 30.6.2017 г..
 */
function search() {
   let pattern=$('#searchText').val();
   let matches=0;
    $('#towns li').each((index, town)=>{
        if(town.textContent.includes(pattern)){
            $(town).css('font-weight','bold');
            matches++;
        }else{
            $(town).css('font-weight','');
        }
    });
    $('#result').text(matches + " matches found.");
}
