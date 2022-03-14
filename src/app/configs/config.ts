export const c1 = `{
  plugins: "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
  height: 600,
  toolbar:
    "insertfile undo redo | styles | bold italic | wordcount | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table help",
  mobile: {
    theme: "silver",
    plugins: "casechange link image lists advlist anchor code codesample preview table textpattern help wordcount",
    toolbar:
      " casechange bold italic underline strikethrough | wordcount numlist bullist | h1 h2 h3 | table preview code codesample help",
    contextmenu: "link image table preview",
  },
}`;

export const c2 = `{
  inline: true,
  plugins: "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help",
  toolbar:
    "insertfile undo redo | styles | bold italic | permanentpen | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table help",
  mobile: {
    theme: "silver",
    plugins: "casechange lists advlist anchor code codesample preview table textpattern help",
    toolbar:
      " casechange bold italic underline strikethrough | formatpainter numlist bullist | h1 h2 h3 | table preview code codesample help",
  },
}`;

export const c3 = `{
  plugins: "quickbars advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help",
  toolbar:
    "insertfile undo redo | styles | bold italic | permanentpen | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table help",
  quickbars_insert_toolbar:
    "quicktable quickimage quicklink styles ",
  quickbars_selection_toolbar:
    "bold italic | h2 h3 | blockquote | code| forecolor backcolor | quicktable quickimage | styles ",
  setup: function (editor) {
    editor.ui.registry.addContextToolbar("imagealignment", {
      predicate: function (node) {
        return node.nodeName.toLowerCase() === "img";
      },
      items: "alignleft aligncenter alignright | image",
      position: "node",
      scope: "node",
    });

    editor.ui.registry.addContextToolbar("textselection1", {
      predicate: function (node) {
        return !editor.selection.isCollapsed();
      },
      items: "blockquote | bold italic | removeformat",
      position: "selection",
      scope: "node",
    });
  },
  mobile: {
    theme: "silver",
    plugins: [
      "quickbars casechange lists advlist anchor code codesample preview table textpattern help",
    ],
    toolbar:
      " casechange bold italic underline strikethrough | formatpainter numlist bullist | h1 h2 h3 | table preview code codesample help",
    quickbars_insert_toolbar:
      "quicktable quickimage quicklink styles ",
    quickbars_selection_toolbar:
      "bold italic | forecolor backcolor | quicktable quickimage | styles ",
  },
}`;

export const c4 = `{
  plugins: "quickbars advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help",
  toolbar_mode: "sliding",
  toolbar_sticky: true,
  toolbar_location: "bottom",
  toolbar:
      "insertfile undo redo | styles | bold italic | permanentpen | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table help",
  quickbars_insert_toolbar:
      "quicktable quickimage quicklink styles ",
  quickbars_selection_toolbar:
      "bold italic | h2 h3 | blockquote | code| forecolor backcolor | quicktable quickimage | styles ",
}`;

export const c5 = `{
  plugins: [
    "advtable", "autoresize", "anchor", "advlist", "autolink", "autosave", "charmap", "advcode", "codesample", "directionality", "emoticons", "fullscreen",
    "help", "image", "insertdatetime", "importcss", "link", "lists", "media", "nonbreaking", "pagebreak", "preview", "save", "searchreplace", "table",
    "template", "visualblocks", "visualchars", "wordcount", "casechange", "checklist", "powerpaste", "a11ychecker", "tinymcespellchecker", "tinydrive",
    "tableofcontents", "editimage", "mentions", "mediaembed", "permanentpen", "formatpainter", "pageembed", "linkchecker", "tinycomments", "export"
  ],
  // The toolbar_mode option will no-longer accept the false value in TinyMCE 6.0, which was retained for backwards compatibility with the toolbar_drawer option. Use 'wrap' instead to keep the same functionality as false.
  // toolbar_mode : Default Value: 'floating' / Possible Values: 'floating', 'sliding', 'scrolling', or 'wrap'
  toolbar_mode: 'sliding',
  toolbar_sticky: true,
  toolbar_location: 'top', //top, bottom
  toolbar_sticky_offset: 10,
  // Tiny Comments
  tinycomments_mode: 'embedded',
  tinycomments_author: 'qauser8@qa.com',
  tinycomments_author_name: 'SuperCoolQA',
  quickbars_insert_toolbar: 'quicktable quickimage quicklink styles',
  quickbars_selection_toolbar: 'bold italic | h2 h3 | blockquote | code| forecolor backcolor | quicktable quickimage | formatpainter pageembed permanentpen styles ',
  toolbar: "bold italic underline strikethrough subscript superscript | fontfamily fontsize | numlist bullist checklist | permanentpen formatpainter removeformat forecolor backcolor | blockquote nonbreaking hr pagebreak | casechange styles blocks lineheight | ltr rtl outdent indent | align alignleft aligncenter alignright alignjustify alignnone | h1 h2 h3 h4 h5 h6 h7 |" +
    "copy cut paste pastetext selectall remove newdocument wordcount searchreplace | undo redo | save cancel restoredraft | fullscreen print preview export code help | template insertdatetime codesample emoticons charmap | anchor link unlink image media pageembed insertfile | visualblocks visualchars a11ycheck | spellchecker language spellcheckdialog | tableofcontents tableofcontentsupdate | " +
    "table advtablerownumbering tableclass tablecellclass tablecellvalign tablecellborderwidth tablecellborderstyle tablecaption tablecellbackgroundcolor tablecellbordercolor tablerowheader tablecolheader",
  menubar: 'file edit insert view format table tools help',
  mobile: {
    theme: "silver",
    plugins: [
      "casechange link image lists advlist anchor code codesample preview table textpattern help autoresize wordcount",
    ],
    toolbar:
      " casechange bold italic underline strikethrough | wordcount numlist bullist | h1 h2 h3 | table preview code codesample help",
    contextmenu: "link image table preview",
  },
}`;

