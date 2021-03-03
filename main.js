function Search(text){
    $(".keyword_list").each(function(index, element){
        let keyword = $(element).text();
        // console.log(keyword);
        bool = true
        if(keyword.match(text) === null){
            // console.log("null");
            bool = false
        }else{
            // console.log("not null");
            bool = true
        }
        if(bool === false){
            $(element).parent().css("display", "none");
        }else{
            $(element).parent().css("display", "block");
        }
    });
        
}


$("#input_text").on('input', function(event){
    let text = $("#input_text").val();
    // console.log(text)
    if(text === ""){
        $(".filter_img").css("display", "block");
    }else{
        Search(text);
    }
})