#!/usr/bin/env python3

import os,sys
from pprint import pprint
from datetime import datetime

dirs = next(os.walk('.'))[1]

html_template='''
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<h1>last gen: {time_gen}</h1>
  <ul>
{subdirs}
  </ul>
</body>
</html>
'''.strip()

dir_link = '\n'.join(map(lambda x: '    <li><a href="{}">{}</a></li>'.format(x,x), next(os.walk('.'))[1]))

fo = open('./index.html','w')
fo.writelines(html_template.replace('{subdirs}',dir_link).replace('{time_gen}',datetime.now().strftime('%Y%m%d-%H%M%S')))