const templates = {
  project_description: `
    <h1>Project title</h1>
    <p>Provide an overview of the project, the desired outcome and the steps involved</p>
    <h2>Project details</h2>
    <table style="border-collapse: collapse; width: 100%;" border="1">
        <tbody>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">Project Manager</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">Firstname Lastname</span></td>
            </tr>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">Start date</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">YYYY-MM-DD</span></td>
            </tr>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">End date</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">YYYY-MM-DD</span></td>
            </tr>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">Team</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">Team name</span></td>
            </tr>
        </tbody>
    </table>
    <h2>Project content</h2>
    <p>Continue writing your project documentations here</p>
  `,
  meeting_minutes: `
    <h1>Meeting minutes</h1>
    <table style="border-collapse: collapse; width: 100%;" border="1">
        <tbody>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">Project</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">Firstname Lastname</span></td>
            </tr>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">Date</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">YYYY-MM-DD</span></td>
            </tr>
        </tbody>
    </table>
    <h2>Participants</h2>
    <ul>
        <li>Participant 1</li>
        <li>Participant 2</li>
    </ul>
    <h2>Agenda</h2>
    <p>The following topics were discussed during the meeting</p>
    <h3>Topic 1</h3>
    <p>Topic description</p>
    <h2>Action points</h2>
    <ul>
        <li>Action item 1</li>
        <li>Action item 2</li>
    </ul>
  `,
  replacement_value_example: `
    <h1>Test report</h1>
    <p><span style="background-color: #fbeeb8;">The values in the table is dynamically generated using the template plugin
            replacement values</span></p>
    <table style="border-collapse: collapse; width: 100%;" border="1">
        <tbody>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">Test subject</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">{$username}</span></td>
            </tr>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">Date</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;" class="cdate">date</span></td>
            </tr>
            <tr style="height: 22px;">
                <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                        style="font-size: 10pt;">ID</span></th>
                <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">{$userid}</span></td>
            </tr>
        </tbody>
    </table>
    <h2>Test result</h2>
    <p>Enter test results here</p>
  `,
  blank_template: ""
};

const contentStyle = `
body {
  max-width: 720px;
  margin: 2rem auto;
}

#placeholder {
  color: #aaa;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4rem);
  -webkit-user-select: none;
  /* Prevent any selections on the element */
  user-select: none;
}

#placeholder * {
  -webkit-user-select: none;
  /* Prevent any selections on the element */
  user-select: none;
}

#placeholder h1 {
  margin: 0;
}

#placeholder button {
  -webkit-appearance: none;
  background: url('images/template-icon-document.png') .25rem center no-repeat transparent;
  background-size: 20px 20px;
  border-radius: .25rem;
  border: none;
  color: #aaa;
  cursor: default;
  display: block;
  font-family: inherit;
  font-size: 1rem;
  margin: .15rem -.25rem;
  outline: none;
  padding: .35rem .35rem .35rem calc(.5rem + 20px);
  text-align: left;
  transition: background-color .2s;
  cursor: pointer;
}

#placeholder button:hover {
  background-color: #f4f4f4;
}

#placeholder button.new-doc {
  background-image: url('images/template-icon-new-document.png');
}

#placeholder button.manage {
  background-image: url('images/template-icon-manage.png');
}`;

