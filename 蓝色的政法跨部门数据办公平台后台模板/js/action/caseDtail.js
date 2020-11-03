/**
 * Created by 30947 on 2018/8/16.
 */
$(function(){
  divChange();
  formPub()
})
function formPub(){
  $("#partNme").focus(function(){
    $(".formPub").show();
  });
  $(document).click(function(e){
   if(e.target.id!="formPub"&& e.target.id!="partNme"){
     if($("#formPub").is(':visible')){
       $("#formPub").hide();
     }
   }
  })





}
function divChange(){
  $(".case_tail_tab a").click(function(){
    var ins=$(this).index();
    $(this).addClass("case_tail_active").siblings().removeClass("case_tail_active");
    $(".case_tail_con .case_tail_conDiv").eq(ins).show().siblings().hide();
  })
}
function hideFomr(){

 $(".case_tail_conDiv input,select").attr("disabled", "disabled");

}