function loadMathJax() { 
    var text = "";
    text += "<script type=\"text/x-mathjax-config\">";
    text += "  MathJax.Hub.Config({";
    text += "    extensions: [\"TeX/cancel.js\"],";
    text += "    tex2jax: {";
    text += "      inlineMath: [ ['$','$'] ],";
    text += "      displayMath: [ ['$$','$$'] ],";
    text += "      processEscapes: true";
    text += "    }";
    text += "  });";
    text += "<\/script>";
    text += "<script async ";
    text += "src='https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS_CHTML'>";
    text += "<\/script>";
    return text;
}