export const c6 = `{
  selector: "textarea.t6",
  // The template plugin is needed to use the replace values feature
  // to make dynamic templates (though there is many ways to achieve
  // dynamic templates.).
  // Tip! To make TinyMCE leaner, only include the plugins you actually need
  plugins: "link lists code visualblocks table image template",
  // Nothing special about the toolbar in this demo.
  toolbar: "undo redo | styles | bold italic strikethrough backcolor | bullist numlist link image hr | code",
  // Tip! The height option accepts any valid CSS for height
  height: "calc(100vh - 4rem)",
  // The template plugin allows inserting variables inside a template which is
  // then replaced with these values upon insertion. This is one way to
  // achieve dynamic templates. Another way would be to generate the whole template
  // dynamically upon request in case the template_replace_values can be removed.
  // https://www.tiny.cloud/docs/plugins/template/#template_replace_values
  template_replace_values: {
    username: "Jack Black",
    userid: "991234-22"
  },
  // A simple way to get dates into the templates is using the creation date feature
  // of the template plugin.
  // https://www.tiny.cloud/docs/plugins/template/#template_cdate_classes
  template_cdate_classes: "cdate creationdate",
  setup: function setup(editor) {
    const templates = ${JSON.stringify(templates)};
    // When the editor is clicked we monitor what is being clicked and
    // take appropriate actions. This is how we dedect if a insert template
    // button has been clicked. This event is triggered for every click inside
    // TinyMCE.
    // https://www.tiny.cloud/docs/advanced/events/

    editor.on("click", function (e) {
      // Check if the content contains the placeholder inserted above.
      // The get() function looks for an id attribute.
      // https://www.tiny.cloud/docs/api/tinymce.dom/tinymce.dom.domutils/#get
      var placeholderExists = editor.dom.get("placeholder"); // If a button html element is being clicked this would return true which.

      var button = editor.dom.getParent(e.target, "button");

      if (placeholderExists) {
        // If a insert button is button is being clicked or to proceed with an
        // empty document.
        if (button) {
          // In our demo we have a button that manages templates (a feature you have
          // to build yourself). We first check if that is the button being clicked.
          // If not, it means we want to insert a template.
          if (button.id === "manage_templates") {
            alert("Managing templates is done by the host app (not part of tinymce)");
          } else {
            //
            // If replacement values is not needed, then setContent can be used.
            // This also means we're not using the template plugin so all references
            // to it can be removed. Remove the alternative insert template block
            // below.
            //

            /*
                      // Inject the template into the content, replacing the placeholder
                      // https://www.tiny.cloud/docs/api/tinymce/tinymce.editor/#setcontent
                      editor.setContent(templates[button.id]);
                      // Optionally set the cursor at the beginning of the document
                      editor.selection.setCursorLocation(editor.getBody().firstChild, 0);
                      // Optionally scroll the document to the top if the template is larger
                      // than the editor viewport.
                      editor.getWin().scrollTo(0, 0);
                      */
            //
            // Use the template plugin to get replace values working (variables
            // inside templates).
            //
            // Remove all content from the editor
            editor.setContent(""); // Force set the selection at the beginning of the empty document where
            // we want the template to be inserted
            // https://www.tiny.cloud/docs/api/tinymce.dom/tinymce.dom.selection/#setcursorlocation

            editor.selection.setCursorLocation(editor.getBody().firstChild, 0); // Insert the template
            // https://www.tiny.cloud/docs/plugins/template/#commands

            editor.execCommand("mceInsertTemplate", false, templates[button.id]); // Optionally once again set the cursor at the beginning of the document (optional)

            editor.selection.setCursorLocation(editor.getBody().firstChild, 0); // Optionally scroll to the top if the inserted template is larger than
            // the editor viewport

            editor.getWin().scrollTo(0, 0);
          }
        } else {
          // In this demo we want to start an empty document with a title.
          // This does not force having a title for a document, it's simply
          // a convenience feature.
          editor.setContent("<h1><br></h1>");
        }
      }
    });
    editor.on("preinit", function () {
      // To prevent the placeholder to be submitted out of TinyMCE we
      // remove it upon serialization. In this case, any <div> tag
      // will be removed, so adapt it to your needs.
      // https://www.tiny.cloud/docs/api/tinymce.dom/tinymce.dom.serializer/#addnodefilter
      editor.serializer.addNodeFilter("div", function (nodes) {
        nodes.forEach(function (node) {
          node.remove();
        });
      });
    });
  },
  content_style: "${contentStyle}"
}`;