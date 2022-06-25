import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
const TextEditor = ({field, data}) => {

    let textEditorId = document.getElementById('textEditor');
    //textEditorId.setAttribute('value', data[field.name])

    return (
        <>
            <input type="hidden" id={field.name} name={field.name} />
            {/* <!--textarea className="form-control" id={field.name} name={field.name} rows={3} defaultValue={data ? data[field.name] : ''} /> */}
            {data ? (
            <Editor
                apiKey='tdwc751ztd6i1lm1qc97lp3jqpbdt4ux10ebj4htza2x9g7v'
                onInit={(evt, editor) => {
                    //document.querySelector(`input[name="${field.name}"]`).value = editor.getContent()
                }}
                onChange={(evt, editor) => {
                    document.querySelector(`input[name="${field.name}"]`).value = editor.getContent()
                }}
                initialValue={data[field.name]}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                        'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
                        'media', 'table', 'emoticons', 'template', 'help', 'directionality'
                      ],
                    toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                    'forecolor backcolor emoticons | help | ltr rtl',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            ) : (
            <Editor
                id="textEditor"
                value={data ? data[field.name] : ''}
                apiKey='tdwc751ztd6i1lm1qc97lp3jqpbdt4ux10ebj4htza2x9g7v'
                onInit={(evt, editor) => document.querySelector(`input[name="${field.name}"]`).value = editor}
                onChange={(evt, editor) => {
                    document.querySelector(`input[name="${field.name}"]`).value = editor.getContent()
                }}
                init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                    'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
                    'media', 'table', 'emoticons', 'template', 'help', 'directionality'
                  ],
                toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                'forecolor backcolor emoticons | help | ltr rtl',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            )}
        </>
    )
}

export default TextEditor