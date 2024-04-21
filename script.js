document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    displayCV(); 
});
function createFile(content){
  
    var file = new File(["\\"+content], 'CV.html', {type: "text/plain:charset=UTF-8"});
    url = window.URL.createObjectURL(file);
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
}
function displayCV() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var summary = document.getElementById('summary').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;

    var cvContent = document.getElementById('cvContent');
    cvContent.innerHTML = ''; 

    var fullNameElement = document.createElement('p');
    fullNameElement.textContent = 'Full Name: ' + fullName;

    var emailElement = document.createElement('p');
    emailElement.textContent = 'Email: ' + email;

    var phoneElement = document.createElement('p');
    phoneElement.textContent = 'Phone: ' + phone;

    var addressElement = document.createElement('p');
    addressElement.textContent = 'Address: ' + address;

    var summaryElement = document.createElement('p');
    summaryElement.textContent = 'Summary: ' + summary;

    var experienceElement = document.createElement('p');
    experienceElement.textContent = 'Experience: ' + experience;

    var educationElement = document.createElement('p');
    educationElement.textContent = 'Education: ' + education;

    

    cvContent.appendChild(fullNameElement);
    cvContent.appendChild(emailElement);
    cvContent.appendChild(phoneElement);
    cvContent.appendChild(addressElement);
    cvContent.appendChild(summaryElement);
    cvContent.appendChild(experienceElement);
    cvContent.appendChild(educationElement);

    document.getElementById('cvDisplay').style.display = 'block';


    document.getElementById('cvForm').style.display = 'none';
    var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
    var content = content + '<html>'
    var content = content + '<head>'
    
    var content = content + '   <title>Jonathan Doe | Web Designer, Director | name@yourdomain.com</title>'
    var content = content + '   <meta http-equiv="content-type" content="text/html; charset=utf-8" />'
    
    var content = content + '   <meta name="keywords" content="" />'
    var content = content + '   <meta name="description" content="" />'
    var content = content + '   <style>'
            
    var content = content +'.msg { padding: 10px; background: #222; position: relative; }'
    var content = content +'.msg h1 { color: #fff;  }'
    var content = content +'.msg a { margin-left: 20px; background: #408814; color: white; padding: 4px 8px; text-decoration: none; }'
    var content = content +'.msg a:hover { background: #266400; }'
    
    /* //-- yui-grids style overrides -- */
    var content = content +'body { font-family: Georgia; color: #444; }'
    var content = content +'#inner { padding: 10px 80px; margin: 80px auto; background: #f5f5f5; border: solid #666; border-width: 8px 0 2px 0; }'
    var content = content +'.yui-gf { margin-bottom: 2em; padding-bottom: 2em; border-bottom: 1px solid #ccc; }'
    /* //-- header, body, footer -- */
    var content = content +'#hd { margin: 2.5em 0 3em 0; padding-bottom: 1.5em; border-bottom: 1px solid #ccc }'
    var content = content +'#hd h2 { text-transform: uppercase; letter-spacing: 2px; }'
    var content = content +'#bd, #ft { margin-bottom: 2em; }'
    
    /* //-- footer -- */
    var content = content +'#ft { padding: 1em 0 5em 0; font-size: 92%; border-top: 1px solid #ccc; text-align: center; }'
    var content = content +'#ft p { margin-bottom: 0; text-align: center;   }'
    
    /* //-- core typography and style -- */
    var content = content +'#hd h1 { font-size: 48px; text-transform: uppercase; letter-spacing: 3px; }'
    var content = content +'h2 { font-size: 152% }'
    var content = content +'h3, h4 { font-size: 122%; }'
    var content = content +'h1, h2, h3, h4 { color: #333; }'
    var content = content +'p { font-size: 100%; line-height: 18px; padding-right: 3em; }'
    var content = content +'a { color: #990003 }'
    var content = content +'a:hover { text-decoration: none; }'
    var content = content +'strong { font-weight: bold; }'
    var content = content +'li { line-height: 24px; border-bottom: 1px solid #ccc; }'
    var content = content +'p.enlarge { font-size: 144%; padding-right: 6.5em; line-height: 24px; }'
    var content = content +'p.enlarge span { color: #000 }'
    var content = content +'.contact-info { margin-top: 7px; }'
    var content = content +'.first h2 { font-style: italic; }'
    var content = content +'.last { border-bottom: 0 }'
    
    
    /* //-- section styles -- */
    
    var content = content +'a#pdf { display: block; float: left; background: #666; color: white; padding: 6px 50px 6px 12px; margin-bottom: 6px; text-decoration: none;  }'
    var content = content +'a#pdf:hover { background: #222; }'
    
    var content = content +'.job { position: relative; margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }'
    var content = content +'.job h4 { position: absolute; top: 0.35em; right: 0 }'
    var content = content +'.job p { margin: 0.75em 0 3em 0; }'
    
    var content = content +'.last { border: none; }'
    var content = content +'.skills-list ul { margin: 0; }'
    var content = content +'.skills-list li { margin: 3px 0; padding: 3px 0; }'
    var content = content +'.skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }'
    var content = content +'.talent { width: 32%; float: left }'
    var content = content +'.talent h2 { margin-bottom: 6px; }'
    
    var content = content +'#srt-ttab { margin-bottom: 100px; text-align: center;  }'
    var content = content +'#srt-ttab img.last { margin-top: 20px }'
    
    /* --// override to force 1/8th width grids -- */
    var content = content +'.yui-gf .yui-u{width:80.2%;}'
    var content = content +'.yui-gf div.first{width:12.3%;}'
    
    
    
    var content = content +   '</style>'
    var content = content +'</head>'
    var content = content +'<body>'
    
    var content = content +' <div id="doc2" class="yui-t7">'
    var content = content +    '<div id="inner">'
        
    var content = content +        '<div id="hd">'
    var content = content +           '<div class="yui-gc">'
    var content = content +               '<div class="yui-u first">'
    var content = content +                   '<h1>'+fullName+'</h1>'
    var content = content +                '</div>'
    
    var content = content +              ' <div class="yui-u">'
    var content = content +                    '<div class="contact-info">'
    var content = content +                        '<h3><a href="mailto:'+email+'">'+email+'</a></h3>'
    var content = content +                        '<h3>'+phone+'</h3>'
    var content = content +                    '</div><!--// .contact-info -->'
    var content = content +                '</div>'
    var content = content +            '</div><!--// .yui-gc -->'
    var content = content +       '</div><!--// hd -->'
    
    var content = content +        '<div id="bd">'
            var content = content +           '<div id="yui-main">'
            var content = content +                '<div class="yui-b">'
    
            var content = content +                  ' <div class="yui-gf">'
            var content = content +                      '<div class="yui-u first">'
            var content = content +                         '<h2>Summary</h2>'
            var content = content +                     '</div>'
                            var content = content +                     '<div class="yui-u">'
                            var content = content +                      '<p class="enlarge">'
                            var content = content +                        summary
                                   var content = content +                     '</p>'
                                   var content = content +                '</div>'
                                   var content = content +           ' </div><!--// .yui-gf -->'
    
    
                                    var content = content +   '<div class="yui-gf">'
        
                                    var content = content +   '<div class="yui-u first">'
                                    var content = content +       '<h2>Experience</h2>'
                                    var content = content +   '</div><!--// .yui-u -->'
                                    var content = content +  experience
                                    var content = content +   '</div><!--// .yui-gf -->'
    
    
                                    var content = content +   '<div class="yui-gf last">'
                                    var content = content +     '<div class="yui-u first">'
                                    var content = content +       '<h2>Education</h2>'
                                    var content = content +   '</div>'
                                    var content = content +  education
                                var content = content +    '</div><!--// bd -->'
    
                                var content = content +    '<div id="ft">'
                                var content = content +        '<p>'+fullName+' &mdash; <a href="mailto:'+email+'">'+email+'</a> &mdash; '+phone+'</p>'
                                var content = content +    ' </div><!--// footer -->'
    
                                var content = content +   '</div><!-- // inner -->'
    
    
                                var content = content +  '</div><!--// doc -->'
    
    
                                var content = content +  '</body>'
                                var content = content +  '</html>'
    
    
    createFile(content)
}

function editCV() {
    document.getElementById('cvDisplay').style.display = 'none';

    document.getElementById('cvForm').style.display = 'block';
}
