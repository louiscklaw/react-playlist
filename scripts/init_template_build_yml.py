#!/usr/bin/env python3
import os,sys

print("helloworld")

SCRIPT_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.abspath(os.path.join(SCRIPT_DIR,'..'))
print(PROJ_HOME)

BUILD_YML_TEMPLATE='''
{tryout_dir}:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v2
    - run: |
        pushd {tryout_dir}
          yarn
          yarn build
        popd
'''.strip()

def listYmlFiles(path):
    output = []
    for root, dirs, files in os.walk(path):
      tryout_dirs = filter(lambda x: x.find('tryout') > 0, dirs)
      for tryout_dir in tryout_dirs:
        build_yml = '{}/{}/build.yml'.format(PROJ_HOME, tryout_dir)
        if (os.path.exists(build_yml)):
          output.append(build_yml)
    return output

yml_files = list(set(listYmlFiles(PROJ_HOME)))
# print(yml_files)

for yml_file in yml_files:
  with open(yml_file, 'r+') as f_yml_build:
    dir_name = os.path.dirname(yml_file).split('/')[-1]
    print(dir_name)
    # sys.exit()
    f_yml_build.truncate(0)
    f_yml_build.writelines(BUILD_YML_TEMPLATE.replace('{tryout_dir}',dir_name))
