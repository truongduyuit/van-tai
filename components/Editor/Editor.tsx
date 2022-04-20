import React, { useEffect, useRef, useState } from "react";

interface Props {
  onChange: (date: string) => void;
  name: string;
  value: string;
}

const Editor: React.FC<Props> = ({ onChange, name, value }) => {
  const editorRef = useRef(null);
  const { CKEditor, ClassicEditor }: any = editorRef.current || {};
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };

    setEditorLoaded(true);
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading...</div>
      )}
    </div>
  );
};

export { Editor };
