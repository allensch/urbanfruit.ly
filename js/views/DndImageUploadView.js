(function() {
  Ember.TEMPLATES["dnd-image-upload"] = App.Templates.get("dnd-image-upload");

  App.DndImageUploadView = Ember.View.extend({
    templateName: "dnd-image-upload",
    didInsertElement: (function() {
      var dragAndDropView, dropZone, lambdaFunc;

      console.log("DID INSERT VIEW!!!!!!!");
      console.log(this);
      dropZone = this.$("#filedrop")[0];
      dragAndDropView = this;
      lambdaFunc = (function(evt) {
        return dragAndDropView.handleFileSelect(evt, dragAndDropView);
      });
      dropZone.addEventListener("dragover", this.handleDragOver, false);
      dropZone.addEventListener("drop", lambdaFunc, false);
      dropZone.addEventListener("dragenter", this.handleDragEnter, false);
      return dropZone.addEventListener("dragleave", this.handleDragLeave, false);
    }),
    handleDragOver: (function(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      evt.dataTransfer.dropEffect = "copy";
    }),
    handleDragEnter: (function(evt) {
      $(this).addClass('highlight-div-drag-enter');
    }),
    handleDragLeave: (function(evt) {
      $(this).removeClass('highlight-div-drag-enter');
    }),
    handleFileSelect: (function(evt, viewObj) {
      var fileDropTarget, files, reader;

      evt.stopPropagation();
      evt.preventDefault();
      $(this).removeClass('highlight-div-drag-enter');
      files = evt.dataTransfer.files;
      reader = new FileReader();
      fileDropTarget = $(this);
      reader.onload = (function(theFile) {
        return function(e) {
          fileDropTarget.attr("src", e.target.result);
        };
      })(files[0]);
      reader.readAsDataURL(files[0]);
      viewObj.get('controller').send('fileSelected', files[0]);
    }),
    dataURItoBlob: (function(dataURI) {
      var array, binary, i;

      binary = atob(dataURI.split(",")[1]);
      array = [];
      i = 0;
      while (i < binary.length) {
        array.push(binary.charCodeAt(i));
        i++;
      }
      return new Blob([new Uint8Array(array)], {
        type: "image/jpeg"
      });
    })
  });

}).call(this);
