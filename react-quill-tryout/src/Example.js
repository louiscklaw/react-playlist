import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const html_string_to_test = `
<h2><strong style=\"background-color: rgb(240, 102, 102); color: rgb(102, 185, 102);\">a</strong><sub style=\"background-color: rgb(240, 102, 102); color: rgb(102, 185, 102);\"><strong>p</strong></sub><sup style=\"background-color: rgb(240, 102, 102); color: rgb(102, 185, 102);\"><strong>p</strong></sup><strong style=\"background-color: rgb(240, 102, 102); color: rgb(102, 185, 102);\">le</strong></h2><p><br></p><p><strong style=\"color: rgb(255, 153, 0);\"><em><u>orange</u></em></strong></p><p><br></p><p>&lt;script&gt;alert('helloworld')&lt;/script&gt;</p><p><br></p><p>応9<sup>2勤常</sup>勉<sub>旋7</sub>2依</p><p><br></p><h1>レ端作67123312神フ測相りち挑坂ぶ。</h1><h2>応ハシカ向2捜せぽけリ覧郷ユヤワサ準助</h2><p>7子群メソマ直林無ノヱク総九るね法右み料生レソヱ犯2属</p><p>スタリチ海新志合のみル。落国がどゅト備初ワ成東真友ルノ多府イとレせ後</p><p>活ぱ力内せぞトん断社づけン経誓メノヨス人回ぞ</p><p>ぜど司介トの通長めドラ供警の深能か鈴</p><p>拠るより関達ツテ年撃とえふ桑夕阜じは</p><p><br></p>`


function MyComponent() {
  const [value, setValue] = useState(html_string_to_test);

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [ { 'header': 1 }, { 'header': 2 } ],

    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' } ],
    [{ 'direction': 'rtl' }],

    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']
  ];

  const modules = {
    toolbar: toolbarOptions
  }

  return (
    <>
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        />
    </div>

      <div dangerouslySetInnerHTML={{__html: value}}>

      </div>

      {JSON.stringify(value)}

    </>
  );
}

export default MyComponent