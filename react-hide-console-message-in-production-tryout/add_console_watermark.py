#!/usr/bin/env python3

import os,sys
from pprint import pprint
import shutil


body_end_tag = "</body>"
console_watermark = '''
  <script>
    console.image = function(url, size = 100) {
      var image = new Image();
      image.onload = function() {
        var style = [
          'font-size: 1px;',
          'padding: ' + this.height/1000*size + 'px ' + this.width/1000*size + 'px;',
          'background: url('+ url +') no-repeat;',
          'background-size: contain;',
          'border-radius: 50%;',
          'width: 115px;',
          'height: 115px;'
        ].join(' ');
        console.log('%c ', style);
      };
      image.src = url;
    };
    console.image(`https://avatars2.githubusercontent.com/u/1376093?v=4`);
    console.log('helloworld from html');
  </script>
'''
console_watermark_wo_newline = console_watermark.replace('\n','')

f_html_in = open('build/index.html','r+')
f_html_out = open('build/index.html.new','w')
new_f_html_in = ''.join(f_html_in.readlines()).replace("<body>","<body>"+console_watermark_wo_newline)

f_html_in.truncate(0)
f_html_out.writelines(new_f_html_in)


shutil.move('build/index.html','build/index.html.bak')
shutil.move('build/index.html.new','build/index.html')
