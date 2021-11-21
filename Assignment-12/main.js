function number(num){
    document.getElementById('display').value += num;
};
function equel(){
    $('#display').val(eval($('#display').val()));
};
function del(){
    var value = $('#display').val();
    $('#display').val(value.substring(0, value.length - 1));
};