/**
 * Created by 30947 on 2018/8/21.
 */
$(function(){
    getLableValue();
})
function getLableValue(){
    $(".input-group-btn .dropdown-menu li").click(function(){
        var val=$(this).text();
      $(this).parents(".input-group-btn").find(".dropdown-toggle").empty().append(val).append("<span class='caret'></span>");
    })
}