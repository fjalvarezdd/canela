templates.cameraView = "app/views/CameraView.html";

window.CameraView = Backbone.View.extend({

    title: "CANELA 2013",
    backLabel: "Atr\xe1s",

    initialize: function(options) {
        this.captureImage();
        this.view = this.$el;
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.cameraView);
        this.$el.html(template( { newImage:this.newImage } ));
        return this;
    },

    captureSuccess:function (mediaFiles) {
        var mediaFile = mediaFiles[0];

        path = mediaFile.fullPath;
        name = mediaFile.name;

        var options = new FileUploadOptions();
        options.fileKey="file";
        options.fileName=mediaFile.name;
        options.mimeType="image/jpeg";

        var params = new Object();
        params.fullpath = path;
        params.name = name;

        options.params = params;
        options.chunkedMode = false;

        setTimeout( function() {
            var ft = new FileTransfer();
            ft.upload( path, "http://canela.devaddiction.com/image_upload.php",
                function(result) {
                },
                function(error) {
                },
                options
            );
        }, 100 );
        this.newImage = path;
        this.render();
    },


    captureError:function (error) {
        var msg = 'Error subiendo la imagen. Intentalo de nuevo';
        navigator.notification.alert(msg, null, 'Uh oh!');
    },

    captureImage:function () {
        navigator.device.capture.captureImage(this.captureSuccess, this.captureError, { limit: 1 });
    }


});